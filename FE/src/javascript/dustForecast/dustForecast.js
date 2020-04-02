import {fetchRequest} from "../util/fetchrequest.js"
import {dustForecastData} from "../data/dustForecastData.js"
import {SERVICE_URL} from "../constants/serviceUrls.js"
import {MOCK_URL} from "../constants/mockUrls.js"
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

    requestInformationData();
    requestImageData();
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
        const informOverall = document.querySelector(".informOverall");
        const informGrade = document.querySelector(".informGrade");

        informOverall.innerHTML = informationComponent.renderInformation(data.informOverall);
        informGrade.innerHTML = informationComponent.renderInformation(data.informGrade);
    });
}

const requestImageData = () => {
    fetchRequest(MOCK_URL.IMAGES, "GET")
    .then(response => response.json())
    .then(data => {
        dustForecastData.changeImageCount(data.images.length);
        const imageArea = document.querySelector(".imageArea");
        imageArea.innerHTML = forecastImageComponent.renderImage(data.images);
        registerEventListener();
        controllComponent.moveIndicator();
    });
}

const stop = () => {
    controllComponent.stop();
}


export default {render, init, registerEventListener, stop}