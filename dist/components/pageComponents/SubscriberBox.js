"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubscriberBox;

var _react = _interopRequireWildcard(require("react"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _QuillComponent = _interopRequireDefault(require("../subComponents/QuillComponent"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SubscriberBox(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      html: "Subscribe to our newsletter!"
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState = (0, _react.useState)({
    name: "",
    email: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings,
      apiMethods = _useContext.apiMethods;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButtons = _useState4[0],
      showButtons = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditHeader = _useState6[0],
      setIsEditHeader = _useState6[1];

  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.subscriberBox.headerTextColor,
      backgroundColor: webStyle.componentStyles.subscriberBox.backgroundColor
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

  function saveHtml(_x) {
    return _saveHtml.apply(this, arguments);
  }

  function _saveHtml() {
    _saveHtml = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setContent(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  html: value
                });
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveHtml.apply(this, arguments);
  }

  var handleContentChange = function handleContentChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, value));
    });
  };

  var handleFormChange = function handleFormChange(key, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, _defineProperty({}, key, value)));
  };

  var addNewSubscriber = function addNewSubscriber() {
    if (!validateEmail(formState.email)) {
      alert("Email isn't a valid email");
    } else {
      apiMethods.addNewSubscriber(formState);
      setFormState({
        name: "",
        email: ""
      });
    }
  };

  var validateEmail = function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _objectSpread({}, props.style),
    className: "px-5",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "px-5 text-center mx-auto py-3  " + (localDisplaySettings.isMobile ? "" : "w-75 ") + borderShape,
      "data-no-dnd": "true",
      style: {
        backgroundColor: webStyle.colors[webStyle.componentStyles.subscriberBox.backgroundColor],
        boxShadow: borderAndShadow
      },
      onMouseEnter: function onMouseEnter() {
        showButtons(true);
      },
      onMouseLeave: function onMouseLeave() {
        showButtons(false);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "container mx-auto pt-3 relative-div mb-4",
        "data-no-dnd": "true",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillComponent.default, {
          variables: {
            pageName: props.pageName,
            siteName: webStyle.siteName
          },
          style: {
            color: webStyle.colors[componentStyles.textColor]
          },
          webStyle: webStyle,
          className: "navbar-header",
          html: content.html,
          isEditMode: isEditHeader,
          setHtml: function setHtml(value) {
            saveHtml(value);
          },
          saveEdits: function saveEdits() {
            setIsEditHeader(!isEditHeader);
          }
        }), isShowButtons && !isEditHeader && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative",
          "data-no-dnd": "true",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "btn ",
            onClick: function onClick() {
              return setIsEditHeader(true);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              style: {
                color: webStyle.colors[componentStyles.textColor]
              },
              icon: _freeSolidSvgIcons.faPencilAlt
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
        className: " rounded mb-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group col",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              className: "form-control mb-2",
              id: "name",
              placeholder: "Name",
              value: formState.name,
              onChange: function onChange(event) {
                return handleFormChange("name", event.target.value);
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "email",
              className: "form-control",
              id: "email",
              "aria-describedby": "emailHelp",
              placeholder: "Enter Email",
              value: formState.email,
              onChange: function onChange(event) {
                return handleFormChange("email", event.target.value);
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-group d-flex " + (webStyle.isMobile ? "col-5" : "col-3"),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "btn btn-light my-auto text-nowrap",
              onClick: addNewSubscriber,
              children: "Sign Me Up"
            })
          })]
        })
      })]
    })
  });
}

;