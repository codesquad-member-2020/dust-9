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

    /***/ "./src/javascript/dustCondition/dustCondition.js":
    /*!*******************************************************!*\
      !*** ./src/javascript/dustCondition/dustCondition.js ***!
      \*******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetchrequest.js */ \"./src/javascript/util/fetchrequest.js\");\n\n\nvar render = function render() {\n  var content = document.querySelector(\".content\");\n  var dustCondition = \"<div class=\\\"dustCondition\\\">\\n    <div class=\\\"dustInfo\\\">\\n    <div class=\\\"title\\\">\\uBBF8\\uC138\\uBA3C\\uC9C0 \\uC571</div> \\n      <div class=\\\"gradeEmoji\\\"></div>\\n      <div class=\\\"grade\\\"></div>\\n        <span class=\\\"dustValue\\\"></span>\\n        <span class=\\\"timeValue\\\"></span>\\n        <div class=\\\"measureStation\\\"><span class=\\\"stationName\\\"></span><span> \\uCE21\\uC815\\uC18C \\uAE30\\uC900</span></div>\\n    </div>\\n    <div class=\\\"dustGraph\\\">\\n      <ul>\\n      <li><div class=\\\"graph\\\"></div><span class=\\\"graphValue\\\"></span></li>\\n      </ul>\\n    </div>\\n    </div>\";\n  content.innerHTML = dustCondition;\n};\n\nvar init = function init() {\n  navigator.geolocation.getCurrentPosition(function (position) {\n    //http://dust9.herokuapp.com/location?latitude=123.123&longitude=-123.123\n    var requestURL = \"http://dust9.herokuapp.com/location?latitude=\".concat(position.coords.latitude, \"&longitude=\").concat(position.coords.longitude);\n    Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(requestURL, \"GET\").then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n      renderDustInfo(data);\n    });\n  });\n};\n\nvar registerEventListener = function registerEventListener() {};\n\nfunction renderDustInfo(data) {\n  var gradeEmoji = document.querySelector(\".gradeEmoji\");\n  var grade = document.querySelector(\".grade\");\n  var dustValue = document.querySelector(\".dustValue\");\n  var timeValue = document.querySelector(\".timeValue\");\n  var stationName = document.querySelector(\".stationName\");\n  var dustInfo = document.querySelector(\".dustInfo\");\n  var gradeDisplay = setGradeDisplay(data.dustValues[0].pm10Grade);\n  dustInfo.style.background = \"linear-gradient(to top,white, \".concat(gradeDisplay.background, \")\");\n  grade.innerHTML = gradeDisplay.grade;\n  gradeEmoji.innerHTML = gradeDisplay.emoji;\n  dustValue.innerHTML = data.dustValues[0].pm10Value + '&micro;g/㎥';\n  stationName.innerHTML = data.stationName;\n  timeValue.innerHTML = '오늘 ' + data.dustValues[0].dataTime + ':00';\n}\n\nfunction setGradeDisplay(gradeValue) {\n  var gradeDisplay = {\n    emoji: null,\n    grade: null,\n    background: null\n  };\n\n  switch (gradeDisplay, gradeValue) {\n    case '1':\n      gradeDisplay.emoji = '😀';\n      gradeDisplay.grade = '좋음';\n      gradeDisplay.background = '#6096D8';\n      break;\n\n    case '2':\n      gradeDisplay.emoji = '🙂';\n      gradeDisplay.grade = '보통';\n      gradeDisplay.background = '#088A68';\n      break;\n\n    case '3':\n      gradeDisplay.emoji = '😷';\n      gradeDisplay.grade = '나쁨';\n      gradeDisplay.background = '#FAAC58';\n      break;\n\n    case '4':\n      gradeDisplay.emoji = '😱';\n      gradeDisplay.grade = '매우 나쁨';\n      gradeDisplay.background = '#FA5858';\n      break;\n  }\n\n  return gradeDisplay;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  init: init,\n  registerEventListener: registerEventListener\n});\n\n//# sourceURL=webpack:///./src/javascript/dustCondition/dustCondition.js?");

        /***/
    }),

    /***/ "./src/javascript/dustForecast/dustForecast.js":
    /*!*****************************************************!*\
      !*** ./src/javascript/dustForecast/dustForecast.js ***!
      \*****************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fetchrequest.js */ \"./src/javascript/util/fetchrequest.js\");\n/* harmony import */ var _constants_className_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/className.js */ \"./src/javascript/constants/className.js\");\n\n\nvar _startX = 0;\nvar _pivotX = 0;\nvar _animationTimer = null;\n\nvar render = function render() {\n  var content = document.querySelector(\".content\");\n  var dustForecast = \"<div class=\\\"dustForecast\\\">\\n    <div class=\\\"dustForecast\\\">\\n    <div class=\\\"imageArea\\\">\\n    </div>\\n    <div class=\\\"informOverall\\\">\\n    </div>\\n    <div class=\\\"informGrade\\\">\\n    </div>\\n    <div class=\\\"controll\\\">\\n      <div class=\\\"playpause\\\">\\n        <input class=\\\"toggleButton\\\" type=\\\"checkbox\\\" value=\\\"None\\\" id=\\\"playpause\\\" name=\\\"check\\\" />\\n        <label for=\\\"playpause\\\"></label>\\n      </div>\\n      <div class=\\\"scrollBar\\\">\\n        <div class=\\\"bar\\\"></div>\\n        <button class=\\\"indicator\\\"></button>\\n      </div>\\n    </div>\\n  </div>\";\n  content.innerHTML = dustForecast;\n};\n\nvar init = function init() {\n  //fetchRequest(\"https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/information\", \"GET\")\n  Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(\"http://dust9.herokuapp.com/information\", \"GET\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var informOverall = document.querySelector(\".informOverall\");\n    var informGrade = document.querySelector(\".informGrade\");\n    informOverall.innerHTML = renderInformation(data.informOverall);\n    informGrade.innerHTML = renderInformation(data.informGrade);\n  }); //fetchRequest(\"https://93814063-fe60-4baa-bafe-c4a78779934d.mock.pstmn.io/images\", \"GET\")\n\n  Object(_util_fetchrequest_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchRequest\"])(\"http://dust9.herokuapp.com/images\", \"GET\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var imageArea = document.querySelector(\".imageArea\");\n    imageArea.innerHTML = renderImage(data.images);\n    registerEventListener();\n    moveIndicator();\n  });\n};\n\nvar stop = function stop() {\n  stopIndicator();\n  _startX = 0;\n  _pivotX = 0;\n};\n\nvar stopIndicator = function stopIndicator() {\n  clearTimeout(_animationTimer);\n  _animationTimer = null;\n  var indicator = document.querySelector('.indicator');\n  _pivotX = parseInt(indicator.style.marginLeft);\n};\n\nvar moveIndicator = function moveIndicator() {\n  var leftpos = _pivotX;\n  var fps = 60;\n\n  function movediv(timestamp) {\n    _animationTimer = setTimeout(function () {\n      leftpos += 1;\n      changeIndicatorPosition(leftpos);\n\n      if (leftpos < 299) {\n        requestAnimationFrame(movediv);\n      }\n    }, 3000 / fps);\n  }\n\n  requestAnimationFrame(movediv);\n};\n\nvar registerEventListener = function registerEventListener() {\n  var scrollBar = document.querySelector(\".scrollBar\");\n  var playpause = document.querySelector(\".playpause\");\n  var button = document.querySelector(\".scrollBar button\");\n  button.style.marginLeft = '0px';\n  scrollBar.addEventListener('touchstart', function (evt) {\n    stopIndicator();\n\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchStartHandler(evt);\n    }\n  });\n  scrollBar.addEventListener('touchmove', function (evt) {\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchMoveHandler(evt);\n    }\n  });\n  scrollBar.addEventListener('touchend', function (evt) {\n    if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DUST_FORECAST.INDICATOR) {\n      indicatorTouchEndHandler(evt);\n    } else if (evt.target.className === _constants_className_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DUST_FORECAST.BAR) {\n      barTouchEndHandler(evt);\n    }\n  });\n  playpause.addEventListener('touchend', function (evt) {\n    playPauseTouchEndHandler(evt.target.previousElementSibling);\n  });\n  playpause.addEventListener('touchcancel', function (evt) {\n    console.log(\"AWef\");\n  });\n};\n\nvar playPauseTouchEndHandler = function playPauseTouchEndHandler(evt) {\n  if (evt.checked === true) {\n    moveIndicator();\n  } else {\n    stopIndicator();\n  }\n};\n\nvar barTouchEndHandler = function barTouchEndHandler(evt) {\n  var calculatedValue = evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left;\n  _pivotX = calculatedValue;\n  changeIndicatorPosition(evt.changedTouches[0].clientX - evt.target.getBoundingClientRect().left);\n};\n\nvar indicatorTouchStartHandler = function indicatorTouchStartHandler(evt) {\n  _startX = evt.touches[0].clientX;\n  _pivotX = parseInt(evt.target.style.marginLeft);\n};\n\nvar indicatorTouchMoveHandler = function indicatorTouchMoveHandler(evt) {\n  var calculatedValue = evt.touches[0].clientX - _startX + _pivotX;\n  changeIndicatorPosition(calculatedValue);\n};\n\nvar indicatorTouchEndHandler = function indicatorTouchEndHandler(evt) {\n  var calculatedValue = evt.changedTouches[0].clientX - _startX + _pivotX;\n  _pivotX = calculatedValue;\n};\n\nvar changeIndicatorPosition = function changeIndicatorPosition(xPosition) {\n  var cvtXPosition = xPosition;\n\n  if (cvtXPosition > 300) {\n    cvtXPosition = 299;\n  } else if (cvtXPosition < 0) {\n    cvtXPosition = 0;\n  }\n\n  var button = document.querySelector(\".scrollBar button\");\n  button.style.marginLeft = cvtXPosition + 'px';\n  var images = document.querySelectorAll(\".imageArea img\");\n  var index = parseInt(cvtXPosition / (300 / 24));\n  changeImageVisible(index);\n};\n\nvar changeImageVisible = function changeImageVisible(index) {\n  var images = document.querySelectorAll(\".imageArea img\");\n  images.forEach(function (forecastImage, currentIndex) {\n    if (index !== currentIndex) {\n      forecastImage.style = \"display: none;\";\n    } else {\n      forecastImage.style = \"display: block;\";\n    }\n  });\n};\n\nvar renderInformation = function renderInformation(information) {\n  return \"\\n    <p>\\n        \".concat(information, \"\\n    </p>\\n    \");\n};\n\nvar renderImage = function renderImage(images) {\n  return \"\\n    \".concat(Object.keys(images).map(function (key) {\n    return \"<img class=\\\"image\\\" src=\\\"\".concat(images[key], \"\\\" style=\\\"display: \").concat(key > 0 ? \"none\" : \"block\", \";\\\">\\n\");\n  }).join(''), \"\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render,\n  init: init,\n  registerEventListener: registerEventListener,\n  stop: stop\n});\n\n//# sourceURL=webpack:///./src/javascript/dustForecast/dustForecast.js?");

        /***/
    }),

    /***/ "./src/javascript/main.js":
    /*!********************************!*\
      !*** ./src/javascript/main.js ***!
      \********************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation.js */ \"./src/javascript/navigation/navigation.js\");\n/* harmony import */ var _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dustCondition/dustCondition.js */ \"./src/javascript/dustCondition/dustCondition.js\");\n/* harmony import */ var _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dustForecast/dustForecast.js */ \"./src/javascript/dustForecast/dustForecast.js\");\n__webpack_require__(/*! ../style/common/lib/reset.css */ \"./src/style/common/lib/reset.css\");\n\n__webpack_require__(/*! ../style/common/style.css */ \"./src/style/common/style.css\");\n\n__webpack_require__(/*! ../style/dustCondition.css */ \"./src/style/dustCondition.css\");\n\n__webpack_require__(/*! ../style/dustForecast.css */ \"./src/style/dustForecast.css\");\n\n__webpack_require__(/*! ../style/navigation.css */ \"./src/style/navigation.css\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  _navigation_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(navigationTouchEndHandler);\n  _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n  _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n});\n\nvar navigationTouchEndHandler = function navigationTouchEndHandler(index) {\n  if (index) {\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render();\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n  } else {\n    _dustForecast_dustForecast_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop();\n    _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\n    _dustCondition_dustCondition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n  }\n};\n\n//# sourceURL=webpack:///./src/javascript/main.js?");

        /***/
    }),

    /***/ "./src/javascript/navigation/navigation.js":
    /*!*************************************************!*\
      !*** ./src/javascript/navigation/navigation.js ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nvar init = function init(touchCallbackHandler) {\n  registerEventListener(touchCallbackHandler);\n};\n\nvar registerEventListener = function registerEventListener(touchCallbackHandler) {\n  var buttons = document.querySelectorAll(\".navigation button\");\n  buttons.forEach(function (button, index) {\n    button.addEventListener('touchend', function (evt) {\n      touchCallbackHandler(index);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init,\n  registerEventListener: registerEventListener\n});\n\n//# sourceURL=webpack:///./src/javascript/navigation/navigation.js?");

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