/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/javascript/main.js");
    /******/
})
    /************************************************************************/
    /******/ ({

    /***/ "./src/javascript/constants/className.js":
    /*!***********************************************!*\
      !*** ./src/javascript/constants/className.js ***!
      \***********************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar DUST_CONDITION = Object.freeze({});\nvar DUST_FORECAST = Object.freeze({\n  DUSTFORECAST_AREA: \"dustForecast\",\n  IMAGE_AREA: \"imageArea\",\n  IMAGE: \"image\",\n  INFORM_OVERALL: \"informOverall\",\n  INFORM_GRADE: \"informGrade\",\n  CONTROLL: \"controll\",\n  PLAY_PAUSE: \"playpause\",\n  TOGGLEBBUTTON: \"checkbox\",\n  SCROLLBAR: \"scrollBar\",\n  BAR: \"bar\",\n  INDICATOR: \"indicator\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  DUST_CONDITION: DUST_CONDITION,\n  DUST_FORECAST: DUST_FORECAST\n});\n\n//# sourceURL=webpack:///./src/javascript/constants/className.js?");

        /***/
    }),

    /***/ "./src/javascript/constants/forecastCacheInformation.js":
    /*!**************************************************************!*\
      !*** ./src/javascript/constants/forecastCacheInformation.js ***!
      \**************************************************************/
    /*! exports provided: CACHE_KEY */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CACHE_KEY\", function() { return CACHE_KEY; });\nvar CACHE_KEY = Object.freeze({\n  LAST_FETCH_DATETIME: 'lastFetchDateTime',\n  FORECAST_INFORMATION: 'forecastInformation',\n  FORECAST_IMAGES: 'forecastImages'\n});\n\n\n//# sourceURL=webpack:///./src/javascript/constants/forecastCacheInformation.js?");

        /***/
    }),

    /***/ "./src/javascript/constants/mockUrls.js":
    /*!**********************************************!*\
      !*** ./src/javascript/constants/mockUrls.js ***!
      \**********************************************/
    /*! exports provided: MOCK_URL */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOCK_URL\", function() { return MOCK_URL; });\nvar MOCK_URL = Object.freeze({\n  IMAGES: \"http://dust99.herokuapp.com/images\",\n  INFORMATION: \"http://dust99.herokuapp.com/information\",\n  LOCATION: \"http://dust99.herokuapp.com/location\"\n});\n\n\n//# sourceURL=webpack:///./src/javascript/constants/mockUrls.js?");

        /***/
    }),

    /***/ "./src/javascript/constants/serviceUrls.js":
    /*!*************************************************!*\
      !*** ./src/javascript/constants/serviceUrls.js ***!
      \*************************************************/
    /*! exports provided: SERVICE_URL */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SERVICE_URL\", function() { return SERVICE_URL; });\nvar SERVICE_URL = Object.freeze({\n  IMAGES: \"http://52.79.74.109:8080/images\",\n  INFORMATION: \"http://52.79.74.109:8080/information\",\n  LOCATION: \" http://52.79.74.109:8080/location\"\n});\n\n\n//# sourceURL=webpack:///./src/javascript/constants/serviceUrls.js?");

        /***/
    }),

    /***/ "./src/javascript/data/dustForecastData.js":
    /*!*************************************************!*\
      !*** ./src/javascript/data/dustForecastData.js ***!
      \*************************************************/
    /*! exports provided: dustForecastData */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dustForecastData\", function() { return dustForecastData; });\nvar dustForecastData = function () {\n  var minXPosition = 0;\n  var maxXPosition = 300;\n  var currentXPosition = 0;\n  var imageCount = 0;\n  var forecastDataObserver = [];\n  return {\n    registerObserver: function registerObserver(observer) {\n      forecastDataObserver.push(observer);\n    },\n    unregisterObserver: function unregisterObserver(observer) {\n      var object = forecastDataObserver.find(function (registeredObserber) {\n        return registeredObserber === observer;\n      });\n      var index = forecastDataObserver.indexOf(object);\n      if (index > -1) forecastDataObserver.splice(index, 1);\n    },\n    changeCurrentXPosition: function changeCurrentXPosition(position) {\n      if (currentXPosition === position) return;\n      var cvtXPosition = position;\n\n      if (cvtXPosition > maxXPosition) {\n        cvtXPosition = maxXPosition - 1;\n      } else if (cvtXPosition < minXPosition) {\n        cvtXPosition = minXPosition;\n      }\n\n      currentXPosition = cvtXPosition;\n      forecastDataObserver.forEach(function (observer) {\n        if (observer.hasOwnProperty(\"onNotifyCurrentXPositionChanged\")) observer.onNotifyCurrentXPositionChanged(currentXPosition);\n      });\n    },\n    getCurrentXPosition: function getCurrentXPosition() {\n      return currentXPosition;\n    },\n    changeImageCount: function changeImageCount(count) {\n      if (imageCount === count) return;\n      imageCount = count;\n      forecastDataObserver.forEach(function (observer) {\n        if (observer.hasOwnProperty(\"onNotifyImageCountChanged\")) observer.onNotifyImageCountChanged(imageCount);\n      });\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/javascript/data/dustForecastData.js?");

        /***/
    }),

    /***/ "./src/javascript/data/navigationData.js":
    /*!***********************************************!*\
      !*** ./src/javascript/data/navigationData.js ***!
      \***********************************************/
    /*! exports provided: navigationData */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigationData\", function() { return navigationData; });\nvar navigationData = function () {\n  var currentTabIndex = 0;\n  return {\n    changeCurrentTabIndex: function changeCurrentTabIndex(tabIndex) {\n      currentTabIndex = tabIndex;\n    },\n    getCurrentTabIndex: function getCurrentTabIndex() {\n      return currentTabIndex;\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/javascript/data/navigationData.js?");

        /***/
    }),

    /***/ "./src/javascript/dustCondition/dustCondition.js":
    /*!*******************************************************!*\
      !*** ./src/javascript/dustCondition/dustCondition.js ***!
      \*******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetchrequest.js */ \"./src/javascript/util/fetchrequest.js\");\n/* harmony import */ var _dustGraphComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dustGraphComponent.js */ \"./src/javascript/dustCondition/dustGraphComponent.js\");\n/* harmony import */ var _dustGradeSetting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dustGradeSetting.js */ \"./src/javascript/dustCondition/dustGradeSetting.js\");\n/* harmony import */ var _constants_serviceUrls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/serviceUrls.js */ \"./src/javascript/constants/serviceUrls.js\");\n\n\n\n\nvar fetchdata;\nvar currentIndex = 0;\nvar date = \"오늘 \";\n\nvar render = function render() {\n  var content = document.querySelector(\".content\");\n  var dustCondition = \"<div class=\\\"dustCondition\\\">\\n    <div class=\\\"dustInfo\\\">\\n    <div class=\\\"title\\\">\\uBBF8\\uC138\\uBA3C\\uC9C0 \\uC571</div> \\n      <div class=\\\"gradeEmoji\\\"></div>\\n      <div class=\\\"grade\\\"></div>\\n        <span class=\\\"dustValue\\\"></span>\\n        <span class=\\\"timeValue\\\"></span>\\n        <div class=\\\"measureStation\\\"><span class=\\\"stationName\\\"></span><span> \\uCE21\\uC815\\uC18C \\uAE30\\uC900</span></div>\\n    </div>\\n    <div class=\\\"dustGraph\\\">\\n      <ul>\\n      <li><div class=\\\"graph\\\"></div><span class=\\\"graphValue\\\"></span></li>\\n      </ul>\\n    </div>\\n    </div>\";\n  content.innerHTML = dustCondition;\n};\n\nvar init = function init() {\n  var requestURL = \"\".concat(_constants_serviceUrls_js__WEBPACK_IMPORTED_MODULE_3__[\"SERVICE_URL\"].LOCATION, \"?latitude=37.4756824&longitude=126.97742860000001\");\n  Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(requestURL, \"GET\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    fetchdata = data;\n    renderDustInfo(data, 0);\n    registerEventListener();\n  });\n};\n\nvar registerEventListener = function registerEventListener() {\n  var dustGraph = document.querySelector(\".dustGraph\");\n  dustGraph.addEventListener('scroll', function (e) {\n    var scrollTop = e.target.scrollTop;\n    var scrollLength = 208;\n    currentIndex = Math.floor(scrollTop / (scrollLength / fetchdata.dustValues.length));\n    if (currentIndex >= fetchdata.dustValues.length) return;\n    renderDustInfo(fetchdata, currentIndex);\n  });\n};\n\nfunction renderDustInfo(data, index) {\n  var gradeEmoji = document.querySelector(\".gradeEmoji\");\n  var grade = document.querySelector(\".grade\");\n  var dustValue = document.querySelector(\".dustValue\");\n  var timeValue = document.querySelector(\".timeValue\");\n  var stationName = document.querySelector(\".stationName\");\n  var dustInfo = document.querySelector(\".dustInfo\"); //미세먼지 등급\n\n  var gradeDisplay = _dustGradeSetting_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setGradeDisplay(data.dustValues[index].pm10Grade);\n  dustInfo.style.background = \"linear-gradient(to top,white, \".concat(gradeDisplay.background, \")\");\n  grade.innerHTML = gradeDisplay.grade;\n  gradeEmoji.innerHTML = gradeDisplay.emoji;\n  dustValue.innerHTML = data.dustValues[index].pm10Value + \"&micro;g/㎥\";\n  stationName.innerHTML = data.stationName;\n  if (data.dustValues[index].datetime === \"24\") date = \"어제 \";\n  if (data.dustValues[index].datetime === \"01\") date = \"오늘 \";\n  timeValue.innerHTML = date + data.dustValues[index].datetime + \":00\"; //미세먼지 그래프\n\n  var dustGraph = document.querySelector(\".dustGraph\");\n  var graphUl = _dustGraphComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeGraphHTML(data);\n  dustGraph.innerHTML = graphUl;\n  _dustGraphComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeGraph(data);\n  var graph = document.querySelectorAll(\".graph\");\n  graph[index].style.opacity = \"0.5\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  init: init,\n  registerEventListener: registerEventListener\n});\n\n//# sourceURL=webpack:///./src/javascript/dustCondition/dustCondition.js?");

        /***/
    }),

    /***/ "./src/javascript/dustCondition/dustGradeSetting.js":
    /*!**********************************************************!*\
      !*** ./src/javascript/dustCondition/dustGradeSetting.js ***!
      \**********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar setGradeDisplay = function setGradeDisplay(gradeValue) {\n  var gradeDisplay = {\n    emoji: null,\n    grade: null,\n    background: null\n  };\n\n  switch (gradeDisplay, gradeValue) {\n    case \"1\":\n      gradeDisplay.emoji = \"😀\";\n      gradeDisplay.grade = \"좋음\";\n      gradeDisplay.background = \"#6096D8\";\n      gradeDisplay.graphColor = \"#0080FF\";\n      break;\n\n    case \"2\":\n      gradeDisplay.emoji = \"🙂\";\n      gradeDisplay.grade = \"보통\";\n      gradeDisplay.background = \"#088A68\";\n      gradeDisplay.graphColor = \"#04B404\";\n      break;\n\n    case \"3\":\n      gradeDisplay.emoji = \"😷\";\n      gradeDisplay.grade = \"나쁨\";\n      gradeDisplay.background = \"#FAAC58\";\n      gradeDisplay.graphColor = \"#FE9A2E\";\n      break;\n\n    case \"4\":\n      gradeDisplay.emoji = \"😱\";\n      gradeDisplay.grade = \"매우 나쁨\";\n      gradeDisplay.background = \"#FA5858\";\n      gradeDisplay.graphColor = \"#DF0101\";\n      break;\n  }\n\n  return gradeDisplay;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setGradeDisplay: setGradeDisplay\n});\n\n//# sourceURL=webpack:///./src/javascript/dustCondition/dustGradeSetting.js?");

        /***/
    }),

    /***/ "./src/javascript/dustCondition/dustGraphComponent.js":
    /*!************************************************************!*\
      !*** ./src/javascript/dustCondition/dustGraphComponent.js ***!
      \************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dustGradeSetting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dustGradeSetting.js */ \"./src/javascript/dustCondition/dustGradeSetting.js\");\n\n\nvar makeGraphHTML = function makeGraphHTML(data) {\n  var graphLi = data.dustValues.reduce(function (render, dustValue) {\n    return render += \" <li class=\\\"graphLi\\\"><div class=\\\"graph\\\">\".concat(dustValue.pm10Value, \"</div></li>\");\n  }, \"\");\n  return \"<ul>\".concat(graphLi, \"</ul>\");\n};\n\nvar makeGraph = function makeGraph(data) {\n  var graph = document.querySelectorAll(\".graph\");\n  var graphLi = document.querySelectorAll(\".graphLi\");\n\n  for (var i = 0; i < graph.length; i++) {\n    var graphWidth = graphLi[i].offsetWidth;\n    var dustValue = Number(data.dustValues[i].pm10Value);\n    var valueWidth = graphWidth / 200 * dustValue;\n    var gradeDisplay = _dustGradeSetting_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setGradeDisplay(data.dustValues[i].pm10Grade);\n    if (Math.round(valueWidth) >= graphWidth) valueWidth = graphWidth - 1;\n    graph[i].style.width = \"\".concat(valueWidth, \"px\");\n    graph[i].style.background = gradeDisplay.graphColor;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  makeGraphHTML: makeGraphHTML,\n  makeGraph: makeGraph\n});\n\n//# sourceURL=webpack:///./src/javascript/dustCondition/dustGraphComponent.js?");

        /***/
    }),

    /***/ "./src/javascript/dustForecast/controllComponent.js":
    /*!**********************************************************!*\
      !*** ./src/javascript/dustForecast/controllComponent.js ***!
      \**********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_className_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/className.js */ \"./src/javascript/constants/className.js\");\n/* harmony import */ var _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dustForecastData.js */ \"./src/javascript/data/dustForecastData.js\");\n\n\nvar initXPosition = 0;\nvar maxXPosition = 300;\nvar _startXPosition = initXPosition;\nvar _previousXPosition = initXPosition;\nvar _animationTimer = null;\nvar _isPlaying = false;\n\nvar render = function render() {\n  return \"\\n    <div class=\\\"controll\\\">\\n      <div class=\\\"playpause\\\">\\n        <img class=\\\"play\\\" id=\\\"playPauseButton\\\" border=\\\"0\\\">\\n      </div>\\n      <div class=\\\"scrollBar\\\">\\n        <div class=\\\"bar\\\"></div>\\n        <button class=\\\"indicator\\\"></button>\\n      </div>\\n    </div>\\n    \";\n};\n\nvar stop = function stop() {\n  stopIndicator();\n  _startXPosition = initXPosition;\n  _previousXPosition = initXPosition;\n};\n\nvar stopIndicator = function stopIndicator() {\n  _isPlaying = false;\n  togglePlayPauseImage(_isPlaying);\n  clearTimeout(_animationTimer);\n  _animationTimer = null;\n  var indicator = document.querySelector('.indicator');\n  _previousXPosition = parseInt(indicator.style.marginLeft);\n};\n\nvar moveIndicator = function moveIndicator() {\n  if (_previousXPosition === maxXPosition - 1 && !_isPlaying) {\n    _previousXPosition = 0;\n    _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeCurrentXPosition(0);\n  }\n\n  var leftpos = _previousXPosition;\n  var fps = 60;\n\n  function moveIndicator(timestamp) {\n    _animationTimer = setTimeout(function () {\n      if (leftpos < maxXPosition - 1) {\n        leftpos += 1;\n        _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeCurrentXPosition(leftpos);\n        requestAnimationFrame(moveIndicator);\n      } else {\n        stopIndicator();\n      }\n    }, 1000 / fps);\n  }\n\n  _isPlaying = true;\n  togglePlayPauseImage(_isPlaying);\n  requestAnimationFrame(moveIndicator);\n};\n\nvar registerEventListener = function registerEventListener() {\n  var scrollBar = document.querySelector(\".scrollBar\");\n  var playpause = document.querySelector(\".playpause\");\n  var button = document.querySelector(\".scrollBar button\");\n  button.style.marginLeft = '0px';\n  scrollBar.addEventListener('touchstart', function (evt) {\n    stopIndicator();\n\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchStartHandler(evt);\n    }\n  });\n  scrollBar.addEventListener('touchmove', function (evt) {\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchMoveHandler(evt);\n    }\n  });\n  scrollBar.addEventListener('touchend', function (evt) {\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchEndHandler(evt);\n    } else if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DUST_FORECAST.BAR) {\n      barTouchEndHandler(evt);\n    }\n  });\n  playpause.addEventListener('touchend', function (evt) {\n    playPauseTouchEndHandler();\n  });\n};\n\nvar playPauseTouchEndHandler = function playPauseTouchEndHandler() {\n  if (_isPlaying) {\n    stopIndicator();\n  } else {\n    moveIndicator();\n  }\n};\n\nvar barTouchEndHandler = function barTouchEndHandler(evt) {\n  var calculatedValue = evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left;\n  _previousXPosition = calculatedValue;\n  _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeCurrentXPosition(evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left);\n};\n\nvar indicatorTouchStartHandler = function indicatorTouchStartHandler(evt) {\n  _startXPosition = evt.touches[0].clientX;\n  _previousXPosition = parseInt(evt.target.style.marginLeft);\n};\n\nvar indicatorTouchMoveHandler = function indicatorTouchMoveHandler(evt) {\n  var calculatedValue = evt.touches[0].clientX - _startXPosition + _previousXPosition;\n  _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeCurrentXPosition(calculatedValue);\n};\n\nvar indicatorTouchEndHandler = function indicatorTouchEndHandler(evt) {\n  var calculatedValue = evt.changedTouches[0].clientX - _startXPosition + _previousXPosition;\n  _previousXPosition = calculatedValue;\n};\n\nvar onNotifyCurrentXPositionChanged = function onNotifyCurrentXPositionChanged(currentXPosition) {\n  var button = document.querySelector(\".scrollBar button\");\n  button.style.marginLeft = currentXPosition + 'px';\n};\n\nvar togglePlayPauseImage = function togglePlayPauseImage(isPlaying) {\n  var playPauseButton = document.getElementById(\"playPauseButton\");\n  playPauseButton.classList.remove(playPauseButton.classList);\n\n  if (isPlaying) {\n    playPauseButton.classList.add('pause');\n  } else {\n    playPauseButton.classList.add('play');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  registerEventListener: registerEventListener,\n  moveIndicator: moveIndicator,\n  stop: stop,\n  onNotifyCurrentXPositionChanged: onNotifyCurrentXPositionChanged\n});\n\n//# sourceURL=webpack:///./src/javascript/dustForecast/controllComponent.js?");

        /***/
    }),

    /***/ "./src/javascript/dustForecast/dustForecast.js":
    /*!*****************************************************!*\
      !*** ./src/javascript/dustForecast/dustForecast.js ***!
      \*****************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetchrequest.js */ \"./src/javascript/util/fetchrequest.js\");\n/* harmony import */ var _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dustForecastData.js */ \"./src/javascript/data/dustForecastData.js\");\n/* harmony import */ var _constants_serviceUrls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/serviceUrls.js */ \"./src/javascript/constants/serviceUrls.js\");\n/* harmony import */ var _constants_mockUrls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/mockUrls.js */ \"./src/javascript/constants/mockUrls.js\");\n/* harmony import */ var _constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/forecastCacheInformation.js */ \"./src/javascript/constants/forecastCacheInformation.js\");\n/* harmony import */ var _forecastImageComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forecastImageComponent.js */ \"./src/javascript/dustForecast/forecastImageComponent.js\");\n/* harmony import */ var _informationComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informationComponent.js */ \"./src/javascript/dustForecast/informationComponent.js\");\n/* harmony import */ var _controllComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllComponent.js */ \"./src/javascript/dustForecast/controllComponent.js\");\n\n\n\n\n\n\n\n\nvar components = [_forecastImageComponent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _informationComponent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _controllComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n\nvar render = function render() {\n  var content = document.querySelector(\".content\");\n  var dustForecast = \"\\n    <div class=\\\"dustForecast\\\">\\n        \".concat(_forecastImageComponent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render(), \"\\n        \").concat(_informationComponent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].render(), \"\\n        \").concat(_controllComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].render(), \"\\n    </div>\");\n  content.innerHTML = dustForecast;\n};\n\nvar init = function init() {\n  components.forEach(function (component) {\n    _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].registerObserver(component);\n  });\n  var cachedData = getCachedData();\n\n  if (cachedData) {\n    renderInformation(cachedData.CACHED_INFORMATION);\n    renderImages(cachedData.CACHED_IMAGES);\n    _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeImageCount(cachedData.CACHED_IMAGES.images.length);\n    registerEventListener();\n    _controllComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].moveIndicator();\n  } else {\n    var currentDateTime = getCurrentDateTime();\n    localStorage.setItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].LAST_FETCH_DATETIME, currentDateTime);\n    requestInformationData();\n    requestImageData();\n  }\n};\n\nvar registerEventListener = function registerEventListener() {\n  components.forEach(function (component) {\n    if (component.hasOwnProperty(\"registerEventListener\")) {\n      component.registerEventListener();\n    }\n  });\n};\n\nvar requestInformationData = function requestInformationData() {\n  Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(_constants_serviceUrls_js__WEBPACK_IMPORTED_MODULE_2__[\"SERVICE_URL\"].INFORMATION, \"GET\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    localStorage.setItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].FORECAST_INFORMATION, JSON.stringify(data));\n    renderInformation(data);\n  });\n};\n\nvar requestImageData = function requestImageData() {\n  Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(_constants_serviceUrls_js__WEBPACK_IMPORTED_MODULE_2__[\"SERVICE_URL\"].IMAGES, \"GET\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    localStorage.setItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].FORECAST_IMAGES, JSON.stringify(data));\n    _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].changeImageCount(data.images.length);\n    renderImages(data);\n    registerEventListener();\n    _controllComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].moveIndicator();\n  });\n};\n\nvar finalize = function finalize() {\n  _controllComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].stop();\n  components.forEach(function (component) {\n    _data_dustForecastData_js__WEBPACK_IMPORTED_MODULE_1__[\"dustForecastData\"].unregisterObserver(component);\n  });\n};\n\nvar renderInformation = function renderInformation(data) {\n  var informOverall = document.querySelector(\".informOverall\");\n  var informGrade = document.querySelector(\".informGrade\");\n  informOverall.innerHTML = _informationComponent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].renderInformation(data.informOverall);\n  informGrade.innerHTML = _informationComponent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].renderInformation(data.informGrade);\n};\n\nvar renderImages = function renderImages(data) {\n  var imageArea = document.querySelector(\".imageArea\");\n  imageArea.innerHTML = _forecastImageComponent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].renderImage(data.images);\n};\n\nvar getCurrentDateTime = function getCurrentDateTime() {\n  var year = new Date().getFullYear().toString();\n  var month = new Date().getMonth().toString();\n  var day = new Date().getDay().toString();\n  var hour = new Date().getHours().toString();\n  var currentDateTime = year + month + day + hour;\n  return currentDateTime;\n};\n\nvar getCachedData = function getCachedData() {\n  var currentDateTime = getCurrentDateTime();\n  var lastFetchDateTime = localStorage.getItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].LAST_FETCH_DATETIME);\n  var cachedInformation = localStorage.getItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].FORECAST_INFORMATION);\n  var cachedImages = localStorage.getItem(_constants_forecastCacheInformation_js__WEBPACK_IMPORTED_MODULE_4__[\"CACHE_KEY\"].FORECAST_IMAGES);\n\n  if (lastFetchDateTime === currentDateTime && cachedInformation && cachedImages) {\n    return {\n      CACHED_INFORMATION: JSON.parse(cachedInformation),\n      CACHED_IMAGES: JSON.parse(cachedImages)\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  init: init,\n  registerEventListener: registerEventListener,\n  finalize: finalize\n});\n\n//# sourceURL=webpack:///./src/javascript/dustForecast/dustForecast.js?");

        /***/
    }),

    /***/ "./src/javascript/dustForecast/forecastImageComponent.js":
    /*!***************************************************************!*\
      !*** ./src/javascript/dustForecast/forecastImageComponent.js ***!
      \***************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar _imageCount = 0;\nvar _maxXPosition = 300;\n\nvar render = function render() {\n  return \"\\n    <div class=\\\"imageArea\\\">\\n        <img src=\\\"https://1.bp.blogspot.com/-yIhXlQfYN1E/WMksG192LLI/AAAAAAAAA9w/txsqdQfykVksDEFshayeN54c0Gu6C3AAwCLcB/s1600/glow.gif\\\" alt=\\\"Loading Image\\\">\\n    </div>\\n    \";\n};\n\nvar renderImage = function renderImage(images) {\n  return \"\\n    \".concat(Object.keys(images).map(function (key) {\n    return \"<img class=\\\"image\\\" src=\\\"\".concat(images[key], \"\\\" style=\\\"display: \").concat(key > 0 ? \"none\" : \"block\", \";\\\">\\n\");\n  }).join(''), \"\\n    \");\n};\n\nvar onNotifyCurrentXPositionChanged = function onNotifyCurrentXPositionChanged(currentXPosition) {\n  var images = document.querySelectorAll(\".imageArea img\");\n  var index = parseInt(currentXPosition / (_maxXPosition / _imageCount));\n  images.forEach(function (forecastImage, currentIndex) {\n    if (index !== currentIndex) {\n      forecastImage.style = \"display: none;\";\n    } else {\n      forecastImage.style = \"display: block;\";\n    }\n  });\n};\n\nvar onNotifyImageCountChanged = function onNotifyImageCountChanged(imageCount) {\n  _imageCount = imageCount;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  renderImage: renderImage,\n  onNotifyCurrentXPositionChanged: onNotifyCurrentXPositionChanged,\n  onNotifyImageCountChanged: onNotifyImageCountChanged\n});\n\n//# sourceURL=webpack:///./src/javascript/dustForecast/forecastImageComponent.js?");

        /***/
    }),

    /***/ "./src/javascript/dustForecast/informationComponent.js":
    /*!*************************************************************!*\
      !*** ./src/javascript/dustForecast/informationComponent.js ***!
      \*************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar render = function render() {\n  return \"\\n    <div class=\\\"information\\\">\\n        <div class=\\\"informOverall\\\">\\n        </div>\\n        <div class=\\\"informGrade\\\">\\n        </div>\\n    </div>\\n    \";\n};\n\nvar renderInformation = function renderInformation(information) {\n  return \"\\n    <p>\\n        \".concat(information, \"\\n    </p>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  renderInformation: renderInformation\n});\n\n//# sourceURL=webpack:///./src/javascript/dustForecast/informationComponent.js?");

        /***/
    }),

    /***/ "./src/javascript/main.js":
    /*!********************************!*\
      !*** ./src/javascript/main.js ***!
      \********************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation.js */ \"./src/javascript/navigation/navigation.js\");\n/* harmony import */ var _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dustCondition/dustCondition.js */ \"./src/javascript/dustCondition/dustCondition.js\");\n/* harmony import */ var _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dustForecast/dustForecast.js */ \"./src/javascript/dustForecast/dustForecast.js\");\n__webpack_require__(/*! ../style/common/lib/reset.css */ \"./src/style/common/lib/reset.css\");\n\n__webpack_require__(/*! ../style/common/style.css */ \"./src/style/common/style.css\");\n\n__webpack_require__(/*! ../style/dustCondition.css */ \"./src/style/dustCondition.css\");\n\n__webpack_require__(/*! ../style/dustForecast.css */ \"./src/style/dustForecast.css\");\n\n__webpack_require__(/*! ../style/navigation.css */ \"./src/style/navigation.css\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  _navigation_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(navigationTouchEndHandler);\n  _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n  _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n});\n\nvar navigationTouchEndHandler = function navigationTouchEndHandler(index) {\n  if (index) {\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render();\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n  } else {\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].finalize();\n    _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n  }\n};\n\n//# sourceURL=webpack:///./src/javascript/main.js?");

        /***/
    }),

    /***/ "./src/javascript/navigation/navigation.js":
    /*!*************************************************!*\
      !*** ./src/javascript/navigation/navigation.js ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_navigationData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/navigationData.js */ \"./src/javascript/data/navigationData.js\");\n\n\nvar init = function init(touchCallbackHandler) {\n  registerEventListener(touchCallbackHandler);\n};\n\nvar registerEventListener = function registerEventListener(touchCallbackHandler) {\n  var buttons = document.querySelectorAll(\".navigation button\");\n  buttons.forEach(function (button, index) {\n    button.addEventListener('touchend', function (evt) {\n      if (_data_navigationData_js__WEBPACK_IMPORTED_MODULE_0__[\"navigationData\"].getCurrentTabIndex() !== index) {\n        _data_navigationData_js__WEBPACK_IMPORTED_MODULE_0__[\"navigationData\"].changeCurrentTabIndex(index);\n        touchCallbackHandler(index);\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init,\n  registerEventListener: registerEventListener\n});\n\n//# sourceURL=webpack:///./src/javascript/navigation/navigation.js?");

        /***/
    }),

    /***/ "./src/javascript/util/fetchrequest.js":
    /*!*********************************************!*\
      !*** ./src/javascript/util/fetchrequest.js ***!
      \*********************************************/
    /*! exports provided: fetchRequest */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRequest\", function() { return fetchRequest; });\nvar fetchRequest = function fetchRequest(url, method, data) {\n  return fetch(url, {\n    method: method,\n    mode: 'cors',\n    cache: 'no-cache',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/javascript/util/fetchrequest.js?");

        /***/
    }),

    /***/ "./src/style/common/lib/reset.css":
    /*!****************************************!*\
      !*** ./src/style/common/lib/reset.css ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/common/lib/reset.css?");

        /***/
    }),

    /***/ "./src/style/common/style.css":
    /*!************************************!*\
      !*** ./src/style/common/style.css ***!
      \************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/common/style.css?");

        /***/
    }),

    /***/ "./src/style/dustCondition.css":
    /*!*************************************!*\
      !*** ./src/style/dustCondition.css ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/dustCondition.css?");

        /***/
    }),

    /***/ "./src/style/dustForecast.css":
    /*!************************************!*\
      !*** ./src/style/dustForecast.css ***!
      \************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/dustForecast.css?");

        /***/
    }),

    /***/ "./src/style/navigation.css":
    /*!**********************************!*\
      !*** ./src/style/navigation.css ***!
      \**********************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/navigation.css?");

        /***/
    })

    /******/
});