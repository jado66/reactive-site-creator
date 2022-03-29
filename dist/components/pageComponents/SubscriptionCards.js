"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubscriptionCards;

var _react = _interopRequireWildcard(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _EditableButton = _interopRequireDefault(require("../subComponents/EditableButton"));

var _QuillComponent = _interopRequireDefault(require("../subComponents/QuillComponent"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SubscriptionCards(props) {
  var _useState = (0, _react.useState)(3),
      _useState2 = _slicedToArray(_useState, 2),
      packagePlanCount = _useState2[0],
      setPackagePlanCount = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings;

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      maxHeight = _useState4[0],
      setMaxHeight = _useState4[1];

  var _useState5 = (0, _react.useState)([0, 0, 0]),
      _useState6 = _slicedToArray(_useState5, 2),
      heights = _useState6[0],
      setHeights = _useState6[1];

  var getMaxHeight = function getMaxHeight(height, index) {
    setHeights(function (prevState) {
      var newPrevState = _toConsumableArray(prevState);

      newPrevState[index] = height;
      return newPrevState;
    });
    setMaxHeight(Math.max(height));
  };

  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      data: [{
        header: "Product 1",
        htmlContent: "<p class=\"ql-align-center\">\n                  <strong>$ Price 1</strong>\n                  </p>\n                  <p>- Here is a description</p>"
      }, {
        header: "Product 2",
        htmlContent: "<p class=\"ql-align-center\">\n                  <strong>$ Price 2</strong>\n                  </p>\n                  <p>- Here is a description</p>"
      }, {
        header: "Product 3",
        htmlContent: "<p class=\"ql-align-center\">\n                  <strong>$ Price 3</strong>\n                  </p>\n                  <p>- Here is a description</p>"
      }],
      styles: {}
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isShowButtons = _useState8[0],
      showButtons = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isSettingsMode = _useState10[0],
      setIsSettingsMode = _useState10[1];

  var handleDataChange = function handleDataChange(index, key, value) {
    setContent(function (prevState) {
      var newData = _toConsumableArray(prevState.data);

      newData[index] = _objectSpread({}, newData[index]);
      newData[index][key] = value;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        data: newData
      });
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
      headerTextColor: webStyle.componentStyles.subscriptionCard.headerTextColor,
      headerBackgroundColor: webStyle.componentStyles.subscriptionCard.headerBackgroundColor,
      bodyTextColor: webStyle.componentStyles.subscriptionCard.bodyTextColor,
      bodyBackgroundColor: webStyle.componentStyles.subscriptionCard.bodyBackgroundColor
    }, content.styles);
  } catch (error) {}

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex text-center px-5" + (localDisplaySettings.isMobile ? " flex-column" : ""),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SubscriptionCard, {
      maxHeight: maxHeight,
      getMaxHeight: getMaxHeight,
      componentStyle: componentStyle,
      data: content.data[0],
      webStyle: webStyle,
      id: props.id + "-1",
      adminSettings: adminSettings,
      index: 0,
      handleDataChange: handleDataChange,
      className: 'g-0 ' + (localDisplaySettings.isMobile ? "mb-3" : "me-3 ")
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SubscriptionCard, {
      maxHeight: maxHeight,
      getMaxHeight: getMaxHeight,
      componentStyle: componentStyle,
      data: content.data[1],
      webStyle: webStyle,
      id: props.id + "-2",
      adminSettings: adminSettings,
      index: 1,
      handleDataChange: handleDataChange,
      className: 'g-0 ' + (localDisplaySettings.isMobile ? "my-3" : "mx-3")
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SubscriptionCard, {
      maxHeight: maxHeight,
      getMaxHeight: getMaxHeight,
      componentStyle: componentStyle,
      data: content.data[2],
      webStyle: webStyle,
      id: props.id + "-3",
      adminSettings: adminSettings,
      index: 2,
      handleDataChange: handleDataChange,
      className: 'g-0 ' + (localDisplaySettings.isMobile ? "mt-3" : "ms-3")
    })]
  });
}

;

