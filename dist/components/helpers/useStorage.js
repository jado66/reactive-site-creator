"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useComponentStorage;

var _react = require("react");

var _Website = require("../Website");

var _delayCallback = _interopRequireDefault(require("./delayCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Needs a pageID as a parent object
function useComponentStorage(componentID, initialState) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      adminSettings = _useContext.adminSettings,
      apiMethods = _useContext.apiMethods,
      msgPort = _useContext.msgPort;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasBeenMounted = _useState2[0],
      setHasBeenMounted = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return getStoredComponent(componentID, initialState, adminSettings, apiMethods);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1]; // load saved data


  (0, _react.useEffect)(function () {
    // Load any values from database
    if (adminSettings.viewDraftEdits) {
      savedData = JSON.parse(localStorage.getItem(componentID));

      if (!savedData) {
        loadFromDatabase(apiMethods, componentID, setHasBeenMounted);
      }
    } else {
      loadFromDatabase(apiMethods, componentID, setHasBeenMounted);
    }
  }, []); // Save data

  (0, _react.useEffect)(function () {
    if (msgPort === "save") {
      alert("Saving ");
      apiMethods.setValueInDatabase(componentID, JSON.stringify(value));
      localStorage.removeItem(componentID);
    }

    if (msgPort === "reload") {
      setHasBeenMounted(false);
      setValue(function () {
        return getStoredComponent(componentID, initialState, adminSettings, apiMethods);
      });
    }
  }, [msgPort]);
  (0, _react.useEffect)(function () {
    // The use of has been mounted skips the first render.
    // Since we are programatically changing value we don't need to update our storage
    if (hasBeenMounted) {
      // Set live content from database
      if (adminSettings.autoUpdateLiveWebsite) {
        apiMethods.setValueInDatabase(componentID, JSON.stringify(value));
      } // Store draft data locally
      else if (adminSettings.autoSaveEditsLocally) {
        localStorage.setItem(componentID, JSON.stringify(value)); // TODO get this to work

        informSiteOfDraftEdits(apiMethods);
      }
    } else {
      setHasBeenMounted(true);
    }
  }, [value]);
  return [value, setValue];
}

function getStoredComponent(componentID, initialValue, adminSettings, apiMethods) {
  var savedData = null; // If we are viewing the draft load the draft

  if (adminSettings.viewDraftEdits) {
    savedData = JSON.parse(localStorage.getItem(componentID));

    if (savedData) {
      informSiteOfDraftEdits(apiMethods);
      return savedData;
    }
  } // If nothing is stored load the prop data from the template


  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

function loadFromDatabase(apiMethods, componentID, setHasBeenMounted) {
  if (apiMethods.getFromDataBase instanceof Function) {
    apiMethods.getFromDataBase(componentID).then(function (response) {
      if (response) {
        setValue(response);
        setHasBeenMounted(false);
      }
    });
  }
}

function informSiteOfDraftEdits(apiMethods) {
  (0, _delayCallback.default)(function () {
    apiMethods.setSiteIsDraft(true);
  }, 500);
}