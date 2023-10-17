/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    font-size: 16px;
}

body {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    min-width: 512px;
    margin: 0;
    padding: 0; 
}

:root {
    --header-color: rgb(241, 80, 80);
}

.main-title {
    color: #ff8a8a;
    justify-self: right;
    align-self: top;
    font-size: 32px;
}

header {
    display: flex;
    text-align: center;
    justify-content: space-between;
    color: rgb(11, 24, 61);
    background-color: var(--header-color);
    height: 3rem;
    align-items: center;
}

.header-left-side {
    display: flex;  
    gap: 0.5rem;
    margin-left: 0.5rem;
}

.header-right-side {
    display: flex;
    gap: 0.5rem;
    margin-right: 0.5rem;
}

.icon {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
}

#searchbar {
    border: none;
    border-bottom: 1px solid white;
    background-color: var(--header-color);
    color: rgb(253, 225, 225);
    outline: none;
}

input::placeholder {
    color: white;
}

svg {
    color: rgb(253, 225, 225);
}

.modal,
.myProjectModal,
.editorModal {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    font-size: 22px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; 
    overflow: auto;  
}

.myProjectModal::placeholder {
    color: black;
}

.modal-content {
    background-color: white;
    padding: 2rem 4rem;
    border: 1px solid #888;
    width: 700px;
    max-width: 700px;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 10%;
    background: rgb(216, 216, 216);
}

label {
    color: rgb(73, 73, 73);
}

#title::placeholder {
    color: #888; 
}

#project-name::placeholder {
    color: #888;
}

.description-container {
    display: flex;
    flex-direction: column;
}

.input-container {
    padding: 1rem;
}

.form-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

.form-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

input, 
textarea {
    border: none;
    border-bottom: 1px solid black;
    background-color: rgb(216, 216, 216);
}

.close {
    color: #aaa;
    position: relative;
    bottom: 15px;
    left: 35px;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.main-container {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.side-panel {
    padding-top: 1rem;
}

.project-list {
    cursor: pointer;
}

.add-project-button {
    background-color: white;
    color: rgb(226, 80, 80);
    border: none;
    margin: 0rem 2rem;
    cursor: pointer;
}

.content {
    display: grid;
    padding: 2rem;
    grid-template-rows: repeat(auto-fill, minmax(7rem, 1fr));
}

.project-container {
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    height: fit-content;
    width: fit-content;
    padding: 0rem 1rem;
    font-size: 14px;
}

.todo-checkbox {
    display: flex;
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
    margin-right: 1rem;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#todo-title {
    color: black;
    margin-bottom: -0.7rem;
}

.todo-info {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    color: #888;
}

.todo-stats {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    margin-top: -1rem;
    gap: 1rem;
}

.todo-options {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: inline-block;
    margin-top: 1.3rem;
    align-self: center;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

#todo-date {
    color: rgb(70, 70, 207);
}

#todo-time {
    color: rgb(19, 167, 19);
}

footer {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;IACjC,iBAAiB;IACjB,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,sBAAsB;IACtB,qCAAqC;IACrC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,qCAAqC;IACrC,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;IACf,oCAAoC;IACpC,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wDAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&display=swap');\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n    min-height: 100vh;\n    min-width: 512px;\n    margin: 0;\n    padding: 0; \n}\n\n:root {\n    --header-color: rgb(241, 80, 80);\n}\n\n.main-title {\n    color: #ff8a8a;\n    justify-self: right;\n    align-self: top;\n    font-size: 32px;\n}\n\nheader {\n    display: flex;\n    text-align: center;\n    justify-content: space-between;\n    color: rgb(11, 24, 61);\n    background-color: var(--header-color);\n    height: 3rem;\n    align-items: center;\n}\n\n.header-left-side {\n    display: flex;  \n    gap: 0.5rem;\n    margin-left: 0.5rem;\n}\n\n.header-right-side {\n    display: flex;\n    gap: 0.5rem;\n    margin-right: 0.5rem;\n}\n\n.icon {\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\n#searchbar {\n    border: none;\n    border-bottom: 1px solid white;\n    background-color: var(--header-color);\n    color: rgb(253, 225, 225);\n    outline: none;\n}\n\ninput::placeholder {\n    color: white;\n}\n\nsvg {\n    color: rgb(253, 225, 225);\n}\n\n.modal,\n.myProjectModal,\n.editorModal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    font-size: 22px;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1; \n    overflow: auto;  \n}\n\n.myProjectModal::placeholder {\n    color: black;\n}\n\n.modal-content {\n    background-color: white;\n    padding: 2rem 4rem;\n    border: 1px solid #888;\n    width: 700px;\n    max-width: 700px;\n    height: auto;\n    border-radius: 1rem;\n    margin-bottom: 10%;\n    background: rgb(216, 216, 216);\n}\n\nlabel {\n    color: rgb(73, 73, 73);\n}\n\n#title::placeholder {\n    color: #888; \n}\n\n#project-name::placeholder {\n    color: #888;\n}\n\n.description-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.input-container {\n    padding: 1rem;\n}\n\n.form-top {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-bottom: 2rem;\n    margin-top: 1rem;\n}\n\n.form-bottom {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n}\n\ninput, \ntextarea {\n    border: none;\n    border-bottom: 1px solid black;\n    background-color: rgb(216, 216, 216);\n}\n\n.close {\n    color: #aaa;\n    position: relative;\n    bottom: 15px;\n    left: 35px;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.main-container {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.side-panel {\n    padding-top: 1rem;\n}\n\n.project-list {\n    cursor: pointer;\n}\n\n.add-project-button {\n    background-color: white;\n    color: rgb(226, 80, 80);\n    border: none;\n    margin: 0rem 2rem;\n    cursor: pointer;\n}\n\n.content {\n    display: grid;\n    padding: 2rem;\n    grid-template-rows: repeat(auto-fill, minmax(7rem, 1fr));\n}\n\n.project-container {\n    display: grid;\n    grid-template-columns: 1fr 7fr 1fr;\n    height: fit-content;\n    width: fit-content;\n    padding: 0rem 1rem;\n    font-size: 14px;\n}\n\n.todo-checkbox {\n    display: flex;\n    grid-row: 1 / 3;\n    justify-self: center;\n    align-self: center;\n    margin-right: 1rem;\n}\n\ninput[type=\"checkbox\"] {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n#todo-title {\n    color: black;\n    margin-bottom: -0.7rem;\n}\n\n.todo-info {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    color: #888;\n}\n\n.todo-stats {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    margin-top: -1rem;\n    gap: 1rem;\n}\n\n.todo-options {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n    display: inline-block;\n    margin-top: 1.3rem;\n    align-self: center;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n#todo-date {\n    color: rgb(70, 70, 207);\n}\n\n#todo-time {\n    color: rgb(19, 167, 19);\n}\n\nfooter {\n    text-align: center;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calibrateForm),
/* harmony export */   updateModalOptions: () => (/* binding */ updateModalOptions)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




function calibrateForm(Projects) {
    // Update modal to display project options
    updateModalOptions(Projects);

    // Handle form submission
    document.getElementById("addToDo").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const todoName = document.getElementById("title").value;
        const todoProjectName = document.getElementById("modal-project-list").value;
        const todoDescription = document.getElementById("description").value;
        const todoPriority = document.getElementById("priority").value;
        const todoStatus = document.getElementById("status").value;
        const todoDate = document.getElementById("date").value;
        const todoTime = document.getElementById("time").value;

        // Find the actual Project
        const todoProject = Projects.find(project => project.name === todoProjectName);

        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todoName, todoProject, todoDescription, parseInt(todoPriority, 10), todoStatus, todoDate.toString(), todoTime.toString());
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(todoProject, newTodo);
        
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.initializeContent)(todoProjectName, Projects);
        closeModal();
    });

    // Attach event listeners to open and close the modal
    document.getElementById("addBtn").addEventListener("click", openModal);
    document.getElementById("closeModal").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function() {
        closeModal();
    });
}

