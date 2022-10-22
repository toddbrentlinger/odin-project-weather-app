/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/baseComponent.js":
/*!******************************!*\
  !*** ./src/baseComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");

class BaseComponent {
  constructor(props) {
    this._element = null;
    this._props = props;
  }

  // Getters/Setters

  get element() {
    return this._element;
  }
  get props() {
    return this._props;
  }
  set props(newProps) {
    this._props = newProps;
    this.render();
  }

  // Methods

  emptyElement() {
    if (!this._element) return;
    while (this._element.firstChild) {
      this._element.removeChild(this._element.firstChild);
    }
  }
  initializeRender() {
    let baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('div');
    if (!this._element) {
      this._element = baseElement;
    } else {
      this.emptyElement();
    }
  }
  render() {
    this.initializeRender();
    this._element.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {}, 'Base Component!'));
    return this._element;
  }
}

/***/ }),

/***/ "./src/footerComponent.js":
/*!********************************!*\
  !*** ./src/footerComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


class FooterComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(copyrightYear, sourceCodeURL) {
    super();
    this.copyrightYear = copyrightYear;
    this.sourceCodeURL = sourceCodeURL;
  }
  render() {
    this._element = document.createElement('footer');
    const currYear = new Date().getFullYear();
    if (!this.copyrightYear) {
      this.copyrightYear = currYear;
    }
    this._element.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('small', {}, (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
      href: this.sourceCodeURL,
      target: '_blank'
    }, 'Source Code'), ' © ', (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('time', {
      id: 'copyright-year'
    }, currYear > this.copyrightYear ? `${this.copyrightYear}-${currYear}` : this.copyrightYear), ' Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.')));
    return this._element;
  }
}

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/**
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value
 * @param  {...Node} children - Variable number of child nodes
 */
function createElement(type) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = document.createElement(type);

  // Props
  for (const [key, value] of Object.entries(props)) {
    element.setAttribute(key, value);
  }

  // Children Nodes
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  children.forEach(child => element.append(child));
  return element;
}

/***/ }),

/***/ "./src/weatherPropertyComponent.js":
/*!*****************************************!*\
  !*** ./src/weatherPropertyComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherPropertyComponent)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


class WeatherPropertyComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(label, id) {
    let postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';
    super();
    this._label = label;
    this._id = id;
    this._postfix = postfix;
    this._defaultValue = defaultValue;
    this._value = defaultValue;
  }
  set postfix(newPostfix) {
    if (newPostfix === this._postfix) {
      return;
    }
    this._postfix = newPostfix;
    this.render();
  }
  get postfix() {
    return this._postfix;
  }
  set value(newValue) {
    if (newValue === this._value) {
      return;
    }
    this._value = newValue;
    this.render();
  }
  get value() {
    return this._value;
  }
  render() {
    this.initializeRender(document.createElement('section'));
    this._element.append((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {}, `${this._label}: `), (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {
      id: this._id
    }));
    if (this._postfix) {
      this._element.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {}, this._postfix));
    }
    return this._element;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", "",{"version":3,"sources":["webpack://./src/meyerReset.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0, 0%, 95%);\n  --base-black: hsl(0, 0%, 10%); }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: var(--base-white, white);\n  color: var(--base-black, black);\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas: \"header\"\r \"topnav\"\r \"main\"\r \"footer\"; }\n\nheader {\n  grid-area: header; }\n\n#topnav {\n  grid-area: topnav; }\n\nmain {\n  grid-area: main; }\n\nfooter {\n  grid-area: footer; }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACI,6BAAa;EACb,6BAAa,EAAA;;AAGjB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,0CAA0C;EAC1C,+BAA+B;EAC/B,iBAAiB;EACjB,aAAa;EACb,sCAAsC;EACtC,yDAIY,EAAA;;AAGhB;EACI,iBAAiB,EAAA;;AAGrB;EACI,iBAAiB,EAAA;;AAGrB;EACI,eAAe,EAAA;;AAGnB;EACI,iBAAiB,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n:root {\r\n    --base-white: hsl(0, 0%, 95%);\r\n    --base-black: hsl(0, 0%, 10%);\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%; // 1rem = 10px\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    background-color: var(--base-white, white);\r\n    color: var(--base-black, black);\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr auto;\r\n    grid-template-areas: \r\n        \"header\"\r\n        \"topnav\"\r\n        \"main\"\r\n        \"footer\";\r\n}\r\n\r\nheader {\r\n    grid-area: header;\r\n}\r\n\r\n#topnav {\r\n    grid-area: topnav;\r\n}\r\n\r\nmain {\r\n    grid-area: main;\r\n}\r\n\r\nfooter {\r\n    grid-area: footer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/meyerReset.scss":
/*!*****************************!*\
  !*** ./src/meyerReset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./meyerReset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/arrow-right.svg":
/*!*****************************!*\
  !*** ./src/arrow-right.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97eec7a105bad23dc0c4.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meyerReset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meyerReset.scss */ "./src/meyerReset.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerComponent */ "./src/footerComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weatherPropertyComponent */ "./src/weatherPropertyComponent.js");
/* harmony import */ var _arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrow-right.svg */ "./src/arrow-right.svg");






