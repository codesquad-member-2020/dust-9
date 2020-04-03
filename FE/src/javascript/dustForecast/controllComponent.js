import CLASS_NAME from "../constants/className.js"
import {dustForecastData} from "../data/dustForecastData.js"

const initXPosition = 0;
let _startXPosition = initXPosition;
let _previousXPosition = initXPosition;
let _animationTimer = null;
let _isPlaying = false;

const render = () => {
    return `
    <div class="controll">
      <div class="playpause">
        <img class="play" id="playPauseButton">
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

  _startXPosition = initXPosition;
  _previousXPosition = initXPosition;
}

const stopIndicator = () => {
  _isPlaying = false;
  togglePlayPauseImage(_isPlaying);

  clearTimeout(_animationTimer);
  _animationTimer = null;

  const indicator = document.querySelector('.indicator')
  _previousXPosition = parseInt(indicator.style.marginLeft);
}

const moveIndicator = () => {
  _isPlaying = true;
  togglePlayPauseImage(_isPlaying);
  let leftpos = _previousXPosition;
  const fps = 60;

  function moveIndicator(timestamp) {
      _animationTimer = setTimeout(function () {
          if (leftpos < 299) {
            leftpos += 1;
            dustForecastData.changeCurrentXPosition(leftpos);
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
    playPauseTouchEndHandler()
  })
}

const playPauseTouchEndHandler = () => {
  if (_isPlaying) {
    stopIndicator();
  }
  else {
    moveIndicator();
  }
}

const barTouchEndHandler = evt => {
  const calculatedValue = evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left;
  _previousXPosition = calculatedValue;
  dustForecastData.changeCurrentXPosition(evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left);
}

const indicatorTouchStartHandler = evt => {
  _startXPosition = evt.touches[0].clientX;
  _previousXPosition = parseInt(evt.target.style.marginLeft);
}

const indicatorTouchMoveHandler = evt => {
  const calculatedValue = evt.touches[0].clientX - _startXPosition + _previousXPosition;
  dustForecastData.changeCurrentXPosition(calculatedValue);
}

const indicatorTouchEndHandler = evt => {
  const calculatedValue = evt.changedTouches[0].clientX - _startXPosition + _previousXPosition;
  _previousXPosition = calculatedValue;
}

const onNotifyCurrentXPositionChanged = (currentXPosition) => {
  const button = document.querySelector(".scrollBar button");
  button.style.marginLeft = currentXPosition + 'px';
}

const togglePlayPauseImage = isPlaying => {
  const playPauseButton = document.getElementById("playPauseButton");
  playPauseButton.classList.remove(playPauseButton.classList);

  if (isPlaying) {
    playPauseButton.classList.add('pause');
  }
  else {
    playPauseButton.classList.add('play');
  }
}


export default {render, registerEventListener, moveIndicator, stop, onNotifyCurrentXPositionChanged}