"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StaticPage;

var _react = require("react");

var _Header = _interopRequireDefault(require("./pageComponents/Header"));

var _NavigationBar = _interopRequireDefault(require("./pageComponents/NavigationBar"));

var _Website = require("./Website");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function StaticPage(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      components = _useState2[0],
      setComponents = _useState2[1];

  var componentMap = {
    Header: _Header.default,
    // Footer:Footer,
    // Mosaic:Mosaic,
    NavigationBar: _NavigationBar.default // VideoFrame:VideoFrame,
    // CardPaymentBlock:CardPaymentBlock,
    // DynamicForm:DynamicForm,
    // BlogPreview:BlogPreview,
    // CaptionedPicture,CaptionedPicture,
    // SlideShow:SlideShow,
    // PictureFrame:PictureFrame,
    // QuickLink:QuickLink,
    // Paragraph:Paragraph,
    // ParagraphBacked:ParagraphBacked,
    // ProductComparisonCards:ProductComparisonCards,
    // ProductComparisonTable:ProductComparisonTable,
    // WalkThrough:WalkThrough,
    // CountDown:CountDown,
    // Appointments:Appointments,
    // PhotoGallery:PhotoGallery

  };
  (0, _react.useEffect)(function () {
    if (props.components) {
      var _components = props.components;
      setComponents(_components);
    } else {
      var _components2 = [];

      for (var i = 0; i < props.defaultComponentList.length; i++) {
        _components2.push({
          name: props.defaultComponentList[i],
          id: generateKey(props.defaultComponentList[i], i)
        });
      }

      setComponents(_components2);
    }
  }, []);
  var pagecomponents = [];
  components.forEach(function (el, index) {
    var Component = componentMap[el.name];
    pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "py-3 ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
        id: el.id + "c",
        index: index,
        pageName: props.pageName,
        content: el.content,
        componentName: el.name,
        style: {
          cursor: "auto"
        }
      }, el.id + "c")
    }, el.id));
    pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "g-0 row align-content-center ",
      style: {
        height: ".5em"
      } // onFocus

    }));
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      backgroundColor: webStyle.colors.lightShade
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "outerSection",
      className: "min-vh-100" + (webStyle.isMobile ? " " : " container"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "innerSection",
        className: "col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4",
        style: {
          backgroundColor: webStyle.colors.lightAccent
        },
        children: pagecomponents
      })
    })
  });

  function generateKey(componentName, index) {
    return "".concat(props.pageName, "-").concat(componentName, "-").concat(index).concat(String(new Date().getTime()).slice(-3));
  }
}