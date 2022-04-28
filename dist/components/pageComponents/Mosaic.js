"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mosaic;

var _LinkBox = _interopRequireDefault(require("../subComponents/LinkBox"));

var _PictureFrame = _interopRequireDefault(require("../subComponents/PictureFrame"));

var _react = require("react");

var _Website = require("../Website");

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Mosaic(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      lImageContent: {},
      lTitle: "Title",
      lSubTitle: "SubTitle",
      lLinkText: "New Link",
      lHref: "",
      rImageContent: {},
      rTitle: "Title",
      rSubTitle: "SubTitle",
      rLinkText: "New Link",
      rHref: ""
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      localDisplaySettings = _useContext.localDisplaySettings,
      images = _useContext.images,
      adminSettings = _useContext.adminSettings;

  var arrangement = webStyle.componentStyles.mosaic.arrangement;

  var handleContentEntryChange = function handleContentEntryChange(key, value) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, value));
    });
  };

  var rightLinkBoxID = "".concat(props.id, "-Rl");
  var rightPictureFrameID = "".concat(props.id, "-Rp");
  var leftLinkBoxID = "".concat(props.id, "-Ll");
  var leftPictureFrameID = "".concat(props.id, "-Lp");

  var leftPictureFrame = function leftPictureFrame(divClass) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "g-0 " + divClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
        adminSettings: adminSettings,
        webStyle: webStyle,
        images: images,
        id: leftPictureFrameID,
        imageContent: content.lImageContent,
        setImageContent: function setImageContent(value) {
          handleContentEntryChange("lImageContent", value);
        },
        isNested: true
      }, leftPictureFrameID)
    }, "leftPictureFrame");
  };

  var rightPictureFrame = function rightPictureFrame(divClass) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "g-0 " + divClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
        adminSettings: adminSettings,
        webStyle: webStyle,
        images: images,
        imageContent: content.rImageContent,
        id: rightPictureFrameID,
        setImageContent: function setImageContent(value) {
          handleContentEntryChange("rImageContent", value);
        },
        isNested: true
      }, rightPictureFrameID)
    }, "rightPictureFrame");
  };

  var leftLinkBox = function leftLinkBox(divClass) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "g-0 " + divClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkBox.default, {
        className: "row g-0 ",
        id: leftLinkBoxID,
        adminSettings: adminSettings,
        webStyle: webStyle,
        title: content.lTitle,
        subTitle: content.lSubTitle,
        linkText: content.lLinkText,
        href: content.lHref,
        localDisplaySettings: localDisplaySettings,
        setTitle: function setTitle(value) {
          handleContentEntryChange("lTitle", value);
        },
        setSubTitle: function setSubTitle(value) {
          handleContentEntryChange("lSubTitle", value);
        },
        setLinkText: function setLinkText(value) {
          handleContentEntryChange("lLinkText", value);
        },
        setHref: function setHref(value) {
          handleContentEntryChange("lHref", value);
        }
      }, leftLinkBoxID)
    }, "leftLinkBox");
  };

  var rightLinkBox = function rightLinkBox(divClass) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "g-0 " + divClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkBox.default, {
        id: rightLinkBoxID,
        adminSettings: adminSettings,
        webStyle: webStyle,
        title: content.rTitle,
        subTitle: content.rSubTitle,
        linkText: content.rLinkText,
        href: content.rHref,
        localDisplaySettings: localDisplaySettings,
        setTitle: function setTitle(value) {
          handleContentEntryChange("rTitle", value);
        },
        setSubTitle: function setSubTitle(value) {
          handleContentEntryChange("rSubTitle", value);
        },
        setLinkText: function setLinkText(value) {
          handleContentEntryChange("rLinkText", value);
        },
        setHref: function setHref(value) {
          handleContentEntryChange("rHref", value);
        }
      }, rightLinkBoxID)
    }, "rightLinkBox");
  };

  var componentMap = {
    LP: function LP(divClass) {
      return leftPictureFrame(divClass);
    },
    RP: function RP(divClass) {
      return rightPictureFrame(divClass);
    },
    LL: function LL(divClass) {
      return leftLinkBox(divClass);
    },
    RL: function RL(divClass) {
      return rightLinkBox(divClass);
    }
  };

  if (localDisplaySettings.isMobile) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _objectSpread({}, props.style),
      className: "row " + (localDisplaySettings.isMobile ? "px-2 " : "px-5"),
      "data-no-dnd": "true",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row g-0 mb-5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "row g-0 mb-5",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
                adminSettings: adminSettings,
                webStyle: webStyle,
                images: images,
                id: leftPictureFrameID,
                imageContent: content.lImageContent,
                setImageContent: function setImageContent(value) {
                  handleContentEntryChange("lImageContent", value);
                },
                isNested: true
              }, leftPictureFrameID)
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkBox.default, {
              className: "row g-0 ",
              id: leftLinkBoxID,
              adminSettings: adminSettings,
              webStyle: webStyle,
              title: content.lTitle,
              subTitle: content.lSubTitle,
              linkText: content.lLinkText,
              href: content.lHref,
              localDisplaySettings: localDisplaySettings,
              setTitle: function setTitle(value) {
                handleContentEntryChange("lTitle", value);
              },
              setSubTitle: function setSubTitle(value) {
                handleContentEntryChange("lSubTitle", value);
              },
              setLinkText: function setLinkText(value) {
                handleContentEntryChange("lLinkText", value);
              },
              setHref: function setHref(value) {
                handleContentEntryChange("lHref", value);
              }
            }, leftLinkBoxID)
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row g-0",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "row g-0 mb-5",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
                adminSettings: adminSettings,
                webStyle: webStyle,
                images: images,
                imageContent: content.rImageContent,
                setImageContent: function setImageContent(value) {
                  handleContentEntryChange("rImageContent", value);
                },
                id: rightPictureFrameID,
                isNested: true
              }, rightPictureFrameID)
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkBox.default, {
              id: rightLinkBoxID,
              adminSettings: adminSettings,
              webStyle: webStyle,
              title: content.rTitle,
              subTitle: content.rSubTitle,
              linkText: content.rLinkText,
              href: content.rHref,
              localDisplaySettings: localDisplaySettings,
              setTitle: function setTitle(value) {
                handleContentEntryChange("rTitle", value);
              },
              setSubTitle: function setSubTitle(value) {
                handleContentEntryChange("rSubTitle", value);
              },
              setLinkText: function setLinkText(value) {
                handleContentEntryChange("rLinkText", value);
              },
              setHref: function setHref(value) {
                handleContentEntryChange("rHref", value);
              }
            }, rightLinkBoxID)
          })]
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _objectSpread({}, props.style),
      className: "row g-0 px-5",
      "data-no-dnd": "true",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col me-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
          children: arrangement.split('-')[0].split(",").map(function (el, index) {
            if (index === 0) {
              return componentMap[el]("mb-5");
            } else {
              return componentMap[el]("");
            }
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col ms-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
          children: arrangement.split('-')[1].split(",").map(function (el, index) {
            if (index === 0) {
              return componentMap[el]("mb-5");
            } else {
              return componentMap[el]("");
            }
          })
        })
      })]
    });
  }
}