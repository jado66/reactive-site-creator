"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextEditor;

var _react = require("react");

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _QuillComponent = _interopRequireDefault(require("../subComponents/QuillComponent"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _ComponentMargin = _interopRequireDefault(require("../subComponents/ComponentMargin"));

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

function TextEditor(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      html: "",
      isBacked: false
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditMode = _useState2[0],
      setIsEditMode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButtons = _useState4[0],
      showButtons = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSettingsMode = _useState6[0],
      setIsSettingsMode = _useState6[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings;

  var handleCheckbox = function handleCheckbox(key) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, !prevState[key]));
    });
  };

  var handleContentChange = function handleContentChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, value));
    });
  };

  var backgroundColor = content.isBacked ? webStyle.colors[webStyle.componentStyles.textEditor.backgroundColor] : "";
  var textColor = webStyle.colors[webStyle.componentStyles.textEditor.textColor];
  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.textEditor.textColor,
      backgroundColor: webStyle.componentStyles.textEditor.backgroundColor
    };
  } catch (error) {}

  var borderShape = webStyle.componentStyles.all.borderShape;
  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMargin.default, {
    componentName: "textEditor",
    webStyle: webStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _objectSpread({}, props.style),
      className: "flex-grow-1 text-center relative-div ",
      "data-no-dnd": "true",
      onMouseEnter: function onMouseEnter() {
        showButtons(true);
      },
      onMouseLeave: function onMouseLeave() {
        showButtons(false);
      },
      children: [!isSettingsMode ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          backgroundColor: backgroundColor,
          boxShadow: content.isBacked ? borderAndShadow : ""
        },
        className: "px-5 " + borderShape + (content.isBacked ? "  py-5" : ""),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillComponent.default, {
          adminSettings: adminSettings,
          webStyle: webStyle,
          className: "paragraph text-start",
          html: content.html,
          isEditMode: isEditMode,
          setHtml: function setHtml(value) {
            handleContentChange("html", value);
          },
          saveEdits: function saveEdits() {
            setIsEditMode(!isEditMode);
          },
          style: {
            color: textColor || webStyle.colors.darkShade
          }
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            backgroundColor: backgroundColor,
            boxShadow: content.isBacked ? borderAndShadow : ""
          },
          className: "px-5 " + borderShape + (content.isBacked ? " pt-3 pb-5" : ""),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
            className: "col",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: "Text Editor Settings"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "form-check d-flex align-items-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: content.isBacked,
                onClick: function onClick() {
                  handleCheckbox("isBacked");
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                class: "form-check-label ms-3",
                for: "flexCheckDefault",
                children: "Background?"
              })]
            })]
          })
        })
      }), isShowButtons && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative d-flex  ",
          children: [!isSettingsMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: " btn p-0",
            style: {
              marginRight: "1.5em"
            },
            "data-no-dnd": "true",
            onClick: function onClick() {
              setIsEditMode(!isEditMode);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPencilAlt,
              style: {
                color: textColor
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "btn " + (isEditMode ? "" : "p-0"),
            style: {
              marginRight: "2.5em"
            },
            "data-no-dnd": "true",
            onClick: function onClick() {
              setIsSettingsMode(!isSettingsMode);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faCog,
              style: {
                color: textColor
              }
            })
          })]
        })
      })]
    })
  });
}

;