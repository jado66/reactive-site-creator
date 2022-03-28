"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SizeSelect;

var _reactSelect = _interopRequireDefault(require("react-select"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SizeSelect(props) {
  var options = [{
    label: "Largest (d1)",
    value: "display-1",
    size: "5rem"
  }, {
    label: "Larger (d2)",
    value: "display-2",
    size: "4.5rem"
  }, {
    label: "Large (d3)",
    value: "display-3",
    size: "4rem"
  }, {
    label: "Medium Large (d4)",
    value: "display-4",
    size: "3.5rem"
  }, {
    label: "Medium (d5)",
    value: "display-5",
    size: "3rem"
  }, {
    label: "Medium Small (d6)",
    value: "display-5",
    size: "2.5rem"
  }, {
    label: "Small (d7)",
    value: "display-6",
    size: "2.0rem"
  }, {
    label: "Smaller (d8)",
    value: "display-7",
    size: "1.5rem"
  }, {
    label: "Smallest (d9)",
    value: "display-8",
    size: "1rem"
  }];
  var styles = {
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        fontWeight: state.isSelected ? "bold" : "normal",
        color: "black",
        backgroundColor: state.data.color,
        fontSize: state.data.size
      });
    },
    singleValue: function singleValue(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        fontSize: "1.5rem"
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      minWidth: "250px",
      textAlign: "left"
    },
    className: "flex-grow-1",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect.default, {
      myFontSize: "20px",
      options: options,
      styles: styles
    })
  });
}