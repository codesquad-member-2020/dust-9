import {fetchRequest} from "../util/fetchrequest.js"
import CLASS_NAME from "../constants/className.js"

let _startX = 0;
let _pivotX = 0;
let _animationTimer = null;

const render = () => {
    const content = document.querySelector(".content");
    const dustForecast = `<div class="dustForecast">
    <div class="dustForecast">
    <div class="imageArea">
    </div>
    <div class="informOverall">
    </div>
    <div class="informGrade">
    </div>
    <div class="controll">
      <div class="playpause">
        <input class="toggleButton" type="checkbox" value="None" id="playpause" name="check" />
        <label for="playpause"></label>
      </div>
      <div class="scrollBar">
        <div class="bar"></div>
        <button class="indicator"></button>
      </div>
    </div>
  </div>`;

  content.innerHTML = dustForecast;
}

const init = () => {
    //fetchRequest("https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/information", "GET")
    fetchRequest("https://dev-angelo.dlinkddns.com:8090/information", "GET")
    .then(response => response.json())
    .then(data => {
        const informOverall = document.querySelector(".informOverall");
        const informGrade = document.querySelector(".informGrade");

        informOverall.innerHTML = renderInformation(data.informOverall);
        informGrade.innerHTML = renderInformation(data.informGrade);
    });

    //fetchRequest("https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/images", "GET")
    fetchRequest("https://dev-angelo.dlinkddns.com:8090/images", "GET")
    .then(response => response.json())
    .then(data => {
        const imageArea = document.querySelector(".imageArea");
        imageArea.innerHTML = renderImage(data.images);
        registerEventListener();
        moveIndicator();
    });
}

const stopIndicator = () => {
    const indicator = document.querySelector('.indicator')
    _pivotX = parseInt(indicator.style.marginLeft);
    clearTimeout(_animationTimer);
}

const moveIndicator = () => {
    let leftpos = _pivotX
    const fps = 60
    function movediv(timestamp) {
        _animationTimer = setTimeout(function () {
            leftpos += 1
            changeIndicatorPosition(leftpos);

            if (leftpos < 299) {
                requestAnimationFrame(movediv)
            }
        }, 3000 / fps)
    }

    requestAnimationFrame(movediv)
}

const registerEventListener = () => {
    const scrollBar = document.querySelector(".scrollBar");
    const playpause = document.querySelector(".playpause");
    const button = document.querySelector(".scrollBar button");
    button.style.marginLeft = '0px';

    scrollBar.addEventListener('touchstart', evt => {
        stopIndicator();

        if (evt.target.className === CLASS_NAME.DUST_FORECAST.INDICATOR) {
            indicatorTouchStartHandler(evt);
        }
    });

    scrollBar.addEventListener('touchmove', evt => {
        if (evt.target.className === CLASS_NAME.DUST_FORECAST.INDICATOR) {
            indicatorTouchMoveHandler(evt);
        }
    });

    scrollBar.addEventListener('touchend', evt => {
        if (evt.target.className === CLASS_NAME.DUST_FORECAST.INDICATOR) {
            indicatorTouchEndHandler(evt);
        }
        else if (evt.target.className === CLASS_NAME.DUST_FORECAST.BAR) {
            barTouchEndHandler(evt);
        }
    });

    playpause.addEventListener('touchend', evt => {
        playPauseTouchEndHandler(evt.target.previousElementSibling)
    })
}

const playPauseTouchEndHandler = evt => {
    if (evt.checked === true) {
        moveIndicator();
    }
    else {
        stopIndicator();
    }
}

const barTouchEndHandler = evt => {
    const calculatedValue = evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left;
    _pivotX = calculatedValue;
    changeIndicatorPosition(evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left);
}

const indicatorTouchStartHandler = evt => {
    _startX = evt.touches[0].clientX;
    _pivotX = parseInt(evt.target.style.marginLeft);
}

const indicatorTouchMoveHandler = evt => {
    const calculatedValue = evt.touches[0].clientX - _startX + _pivotX;

    changeIndicatorPosition(calculatedValue);
}

const indicatorTouchEndHandler = evt => {
    const calculatedValue = evt.changedTouches[0].clientX - _startX + _pivotX;
    _pivotX = calculatedValue;
}

const changeIndicatorPosition = xPosition => {
    let cvtXPosition = xPosition;

    if (cvtXPosition > 300) {
        cvtXPosition = 299;
    }
    else if (cvtXPosition < 0) {
        cvtXPosition = 0;
    }

    const button = document.querySelector(".scrollBar button");
    button.style.marginLeft = cvtXPosition + 'px';
    
    const images = document.querySelectorAll(".imageArea img");
    const index = parseInt(cvtXPosition / (300 / 24));
 
    images.forEach((forecastImage, currentIndex) => {
        if (index !== currentIndex) {
            forecastImage.style = "display: none;"
        }
        else {
            forecastImage.style = "display: block;"
        }
    });
}

const renderInformation = (information) => {
    return `
    <p>
        ${information}
    </p>
    `;
}

const renderImage = (images) => {
    return `
    ${Object.keys(images).map(key => (
        `<img class="image" src="${images[key]}" style="display: ${key > 0 ? `none` : `block`};">\n`
    )).join('')}
    `;
}

export default {render, init, registerEventListener}