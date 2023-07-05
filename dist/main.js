/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Spices & Flavors.png */ "./src/assets/Spices & Flavors.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #047aed;
  --white-color: #ffff;
  --black-800: rgb(21, 21, 22);
  --black-500: rgba(0, 0, 0, 0.682);
  --black-200: rgba(46, 46, 48, 0.249);
  --black-100: rgba(46, 46, 48, 0.101);
  --red-500: rgb(216, 51, 51);
  --text-font: 17px;
  --h1-font: 27px;
  --md-radius: 5px;
  --large-radius: 10px;
  --primary-border: 1px solid var(--black-200);
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  overflow-x: hidden;
  background: #222;
}

header {
  width: 100%;
  background: #fff;
}

.header-logo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  height: 70px;
  width: 70px;
  background-size: cover;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  width: 100%;
  align-items: center;
  height: 70px;
}

.navList {
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  list-style-type: none;
}

.container {
  height: 65vh;
}

.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin: 70px 0;
  color: #fff;
}

.gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  gap: 6px;
  padding: 10px;
  border: 7px solid #fff;
  border-radius: 25px;
}

.meal-img {
  width: 65%;
  height: 50%;
  border: 1px solid black;
}

.like-comment {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}

.num-of-likes {
  display: flex;
  width: 70%;
  justify-content: end;
  font-size: 18px;
}

.btn-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.comment-btn {
  width: 30%;
  padding: 6px;
  font-size: 15px;
}

.reservation-btn {
  width: 35%;
  padding: 6px;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .main-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .main-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.backdrop {
  width: 100%;
  height: 100vh;
  display: none;
  background: rgba(0, 0, 0, 0.437);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
}

.backdrop.open {
  display: block;
}

.info-popup-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 800px;
  left: 0;
  display: flex;
  justify-content: center;
  transition: ease-out 300ms;
  z-index: 300;
}

.info-popup-container.open {
  top: 0;
}

.info-popup {
  max-width: 800px;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 20px;
  overflow: auto;
  padding-right: 5px;
}

.info-popup::-webkit-scrollbar {
  width: 7px;
  background: transparent;
}

.info-popup::-webkit-scrollbar-thumb {
  background-color: var(--black-200);
}

.info-popup i {
  text-align: right;
  font-size: var(--text-font);
  cursor: pointer;
  padding: 5px;
  border-radius: 100%;
  background: var(--black-500);
  color: white;
  float: right;
}

.info-popup .img-desc {
  max-width: 500px;
  margin: auto;
}

.info-popup .img-desc img {
  width: 100%;
}

.product-desc-title {
  text-align: center;
  padding: 20px;
}

.ingredients-container {
  max-width: 600px;
  width: 100%;
  border-bottom: var(--primary-border);
  margin: 20px auto;
  display: flex;
  padding: 20px;
  justify-content: center;
}

.ingredients-container > :nth-child(1) {
  border-right: var(--primary-border);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 10px;
}

.ingredients-container > :nth-child(2) {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 20px;
  text-align: left;
}

.comments {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 400px;
  width: 100%;
}

.comments-list li {
  padding: 10px;
  max-width: 400px;
  background: var(--black-100);
  border-radius: 5px;
  margin: 10px auto;
  list-style: none;
}

.comments-list li h4 {
  background-color: var(--black-500);
  padding: 10px;
  margin: 10px;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: white;
}

.comments-list li p {
  color: var(--black-500);
  margin: 0 10px;
}

.comment-form {
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  padding-top: 20px;
}

.input-controller {
  width: 100%;
}

.input-controller input {
  width: 90%;
  max-width: 400px;
  height: 40px;
  border: var(--primary-border);
  padding: 0 20px;
  border-radius: 5px;
}

.input-controller textarea {
  max-width: 400px;
  max-height: 200px;
  width: 95%;
  border: var(--primary-border);
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  font-family: "Lato", sans-serif;
  resize: vertical;
}

.input-controller textarea:focus,
.input-controller input:focus {
  outline: 2px solid rgb(223, 19, 223);
}

