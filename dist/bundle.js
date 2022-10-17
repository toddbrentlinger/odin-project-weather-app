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





const weatherApp = (() => {
  const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';
  const mainElement = document.querySelector('main');
  const searchForm = document.querySelector('#topnav form');
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
    return new Date(unixTimestamp * 1000).toLocaleTimeString();
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
      setTextContentOnElement(document.getElementById('main-temp'), weatherData.main.temp, temperatureUnit.temperature.abbreviation);

      // Feels Like Temperature
      setTextContentOnElement(document.getElementById('main-feels-like'), weatherData.main.feels_like, temperatureUnit.temperature.abbreviation);

      // Low Temperature
      setTextContentOnElement(document.getElementById('main-temp-min'), weatherData.main.temp_min, temperatureUnit.temperature.abbreviation);

      // High Temperature
      setTextContentOnElement(document.getElementById('main-temp-max'), weatherData.main.temp_max, temperatureUnit.temperature.abbreviation);
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
      setTextContentOnElement(document.getElementById('wind-deg'), weatherData.wind.deg, 'deg');
      setTextContentOnElement(document.getElementById('wind-gust'), weatherData.wind.gust, temperatureUnit.speed.abbreviation);
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
    let datetime = new Date(weatherData.dt * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    setTextContentOnElement(document.getElementById('dt'), datetime.toLocaleString('en-us', options));

    // Timezone
    datetime = new Date((weatherData.dt + weatherData.timezone) * 1000);
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
        console.log(position);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxDQUFDRCxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFFOUQsSUFBSWdHLFdBQVcsRUFBRTtVQUNiMUUsa0JBQWtCLENBQUNwQixnQkFBZ0IsQ0FBQzhGLFdBQVcsQ0FBQ3RILEtBQUssQ0FBQyxDQUFDO1FBQzNEO1FBRUEsSUFBSWlJLFdBQVcsRUFBRTtVQUNiVixLQUFLLENBQUNyRSxjQUFjLENBQUMrRSxXQUFXLENBQUNqSSxLQUFLLENBQUMsRUFBRTtZQUFDd0gsSUFBSSxFQUFFO1VBQU8sQ0FBQyxDQUFDLENBQ3BEQyxJQUFJLENBQUVDLFFBQVEsSUFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFFRyxJQUFJLElBQUs7WUFDWlIsT0FBTyxDQUFDQyxHQUFHLENBQUNPLElBQUksQ0FBQztZQUNqQjtZQUNBLElBQUksS0FBSyxJQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsR0FBRyxLQUFLLEdBQUcsRUFBRTtjQUNuQzdELGtCQUFrQixDQUFDNEQsSUFBSSxDQUFDO1lBQzVCLENBQUMsTUFBTTtjQUNIO1lBQ0o7VUFDSixDQUFDLENBQUM7UUFDVjtNQUNKLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDYjs7SUFFQTtJQUNBdkcsV0FBVyxDQUFDakMsV0FBVyxDQUNuQixJQUFJQyx3REFBZSxDQUFDLElBQUksRUFBRSw2REFBNkQsQ0FBQyxDQUNuRlIsTUFBTSxFQUFFLENBQ2hCO0VBQ0w7RUFFQSxPQUFPO0lBQ0hrSTtFQUNKLENBQUM7QUFDTCxDQUFDLEdBQUc7QUFFSjVGLFVBQVUsQ0FBQzRGLElBQUksRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2Jhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2Zvb3RlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyUHJvcGVydHlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21leWVyUmVzZXQuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbWV5ZXJSZXNldC5zY3NzPzY0ZDAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldHRlcnMvU2V0dGVyc1xyXG5cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcHMgPSBuZXdQcm9wcztcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuXHJcbiAgICBlbXB0eUVsZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9lbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplUmVuZGVyKGJhc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVSZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnaDEnLCB7fSwgJ0Jhc2UgQ29tcG9uZW50IScpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29weXJpZ2h0WWVhciwgc291cmNlQ29kZVVSTCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb3B5cmlnaHRZZWFyID0gY29weXJpZ2h0WWVhcjtcclxuICAgICAgICB0aGlzLnNvdXJjZUNvZGVVUkwgPSBzb3VyY2VDb2RlVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgY3VyclllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb3B5cmlnaHRZZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29weXJpZ2h0WWVhciA9IGN1cnJZZWFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICdwJyxcclxuICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogdGhpcy5zb3VyY2VDb2RlVVJMLCB0YXJnZXQ6ICdfYmxhbmsnfSwgJ1NvdXJjZSBDb2RlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgJyDCqSAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3RpbWUnLCB7IGlkOiAnY29weXJpZ2h0LXllYXInIH0sIGN1cnJZZWFyID4gdGhpcy5jb3B5cmlnaHRZZWFyID8gYCR7dGhpcy5jb3B5cmlnaHRZZWFyfS0ke2N1cnJZZWFyfWAgOiB0aGlzLmNvcHlyaWdodFllYXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICcgVG9kZCBCcmVudGxpbmdlciwgU2FudGEgQ3J1eiwgQ0EsIFVTQS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBFbGVtZW50IHR5cGVcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gRWxlbWVudCBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgdmFsdWVcclxuICogQHBhcmFtICB7Li4uTm9kZX0gY2hpbGRyZW4gLSBWYXJpYWJsZSBudW1iZXIgb2YgY2hpbGQgbm9kZXNcclxuICovXHJcbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcblxyXG4gICAgLy8gUHJvcHNcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoaWxkcmVuIE5vZGVzXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmQoY2hpbGQpKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbCwgaWQsIHBvc3RmaXggPSAnJywgZGVmYXVsdFZhbHVlID0gJy0nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5fcG9zdGZpeCA9IHBvc3RmaXg7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcG9zdGZpeChuZXdQb3N0Zml4KSB7XHJcbiAgICAgICAgaWYgKG5ld1Bvc3RmaXggPT09IHRoaXMuX3Bvc3RmaXgpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Bvc3RmaXggPSBuZXdQb3N0Zml4O1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc3RmaXgoKSB7IHJldHVybiB0aGlzLl9wb3N0Zml4OyB9XHJcblxyXG4gICAgc2V0IHZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLl92YWx1ZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVJlbmRlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJykpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCBgJHt0aGlzLl9sYWJlbH06IGApLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdzcGFuJywge2lkOiB0aGlzLl9pZH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Bvc3RmaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgdGhpcy5fcG9zdGZpeClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZXllclJlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUV6QixnREFBQTtBQUNBOztFQUVDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFlBQVksRUFBQTs7QUFFYjs7RUFFQyxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFzZS13aGl0ZTogaHNsKDAsIDAlLCA5NSUpO1xcbiAgLS1iYXNlLWJsYWNrOiBoc2woMCwgMCUsIDEwJSk7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlLCB3aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmFzZS1ibGFjaywgYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIlxcciBcXFwidG9wbmF2XFxcIlxcciBcXFwibWFpblxcXCJcXHIgXFxcImZvb3RlclxcXCI7IH1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7IH1cXG5cXG4jdG9wbmF2IHtcXG4gIGdyaWQtYXJlYTogdG9wbmF2OyB9XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47IH1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSw2QkFBYTtFQUNiLDZCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQix3SUFBd0k7RUFDeEksMENBQTBDO0VBQzFDLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyx5REFJWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJhc2Utd2hpdGU6IGhzbCgwLCAwJSwgOTUlKTtcXHJcXG4gICAgLS1iYXNlLWJsYWNrOiBoc2woMCwgMCUsIDEwJSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlOyAvLyAxcmVtID0gMTBweFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlLCB3aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLWJsYWNrLCBibGFjayk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICBcXFwiaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInRvcG5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJtYWluXFxcIlxcclxcbiAgICAgICAgXFxcImZvb3RlclxcXCI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9wbmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0b3BuYXY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21leWVyUmVzZXQuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSAnLi9mb290ZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5pbXBvcnQgV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IGZyb20gJy4vd2VhdGhlclByb3BlcnR5Q29tcG9uZW50JztcclxuXHJcbmNvbnN0IHdlYXRoZXJBcHAgPSAoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3BlbldlYXRoZXJNYXBLZXkgPSAnNGU3Y2NlYWZlZTU2ZWJiNThmNTk4YTZjZGFkMWE5MDknO1xyXG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcG5hdiBmb3JtJyk7XHJcbiAgICBjb25zdCBUZW1wZXJhdHVyZVVuaXRzID0ge1xyXG4gICAgICAgIHN0YW5kYXJkOiB7XHJcbiAgICAgICAgICAgIGtleTogbnVsbCxcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdLZWx2aW4nLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnSycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWVkOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbWV0ZXJzIHBlciBzZWNvbmQnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnbS9zJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldHJpYzoge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRyaWMnLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NlbHNpdXMnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnXFx4QjBDJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtZXRlcnMgcGVyIHNlY29uZCcsXHJcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246ICdtL3MnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1wZXJpYWw6IHtcclxuICAgICAgICAgICAga2V5OiAnaW1wZXJpYWwnLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZhaHJlbmhlaXQnLFxyXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnXFx4QjBGJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtaWxlcyBwZXIgaG91cicsXHJcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246ICdtcGgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0ZW1wZXJhdHVyZVVuaXQgPSBUZW1wZXJhdHVyZVVuaXRzLmltcGVyaWFsO1xyXG4gICAgXHJcbiAgICBsZXQgd2VhdGhlclByb3BlcnR5Q29tcG9uZW50cyA9IHtcclxuICAgICAgICBuYW1lOiBuZXcgV2VhdGhlclByb3BlcnR5Q29tcG9uZW50KG51bGwsICduYW1lJyksXHJcbiAgICAgICAgJ2Nvb3JkLWxvbic6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0xvbmcnLCAnY29vcmQtbG9uJyksXHJcbiAgICAgICAgJ2Nvb3JkLWxhdCc6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0xhdCcsICdjb29yZC1sYXQnKSxcclxuICAgICAgICAnd2VhdGhlci1pZCc6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0lEJywgJ3dlYXRoZXItaWQnKSxcclxuICAgICAgICAnd2VhdGhlci1tYWluJzogbmV3IFdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCgnTWFpbicsICd3ZWF0aGVyLW1haW4nKSxcclxuICAgICAgICAnd2VhdGhlci1kZXNjcmlwdGlvbic6IG5ldyBXZWF0aGVyUHJvcGVydHlDb21wb25lbnQoJ0Rlc2NyaXB0aW9uJywgJ3dlYXRoZXItZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAnd2VhdGhlci1pY29uJzogbmV3IFdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCgnSWNvbicsICd3ZWF0aGVyLWljb24nKSxcclxuICAgICAgICAvLyBUT0RPOiBBZGQgcmVtYWluaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFxyXG4gICAgICogQHBhcmFtIHtXZWF0aGVyUHJvcGVydHlDb21wb25lbnR9IG5ld1dlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudCBcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkV2VhdGhlclByb3BlcnR5Q29tcG9uZW50KGtleSwgbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgYXJndW1lbnQgdHlwZXNcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYga2V5IGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgLy8gSVNTVUU6IENvdWxkIHVzZSB0byByZXBsYWNlIGV4aXN0aW5nIGtleSB3aXRoIG5ldyBjb21wb25lbnRcclxuXHJcbiAgICAgICAgLy8gQWRkIHRvIHdlYXRoZXJQcm9wZXJ0eUNvbXBvbmVudHMgb2JqZWN0XHJcbiAgICAgICAgd2VhdGhlclByb3BlcnR5Q29tcG9uZW50c1trZXldID0gbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJVbml0c1NlbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU2VsZWN0SWQgPSAnd2VhdGhlci11bml0cy1zZWxlY3QnO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdsYWJlbCcsIFxyXG4gICAgICAgICAgICB7J2Zvcic6IGZvcm1TZWxlY3RJZH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ1VuaXRzOiAnKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtuYW1lOiAndW5pdHMnLCBpZDogZm9ybVNlbGVjdElkLCByZXF1aXJlZDogdHJ1ZX0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmQoXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFRlbXBlcmF0dXJlVW5pdHMpLm1hcCgoa2V5LCB0ZW1wT2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdpbnB1dCcsIFxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZToga2V5fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGVtcE9iai5rZXkudG9VcHBlckNhc2UoKX0gKCR7dGVtcE9iai50ZW1wZXJhdHVyZS5hYmJyZXZpYXRpb259LCAke3RlbXBPYmouc3BlZWQuYWJicmV2aWF0aW9ufSlgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhYmVsRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUZW1wZXJhdHVyZVVuaXQobmV3VGVtcGVyYXR1cmVVbml0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdmFsaWQgdGVtcGVyYXR1cmUgdW5pdFxyXG4gICAgICAgIGNvbnN0IGJJc1ZhbGlkID0gT2JqZWN0LnZhbHVlcyhUZW1wZXJhdHVyZVVuaXRzKS5zb21lKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPT09IG5ld1RlbXBlcmF0dXJlVW5pdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNhbWUgdGVtcGVyYXR1cmUgdW5pdFxyXG4gICAgICAgIGlmICghYklzVmFsaWQgfHwgdGVtcGVyYXR1cmVVbml0ID09PSBuZXdUZW1wZXJhdHVyZVVuaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGVtcGVyYXR1cmVVbml0ID0gbmV3VGVtcGVyYXR1cmVVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoSW5wdXRWYWx1ZSBcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZldGNoVVJMKHNlYXJjaElucHV0VmFsdWUpIHtcclxuICAgICAgICBsZXQgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaElucHV0VmFsdWV9JkFQUElEPSR7b3BlbldlYXRoZXJNYXBLZXl9YDtcclxuXHJcbiAgICAgICAgaWYgKHRlbXBlcmF0dXJlVW5pdC5rZXkpIHtcclxuICAgICAgICAgICAgdXJsICs9IGAmdW5pdHM9JHt0ZW1wZXJhdHVyZVVuaXQua2V5fWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uUG9zaXRpb259IGdlb2xvY2F0aW9uUG9zaXRvbiBcclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZldGNoVVJMV2l0aEdlb2xvY2F0aW9uUG9zaXRpb24oZ2VvbG9jYXRpb25Qb3NpdG9uKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2A7XHJcblxyXG4gICAgICAgIC8vIExhdFxyXG4gICAgICAgIHVybCArPSBgJmxhdD0ke2dlb2xvY2F0aW9uUG9zaXRvbi5jb29yZHMubGF0aXR1ZGV9YDtcclxuXHJcbiAgICAgICAgLy8gTG9uXHJcbiAgICAgICAgdXJsICs9IGAmbG9uPSR7Z2VvbG9jYXRpb25Qb3NpdG9uLmNvb3Jkcy5sb25naXR1ZGV9YDtcclxuXHJcbiAgICAgICAgLy8gQXBwIElEXHJcbiAgICAgICAgdXJsICs9IGAmQVBQSUQ9JHtvcGVuV2VhdGhlck1hcEtleX1gO1xyXG5cclxuICAgICAgICAvLyBVbml0c1xyXG4gICAgICAgIGlmICh0ZW1wZXJhdHVyZVVuaXQua2V5KSB7XHJcbiAgICAgICAgICAgIHVybCArPSBgJnVuaXRzPSR7dGVtcGVyYXR1cmVVbml0LmtleX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUZXh0Q29udGVudE9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSwgcG9zdGZpeCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBFbHNlIHZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3RmaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudCArPSBgICR7cG9zdGZpeH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZXN0YW1wVG9EYXRlKHVuaXhUaW1lc3RhbXApIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgIC8vIE5hbWVcclxuICAgICAgICBsZXQgY2l0eU5hbWUgPSB3ZWF0aGVyRGF0YS5uYW1lO1xyXG4gICAgICAgIGlmICgnc3lzJyBpbiB3ZWF0aGVyRGF0YSAmJiAnY291bnRyeScgaW4gd2VhdGhlckRhdGEuc3lzKSB7XHJcbiAgICAgICAgICAgIGNpdHlOYW1lICs9IGAsICR7d2VhdGhlckRhdGEuc3lzLmNvdW50cnl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKSwgY2l0eU5hbWUpO1xyXG5cclxuICAgICAgICAvLyBDb29yZHNcclxuICAgICAgICBpZiAoJ2Nvb3JkJyBpbiB3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmQtbG9uJyksIHdlYXRoZXJEYXRhLmNvb3JkLmxvbik7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZC1sYXQnKSwgd2VhdGhlckRhdGEuY29vcmQubGF0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlYXRoZXJcclxuICAgICAgICBpZiAoJ3dlYXRoZXInIGluIHdlYXRoZXJEYXRhICYmIHdlYXRoZXJEYXRhLndlYXRoZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWlkJyksIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWQpO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1tYWluJyksIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbik7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWRlc2NyaXB0aW9uJyksIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gSWNvblxyXG4gICAgICAgICAgICBjb25zdCBpY29uSWQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJY29uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWljb24nKTtcclxuICAgICAgICAgICAgaWYgKGljb25JZCAmJiB3ZWF0aGVySWNvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uSWR9QDJ4LnBuZ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1haW5cclxuICAgICAgICBpZiAoJ21haW4nIGluIHdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIE1haW4gVGVtcGVyYXR1cmVcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi10ZW1wJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZVVuaXQudGVtcGVyYXR1cmUuYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBGZWVscyBMaWtlIFRlbXBlcmF0dXJlXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tZmVlbHMtbGlrZScpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVVbml0LnRlbXBlcmF0dXJlLmFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gTG93IFRlbXBlcmF0dXJlXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcC1taW4nKSxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4sXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZVVuaXQudGVtcGVyYXR1cmUuYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBIaWdoIFRlbXBlcmF0dXJlXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcC1tYXgnKSxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgsXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZVVuaXQudGVtcGVyYXR1cmUuYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXByZXNzdXJlJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlLFxyXG4gICAgICAgICAgICAgICAgJ2hQYSdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taHVtaWRpdHknKSxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgICAgICAnJSdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2VhLWxldmVsJyksIFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEubWFpbi5zZWFfbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAnaFBhJ1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1ncm5kLWxldmVsJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5tYWluLmdybmRfbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAnaFBhJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVmlzaWJpbGl0eVxyXG4gICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaWJpbGl0eScpLFxyXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS52aXNpYmlsaXR5LFxyXG4gICAgICAgICAgICAnbSdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBXaW5kXHJcbiAgICAgICAgaWYgKCd3aW5kJyBpbiB3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVVbml0LnNwZWVkLmFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLWRlZycpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZC5kZWcsXHJcbiAgICAgICAgICAgICAgICAnZGVnJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLWd1c3QnKSwgXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kLmd1c3QsXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZVVuaXQuc3BlZWQuYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG91ZHNcclxuICAgICAgICBpZiAoJ2Nsb3VkcycgaW4gd2VhdGhlckRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdWRzJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5jbG91ZHMuYWxsLFxyXG4gICAgICAgICAgICAgICAgJyUnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSYWluXHJcbiAgICAgICAgaWYgKCdyYWluJyBpbiB3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluLTFoJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5yYWluWycxaCddLFxyXG4gICAgICAgICAgICAgICAgJ21tJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluLTNoJyksXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5yYWluWyczaCddLFxyXG4gICAgICAgICAgICAgICAgJ21tJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU25vd1xyXG4gICAgICAgIGlmICgnc25vdycgaW4gd2VhdGhlckRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vdy0xaCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuc25vd1snMWgnXSxcclxuICAgICAgICAgICAgICAgICdtbSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vdy0zaCcpLFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuc25vd1snM2gnXSxcclxuICAgICAgICAgICAgICAgICdtbSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERhdGV0aW1lXHJcbiAgICAgICAgbGV0IGRhdGV0aW1lID0gbmV3IERhdGUod2VhdGhlckRhdGEuZHQgKiAxMDAwKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGV4dENvbnRlbnRPbkVsZW1lbnQoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdCcpLCBcclxuICAgICAgICAgICAgZGF0ZXRpbWUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywgb3B0aW9ucylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBUaW1lem9uZVxyXG4gICAgICAgIGRhdGV0aW1lID0gbmV3IERhdGUoKHdlYXRoZXJEYXRhLmR0ICsgd2VhdGhlckRhdGEudGltZXpvbmUpKiAxMDAwKTtcclxuICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWV6b25lJyksIFxyXG4gICAgICAgICAgICBkYXRldGltZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCBvcHRpb25zKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFN5c1xyXG4gICAgICAgIGlmICgnc3lzJyBpbiB3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lzLXR5cGUnKSwgd2VhdGhlckRhdGEuc3lzLnR5cGUpO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lzLWlkJyksIHdlYXRoZXJEYXRhLnN5cy5pZCk7XHJcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50T25FbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeXMtbWVzc2FnZScpLCB3ZWF0aGVyRGF0YS5zeXMubWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeXMtc3VucmlzZScpLCBcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRVbml4VGltZXN0YW1wVG9EYXRlKHdlYXRoZXJEYXRhLnN5cy5zdW5yaXNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudE9uRWxlbWVudChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeXMtc3Vuc2V0JyksIFxyXG4gICAgICAgICAgICAgICAgY29udmVydFVuaXhUaW1lc3RhbXBUb0RhdGUod2VhdGhlckRhdGEuc3lzLnN1bnNldClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgLy8gVXNlIEdlb2xvY2F0aW9uIEFQSSB0byBnZXQgVXNlcidzIGN1cnJlbnQgcG9zaXRpb24gaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdHNTZWxlY3QgPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidW5pdHNcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdHNTZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUZW1wZXJhdHVyZVVuaXQoVGVtcGVyYXR1cmVVbml0c1t1bml0c1NlbGVjdC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKGNyZWF0ZUZldGNoVVJMV2l0aEdlb2xvY2F0aW9uUG9zaXRpb24ocG9zaXRpb24pLCB7bW9kZTogJ2NvcnMnLH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgd2VhdGhlciBkYXRhIGlmIHJlc3BvbnNlIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnY29kJyBpbiBkYXRhICYmIGRhdGEuY29kID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNlIG5vdCB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2VhcmNoIGZvcm0gc3VibWl0IGhhbmRsZXJcclxuICAgICAgICBpZiAoc2VhcmNoRm9ybSkge1xyXG4gICAgICAgICAgICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlYXJjaFwiXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdHNTZWxlY3QgPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidW5pdHNcIl0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdHNTZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUZW1wZXJhdHVyZVVuaXQoVGVtcGVyYXR1cmVVbml0c1t1bml0c1NlbGVjdC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGNyZWF0ZUZldGNoVVJMKHNlYXJjaElucHV0LnZhbHVlKSwge21vZGU6ICdjb3JzJyx9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB3ZWF0aGVyIGRhdGEgaWYgcmVzcG9uc2UgaXMgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnY29kJyBpbiBkYXRhICYmIGRhdGEuY29kID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5V2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNlIG5vdCB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIEZvb3RlciBDb21wb25lbnRcclxuICAgICAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgbmV3IEZvb3RlckNvbXBvbmVudCgyMDIyLCAnaHR0cHM6Ly9naXRodWIuY29tL3RvZGRicmVudGxpbmdlci9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxud2VhdGhlckFwcC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiQmFzZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJfZWxlbWVudCIsIl9wcm9wcyIsImVsZW1lbnQiLCJuZXdQcm9wcyIsInJlbmRlciIsImVtcHR5RWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImluaXRpYWxpemVSZW5kZXIiLCJiYXNlRWxlbWVudCIsImRvY3VtZW50IiwiYXBwZW5kQ2hpbGQiLCJGb290ZXJDb21wb25lbnQiLCJjb3B5cmlnaHRZZWFyIiwic291cmNlQ29kZVVSTCIsImN1cnJZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaHJlZiIsInRhcmdldCIsImlkIiwidHlwZSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiYXBwZW5kIiwiV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IiwibGFiZWwiLCJwb3N0Zml4IiwiZGVmYXVsdFZhbHVlIiwiX2xhYmVsIiwiX2lkIiwiX3Bvc3RmaXgiLCJfZGVmYXVsdFZhbHVlIiwiX3ZhbHVlIiwibmV3UG9zdGZpeCIsIm5ld1ZhbHVlIiwid2VhdGhlckFwcCIsIm9wZW5XZWF0aGVyTWFwS2V5IiwibWFpbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsIlRlbXBlcmF0dXJlVW5pdHMiLCJzdGFuZGFyZCIsInRlbXBlcmF0dXJlIiwibmFtZSIsImFiYnJldmlhdGlvbiIsInNwZWVkIiwibWV0cmljIiwiaW1wZXJpYWwiLCJ0ZW1wZXJhdHVyZVVuaXQiLCJ3ZWF0aGVyUHJvcGVydHlDb21wb25lbnRzIiwiYWRkV2VhdGhlclByb3BlcnR5Q29tcG9uZW50IiwibmV3V2VhdGhlclByb3BlcnR5Q29tcG9uZW50IiwiY3JlYXRlV2VhdGhlclVuaXRzU2VsZWN0IiwiZm9ybVNlbGVjdElkIiwibGFiZWxFbGVtZW50Iiwic2VsZWN0RWxlbWVudCIsInJlcXVpcmVkIiwibWFwIiwidGVtcE9iaiIsInRvVXBwZXJDYXNlIiwic2V0VGVtcGVyYXR1cmVVbml0IiwibmV3VGVtcGVyYXR1cmVVbml0IiwiYklzVmFsaWQiLCJ2YWx1ZXMiLCJzb21lIiwiaXRlbSIsImNyZWF0ZUZldGNoVVJMIiwic2VhcmNoSW5wdXRWYWx1ZSIsInVybCIsImNyZWF0ZUZldGNoVVJMV2l0aEdlb2xvY2F0aW9uUG9zaXRpb24iLCJnZW9sb2NhdGlvblBvc2l0b24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldFRleHRDb250ZW50T25FbGVtZW50IiwidW5kZWZpbmVkIiwidGV4dENvbnRlbnQiLCJjb252ZXJ0VW5peFRpbWVzdGFtcFRvRGF0ZSIsInVuaXhUaW1lc3RhbXAiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJkaXNwbGF5V2VhdGhlckRhdGEiLCJ3ZWF0aGVyRGF0YSIsImNpdHlOYW1lIiwic3lzIiwiY291bnRyeSIsImdldEVsZW1lbnRCeUlkIiwiY29vcmQiLCJsb24iLCJsYXQiLCJ3ZWF0aGVyIiwibGVuZ3RoIiwibWFpbiIsImRlc2NyaXB0aW9uIiwiaWNvbklkIiwiaWNvbiIsIndlYXRoZXJJY29uRWxlbWVudCIsInNyYyIsInRlbXAiLCJmZWVsc19saWtlIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJzZWFfbGV2ZWwiLCJncm5kX2xldmVsIiwidmlzaWJpbGl0eSIsIndpbmQiLCJkZWciLCJndXN0IiwiY2xvdWRzIiwiYWxsIiwicmFpbiIsInNub3ciLCJkYXRldGltZSIsImR0Iiwib3B0aW9ucyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lem9uZSIsIm1lc3NhZ2UiLCJzdW5yaXNlIiwic3Vuc2V0IiwiaW5pdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwidW5pdHNTZWxlY3QiLCJmZXRjaCIsIm1vZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=