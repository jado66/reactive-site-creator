"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OptionSelect;

var _reactSelect = _interopRequireDefault(require("react-select"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function OptionSelect(props) {
  var _useState = (0, _react.useState)(getInitalValue(props.value, props.options)),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setValue(getInitalValue(props.value, props.options));
  }, [props.value]);

  var onChange = function onChange(selectedOption) {
    props.onChange({
      selectedOption: selectedOption
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      minWidth: "250px",
      textAlign: "left"
    },
    className: "flex-grow-1",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect.default, _objectSpread(_objectSpread({}, props), {}, {
      value: value,
      onChange: onChange,
      options: props.options,
      className: "flex-grow-1",
      menuPlacement: "auto"
    }))
  });
}

function getInitalValue(value, options) {
  var initialValue = options[options.findIndex(function (option) {
    return option.value === value;
  })];
  if (initialValue) return initialValue; // Maybe it is nested

  for (var i = 0; i < options.length; i++) {
    if ('options' in options[i]) {
      initialValue = options[i].options[options[i].options.findIndex(function (option) {
        return option.value === value;
      })];

      if (initialValue) {
        return initialValue;
      }
    }
  }

  ; // if nothing is found return first value

  if (!Array.isArray(options[0])) {
    return options[0];
  } else {
    return options[0][0];
  }
}