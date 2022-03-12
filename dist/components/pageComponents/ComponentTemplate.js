"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewComponent;

var _react = _interopRequireWildcard(require("react"));

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NewComponent(props) {
  var _useStorage = useStorage(0),
      _useStorage2 = _slicedToArray(_useStorage, 2),
      contentVal1 = _useStorage2[0],
      setContentVal1 = _useStorage2[1];

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      contentVal2 = _useState2[0],
      setContentVal2 = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      msgPort = _useContext.msgPort,
      appMethods = _useContext.appMethods;

  var setContent = function setContent(content) {
    setContentVal1(content.val1);
    setContentVal2(content.val2);
  };

  var getContent = function getContent() {
    return {
      contentVal1: contentVal1,
      contentVal2: contentVal2
    };
  };

  var pullContent = function pullContent() {
    var fromTemplate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!fromTemplate) {
      // 1st Pull Data from DB
      var _content = appMethods.getComponentFromDB(props.pageID, props.id);

      if (_content) {
        setContent(_content);
      } // Pull draft content from local browser      


      if (webStyle.viewDraftEdits) {
        var _content2 = localStorage.getItem(props.id);

        if (_content2) {
          _content2 = JSON.parse(_content2);
          setContent(_content2); // Mark site as a draft

          appMethods.setSiteIsDraft(true); // Exit function. No need to load template values

          return;
        }
      }
    } // If no draft or database values load from a template


    if (props.content) {
      if (Object.keys(props.content).length !== 0) setContent(content);

      if (fromTemplate) {
        saveContent();
      }
    }
  };

  var saveContent = function saveContent() {
    var content = getContent(); // Save draft edits locally

    if (webStyle.autoSaveEditsLocally) {
      localStorage.setItem("masterNavData", JSON.stringify(content));
      appMethods.setSiteIsDraft(true);
    } // Make all edits live


    if (webStyle.autoUpdateLiveWebsite) {
      appMethods.saveComponentToDB(props.pageID, props.id, content);
    }
  }; // Load content on mount


  (0, _react.useEffect)(function () {
    pullContent();
  }, []); // Save data

  (0, _react.useEffect)(function () {
    if (msgPort == "save") {
      saveContent();
    }
  }, [msgPort]); // Load draft data from local browser or only show live edits

  (0, _react.useEffect)(function () {
    if (msgPort == "viewDraft" || msgPort == "viewLiveSite") {
      pullContent();
    }
  }, [msgPort]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "px-5 text-center ",
    "data-no-dnd": "true",
    children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      value: contentValue1,
      onChange: function onChange(evt) {
        return setContentVal1(evt.target.value);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      value: contentValue2,
      onChange: function onChange(evt) {
        return setContentVal2(evt.target.value);
      }
    })]
  });
}

;