// Function to open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function updateModalOptions(Projects) {
    // Add available Projects to the modal
    let modalProjectList = document.getElementById("modal-project-list");

    // Clear the existing list
    modalProjectList.innerHTML = "";

    for (let project of Projects) {
        let projectDiv = document.createElement("option");
        projectDiv.textContent = project.name;
        projectDiv.value = project.name;
        modalProjectList.appendChild(projectDiv);
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");






let Projects = [];


document.addEventListener("DOMContentLoaded", function () {
    // Load default demo projects
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.loadDefaultProjects)(Projects);

    // Allow the user to add projects
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.addProjectToPageBtn)(Projects);
    
    // Allow form to work with our Project List
    (0,_form__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects);  

    // Load Main Title
    Home();

    // Hide editor modal
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.hideEditorModal)();
});

function Home() {
    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener("click", loadHome);
    loadHome();

    function loadHome() {
        let main = document.querySelector("#content");
        main.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = "Your Daily Blueprint";
        title.classList.add("main-title");
        main.appendChild(title);
    }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addProjectToPageBtn: () => (/* binding */ addProjectToPageBtn),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   loadDefaultProjects: () => (/* binding */ loadDefaultProjects),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");





function Project(name) {
    return {
        name,
        todos: [],
    };
}

function addProject(projectList, project) {
    projectList.push(project);
}

function updateProjectList(Projects) {
    let projectList = document.getElementById("project-list");

    // Clear the existing list
    projectList.innerHTML = "";

    // Append the updated list to the webpage
    for (let project of Projects) {
        let projectDiv = document.createElement("ul");
        projectDiv.classList.add("project");
        projectDiv.textContent = project.name;
        projectDiv.id = project.name.toLowerCase();
        projectDiv.addEventListener("click", () => (0,_todo__WEBPACK_IMPORTED_MODULE_0__.initializeContent)(project.name, Projects));
        projectList.appendChild(projectDiv);
    }
}

function addProjectToPageBtn(Projects) {
    let projectList = document.getElementById("project-list");   
    let addProjBtn = document.createElement("button");
    
    addProjBtn.innerText = "+ add project";
    addProjBtn.id = "addProjBtn"
    addProjBtn.classList.add("add-project-button"); 
    addProjBtn.addEventListener("click", () => OpenProjectModal(Projects)); 
    projectList.appendChild(addProjBtn);
}

function OpenProjectModal(Projects) {
    openModal();
    // Handle form submission
    const addProjectForm = document.getElementById("addProject");
    const submitHandler = function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const name = document.getElementById("project-name").value;
        let newProject = Project(name);

        addProject(Projects, newProject);
        updateProjectList(Projects);
        document.getElementById("project-name").value = ''; // Clear the input value after submission

        // Remove the event listener for the form submission
        addProjectForm.removeEventListener("submit", submitHandler);

        addProjectToPageBtn(Projects);
        (0,_form__WEBPACK_IMPORTED_MODULE_1__.updateModalOptions)(Projects);
        closeModal();
    };

    addProjectForm.addEventListener("submit", submitHandler);

    // Attach event listeners to open and close the modal
    document.getElementById("addProjBtn").addEventListener("click", openModal);
    document.getElementById("closeProjectModal").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (event) {
        var modal = document.getElementById("myProjectModal");
        if (event.target == modal) {
            modal.style.display = "none";
            addProjectForm.removeEventListener("submit", submitHandler);
        }
    });

    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function () {
        closeModal();
    });

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("myProjectModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("myProjectModal");
        modal.style.display = "none";
        addProjectForm.removeEventListener("submit", submitHandler);
    }
}

