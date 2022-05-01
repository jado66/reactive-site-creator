"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireWildcard(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

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

function Header(props) {
  var contentEditable = /*#__PURE__*/_react.default.createRef();

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings;

  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      header: props.pageName,
      styles: {}
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

  var handleContentChange = function handleContentChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, value));
    });
  };

  var handleStyleChange = function handleStyleChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        styles: _objectSpread(_objectSpread({}, prevState.style), {}, _defineProperty({}, key, value))
      });
    });
  };

  var componentStyle = {};

  try {
    componentStyle = _objectSpread({
      size: webStyle.componentStyles.header.size,
      textColor: webStyle.componentStyles.header.textColor
    }, content.styles);
  } catch (error) {}

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMargin.default, {
    componentName: "header",
    webStyle: webStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _objectSpread({}, props.style),
      className: " flex-grow-1 text-center  relative-div ",
      "data-no-dnd": "true",
      onMouseEnter: function onMouseEnter() {
        showButtons(true);
      },
      onMouseLeave: function onMouseLeave() {
        showButtons(false);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
        className: "apply-font-primary mb-0",
        style: {
          color: webStyle.colors[componentStyle.textColor]
        },
        spellCheck: "false",
        innerRef: contentEditable,
        html: content.header // innerHTML of the editable div
        ,
        disabled: !adminSettings.isEditMode // use true to disable editing
        ,
        onChange: function onChange(evt) {
          return handleContentChange("header", evt.target.value);
        } // handle innerHTML change
        ,
        tagName: componentStyle.size // Use a custom HTML tag (uses a div by default)

      }), isSettingsMode && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          class: "input-group mt-3 mb-1 w-75 mx-auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            class: "input-group-text",
            for: "inputGroupSelect01",
            children: "Header Size"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
            onChange: function onChange(evt) {
              return handleStyleChange("size", evt.target.value);
            },
            value: componentStyle.size,
            className: "form-select",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "h1",
              children: "X-Large (h1)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "h2",
              children: "Large (h2)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "h3",
              children: "Medium (h3)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "h4",
              children: "Small (h4)"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          class: "input-group mb-3 w-75 mx-auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            class: "input-group-text",
            for: "inputGroupSelect01",
            children: "Text Color"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
            value: componentStyle.color,
            onChange: function onChange(evt) {
              handleStyleChange("textColor", evt.target.value);
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "lightShade",
              children: "Light Shade"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "lightAccent",
              children: "Light Accent"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "mainBrandColor",
              children: "Main Brand Color"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "darkAccent",
              children: "Dark Accent"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "darkShade",
              children: "Dark Shade"
            })]
          })]
        })]
      }), isShowButtons && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "relative-r btn",
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
      })]
    })
  });
}

;