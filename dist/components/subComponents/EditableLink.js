"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableLink;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _jsxRuntime = require("react/jsx-runtime");

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

function EditableLink(props) {
  var _useState = (0, _react.useState)("link"),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  var _useState3 = (0, _react.useState)(props.linkText),
      _useState4 = _slicedToArray(_useState3, 2),
      tempLinkText = _useState4[0],
      setTempLinkText = _useState4[1];

  var _useState5 = (0, _react.useState)(props.href),
      _useState6 = _slicedToArray(_useState5, 2),
      tempHref = _useState6[0],
      setTempHref = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showButtons = _useState8[0],
      setShowButtons = _useState8[1];

  var saveLinkEdits = function saveLinkEdits() {
    var newLinkText = tempLinkText;
    var newHref = tempHref;

    if (newLinkText === "") {
      newLinkText = props.linkText;
    }

    if (newHref === "") {
      newHref = props.href;
    }

    props.setLinkText(newLinkText);
    props.setHref(newHref);
    setTempHref(newHref);
    setTempLinkText(newLinkText); //this retrieves the string inside > <

    setMode("link");
  };

  var changeToEditMode = function changeToEditMode() {
    props.setLinkText(props.linkText);
    props.setHref(props.href);
    setMode("edit");
  };

  var setButtonsVisibility = function setButtonsVisibility(showButtons) {
    setShowButtons(showButtons);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onMouseEnter: function onMouseEnter() {
      return setButtonsVisibility(true);
    },
    onMouseLeave: function onMouseLeave() {
      setButtonsVisibility(false);
    },
    children: mode == "edit" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'd-flex flex-column ' + (props.localDisplaySettings.isMobile ? "w-75 " : "w-50 ") + props.divClass,
      style: _objectSpread(_objectSpread({}, props.divStyle), {}, {
        position: "relative"
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "input-group mb-1",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "col-form-label col-sm-4",
          children: "Text"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          className: "form-control  col-sm-8 me-5",
          placeholder: "Text",
          value: tempLinkText,
          onChange: function onChange(evt) {
            return setTempLinkText(evt.target.value);
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "input-group",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "col-form-label col-sm-4",
          children: "HyperLink"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          className: "form-control col-sm-8 me-5",
          placeholder: "Href",
          value: tempHref,
          onChange: function onChange(evt) {
            return setTempHref(evt.target.value);
          }
        })]
      }), true && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "relative-r",
        style: {
          color: props.webStyle.colors.darkShade,
          top: 0
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "icon-link",
          icon: _freeSolidSvgIcons.faCheck,
          onClick: saveLinkEdits
        })
      })]
    }) // <div className='relative-div'>
    //         <div className="row">
    //         <div className='col-5'>
    //             <div className="input-group ">
    //             <div className="input-group-prepend">
    //                 <span className="input-group-text" id="basic-addon3">Text:</span>
    //             </div>
    //             <input type="text" className="form-control" onChange={handleLinkHTMLChange} value={tempLinkText}/>
    //             </div>
    //         </div>
    //         <div className='col-5'>
    //             <div className="input-group">
    //             <div className="input-group-prepend">
    //                 <span className="input-group-text" id="basic-addon3">href:</span>
    //             </div>
    //             <input type="text" className="form-control" onChange={handleLinkHrefChange} value={tempHref}/>
    //             </div>
    //         </div>
    //         </div> 
    //     </div>
    :
    /*#__PURE__*/
    // justify-content-end '} 
    (0, _jsxRuntime.jsxs)("div", {
      className: 'd-flex ' + (props.localDisplaySettings.isMobile ? "w-75 " : "w-50 ") + props.divClass,
      style: _objectSpread(_objectSpread({}, props.divStyle), {}, {
        position: "relative"
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        className: "" + props.linkClass,
        style: _objectSpread({}, props.linkStyle),
        to: props.href,
        children: props.linkText
      }), showButtons && props.adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "relative-r",
        style: {
          color: props.webStyle.colors.darkShade,
          top: 0
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "icon-link",
          icon: _freeSolidSvgIcons.faPencilAlt,
          onClick: changeToEditMode
        })
      })]
    })
  });
}

;