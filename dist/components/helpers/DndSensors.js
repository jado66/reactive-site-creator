"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchSensor = exports.MouseSensor = exports.KeyboardSensor = void 0;

var _core = require("@dnd-kit/core");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shouldHandleEvent(element) {
  let cur = element;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }

    cur = cur.parentElement;
  }

  return true;
}

class MouseSensor extends _core.MouseSensor {}

exports.MouseSensor = MouseSensor;

_defineProperty(MouseSensor, "activators", [{
  eventName: "onMouseDown",
  handler: _ref => {
    let {
      nativeEvent: event
    } = _ref;
    return shouldHandleEvent(event.target);
  }
}]);

class TouchSensor extends _core.TouchSensor {}

exports.TouchSensor = TouchSensor;

_defineProperty(TouchSensor, "activators", [{
  eventName: "onTouchStart",
  delay: 500,
  handler: _ref2 => {
    let {
      nativeEvent: event
    } = _ref2;
    return shouldHandleEvent(event.target);
  }
}]);

class KeyboardSensor extends _core.KeyboardSensor {}

exports.KeyboardSensor = KeyboardSensor;

_defineProperty(KeyboardSensor, "activators", [{
  eventName: "onKeyDown",
  handler: _ref3 => {
    let {
      nativeEvent: event
    } = _ref3;
    return shouldHandleEvent(event.target);
  }
}]);