.comment-form button {
  width: 100%;
  background-color: var(--black-500);
  border-radius: 5px;
  border: none;
  color: white;
  margin-top: 20px;
  padding: 20px 0;
  font-family: "Lato", sans-serif;
  cursor: pointer;
}

.close-btn {
  float: right;
  border: none;
  outline: none;
}

footer {
  width: 100%;
  border-top: var(--primary-border);
  bottom: 0;
  background: #fff;
  color: #000;
  font-weight: 700;
}

footer .footer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.footer-container ul {
  display: flex;
  list-style: none;
  gap: 20px;
  color: var(--black-500);
}

.footer-container ul li {
  transition: 300ms;
  cursor: pointer;
}

.footer-container ul li:hover {
  color: var(--black-800);
}

.footer-container ul :nth-child(1) {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-right: 1px solid var(--black-200);
}

.footer-container ul :nth-child(2) {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-right: 1px solid var(--black-200);
}

.footer-container ul :nth-child(3) {
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

footer .footer-copyright {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n:root {\n  --primary-color: #047aed;\n  --white-color: #ffff;\n  --black-800: rgb(21, 21, 22);\n  --black-500: rgba(0, 0, 0, 0.682);\n  --black-200: rgba(46, 46, 48, 0.249);\n  --black-100: rgba(46, 46, 48, 0.101);\n  --red-500: rgb(216, 51, 51);\n  --text-font: 17px;\n  --h1-font: 27px;\n  --md-radius: 5px;\n  --large-radius: 10px;\n  --primary-border: 1px solid var(--black-200);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden;\n  background: #222;\n}\n\nheader {\n  width: 100%;\n  background: #fff;\n}\n\n.header-logo {\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\n  background-repeat: no-repeat;\n  height: 70px;\n  width: 70px;\n  background-size: cover;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n  width: 100%;\n  align-items: center;\n  height: 70px;\n}\n\n.navList {\n  display: flex;\n  width: 40%;\n  justify-content: space-evenly;\n  list-style-type: none;\n}\n\n.container {\n  height: 65vh;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 20px;\n  margin: 70px 0;\n  color: #fff;\n}\n\n.gallery-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px;\n  gap: 6px;\n  padding: 10px;\n  border: 7px solid #fff;\n  border-radius: 25px;\n}\n\n.meal-img {\n  width: 65%;\n  height: 50%;\n  border: 1px solid black;\n}\n\n.like-comment {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50px;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\n.num-of-likes {\n  display: flex;\n  width: 70%;\n  justify-content: end;\n  font-size: 18px;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.comment-btn {\n  width: 30%;\n  padding: 6px;\n  font-size: 15px;\n}\n\n.reservation-btn {\n  width: 35%;\n  padding: 6px;\n  font-size: 15px;\n}\n\n@media screen and (max-width: 768px) {\n  .main-container {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .main-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.backdrop {\n  width: 100%;\n  height: 100vh;\n  display: none;\n  background: rgba(0, 0, 0, 0.437);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 200;\n}\n\n.backdrop.open {\n  display: block;\n}\n\n.info-popup-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 800px;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  transition: ease-out 300ms;\n  z-index: 300;\n}\n\n.info-popup-container.open {\n  top: 0;\n}\n\n.info-popup {\n  max-width: 800px;\n  width: 100%;\n  height: 100vh;\n  background: white;\n  padding: 20px;\n  overflow: auto;\n  padding-right: 5px;\n}\n\n.info-popup::-webkit-scrollbar {\n  width: 7px;\n  background: transparent;\n}\n\n.info-popup::-webkit-scrollbar-thumb {\n  background-color: var(--black-200);\n}\n\n.info-popup i {\n  text-align: right;\n  font-size: var(--text-font);\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 100%;\n  background: var(--black-500);\n  color: white;\n  float: right;\n}\n\n.info-popup .img-desc {\n  max-width: 500px;\n  margin: auto;\n}\n\n.info-popup .img-desc img {\n  width: 100%;\n}\n\n.product-desc-title {\n  text-align: center;\n  padding: 20px;\n}\n\n.ingredients-container {\n  max-width: 600px;\n  width: 100%;\n  border-bottom: var(--primary-border);\n  margin: 20px auto;\n  display: flex;\n  padding: 20px;\n  justify-content: center;\n}\n\n.ingredients-container > :nth-child(1) {\n  border-right: var(--primary-border);\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-right: 10px;\n}\n\n.ingredients-container > :nth-child(2) {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-left: 20px;\n  text-align: left;\n}\n\n.comments {\n  margin: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  max-width: 400px;\n  width: 100%;\n}\n\n.comments-list li {\n  padding: 10px;\n  max-width: 400px;\n  background: var(--black-100);\n  border-radius: 5px;\n  margin: 10px auto;\n  list-style: none;\n}\n\n.comments-list li h4 {\n  background-color: var(--black-500);\n  padding: 10px;\n  margin: 10px;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  color: white;\n}\n\n.comments-list li p {\n  color: var(--black-500);\n  margin: 0 10px;\n}\n\n.comment-form {\n  max-width: 400px;\n  width: 100%;\n  margin: 20px auto;\n  padding-top: 20px;\n}\n\n.input-controller {\n  width: 100%;\n}\n\n.input-controller input {\n  width: 90%;\n  max-width: 400px;\n  height: 40px;\n  border: var(--primary-border);\n  padding: 0 20px;\n  border-radius: 5px;\n}\n\n.input-controller textarea {\n  max-width: 400px;\n  max-height: 200px;\n  width: 95%;\n  border: var(--primary-border);\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 10px;\n  font-family: \"Lato\", sans-serif;\n  resize: vertical;\n}\n\n.input-controller textarea:focus,\n.input-controller input:focus {\n  outline: 2px solid rgb(223, 19, 223);\n}\n\n.comment-form button {\n  width: 100%;\n  background-color: var(--black-500);\n  border-radius: 5px;\n  border: none;\n  color: white;\n  margin-top: 20px;\n  padding: 20px 0;\n  font-family: \"Lato\", sans-serif;\n  cursor: pointer;\n}\n\n.close-btn {\n  float: right;\n  border: none;\n  outline: none;\n}\n\nfooter {\n  width: 100%;\n  border-top: var(--primary-border);\n  bottom: 0;\n  background: #fff;\n  color: #000;\n  font-weight: 700;\n}\n\nfooter .footer-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-logo {\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.footer-container ul {\n  display: flex;\n  list-style: none;\n  gap: 20px;\n  color: var(--black-500);\n}\n\n.footer-container ul li {\n  transition: 300ms;\n  cursor: pointer;\n}\n\n.footer-container ul li:hover {\n  color: var(--black-800);\n}\n\n.footer-container ul :nth-child(1) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-right: 1px solid var(--black-200);\n}\n\n.footer-container ul :nth-child(2) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-right: 1px solid var(--black-200);\n}\n\n.footer-container ul :nth-child(3) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nfooter .footer-copyright {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/module/apiData.js":
/*!*******************************!*\
  !*** ./src/module/apiData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseUrl: () => (/* binding */ baseUrl),
/* harmony export */   involvementCommentUrl: () => (/* binding */ involvementCommentUrl),
/* harmony export */   involvementLikeUrl: () => (/* binding */ involvementLikeUrl)
/* harmony export */ });
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
const involvementLikeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iStMzjCuPUsSNJ5dS1Uc/likes/';
const involvementCommentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iStMzjCuPUsSNJ5dS1Uc/comments/';



