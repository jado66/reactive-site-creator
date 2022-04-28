"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spacer;

var _react = require("react");

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Spacer(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowBar = _useState2[0],
      showBar = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButtons = _useState4[0],
      setShowButtons = _useState4[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      componentOptions = _useContext.componentOptions;

  var insertComponent = function insertComponent(option) {
    props.insertComponent(option, props.index);
    showBar(false);
  };

  var options = [];
  Object.keys(componentOptions).forEach(function (option) {
    var componentName = componentOptions[option].componentName || option;
    options.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "btn btn-outline-dark border-0 my-1 col me-1",
      onClick: function onClick(evt) {
        insertComponent(componentName);
      },
      children: componentName
    }, option));
  });
  var optionButtons = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      whiteSpace: "nowrap"
    },
    className: "py-0 g-0 overflow-auto no-scroll",
    children: options
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "g-0 row align-content-center ",
    style: {
      height: isShowButtons ? "2.5em" : ".5em"
    },
    onMouseEnter: function onMouseEnter() {
      return showBar(true);
    },
    onMouseLeave: function onMouseLeave() {
      showBar(false);
    },
    onClick: function onClick() {
      if (props.onClick) {
        props.onClick();
      }

      setShowButtons(!isShowButtons);
    },
    children: isShowButtons ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "m-0 px-5 mx-auto ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row px-3 mx-auto rounded rounded-pill border border-dark",
          style: {
            backgroundColor: "white",
            zIndex: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: "flex",
              flexDirection: "row"
            },
            children: optionButtons
          })
        })
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "px-5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "m-0 p-0 w-100 mx-auto bg-primary border border-dark",
        style: {
          height: "4px",
          display: isShowBar ? "" : "none"
        }
      })
    })
  });
}