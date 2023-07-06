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

.ingredients-container> :nth-child(1) {
  border-right: var(--primary-border);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 10px;
}

.ingredients-container> :nth-child(2) {
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

.comment-name {
  display: flex;
  align-items: center;
}

.comment-name span {
  font-size: 14px;
}

.comments-list li p {
  color: var(--black-500);
  margin: 0 10px;
}

.comment-date {
  font-size: 14px;
  padding-top: 20px;
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
  margin-bottom: 30px;
  padding: 20px 0;
  font-family: "Lato", sans-serif;
  cursor: pointer;
}

.comment-form button:disabled {
  background-color: gray;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n:root {\n  --primary-color: #047aed;\n  --white-color: #ffff;\n  --black-800: rgb(21, 21, 22);\n  --black-500: rgba(0, 0, 0, 0.682);\n  --black-200: rgba(46, 46, 48, 0.249);\n  --black-100: rgba(46, 46, 48, 0.101);\n  --red-500: rgb(216, 51, 51);\n  --text-font: 17px;\n  --h1-font: 27px;\n  --md-radius: 5px;\n  --large-radius: 10px;\n  --primary-border: 1px solid var(--black-200);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden;\n  background: #222;\n}\n\nheader {\n  width: 100%;\n  background: #fff;\n}\n\n.header-logo {\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\n  background-repeat: no-repeat;\n  height: 70px;\n  width: 70px;\n  background-size: cover;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n  width: 100%;\n  align-items: center;\n  height: 70px;\n}\n\n.navList {\n  display: flex;\n  width: 40%;\n  justify-content: space-evenly;\n  list-style-type: none;\n}\n\n.container {\n  height: 65vh;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 20px;\n  margin: 70px 0;\n  color: #fff;\n}\n\n.gallery-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px;\n  gap: 6px;\n  padding: 10px;\n  border: 7px solid #fff;\n  border-radius: 25px;\n}\n\n.meal-img {\n  width: 65%;\n  height: 50%;\n  border: 1px solid black;\n}\n\n.like-comment {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50px;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\n.num-of-likes {\n  display: flex;\n  width: 70%;\n  justify-content: end;\n  font-size: 18px;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.comment-btn {\n  width: 30%;\n  padding: 6px;\n  font-size: 15px;\n}\n\n.reservation-btn {\n  width: 35%;\n  padding: 6px;\n  font-size: 15px;\n}\n\n@media screen and (max-width: 768px) {\n  .main-container {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .main-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.backdrop {\n  width: 100%;\n  height: 100vh;\n  display: none;\n  background: rgba(0, 0, 0, 0.437);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 200;\n}\n\n.backdrop.open {\n  display: block;\n}\n\n.info-popup-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 800px;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  transition: ease-out 300ms;\n  z-index: 300;\n}\n\n.info-popup-container.open {\n  top: 0;\n}\n\n.info-popup {\n  max-width: 800px;\n  width: 100%;\n  height: 100vh;\n  background: white;\n  padding: 20px;\n  overflow: auto;\n  padding-right: 5px;\n}\n\n.info-popup::-webkit-scrollbar {\n  width: 7px;\n  background: transparent;\n}\n\n.info-popup::-webkit-scrollbar-thumb {\n  background-color: var(--black-200);\n}\n\n.info-popup i {\n  text-align: right;\n  font-size: var(--text-font);\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 100%;\n  background: var(--black-500);\n  color: white;\n  float: right;\n}\n\n.info-popup .img-desc {\n  max-width: 500px;\n  margin: auto;\n}\n\n.info-popup .img-desc img {\n  width: 100%;\n}\n\n.product-desc-title {\n  text-align: center;\n  padding: 20px;\n}\n\n.ingredients-container {\n  max-width: 600px;\n  width: 100%;\n  border-bottom: var(--primary-border);\n  margin: 20px auto;\n  display: flex;\n  padding: 20px;\n  justify-content: center;\n}\n\n.ingredients-container> :nth-child(1) {\n  border-right: var(--primary-border);\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-right: 10px;\n}\n\n.ingredients-container> :nth-child(2) {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-left: 20px;\n  text-align: left;\n}\n\n.comments {\n  margin: auto;\n  margin-top: 50px;\n  max-width: 400px;\n  width: 100%;\n}\n\n.comments-list li {\n  padding: 10px;\n  max-width: 400px;\n  background: var(--black-100);\n  border-radius: 5px;\n  margin: 10px auto;\n  list-style: none;\n}\n\n.comments-list li h4 {\n  background-color: var(--black-500);\n  padding: 10px;\n  margin: 10px;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  color: white;\n}\n\n.comment-name {\n  display: flex;\n  align-items: center;\n}\n\n.comment-name span {\n  font-size: 14px;\n}\n\n.comments-list li p {\n  color: var(--black-500);\n  margin: 0 10px;\n}\n\n.comment-date {\n  font-size: 14px;\n  padding-top: 20px;\n}\n\n.comment-form {\n  max-width: 400px;\n  width: 100%;\n  margin: 20px auto;\n  padding-top: 20px;\n}\n\n.input-controller {\n  width: 100%;\n}\n\n.input-controller input {\n  width: 90%;\n  max-width: 400px;\n  height: 40px;\n  border: var(--primary-border);\n  padding: 0 20px;\n  border-radius: 5px;\n}\n\n.input-controller textarea {\n  max-width: 400px;\n  max-height: 200px;\n  width: 95%;\n  border: var(--primary-border);\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 10px;\n  font-family: \"Lato\", sans-serif;\n  resize: vertical;\n}\n\n.input-controller textarea:focus,\n.input-controller input:focus {\n  outline: 2px solid rgb(223, 19, 223);\n}\n\n.comment-form button {\n  width: 100%;\n  background-color: var(--black-500);\n  border-radius: 5px;\n  border: none;\n  color: white;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  padding: 20px 0;\n  font-family: \"Lato\", sans-serif;\n  cursor: pointer;\n}\n\n.comment-form button:disabled {\n  background-color: gray;\n}\n\n.close-btn {\n  float: right;\n  border: none;\n  outline: none;\n}\n\nfooter {\n  width: 100%;\n  border-top: var(--primary-border);\n  bottom: 0;\n  background: #fff;\n  color: #000;\n  font-weight: 700;\n}\n\nfooter .footer-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-logo {\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.footer-container ul {\n  display: flex;\n  list-style: none;\n  gap: 20px;\n  color: var(--black-500);\n}\n\n.footer-container ul li {\n  transition: 300ms;\n  cursor: pointer;\n}\n\n.footer-container ul li:hover {\n  color: var(--black-800);\n}\n\n.footer-container ul :nth-child(1) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-right: 1px solid var(--black-200);\n}\n\n.footer-container ul :nth-child(2) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-right: 1px solid var(--black-200);\n}\n\n.footer-container ul :nth-child(3) {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nfooter .footer-copyright {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}"],"sourceRoot":""}]);
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
// eslint disable
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
const involvementLikeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iStMzjCuPUsSNJ5dS1Uc/likes/';
const involvementCommentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iStMzjCuPUsSNJ5dS1Uc/comments/';



/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const comment = (props) => {
  const el = document.createElement('li');
  const nameLogo = props.username.split('')[0];
  el.innerHTML = `

    <div class="comment-name">
       <h4>${nameLogo}</h4>
       <span>${props.username}</span>
    </div>

    <p>${props.comment}</p>
    <p class="comment-date">Date :${props.creation_date}</p>
    `;
  return el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comment);

/***/ }),

/***/ "./src/module/comments.js":
/*!********************************!*\
  !*** ./src/module/comments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchComments: () => (/* binding */ fetchComments),
