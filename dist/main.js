/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/module/mealCounter.js":
/*!***********************************!*\
  !*** ./src/module/mealCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mealcounter: () => (/* binding */ mealcounter),
/* harmony export */   showCount: () => (/* binding */ showCount)
/* harmony export */ });
/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ "./src/module/apiData.js");


const mealcounter = async () => {
  const result = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl);
  const data = await result.json();
  return data.meals.length;
};

const showCount = (num) => {
  const homeli = document.querySelector('.home-li');
  homeli.textContent = `(${num})Meals`;
};



/***/ }),

/***/ "./src/module/sendLike.js":
/*!********************************!*\
  !*** ./src/module/sendLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLike.js */ "./src/module/updateLike.js");
/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiData.js */ "./src/module/apiData.js");



// Send Like To API
const sendLike = async (idValue, div) => {
  try {
    const result = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_1__.involvementLikeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idValue,
        action: 'like',
      }),
    });
    if (result.ok) {
      (0,_updateLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(idValue, div);
    } else {
      console.error('Failed to update DOM:', result.status);
    }
  } catch (error) {
    console.error('Error recording Like:', error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendLike);

/***/ }),

/***/ "./src/module/updateLike.js":
/*!**********************************!*\
  !*** ./src/module/updateLike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateNumberOfLikes = (idValue, div) => {
  let foodLikes = parseInt(div.textContent, 10);
  foodLikes += 1;
  div.textContent = `${foodLikes} likes`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateNumberOfLikes);

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Spices & Flavors.png */ "./src/assets/Spices & Flavors.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary-color: #047aed;\r\n  --white-color: #ffff;\r\n  --black-800: rgb(21, 21, 22);\r\n  --black-500: rgba(0, 0, 0, 0.682);\r\n  --black-200: rgba(46, 46, 48, 0.249);\r\n  --black-100: rgba(46, 46, 48, 0.101);\r\n  --red-500: rgb(216, 51, 51);\r\n  --text-font: 17px;\r\n  --h1-font: 27px;\r\n  --md-radius: 5px;\r\n  --large-radius: 10px;\r\n  --primary-border: 1px solid var(--black-200);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n  overflow-x: hidden;\r\n  background: #222;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  background: #fff;\r\n}\r\n\r\n.header-logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  height: 70px;\r\n  width: 70px;\r\n  background-size: cover;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 20px 0 20px;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 70px;\r\n}\r\n\r\n.navList {\r\n  display: flex;\r\n  width: 40%;\r\n  justify-content: space-evenly;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  height: 65vh;\r\n}\r\n\r\n.main-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 20px;\r\n  margin: 70px 0;\r\n  color: #fff;\r\n}\r\n\r\n.gallery-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 30px;\r\n  gap: 6px;\r\n  padding: 10px;\r\n  border: 7px solid #fff;\r\n  border-radius: 25px;\r\n}\r\n\r\n.meal-img {\r\n  width: 65%;\r\n  height: 50%;\r\n  border: 1px solid black;\r\n}\r\n\r\n.like-comment {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.num-of-likes {\r\n  display: flex;\r\n  width: 70%;\r\n  justify-content: end;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 30%;\r\n  padding: 6px;\r\n  font-size: 15px;\r\n}\r\n\r\n.reservation-btn {\r\n  width: 35%;\r\n  padding: 6px;\r\n  font-size: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) and (max-width: 1024px) {\r\n  .main-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n.backdrop {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: none;\r\n  background: rgba(0, 0, 0, 0.437);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.backdrop.open {\r\n  display: block;\r\n}\r\n\r\n.info-popup-container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 800px;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  transition: ease-out 300ms;\r\n  z-index: 300;\r\n}\r\n\r\n.info-popup-container.open {\r\n  top: 0;\r\n}\r\n\r\n.info-popup {\r\n  max-width: 800px;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: white;\r\n  padding: 20px;\r\n  overflow: auto;\r\n  padding-right: 5px;\r\n}\r\n\r\n.info-popup::-webkit-scrollbar {\r\n  width: 7px;\r\n  background: transparent;\r\n}\r\n\r\n.info-popup::-webkit-scrollbar-thumb {\r\n  background-color: var(--black-200);\r\n}\r\n\r\n.info-popup i {\r\n  text-align: right;\r\n  font-size: var(--text-font);\r\n  cursor: pointer;\r\n  padding: 5px;\r\n  border-radius: 100%;\r\n  background: var(--black-500);\r\n  color: white;\r\n  float: right;\r\n}\r\n\r\n.info-popup .img-desc {\r\n  max-width: 500px;\r\n  margin: auto;\r\n}\r\n\r\n.info-popup .img-desc img {\r\n  width: 100%;\r\n}\r\n\r\n.product-desc-title {\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.ingredients-container {\r\n  max-width: 600px;\r\n  width: 100%;\r\n  border-bottom: var(--primary-border);\r\n  margin: 20px auto;\r\n  display: flex;\r\n  padding: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n.ingredients-container > :nth-child(1) {\r\n  border-right: var(--primary-border);\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.ingredients-container > :nth-child(2) {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding-left: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.comments {\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  max-width: 400px;\r\n  width: 100%;\r\n}\r\n\r\n.comments-list li {\r\n  padding: 10px;\r\n  max-width: 400px;\r\n  background: var(--black-100);\r\n  border-radius: 5px;\r\n  margin: 10px auto;\r\n  list-style: none;\r\n}\r\n\r\n.comments-list li h4 {\r\n  background-color: var(--black-500);\r\n  padding: 10px;\r\n  margin: 10px;\r\n  width: 10px;\r\n  height: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 100%;\r\n  color: white;\r\n}\r\n\r\n.comment-name {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.comment-name span {\r\n  font-size: 14px;\r\n}\r\n\r\n.comments-list li p {\r\n  color: var(--black-500);\r\n  margin: 0 10px;\r\n}\r\n\r\n.comment-date {\r\n  font-size: 14px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.comment-form {\r\n  max-width: 400px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  padding-top: 20px;\r\n}\r\n\r\n.input-controller {\r\n  width: 100%;\r\n}\r\n\r\n.input-controller input {\r\n  width: 90%;\r\n  max-width: 400px;\r\n  height: 40px;\r\n  border: var(--primary-border);\r\n  padding: 0 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.input-controller textarea {\r\n  max-width: 400px;\r\n  max-height: 200px;\r\n  width: 95%;\r\n  border: var(--primary-border);\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  font-family: \"Lato\", sans-serif;\r\n  resize: vertical;\r\n}\r\n\r\n.input-controller textarea:focus,\r\n.input-controller input:focus {\r\n  outline: 2px solid rgb(223, 19, 223);\r\n}\r\n\r\n.comment-form button {\r\n  width: 100%;\r\n  background-color: var(--black-500);\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 30px;\r\n  padding: 20px 0;\r\n  font-family: \"Lato\", sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-form button:disabled {\r\n  background-color: gray;\r\n}\r\n\r\n.close-btn {\r\n  float: right;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border-top: var(--primary-border);\r\n  bottom: 0;\r\n  background: #fff;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\nfooter .footer-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer-logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.footer-container ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  color: var(--black-500);\r\n}\r\n\r\n.footer-container ul li {\r\n  transition: 300ms;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer-container ul li:hover {\r\n  color: var(--black-800);\r\n}\r\n\r\n.footer-container ul :nth-child(1) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  border-right: 1px solid var(--black-200);\r\n}\r\n\r\n.footer-container ul :nth-child(2) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  border-right: 1px solid var(--black-200);\r\n}\r\n\r\n.footer-container ul :nth-child(3) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n}\r\n\r\nfooter .footer-copyright {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\r\n\r\n:root {\r\n  --primary-color: #047aed;\r\n  --white-color: #ffff;\r\n  --black-800: rgb(21, 21, 22);\r\n  --black-500: rgba(0, 0, 0, 0.682);\r\n  --black-200: rgba(46, 46, 48, 0.249);\r\n  --black-100: rgba(46, 46, 48, 0.101);\r\n  --red-500: rgb(216, 51, 51);\r\n  --text-font: 17px;\r\n  --h1-font: 27px;\r\n  --md-radius: 5px;\r\n  --large-radius: 10px;\r\n  --primary-border: 1px solid var(--black-200);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n  overflow-x: hidden;\r\n  background: #222;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  background: #fff;\r\n}\r\n\r\n.header-logo {\r\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\r\n  background-repeat: no-repeat;\r\n  height: 70px;\r\n  width: 70px;\r\n  background-size: cover;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 20px 0 20px;\r\n  width: 100%;\r\n  align-items: center;\r\n  height: 70px;\r\n}\r\n\r\n.navList {\r\n  display: flex;\r\n  width: 40%;\r\n  justify-content: space-evenly;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  height: 65vh;\r\n}\r\n\r\n.main-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 20px;\r\n  margin: 70px 0;\r\n  color: #fff;\r\n}\r\n\r\n.gallery-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 30px;\r\n  gap: 6px;\r\n  padding: 10px;\r\n  border: 7px solid #fff;\r\n  border-radius: 25px;\r\n}\r\n\r\n.meal-img {\r\n  width: 65%;\r\n  height: 50%;\r\n  border: 1px solid black;\r\n}\r\n\r\n.like-comment {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.num-of-likes {\r\n  display: flex;\r\n  width: 70%;\r\n  justify-content: end;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 30%;\r\n  padding: 6px;\r\n  font-size: 15px;\r\n}\r\n\r\n.reservation-btn {\r\n  width: 35%;\r\n  padding: 6px;\r\n  font-size: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) and (max-width: 1024px) {\r\n  .main-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n.backdrop {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: none;\r\n  background: rgba(0, 0, 0, 0.437);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.backdrop.open {\r\n  display: block;\r\n}\r\n\r\n.info-popup-container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 800px;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  transition: ease-out 300ms;\r\n  z-index: 300;\r\n}\r\n\r\n.info-popup-container.open {\r\n  top: 0;\r\n}\r\n\r\n.info-popup {\r\n  max-width: 800px;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: white;\r\n  padding: 20px;\r\n  overflow: auto;\r\n  padding-right: 5px;\r\n}\r\n\r\n.info-popup::-webkit-scrollbar {\r\n  width: 7px;\r\n  background: transparent;\r\n}\r\n\r\n.info-popup::-webkit-scrollbar-thumb {\r\n  background-color: var(--black-200);\r\n}\r\n\r\n.info-popup i {\r\n  text-align: right;\r\n  font-size: var(--text-font);\r\n  cursor: pointer;\r\n  padding: 5px;\r\n  border-radius: 100%;\r\n  background: var(--black-500);\r\n  color: white;\r\n  float: right;\r\n}\r\n\r\n.info-popup .img-desc {\r\n  max-width: 500px;\r\n  margin: auto;\r\n}\r\n\r\n.info-popup .img-desc img {\r\n  width: 100%;\r\n}\r\n\r\n.product-desc-title {\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.ingredients-container {\r\n  max-width: 600px;\r\n  width: 100%;\r\n  border-bottom: var(--primary-border);\r\n  margin: 20px auto;\r\n  display: flex;\r\n  padding: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n.ingredients-container > :nth-child(1) {\r\n  border-right: var(--primary-border);\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.ingredients-container > :nth-child(2) {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding-left: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.comments {\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  max-width: 400px;\r\n  width: 100%;\r\n}\r\n\r\n.comments-list li {\r\n  padding: 10px;\r\n  max-width: 400px;\r\n  background: var(--black-100);\r\n  border-radius: 5px;\r\n  margin: 10px auto;\r\n  list-style: none;\r\n}\r\n\r\n.comments-list li h4 {\r\n  background-color: var(--black-500);\r\n  padding: 10px;\r\n  margin: 10px;\r\n  width: 10px;\r\n  height: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 100%;\r\n  color: white;\r\n}\r\n\r\n.comment-name {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.comment-name span {\r\n  font-size: 14px;\r\n}\r\n\r\n.comments-list li p {\r\n  color: var(--black-500);\r\n  margin: 0 10px;\r\n}\r\n\r\n.comment-date {\r\n  font-size: 14px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.comment-form {\r\n  max-width: 400px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  padding-top: 20px;\r\n}\r\n\r\n.input-controller {\r\n  width: 100%;\r\n}\r\n\r\n.input-controller input {\r\n  width: 90%;\r\n  max-width: 400px;\r\n  height: 40px;\r\n  border: var(--primary-border);\r\n  padding: 0 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.input-controller textarea {\r\n  max-width: 400px;\r\n  max-height: 200px;\r\n  width: 95%;\r\n  border: var(--primary-border);\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  font-family: \"Lato\", sans-serif;\r\n  resize: vertical;\r\n}\r\n\r\n.input-controller textarea:focus,\r\n.input-controller input:focus {\r\n  outline: 2px solid rgb(223, 19, 223);\r\n}\r\n\r\n.comment-form button {\r\n  width: 100%;\r\n  background-color: var(--black-500);\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 30px;\r\n  padding: 20px 0;\r\n  font-family: \"Lato\", sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-form button:disabled {\r\n  background-color: gray;\r\n}\r\n\r\n.close-btn {\r\n  float: right;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border-top: var(--primary-border);\r\n  bottom: 0;\r\n  background: #fff;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\nfooter .footer-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer-logo {\r\n  background-image: url(\"./assets/Spices\\ &\\ Flavors.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.footer-container ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  color: var(--black-500);\r\n}\r\n\r\n.footer-container ul li {\r\n  transition: 300ms;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer-container ul li:hover {\r\n  color: var(--black-800);\r\n}\r\n\r\n.footer-container ul :nth-child(1) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  border-right: 1px solid var(--black-200);\r\n}\r\n\r\n.footer-container ul :nth-child(2) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  border-right: 1px solid var(--black-200);\r\n}\r\n\r\n.footer-container ul :nth-child(3) {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n}\r\n\r\nfooter .footer-copyright {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
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

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
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

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../../node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
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
/* harmony import */ var _module_sendLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/sendLike.js */ "./src/module/sendLike.js");
/* harmony import */ var _module_apiData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/apiData.js */ "./src/module/apiData.js");
/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/comments.js */ "./src/module/comments.js");
/* harmony import */ var _module_mealCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/mealCounter.js */ "./src/module/mealCounter.js");









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
    const request = await (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_6__.fetchComments)(_module_apiData_js__WEBPACK_IMPORTED_MODULE_5__.involvementCommentUrl, selectedId);
    arrayOfComments = [...request];
    console.log(arrayOfComments);
    (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_6__.printComment)(arrayOfComments);
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

      // Heart Icon event listener
      const heartBtn = div.querySelector('.fa-heart');
      heartBtn.addEventListener('click', () => {
        (0,_module_sendLike_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, numOfLikesDiv);
      });
      heartBtn.addEventListener('mouseup', () => {
        heartIcon.classList.add('fa-solid');
        heartIcon.classList.remove('fa-regular');
      });

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
  await (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_6__.postComment)(`${_module_apiData_js__WEBPACK_IMPORTED_MODULE_5__.involvementCommentUrl}`, {
    idMeal: arrayOfMeals[findIndexOfSelectedData].idMeal,
    username: commentNameInput.value,
    comment: commentContent.value,
  })
    .then(async () => {
      formSubmitButton.textContent = 'Post comment 💬';
      formSubmitButton.disabled = false;
      commentNameInput.value = '';
      commentContent.value = '';
      setTimeout(() => {
        printFetchedComments();
      }, 1000);
    })
    .catch(() => {
      alert('failed to send your request');
    });

  return '_-';
};

