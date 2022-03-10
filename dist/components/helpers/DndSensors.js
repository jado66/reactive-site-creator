"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchSensor = exports.MouseSensor = exports.KeyboardSensor = void 0;

var _core = require("@dnd-kit/core");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shouldHandleEvent(element) {
  var cur = element;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }

    cur = cur.parentElement;
  }

  return true;
}

var MouseSensor = /*#__PURE__*/function (_LibMouseSensor) {
  _inherits(MouseSensor, _LibMouseSensor);

  var _super = _createSuper(MouseSensor);

  function MouseSensor() {
    _classCallCheck(this, MouseSensor);

    return _super.apply(this, arguments);
  }

  return _createClass(MouseSensor);
}(_core.MouseSensor);

exports.MouseSensor = MouseSensor;

_defineProperty(MouseSensor, "activators", [{
  eventName: "onMouseDown",
  handler: function handler(_ref) {
    var event = _ref.nativeEvent;
    return shouldHandleEvent(event.target);
  }
}]);

var TouchSensor = /*#__PURE__*/function (_LibTouchSensor) {
  _inherits(TouchSensor, _LibTouchSensor);

  var _super2 = _createSuper(TouchSensor);

  function TouchSensor() {
    _classCallCheck(this, TouchSensor);

    return _super2.apply(this, arguments);
  }

  return _createClass(TouchSensor);
}(_core.TouchSensor);

exports.TouchSensor = TouchSensor;

_defineProperty(TouchSensor, "activators", [{
  eventName: "onTouchStart",
  delay: 500,
  handler: function handler(_ref2) {
    var event = _ref2.nativeEvent;
    return shouldHandleEvent(event.target);
  }
}]);

var KeyboardSensor = /*#__PURE__*/function (_LibKeyboardSensor) {
  _inherits(KeyboardSensor, _LibKeyboardSensor);

  var _super3 = _createSuper(KeyboardSensor);

  function KeyboardSensor() {
    _classCallCheck(this, KeyboardSensor);

    return _super3.apply(this, arguments);
  }

  return _createClass(KeyboardSensor);
}(_core.KeyboardSensor);

exports.KeyboardSensor = KeyboardSensor;

_defineProperty(KeyboardSensor, "activators", [{
  eventName: "onKeyDown",
  handler: function handler(_ref3) {
    var event = _ref3.nativeEvent;
    return shouldHandleEvent(event.target);
  }
}]);