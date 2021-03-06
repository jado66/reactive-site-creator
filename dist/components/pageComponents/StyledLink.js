"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QuickLink;

var _react = _interopRequireWildcard(require("react"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _EditableLink = _interopRequireDefault(require("../subComponents/EditableLink"));

var _ComponentMargin = _interopRequireDefault(require("../subComponents/ComponentMargin"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function QuickLink(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      linkText: "New Link",
      href: "/"
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

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSettingsMode = _useState4[0],
      setIsSettingsMode = _useState4[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings;

  var handleContentChange = function handleContentChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, value));
    });
  };

  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.styledLink.textColor,
      backgroundColor: webStyle.componentStyles.styledLink.backgroundColor
    };
  } catch (error) {}

  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var borderShape = webStyle.componentStyles.styledLink.borderShape || webStyle.componentStyles.all.borderShape;
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMargin.default, {
    componentName: "styledLink",
    webStyle: webStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex-grow-1 text-center ",
      "data-no-dnd": "true",
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginTop: ".4em",
        marginBottom: ".4em"
      }),
      onMouseEnter: function onMouseEnter() {
        showButtons(true);
      },
      onMouseLeave: function onMouseLeave() {
        showButtons(false);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "relative-div ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableLink.default, {
          webStyle: webStyle,
          linkText: content.linkText,
          href: content.href,
          adminSettings: adminSettings,
          localDisplaySettings: localDisplaySettings,
          setLinkText: function setLinkText(value) {
            return handleContentChange("linkText", value);
          },
          setHref: function setHref(value) {
            return handleContentChange("href", value);
          },
          divStyle: {
            backgroundColor: webStyle.colors[componentStyles.backgroundColor],
            boxShadow: borderAndShadow
          },
          divClass: "py-3 mx-auto justify-content-center " + borderShape,
          linkStyle: {
            color: webStyle.colors[componentStyles.textColor],
            textDecoration: "none"
          },
          linkClass: "h5 m-0"
        }), (isShowButtons || isSettingsMode) && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative-r btn d-flex col pt-3",
          style: {
            top: 0
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "d-flex bg-transparent border-0",
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
                color: webStyle.colors.darkShade
              }
            })
          })
        })]
      }), isSettingsMode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "input-group my-3 w-75 mx-auto",
          children: "Styles Go Here"
        })
      })]
    })
  });
}

;