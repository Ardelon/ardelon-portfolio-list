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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/EuroStyle Normal.ttf */ \"./src/assets/fonts/EuroStyle Normal.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"eurostile\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.portfolio-container {\\n  display: flex;\\n  justify-items: center;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  grid-gap: 40px;\\n  align-content: stretch;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n  min-width: 300px;\\n  overflow-x: auto;\\n}\\n.portfolio-container::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.portfolio-element-container {\\n  width: 250px;\\n  height: 250px;\\n  box-sizing: border-box;\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.portfolio-element-background-image {\\n  width: 250px;\\n  height: 250px;\\n  box-sizing: border-box;\\n  position: absolute;\\n  animation-duration: 0.7s;\\n  animation-timing-function: ease-in;\\n  animation-name: \\\"\\\";\\n  animation-fill-mode: forwards;\\n}\\n\\n.portfolio-element-background-veil {\\n  width: 250px;\\n  height: 250px;\\n  background-color: orange;\\n  position: absolute;\\n  filter: contrast(0.7);\\n  opacity: 0.5;\\n}\\n\\n.portfolio-element-description-container {\\n  width: 250px;\\n  height: 250px;\\n  background-color: #313646;\\n  position: absolute;\\n  opacity: 0;\\n  animation-duration: 0.7s;\\n  animation-timing-function: ease-out;\\n  animation-name: \\\"\\\";\\n  animation-fill-mode: forwards;\\n}\\n\\n.portfolio-element-description {\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  font-weight: 500;\\n  color: #C9C7C5;\\n  text-align: center;\\n  line-height: 24px;\\n  font-size: 28px;\\n  padding: 10px;\\n}\\n\\n.portfolio-element-visit-demo-button {\\n  font-family: \\\"eurostile\\\", sans-serif;\\n  font-weight: 500;\\n  color: white;\\n  height: 40px;\\n  width: 160px;\\n  border-radius: 20px;\\n  position: absolute;\\n  border: 1px solid #5d2a9d;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 28px;\\n  line-height: 40px;\\n  text-align: center;\\n  left: 50%;\\n  bottom: 0;\\n  transform: translate(-50%, -50%);\\n  cursor: pointer;\\n}\\n.portfolio-element-visit-demo-button:hover {\\n  background-color: #8141d4;\\n}\\n\\n.portfolio-element-hover-control-div {\\n  width: 250px;\\n  height: 250px;\\n}\\n\\n@keyframes display {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes displayNot {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n@keyframes zoomIn {\\n  from {\\n    transition: scale(1);\\n  }\\n  to {\\n    transform: scale(1.1);\\n  }\\n}\\n@keyframes zoomOut {\\n  from {\\n    transform: scale(1.1);\\n  }\\n  to {\\n    transition: scale(1);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/assets/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/images/avatar.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cfa6adf229d8ba2a6c45c3e8b342e730.jpg\");\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/assets/images/avatar.jpg?");

/***/ }),

/***/ "./src/assets/index.scss":
/*!*******************************!*\
  !*** ./src/assets/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/assets/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ardelon-portfolio-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/component/config.js":
/*!*********************************!*\
  !*** ./src/component/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configPortfolio\": () => (/* binding */ configPortfolio),\n/* harmony export */   \"configPortfolioElement\": () => (/* binding */ configPortfolioElement)\n/* harmony export */ });\nconst configPortfolio = {\r\n    portfolioContainerConfig : {classList : [\"portfolio-container\"]},\r\n\r\n}\r\n\r\nconst configPortfolioElement = {\r\n    portfolioElementContainerConfig : {classList: [\"portfolio-element-container\"]},\r\n    portfolioElementBackgroundImageConfig : {classList : [\"portfolio-element-background-image\"], type: \"img\"},\r\n    portfolioElementBackgroundVeilConfig : {classList : [\"portfolio-element-background-veil\"]},\r\n    portfolioElementDescriptionContainerConfig : {classList : [\"portfolio-element-description-container\"]},\r\n    portfolioElementDescriptionConfig : {classList : [\"portfolio-element-description\"], type: \"h1\"},\r\n    portfolioElementVisitDemoButtonConfig : {classList : [\"portfolio-element-visit-demo-button\"], innerHTML : \"Visit Site\"},\r\n    portfolioElementHoverControlDivConfig : {classList : [\"portfolio-element-hover-control-div\"]},\r\n}\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/component/config.js?");

