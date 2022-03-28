"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusableItemTT = FocusableItemTT;
exports.MenuItemTT = MenuItemTT;

var _reactMenu = require("@szhsin/react-menu");

var _react = require("react");

var _reactPowerTooltip = _interopRequireDefault(require("react-power-tooltip"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _StylesEditor = require("../StylesEditor");

var _Website = require("../Website");

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

(0, _reactMenu.applyStatics)(_reactMenu.FocusableItem)(FocusableItemTT);
(0, _reactMenu.applyStatics)(_reactMenu.MenuItem)(MenuItemTT);

function MenuItemTT(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.MenuItem, _objectSpread(_objectSpread({}, props), {}, {
    className: props.className,
    style: {
      position: "relative"
    },
    onMouseOver: function onMouseOver() {
      return setShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    },
    onClick: props.onClick,
    children: [props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuTooltip, {
      show: show,
      text: props.ttText
    })]
  }));
}

function FocusableItemTT(props) {
  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, _objectSpread(_objectSpread({}, props), {}, {
    className: props.className,
    style: {
      position: "relative"
    },
    onMouseOver: function onMouseOver() {
      return setShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    },
    onClick: props.onClick,
    children: [props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuTooltip, {
      show: show,
      text: props.ttText
    })]
  }));
}

function MenuTooltip(props) {
  var _useContext = (0, _react.useContext)(_StylesEditor.UserPreferencesContext),
      userEditorPreferences = _useContext.userEditorPreferences,
      setShowTooltips = _useContext.setShowTooltips;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactPowerTooltip.default, {
    show: props.show && userEditorPreferences.showTooltips,
    arrowAlign: "start",
    textBoxWidth: "300px",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative-div",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "fw-normal pe-3",
        children: props.text
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "relative",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn btn-hover",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faXmark,
            onClick: function onClick() {
              if (window.confirm("Tooltips will now be hidden. You can reverse this in editor settings in the admin menu.")) {
                setShowTooltips(false);
              }
            }
          })
        })
      })]
    })
  });
}