"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DynamicPage;

var _react = require("react");

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _DndSensors = require("../helpers/DndSensors");

var _AdminWrapper = _interopRequireDefault(require("../wrappers/AdminWrapper"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Spacer = _interopRequireDefault(require("../pageComponents/Spacer"));

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

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function DynamicPage(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings;

  var initialState = props.components;

  if (!props.components) {
    [], _readOnlyError("initialState");
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + "-page", initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      components = _useComponentStorage2[0],
      setComponents = _useComponentStorage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeID = _useState2[0],
      setActiveID = _useState2[1];

  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }));

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedComponents = _useState4[0],
      setSelectedComponents = _useState4[1];

  var deleteSelectedComponents = function deleteSelectedComponents() {
    setComponents(function (prevState) {
      return prevState.filter(function (el) {
        return !selectedComponents.includes(el.id);
      });
    });
    setSelectedComponents([]);
  };

  var toggleComponentSelect = function toggleComponentSelect(id) {
    setSelectedComponents(function (prevState) {
      if (prevState.includes(id)) {
        return prevState.filter(function (componetID) {
          return componetID !== id;
        });
      } else {
        return [].concat(_toConsumableArray(prevState), [id]);
      }
    });
  };

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

  var pagecomponents = [];
  var storedComponents = components || [];
  storedComponents.forEach(function (el, index) {
    var componentOption = props.componentOptions[el.name];
    var Component = componentOption.component;
    var isNestedComponent = componentOption.isNestedComponent;
    var makeSticky = false;
    var offsetY = null;

    if (el.name === "NavigationBar") {
      if (webStyle.componentStyles.navigationBar.isSticky) {
        makeSticky = true;
        offsetY = parseFloat(webStyle.componentStyles.navigationBar.stickyOffsetY);
      }
    }

    if (adminSettings.isEditMode) {
      pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminWrapper.default, {
        makeSticky: makeSticky,
        offsetY: offsetY,
        isFlat: !isNestedComponent,
        isEditMode: adminSettings.isEditMode,
        toggleComponentSelect: toggleComponentSelect,
        isShowEditor: adminSettings.isShowEditor,
        isSelected: selectedComponents.includes(el.id),
        id: el.id,
        addSelected: addSelected,
        removeSelected: removeSelected,
        className: "py-3 ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
          id: el.id + "c",
          index: index,
          pageName: props.pageName,
          pageID: props.pageID,
          content: el.content,
          componentName: el.name,
          style: {
            cursor: "auto"
          }
        }, el.id + "c")
      }, el.id));
      pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spacer.default, {
        insertComponent: insertComponent,
        index: index
      }));
    } else {
      pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "py-3 ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
            id: el.id + "c",
            index: index,
            pageName: props.pageName,
            pageID: props.pageID,
            content: el.content,
            componentName: el.name,
            style: {
              cursor: "auto"
            }
          }, el.id + "c")
        })
      }));
      pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          height: ".5em"
        }
      }));
    }
  }); // Add first spacer if there is none

  if (pagecomponents.length === 0 && adminSettings.isEditMode) {
    pagecomponents.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spacer.default, {
      insertComponent: insertComponent,
      index: -1
    }));
  }

  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var marginColor = webStyle.colors[webStyle.componentStyles.background.marginColor];
  var backgroundColor = webStyle.colors[webStyle.componentStyles.background.backgroundColor];
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      backgroundColor: marginColor,
      marginTop: adminSettings.isShowEditor ? "50px" : ""
    },
    children: [selectedComponents.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex  ",
      style: {
        position: "absolute",
        width: "100vw",
        zIndex: 2000
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "d-flex w-100 flex-row",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          class: "btn-group mx-auto mt-2",
          role: "group",
          "aria-label": "Basic example",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            class: "btn btn-light btn-outline-dark border-end-0",
            onClick: function onClick() {
              return deleteSelectedComponents();
            },
            children: "Delete Selected Components"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            class: "btn btn-light btn-outline-dark border-start-0",
            onClick: function onClick() {
              return setSelectedComponents([]);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faXmark
            })
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "outerSection",
      className: "min-vh-100" + (localDisplaySettings.isMobile ? " " : " container"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "innerSection",
        className: "col justify-items-baseline min-vh-100 pb-4 pt-4",
        style: {
          backgroundColor: backgroundColor,
          boxShadow: webStyle.componentStyles.background.applyBackground ? borderAndShadow : "none"
        },
        children: adminSettings.isEditMode === true ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.DndContext, {
          sensors: sensors,
          modifiers: [_modifiers.restrictToVerticalAxis],
          collisionDetection: _core.closestCenter,
          onDragStart: handleDragStart,
          onDragEnd: handleDragEnd,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sortable.SortableContext, {
            items: storedComponents,
            strategy: _sortable.verticalListSortingStrategy,
            children: pagecomponents
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DragOverlay, {
            children: activeID ? /*#__PURE__*/(0, _jsxRuntime.jsx)(OverlaySpot, {
              id: activeID
            }) : null
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: pagecomponents
        })
      })
    })]
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