const weatherApp = (() => {
  const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';
  const mainElement = document.querySelector('main');
  const searchForm = document.querySelector('#topnav form');
  const arrowRightImageElement = document.getElementById('wind-deg-img');
  const TemperatureUnits = {
    standard: {
      key: null,
      temperature: {
        name: 'Kelvin',
        abbreviation: 'K'
      },
      speed: {
        name: 'meters per second',
        abbreviation: 'm/s'
      }
    },
    metric: {
      key: 'metric',
      temperature: {
        name: 'Celsius',
        abbreviation: '\xB0C'
      },
      speed: {
        name: 'meters per second',
        abbreviation: 'm/s'
      }
    },
    imperial: {
      key: 'imperial',
      temperature: {
        name: 'Fahrenheit',
        abbreviation: '\xB0F'
      },
      speed: {
        name: 'miles per hour',
        abbreviation: 'mph'
      }
    }
  };
  let temperatureUnit = TemperatureUnits.imperial;
  let weatherPropertyComponents = {
    name: new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"](null, 'name'),
    'coord-lon': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('Long', 'coord-lon'),
    'coord-lat': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('Lat', 'coord-lat'),
    'weather-id': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('ID', 'weather-id'),
    'weather-main': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('Main', 'weather-main'),
    'weather-description': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('Description', 'weather-description'),
    'weather-icon': new _weatherPropertyComponent__WEBPACK_IMPORTED_MODULE_4__["default"]('Icon', 'weather-icon')
    // TODO: Add remaining
  };

  /**
   * 
   * @param {String} key 
   * @param {WeatherPropertyComponent} newWeatherPropertyComponent 
   */
  function addWeatherPropertyComponent(key, newWeatherPropertyComponent) {
    // Check argument types

    // Check if key already exists
    // ISSUE: Could use to replace existing key with new component

    // Add to weatherPropertyComponents object
    weatherPropertyComponents[key] = newWeatherPropertyComponent;
    return newWeatherPropertyComponent;
  }
  function createWeatherUnitsSelect() {
    const formSelectId = 'weather-units-select';
    const labelElement = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      'for': formSelectId
    }, (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createElement)('span', {}, 'Units: '));
    const selectElement = labelElement.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createElement)('select', {
      name: 'units',
      id: formSelectId,
      required: true
    }));
    selectElement.append(Object.entries(TemperatureUnits).map((key, tempObj) => {
      (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createElement)('input', {
        value: key
      }, `${tempObj.key.toUpperCase()} (${tempObj.temperature.abbreviation}, ${tempObj.speed.abbreviation})`);
    }));
    return labelElement;
  }
  function setTemperatureUnit(newTemperatureUnit) {
    // Check if valid temperature unit
    const bIsValid = Object.values(TemperatureUnits).some(item => item === newTemperatureUnit);
    // Check if the same temperature unit
    if (!bIsValid || temperatureUnit === newTemperatureUnit) {
      return;
    }
    temperatureUnit = newTemperatureUnit;
  }

  /**
   * 
   * @param {String} searchInputValue 
   * @returns {String}
   */
  function createFetchURL(searchInputValue) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&APPID=${openWeatherMapKey}`;
    if (temperatureUnit.key) {
      url += `&units=${temperatureUnit.key}`;
    }
    return url;
  }

  /**
   * 
   * @param {GeolocationPosition} geolocationPositon 
   * @returns {String}
   */
  function createFetchURLWithGeolocationPosition(geolocationPositon) {
    let url = `http://api.openweathermap.org/data/2.5/weather?`;

    // Lat
    url += `&lat=${geolocationPositon.coords.latitude}`;

    // Lon
    url += `&lon=${geolocationPositon.coords.longitude}`;

    // App ID
    url += `&APPID=${openWeatherMapKey}`;

    // Units
    if (temperatureUnit.key) {
      url += `&units=${temperatureUnit.key}`;
    }
    return url;
  }
  function setTextContentOnElement(element, value, postfix) {
    if (element) {
      if (value === undefined) {
        element.textContent = '-';
      } else {
        // Else value !== undefined
        let textContent = value;
        if (postfix) {
          textContent += ` ${postfix}`;
        }
        element.textContent = textContent;
      }
    }
  }
  function convertUnixTimestampToDate(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: 'numeric'
    });
  }

  /**
   * Converts number as degrees of circle to cardinal direction.
   * @param {Number} degrees 
   * @returns {String} Cardinal direction of wind.
   */
  function convertDegreesToDirection(degrees) {
    const directionDegrees = {
      'NNE': 11.25,
      'NE': 33.75,
      'ENE': 56.25,
      'E': 78.75,
      'ESE': 101.25,
      'SE': 123.75,
      'SSE': 146.25,
      'S': 168.75,
      'SSW': 191.25,
      'SW': 213.75,
      'WSW': 236.25,
      'W': 258.75,
      'WNW': 281.25,
      'NW': 303.75,
      'NNW': 326.25,
      'N': 348.75
    };

    // Clamp degrees parameter between 0-360

    // Find matching direction
    let prevDirection = 'N';
    for (const [direction, maxDegrees] of Object.entries(directionDegrees)) {
      if (degrees <= maxDegrees) {
        return prevDirection;
      }
      prevDirection = direction;
    }
    // If reach here, degrees is more than 348.75. Return 'N'.
    return 'N';
  }
  function displayWeatherData(weatherData) {
    // Name
    let cityName = weatherData.name;
    if ('sys' in weatherData && 'country' in weatherData.sys) {
      cityName += `, ${weatherData.sys.country}`;
    }
    setTextContentOnElement(document.getElementById('name'), cityName);

    // Coords
    if ('coord' in weatherData) {
      setTextContentOnElement(document.getElementById('coord-lon'), weatherData.coord.lon);
      setTextContentOnElement(document.getElementById('coord-lat'), weatherData.coord.lat);
    }

    // Weather
    if ('weather' in weatherData && weatherData.weather.length) {
      setTextContentOnElement(document.getElementById('weather-id'), weatherData.weather[0].id);
      setTextContentOnElement(document.getElementById('weather-main'), weatherData.weather[0].main);
      setTextContentOnElement(document.getElementById('weather-description'), weatherData.weather[0].description);

      // Icon
      const iconId = weatherData.weather[0].icon;
      const weatherIconElement = document.getElementById('weather-icon');
      if (iconId && weatherIconElement) {
        weatherIconElement.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
      }
    }

    // Main
    if ('main' in weatherData) {
      // Main Temperature
      setTextContentOnElement(document.getElementById('main-temp'), Math.round(weatherData.main.temp), temperatureUnit.temperature.abbreviation);

      // Feels Like Temperature
      setTextContentOnElement(document.getElementById('main-feels-like'), Math.round(weatherData.main.feels_like), temperatureUnit.temperature.abbreviation);

      // Low Temperature
      setTextContentOnElement(document.getElementById('main-temp-min'), Math.round(weatherData.main.temp_min), temperatureUnit.temperature.abbreviation);

      // High Temperature
      setTextContentOnElement(document.getElementById('main-temp-max'), Math.round(weatherData.main.temp_max), temperatureUnit.temperature.abbreviation);
      setTextContentOnElement(document.getElementById('main-pressure'), weatherData.main.pressure, 'hPa');
      setTextContentOnElement(document.getElementById('main-humidity'), weatherData.main.humidity, '%');
      setTextContentOnElement(document.getElementById('main-sea-level'), weatherData.main.sea_level, 'hPa');
      setTextContentOnElement(document.getElementById('main-grnd-level'), weatherData.main.grnd_level, 'hPa');
    }

    // Visibility
    setTextContentOnElement(document.getElementById('visibility'), weatherData.visibility, 'm');

    // Wind
    if ('wind' in weatherData) {
      setTextContentOnElement(document.getElementById('wind-speed'), weatherData.wind.speed, temperatureUnit.speed.abbreviation);
      setTextContentOnElement(document.getElementById('wind-deg'), convertDegreesToDirection(weatherData.wind.deg));
      setTextContentOnElement(document.getElementById('wind-gust'), weatherData.wind.gust, temperatureUnit.speed.abbreviation);

      // Set orientation of wind direction arrow
      if (arrowRightImageElement && 'deg' in weatherData.wind) {
        const arrowImg = arrowRightImageElement.querySelector('img');
        if (arrowImg) {
          arrowImg.style.transform = `rotate(${weatherData.wind.deg - 90}deg)`;
        }
      }
    }

    // Clouds
    if ('clouds' in weatherData) {
      setTextContentOnElement(document.getElementById('clouds'), weatherData.clouds.all, '%');
    }

    // Rain
    if ('rain' in weatherData) {
      setTextContentOnElement(document.getElementById('rain-1h'), weatherData.rain['1h'], 'mm');
      setTextContentOnElement(document.getElementById('rain-3h'), weatherData.rain['3h'], 'mm');
    }

    // Snow
    if ('snow' in weatherData) {
      setTextContentOnElement(document.getElementById('snow-1h'), weatherData.snow['1h'], 'mm');
      setTextContentOnElement(document.getElementById('snow-3h'), weatherData.snow['3h'], 'mm');
    }

    // Datetime
    // dt is in seconds. Must be multiplied by 1000 to get milliseconds.
    const datetimeLocal = new Date(weatherData.dt * 1000);
    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    setTextContentOnElement(document.getElementById('dt'), datetimeLocal.toLocaleString('en-us', options));

    // Timezone
    // dt and timezone are in seconds. Must be multiplied by 1000 to get milliseconds.
    // Method getTimezoneOffset() returns minutes. Must be multiplied by 60,000 to get milliseconds.
    const datetime = new Date((weatherData.dt + weatherData.timezone + datetimeLocal.getTimezoneOffset() * 60) * 1000);
    setTextContentOnElement(document.getElementById('timezone'), datetime.toLocaleString('en-us', options));

    // Sys
    if ('sys' in weatherData) {
      setTextContentOnElement(document.getElementById('sys-type'), weatherData.sys.type);
      setTextContentOnElement(document.getElementById('sys-id'), weatherData.sys.id);
      setTextContentOnElement(document.getElementById('sys-message'), weatherData.sys.message);
      setTextContentOnElement(document.getElementById('sys-sunrise'), convertUnixTimestampToDate(weatherData.sys.sunrise));
      setTextContentOnElement(document.getElementById('sys-sunset'), convertUnixTimestampToDate(weatherData.sys.sunset));
    }
  }
  function init() {
    // Use Geolocation API to get User's current position if available
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const unitsSelect = searchForm.querySelector('[name="units"]');
        if (unitsSelect) {
          setTemperatureUnit(TemperatureUnits[unitsSelect.value]);
        }
        fetch(createFetchURLWithGeolocationPosition(position), {
          mode: 'cors'
        }).then(response => response.json()).then(data => {
          console.log(data);
          // Display weather data if response is valid
          if ('cod' in data && data.cod === 200) {
            displayWeatherData(data);
          } else {
            // Response not valid
          }
        });
      });
    }

    // Search form submit handler
    if (searchForm) {
      searchForm.addEventListener('submit', e => {
        e.preventDefault();
        const searchInput = searchForm.querySelector('[name="search"]');
        const unitsSelect = searchForm.querySelector('[name="units"]');
        if (unitsSelect) {
          setTemperatureUnit(TemperatureUnits[unitsSelect.value]);
        }
        if (searchInput) {
          fetch(createFetchURL(searchInput.value), {
            mode: 'cors'
          }).then(response => response.json()).then(data => {
            console.log(data);
            // Display weather data if response is valid
            if ('cod' in data && data.cod === 200) {
              displayWeatherData(data);
            } else {
              // Response not valid
            }
          });
        }
      }, false);
    }

    // Image - Wind Direction Arrow
    if (arrowRightImageElement) {
      const arrowRightImage = new Image();
      arrowRightImage.src = _arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__;
      arrowRightImage.alt = 'wind direction arrow';
      arrowRightImageElement.appendChild(arrowRightImage);
    }

    // Footer Component
    mainElement.appendChild(new _footerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](2022, 'https://github.com/toddbrentlinger/odin-project-weather-app').render());
  }
  return {
    init
  };
})();
weatherApp.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQU07Y0FDSDtZQUNKO1VBQ0osQ0FBQyxDQUFDO1FBQ1Y7TUFDSixDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ2I7O0lBRUE7SUFDQSxJQUFJaEgsc0JBQXNCLEVBQUU7TUFDeEIsTUFBTXdILGVBQWUsR0FBRyxJQUFJQyxLQUFLLEVBQUU7TUFDbkNELGVBQWUsQ0FBQ3ZELEdBQUcsR0FBR3ZFLDZDQUFhO01BQ25DOEgsZUFBZSxDQUFDRSxHQUFHLEdBQUcsc0JBQXNCO01BQzVDMUgsc0JBQXNCLENBQUNyQyxXQUFXLENBQUM2SixlQUFlLENBQUM7SUFDdkQ7O0lBRUE7SUFDQTNILFdBQVcsQ0FBQ2xDLFdBQVcsQ0FDbkIsSUFBSUMsd0RBQWUsQ0FBQyxJQUFJLEVBQUUsNkRBQTZELENBQUMsQ0FDbkZSLE1BQU0sRUFBRSxDQUNoQjtFQUNMO0VBRUEsT0FBTztJQUNIaUo7RUFDSixDQUFDO0FBQ0wsQ0FBQyxHQUFHO0FBRUoxRyxVQUFVLENBQUMwRyxJQUFJLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9iYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9mb290ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlclByb3BlcnR5Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tZXllclJlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21leWVyUmVzZXQuc2Nzcz82NGQwIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Byb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGVycy9TZXR0ZXJzXHJcblxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLl9wcm9wcyA9IG5ld1Byb3BzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG5cclxuICAgIGVtcHR5RWxlbWVudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX2VsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVSZW5kZXIoYmFzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdoMScsIHt9LCAnQmFzZSBDb21wb25lbnQhJylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb3B5cmlnaHRZZWFyLCBzb3VyY2VDb2RlVVJMKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvcHlyaWdodFllYXIgPSBjb3B5cmlnaHRZZWFyO1xyXG4gICAgICAgIHRoaXMuc291cmNlQ29kZVVSTCA9IHNvdXJjZUNvZGVVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBjdXJyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvcHlyaWdodFllYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3B5cmlnaHRZZWFyID0gY3VyclllYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgJ3AnLFxyXG4gICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiB0aGlzLnNvdXJjZUNvZGVVUkwsIHRhcmdldDogJ19ibGFuayd9LCAnU291cmNlIENvZGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAnIMKpICcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgndGltZScsIHsgaWQ6ICdjb3B5cmlnaHQteWVhcicgfSwgY3VyclllYXIgPiB0aGlzLmNvcHlyaWdodFllYXIgPyBgJHt0aGlzLmNvcHlyaWdodFllYXJ9LSR7Y3VyclllYXJ9YCA6IHRoaXMuY29weXJpZ2h0WWVhciksXHJcbiAgICAgICAgICAgICAgICAgICAgJyBUb2RkIEJyZW50bGluZ2VyLCBTYW50YSBDcnV6LCBDQSwgVVNBLiBBbGwgUmlnaHRzIFJlc2VydmVkLidcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIEVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBFbGVtZW50IGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZVxyXG4gKiBAcGFyYW0gIHsuLi5Ob2RlfSBjaGlsZHJlbiAtIFZhcmlhYmxlIG51bWJlciBvZiBjaGlsZCBub2Rlc1xyXG4gKi9cclxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAvLyBQcm9wc1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hpbGRyZW4gTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZChjaGlsZCkpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBpZCwgcG9zdGZpeCA9ICcnLCBkZWZhdWx0VmFsdWUgPSAnLScpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLl9wb3N0Zml4ID0gcG9zdGZpeDtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3N0Zml4KG5ld1Bvc3RmaXgpIHtcclxuICAgICAgICBpZiAobmV3UG9zdGZpeCA9PT0gdGhpcy5fcG9zdGZpeCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5fcG9zdGZpeCA9IG5ld1Bvc3RmaXg7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9zdGZpeCgpIHsgcmV0dXJuIHRoaXMuX3Bvc3RmaXg7IH1cclxuXHJcbiAgICBzZXQgdmFsdWUobmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUmVuZGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdzcGFuJywge30sIGAke3RoaXMuX2xhYmVsfTogYCksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7aWQ6IHRoaXMuX2lkfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9zdGZpeCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCB0aGlzLl9wb3N0Zml4KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21leWVyUmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFFRDs7Ozs7Ozs7Ozs7OztFQWFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYXNlLXdoaXRlOiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUsIHdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1iYXNlLWJsYWNrLCBibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiXFxyIFxcXCJ0b3BuYXZcXFwiXFxyIFxcXCJtYWluXFxcIlxcciBcXFwiZm9vdGVyXFxcIjsgfVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjsgfVxcblxcbiN0b3BuYXYge1xcbiAgZ3JpZC1hcmVhOiB0b3BuYXY7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjsgfVxcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLDZCQUFhO0VBQ2IsNkJBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLHdJQUF3STtFQUN4SSwwQ0FBMEM7RUFDMUMsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHlEQUlZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmFzZS13aGl0ZTogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IC8vIDFyZW0gPSAxMHB4XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUsIHdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJhc2UtYmxhY2ssIGJsYWNrKTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJoZWFkZXJcXFwiXFxyXFxuICAgICAgICBcXFwidG9wbmF2XFxcIlxcclxcbiAgICAgICAgXFxcIm1haW5cXFwiXFxyXFxuICAgICAgICBcXFwiZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbiN0b3BuYXYge1xcclxcbiAgICBncmlkLWFyZWE6IHRvcG5hdjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyUmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyUmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21leWVyUmVzZXQuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSAnLi9mb290ZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5pbXBvcnQgV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IGZyb20gJy4vd2VhdGhlclByb3BlcnR5Q29tcG9uZW50JztcclxuaW1wb3J0IEFycm93UmlnaHRTVkcgZnJvbSAnLi9hcnJvdy1yaWdodC5zdmcnO1xyXG5cclxuY29uc3Qgd2VhdGhlckFwcCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuV2VhdGhlck1hcEtleSA9ICc0ZTdjY2VhZmVlNTZlYmI1OGY1OThhNmNkYWQxYTkwOSc7XHJcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wbmF2IGZvcm0nKTtcclxuICAgIGNvbnN0IGFycm93UmlnaHRJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1kZWctaW1nJyk7XHJcbiAgICBjb25zdCBUZW1wZXJhdHVyZVVuaXRzID0ge1xyXG4gICAgICAgIHN0YW5kYXJkOiB7XHJcbiAgICAgICAgICAgIGtleTogbnVsbCxcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdLZWx2aW4nLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnSycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWVkOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWV0ZXJzIHBlciBzZWNvbmQnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnbS9zJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldHJpYzoge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRyaWMnLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NlbHNpdXMnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnXFx4QjBDJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtZXRlcnMgcGVyIHNlY29uZCcsXHJcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246ICdtL3MnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1wZXJpYWw6IHtcclxuICAgICAgICAgICAga2V5OiAnaW1wZXJpYWwnLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZhaHJlbmhlaXQnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnXFx4QjBGJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtaWxlcyBwZXIgaG91cicsXHJcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246ICdtcGgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0ZW1wZXJhdHVyZVVuaXQgPSBUZW1wZXJhdHVyZVVuaXRzLmltcGVyaWFsO1xyXG4gICAgXHJcbiAgICBsZXQgd2VhdGhlclByb3BlcnR5Q29tcG9uZW50cyA9IHtcclxuICAgICAgICBuYW1lOiBuZXcgV2VhdGhlclByb3BlcnR5Q29tcG9uZW50KG51bGwsICduYW1lJyksXHJcbiAgICAgICAgJ2Nvb3JkLWxvbic6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0xvbmcnLCAnY29vcmQtbG9uJyksXHJcbiAgICAgICAgJ2Nvb3JkLWxhdCc6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0xhdCcsICdjb29yZC1sYXQnKSxcclxuICAgICAgICAnd2VhdGhlci1pZCc6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0lEJywgJ3dlYXRoZXItaWQnKSxcclxuICAgICAgICAnd2VhdGhlci1tYWluJzogbmV3IFdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCgnTWFpbicsICd3ZWF0aGVyLW1haW4nKSxcclxuICAgICAgICAnd2VhdGhlci1kZXNjcmlwdGlvbic6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0Rlc2NyaXB0aW9uJywgJ3dlYXRoZXItZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAnd2VhdGhlci1pY29uJzogbmV3IFdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCgnSWNvbicsICd3ZWF0aGVyLWljb24nKSxcclxuICAgICAgICAvLyBUT0RPOiBBZGQgcmVtYWluaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFxyXG4gICAgICogQHBhcmFtIHtXZWF0aGVyUHJvcGVydHlDb21wb25lbnR9IG5ld1dlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCBcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkV2VhdGhlclByb3BlcnR5Q29tcG9uZW50KGtleSwgbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgYXJndW1lbnQgdHlwZXNcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYga2V5IGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgLy8gSVNTVUU6IENvdWxkIHVzZSB0byByZXBsYWNlIGV4aXN0aW5nIGtleSB3aXRoIG5ldyBjb21wb25lbnRcclxuXHJcbiAgICAgICAgLy8gQWRkIHRvIHdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudHMgb2JqZWN0XHJcbiAgICAgICAgd2VhdGhlclByb3BlcnR5Q29tcG9uZW50c1trZXldID0gbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJVbml0c1NlbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU2VsZWN0SWQgPSAnd2VhdGhlci11bml0cy1zZWxlY3QnO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdsYWJlbCcsIFxyXG4gICAgICAgICAgICB7J2Zvcic6IGZvcm1TZWxlY3RJZH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ1VuaXRzOiAnKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtuYW1lOiAndW5pdHMnLCBpZDogZm9ybVNlbGVjdElkLCByZXF1aXJlZDogdHJ1ZX0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmQoXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFRlbXBlcmF0dXJlVW5pdHMpLm1hcCgoa2V5LCB0ZW1wT2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdpbnB1dCcsIFxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZToga2V5fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGVtcE9iai5rZXkudG9VcHBlckNhc2UoKX0gKCR7dGVtcE9iai50ZW1wZXJhdHVyZS5hYmJyZXZpYXRpb259LCAke3RlbXBPYmouc3BlZWQuYWJicmV2aWF0aW9ufSlgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhYmVsRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUZW1wZXJhdHVyZVVuaXQobmV3VGVtcGVyYXR1cmVVbml0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdmFsaWQgdGVtcGVyYXR1cmUgdW5pdFxyXG4gICAgICAgIGNvbnN0IGJJc1ZhbGlkID0gT2JqZWN0LnZhbHVlcyhUZW1wZXJhdHVyZVVuaXRzKS5zb21lKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPT09IG5ld1RlbXBlcmF0dXJlVW5pdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNhbWUgdGVtcGVyYXR1cmUgdW5pdFxyXG4gICAgICAgIGlmICghYklzVmFsaWQgfHwgdGVtcGVyYXR1cmVVbml0ID09PSBuZXdUZW1wZXJhdHVyZVVuaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGVtcGVyYXR1cmVVbml0ID0gbmV3VGVtcGVyYXR1cmVVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoSW5wdXRWYWx1ZSBcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZldGNoVVJMKHNlYXJjaElucHV0VmFsdWUpIHtcclxuICAgICAgICBsZXQgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaElucHV0VmFsdWV9JkFQUElEPSR7b3BlbldlYXRoZXJNYXBLZXl9YDtcclxuXHJcbiAgICAgICAgaWYgKHRlbXBlcmF0dXJlVW5pdC5rZXkpIHtcclxuICAgICAgICAgICAgdXJsICs9IGAmdW5pdHM9JHt0ZW1wZXJhdHVyZVVuaXQua2V5fWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uUG9zaXRpb259IGdlb2xvY2F0aW9uUG9zaXRvbiBcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZldGNoVVJMV2l0aEdlb2xvY2F0aW9uUG9zaXRpb24oZ2VvbG9jYXRpb25Qb3NpdG9uKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2A7XHJcblxyXG4gICAgICAgIC8vIExhdFxyXG4gICAgICAgIHVybCArPSBgJmxhdD0ke2dlb2xvY2F0aW9uUG9zaXRvbi5jb29yZHMubGF0aXR1ZGV9YDtcclxuXHJcbiAgICAgICAgLy8gTG9uXHJcbiAgICAgICAgdXJsICs9IGAmbG9uPSR7Z2VvbG9jYXRpb25Qb3NpdG9uLmNvb3Jkcy5sb25naXR1ZGV9YDtcclxuXHJcbiAgICAgICAgLy8gQXBwIElEXHJcbiAgICAgICAgdXJsICs9IGAmQVBQSUQ9JHtvcGVuV2VhdGhlck1hcEtleX1gO1xyXG5cclxuICAgICAgICAvLyBVbml0c1xyXG4gICAgICAgIGlmICh0ZW1wZXJhdHVyZVVuaXQua2V5KSB7XHJcbiAgICAgICAgICAgIHVybCArPSBgJnVuaXRzPSR7dGVtcGVyYXR1cmVVbml0LmtleX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUZXh0Q29udGVudE9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSwgcG9zdGZpeCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBFbHNlIHZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3RmaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudCArPSBgICR7cG9zdGZpeH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZXN0YW1wVG9EYXRlKHVuaXhUaW1lc3RhbXApIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApXHJcbiAgICAgICAgICAgIC50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLXVzJywge1xyXG4gICAgICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgbnVtYmVyIGFzIGRlZ3JlZXMgb2YgY2lyY2xlIHRvIGNhcmRpbmFsIGRpcmVjdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWdyZWVzIFxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gQ2FyZGluYWwgZGlyZWN0aW9uIG9mIHdpbmQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnREZWdyZWVzVG9EaXJlY3Rpb24oZGVncmVlcykge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkRlZ3JlZXMgPSB7XHJcbiAgICAgICAgICAgICdOTkUnOiAxMS4yNSxcclxuICAgICAgICAgICAgJ05FJzogMzMuNzUsXHJcbiAgICAgICAgICAgICdFTkUnOiA1Ni4yNSxcclxuICAgICAgICAgICAgJ0UnOiA3OC43NSxcclxuICAgICAgICAgICAgJ0VTRSc6IDEwMS4yNSxcclxuICAgICAgICAgICAgJ1NFJzogMTIzLjc1LFxyXG4gICAgICAgICAgICAnU1NFJzogMTQ2LjI1LFxyXG4gICAgICAgICAgICAnUyc6IDE2OC43NSxcclxuICAgICAgICAgICAgJ1NTVyc6IDE5MS4yNSxcclxuICAgICAgICAgICAgJ1NXJzogMjEzLjc1LFxyXG4gICAgICAgICAgICAnV1NXJzogMjM2LjI1LFxyXG4gICAgICAgICAgICAnVyc6IDI1OC43NSxcclxuICAgICAgICAgICAgJ1dOVyc6IDI4MS4yNSxcclxuICAgICAgICAgICAgJ05XJzogMzAzLjc1LFxyXG4gICAgICAgICAgICAnTk5XJzogMzI2LjI1LFxyXG4gICAgICAgICAgICAnTic6IDM0OC43NSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDbGFtcCBkZWdyZWVzIHBhcmFtZXRlciBiZXR3ZWVuIDAtMzYwXHJcblxyXG4gICAgICAgIC8vIEZpbmQgbWF0Y2hpbmcgZGlyZWN0aW9uXHJcbiAgICAgICAgbGV0IHByZXZEaXJlY3Rpb24gPSAnTic7XHJcbiAgICAgICAgZm9yIChjb25zdCBbZGlyZWN0aW9uLCBtYXhEZWdyZWVzXSBvZiBPYmplY3QuZW50cmllcyhkaXJlY3Rpb25EZWdyZWVzKSkge1xyXG4gICAgICAgICAgICBpZiAoZGVncmVlcyA8PSBtYXhEZWdyZWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldkRpcmVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiByZWFjaCBoZXJlLCBkZWdyZWVzIGlzIG1vcmUgdGhhbiAzNDguNzUuIFJldHVybiAnTicuXHJcbiAgICAgICAgcmV0dXJuICdOJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcclxuICAgICAgICAvLyBOYW1lXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubmFtZTtcclxuICAgICAgICBpZiAoJ3N5cycgaW4gd2VhdGhlckRhdGEgJiYgJ2NvdW50cnknIGluIHdlYXRoZXJEYXRhLnN5cykge1xyXG4gICAgICAgICAgICBjaXR5TmFtZSArPSBgLCAke3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyksIGNpdHlOYW1lKTtcclxuXHJcbiAgICAgICAgLy8gQ29vcmRzXHJcbiAgICAgICAgaWYgKCdjb29yZCcgaW4gd2VhdGhlckRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb3JkLWxvbicpLCB3ZWF0aGVyRGF0YS5jb29yZC5sb24pO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmQtbGF0JyksIHdlYXRoZXJEYXRhLmNvb3JkLmxhdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZWF0aGVyXHJcbiAgICAgICAgaWYgKCd3ZWF0aGVyJyBpbiB3ZWF0aGVyRGF0YSAmJiB3ZWF0aGVyRGF0YS53ZWF0aGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pZCcpLCB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmlkKTtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItbWFpbicpLCB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4pO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1kZXNjcmlwdGlvbicpLCB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEljb25cclxuICAgICAgICAgICAgY29uc3QgaWNvbklkID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XHJcbiAgICAgICAgICAgIGlmIChpY29uSWQgJiYgd2VhdGhlckljb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbklkfUAyeC5wbmdgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYWluXHJcbiAgICAgICAgaWYgKCdtYWluJyBpbiB3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgICAgICAvLyBNYWluIFRlbXBlcmF0dXJlXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcCcpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApLFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVVbml0LnRlbXBlcmF0dXJlLmFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gRmVlbHMgTGlrZSBUZW1wZXJhdHVyZVxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWZlZWxzLWxpa2UnKSxcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKSxcclxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlVW5pdC50ZW1wZXJhdHVyZS5hYmJyZXZpYXRpb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvdyBUZW1wZXJhdHVyZVxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXRlbXAtbWluJyksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pLFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVVbml0LnRlbXBlcmF0dXJlLmFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gSGlnaCBUZW1wZXJhdHVyZVxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXRlbXAtbWF4JyksXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpLFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVVbml0LnRlbXBlcmF0dXJlLmFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1wcmVzc3VyZScpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZSxcclxuICAgICAgICAgICAgICAgICdoUGEnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWh1bWlkaXR5JyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICAgICAgJyUnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXNlYS1sZXZlbCcpLCBcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLm1haW4uc2VhX2xldmVsLFxyXG4gICAgICAgICAgICAgICAgJ2hQYSdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tZ3JuZC1sZXZlbCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEubWFpbi5ncm5kX2xldmVsLFxyXG4gICAgICAgICAgICAgICAgJ2hQYSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZpc2liaWxpdHlcclxuICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc2liaWxpdHknKSxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEudmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgJ20nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gV2luZFxyXG4gICAgICAgIGlmICgnd2luZCcgaW4gd2VhdGhlckRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGVlZCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlVW5pdC5zcGVlZC5hYmJyZXZpYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1kZWcnKSxcclxuICAgICAgICAgICAgICAgIGNvbnZlcnREZWdyZWVzVG9EaXJlY3Rpb24od2VhdGhlckRhdGEud2luZC5kZWcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtZ3VzdCcpLCBcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmQuZ3VzdCxcclxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlVW5pdC5zcGVlZC5hYmJyZXZpYXRpb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBvcmllbnRhdGlvbiBvZiB3aW5kIGRpcmVjdGlvbiBhcnJvd1xyXG4gICAgICAgICAgICBpZiAoYXJyb3dSaWdodEltYWdlRWxlbWVudCAmJiAnZGVnJyBpbiB3ZWF0aGVyRGF0YS53aW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJvd0ltZyA9IGFycm93UmlnaHRJbWFnZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyb3dJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0ltZy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7d2VhdGhlckRhdGEud2luZC5kZWcgLSA5MH1kZWcpYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvdWRzXHJcbiAgICAgICAgaWYgKCdjbG91ZHMnIGluIHdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3VkcycpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuY2xvdWRzLmFsbCxcclxuICAgICAgICAgICAgICAgICclJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmFpblxyXG4gICAgICAgIGlmICgncmFpbicgaW4gd2VhdGhlckRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbi0xaCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucmFpblsnMWgnXSxcclxuICAgICAgICAgICAgICAgICdtbSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbi0zaCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucmFpblsnM2gnXSxcclxuICAgICAgICAgICAgICAgICdtbSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNub3dcclxuICAgICAgICBpZiAoJ3Nub3cnIGluIHdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3ctMWgnKSxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnNub3dbJzFoJ10sXHJcbiAgICAgICAgICAgICAgICAnbW0nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3ctM2gnKSxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnNub3dbJzNoJ10sXHJcbiAgICAgICAgICAgICAgICAnbW0nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEYXRldGltZVxyXG4gICAgICAgIC8vIGR0IGlzIGluIHNlY29uZHMuIE11c3QgYmUgbXVsdGlwbGllZCBieSAxMDAwIHRvIGdldCBtaWxsaXNlY29uZHMuXHJcbiAgICAgICAgY29uc3QgZGF0ZXRpbWVMb2NhbCA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmR0ICogMTAwMCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcclxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R0JyksIFxyXG4gICAgICAgICAgICBkYXRldGltZUxvY2FsLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIG9wdGlvbnMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gVGltZXpvbmVcclxuICAgICAgICAvLyBkdCBhbmQgdGltZXpvbmUgYXJlIGluIHNlY29uZHMuIE11c3QgYmUgbXVsdGlwbGllZCBieSAxMDAwIHRvIGdldCBtaWxsaXNlY29uZHMuXHJcbiAgICAgICAgLy8gTWV0aG9kIGdldFRpbWV6b25lT2Zmc2V0KCkgcmV0dXJucyBtaW51dGVzLiBNdXN0IGJlIG11bHRpcGxpZWQgYnkgNjAsMDAwIHRvIGdldCBtaWxsaXNlY29uZHMuXHJcbiAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBuZXcgRGF0ZSgod2VhdGhlckRhdGEuZHQgKyB3ZWF0aGVyRGF0YS50aW1lem9uZSArIGRhdGV0aW1lTG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSo2MCkqIDEwMDApO1xyXG4gICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXpvbmUnKSwgXHJcbiAgICAgICAgICAgIGRhdGV0aW1lLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIG9wdGlvbnMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gU3lzXHJcbiAgICAgICAgaWYgKCdzeXMnIGluIHdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeXMtdHlwZScpLCB3ZWF0aGVyRGF0YS5zeXMudHlwZSk7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeXMtaWQnKSwgd2VhdGhlckRhdGEuc3lzLmlkKTtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5cy1tZXNzYWdlJyksIHdlYXRoZXJEYXRhLnN5cy5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5cy1zdW5yaXNlJyksIFxyXG4gICAgICAgICAgICAgICAgY29udmVydFVuaXhUaW1lc3RhbXBUb0RhdGUod2VhdGhlckRhdGEuc3lzLnN1bnJpc2UpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5cy1zdW5zZXQnKSwgXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0VW5peFRpbWVzdGFtcFRvRGF0ZSh3ZWF0aGVyRGF0YS5zeXMuc3Vuc2V0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICAvLyBVc2UgR2VvbG9jYXRpb24gQVBJIHRvIGdldCBVc2VyJ3MgY3VycmVudCBwb3NpdGlvbiBpZiBhdmFpbGFibGVcclxuICAgICAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRzU2VsZWN0ID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInVuaXRzXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXRzU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGVtcGVyYXR1cmVVbml0KFRlbXBlcmF0dXJlVW5pdHNbdW5pdHNTZWxlY3QudmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChjcmVhdGVGZXRjaFVSTFdpdGhHZW9sb2NhdGlvblBvc2l0aW9uKHBvc2l0aW9uKSwge21vZGU6ICdjb3JzJyx9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHdlYXRoZXIgZGF0YSBpZiByZXNwb25zZSBpcyB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ2NvZCcgaW4gZGF0YSAmJiBkYXRhLmNvZCA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBub3QgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNlYXJjaCBmb3JtIHN1Ym1pdCBoYW5kbGVyXHJcbiAgICAgICAgaWYgKHNlYXJjaEZvcm0pIHtcclxuICAgICAgICAgICAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZWFyY2hcIl0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRzU2VsZWN0ID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInVuaXRzXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXRzU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGVtcGVyYXR1cmVVbml0KFRlbXBlcmF0dXJlVW5pdHNbdW5pdHNTZWxlY3QudmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChjcmVhdGVGZXRjaFVSTChzZWFyY2hJbnB1dC52YWx1ZSksIHttb2RlOiAnY29ycycsfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgd2VhdGhlciBkYXRhIGlmIHJlc3BvbnNlIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ2NvZCcgaW4gZGF0YSAmJiBkYXRhLmNvZCA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBub3QgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEltYWdlIC0gV2luZCBEaXJlY3Rpb24gQXJyb3dcclxuICAgICAgICBpZiAoYXJyb3dSaWdodEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJvd1JpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgYXJyb3dSaWdodEltYWdlLnNyYyA9IEFycm93UmlnaHRTVkc7XHJcbiAgICAgICAgICAgIGFycm93UmlnaHRJbWFnZS5hbHQgPSAnd2luZCBkaXJlY3Rpb24gYXJyb3cnO1xyXG4gICAgICAgICAgICBhcnJvd1JpZ2h0SW1hZ2VFbGVtZW50LmFwcGVuZENoaWxkKGFycm93UmlnaHRJbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gRm9vdGVyIENvbXBvbmVudFxyXG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBuZXcgRm9vdGVyQ29tcG9uZW50KDIwMjIsICdodHRwczovL2dpdGh1Yi5jb20vdG9kZGJyZW50bGluZ2VyL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcCcpXHJcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG53ZWF0aGVyQXBwLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJCYXNlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIl9lbGVtZW50IiwiX3Byb3BzIiwiZWxlbWVudCIsIm5ld1Byb3BzIiwicmVuZGVyIiwiZW1wdHlFbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiaW5pdGlhbGl6ZVJlbmRlciIsImJhc2VFbGVtZW50IiwiZG9jdW1lbnQiLCJhcHBlbmRDaGlsZCIsIkZvb3RlckNvbXBvbmVudCIsImNvcHlyaWdodFllYXIiLCJzb3VyY2VDb2RlVVJMIiwiY3VyclllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJocmVmIiwidGFyZ2V0IiwiaWQiLCJ0eXBlIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJhcHBlbmQiLCJXZWF0aGVyUHJvcGVydHlDb21wb25lbnQiLCJsYWJlbCIsInBvc3RmaXgiLCJkZWZhdWx0VmFsdWUiLCJfbGFiZWwiLCJfaWQiLCJfcG9zdGZpeCIsIl9kZWZhdWx0VmFsdWUiLCJfdmFsdWUiLCJuZXdQb3N0Zml4IiwibmV3VmFsdWUiLCJBcnJvd1JpZ2h0U1ZHIiwid2VhdGhlckFwcCIsIm9wZW5XZWF0aGVyTWFwS2V5IiwibWFpbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsImFycm93UmlnaHRJbWFnZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlRlbXBlcmF0dXJlVW5pdHMiLCJzdGFuZGFyZCIsInRlbXBlcmF0dXJlIiwibmFtZSIsImFiYnJldmlhdGlvbiIsInNwZWVkIiwibWV0cmljIiwiaW1wZXJpYWwiLCJ0ZW1wZXJhdHVyZVVuaXQiLCJ3ZWF0aGVyUHJvcGVydHlDb21wb25lbnRzIiwiYWRkV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IiwibmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50IiwiY3JlYXRlV2VhdGhlclVuaXRzU2VsZWN0IiwiZm9ybVNlbGVjdElkIiwibGFiZWxFbGVtZW50Iiwic2VsZWN0RWxlbWVudCIsInJlcXVpcmVkIiwibWFwIiwidGVtcE9iaiIsInRvVXBwZXJDYXNlIiwic2V0VGVtcGVyYXR1cmVVbml0IiwibmV3VGVtcGVyYXR1cmVVbml0IiwiYklzVmFsaWQiLCJ2YWx1ZXMiLCJzb21lIiwiaXRlbSIsImNyZWF0ZUZldGNoVVJMIiwic2VhcmNoSW5wdXRWYWx1ZSIsInVybCIsImNyZWF0ZUZldGNoVVJMV2l0aEdlb2xvY2F0aW9uUG9zaXRpb24iLCJnZW9sb2NhdGlvblBvc2l0b24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldFRleHRDb250ZW50T25FbGVtZW50IiwidW5kZWZpbmVkIiwidGV4dENvbnRlbnQiLCJjb252ZXJ0VW5peFRpbWVzdGFtcFRvRGF0ZSIsInVuaXhUaW1lc3RhbXAiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiY29udmVydERlZ3JlZXNUb0RpcmVjdGlvbiIsImRlZ3JlZXMiLCJkaXJlY3Rpb25EZWdyZWVzIiwicHJldkRpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm1heERlZ3JlZXMiLCJkaXNwbGF5V2VhdGhlckRhdGEiLCJ3ZWF0aGVyRGF0YSIsImNpdHlOYW1lIiwic3lzIiwiY291bnRyeSIsImNvb3JkIiwibG9uIiwibGF0Iiwid2VhdGhlciIsImxlbmd0aCIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImljb25JZCIsImljb24iLCJ3ZWF0aGVySWNvbkVsZW1lbnQiLCJzcmMiLCJNYXRoIiwicm91bmQiLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJwcmVzc3VyZSIsImh1bWlkaXR5Iiwic2VhX2xldmVsIiwiZ3JuZF9sZXZlbCIsInZpc2liaWxpdHkiLCJ3aW5kIiwiZGVnIiwiZ3VzdCIsImFycm93SW1nIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbG91ZHMiLCJhbGwiLCJyYWluIiwic25vdyIsImRhdGV0aW1lTG9jYWwiLCJkdCIsIm9wdGlvbnMiLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJkYXRldGltZSIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtZXNzYWdlIiwic3VucmlzZSIsInN1bnNldCIsImluaXQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwidW5pdHNTZWxlY3QiLCJmZXRjaCIsIm1vZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb2QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoSW5wdXQiLCJhcnJvd1JpZ2h0SW1hZ2UiLCJJbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=