/***/ }),

/***/ "./src/assets/Spices & Flavors.png":
/*!*****************************************!*\
  !*** ./src/assets/Spices & Flavors.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b7b1e6c0da30eea9e42.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"index": 0
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_apiData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/apiData.js */ "./src/module/apiData.js");



let arrayOfMeals = [];
const mainContainer = document.querySelector('.main-container');
const infoPopup = document.querySelector('.info-popup-container');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');
const getData = async () => {
  const result = await fetch(_module_apiData_js__WEBPACK_IMPORTED_MODULE_1__.baseUrl);
  const { meals } = await result.json();
  return meals;
};

getData();

const showMealDetailInformation = async (item, view) => {
  const imageDesk = document.querySelector('.img-desc img');
  const infoMealTitle = document.querySelector('.product-desc-title');
  const areaInfo = document.querySelector('.recep-area-info');
  const ingredients = document.querySelector('.recep-ingredient-info');
  const category = document.querySelector('.info-category');
  const mesure = document.querySelector('.info-mesure');

  switch (view) {
    case 'show': {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`;
      const fetchData = await fetch(url);
      const { meals } = await fetchData.json();
      imageDesk.src = item.strMealThumb;
      infoMealTitle.textContent = item.strMeal;
      areaInfo.textContent = meals[0].strArea;

      ingredients.textContent = meals[0].strIngredient1;
      category.textContent = meals[0].strCategory;
      mesure.textContent = meals[0].strMeasure2;
      break;
    }
    case 'close': {
      imageDesk.src = '';
      infoMealTitle.textContent = '..loading';
      areaInfo.textContent = '..loading';

      ingredients.textContent = '';
      category.textContent = '..loading';
      mesure.textContent = '..loading';
      infoPopup.classList.remove('open');
      backdrop.classList.remove('open');
      break;
    }
    default: {
      break;
    }
  }
};

const showMealDetail = async (item) => {
  infoPopup.classList.add('open');
  backdrop.classList.add('open');
  await showMealDetailInformation(item, 'show');
};

const showMeals = async () => {
  arrayOfMeals = await getData();
  arrayOfMeals.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.setAttribute('data-id', item.idMeal);

    // Create the image element
    const img = document.createElement('img');
    img.src = item.strMealThumb;
    img.alt = '';
    img.className = 'meal-img';

    // Create the div for like and comment
    const likeCommentDiv = document.createElement('div');
    likeCommentDiv.className = 'like-comment';

    // Create the paragraph element for item name
    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = item.strMeal;

    // Create the heart icon element
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa-regular fa-heart';
    heartIcon.style.color = '#ff0000';

    // Append the item name and heart icon to the like and comment div
    likeCommentDiv.appendChild(itemName);
    likeCommentDiv.appendChild(heartIcon);

    // Create the div for number of likes
    const numOfLikesDiv = document.createElement('div');
    numOfLikesDiv.className = 'num-of-likes';
    numOfLikesDiv.textContent = '0 Likes';

    // Create the div for button container
    const btnContainerDiv = document.createElement('div');
    btnContainerDiv.className = 'btn-container';

    // Create the comment button
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment-btn';
    commentBtn.textContent = 'Comment';
    commentBtn.addEventListener('click', () => showMealDetail(item));

    // Create the reservation button
    const reservationBtn = document.createElement('button');
    reservationBtn.className = 'reservation-btn';
    reservationBtn.textContent = 'Reservation';

    // Append the buttons to the button container div
    btnContainerDiv.appendChild(commentBtn);
    btnContainerDiv.appendChild(reservationBtn);

    // Append all the created elements to the main div
    div.appendChild(img);
    div.appendChild(likeCommentDiv);
    div.appendChild(numOfLikesDiv);
    div.appendChild(btnContainerDiv);

    // Now you can use the main div in your DOM

    mainContainer.appendChild(div);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});

closeBtn.addEventListener('click', () => showMealDetailInformation({}, 'close'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVJQUFnRDtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3hMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFh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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQU87QUFDcEMsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSxZQUFZO0FBQ3RGO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxRUFBcUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2FwaURhdGEuanMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvU3BpY2VzICYgRmxhdm9ycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDQ3YWVkO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZjtcbiAgLS1ibGFjay04MDA6IHJnYigyMSwgMjEsIDIyKTtcbiAgLS1ibGFjay01MDA6IHJnYmEoMCwgMCwgMCwgMC42ODIpO1xuICAtLWJsYWNrLTIwMDogcmdiYSg0NiwgNDYsIDQ4LCAwLjI0OSk7XG4gIC0tYmxhY2stMTAwOiByZ2JhKDQ2LCA0NiwgNDgsIDAuMTAxKTtcbiAgLS1yZWQtNTAwOiByZ2IoMjE2LCA1MSwgNTEpO1xuICAtLXRleHQtZm9udDogMTdweDtcbiAgLS1oMS1mb250OiAyN3B4O1xuICAtLW1kLXJhZGl1czogNXB4O1xuICAtLWxhcmdlLXJhZGl1czogMTBweDtcbiAgLS1wcmltYXJ5LWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTIwMCk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn1cblxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLm5hdkxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICBtYXJnaW46IDcwcHggMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5nYWxsZXJ5LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAzMHB4O1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiA3cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLm1lYWwtaW1nIHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubGlrZS1jb21tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLm51bS1vZi1saWtlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA3MCU7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb21tZW50LWJ0biB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmVzZXJ2YXRpb24tYnRuIHtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5cbi5iYWNrZHJvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDM3KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjAwO1xufVxuXG4uYmFja2Ryb3Aub3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5mby1wb3B1cC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDgwMHB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XG4gIHotaW5kZXg6IDMwMDtcbn1cblxuLmluZm8tcG9wdXAtY29udGFpbmVyLm9wZW4ge1xuICB0b3A6IDA7XG59XG5cbi5pbmZvLXBvcHVwIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uaW5mby1wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmluZm8tcG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stMjAwKTtcbn1cblxuLmluZm8tcG9wdXAgaSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IHZhcigtLXRleHQtZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay01MDApO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmluZm8tcG9wdXAgLmltZy1kZXNjIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5mby1wb3B1cCAuaW1nLWRlc2MgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWRlc2MtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmdyZWRpZW50cy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmdyZWRpZW50cy1jb250YWluZXIgPiA6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmluZ3JlZGllbnRzLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMikge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnRzLWxpc3QgbGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay0xMDApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29tbWVudHMtbGlzdCBsaSBoNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbW1lbnRzLWxpc3QgbGkgcCB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmNvbW1lbnQtZm9ybSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5pbnB1dC1jb250cm9sbGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dC1jb250cm9sbGVyIGlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlcjogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmlucHV0LWNvbnRyb2xsZXIgdGV4dGFyZWE6Zm9jdXMsXG4uaW5wdXQtY29udHJvbGxlciBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjIzLCAxOSwgMjIzKTtcbn1cblxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5mb290ZXIgLmZvb3Rlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgdWwgbGkge1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB1bCBsaTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDEpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTIwMCk7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHVsIDpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgdWwgOm50aC1jaGlsZCgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxvQ0FB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RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5REFBd0Q7RUFDeEQsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzA0N2FlZDtcXG4gIC0td2hpdGUtY29sb3I6ICNmZmZmO1xcbiAgLS1ibGFjay04MDA6IHJnYigyMSwgMjEsIDIyKTtcXG4gIC0tYmxhY2stNTAwOiByZ2JhKDAsIDAsIDAsIDAuNjgyKTtcXG4gIC0tYmxhY2stMjAwOiByZ2JhKDQ2LCA0NiwgNDgsIDAuMjQ5KTtcXG4gIC0tYmxhY2stMTAwOiByZ2JhKDQ2LCA0NiwgNDgsIDAuMTAxKTtcXG4gIC0tcmVkLTUwMDogcmdiKDIxNiwgNTEsIDUxKTtcXG4gIC0tdGV4dC1mb250OiAxN3B4O1xcbiAgLS1oMS1mb250OiAyN3B4O1xcbiAgLS1tZC1yYWRpdXM6IDVweDtcXG4gIC0tbGFyZ2UtcmFkaXVzOiAxMHB4O1xcbiAgLS1wcmltYXJ5LWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTIwMCk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvU3BpY2VzXFxcXCAmXFxcXCBGbGF2b3JzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLm5hdkxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY1dmg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICBtYXJnaW46IDcwcHggMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2FsbGVyeS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgZ2FwOiA2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA3cHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5tZWFsLWltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmxpa2UtY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ubnVtLW9mLWxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWJ0biB7XFxuICB3aWR0aDogMzAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tYnRuIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDM3KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5iYWNrZHJvcC5vcGVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW5mby1wb3B1cC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA4MDBweDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG4gIHotaW5kZXg6IDMwMDtcXG59XFxuXFxuLmluZm8tcG9wdXAtY29udGFpbmVyLm9wZW4ge1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaW5mby1wb3B1cCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5pbmZvLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogN3B4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbmZvLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay0yMDApO1xcbn1cXG5cXG4uaW5mby1wb3B1cCBpIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWZvbnQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLTUwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5pbmZvLXBvcHVwIC5pbWctZGVzYyB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaW5mby1wb3B1cCAuaW1nLWRlc2MgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmdyZWRpZW50cy1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7XFxuICBib3JkZXItcmlnaHQ6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5pbmdyZWRpZW50cy1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3QgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay0xMDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCBsaSBoNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb21tZW50cy1saXN0IGxpIHAge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtY29udHJvbGxlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0LWNvbnRyb2xsZXIgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmlucHV0LWNvbnRyb2xsZXIgdGV4dGFyZWEge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJvcmRlcjogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmlucHV0LWNvbnRyb2xsZXIgdGV4dGFyZWE6Zm9jdXMsXFxuLmlucHV0LWNvbnRyb2xsZXIgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyMjMsIDE5LCAyMjMpO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5mb290ZXIgLmZvb3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1sb2dvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvU3BpY2VzXFxcXCAmXFxcXCBGbGF2b3JzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHVsIGxpIHtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2stODAwKTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgdWwgOm50aC1jaGlsZCgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgdWwgOm50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgdWwgOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG5mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2E9SW5kaWFuJztcbmNvbnN0IGludm9sdmVtZW50TGlrZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9pU3RNempDdVBVc1NOSjVkUzFVYy9saWtlcy8nO1xuY29uc3QgaW52b2x2ZW1lbnRDb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2lTdE16akN1UFVzU05KNWRTMVVjL2NvbW1lbnRzLyc7XG5cbmV4cG9ydCB7IGJhc2VVcmwsIGludm9sdmVtZW50TGlrZVVybCwgaW52b2x2ZW1lbnRDb21tZW50VXJsIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9tb2R1bGUvYXBpRGF0YS5qcyc7XG5cbmxldCBhcnJheU9mTWVhbHMgPSBbXTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbmNvbnN0IGluZm9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXBvcHVwLWNvbnRhaW5lcicpO1xuY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVybCk7XG4gIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHJldHVybiBtZWFscztcbn07XG5cbmdldERhdGEoKTtcblxuY29uc3Qgc2hvd01lYWxEZXRhaWxJbmZvcm1hdGlvbiA9IGFzeW5jIChpdGVtLCB2aWV3KSA9PiB7XG4gIGNvbnN0IGltYWdlRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctZGVzYyBpbWcnKTtcbiAgY29uc3QgaW5mb01lYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRlc2MtdGl0bGUnKTtcbiAgY29uc3QgYXJlYUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZXAtYXJlYS1pbmZvJyk7XG4gIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VwLWluZ3JlZGllbnQtaW5mbycpO1xuICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNhdGVnb3J5Jyk7XG4gIGNvbnN0IG1lc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1lc3VyZScpO1xuXG4gIHN3aXRjaCAodmlldykge1xuICAgIGNhc2UgJ3Nob3cnOiB7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2l0ZW0uaWRNZWFsfWA7XG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgeyBtZWFscyB9ID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcbiAgICAgIGltYWdlRGVzay5zcmMgPSBpdGVtLnN0ck1lYWxUaHVtYjtcbiAgICAgIGluZm9NZWFsVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnN0ck1lYWw7XG4gICAgICBhcmVhSW5mby50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckFyZWE7XG5cbiAgICAgIGluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gbWVhbHNbMF0uc3RySW5ncmVkaWVudDE7XG4gICAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckNhdGVnb3J5O1xuICAgICAgbWVzdXJlLnRleHRDb250ZW50ID0gbWVhbHNbMF0uc3RyTWVhc3VyZTI7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnY2xvc2UnOiB7XG4gICAgICBpbWFnZURlc2suc3JjID0gJyc7XG4gICAgICBpbmZvTWVhbFRpdGxlLnRleHRDb250ZW50ID0gJy4ubG9hZGluZyc7XG4gICAgICBhcmVhSW5mby50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xuXG4gICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSAnLi5sb2FkaW5nJztcbiAgICAgIG1lc3VyZS50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xuICAgICAgaW5mb1BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dNZWFsRGV0YWlsID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgaW5mb1BvcHVwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICBhd2FpdCBzaG93TWVhbERldGFpbEluZm9ybWF0aW9uKGl0ZW0sICdzaG93Jyk7XG59O1xuXG5jb25zdCBzaG93TWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIGFycmF5T2ZNZWFscyA9IGF3YWl0IGdldERhdGEoKTtcbiAgYXJyYXlPZk1lYWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pdGVtJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGl0ZW0uaWRNZWFsKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW1hZ2UgZWxlbWVudFxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBpdGVtLnN0ck1lYWxUaHVtYjtcbiAgICBpbWcuYWx0ID0gJyc7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdtZWFsLWltZyc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbGlrZSBhbmQgY29tbWVudFxuICAgIGNvbnN0IGxpa2VDb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlrZUNvbW1lbnREaXYuY2xhc3NOYW1lID0gJ2xpa2UtY29tbWVudCc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHBhcmFncmFwaCBlbGVtZW50IGZvciBpdGVtIG5hbWVcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnaXRlbS1uYW1lJztcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uc3RyTWVhbDtcblxuICAgIC8vIENyZWF0ZSB0aGUgaGVhcnQgaWNvbiBlbGVtZW50XG4gICAgY29uc3QgaGVhcnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGhlYXJ0SWNvbi5jbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1oZWFydCc7XG4gICAgaGVhcnRJY29uLnN0eWxlLmNvbG9yID0gJyNmZjAwMDAnO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBpdGVtIG5hbWUgYW5kIGhlYXJ0IGljb24gdG8gdGhlIGxpa2UgYW5kIGNvbW1lbnQgZGl2XG4gICAgbGlrZUNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGxpa2VDb21tZW50RGl2LmFwcGVuZENoaWxkKGhlYXJ0SWNvbik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbnVtYmVyIG9mIGxpa2VzXG4gICAgY29uc3QgbnVtT2ZMaWtlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bU9mTGlrZXNEaXYuY2xhc3NOYW1lID0gJ251bS1vZi1saWtlcyc7XG4gICAgbnVtT2ZMaWtlc0Rpdi50ZXh0Q29udGVudCA9ICcwIExpa2VzJztcblxuICAgIC8vIENyZWF0ZSB0aGUgZGl2IGZvciBidXR0b24gY29udGFpbmVyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdidG4tY29udGFpbmVyJztcblxuICAgIC8vIENyZWF0ZSB0aGUgY29tbWVudCBidXR0b25cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudC1idG4nO1xuICAgIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG4gICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dNZWFsRGV0YWlsKGl0ZW0pKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVzZXJ2YXRpb24gYnV0dG9uXG4gICAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZhdGlvbkJ0bi5jbGFzc05hbWUgPSAncmVzZXJ2YXRpb24tYnRuJztcbiAgICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbic7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGJ1dHRvbnMgdG8gdGhlIGJ1dHRvbiBjb250YWluZXIgZGl2XG4gICAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuICAgIGJ0bkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkJ0bik7XG5cbiAgICAvLyBBcHBlbmQgYWxsIHRoZSBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBtYWluIGRpdlxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaWtlQ29tbWVudERpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKG51bU9mTGlrZXNEaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXJEaXYpO1xuXG4gICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZSBtYWluIGRpdiBpbiB5b3VyIERPTVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNob3dNZWFscygpO1xufSk7XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd01lYWxEZXRhaWxJbmZvcm1hdGlvbih7fSwgJ2Nsb3NlJykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9