"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentMargin;

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ComponentMargin(props) {
  var backgroundColor = '';
  var verticalSpacing = '';
  var container = '';

  try {
    var colorName = props.webStyle.componentStyles[props.componentName].marginColor;
    backgroundColor = props.webStyle.componentStyles.all.includeMargins ? "" : props.webStyle.colors[colorName];
    verticalSpacing = props.componentName != "styledLink" ? " py-4" : " py-1";
    container = props.webStyle.componentStyles.all.includeComponentMargins ? " container" : "";
  } catch (error) {// alert(JSON.stringify(props.componentName))
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      backgroundColor: backgroundColor
    }),
    className: " g-0 ",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: " flex-row d-flex px-5" + verticalSpacing + container,
      children: props.children
    })
  });
}