// Default/Demo Projects
function loadDefaultProjects(Projects) {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Do 30 minutes of yoga 🧘", Personal, "Find an instructor online and stick with it!", 5, "Completed", "2023-10-12", "07:00");
    let testToDo2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Dentist appointment", Personal, "Don't forget to brush your teeth!", 9, "To do", "2023-10-12", "16:00");
    let testToDo3 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Buy bread 🍞", Personal, '', 5, "To do", "2023-10-12", "17:00");
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo2);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo3);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let testToDo4 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Plan user research sessions", Work, '', 5, "Completed", "2023-10-12" , "09:00");
    let testToDo5 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Provide feedback on Amy's design", Work, 'And be nice!', 9, "Completed", "2023-10-12", "11:30");
    let testToDo6 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Afternoon meeting", Work, '', 5, "To do", "2023-10-12", "13:30");
    let testToDo7 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Hand in report", Work, 'Dont forget to double check for typos', 5, "To do", "2023-10-12", "15:00");
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo4);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo5);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo6);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo7);
    addProject(Projects, Work);
    updateProjectList(Projects);
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   "default": () => (/* binding */ Todo),
/* harmony export */   hideEditorModal: () => (/* binding */ hideEditorModal),
/* harmony export */   initializeContent: () => (/* binding */ initializeContent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

function addToDo(project, todo) {
    project.todos.push(todo);
}

function initializeContent(Project, Projects) {
    let project = Projects.find(project => project.name === Project);

    let main = document.querySelector("#content");
    main.classList.add("content");
    main.innerHTML = '';

    for (let todo of project.todos) {
        let contentDiv = document.createElement("div");

        // todo container
        contentDiv.classList.add("project-container"); // main todo container

        let checkbox = document.createElement("div");
        checkbox.classList.add("todo-checkbox");
        let info = document.createElement("div");
        info.classList.add("todo-info");
        let stats = document.createElement("div");
        stats.classList.add("todo-stats");
        let options = document.createElement("div");
        options.classList.add("todo-otions");

        // All individual elements that make up the todo
        let contentStatus = document.createElement("input");
        contentStatus.type = "checkbox"
        if (todo.status === "Completed") {
            contentStatus.checked = true;
        }
        checkbox.appendChild(contentStatus);
        

        let contentTitle = document.createElement("h3");
        contentTitle.innerText = todo.title;
        contentTitle.id = "todo-title";
        info.appendChild(contentTitle);

        let contentDescription = document.createElement("p");
        contentDescription.innerText = todo.description;
        info.appendChild(contentDescription);

        let contentDate = document.createElement("p");
        contentDate.innerText = `${"📅" + todo.date}`;
        contentDate.id = "todo-date";
        stats.appendChild(contentDate);

        let contentTime = document.createElement("p");
        contentTime.innerText = `${"🕒" + todo.time}`;
        contentTime.id = "todo-time";
        stats.appendChild(contentTime);

        let contentPriority = document.createElement("p");
        contentPriority.innerText = `${"❗" + todo.priority}`;;
        stats.appendChild(contentPriority);

        let contentEdit = document.createElement('img');
        contentEdit.src = '../src/icons/square-edit-outline.svg';
        contentEdit.classList.add("todo-options");
        contentEdit.addEventListener("click", () =>  openEditor(todo));
        options.appendChild(contentEdit);

        let contentDelete = document.createElement('img');
        contentDelete.src = '../src/icons/delete-outline.svg';
        contentDelete.classList.add("todo-options");
        contentDelete.addEventListener("click", () => Delete(todo));
        options.appendChild(contentDelete);
        

        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(info);
        contentDiv.appendChild(stats);
        contentDiv.appendChild(options);

        main.appendChild(contentDiv);
    }
}

function hideEditorModal() {
    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function () {
        var modal = document.getElementById("editorModal");
        modal.style.display = "none";
    });
}