/***/ }),

/***/ "./src/component/portfolio.js":
/*!************************************!*\
  !*** ./src/component/portfolio.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/component/utilities.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/component/config.js\");\n/* harmony import */ var _portfolioElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolioElement */ \"./src/component/portfolioElement.js\");\n/* harmony import */ var _data_portfolioElementInfoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/portfolioElementInfoList */ \"./src/data/portfolioElementInfoList.js\");\n\r\n\r\n\r\n\r\n\r\nconst portfolio = () => {\r\n    const {portfolioContainerConfig} = _config__WEBPACK_IMPORTED_MODULE_1__.configPortfolio;\r\n\r\n    const portfolioContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioContainerConfig)\r\n\r\n    _data_portfolioElementInfoList__WEBPACK_IMPORTED_MODULE_3__.portfolioElementInfoList.forEach(elementInfo => {\r\n        const element = (0,_portfolioElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(elementInfo);\r\n        portfolioContainer.appendChild(element);\r\n    })\r\n\r\n    return portfolioContainer\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);\r\n\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/component/portfolio.js?");

/***/ }),

/***/ "./src/component/portfolioElement.js":
/*!*******************************************!*\
  !*** ./src/component/portfolioElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/component/utilities.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/component/config.js\");\n\r\n\r\n\r\nconst portfolioElement = (props) => {\r\n\r\n    const {imageSrc, description, url, veilColor} = props;\r\n    \r\n    const {\r\n        portfolioElementContainerConfig,\r\n        portfolioElementBackgroundImageConfig,\r\n        portfolioElementBackgroundVeilConfig,\r\n        portfolioElementDescriptionContainerConfig,\r\n        portfolioElementDescriptionConfig,\r\n        portfolioElementVisitDemoButtonConfig,\r\n        portfolioElementHoverControlDivConfig\r\n\r\n    } = _config__WEBPACK_IMPORTED_MODULE_1__.configPortfolioElement;\r\n\r\n    const portfolioElementContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioElementContainerConfig)\r\n    const portfolioElementBackgroundImage = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)({...portfolioElementBackgroundImageConfig, src : imageSrc});\r\n    const portfolioElementBackgroundVeil = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioElementBackgroundVeilConfig);\r\n    const portfolioElementDescriptionContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioElementDescriptionContainerConfig);\r\n    const portfolioElementDescription = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)({...portfolioElementDescriptionConfig, innerText : description});\r\n    const portfolioElementVisitDemoButton = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioElementVisitDemoButtonConfig);\r\n    const portfolioElementHoverControlDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)(portfolioElementHoverControlDivConfig);\r\n\r\n    portfolioElementBackgroundVeil.style.backgroundColor = veilColor;\r\n    \r\n\r\n    portfolioElementVisitDemoButton.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        window.open(url, '_blank');\r\n        portfolioElementVisitDemoButton.removeEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            window.open(url, '_blank');\r\n        });\r\n    });\r\n    \r\n    portfolioElementContainer.addEventListener('mouseover', (e) => {\r\n        e.preventDefault();\r\n        portfolioElementDescriptionContainer.style.animationName = \"display\";\r\n        portfolioElementBackgroundImage.style.animationName = \"zoomIn\";\r\n        portfolioElementContainer.removeEventListener('mouseover', (e) => {\r\n            e.preventDefault();\r\n            portfolioElementDescriptionContainer.style.animationName = \"display\";\r\n            portfolioElementBackgroundImage.style.animationName = \"zoomIn\";\r\n        });\r\n    });\r\n\r\n    portfolioElementContainer.addEventListener('mouseout', (e) => {\r\n        e.preventDefault();\r\n        portfolioElementDescriptionContainer.style.animationName = \"displayNot\";\r\n        portfolioElementBackgroundImage.style.animationName = \"zoomOut\";\r\n        portfolioElementContainer.removeEventListener('mouseout', (e) => {\r\n            e.preventDefault();\r\n            portfolioElementDescriptionContainer.style.animationName = \"displayNot\";\r\n            portfolioElementBackgroundImage.style.animationName = \"zoomOut\";\r\n        });\r\n    });\r\n\r\n    \r\n\r\n\r\n    portfolioElementDescriptionContainer.appendChild(portfolioElementDescription);\r\n    portfolioElementDescriptionContainer.appendChild(portfolioElementVisitDemoButton);\r\n\r\n    portfolioElementContainer.appendChild(portfolioElementBackgroundImage);\r\n    portfolioElementContainer.appendChild(portfolioElementBackgroundVeil);\r\n    portfolioElementContainer.appendChild(portfolioElementDescriptionContainer);\r\n    // portfolioElementContainer.appendChild(portfolioElementHoverControlDiv);\r\n\r\n\r\n    return portfolioElementContainer;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioElement);\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/component/portfolioElement.js?");

/***/ }),

