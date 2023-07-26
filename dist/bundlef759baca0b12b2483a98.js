/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Admin-Dashboard</title>\\n</head>\\n<body>\\n    <div class=\\\"wrap\\\">\\n        <div class=\\\"board__body\\\">\\n            <aside>\\n                <header class=\\\"aside__header\\\">\\n                    <img src=\\\"#\\\" alt=\\\"Logotipe\\\" class=\\\"header__logo\\\">\\n                    <div class=\\\"header__title\\\"></div>\\n                </header>\\n                <nav class=\\\"aside__menu\\\">\\n                    <div class=\\\"nav__menu-title\\\"></div>\\n                    <div class=\\\"nav__menu-items\\\">\\n                        <div class=\\\"nav__menu-item\\\"></div>\\n                        <div class=\\\"nav__menu-item\\\"></div>\\n                        <div class=\\\"nav__menu-item\\\"></div>\\n                        <div class=\\\"nav__menu-item\\\"></div>\\n                    </div>\\n                    <div class=\\\"nav__library-title\\\"></div>\\n                    <div class=\\\"nav__library-items\\\">\\n                        <div class=\\\"nav__library-item\\\"></div>\\n                        <div class=\\\"nav__library-item\\\"></div>\\n                        <div class=\\\"nav__library-item\\\"></div>\\n                    </div>\\n                </nav>\\n                <section class=\\\"aside__audio-player\\\">\\n                    <div class=\\\"aside__audio-bar\\\"></div>\\n                    <div class=\\\"aside__audio-player\\\"></div>\\n                </section>\\n            </aside>\\n            <main>\\n                <header class=\\\"main__header\\\">\\n                    <div class=\\\"header__title\\\"></div>\\n                    <div class=\\\"header__notification\\\"></div>\\n                    <div class=\\\"header__search-bar\\\"></div>\\n                </header>\\n                <section class=\\\"main__advertising\\\">\\n\\n                </section>\\n                <section class=\\\"main__top-artists\\\">\\n                    <div class=\\\"top-artists__title\\\"></div>\\n                    <div class=\\\"top-artists__list\\\">\\n                        <div class=\\\"top-artists__item\\\"></div>\\n                    </div>\\n                </section>\\n                <section class=\\\"main__playlists\\\">\\n                    <div class=\\\"playlists__title\\\"></div>\\n                    <div class=\\\"playlists__items\\\">\\n                        <div class=\\\"playlists__item\\\"></div>\\n                        <div class=\\\"playlists__item\\\"></div>\\n                        <div class=\\\"playlists__item\\\"></div>\\n                        <div class=\\\"playlists__item\\\"></div>\\n                    </div>\\n                </section>\\n                <section class=\\\"main__trending\\\">\\n                    <div class=\\\"trending__title\\\"></div>\\n                    <div class=\\\"trending__list\\\">\\n                        <div class=\\\"trinding__item\\\"></div>\\n                        <div class=\\\"trinding__item\\\"></div>\\n                        <div class=\\\"trinding__item\\\"></div>\\n                    </div>\\n                </section>\\n                <section class=\\\"main__audio-player\\\">\\n                    <div class=\\\"audio-player__body\\\"></div>\\n                </section>\\n            </main>\\n        </div>\\n    </div>\\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://admin-dashboard/./src/index.html?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index.html */ \"./src/index.html\");\n\n\n//# sourceURL=webpack://admin-dashboard/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;