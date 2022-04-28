"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MediaFrame;

var _react = require("react");

var _PictureFrame = _interopRequireDefault(require("../subComponents/PictureFrame"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

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

function MediaFrame(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      mediaContent: {},
      caption: null
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowButtons = _useState2[0],
      showButtons = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      localDisplaySettings = _useContext.localDisplaySettings,
      images = _useContext.images,
      adminSettings = _useContext.adminSettings;

  var setMediaContent = function setMediaContent(mediaContent) {
    setContent(function (prevState) {
      var newState = _objectSpread({}, prevState);

      newState.mediaContent = mediaContent;
      return newState;
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _objectSpread({}, props.style),
    className: "px-5 text-center relative-div ",
    "data-no-dnd": "true",
    onMouseEnter: function onMouseEnter() {
      showButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      showButtons(false);
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
      webStyle: webStyle,
      adminSettings: adminSettings,
      imageContent: content.mediaContent,
      setImageContent: function setImageContent(value) {
        setMediaContent(value);
      },
      id: "".concat(props.id, "-Media"),
      includeVideos: true,
      isNested: true
    }, "".concat(props.id, "-Media")), content.caption !== null && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mt-4 px-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Here is a caption"
      })
    })]
  });
}