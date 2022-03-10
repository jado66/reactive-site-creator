"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestComponent = function TestComponent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "btn btn--".concat(props.kind, " CTA"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: props.label
    })
  });
};

var _default = TestComponent;
exports.default = _default;