/* harmony export */   postComment: () => (/* binding */ postComment),
/* harmony export */   printComment: () => (/* binding */ printComment)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/module/comment.js");


const fetchComments = async (url, id) => {
  let response;
  await fetch(`${url}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(async (data) => {
    console.log(data);
    response = await data.json();
    return response;
  })
    .then((result) => {
      response = result;
    }).catch((error) => {
      console.log(error);
      throw error;
    });

  return response;
};

const postComment = async (url, content) => {
  const newComment = JSON.stringify({
    item_id: content.idMeal,
    username: content.username,
    comment: content.comment,
  });

  fetch(url, {
    method: 'POST',
    body: newComment,
    headers: {
      'Content-type': 'application/json',
    },
  }).then(() => {
    console.log('...this request does not provide a response');
  }).catch((error) => {
    throw error;
  });
};

const printComment = (comments) => {
  const getCommentContainer = document.querySelector('.comments-list');
  const commentsLength = document.querySelector('.comment-length');
  commentsLength.textContent = comments.length;


  getCommentContainer.innerHTML = '';
  comments.forEach((comment) => {
    getCommentContainer.appendChild((0,_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comment));
  });
};

/***/ }),

/***/ "./src/module/getBaseData.js":
/*!***********************************!*\
  !*** ./src/module/getBaseData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ "./src/module/apiData.js");


const getData = async () => {
  const result = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl);
  const { meals } = await result.json();
  console.log(meals);
  return meals;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/module/getLike.js":
/*!*******************************!*\
  !*** ./src/module/getLike.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ "./src/module/apiData.js");


const fetchLikes = async () => {
  try {
    const result = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.involvementLikeUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    return [];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);


/***/ }),

/***/ "./src/assets/Spices & Flavors.png":
/*!*****************************************!*\
  !*** ./src/assets/Spices & Flavors.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69a469a06f44d68f045f.png";

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
/* harmony import */ var _assets_Spices_Flavors_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Spices & Flavors.png */ "./src/assets/Spices & Flavors.png");
/* harmony import */ var _module_getLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/getLike.js */ "./src/module/getLike.js");
/* harmony import */ var _module_getBaseData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/getBaseData.js */ "./src/module/getBaseData.js");
/* harmony import */ var _module_apiData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/apiData.js */ "./src/module/apiData.js");
/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/comments.js */ "./src/module/comments.js");







let arrayOfMeals = [];
let arrayOfComments = [];
let selectedId = '';

const mainContainer = document.querySelector('.main-container');
const infoPopup = document.querySelector('.info-popup-container');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');
const commentForm = document.querySelector('.comment-form');
const formSubmitButton = document.querySelector('.comment-submit-button');
const commentsList = document.querySelector('.comments-list');
const commentLength = document.querySelector('.comment-length');

// const getData = async () => {
//   const result = await fetch(baseUrl);
//   const { meals } = await result.json();
//   return meals;
// };

// getData();

const printFetchedComments = async () => {
  arrayOfComments = [];
  commentsList.innerHTML = '';
  commentLength.textContent = 0;

  try {
    const request = await (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_5__.fetchComments)(_module_apiData_js__WEBPACK_IMPORTED_MODULE_4__.involvementCommentUrl, selectedId);
    arrayOfComments = [...request];
    console.log(arrayOfComments);
    (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_5__.printComment)(arrayOfComments);
  } catch (error) {
    console.log(error.message, 'error');
  }
};

const showMealDetailInformation = async (item, view) => {
  const imageDesk = document.querySelector('.img-desc img');
  const infoMealTitle = document.querySelector('.product-desc-title');
  const areaInfo = document.querySelector('.recep-area-info');
  const ingredients = document.querySelector('.recep-ingredient-info');
  const category = document.querySelector('.info-category');
  const mesure = document.querySelector('.info-mesure');

  switch (view) {
    case 'show': {
      selectedId = item.idMeal;
      printFetchedComments();
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
  try {
    arrayOfMeals = await (0,_module_getBaseData_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const dataLikes = await (0,_module_getLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    arrayOfMeals.forEach((item, id) => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      div.setAttribute('data-id', id);

      // Create the image element
      const img = document.createElement('img');
      img.src = item.strMealThumb;
      img.alt = '';
      img.className = 'meal-img';

      // Create the div for like and comment
      const likeCommentDiv = document.createElement('div');
      likeCommentDiv.className = 'like-comment';

      // Create the paragraph element for each item name
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

      const countOfLikes = div.querySelector('.num-of-likes');
      // const myLikes = dataLikes.find(like => like.item_id === id)?.likes??0;
      let likeOfMeal = 0;
      dataLikes.forEach((like) => {
        if (like.item_id === id) {
          likeOfMeal = like.likes;
        }
      });

      countOfLikes.textContent = `${likeOfMeal} likes`;

      // Now you can use the main div in your DOM
      mainContainer.appendChild(div);
    });
  } catch (error) {
    console.error('ERROR', error);
  }
};

// add comment
const postCommentInfo = async (e) => {
  e.preventDefault();
  const commentNameInput = document.querySelector('.comment-user_name');
  const commentContent = document.querySelector('.comment-content');

  if (
    commentNameInput.value.trim().split('').length < 1
    || commentContent.value.trim().split('').length < 1
  ) {
    return alert('get serious');
  }

  // post comment to server
  const findIndexOfSelectedData = arrayOfMeals.findIndex(
    (e) => e.idMeal === selectedId,
  );

  formSubmitButton.textContent = '...loading';
  formSubmitButton.disabled = true;
  await (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_5__.postComment)(`${_module_apiData_js__WEBPACK_IMPORTED_MODULE_4__.involvementCommentUrl}`, {
    idMeal: arrayOfMeals[findIndexOfSelectedData].idMeal,
    username: commentNameInput.value,
    comment: commentContent.value,
  }).then(async (res) => {
    formSubmitButton.textContent = 'Post comment 💬';
    formSubmitButton.disabled = false;
    commentNameInput.value = '';
    commentContent.value = '';
    setTimeout(() => {
      printFetchedComments();
    }, 1000);
  }).catch(err => {
    console.log(err);
    alert("failed to send your request");
  })



};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});

closeBtn.addEventListener('click', () => showMealDetailInformation({}, 'close'));
commentForm.addEventListener('submit', postCommentInfo);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVJQUFnRDtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3hMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVks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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxvQ0FBb0MsWUFBWTs7QUFFaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdFQUFXLElBQUkscUVBQXFCLENBQUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxRUFBcUU7QUFDckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2FwaURhdGEuanMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9nZXRCYXNlRGF0YS5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvZ2V0TGlrZS5qcyIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mbGF2b3ItcXVlc3QtanMtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmxhdm9yLXF1ZXN0LWpzLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZsYXZvci1xdWVzdC1qcy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9TcGljZXMgJiBGbGF2b3JzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwNDdhZWQ7XG4gIC0td2hpdGUtY29sb3I6ICNmZmZmO1xuICAtLWJsYWNrLTgwMDogcmdiKDIxLCAyMSwgMjIpO1xuICAtLWJsYWNrLTUwMDogcmdiYSgwLCAwLCAwLCAwLjY4Mik7XG4gIC0tYmxhY2stMjAwOiByZ2JhKDQ2LCA0NiwgNDgsIDAuMjQ5KTtcbiAgLS1ibGFjay0xMDA6IHJnYmEoNDYsIDQ2LCA0OCwgMC4xMDEpO1xuICAtLXJlZC01MDA6IHJnYigyMTYsIDUxLCA1MSk7XG4gIC0tdGV4dC1mb250OiAxN3B4O1xuICAtLWgxLWZvbnQ6IDI3cHg7XG4gIC0tbWQtcmFkaXVzOiA1cHg7XG4gIC0tbGFyZ2UtcmFkaXVzOiAxMHB4O1xuICAtLXByaW1hcnktYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4ubmF2TGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDY1dmg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIG1hcmdpbjogNzBweCAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmdhbGxlcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDMwcHg7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDdweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubWVhbC1pbWcge1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5saWtlLWNvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubnVtLW9mLWxpa2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmNvbW1lbnQtYnRuIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yZXNlcnZhdGlvbi1idG4ge1xuICB3aWR0aDogMzUlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuLmJhY2tkcm9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40MzcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5iYWNrZHJvcC5vcGVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmZvLXBvcHVwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogODAwcHg7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcbiAgei1pbmRleDogMzAwO1xufVxuXG4uaW5mby1wb3B1cC1jb250YWluZXIub3BlbiB7XG4gIHRvcDogMDtcbn1cblxuLmluZm8tcG9wdXAge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5pbmZvLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5mby1wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay0yMDApO1xufVxuXG4uaW5mby1wb3B1cCBpIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLTUwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaW5mby1wb3B1cCAuaW1nLWRlc2Mge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLXBvcHVwIC5pbWctZGVzYyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtZGVzYy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZ3JlZGllbnRzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZ3JlZGllbnRzLWNvbnRhaW5lcj4gOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5pbmdyZWRpZW50cy1jb250YWluZXI+IDpudGgtY2hpbGQoMikge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnRzLWxpc3QgbGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay0xMDApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY29tbWVudHMtbGlzdCBsaSBoNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbW1lbnQtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb21tZW50LW5hbWUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbW1lbnRzLWxpc3QgbGkgcCB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmNvbW1lbnQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LWZvcm0ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaW5wdXQtY29udHJvbGxlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtY29udHJvbGxlciBpbnB1dCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXQtY29udHJvbGxlciB0ZXh0YXJlYSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhOmZvY3VzLFxuLmlucHV0LWNvbnRyb2xsZXIgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDIyMywgMTksIDIyMyk7XG59XG5cbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50LWZvcm0gYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5mb290ZXIgLmZvb3Rlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgdWwgbGkge1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB1bCBsaTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDEpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTIwMCk7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHVsIDpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgdWwgOm50aC1jaGlsZCgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5REFBd0Q7RUFDeEQsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixRQUFRO0VBQ1IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7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Q1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwNDdhZWQ7XFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmZjtcXG4gIC0tYmxhY2stODAwOiByZ2IoMjEsIDIxLCAyMik7XFxuICAtLWJsYWNrLTUwMDogcmdiYSgwLCAwLCAwLCAwLjY4Mik7XFxuICAtLWJsYWNrLTIwMDogcmdiYSg0NiwgNDYsIDQ4LCAwLjI0OSk7XFxuICAtLWJsYWNrLTEwMDogcmdiYSg0NiwgNDYsIDQ4LCAwLjEwMSk7XFxuICAtLXJlZC01MDA6IHJnYigyMTYsIDUxLCA1MSk7XFxuICAtLXRleHQtZm9udDogMTdweDtcXG4gIC0taDEtZm9udDogMjdweDtcXG4gIC0tbWQtcmFkaXVzOiA1cHg7XFxuICAtLWxhcmdlLXJhZGl1czogMTBweDtcXG4gIC0tcHJpbWFyeS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL1NwaWNlc1xcXFwgJlxcXFwgRmxhdm9ycy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5uYXZMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiA2NXZoO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA3MHB4IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdhbGxlcnktaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGdhcDogNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogN3B4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ubWVhbC1pbWcge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5saWtlLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLm51bS1vZi1saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWJ0biB7XFxuICB3aWR0aDogMzUlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQzNyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4uYmFja2Ryb3Aub3BlbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmluZm8tcG9wdXAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogODAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XFxuICB6LWluZGV4OiAzMDA7XFxufVxcblxcbi5pbmZvLXBvcHVwLWNvbnRhaW5lci5vcGVuIHtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmluZm8tcG9wdXAge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uaW5mby1wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5mby1wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stMjAwKTtcXG59XFxuXFxuLmluZm8tcG9wdXAgaSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1mb250KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay01MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uaW5mby1wb3B1cCAuaW1nLWRlc2Mge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmluZm8tcG9wdXAgLmltZy1kZXNjIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2R1Y3QtZGVzYy10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmluZ3JlZGllbnRzLWNvbnRhaW5lcj4gOm50aC1jaGlsZCgxKSB7XFxuICBib3JkZXItcmlnaHQ6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5pbmdyZWRpZW50cy1jb250YWluZXI+IDpudGgtY2hpbGQoMikge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNvbW1lbnRzIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50cy1saXN0IGxpIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stMTAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3QgbGkgaDQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29tbWVudC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC1uYW1lIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCBsaSBwIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5jb21tZW50LWRhdGUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5jb21tZW50LWZvcm0ge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRyb2xsZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1jb250cm9sbGVyIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhOmZvY3VzLFxcbi5pbnB1dC1jb250cm9sbGVyIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjIzLCAxOSwgMjIzKTtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWxvZ28ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9TcGljZXNcXFxcICZcXFxcIEZsYXZvcnMucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgdWwgbGkge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDEpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVzbGludCBkaXNhYmxlXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2E9SW5kaWFuJztcbmNvbnN0IGludm9sdmVtZW50TGlrZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9pU3RNempDdVBVc1NOSjVkUzFVYy9saWtlcy8nO1xuY29uc3QgaW52b2x2ZW1lbnRDb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2lTdE16akN1UFVzU05KNWRTMVVjL2NvbW1lbnRzLyc7XG5cbmV4cG9ydCB7IGJhc2VVcmwsIGludm9sdmVtZW50TGlrZVVybCwgaW52b2x2ZW1lbnRDb21tZW50VXJsIH07IiwiY29uc3QgY29tbWVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5hbWVMb2dvID0gcHJvcHMudXNlcm5hbWUuc3BsaXQoJycpWzBdO1xuICBlbC5pbm5lckhUTUwgPSBgXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1uYW1lXCI+XG4gICAgICAgPGg0PiR7bmFtZUxvZ299PC9oND5cbiAgICAgICA8c3Bhbj4ke3Byb3BzLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxwPiR7cHJvcHMuY29tbWVudH08L3A+XG4gICAgPHAgY2xhc3M9XCJjb21tZW50LWRhdGVcIj5EYXRlIDoke3Byb3BzLmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgIGA7XG4gIHJldHVybiBlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnQ7IiwiaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21tZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBsZXQgcmVzcG9uc2U7XG4gIGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJlc3BvbnNlID0gcmVzdWx0O1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKHVybCwgY29udGVudCkgPT4ge1xuICBjb25zdCBuZXdDb21tZW50ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGl0ZW1faWQ6IGNvbnRlbnQuaWRNZWFsLFxuICAgIHVzZXJuYW1lOiBjb250ZW50LnVzZXJuYW1lLFxuICAgIGNvbW1lbnQ6IGNvbnRlbnQuY29tbWVudCxcbiAgfSk7XG5cbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogbmV3Q29tbWVudCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCcuLi50aGlzIHJlcXVlc3QgZG9lcyBub3QgcHJvdmlkZSBhIHJlc3BvbnNlJyk7XG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIHRocm93IGVycm9yO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmludENvbW1lbnQgPSAoY29tbWVudHMpID0+IHtcbiAgY29uc3QgZ2V0Q29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gIGNvbnN0IGNvbW1lbnRzTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGVuZ3RoJyk7XG4gIGNvbW1lbnRzTGVuZ3RoLnRleHRDb250ZW50ID0gY29tbWVudHMubGVuZ3RoO1xuXG5cbiAgZ2V0Q29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGdldENvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoQ29tbWVudChjb21tZW50KSk7XG4gIH0pO1xufTsiLCJpbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9hcGlEYXRhLmpzJztcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVybCk7XG4gIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIGNvbnNvbGUubG9nKG1lYWxzKTtcbiAgcmV0dXJuIG1lYWxzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiIsImltcG9ydCB7IGludm9sdmVtZW50TGlrZVVybCB9IGZyb20gJy4vYXBpRGF0YS5qcyc7XG5cbmNvbnN0IGZldGNoTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRMaWtlVXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoTGlrZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvU3BpY2VzICYgRmxhdm9ycy5wbmcnO1xuaW1wb3J0IGZldGNoTGlrZXMgZnJvbSAnLi9tb2R1bGUvZ2V0TGlrZS5qcyc7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZS9nZXRCYXNlRGF0YS5qcyc7XG5pbXBvcnQgeyBpbnZvbHZlbWVudENvbW1lbnRVcmwgfSBmcm9tICcuL21vZHVsZS9hcGlEYXRhLmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50LCBwcmludENvbW1lbnQsIGZldGNoQ29tbWVudHMgfSBmcm9tICcuL21vZHVsZS9jb21tZW50cy5qcyc7XG5cbmxldCBhcnJheU9mTWVhbHMgPSBbXTtcbmxldCBhcnJheU9mQ29tbWVudHMgPSBbXTtcbmxldCBzZWxlY3RlZElkID0gJyc7XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbmNvbnN0IGluZm9Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXBvcHVwLWNvbnRhaW5lcicpO1xuY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG5jb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc3VibWl0LWJ1dHRvbicpO1xuY29uc3QgY29tbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKTtcbmNvbnN0IGNvbW1lbnRMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1sZW5ndGgnKTtcblxuLy8gY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbi8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVybCk7XG4vLyAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4vLyAgIHJldHVybiBtZWFscztcbi8vIH07XG5cbi8vIGdldERhdGEoKTtcblxuY29uc3QgcHJpbnRGZXRjaGVkQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGFycmF5T2ZDb21tZW50cyA9IFtdO1xuICBjb21tZW50c0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGNvbW1lbnRMZW5ndGgudGV4dENvbnRlbnQgPSAwO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoQ29tbWVudHMoaW52b2x2ZW1lbnRDb21tZW50VXJsLCBzZWxlY3RlZElkKTtcbiAgICBhcnJheU9mQ29tbWVudHMgPSBbLi4ucmVxdWVzdF07XG4gICAgY29uc29sZS5sb2coYXJyYXlPZkNvbW1lbnRzKTtcbiAgICBwcmludENvbW1lbnQoYXJyYXlPZkNvbW1lbnRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlLCAnZXJyb3InKTtcbiAgfVxufTtcblxuY29uc3Qgc2hvd01lYWxEZXRhaWxJbmZvcm1hdGlvbiA9IGFzeW5jIChpdGVtLCB2aWV3KSA9PiB7XG4gIGNvbnN0IGltYWdlRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctZGVzYyBpbWcnKTtcbiAgY29uc3QgaW5mb01lYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRlc2MtdGl0bGUnKTtcbiAgY29uc3QgYXJlYUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZXAtYXJlYS1pbmZvJyk7XG4gIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VwLWluZ3JlZGllbnQtaW5mbycpO1xuICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNhdGVnb3J5Jyk7XG4gIGNvbnN0IG1lc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1lc3VyZScpO1xuXG4gIHN3aXRjaCAodmlldykge1xuICAgIGNhc2UgJ3Nob3cnOiB7XG4gICAgICBzZWxlY3RlZElkID0gaXRlbS5pZE1lYWw7XG4gICAgICBwcmludEZldGNoZWRDb21tZW50cygpO1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpdGVtLmlkTWVhbH1gO1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XG4gICAgICBpbWFnZURlc2suc3JjID0gaXRlbS5zdHJNZWFsVGh1bWI7XG4gICAgICBpbmZvTWVhbFRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5zdHJNZWFsO1xuICAgICAgYXJlYUluZm8udGV4dENvbnRlbnQgPSBtZWFsc1swXS5zdHJBcmVhO1xuXG4gICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckluZ3JlZGllbnQxO1xuICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBtZWFsc1swXS5zdHJDYXRlZ29yeTtcbiAgICAgIG1lc3VyZS50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ck1lYXN1cmUyO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnY2xvc2UnOiB7XG4gICAgICBpbWFnZURlc2suc3JjID0gJyc7XG4gICAgICBpbmZvTWVhbFRpdGxlLnRleHRDb250ZW50ID0gJy4ubG9hZGluZyc7XG4gICAgICBhcmVhSW5mby50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xuXG4gICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSAnLi5sb2FkaW5nJztcbiAgICAgIG1lc3VyZS50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xuICAgICAgaW5mb1BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dNZWFsRGV0YWlsID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgaW5mb1BvcHVwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICBhd2FpdCBzaG93TWVhbERldGFpbEluZm9ybWF0aW9uKGl0ZW0sICdzaG93Jyk7XG59O1xuXG5jb25zdCBzaG93TWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXJyYXlPZk1lYWxzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGRhdGFMaWtlcyA9IGF3YWl0IGZldGNoTGlrZXMoKTtcbiAgICBhcnJheU9mTWVhbHMuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaXRlbScpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBpbWFnZSBlbGVtZW50XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zcmMgPSBpdGVtLnN0ck1lYWxUaHVtYjtcbiAgICAgIGltZy5hbHQgPSAnJztcbiAgICAgIGltZy5jbGFzc05hbWUgPSAnbWVhbC1pbWcnO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbGlrZSBhbmQgY29tbWVudFxuICAgICAgY29uc3QgbGlrZUNvbW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGxpa2VDb21tZW50RGl2LmNsYXNzTmFtZSA9ICdsaWtlLWNvbW1lbnQnO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHBhcmFncmFwaCBlbGVtZW50IGZvciBlYWNoIGl0ZW0gbmFtZVxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnaXRlbS1uYW1lJztcbiAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5zdHJNZWFsO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGhlYXJ0IGljb24gZWxlbWVudFxuICAgICAgY29uc3QgaGVhcnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgaGVhcnRJY29uLmNsYXNzTmFtZSA9ICdmYS1yZWd1bGFyIGZhLWhlYXJ0JztcbiAgICAgIGhlYXJ0SWNvbi5zdHlsZS5jb2xvciA9ICcjZmYwMDAwJztcblxuICAgICAgLy8gQXBwZW5kIHRoZSBpdGVtIG5hbWUgYW5kIGhlYXJ0IGljb24gdG8gdGhlIGxpa2UgYW5kIGNvbW1lbnQgZGl2XG4gICAgICBsaWtlQ29tbWVudERpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICBsaWtlQ29tbWVudERpdi5hcHBlbmRDaGlsZChoZWFydEljb24pO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbnVtYmVyIG9mIGxpa2VzXG4gICAgICBjb25zdCBudW1PZkxpa2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBudW1PZkxpa2VzRGl2LmNsYXNzTmFtZSA9ICdudW0tb2YtbGlrZXMnO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgYnV0dG9uIGNvbnRhaW5lclxuICAgICAgY29uc3QgYnRuQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBidG5Db250YWluZXJEaXYuY2xhc3NOYW1lID0gJ2J0bi1jb250YWluZXInO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGNvbW1lbnQgYnV0dG9uXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ0bic7XG4gICAgICBjb21tZW50QnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dNZWFsRGV0YWlsKGl0ZW0pKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSByZXNlcnZhdGlvbiBidXR0b25cbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZXNlcnZhdGlvbkJ0bi5jbGFzc05hbWUgPSAncmVzZXJ2YXRpb24tYnRuJztcbiAgICAgIHJlc2VydmF0aW9uQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9uJztcblxuICAgICAgLy8gQXBwZW5kIHRoZSBidXR0b25zIHRvIHRoZSBidXR0b24gY29udGFpbmVyIGRpdlxuICAgICAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuICAgICAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnRuKTtcblxuICAgICAgLy8gQXBwZW5kIGFsbCB0aGUgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgbWFpbiBkaXZcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGxpa2VDb21tZW50RGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChudW1PZkxpa2VzRGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXJEaXYpO1xuXG4gICAgICBjb25zdCBjb3VudE9mTGlrZXMgPSBkaXYucXVlcnlTZWxlY3RvcignLm51bS1vZi1saWtlcycpO1xuICAgICAgLy8gY29uc3QgbXlMaWtlcyA9IGRhdGFMaWtlcy5maW5kKGxpa2UgPT4gbGlrZS5pdGVtX2lkID09PSBpZCk/Lmxpa2VzPz8wO1xuICAgICAgbGV0IGxpa2VPZk1lYWwgPSAwO1xuICAgICAgZGF0YUxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gaWQpIHtcbiAgICAgICAgICBsaWtlT2ZNZWFsID0gbGlrZS5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvdW50T2ZMaWtlcy50ZXh0Q29udGVudCA9IGAke2xpa2VPZk1lYWx9IGxpa2VzYDtcblxuICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZSBtYWluIGRpdiBpbiB5b3VyIERPTVxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SJywgZXJyb3IpO1xuICB9XG59O1xuXG4vLyBhZGQgY29tbWVudFxuY29uc3QgcG9zdENvbW1lbnRJbmZvID0gYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjb21tZW50TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtdXNlcl9uYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY29udGVudCcpO1xuXG4gIGlmIChcbiAgICBjb21tZW50TmFtZUlucHV0LnZhbHVlLnRyaW0oKS5zcGxpdCgnJykubGVuZ3RoIDwgMVxuICAgIHx8IGNvbW1lbnRDb250ZW50LnZhbHVlLnRyaW0oKS5zcGxpdCgnJykubGVuZ3RoIDwgMVxuICApIHtcbiAgICByZXR1cm4gYWxlcnQoJ2dldCBzZXJpb3VzJyk7XG4gIH1cblxuICAvLyBwb3N0IGNvbW1lbnQgdG8gc2VydmVyXG4gIGNvbnN0IGZpbmRJbmRleE9mU2VsZWN0ZWREYXRhID0gYXJyYXlPZk1lYWxzLmZpbmRJbmRleChcbiAgICAoZSkgPT4gZS5pZE1lYWwgPT09IHNlbGVjdGVkSWQsXG4gICk7XG5cbiAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcuLi5sb2FkaW5nJztcbiAgZm9ybVN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGF3YWl0IHBvc3RDb21tZW50KGAke2ludm9sdmVtZW50Q29tbWVudFVybH1gLCB7XG4gICAgaWRNZWFsOiBhcnJheU9mTWVhbHNbZmluZEluZGV4T2ZTZWxlY3RlZERhdGFdLmlkTWVhbCxcbiAgICB1c2VybmFtZTogY29tbWVudE5hbWVJbnB1dC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50Q29udGVudC52YWx1ZSxcbiAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdQb3N0IGNvbW1lbnQg8J+SrCc7XG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbW1lbnROYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBjb21tZW50Q29udGVudC52YWx1ZSA9ICcnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJpbnRGZXRjaGVkQ29tbWVudHMoKTtcbiAgICB9LCAxMDAwKTtcbiAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIGFsZXJ0KFwiZmFpbGVkIHRvIHNlbmQgeW91ciByZXF1ZXN0XCIpO1xuICB9KVxuXG5cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2hvd01lYWxzKCk7XG59KTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TWVhbERldGFpbEluZm9ybWF0aW9uKHt9LCAnY2xvc2UnKSk7XG5jb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwb3N0Q29tbWVudEluZm8pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9