"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DynamicPage;

var _react = require("react");

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _Spacer = _interopRequireDefault(require("./pageComponents/Spacer"));

var _DndSensors = require("./helpers/DndSensors");

var _Header = _interopRequireDefault(require("./pageComponents/Header"));

var _NavigationBar = _interopRequireDefault(require("./pageComponents/NavigationBar"));

var _AdminWrapper = _interopRequireDefault(require("./wrappers/AdminWrapper"));

var _Website = require("./Website");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function DynamicPage(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      flatComponents = _useContext.flatComponents,
      webStyle = _useContext.webStyle;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      components = _useState2[0],
      setComponents = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeID = _useState4[0],
      setActiveID = _useState4[1];

  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor));

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedComponents = _useState6[0],
      setSelectedComponents = _useState6[1];

  var insertComponent = function insertComponent(option, index) {
    var newComponent = {
      name: option.replace(/\s+/g, ''),
      id: generateKey(option, index),
      content: {}
    };
    var newComponents = [].concat(_toConsumableArray(components.slice(0, index + 1)), [newComponent], _toConsumableArray(components.slice(index + 1)));
    setComponents(newComponents);
  };

  var addSelected = function addSelected(id) {
    setSelectedComponents([].concat(_toConsumableArray(selectedComponents), [id]));
  };

  var removeSelected = function removeSelected(id) {
    try {
      var idIndex = selectedComponents.indexOf(id); // alert(`Removing ${id} at index ${idIndex}`);

      setSelectedComponents(_toConsumableArray(selectedComponents.splice(idIndex, 1)));
    } catch (error) {
      alert("Error in removedSelected function:" + error);
    }
  };

  var componentMap = {
    Header: _Header.default,
    // Footer:Footer,
    // Mosaic:Mosaic,
    NavigationBar: _NavigationBar.default // VideoFrame:VideoFrame,
    // CardPaymentBlock:CardPaymentBlock,
    // DynamicForm:DynamicForm,
    // BlogPreview:BlogPreview,
    // CaptionedPicture,CaptionedPicture,
    // SlideShow:SlideShow,
    // PictureFrame:PictureFrame,
    // QuickLink:QuickLink,
    // Paragraph:Paragraph,
    // ParagraphBacked:ParagraphBacked,
    // ProductComparisonCards:ProductComparisonCards,
    // ProductComparisonTable:ProductComparisonTable,
    // WalkThrough:WalkThrough,
    // CountDown:CountDown,
    // Appointments:Appointments,
    // PhotoGallery:PhotoGallery

  };
  (0, _react.useEffect)(function () {
    if (props.content) {
      var _components = props.content;
      setComponents(_components);
    } else {
      var _components2 = [];

      for (var i = 0; i < props.defaultComponentList.length; i++) {
        _components2.push({
          name: props.defaultComponentList[i],
          id: generateKey(props.defaultComponentList[i], i)
        });
      }

      setComponents(_components2);
    }
  }, []);
  var pagecomponents = [];
  components.forEach(function (el, index) {
    var Component = componentMap[el.name];
    pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminWrapper.default, {
      isFlat: flatComponents.includes(el.name),
      id: el.id,
      addSelected: addSelected,
      removeSelected: removeSelected,
      className: "py-3 ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
        id: el.id + "c",
        index: index,
        pageName: props.pageName,
        content: el.content,
        componentName: el.name,
        style: {
          cursor: "auto"
        }
      }, el.id + "c")
    }, el.id));

    if (index !== components.length - 1) {
      pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spacer.default, {
        insertComponent: insertComponent,
        index: index
      }));
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      backgroundColor: webStyle.colors.lightShade
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "outerSection",
      className: "min-vh-100" + (webStyle.isMobile ? " " : " container"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "innerSection",
        className: "col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4",
        style: {
          backgroundColor: webStyle.colors.lightAccent
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.DndContext, {
          sensors: sensors,
          modifiers: [_modifiers.restrictToVerticalAxis],
          collisionDetection: _core.closestCenter,
          onDragStart: handleDragStart,
          onDragEnd: handleDragEnd,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sortable.SortableContext, {
            items: components,
            strategy: _sortable.verticalListSortingStrategy,
            children: pagecomponents
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DragOverlay, {
            children: activeID ? /*#__PURE__*/(0, _jsxRuntime.jsx)(OverlaySpot, {
              id: activeID
            }) : null
          })]
        })
      })
    })
  });

  function generateKey(componentName, index) {
    return "".concat(props.pageName, "-").concat(componentName, "-").concat(index).concat(String(new Date().getTime()).slice(-3));
  }

  function handleDragStart(event) {
    var active = event.active;
    setActiveID(active.id);
  }

  function handleDragEnd(event) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      var oldIndex = active.data.current.sortable.index;
      var newIndex = over.data.current.sortable.index;
      setComponents(function (components) {
        return (0, _sortable.arrayMove)(components, oldIndex, newIndex);
      });
      setActiveID(null);
    }
  }
}

function OverlaySpot(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "text-center"
  });
}