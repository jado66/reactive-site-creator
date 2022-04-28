"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkBox;

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _EditableLink = _interopRequireDefault(require("./EditableLink"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {WebContext} from "../App"
function LinkBox(props) {
  var contentEditable1 = /*#__PURE__*/_react.default.createRef();

  var contentEditable2 = /*#__PURE__*/_react.default.createRef();

  var setTitle = function setTitle(evt) {
    props.setTitle(evt.target.value); // localStorage.setItem(this.props.id+'-h2',evt.target.value);
  };

  var setSubTitle = function setSubTitle(evt) {
    props.setSubTitle(evt.target.value); // localStorage.setItem(this.props.id+'-h3',evt.target.value);
  };

  var componentStyles = {};

  try {
    componentStyles = {
      textColor: props.webStyle.componentStyles.linkBox.textColor,
      backgroundColor: props.webStyle.componentStyles.linkBox.backgroundColor,
      linkColor: props.webStyle.componentStyles.linkBox.linkColor
    };
  } catch (error) {}

  var borderShape = props.webStyle.componentStyles.all.borderShape;
  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "p-3 g-0 " + borderShape,
    style: {
      backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.linkBox.backgroundColor],
      boxShadow: borderAndShadow
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
      style: {
        color: props.webStyle.colors[componentStyles.textColor]
      },
      innerRef: contentEditable1,
      html: props.title // innerHTML of the editable div
      ,
      disabled: !props.adminSettings.isEditMode // use true to disable editing
      ,
      onChange: setTitle // handle innerHTML change
      ,
      tagName: "h2" // Use a custom HTML tag (uses a div by default)

    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
      className: "apply-font-secondary",
      style: {
        color: props.webStyle.colors[componentStyles.textColor]
      },
      innerRef: contentEditable2,
      html: props.subTitle // innerHTML of the editable div
      ,
      disabled: !props.adminSettings.isEditMode // use true to disable editing
      ,
      onChange: setSubTitle // handle innerHTML change
      ,
      tagName: "h3" // Use a custom HTML tag (uses a div by default)

    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableLink.default, {
      divClass: "px-0",
      linkStyle: {
        color: props.webStyle.colors[componentStyles.linkColor]
      },
      linkClass: props.webStyle.componentStyles.all.linkStyle,
      id: props.id + "-link",
      localDisplaySettings: props.localDisplaySettings,
      adminSettings: props.adminSettings,
      webStyle: props.webStyle,
      linkText: props.linkText,
      href: props.href,
      setLinkText: props.setLinkText,
      setHref: props.setHref
    })]
  });
}

;