/***/ "./src/component/utilities.js":
/*!************************************!*\
  !*** ./src/component/utilities.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (config) => {\r\n    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config\r\n\r\n    const container = document.createElement(type);\r\n    id              ? container.id = id                                                     : '';\r\n    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';\r\n    innerText       ? container.innerText = innerText                                       : '';\r\n    innerHTML       ? container.innerHTML = innerHTML                                       : '';\r\n    src             ? container.src = src                                                   : '';\r\n    contentEditable ? container.contentEditable = contentEditable                           : '';\r\n    row             ? container.row = row                                                   : '';\r\n    multiple        ? container.multiple = multiple                                         : '';\r\n    size            ? container.size = size                                                 : '';\r\n    placeholder     ? container.placeholder = placeholder                                   : '';\r\n\r\n    if (options) {\r\n        options.forEach((value, index) => {\r\n            let option = document.createElement('option');\r\n            optionValues ? option.value = optionValues[index] : option.value = value;            \r\n            option.innerText = value;\r\n            container.appendChild(option);\r\n        })\r\n    }\r\n\r\n    return container;\r\n}\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/component/utilities.js?");

/***/ }),

/***/ "./src/data/portfolioElementInfoList.js":
/*!**********************************************!*\
  !*** ./src/data/portfolioElementInfoList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"portfolioElementInfoList\": () => (/* binding */ portfolioElementInfoList)\n/* harmony export */ });\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/avatar.jpg */ \"./src/assets/images/avatar.jpg\");\n\r\n\r\nconst portfolioElementInfoList = [\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#AC372B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#CC967B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#2B241D'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#845A4B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#407F3D'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#AC372B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#CC967B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#2B241D'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#845A4B'\r\n    },\r\n    {\r\n        imageSrc : _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        description : `Lorem Ipsum is simply dummy text of the printm Ipsum ha's standard dummy text ever since `,\r\n        url : 'https://www.google.com',\r\n        veilColor : '#407F3D'\r\n    },\r\n]\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/data/portfolioElementInfoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.scss */ \"./src/assets/index.scss\");\n/* harmony import */ var _component_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/portfolio */ \"./src/component/portfolio.js\");\n\r\n\r\n\r\n\r\ndocument.body.appendChild((0,_component_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/EuroStyle Normal.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/EuroStyle Normal.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"484dfcabae8f37b92ef4.ttf\";\n\n//# sourceURL=webpack://ardelon-portfolio-list/./src/assets/fonts/EuroStyle_Normal.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;