"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = Toast;
exports.ToastContainer = ToastContainer;
exports.ToastYesNo = ToastYesNo;

var _react = require("react");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _jsxRuntime = require("react/jsx-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ToastContainer(props) {
  var position = (props.bottom ? "bottom-0 " : "") + (props.end ? "end-0 " : "") + (props.top ? "top-0 " : "") + (props.start ? "start-0 " : "") + (props.center ? "start-50 translate-middle-x " : "");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "toast-container position-fixed p-3 " + position,
    style: {
      zIndex: 3000
    },
    children: props.children
  });
}

function ToastYesNo(props) {
  var _useState = (0, _react.useState)(Date.now()),
      _useState2 = _slicedToArray(_useState, 2),
      toastTime = _useState2[0],
      setToastTime = _useState2[1]; // lol


  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      minsElapsed = _useState4[0],
      setMinsElapsed = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      userInput = _useState6[0],
      setUserInput = _useState6[1];

  (0, _react.useEffect)(function () {
    var myInterval = setInterval(function () {
      setMinsElapsed(calculateTimeElapsed(toastTime));
    }, 15000);
    return function () {
      clearInterval(myInterval);
    };
  });

  var onClickYes = function onClickYes(evt) {
    if (props.userInput) {
      if (userInput !== props.userInput) {
        return;
      }
    }

    props.onClickYes();
    props.deleteToast();
    evt.stopPropagation();
  };

  var calculateTimeElapsed = function calculateTimeElapsed(toastTime) {
    var difference = Date.now() - toastTime;
    var timeElapsed = 0;

    if (difference > 0) {
      timeElapsed = Math.floor(difference / 1000 / 60 % 60);
    }

    return timeElapsed;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "liveToast",
    className: "toast show",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "toast-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "me-2 text-warning",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faPlay,
          transform: {
            rotate: -90
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
        className: "me-auto",
        children: ["Site Editor ", props.type]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
        children: minsElapsed === 0 ? "just now" : "".concat(minsElapsed, " minute").concat(minsElapsed > 1 ? "s" : "", " ago")
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "btn-close",
        onClick: props.deleteToast
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "toast-body flex-column d-flex bg-light",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "",
        children: props.msg
      }), props.userInput && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "mt-2",
        type: "text",
        value: userInput,
        onChange: function onChange(evt) {
          return setUserInput(evt.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex-row text-end mt-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn btn-small btn-outline-dark px-4 mx-1",
          onClick: onClickYes,
          children: props.userInput ? "OK" : "Yes"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn btn-small btn-outline-dark px-4 mx-1",
          onClick: props.deleteToast,
          children: "No"
        })]
      })]
    })]
  });
}

function Toast(props) {
  (0, _react.useEffect)(function () {
    // declare the data fetching function
    var timedDelete = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setTimeout(function () {
                  props.deleteToast();
                }, 3000);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function timedDelete() {
        return _ref.apply(this, arguments);
      };
    }(); // call the function


    timedDelete() // make sure to catch any error
    .catch(console.error);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "liveToast",
    className: "toast show",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "toast-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        className: "me-auto",
        children: "Site Editor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
        children: "just now"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "btn-close",
        onClick: function onClick() {
          return props.deleteToast();
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "toast-body",
      children: props.msg
    })]
  });
}