function SubscriptionCard(props) {
  var contentEditable = [/*#__PURE__*/_react.default.createRef(), /*#__PURE__*/_react.default.createRef()]; // Header, Price, Button

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isEditMode = _useState12[0],
      setIsEditMode = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isShowButtons = _useState14[0],
      showButtons = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      height = _useState16[0],
      setHeight = _useState16[1];

  var _useState17 = (0, _react.useState)(true),
      _useState18 = _slicedToArray(_useState17, 2),
      isAutoHeight = _useState18[0],
      setIsAutoHeight = _useState18[1];

  var bodyRef = (0, _react.useRef)(null);

  var setHeader = function setHeader(val) {
    props.handleDataChange(props.index, "header", val);
  };

  var setHtmlContent = function setHtmlContent(val) {
    props.handleDataChange(props.index, "htmlContent", val);
  };

  function getNSetHeight() {
    return _getNSetHeight.apply(this, arguments);
  }

  function _getNSetHeight() {
    _getNSetHeight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (bodyRef.current.clientHeight) {
                setIsAutoHeight(true);
                setTimeout(function () {
                  var height = bodyRef.current.clientHeight;
                  setHeight(height);
                  props.getMaxHeight(height, props.index);
                  setIsAutoHeight(false);
                }, 250);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getNSetHeight.apply(this, arguments);
  }

  (0, _react.useEffect)(function () {
    getNSetHeight();
  }, []);

  var saveEdits = function saveEdits() {
    setIsEditMode(!isEditMode);
    getNSetHeight();
  };

  var borderShape = props.webStyle.componentStyles.all.borderShape;
  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "col " + props.className,
    "data-no-dnd": "true",
    style: _objectSpread({}, props.style),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: " " + borderShape,
      style: {
        boxShadow: borderAndShadow,
        backgroundColor: props.webStyle.colors[props.componentStyle.bodyBackgroundColor]
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: borderShape + " py-3 noBottomRadius ",
        style: {
          backgroundColor: props.webStyle.colors[props.componentStyle.headerBackgroundColor]
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
          style: {
            color: props.webStyle.colors[props.componentStyle.headerTextColor]
          },
          className: "my-0 fw-normal",
          spellCheck: "false",
          innerRef: contentEditable[0],
          html: props.data.header // innerHTML of the editable div
          ,
          disabled: !props.adminSettings.isEditMode // use true to disable editing
          ,
          onChange: function onChange(evt) {
            setHeader(evt.target.value);
          } // handle innerHTML change
          ,
          tagName: "h2"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-3  d-flex flex-column flex relative-div ",
        style: {
          minHeight: props.maxHeight != 0 && !isAutoHeight ? props.maxHeight : "" // boxShadow:borderAndShadow,

        },
        ref: bodyRef,
        onMouseEnter: function onMouseEnter() {
          showButtons(true);
        },
        onMouseLeave: function onMouseLeave() {
          showButtons(false);
        },
        children: [isShowButtons && props.adminSettings.isEditMode && !isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative d-flex  ",
          style: {
            zIndex: 10
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: " btn pt-3",
            style: {
              marginRight: ".5em"
            },
            "data-no-dnd": "true",
            onClick: function onClick() {
              setIsEditMode(!isEditMode);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPencilAlt,
              style: {
                color: props.webStyle.colors[props.componentStyle.headerBackgroundColor]
              }
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "list-unstyled mt-1 mb-4 flex-grow-1",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillComponent.default, {
            className: "paragraph text-start",
            html: props.data.htmlContent,
            isEditMode: isEditMode,
            setHtml: function setHtml(value) {
              setHtmlContent(value);
            },
            saveEdits: saveEdits,
            mini: true,
            style: {
              color: props.webStyle.colors[props.componentStyle.bodyTextColor]
            },
            webStyle: props.webStyle,
            id: props.id,
            content: {
              html: props.data.html
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableButton.default, {
          webStyle: props.webStyle,
          className: "w-100 btn btn-lg " + borderShape,
          style: {
            backgroundColor: props.webStyle.colors[props.componentStyle.headerBackgroundColor],
            color: props.webStyle.colors[props.componentStyle.headerTextColor]
          },
          callback: function callback() {
            alert("User picks callback: Link, Go to purhcase, ...");
          }
        })]
      })]
    })
  });
}