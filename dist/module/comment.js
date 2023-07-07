"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var comment = function comment(props) {
  var el = document.createElement('li');
  var nameLogo = props.username.split('')[0];
  el.innerHTML = "\n\n    <div class=\"comment-name\">\n       <h4>".concat(nameLogo, "</h4>\n       <span>").concat(props.username, "</span>\n    </div>\n\n    <p>").concat(props.comment, "</p>\n    <p class=\"comment-date\">Date :").concat(props.creation_date, "</p>\n    ");
  return el;
};
var _default = comment;
exports["default"] = _default;