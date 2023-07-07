"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("./style.css");
require("./assets/Spices & Flavors.png");
var _getLike = _interopRequireDefault(require("./module/getLike.js"));
var _getBaseData = _interopRequireDefault(require("./module/getBaseData.js"));
var _sendLike = _interopRequireDefault(require("./module/sendLike.js"));
var _apiData = require("./module/apiData.js");
var _comments = require("./module/comments.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var arrayOfMeals = [];
var arrayOfComments = [];
var selectedId = '';
var mainContainer = document.querySelector('.main-container');
var infoPopup = document.querySelector('.info-popup-container');
var backdrop = document.querySelector('.backdrop');
var closeBtn = document.querySelector('.close-btn');
var commentForm = document.querySelector('.comment-form');
var formSubmitButton = document.querySelector('.comment-submit-button');
var commentsList = document.querySelector('.comments-list');
var commentLength = document.querySelector('.comment-length');

// const getData = async () => {
//   const result = await fetch(baseUrl);
//   const { meals } = await result.json();
//   return meals;
// };

// getData();

var printFetchedComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var request;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          arrayOfComments = [];
          commentsList.innerHTML = '';
          commentLength.textContent = 0;
          _context.prev = 3;
          _context.next = 6;
          return (0, _comments.fetchComments)(_apiData.involvementCommentUrl, selectedId);
        case 6:
          request = _context.sent;
          arrayOfComments = _toConsumableArray(request);
          console.log(arrayOfComments);
          (0, _comments.printComment)(arrayOfComments);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0.message, 'error');
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 12]]);
  }));
  return function printFetchedComments() {
    return _ref.apply(this, arguments);
  };
}();
var showMealDetailInformation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item, view) {
    var imageDesk, infoMealTitle, areaInfo, ingredients, category, mesure, url, fetchData, _yield$fetchData$json, meals;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          imageDesk = document.querySelector('.img-desc img');
          infoMealTitle = document.querySelector('.product-desc-title');
          areaInfo = document.querySelector('.recep-area-info');
          ingredients = document.querySelector('.recep-ingredient-info');
          category = document.querySelector('.info-category');
          mesure = document.querySelector('.info-mesure');
          _context2.t0 = view;
          _context2.next = _context2.t0 === 'show' ? 9 : _context2.t0 === 'close' ? 26 : 35;
          break;
        case 9:
          selectedId = item.idMeal;
          printFetchedComments();
          url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(item.idMeal);
          _context2.next = 14;
          return fetch(url);
        case 14:
          fetchData = _context2.sent;
          _context2.next = 17;
          return fetchData.json();
        case 17:
          _yield$fetchData$json = _context2.sent;
          meals = _yield$fetchData$json.meals;
          imageDesk.src = item.strMealThumb;
          infoMealTitle.textContent = item.strMeal;
          areaInfo.textContent = meals[0].strArea;
          ingredients.textContent = meals[0].strIngredient1;
          category.textContent = meals[0].strCategory;
          mesure.textContent = meals[0].strMeasure2;
          return _context2.abrupt("break", 36);
        case 26:
          imageDesk.src = '';
          infoMealTitle.textContent = '..loading';
          areaInfo.textContent = '..loading';
          ingredients.textContent = '';
          category.textContent = '..loading';
          mesure.textContent = '..loading';
          infoPopup.classList.remove('open');
          backdrop.classList.remove('open');
          return _context2.abrupt("break", 36);
        case 35:
          return _context2.abrupt("break", 36);
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function showMealDetailInformation(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var showMealDetail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(item) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          infoPopup.classList.add('open');
          backdrop.classList.add('open');
          _context3.next = 4;
          return showMealDetailInformation(item, 'show');
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function showMealDetail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var showMeals = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var dataLikes;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _getBaseData["default"])();
        case 3:
          arrayOfMeals = _context4.sent;
          _context4.next = 6;
          return (0, _getLike["default"])();
        case 6:
          dataLikes = _context4.sent;
          arrayOfMeals.forEach(function (item, id) {
            var div = document.createElement('div');
            div.classList.add('gallery-item');
            div.setAttribute('data-id', id);

            // Create the image element
            var img = document.createElement('img');
            img.src = item.strMealThumb;
            img.alt = '';
            img.className = 'meal-img';

            // Create the div for like and comment
            var likeCommentDiv = document.createElement('div');
            likeCommentDiv.className = 'like-comment';

            // Create the paragraph element for each item name
            var itemName = document.createElement('p');
            itemName.className = 'item-name';
            itemName.textContent = item.strMeal;

            // Create the heart icon element
            var heartIcon = document.createElement('i');
            heartIcon.className = 'fa-regular fa-heart';
            heartIcon.style.color = '#ff0000';

            // Append the item name and heart icon to the like and comment div
            likeCommentDiv.appendChild(itemName);
            likeCommentDiv.appendChild(heartIcon);

            // Create the div for number of likes
            var numOfLikesDiv = document.createElement('div');
            numOfLikesDiv.className = 'num-of-likes';

            // Create the div for button container
            var btnContainerDiv = document.createElement('div');
            btnContainerDiv.className = 'btn-container';

            // Create the comment button
            var commentBtn = document.createElement('button');
            commentBtn.className = 'comment-btn';
            commentBtn.textContent = 'Comment';
            commentBtn.addEventListener('click', function () {
              return showMealDetail(item);
            });

            // Create the reservation button
            var reservationBtn = document.createElement('button');
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
            var countOfLikes = div.querySelector('.num-of-likes');
            // const myLikes = dataLikes.find(like => like.item_id === id)?.likes??0;
            var likeOfMeal = 0;
            dataLikes.forEach(function (like) {
              if (like.item_id === id) {
                likeOfMeal = like.likes;
              }
            });
            countOfLikes.textContent = "".concat(likeOfMeal, " likes");

            // Heart Icon event listener
            var heartBtn = div.querySelector('.fa-heart');
            heartBtn.addEventListener('click', function () {
              (0, _sendLike["default"])(id, numOfLikesDiv);
            });
            heartBtn.addEventListener('mouseup', function () {
              heartIcon.classList.add('fa-solid');
              heartIcon.classList.remove('fa-regular');
            });

            // Now you can use the main div in your DOM
            mainContainer.appendChild(div);
          });
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('ERROR', _context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function showMeals() {
    return _ref4.apply(this, arguments);
  };
}();

// add comment
var postCommentInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
    var commentNameInput, commentContent, findIndexOfSelectedData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          e.preventDefault();
          commentNameInput = document.querySelector('.comment-user_name');
          commentContent = document.querySelector('.comment-content');
          if (!(commentNameInput.value.trim().split('').length < 1 || commentContent.value.trim().split('').length < 1)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", alert('get serious'));
        case 5:
          // post comment to server
          findIndexOfSelectedData = arrayOfMeals.findIndex(function (e) {
            return e.idMeal === selectedId;
          });
          formSubmitButton.textContent = '...loading';
          formSubmitButton.disabled = true;
          _context6.next = 10;
          return (0, _comments.postComment)("".concat(_apiData.involvementCommentUrl), {
            idMeal: arrayOfMeals[findIndexOfSelectedData].idMeal,
            username: commentNameInput.value,
            comment: commentContent.value
          }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  formSubmitButton.textContent = 'Post comment 💬';
                  formSubmitButton.disabled = false;
                  commentNameInput.value = '';
                  commentContent.value = '';
                  setTimeout(function () {
                    printFetchedComments();
                  }, 1000);
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })))["catch"](function () {
            alert('failed to send your request');
          });
        case 10:
          return _context6.abrupt("return", '_-');
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function postCommentInfo(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.next = 2;
        return showMeals();
      case 2:
      case "end":
        return _context7.stop();
    }
  }, _callee7);
})));
closeBtn.addEventListener('click', function () {
  return showMealDetailInformation({}, 'close');
});
commentForm.addEventListener('submit', postCommentInfo);