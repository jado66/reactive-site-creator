"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MediaSlideShow;

var _react = require("react");

var _PictureFrame = _interopRequireDefault(require("../subComponents/PictureFrame"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function MediaSlideShow(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      ids: [1, 2, 3, 4, 5],
      mediaContentList: [{}, {}, {}, {}, {}],
      pictureCount: 5
    };
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      pictureIndex = _useState2[0],
      setPictureIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButtons = _useState4[0],
      showButtons = _useState4[1];

  var setPictureContent = function setPictureContent(index, value) {
    setContent(function (prevState) {
      var newImageContent = _toConsumableArray(prevState.mediaContentList);

      newImageContent[index] = value;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        mediaContentList: newImageContent
      });
    });
  };

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      localDisplaySettings = _useContext.localDisplaySettings,
      images = _useContext.images,
      adminSettings = _useContext.adminSettings;

  var addSlide = function addSlide() {
    setPictureIndex(function (prevState) {
      if (prevState === content.pictureCount - 1) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
    setContent(function (prevState) {
      var newState = _objectSpread({}, prevState);

      newState.pictureCount = prevState.pictureCount + 1;
      newState.mediaContentList = [].concat(_toConsumableArray(prevState.mediaContentList), [{}]);
      return newState;
    });
  };

  var removeSlide = function removeSlide() {
    setPictureIndex(function (prevState) {
      if (prevState === content.pictureCount - 1 && prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
    setContent(function (prevState) {
      if (prevState.pictureCount === 1) {
        return prevState;
      }

      var newState = _objectSpread({}, prevState);

      newState.pictureCount = prevState.pictureCount - 1;
      newState.mediaContentList = _toConsumableArray(prevState.mediaContentList.slice(0, -1));
      return newState;
    });
  };

  var swapMedia = function swapMedia(swapRight, index) {
    if (swapRight) {
      if (index === content.pictureCount - 1) {
        return;
      }

      setContent(function (prevState) {
        var newState = _objectSpread({}, prevState);

        var tempID = newState.ids[index];
        newState.ids[index] = prevState.ids[index + 1];
        newState.ids[index + 1] = tempID;
        var temp = newState.mediaContentList[index];
        newState.mediaContentList[index] = prevState.mediaContentList[index + 1];
        newState.mediaContentList[index + 1] = temp; // alert(`/S/wap ${JSON.stringify(newState.mediaContentList[index + 1])} with ${JSON.stringify(newState.mediaContentList[index])}`)

        return newState;
      });
    } else {
      if (index === 0) {
        return;
      }

      setContent(function (prevState) {
        var newState = _objectSpread({}, prevState);

        var temp = newState.mediaContentList[index];
        newState.mediaContentList[index] = prevState.mediaContentList[index - 1];
        newState.mediaContentList[index - 1] = temp;
        return newState;
      });
    }
  };

  var nextSlide = function nextSlide(direction) {
    if (direction < 0 && pictureIndex > 0) {
      setPictureIndex(pictureIndex - 1);
    }

    if (direction > 0 && pictureIndex < content.pictureCount - 1) {
      setPictureIndex(pictureIndex + 1);
    }
  };

  var numbertext = {
    color: webStyle.colors.darkShade,
    fontSize: "large",
    padding: "8px 12px",
    position: "absolute",
    top: 25,
    left: "2em",
    zIndex: 1,
    fontWeight: "bold"
  };
  var arrow = {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    padding: "16px",
    marginTop: "-35px",
    color: webStyle.colors.darkShade,
    fontWeight: "bold",
    fontSize: "x-large",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    zIndex: 1
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _objectSpread({}, props.style),
    className: "px-5 text-center relative-div ",
    "data-no-dnd": "true",
    onMouseEnter: function onMouseEnter() {
      showButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      showButtons(false);
    },
    children: [pictureIndex > 0 && isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      style: _objectSpread(_objectSpread({}, arrow), {}, {
        left: "-.25em"
      }),
      onClick: function onClick() {
        nextSlide(-1);
      },
      children: "\u276E"
    }), pictureIndex < content.pictureCount - 1 && isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      style: _objectSpread(_objectSpread({}, arrow), {}, {
        right: "-.25em"
      }),
      onClick: function onClick() {
        nextSlide(1);
      },
      children: "\u276F"
    }), pictureIndex == content.pictureCount - 1 && adminSettings.isEditMode && isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      style: _objectSpread(_objectSpread({}, arrow), {}, {
        top: "35%",
        right: "-.25em"
      }),
      onClick: function onClick() {
        addSlide();
      },
      children: "+"
    }), pictureIndex == content.pictureCount - 1 && content.pictureCount > 1 && adminSettings.isEditMode && isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      style: _objectSpread(_objectSpread({}, arrow), {}, {
        bottom: "35%",
        right: "-.25em"
      }),
      onClick: function onClick() {
        removeSlide();
      },
      children: "-"
    }), isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "numberText",
      style: numbertext,
      children: [pictureIndex + 1, " / ", content.pictureCount]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
      webStyle: webStyle,
      adminSettings: adminSettings,
      images: images,
      imageContent: content.mediaContentList[pictureIndex],
      setImageContent: function setImageContent(value) {
        setPictureContent(pictureIndex, value);
      },
      id: "".concat(props.id, "-P").concat(content.ids[pictureIndex]),
      moveRight: pictureIndex != content.pictureCount - 1 ? function () {
        swapMedia(true, pictureIndex);
      } : null,
      moveLeft: pictureIndex != 0 ? function () {
        swapMedia(false, pictureIndex);
      } : null,
      includeVideos: true,
      isNested: true
    }, "".concat(props.id, "-P").concat(pictureIndex))]
  });
}