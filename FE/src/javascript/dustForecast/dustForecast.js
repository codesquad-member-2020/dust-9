import {fetchRequest} from "../util/fetchrequest.js"
import {dustForecastData} from "../data/dustForecastData.js"
import {SERVICE_URL} from "../constants/serviceUrls.js"
import {MOCK_URL} from "../constants/mockUrls.js"
import {CACHE_KEY} from "../constants/forecastCacheInformation.js"
import forecastImageComponent  from "./forecastImageComponent.js"
import informationComponent  from "./informationComponent.js"
import controllComponent from "./controllComponent.js"

const components = [forecastImageComponent, informationComponent, controllComponent];

const render = () => {
    const content = document.querySelector(".content");
    const dustForecast = `
    <div class="dustForecast">
        ${forecastImageComponent.render()}
        ${informationComponent.render()}
        ${controllComponent.render()}
    </div>`;

  content.innerHTML = dustForecast;
}

const init = () => {
    components.forEach(component => {
        dustForecastData.registerObserver(component);
    });

    const cachedData = getCachedData();

    if (cachedData) {
        renderInformation(cachedData.CACHED_INFORMATION);
        renderImages(cachedData.CACHED_IMAGES);

        dustForecastData.changeImageCount(cachedData.CACHED_IMAGES.images.length);
        registerEventListener();
        controllComponent.moveIndicator();
    }
    else {
        const currentDateTime = getCurrentDateTime();
        localStorage.setItem(CACHE_KEY.LAST_FETCH_DATETIME, currentDateTime)
        
        requestInformationData();
        requestImageData();
    }
}

const registerEventListener = () => {
    components.forEach(component => {
        if (component.hasOwnProperty("registerEventListener")) {
            component.registerEventListener();
        }
    });
}

const requestInformationData = () => {
    fetchRequest(MOCK_URL.INFORMATION, "GET")
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(CACHE_KEY.FORECAST_INFORMATION, JSON.stringify(data))
        renderInformation(data);
    });
}

const requestImageData = () => {
    fetchRequest(MOCK_URL.IMAGES, "GET")
    .then(response => response.json())
    .then(data => {
        localStorage.setItem(CACHE_KEY.FORECAST_IMAGES, JSON.stringify(data))

        dustForecastData.changeImageCount(data.images.length);
        renderImages(data);
        registerEventListener();
        controllComponent.moveIndicator();
    });
}

const finalize = () => {
    controllComponent.stop();

    components.forEach(component => {
        dustForecastData.unregisterObserver(component);
    });
}

const renderInformation = data => {
    const informOverall = document.querySelector(".informOverall");
    const informGrade = document.querySelector(".informGrade");

    informOverall.innerHTML = informationComponent.renderInformation(data.informOverall);
    informGrade.innerHTML = informationComponent.renderInformation(data.informGrade);
}

const renderImages = data => {
    const imageArea = document.querySelector(".imageArea");
    imageArea.innerHTML = forecastImageComponent.renderImage(data.images);
}

const getCurrentDateTime = () => {
    const year = (new Date().getFullYear()).toString();
    const month = (new Date().getMonth()).toString();
    const day = (new Date().getDay()).toString();
    const hour = (new Date().getHours()).toString();
    const currentDateTime = year + month + day + hour;

    return currentDateTime;
}

const getCachedData = () => {
    const currentDateTime = getCurrentDateTime();
    const lastFetchDateTime = localStorage.getItem(CACHE_KEY.LAST_FETCH_DATETIME)
    const cachedInformation = localStorage.getItem(CACHE_KEY.FORECAST_INFORMATION);
    const cachedImages = localStorage.getItem(CACHE_KEY.FORECAST_IMAGES);

    if (lastFetchDateTime === currentDateTime && cachedInformation && cachedImages) {
        return {CACHED_INFORMATION: JSON.parse(cachedInformation), CACHED_IMAGES: JSON.parse(cachedImages)};
    }
}

export default {render, init, registerEventListener, finalize}