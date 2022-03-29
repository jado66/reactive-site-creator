"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QuillComponent;
exports.modules = exports.formats = void 0;

var _reactQuill = _interopRequireDefault(require("react-quill"));

require("../helpers/quill.css");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _QuillToolbar = _interopRequireDefault(require("./QuillToolbar"));

var _QuillToolbarMini = _interopRequireDefault(require("./QuillToolbarMini"));

var _reactRouterDom = require("react-router-dom");

var _reactJsxParser = _interopRequireDefault(require("react-jsx-parser"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { WebContext } from "../App";
// Modules object for setting up the Quill editor
var modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      save: function save() {
        alert("hello");
      }
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
}; // Formats objects for setting up the Quill editor

exports.modules = modules;
var formats = ["header", "font", "size", "bold", "italic", "underline", "align", "strike", "script", "blockquote", "background", "list", "bullet", "indent", "link", "image", "color", "code-block"];
exports.formats = formats;

function QuillComponent(props) {
  var location = (0, _reactRouterDom.useLocation)();
  var path = location.pathname;
  var placeholder = "Here is some text";

  var copyToClipboard = function copyToClipboard() {
    var htmlString = props.html;
    htmlString = htmlString.replace(/></g, ">\n<");
    navigator.clipboard.writeText(htmlString);
    alert("Copied contents to clipboard");
  };

  var handleChange = function handleChange(value) {
    props.setHtml(value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "text-editor  ",
    "data-no-dnd": "true",
    children: props.isEditMode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [props.mini ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillToolbarMini.default, {
        check: true,
        checkCallback: function checkCallback() {
          props.saveEdits();
        },
        clipboardCallback: function clipboardCallback() {
          copyToClipboard();
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: 'top-toolbar bg-light' + (props.adminSettings.isShowEditor ? " mt-5" : ""),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "mt-2",
          children: "Text Editor Toolbar"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillToolbar.default, {
          check: true,
          checkCallback: function checkCallback() {
            props.saveEdits();
          },
          clipboardCallback: function clipboardCallback() {
            copyToClipboard();
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactQuill.default, {
        className: "text-left " + props.className,
        theme: "snow",
        value: props.html,
        onChange: handleChange,
        placeholder: placeholder,
        modules: modules,
        formats: formats
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: props.className + " ql-editor",
      style: props.style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsxParser.default, {
        truthyProp: true,
        bindings: _objectSpread(_objectSpread({}, props.variables), {}, {
          path: path
        }) // variables = {props.variables}
        ,
        autoCloseVoidElements: true,
        jsx: props.html ? props.html : placeholder
      })
    })
  });
}

;