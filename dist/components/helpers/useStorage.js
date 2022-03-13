"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useComponentStorage;

var _react = require("react");

var _Website = require("../Website");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Needs a pageID as a parent object
function useComponentStorage(componentID, initialState) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      storageSettings = _useContext.storageSettings,
      apiMethods = _useContext.apiMethods;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasBeenMounted = _useState2[0],
      setHasBeenMounted = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return getStoredComponent(componentID, initialState, storageSettings, apiMethods);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  (0, _react.useEffect)(function () {
    // The use of has been mounted skips the first render.
    // Since we are programatically changing value we don't need to update our storage
    if (hasBeenMounted) {
      // Set live content from database
      if (storageSettings.autoUpdateLiveWebsite) {
        if (apiMethods.isAthenticated()) {
          apiMethods.setValueInDatabase(componentID, JSON.stringify(value));
        }
      } // Store draft data locally
      else if (storageSettings.autoSaveEditsLocally) {
        localStorage.setItem(componentID, JSON.stringify(value)); // TODO get this to work
        // apiMethods.setSiteIsDraft(true)
      }
    } else {
      setHasBeenMounted(true);
    }
  }, [value]);
  return [value, setValue];
}

function getStoredComponent(componentID, initialValue, storageSettings, apiMethods) {
  var savedData = null; // If we are viewing the draft load the draft

  if (storageSettings.viewDraftEdits) {
    savedData = JSON.parse(localStorage.getItem(componentID));

    if (savedData) {
      // apiMethods.setSiteIsDraft(true)
      return savedData;
    }
  } // Load any values from database


  if (apiMethods.getFromDataBase instanceof Function) {
    savedData = JSON.stringify(apiMethods.getFromDataBase());

    if (savedData) {
      return savedData;
    }
  } // If nothing is stored load the prop data from the template


  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}