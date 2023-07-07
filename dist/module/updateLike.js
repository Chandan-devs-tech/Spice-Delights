"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var updateNumberOfLikes = function updateNumberOfLikes(idValue, div) {
  var foodLikes = parseInt(div.textContent, 10);
  foodLikes += 1;
  div.textContent = "".concat(foodLikes, " likes");
};
var _default = updateNumberOfLikes;
exports["default"] = _default;