function openEditor(todo) {
    openModal();
    clearModal();
    fillForm();

    const closeEditorModalButton = document.getElementById("closeEditorModal");
    const editTodoForm = document.getElementById("edit-todo");

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", closeModalOnClickOutside);
    
    function closeModalOnClickOutside(event) {
        var modal = document.getElementById("editorModal");
        if (event.target === modal) {
            closeModal();
            // Remove the event listener
            window.removeEventListener("click", closeModalOnClickOutside);
            editTodoForm.removeEventListener("submit", handleFormSubmission);
        }
    }

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "none";

        // Remove event listners
        window.removeEventListener("click", closeModalOnClickOutside);
        closeEditorModalButton.removeEventListener("click", closeModal);
        editTodoForm.removeEventListener("submit", handleFormSubmission);
    }

    // Fill the form with its specific information
    function fillForm() {
        let editTitle = document.querySelector("#edit-title");   
        editTitle.value = todo.title;
        let editDescription = document.querySelector("#edit-description");
        editDescription.value = todo.description;
        let editPriority = document.querySelector("#edit-priority");
        editPriority.value = todo.priority;

        let editStatus = document.querySelector("#edit-status");
        for (let option of editStatus.options) {
            option.removeAttribute("selected");
        }
        let formattedStatus;
        formattedStatus = todo.status;
        editStatus.querySelector(`[value="${formattedStatus}"]`).selected = true;

        let editDate = document.querySelector("#edit-date");
        editDate.value = todo.date;
        let editTime = document.querySelector("#edit-time");
        editTime.value = todo.time;
    }

    // Handle form submission
    function handleFormSubmission(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const newName = document.getElementById("edit-title").value;
        const newDescription = document.getElementById("edit-description").value;
        const newPriority = document.getElementById("edit-priority").value;
        const newStatus = document.getElementById("edit-status").value;
        const newDate = document.getElementById("edit-date").value;
        const newTime = document.getElementById("edit-time").value;

        // Find the old Todo
        const todoProjectName = todo.project.name;
        const project = ___WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.name === todoProjectName);
        const oldTodo = project.todos.find(todoItem => todoItem.title === todo.title);
        
        // Update with new info
        oldTodo.title = newName;
        oldTodo.description = newDescription;
        oldTodo.priority = newPriority;
        oldTodo.status = newStatus;
        oldTodo.date = newDate;
        oldTodo.time = newTime;

        initializeContent(todoProjectName, ___WEBPACK_IMPORTED_MODULE_0__.Projects);
        closeModal();
    }

    // Remove previous event listeners
    closeEditorModalButton.removeEventListener("click", closeModal);
    editTodoForm.removeEventListener("submit", handleFormSubmission);

    // Add event listeners
    closeEditorModalButton.addEventListener("click", closeModal);
    editTodoForm.addEventListener("submit", handleFormSubmission);

    function clearModal() {
        const editTitle = document.querySelector("#edit-title");
        const editDescription = document.querySelector("#edit-description");
        const editPriority = document.querySelector("#edit-priority");
        const editStatus = document.querySelector("#edit-status");
        const editDate = document.querySelector("#edit-date");
        const editTime = document.querySelector("#edit-time");
    
        // Reset input values to empty strings
        editTitle.value = "";
        editDescription.value = "";
        editPriority.value = "";
        editDate.value = "";
        editTime.value = "";
    
        // Reset the status select element, assuming the default option has an empty value
        editStatus.value = "";
    }
}

