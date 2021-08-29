/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  console.log('ok');\n  slider(document.querySelector('#slider-1'), {\n    'mode': 'full',\n    'view': 3,\n    'marginRight': 30\n  });\n  slider(document.querySelector('#slider-2'), {\n    'mode': 'container',\n    'view': 3,\n    'marginRight': 30\n  });\n\n  function slider(slider, options) {\n    var slider_items = slider.querySelectorAll('.slider__item');\n    var slider_items_lenght = slider_items.length - 1;\n    var prev = slider.querySelector('.slider__prev');\n    var next = slider.querySelector('.slider__next');\n    var view = options.view;\n    var current = 0;\n    var marginRight = options.marginRight || 30;\n    var total_step = slider_items_lenght - view;\n\n    if (options.mode === 'container') {\n      slider_items.forEach(function (el) {\n        el.style.minWidth = \"calc(100% / \".concat(view, \")\");\n        el.style.marginRight = marginRight;\n      });\n    } else if (options.mode === 'full') {\n      slider_items.forEach(function (el) {\n        el.style.minWidth = \"calc(100% / \".concat(view, \" - \").concat(marginRight * (view - 1) / view * 2, \"px)\");\n        el.style.marginRight = marginRight;\n      });\n    }\n\n    goSlide();\n    next.addEventListener('click', function (e) {\n      current > total_step ? current : current++;\n      goSlide();\n    });\n    prev.addEventListener('click', function (e) {\n      current <= 0 ? current : current--;\n      goSlide();\n    });\n\n    function goSlide() {\n      if (options.mode === 'full') {\n        if (current > total_step) {\n          //последний слайд\n          next.classList.add('disable');\n          prev.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc((100% * -\".concat(current, \") + calc(\").concat(marginRight, \"px * -\").concat(current, \") + \").concat(marginRight * 2, \"px))\");\n          });\n        } else if (current > 0) {\n          next.classList.remove('disable');\n          prev.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc((100% * -\".concat(current, \") + calc(\").concat(marginRight, \"px * -\").concat(current, \") + \").concat(marginRight, \"px))\");\n          });\n        } else {\n          //первый слайд\n          prev.classList.add('disable');\n          next.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc((100% * -\".concat(current, \") + calc(\").concat(marginRight, \"px * -\").concat(current, \")))\");\n          });\n        }\n      } else if (options.mode === 'container') {\n        if (current > total_step) {\n          //последний слайд\n          next.classList.add('disable');\n          prev.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc(100% * -\".concat(current, \" - \").concat(marginRight * current, \"px))\");\n          });\n        } else if (current > 0) {\n          next.classList.remove('disable');\n          prev.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc(100% * -\".concat(current, \" - \").concat(marginRight * current, \"px))\");\n          });\n        } else {\n          //первый слайд\n          prev.classList.add('disable');\n          next.classList.remove('disable');\n          slider_items.forEach(function (el) {\n            el.style.transform = \"translateX(calc(100% * -\".concat(current, \" - \").concat(marginRight * current, \"px))\");\n          });\n        }\n      }\n    }\n  }\n\n  function tabs() {\n    var tabs = document.querySelector('.tabs');\n    tabs.addEventListener('click', function (e) {\n      if (e.target.dataset.tabsLink) {\n        e.preventDefault();\n        tabs.querySelector('[data-tabs-link].active').classList.remove('active');\n        e.target.classList.add('active');\n        tabs.querySelector('[data-tabs-item].active').classList.remove('active');\n        tabs.querySelector(\"[data-tabs-item=\\\"\".concat(e.target.dataset.tabsLink, \"\\\"]\")).classList.add('active');\n      }\n    });\n  }\n\n  tabs();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });