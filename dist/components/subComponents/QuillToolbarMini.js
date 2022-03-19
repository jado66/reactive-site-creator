"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QuillToolbarMini;

var _react = _interopRequireDefault(require("react"));

require("../helpers/quill.css");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactQuill = require("react-quill");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);
// Add fonts to whitelist and register them
var Font = _reactQuill.Quill.import("formats/font");

Font.whitelist = ["arial", "comic-sans", "courier-new", "georgia", "helvetica", "lucida"];

_reactQuill.Quill.register(Font, true); // Quill Toolbar component


function QuillToolbarMini(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "toolbar",
    className: props.className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "ql-formats",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
        className: "ql-font",
        defaultValue: "arial",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "arial",
          children: "Arial"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "comic-sans",
          children: "Comic Sans"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "courier-new",
          children: "Courier New"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "georgia",
          children: "Georgia"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "helvetica",
          children: "Helvetica"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: "lucida",
          children: "Lucida"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "ql-formats",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-bold border-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-italic border-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-underline border-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-strike border-0"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "ql-formats",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-list border-0",
        value: "ordered"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-list border-0",
        value: "bullet"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "ql-formats",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        className: "ql-align border-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        className: "ql-color border-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        className: "ql-background border-0"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "ql-formats",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-link border-0"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "ql-formats border-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-clean border-0"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "ql-formats",
      children: [props.clipboardCallback && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-undo  border-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faClipboard,
          onClick: props.clipboardCallback
        })
      }), props.update && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-undo  border-0",
        onClick: props.checkCallback,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faSave,
          onClick: props.clipboardCallback
        })
      }), props.check && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "ql-undo border-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCheck,
          onClick: props.checkCallback
        })
      })]
    })]
  });
}