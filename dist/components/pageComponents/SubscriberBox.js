"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubscriberBox;

var _react = _interopRequireWildcard(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

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

function SubscriberBox(props) {
  var contentEditable = /*#__PURE__*/_react.default.createRef();

  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      header: "Subscribe to our newsletter!"
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
      msgPort = _useContext.msgPort,
      apiMethods = _useContext.apiMethods; // Save data


  (0, _react.useEffect)(function () {
    if (msgPort == "save") {
      apiMethods.setValueInDatabase(props.pageID + props.id, JSON.stringify(content));
      localStorage.removeItem(props.pageID + props.id);
    }
  }, [msgPort]);

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
    className: "px-5",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "px-5 text-center mx-auto boxShadow py-3 rounded " + (webStyle.isMobile ? "" : "w-75"),
      "data-no-dnd": "true",
      style: {
        backgroundColor: webStyle.colors.darkShade
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
        className: "apply-font-primary mb-4",
        style: {
          color: webStyle.colors.lightShade
        },
        spellCheck: "false",
        innerRef: contentEditable,
        html: content.header // innerHTML of the editable div
        ,
        disabled: !webStyle.isEditMode // use true to disable editing
        ,
        onChange: function onChange(evt) {
          handleContentChange("header", evt.target.value);
        } // handle innerHTML change
        ,
        tagName: "h3" // Use a custom HTML tag (uses a div by default)

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