function Delete(todo) {
    let projectName = todo.project.name;
    let project = ___WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.name === projectName);
    const todoIndex = project.todos.findIndex(todoItem => todoItem.title === todo.title);
    project.todos.splice(todoIndex, 1);

    initializeContent(projectName, ___WEBPACK_IMPORTED_MODULE_0__.Projects);
}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todo.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixpTkFBaU47QUFDak47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsdUNBQVE7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdUNBQVE7QUFDMUI7QUFDQTs7QUFFQSxtQ0FBbUMsdUNBQVE7QUFDM0M7Ozs7OztVQzFOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZmYW1pbHk9Q3JvaXNzYW50K09uZSZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1GamFsbGErT25lJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDUxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwOyBcbn1cblxuOnJvb3Qge1xuICAgIC0taGVhZGVyLWNvbG9yOiByZ2IoMjQxLCA4MCwgODApO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZjhhOGE7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBhbGlnbi1zZWxmOiB0b3A7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogcmdiKDExLCAyNCwgNjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbGVmdC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmhlYWRlci1yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaGJhciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIGNvbG9yOiByZ2IoMjUzLCAyMjUsIDIyNSk7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnN2ZyB7XG4gICAgY29sb3I6IHJnYigyNTMsIDIyNSwgMjI1KTtcbn1cblxuLm1vZGFsLFxuLm15UHJvamVjdE1vZGFsLFxuLmVkaXRvck1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDE7IFxuICAgIG92ZXJmbG93OiBhdXRvOyAgXG59XG5cbi5teVByb2plY3RNb2RhbDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTYsIDIxNik7XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjogcmdiKDczLCA3MywgNzMpO1xufVxuXG4jdGl0bGU6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzg4ODsgXG59XG5cbiNwcm9qZWN0LW5hbWU6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzg4ODtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZm9ybS10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5mb3JtLWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pbnB1dCwgXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XG59XG5cbi5jbG9zZSB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBsZWZ0OiAzNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4uc2lkZS1wYW5lbCB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wcm9qZWN0LWxpc3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYigyMjYsIDgwLCA4MCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMHJlbSAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg3cmVtLCAxZnIpKTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmciAxZnI7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRvZG8tY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RvZG8tdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAtMC43cmVtO1xufVxuXG4udG9kby1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGNvbG9yOiAjODg4O1xufVxuXG4udG9kby1zdGF0cyB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRvZG8tb3B0aW9ucyB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMS4zcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdG9kby1kYXRlIHtcbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgMjA3KTtcbn1cblxuI3RvZG8tdGltZSB7XG4gICAgY29sb3I6IHJnYigxOSwgMTY3LCAxOSk7XG59XG5cbmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNu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QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUZqYWxsYStPbmUmZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDUxMnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IFxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWNvbG9yOiByZ2IoMjQxLCA4MCwgODApO1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICAgIGNvbG9yOiAjZmY4YThhO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBhbGlnbi1zZWxmOiB0b3A7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiByZ2IoMTEsIDI0LCA2MSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LXNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgXFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0LXNpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoYmFyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiByZ2IoMjUzLCAyMjUsIDIyNSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc3ZnIHtcXG4gICAgY29sb3I6IHJnYigyNTMsIDIyNSwgMjI1KTtcXG59XFxuXFxuLm1vZGFsLFxcbi5teVByb2plY3RNb2RhbCxcXG4uZWRpdG9yTW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogMTsgXFxuICAgIG92ZXJmbG93OiBhdXRvOyAgXFxufVxcblxcbi5teVByb2plY3RNb2RhbDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE2LCAyMTYpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XFxufVxcblxcbiN0aXRsZTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzg4ODsgXFxufVxcblxcbiNwcm9qZWN0LW5hbWU6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICM4ODg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5mb3JtLWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmlucHV0LCBcXG50ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgbGVmdDogMzVweDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLnNpZGUtcGFuZWwge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgODAsIDgwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDByZW0gMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDdyZW0sIDFmcikpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnIgMWZyO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kby10aXRsZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuN3JlbTtcXG59XFxuXFxuLnRvZG8taW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBjb2xvcjogIzg4ODtcXG59XFxuXFxuLnRvZG8tc3RhdHMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tb3B0aW9ucyB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDEuM3JlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLWRhdGUge1xcbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgMjA3KTtcXG59XFxuXFxuI3RvZG8tdGltZSB7XFxuICAgIGNvbG9yOiByZ2IoMTksIDE2NywgMTkpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGVudCB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsaWJyYXRlRm9ybShQcm9qZWN0cykge1xuICAgIC8vIFVwZGF0ZSBtb2RhbCB0byBkaXNwbGF5IHByb2plY3Qgb3B0aW9uc1xuICAgIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cyk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1wcm9qZWN0LWxpc3RcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9UaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGFjdHVhbCBQcm9qZWN0XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gdG9kb1Byb2plY3ROYW1lKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kbyh0b2RvTmFtZSwgdG9kb1Byb2plY3QsIHRvZG9EZXNjcmlwdGlvbiwgcGFyc2VJbnQodG9kb1ByaW9yaXR5LCAxMCksIHRvZG9TdGF0dXMsIHRvZG9EYXRlLnRvU3RyaW5nKCksIHRvZG9UaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICBhZGRUb0RvKHRvZG9Qcm9qZWN0LCBuZXdUb2RvKTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxpemVDb250ZW50KHRvZG9Qcm9qZWN0TmFtZSwgUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbml0aWFsbHksIGhpZGUgdGhlIG1vZGFsIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjbG9zZSB0aGUgbW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cykge1xuICAgIC8vIEFkZCBhdmFpbGFibGUgUHJvamVjdHMgdG8gdGhlIG1vZGFsXG4gICAgbGV0IG1vZGFsUHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXByb2plY3QtbGlzdFwiKTtcblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyBsaXN0XG4gICAgbW9kYWxQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBQcm9qZWN0cykge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG1vZGFsUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBjYWxpYnJhdGVGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBsb2FkRGVmYXVsdFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGFkZFByb2plY3RUb1BhZ2VCdG4gfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgaGlkZUVkaXRvck1vZGFsIH0gZnJvbSAnLi90b2RvJztcblxubGV0IFByb2plY3RzID0gW107XG5leHBvcnQgeyBQcm9qZWN0cyB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gTG9hZCBkZWZhdWx0IGRlbW8gcHJvamVjdHNcbiAgICBsb2FkRGVmYXVsdFByb2plY3RzKFByb2plY3RzKTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIGFkZCBwcm9qZWN0c1xuICAgIGFkZFByb2plY3RUb1BhZ2VCdG4oUHJvamVjdHMpO1xuICAgIFxuICAgIC8vIEFsbG93IGZvcm0gdG8gd29yayB3aXRoIG91ciBQcm9qZWN0IExpc3RcbiAgICBjYWxpYnJhdGVGb3JtKFByb2plY3RzKTsgIFxuXG4gICAgLy8gTG9hZCBNYWluIFRpdGxlXG4gICAgSG9tZSgpO1xuXG4gICAgLy8gSGlkZSBlZGl0b3IgbW9kYWxcbiAgICBoaWRlRWRpdG9yTW9kYWwoKTtcbn0pO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVCdG4nKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XG4gICAgbG9hZEhvbWUoKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIllvdXIgRGFpbHkgQmx1ZXByaW50XCI7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRpdGxlXCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHVwZGF0ZU1vZGFsT3B0aW9ucyB9IGZyb20gXCIuL2Zvcm1cIjtcbmltcG9ydCB7IGluaXRpYWxpemVDb250ZW50IH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0b2RvczogW10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdExpc3QsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyBsaXN0XG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIEFwcGVuZCB0aGUgdXBkYXRlZCBsaXN0IHRvIHRoZSB3ZWJwYWdlXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBQcm9qZWN0cykge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdERpdi5pZCA9IHByb2plY3QubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBpbml0aWFsaXplQ29udGVudChwcm9qZWN0Lm5hbWUsIFByb2plY3RzKSk7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb1BhZ2VCdG4oUHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTsgICBcbiAgICBsZXQgYWRkUHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgYWRkUHJvakJ0bi5pbm5lclRleHQgPSBcIisgYWRkIHByb2plY3RcIjtcbiAgICBhZGRQcm9qQnRuLmlkID0gXCJhZGRQcm9qQnRuXCJcbiAgICBhZGRQcm9qQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7IFxuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IE9wZW5Qcm9qZWN0TW9kYWwoUHJvamVjdHMpKTsgXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvakJ0bik7XG59XG5cbmZ1bmN0aW9uIE9wZW5Qcm9qZWN0TW9kYWwoUHJvamVjdHMpIHtcbiAgICBvcGVuTW9kYWwoKTtcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChuYW1lKTtcblxuICAgICAgICBhZGRQcm9qZWN0KFByb2plY3RzLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZSA9ICcnOyAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWUgYWZ0ZXIgc3VibWlzc2lvblxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRIYW5kbGVyKTtcblxuICAgICAgICBhZGRQcm9qZWN0VG9QYWdlQnRuKFByb2plY3RzKTtcbiAgICAgICAgdXBkYXRlTW9kYWxPcHRpb25zKFByb2plY3RzKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIGFuZCBjbG9zZSB0aGUgbW9kYWxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2pCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVByb2plY3RNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15UHJvamVjdE1vZGFsXCIpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbml0aWFsbHksIGhpZGUgdGhlIG1vZGFsIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBvcGVuIHRoZSBtb2RhbFxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0TW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRIYW5kbGVyKTtcbiAgICB9XG59XG5cbi8vIERlZmF1bHQvRGVtbyBQcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWREZWZhdWx0UHJvamVjdHMoUHJvamVjdHMpIHtcbiAgICAvLyBEZWZhdWx0IFByb2plY3RzXG4gICAgbGV0IFBlcnNvbmFsID0gUHJvamVjdChcIlBlcnNvbmFsXCIpO1xuICAgIGxldCB0ZXN0VG9EbyA9IFRvZG8oXCJEbyAzMCBtaW51dGVzIG9mIHlvZ2Eg8J+nmFwiLCBQZXJzb25hbCwgXCJGaW5kIGFuIGluc3RydWN0b3Igb25saW5lIGFuZCBzdGljayB3aXRoIGl0IVwiLCA1LCBcIkNvbXBsZXRlZFwiLCBcIjIwMjMtMTAtMTJcIiwgXCIwNzowMFwiKTtcbiAgICBsZXQgdGVzdFRvRG8yID0gVG9kbyhcIkRlbnRpc3QgYXBwb2ludG1lbnRcIiwgUGVyc29uYWwsIFwiRG9uJ3QgZm9yZ2V0IHRvIGJydXNoIHlvdXIgdGVldGghXCIsIDksIFwiVG8gZG9cIiwgXCIyMDIzLTEwLTEyXCIsIFwiMTY6MDBcIik7XG4gICAgbGV0IHRlc3RUb0RvMyA9IFRvZG8oXCJCdXkgYnJlYWQg8J+NnlwiLCBQZXJzb25hbCwgJycsIDUsIFwiVG8gZG9cIiwgXCIyMDIzLTEwLTEyXCIsIFwiMTc6MDBcIik7XG4gICAgYWRkVG9EbyhQZXJzb25hbCwgdGVzdFRvRG8pO1xuICAgIGFkZFRvRG8oUGVyc29uYWwsIHRlc3RUb0RvMik7XG4gICAgYWRkVG9EbyhQZXJzb25hbCwgdGVzdFRvRG8zKTtcbiAgICBhZGRQcm9qZWN0KFByb2plY3RzLCBQZXJzb25hbCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xuXG4gICAgbGV0IFdvcmsgPSBQcm9qZWN0KFwiV29ya1wiKTtcbiAgICBsZXQgdGVzdFRvRG80ID0gVG9kbyhcIlBsYW4gdXNlciByZXNlYXJjaCBzZXNzaW9uc1wiLCBXb3JrLCAnJywgNSwgXCJDb21wbGV0ZWRcIiwgXCIyMDIzLTEwLTEyXCIgLCBcIjA5OjAwXCIpO1xuICAgIGxldCB0ZXN0VG9EbzUgPSBUb2RvKFwiUHJvdmlkZSBmZWVkYmFjayBvbiBBbXkncyBkZXNpZ25cIiwgV29yaywgJ0FuZCBiZSBuaWNlIScsIDksIFwiQ29tcGxldGVkXCIsIFwiMjAyMy0xMC0xMlwiLCBcIjExOjMwXCIpO1xuICAgIGxldCB0ZXN0VG9EbzYgPSBUb2RvKFwiQWZ0ZXJub29uIG1lZXRpbmdcIiwgV29yaywgJycsIDUsIFwiVG8gZG9cIiwgXCIyMDIzLTEwLTEyXCIsIFwiMTM6MzBcIik7XG4gICAgbGV0IHRlc3RUb0RvNyA9IFRvZG8oXCJIYW5kIGluIHJlcG9ydFwiLCBXb3JrLCAnRG9udCBmb3JnZXQgdG8gZG91YmxlIGNoZWNrIGZvciB0eXBvcycsIDUsIFwiVG8gZG9cIiwgXCIyMDIzLTEwLTEyXCIsIFwiMTU6MDBcIik7XG4gICAgYWRkVG9EbyhXb3JrLCB0ZXN0VG9EbzQpO1xuICAgIGFkZFRvRG8oV29yaywgdGVzdFRvRG81KTtcbiAgICBhZGRUb0RvKFdvcmssIHRlc3RUb0RvNik7XG4gICAgYWRkVG9EbyhXb3JrLCB0ZXN0VG9EbzcpO1xuICAgIGFkZFByb2plY3QoUHJvamVjdHMsIFdvcmspO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KFByb2plY3RzKTtcbn0iLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlLCB0aW1lKSB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWV9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZW50KFByb2plY3QsIFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBQcm9qZWN0KTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gdG9kbyBjb250YWluZXJcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7IC8vIG1haW4gdG9kbyBjb250YWluZXJcblxuICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKTtcbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWluZm9cIik7XG4gICAgICAgIGxldCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXRzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXRzXCIpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcInRvZG8tb3Rpb25zXCIpO1xuXG4gICAgICAgIC8vIEFsbCBpbmRpdmlkdWFsIGVsZW1lbnRzIHRoYXQgbWFrZSB1cCB0aGUgdG9kb1xuICAgICAgICBsZXQgY29udGVudFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29udGVudFN0YXR1cy50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgIGlmICh0b2RvLnN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgY29udGVudFN0YXR1cy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjb250ZW50U3RhdHVzKTtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5pZCA9IFwidG9kby10aXRsZVwiO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChjb250ZW50RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBjb250ZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGF0ZS5pbm5lclRleHQgPSBgJHtcIvCfk4VcIiArIHRvZG8uZGF0ZX1gO1xuICAgICAgICBjb250ZW50RGF0ZS5pZCA9IFwidG9kby1kYXRlXCI7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGNvbnRlbnREYXRlKTtcblxuICAgICAgICBsZXQgY29udGVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudFRpbWUuaW5uZXJUZXh0ID0gYCR7XCLwn5WSXCIgKyB0b2RvLnRpbWV9YDtcbiAgICAgICAgY29udGVudFRpbWUuaWQgPSBcInRvZG8tdGltZVwiO1xuICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChjb250ZW50VGltZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50UHJpb3JpdHkuaW5uZXJUZXh0ID0gYCR7XCLinZdcIiArIHRvZG8ucHJpb3JpdHl9YDs7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGNvbnRlbnRQcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnRlbnRFZGl0LnNyYyA9ICcuLi9zcmMvaWNvbnMvc3F1YXJlLWVkaXQtb3V0bGluZS5zdmcnO1xuICAgICAgICBjb250ZW50RWRpdC5jbGFzc0xpc3QuYWRkKFwidG9kby1vcHRpb25zXCIpO1xuICAgICAgICBjb250ZW50RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gIG9wZW5FZGl0b3IodG9kbykpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNvbnRlbnRFZGl0KTtcblxuICAgICAgICBsZXQgY29udGVudERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250ZW50RGVsZXRlLnNyYyA9ICcuLi9zcmMvaWNvbnMvZGVsZXRlLW91dGxpbmUuc3ZnJztcbiAgICAgICAgY29udGVudERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1vcHRpb25zXCIpO1xuICAgICAgICBjb250ZW50RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBEZWxldGUodG9kbykpO1xuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNvbnRlbnREZWxldGUpO1xuICAgICAgICBcblxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzdGF0cyk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWRpdG9yTW9kYWwoKSB7XG4gICAgLy8gSW5pdGlhbGx5LCBoaWRlIHRoZSBtb2RhbCB3aGVuIHRoZSBwYWdlIGxvYWRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdG9yKHRvZG8pIHtcbiAgICBvcGVuTW9kYWwoKTtcbiAgICBjbGVhck1vZGFsKCk7XG4gICAgZmlsbEZvcm0oKTtcblxuICAgIGNvbnN0IGNsb3NlRWRpdG9yTW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRWRpdG9yTW9kYWxcIik7XG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRvZG9cIik7XG5cbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxPbkNsaWNrT3V0c2lkZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbE9uQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yTW9kYWxcIik7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxPbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgICAgICBlZGl0VG9kb0Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWlzc2lvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBvcGVuIHRoZSBtb2RhbFxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yTW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdG5lcnNcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsT25DbGlja091dHNpZGUpO1xuICAgICAgICBjbG9zZUVkaXRvck1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICAgICAgZWRpdFRvZG9Gb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vIEZpbGwgdGhlIGZvcm0gd2l0aCBpdHMgc3BlY2lmaWMgaW5mb3JtYXRpb25cbiAgICBmdW5jdGlvbiBmaWxsRm9ybSgpIHtcbiAgICAgICAgbGV0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aXRsZVwiKTsgICBcbiAgICAgICAgZWRpdFRpdGxlLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgbGV0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGVkaXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcmlvcml0eVwiKTtcbiAgICAgICAgZWRpdFByaW9yaXR5LnZhbHVlID0gdG9kby5wcmlvcml0eTtcblxuICAgICAgICBsZXQgZWRpdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1zdGF0dXNcIik7XG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBlZGl0U3RhdHVzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybWF0dGVkU3RhdHVzO1xuICAgICAgICBmb3JtYXR0ZWRTdGF0dXMgPSB0b2RvLnN0YXR1cztcbiAgICAgICAgZWRpdFN0YXR1cy5xdWVyeVNlbGVjdG9yKGBbdmFsdWU9XCIke2Zvcm1hdHRlZFN0YXR1c31cIl1gKS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgbGV0IGVkaXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWRhdGVcIik7XG4gICAgICAgIGVkaXREYXRlLnZhbHVlID0gdG9kby5kYXRlO1xuICAgICAgICBsZXQgZWRpdFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGltZVwiKTtcbiAgICAgICAgZWRpdFRpbWUudmFsdWUgPSB0b2RvLnRpbWU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3U3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXN0YXR1c1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRpbWVcIikudmFsdWU7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgb2xkIFRvZG9cbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3ROYW1lID0gdG9kby5wcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSB0b2RvUHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBvbGRUb2RvID0gcHJvamVjdC50b2Rvcy5maW5kKHRvZG9JdGVtID0+IHRvZG9JdGVtLnRpdGxlID09PSB0b2RvLnRpdGxlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSB3aXRoIG5ldyBpbmZvXG4gICAgICAgIG9sZFRvZG8udGl0bGUgPSBuZXdOYW1lO1xuICAgICAgICBvbGRUb2RvLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIG9sZFRvZG8ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgb2xkVG9kby5zdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgICAgIG9sZFRvZG8uZGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIG9sZFRvZG8udGltZSA9IG5ld1RpbWU7XG5cbiAgICAgICAgaW5pdGlhbGl6ZUNvbnRlbnQodG9kb1Byb2plY3ROYW1lLCBQcm9qZWN0cyk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgcHJldmlvdXMgZXZlbnQgbGlzdGVuZXJzXG4gICAgY2xvc2VFZGl0b3JNb2RhbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgZWRpdFRvZG9Gb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNsb3NlRWRpdG9yTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIGVkaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJpb3JpdHlcIik7XG4gICAgICAgIGNvbnN0IGVkaXRTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtc3RhdHVzXCIpO1xuICAgICAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1kYXRlXCIpO1xuICAgICAgICBjb25zdCBlZGl0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aW1lXCIpO1xuICAgIFxuICAgICAgICAvLyBSZXNldCBpbnB1dCB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5nc1xuICAgICAgICBlZGl0VGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSBcIlwiO1xuICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVkaXRUaW1lLnZhbHVlID0gXCJcIjtcbiAgICBcbiAgICAgICAgLy8gUmVzZXQgdGhlIHN0YXR1cyBzZWxlY3QgZWxlbWVudCwgYXNzdW1pbmcgdGhlIGRlZmF1bHQgb3B0aW9uIGhhcyBhbiBlbXB0eSB2YWx1ZVxuICAgICAgICBlZGl0U3RhdHVzLnZhbHVlID0gXCJcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIERlbGV0ZSh0b2RvKSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gdG9kby5wcm9qZWN0Lm5hbWU7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gcHJvamVjdC50b2Rvcy5maW5kSW5kZXgodG9kb0l0ZW0gPT4gdG9kb0l0ZW0udGl0bGUgPT09IHRvZG8udGl0bGUpO1xuICAgIHByb2plY3QudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG5cbiAgICBpbml0aWFsaXplQ29udGVudChwcm9qZWN0TmFtZSwgUHJvamVjdHMpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RvZG8uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=