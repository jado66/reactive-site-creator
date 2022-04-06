"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useContextStorage;

var _delayCallback = _interopRequireDefault(require("./delayCallback"));

var _react = require("react");

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

function useContextStorage(adminSettings, apiMethods, msgPort, contextName, initialState) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasBeenMounted = _useState2[0],
      setHasBeenMounted = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return getStoredComponent(contextName, initialState, adminSettings, apiMethods);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1]; // load saved data


  (0, _react.useEffect)(function () {
    // Load any values from database
    if (adminSettings.viewDraftEdits) {
      var savedData = JSON.parse(localStorage.getItem(contextName));

      if (!savedData) {
        loadFromDatabase(apiMethods, contextName, setValue, setHasBeenMounted);
      }
    } else {
      loadFromDatabase(apiMethods, contextName, setValue, setHasBeenMounted);
    }
  }, []); // Save data

  (0, _react.useEffect)(function () {
    if (msgPort === "save") {
      // alert("Saving ")
      apiMethods.setValueInDatabase(contextName, JSON.stringify(value));
      localStorage.removeItem(contextName);
    }

    if (msgPort === "reload") {
      setHasBeenMounted(false);
      setValue(function () {
        return getStoredComponent(contextName, initialState, adminSettings, apiMethods);
      });
    }
  }, [msgPort]); // Update data

  (0, _react.useEffect)(function () {
    // The use of has been mounted skips the first render.
    // Since we are programatically changing value we don't need to update our storage
    if (hasBeenMounted) {
      // Set live content from database
      if (adminSettings.autoUpdateLiveWebsite) {
        apiMethods.setValueInDatabase(contextName, JSON.stringify(value));
      } // Store draft data locally
      else if (adminSettings.autoSaveEditsLocally) {
        localStorage.setItem(contextName, JSON.stringify(value)); // TODO get this to work

        informSiteOfDraftEdits(apiMethods);
      }
    } else {
      setHasBeenMounted(true);
    }
  }, [value]);
  return [value, setValue];
} // Custom hook to store the data


function getStoredComponent(contextName, initialValue, adminSettings, apiMethods) {
  var savedData = null; // If we are viewing the draft load the draft

  if (adminSettings.viewDraftEdits) {
    savedData = JSON.parse(localStorage.getItem(contextName)); // we need to override data instead of replace it. This will make it backcompatible

    if (initialValue.constructor == Object) {
      var mergedData = _objectSpread({}, initialValue);

      if (savedData) {
        for (var _i2 = 0, _Object$entries = Object.entries(savedData); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (key in mergedData && value.constructor == Object) {
            mergedData[key] = _objectSpread(_objectSpread({}, mergedData[key]), value);
          } else {
            mergedData[key] = value;
          }
        }

        informSiteOfDraftEdits(apiMethods);
      }

      return mergedData;
    }

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

function loadFromDatabase(apiMethods, componentID, setValue, setHasBeenMounted) {
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