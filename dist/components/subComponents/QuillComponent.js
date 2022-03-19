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

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _QuillToolbar = _interopRequireDefault(require("./QuillToolbar"));

var _QuillToolbarMini = _interopRequireDefault(require("./QuillToolbarMini"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    children: props.isEditMode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [props.mini ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillToolbarMini.default, {
        check: true,
        checkCallback: function checkCallback() {
          props.saveEdits();
        },
        clipboardCallback: function clipboardCallback() {
          copyToClipboard();
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillToolbar.default, {
        check: true,
        checkCallback: function checkCallback() {
          props.saveEdits();
        },
        clipboardCallback: function clipboardCallback() {
          copyToClipboard();
        }
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
      className: "relative-div text-left ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: props.className,
        style: {
          color: props.webStyle.colors.darkShade
        },
        children: props.html ? (0, _htmlReactParser.default)(props.html) : (0, _htmlReactParser.default)(placeholder)
      })
    })
  });
}

;