document.addEventListener('DOMContentLoaded', async () => {
  const num = await (0,_module_mealCounter_js__WEBPACK_IMPORTED_MODULE_7__.mealcounter)();
  await showMeals();
  (0,_module_mealCounter_js__WEBPACK_IMPORTED_MODULE_7__.showCount)(num);
});

closeBtn.addEventListener('click', () => showMealDetailInformation({}, 'close'));
commentForm.addEventListener('submit', postCommentInfo);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFV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cUVBQXFFO0FBQ3JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi9zcmMvbW9kdWxlL2FwaURhdGEuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi9zcmMvbW9kdWxlL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi9zcmMvbW9kdWxlL2NvbW1lbnRzLmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4vc3JjL21vZHVsZS9nZXRCYXNlRGF0YS5qcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy8uL3NyYy9tb2R1bGUvZ2V0TGlrZS5qcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy8uL3NyYy9tb2R1bGUvbWVhbENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi9zcmMvbW9kdWxlL3NlbmRMaWtlLmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4vc3JjL21vZHVsZS91cGRhdGVMaWtlLmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi9zcmMvc3R5bGUuY3NzPzQzYTciLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TcGljZS1EZWxpZ2h0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vU3BpY2UtRGVsaWdodHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1NwaWNlLURlbGlnaHRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludCBkaXNhYmxlXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/YT1JbmRpYW4nO1xyXG5jb25zdCBpbnZvbHZlbWVudExpa2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaVN0TXpqQ3VQVXNTTko1ZFMxVWMvbGlrZXMvJztcclxuY29uc3QgaW52b2x2ZW1lbnRDb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2lTdE16akN1UFVzU05KNWRTMVVjL2NvbW1lbnRzLyc7XHJcblxyXG5leHBvcnQgeyBiYXNlVXJsLCBpbnZvbHZlbWVudExpa2VVcmwsIGludm9sdmVtZW50Q29tbWVudFVybCB9OyIsImNvbnN0IGNvbW1lbnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbmFtZUxvZ28gPSBwcm9wcy51c2VybmFtZS5zcGxpdCgnJylbMF07XHJcbiAgZWwuaW5uZXJIVE1MID0gYFxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW5hbWVcIj5cclxuICAgICAgIDxoND4ke25hbWVMb2dvfTwvaDQ+XHJcbiAgICAgICA8c3Bhbj4ke3Byb3BzLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwPiR7cHJvcHMuY29tbWVudH08L3A+XHJcbiAgICA8cCBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPkRhdGUgOiR7cHJvcHMuY3JlYXRpb25fZGF0ZX08L3A+XHJcbiAgICBgO1xyXG5cclxuICByZXR1cm4gZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50OyIsImltcG9ydCBDb21tZW50IGZyb20gJy4vY29tbWVudC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pLnRoZW4oYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICByZXNwb25zZSA9IHJlc3VsdDtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jICh1cmwsIGNvbnRlbnQpID0+IHtcclxuICBjb25zdCBuZXdDb21tZW50ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgaXRlbV9pZDogY29udGVudC5pZE1lYWwsXHJcbiAgICB1c2VybmFtZTogY29udGVudC51c2VybmFtZSxcclxuICAgIGNvbW1lbnQ6IGNvbnRlbnQuY29tbWVudCxcclxuICB9KTtcclxuXHJcbiAgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IG5ld0NvbW1lbnQsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJy4uLnRoaXMgcmVxdWVzdCBkb2VzIG5vdCBwcm92aWRlIGEgcmVzcG9uc2UnKTtcclxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaW50Q29tbWVudCA9IChjb21tZW50cykgPT4ge1xyXG4gIGNvbnN0IGdldENvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xyXG4gIGNvbnN0IGNvbW1lbnRzTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGVuZ3RoJyk7XHJcbiAgY29tbWVudHNMZW5ndGgudGV4dENvbnRlbnQgPSBjb21tZW50cy5sZW5ndGg7XHJcblxyXG4gIGdldENvbW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgZ2V0Q29tbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChDb21tZW50KGNvbW1lbnQpKTtcclxuICB9KTtcclxufTsiLCJpbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9hcGlEYXRhLmpzJztcclxuXHJcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVybCk7XHJcbiAgY29uc3QgeyBtZWFscyB9ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhtZWFscyk7XHJcbiAgcmV0dXJuIG1lYWxzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcclxuIiwiaW1wb3J0IHsgaW52b2x2ZW1lbnRMaWtlVXJsIH0gZnJvbSAnLi9hcGlEYXRhLmpzJztcclxuXHJcbmNvbnN0IGZldGNoTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGludm9sdmVtZW50TGlrZVVybCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hMaWtlcztcclxuIiwiaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4vYXBpRGF0YS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbWVhbGNvdW50ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEubWVhbHMubGVuZ3RoO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0NvdW50ID0gKG51bSkgPT4ge1xyXG4gIGNvbnN0IGhvbWVsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWxpJyk7XHJcbiAgaG9tZWxpLnRleHRDb250ZW50ID0gYCgke251bX0pTWVhbHNgO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2hvd0NvdW50IH07IiwiaW1wb3J0IHVwZGF0ZU51bWJlck9mTGlrZXMgZnJvbSAnLi91cGRhdGVMaWtlLmpzJztcclxuaW1wb3J0IHsgaW52b2x2ZW1lbnRMaWtlVXJsIH0gZnJvbSAnLi9hcGlEYXRhLmpzJztcclxuXHJcbi8vIFNlbmQgTGlrZSBUbyBBUElcclxuY29uc3Qgc2VuZExpa2UgPSBhc3luYyAoaWRWYWx1ZSwgZGl2KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGludm9sdmVtZW50TGlrZVVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBpZFZhbHVlLFxyXG4gICAgICAgIGFjdGlvbjogJ2xpa2UnLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3VsdC5vaykge1xyXG4gICAgICB1cGRhdGVOdW1iZXJPZkxpa2VzKGlkVmFsdWUsIGRpdik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIERPTTonLCByZXN1bHQuc3RhdHVzKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVjb3JkaW5nIExpa2U6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbmRMaWtlOyIsImNvbnN0IHVwZGF0ZU51bWJlck9mTGlrZXMgPSAoaWRWYWx1ZSwgZGl2KSA9PiB7XHJcbiAgbGV0IGZvb2RMaWtlcyA9IHBhcnNlSW50KGRpdi50ZXh0Q29udGVudCwgMTApO1xyXG4gIGZvb2RMaWtlcyArPSAxO1xyXG4gIGRpdi50ZXh0Q29udGVudCA9IGAke2Zvb2RMaWtlc30gbGlrZXNgO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTnVtYmVyT2ZMaWtlczsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvU3BpY2VzICYgRmxhdm9ycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICMwNDdhZWQ7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiAjZmZmZjtcXHJcXG4gIC0tYmxhY2stODAwOiByZ2IoMjEsIDIxLCAyMik7XFxyXFxuICAtLWJsYWNrLTUwMDogcmdiYSgwLCAwLCAwLCAwLjY4Mik7XFxyXFxuICAtLWJsYWNrLTIwMDogcmdiYSg0NiwgNDYsIDQ4LCAwLjI0OSk7XFxyXFxuICAtLWJsYWNrLTEwMDogcmdiYSg0NiwgNDYsIDQ4LCAwLjEwMSk7XFxyXFxuICAtLXJlZC01MDA6IHJnYigyMTYsIDUxLCA1MSk7XFxyXFxuICAtLXRleHQtZm9udDogMTdweDtcXHJcXG4gIC0taDEtZm9udDogMjdweDtcXHJcXG4gIC0tbWQtcmFkaXVzOiA1cHg7XFxyXFxuICAtLWxhcmdlLXJhZGl1czogMTBweDtcXHJcXG4gIC0tcHJpbWFyeS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDY1dmg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtYXJnaW46IDcwcHggMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA3cHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtLW9mLWxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tYnRuIHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDM3KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZHJvcC5vcGVuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wb3B1cC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA4MDBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXHJcXG4gIHotaW5kZXg6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tcG9wdXAtY29udGFpbmVyLm9wZW4ge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wb3B1cCB7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogN3B4O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wb3B1cCBpIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWZvbnQpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLTUwMCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwIC5pbWctZGVzYyB7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wb3B1cCAuaW1nLWRlc2MgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1kZXNjLXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudHMtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cy1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCBsaSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLTEwMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IGxpIGg0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwMCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbmFtZSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3QgbGkgcCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250cm9sbGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udHJvbGxlciBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udHJvbGxlciB0ZXh0YXJlYSB7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udHJvbGxlciB0ZXh0YXJlYTpmb2N1cyxcXHJcXG4uaW5wdXQtY29udHJvbGxlciBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDIyMywgMTksIDIyMyk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b246ZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItdG9wOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgdWwgbGkge1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHVsIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseURBQXdEO0VBQ3hELDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFB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QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDQ3YWVkO1xcclxcbiAgLS13aGl0ZS1jb2xvcjogI2ZmZmY7XFxyXFxuICAtLWJsYWNrLTgwMDogcmdiKDIxLCAyMSwgMjIpO1xcclxcbiAgLS1ibGFjay01MDA6IHJnYmEoMCwgMCwgMCwgMC42ODIpO1xcclxcbiAgLS1ibGFjay0yMDA6IHJnYmEoNDYsIDQ2LCA0OCwgMC4yNDkpO1xcclxcbiAgLS1ibGFjay0xMDA6IHJnYmEoNDYsIDQ2LCA0OCwgMC4xMDEpO1xcclxcbiAgLS1yZWQtNTAwOiByZ2IoMjE2LCA1MSwgNTEpO1xcclxcbiAgLS10ZXh0LWZvbnQ6IDE3cHg7XFxyXFxuICAtLWgxLWZvbnQ6IDI3cHg7XFxyXFxuICAtLW1kLXJhZGl1czogNXB4O1xcclxcbiAgLS1sYXJnZS1yYWRpdXM6IDEwcHg7XFxyXFxuICAtLXByaW1hcnktYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9TcGljZXNcXFxcICZcXFxcIEZsYXZvcnMucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1hcmdpbjogNzBweCAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDMwcHg7XFxyXFxuICBnYXA6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDdweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nIHtcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5udW0tb2YtbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1idG4ge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40MzcpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wLm9wZW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDgwMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDMwMG1zO1xcclxcbiAgei1pbmRleDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wb3B1cC1jb250YWluZXIub3BlbiB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwIHtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tcG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tcG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTIwMCk7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwIGkge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXRleHQtZm9udCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tcG9wdXAgLmltZy1kZXNjIHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXBvcHVwIC5pbWctZGVzYyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWRlc2MtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cy1jb250YWluZXIgPiA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGJvcmRlci1yaWdodDogdmFyKC0tcHJpbWFyeS1ib3JkZXIpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRzLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMikge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stMTAwKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3QgbGkgaDQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1uYW1lIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCBsaSBwIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRyb2xsZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250cm9sbGVyIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiB2YXIoLS1wcmltYXJ5LWJvcmRlcik7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhIHtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBib3JkZXI6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250cm9sbGVyIHRleHRhcmVhOmZvY3VzLFxcclxcbi5pbnB1dC1jb250cm9sbGVyIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjIzLCAxOSwgMjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay01MDApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci10b3A6IHZhcigtLXByaW1hcnktYm9yZGVyKTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9TcGljZXNcXFxcICZcXFxcIEZsYXZvcnMucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2stNTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgdWwgbGkge1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHVsIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB1bCA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL1NwaWNlcyAmIEZsYXZvcnMucG5nJztcclxuaW1wb3J0IGZldGNoTGlrZXMgZnJvbSAnLi9tb2R1bGUvZ2V0TGlrZS5qcyc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlL2dldEJhc2VEYXRhLmpzJztcclxuaW1wb3J0IHNlbmRMaWtlIGZyb20gJy4vbW9kdWxlL3NlbmRMaWtlLmpzJztcclxuaW1wb3J0IHsgaW52b2x2ZW1lbnRDb21tZW50VXJsIH0gZnJvbSAnLi9tb2R1bGUvYXBpRGF0YS5qcyc7XHJcbmltcG9ydCB7IHBvc3RDb21tZW50LCBwcmludENvbW1lbnQsIGZldGNoQ29tbWVudHMgfSBmcm9tICcuL21vZHVsZS9jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IG1lYWxjb3VudGVyLCBzaG93Q291bnQgfSBmcm9tICcuL21vZHVsZS9tZWFsQ291bnRlci5qcyc7XHJcblxyXG5sZXQgYXJyYXlPZk1lYWxzID0gW107XHJcbmxldCBhcnJheU9mQ29tbWVudHMgPSBbXTtcclxubGV0IHNlbGVjdGVkSWQgPSAnJztcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuY29uc3QgaW5mb1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tcG9wdXAtY29udGFpbmVyJyk7XHJcbmNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xyXG5jb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWZvcm0nKTtcclxuY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXN1Ym1pdC1idXR0b24nKTtcclxuY29uc3QgY29tbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKTtcclxuY29uc3QgY29tbWVudExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxlbmd0aCcpO1xyXG5cclxuLy8gY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChiYXNlVXJsKTtcclxuLy8gICBjb25zdCB7IG1lYWxzIH0gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4vLyAgIHJldHVybiBtZWFscztcclxuLy8gfTtcclxuXHJcbi8vIGdldERhdGEoKTtcclxuXHJcbmNvbnN0IHByaW50RmV0Y2hlZENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGFycmF5T2ZDb21tZW50cyA9IFtdO1xyXG4gIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBjb21tZW50TGVuZ3RoLnRleHRDb250ZW50ID0gMDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaENvbW1lbnRzKGludm9sdmVtZW50Q29tbWVudFVybCwgc2VsZWN0ZWRJZCk7XHJcbiAgICBhcnJheU9mQ29tbWVudHMgPSBbLi4ucmVxdWVzdF07XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mQ29tbWVudHMpO1xyXG4gICAgcHJpbnRDb21tZW50KGFycmF5T2ZDb21tZW50cyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dNZWFsRGV0YWlsSW5mb3JtYXRpb24gPSBhc3luYyAoaXRlbSwgdmlldykgPT4ge1xyXG4gIGNvbnN0IGltYWdlRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctZGVzYyBpbWcnKTtcclxuICBjb25zdCBpbmZvTWVhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGVzYy10aXRsZScpO1xyXG4gIGNvbnN0IGFyZWFJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VwLWFyZWEtaW5mbycpO1xyXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VwLWluZ3JlZGllbnQtaW5mbycpO1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY2F0ZWdvcnknKTtcclxuICBjb25zdCBtZXN1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1tZXN1cmUnKTtcclxuXHJcbiAgc3dpdGNoICh2aWV3KSB7XHJcbiAgICBjYXNlICdzaG93Jzoge1xyXG4gICAgICBzZWxlY3RlZElkID0gaXRlbS5pZE1lYWw7XHJcbiAgICAgIHByaW50RmV0Y2hlZENvbW1lbnRzKCk7XHJcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aXRlbS5pZE1lYWx9YDtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgY29uc3QgeyBtZWFscyB9ID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxuICAgICAgaW1hZ2VEZXNrLnNyYyA9IGl0ZW0uc3RyTWVhbFRodW1iO1xyXG4gICAgICBpbmZvTWVhbFRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5zdHJNZWFsO1xyXG4gICAgICBhcmVhSW5mby50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckFyZWE7XHJcblxyXG4gICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckluZ3JlZGllbnQxO1xyXG4gICAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IG1lYWxzWzBdLnN0ckNhdGVnb3J5O1xyXG4gICAgICBtZXN1cmUudGV4dENvbnRlbnQgPSBtZWFsc1swXS5zdHJNZWFzdXJlMjtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnY2xvc2UnOiB7XHJcbiAgICAgIGltYWdlRGVzay5zcmMgPSAnJztcclxuICAgICAgaW5mb01lYWxUaXRsZS50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xyXG4gICAgICBhcmVhSW5mby50ZXh0Q29udGVudCA9ICcuLmxvYWRpbmcnO1xyXG5cclxuICAgICAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSAnLi5sb2FkaW5nJztcclxuICAgICAgbWVzdXJlLnRleHRDb250ZW50ID0gJy4ubG9hZGluZyc7XHJcbiAgICAgIGluZm9Qb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dNZWFsRGV0YWlsID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICBpbmZvUG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICBhd2FpdCBzaG93TWVhbERldGFpbEluZm9ybWF0aW9uKGl0ZW0sICdzaG93Jyk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93TWVhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGFycmF5T2ZNZWFscyA9IGF3YWl0IGdldERhdGEoKTtcclxuICAgIGNvbnN0IGRhdGFMaWtlcyA9IGF3YWl0IGZldGNoTGlrZXMoKTtcclxuICAgIGFycmF5T2ZNZWFscy5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaXRlbScpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHRoZSBpbWFnZSBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcuc3JjID0gaXRlbS5zdHJNZWFsVGh1bWI7XHJcbiAgICAgIGltZy5hbHQgPSAnJztcclxuICAgICAgaW1nLmNsYXNzTmFtZSA9ICdtZWFsLWltZyc7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbGlrZSBhbmQgY29tbWVudFxyXG4gICAgICBjb25zdCBsaWtlQ29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBsaWtlQ29tbWVudERpdi5jbGFzc05hbWUgPSAnbGlrZS1jb21tZW50JztcclxuXHJcbiAgICAgIC8vIENyZWF0ZSB0aGUgcGFyYWdyYXBoIGVsZW1lbnQgZm9yIGVhY2ggaXRlbSBuYW1lXHJcbiAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnaXRlbS1uYW1lJztcclxuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLnN0ck1lYWw7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgdGhlIGhlYXJ0IGljb24gZWxlbWVudFxyXG4gICAgICBjb25zdCBoZWFydEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGhlYXJ0SWNvbi5jbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1oZWFydCc7XHJcbiAgICAgIGhlYXJ0SWNvbi5zdHlsZS5jb2xvciA9ICcjZmYwMDAwJztcclxuXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgaXRlbSBuYW1lIGFuZCBoZWFydCBpY29uIHRvIHRoZSBsaWtlIGFuZCBjb21tZW50IGRpdlxyXG4gICAgICBsaWtlQ29tbWVudERpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgIGxpa2VDb21tZW50RGl2LmFwcGVuZENoaWxkKGhlYXJ0SWNvbik7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgdGhlIGRpdiBmb3IgbnVtYmVyIG9mIGxpa2VzXHJcbiAgICAgIGNvbnN0IG51bU9mTGlrZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbnVtT2ZMaWtlc0Rpdi5jbGFzc05hbWUgPSAnbnVtLW9mLWxpa2VzJztcclxuXHJcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGl2IGZvciBidXR0b24gY29udGFpbmVyXHJcbiAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBidG5Db250YWluZXJEaXYuY2xhc3NOYW1lID0gJ2J0bi1jb250YWluZXInO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHRoZSBjb21tZW50IGJ1dHRvblxyXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnQtYnRuJztcclxuICAgICAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcclxuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dNZWFsRGV0YWlsKGl0ZW0pKTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSB0aGUgcmVzZXJ2YXRpb24gYnV0dG9uXHJcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIHJlc2VydmF0aW9uQnRuLmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbi1idG4nO1xyXG4gICAgICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbic7XHJcblxyXG4gICAgICAvLyBBcHBlbmQgdGhlIGJ1dHRvbnMgdG8gdGhlIGJ1dHRvbiBjb250YWluZXIgZGl2XHJcbiAgICAgIGJ0bkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcclxuICAgICAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnRuKTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBhbGwgdGhlIGNyZWF0ZWQgZWxlbWVudHMgdG8gdGhlIG1haW4gZGl2XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQobGlrZUNvbW1lbnREaXYpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQobnVtT2ZMaWtlc0Rpdik7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXJEaXYpO1xyXG5cclxuICAgICAgY29uc3QgY291bnRPZkxpa2VzID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5udW0tb2YtbGlrZXMnKTtcclxuICAgICAgLy8gY29uc3QgbXlMaWtlcyA9IGRhdGFMaWtlcy5maW5kKGxpa2UgPT4gbGlrZS5pdGVtX2lkID09PSBpZCk/Lmxpa2VzPz8wO1xyXG4gICAgICBsZXQgbGlrZU9mTWVhbCA9IDA7XHJcbiAgICAgIGRhdGFMaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gaWQpIHtcclxuICAgICAgICAgIGxpa2VPZk1lYWwgPSBsaWtlLmxpa2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb3VudE9mTGlrZXMudGV4dENvbnRlbnQgPSBgJHtsaWtlT2ZNZWFsfSBsaWtlc2A7XHJcblxyXG4gICAgICAvLyBIZWFydCBJY29uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIGNvbnN0IGhlYXJ0QnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5mYS1oZWFydCcpO1xyXG4gICAgICBoZWFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZW5kTGlrZShpZCwgbnVtT2ZMaWtlc0Rpdik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBoZWFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xyXG4gICAgICAgIGhlYXJ0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1yZWd1bGFyJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZSBtYWluIGRpdiBpbiB5b3VyIERPTVxyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRVJST1InLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYWRkIGNvbW1lbnRcclxuY29uc3QgcG9zdENvbW1lbnRJbmZvID0gYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgY29tbWVudE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXVzZXJfbmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY29udGVudCcpO1xyXG5cclxuICBpZiAoXHJcbiAgICBjb21tZW50TmFtZUlucHV0LnZhbHVlLnRyaW0oKS5zcGxpdCgnJykubGVuZ3RoIDwgMVxyXG4gICAgfHwgY29tbWVudENvbnRlbnQudmFsdWUudHJpbSgpLnNwbGl0KCcnKS5sZW5ndGggPCAxXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoJ2dldCBzZXJpb3VzJyk7XHJcbiAgfVxyXG5cclxuICAvLyBwb3N0IGNvbW1lbnQgdG8gc2VydmVyXHJcbiAgY29uc3QgZmluZEluZGV4T2ZTZWxlY3RlZERhdGEgPSBhcnJheU9mTWVhbHMuZmluZEluZGV4KFxyXG4gICAgKGUpID0+IGUuaWRNZWFsID09PSBzZWxlY3RlZElkLFxyXG4gICk7XHJcblxyXG4gIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnLi4ubG9hZGluZyc7XHJcbiAgZm9ybVN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgYXdhaXQgcG9zdENvbW1lbnQoYCR7aW52b2x2ZW1lbnRDb21tZW50VXJsfWAsIHtcclxuICAgIGlkTWVhbDogYXJyYXlPZk1lYWxzW2ZpbmRJbmRleE9mU2VsZWN0ZWREYXRhXS5pZE1lYWwsXHJcbiAgICB1c2VybmFtZTogY29tbWVudE5hbWVJbnB1dC52YWx1ZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnRDb250ZW50LnZhbHVlLFxyXG4gIH0pXHJcbiAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnUG9zdCBjb21tZW50IPCfkqwnO1xyXG4gICAgICBmb3JtU3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGNvbW1lbnROYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgY29tbWVudENvbnRlbnQudmFsdWUgPSAnJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJpbnRGZXRjaGVkQ29tbWVudHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgYWxlcnQoJ2ZhaWxlZCB0byBzZW5kIHlvdXIgcmVxdWVzdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAnXy0nO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCBudW0gPSBhd2FpdCBtZWFsY291bnRlcigpO1xyXG4gIGF3YWl0IHNob3dNZWFscygpO1xyXG4gIHNob3dDb3VudChudW0pO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd01lYWxEZXRhaWxJbmZvcm1hdGlvbih7fSwgJ2Nsb3NlJykpO1xyXG5jb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwb3N0Q29tbWVudEluZm8pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=