/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo"]("main",{

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar fetchData = function fetchData() {\n  var statusMessage = document.createElement('div');\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.getElementById('form1'),\n      inputs = form.querySelectorAll('input'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    form.appendChild(statusMessage);\n    var inputs = form.querySelectorAll('input');\n\n    if (inputs[1].value.length < 8 || inputs[1].value.length > 11) {\n      statusMessage.textContent = 'Введите корректный номер телефона';\n    } else if (inputs[0].value.length < 2) {\n      statusMessage.textContent = 'Имя должно состоять минимум из двух букв';\n    } else {\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(form);\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n          setTimeout(function () {\n            modalCallback.style.display = 'none';\n            modalOverlay.style.display = 'none';\n          }, 3000);\n        }\n\n        statusMessage.textContent = successMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n          modalCallback.style.display = 'none';\n          modalOverlay.style.display = 'none';\n        }, 3000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n      });\n      inputs.forEach(function (item, i) {\n        if (i < 2) {\n          item.value = '';\n        }\n      });\n    }\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://glo/./src/modules/fetchData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd205e103703116900bc")
/******/ })();
/******/ 
/******/ }
);