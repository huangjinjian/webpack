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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/iconfont.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/iconfont.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./iconfont.eot?t=1584004459872 */ \"./src/iconfont.eot?t=1584004459872\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./iconfont.woff?t=1584004459872 */ \"./src/iconfont.woff?t=1584004459872\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./iconfont.ttf?t=1584004459872 */ \"./src/iconfont.ttf?t=1584004459872\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./iconfont.svg?t=1584004459872 */ \"./src/iconfont.svg?t=1584004459872\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: \"#iconfont\" });\n// Module\nexports.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-logo:before {\\n  content: \\\"\\\\e615\\\";\\n}\\n\\n.icon-logo1:before {\\n  content: \\\"\\\\e60d\\\";\\n}\\n\\n.icon-icon-test:before {\\n  content: \\\"\\\\e603\\\";\\n}\\n\\n.icon-icon-test1:before {\\n  content: \\\"\\\\e608\\\";\\n}\\n\\n.icon-icon-test2:before {\\n  content: \\\"\\\\e60a\\\";\\n}\\n\\n.icon-icon-test3:before {\\n  content: \\\"\\\\e60c\\\";\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/iconfont.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/iconfont.css":
/*!**************************!*\
  !*** ./src/iconfont.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./iconfont.css */ \"../node_modules/css-loader/dist/cjs.js!./src/iconfont.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/iconfont.css?");

/***/ }),

/***/ "./src/iconfont.eot?t=1584004459872":
/*!******************************************!*\
  !*** ./src/iconfont.eot?t=1584004459872 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"77e2aacd713a71bab6cf988cbc25346c.eot\");\n\n//# sourceURL=webpack:///./src/iconfont.eot?");

/***/ }),

/***/ "./src/iconfont.svg?t=1584004459872":
/*!******************************************!*\
  !*** ./src/iconfont.svg?t=1584004459872 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4c233a5d3fbcd642d6e593fc189a8c26.svg\");\n\n//# sourceURL=webpack:///./src/iconfont.svg?");

/***/ }),

/***/ "./src/iconfont.ttf?t=1584004459872":
/*!******************************************!*\
  !*** ./src/iconfont.ttf?t=1584004459872 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"036a70210ac6056fe439c9dd12eac120.ttf\");\n\n//# sourceURL=webpack:///./src/iconfont.ttf?");

/***/ }),

/***/ "./src/iconfont.woff?t=1584004459872":
/*!*******************************************!*\
  !*** ./src/iconfont.woff?t=1584004459872 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7275d3f2d02d9596d7619f7edad535e6.woff\");\n\n//# sourceURL=webpack:///./src/iconfont.woff?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconfont.css */ \"./src/iconfont.css\");\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });