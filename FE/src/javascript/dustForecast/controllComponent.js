import CLASS_NAME from "../constants/className.js"
import {dustForecastData} from "../data/dustForecastData.js"

const initXPosition = 0;
let _startX = initXPosition;
let _pivotX = initXPosition;
let _animationTimer = null;

const render = () => {
    return `
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
    `;
}

const stop = () => {
  stopIndicator();

  _startX = initXPosition;
  _pivotX = initXPosition;
}

const stopIndicator = () => {
  clearTimeout(_animationTimer);
  _animationTimer = null;
  const indicator = document.querySelector('.indicator')
  _pivotX = parseInt(indicator.style.marginLeft);
}

const moveIndicator = () => {
  let leftpos = _pivotX
  const fps = 60

  function moveIndicator(timestamp) {
      _animationTimer = setTimeout(function () {
          leftpos += 1;
          dustForecastData.changeCurrentXPosition(leftpos);

          if (leftpos < 299) {
              requestAnimationFrame(moveIndicator)
          }
      }, 1000 / fps)
  }

  requestAnimationFrame(moveIndicator)
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
  dustForecastData.changeCurrentXPosition(evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left);
}

const indicatorTouchStartHandler = evt => {
  _startX = evt.touches[0].clientX;
  _pivotX = parseInt(evt.target.style.marginLeft);
}

const indicatorTouchMoveHandler = evt => {
  const calculatedValue = evt.touches[0].clientX - _startX + _pivotX;
  dustForecastData.changeCurrentXPosition(calculatedValue);
}

const indicatorTouchEndHandler = evt => {
  const calculatedValue = evt.changedTouches[0].clientX - _startX + _pivotX;
  _pivotX = calculatedValue;
}

const onNotifyCurrentXPositionChanged = (currentXPosition) => {
  const button = document.querySelector(".scrollBar button");
  button.style.marginLeft = currentXPosition + 'px';
}


export default {render, registerEventListener, moveIndicator, stop, onNotifyCurrentXPositionChanged}