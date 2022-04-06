"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page404;

var _react = require("react");

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _reactRouterDom = require("react-router-dom");

var _DndSensors = require("../helpers/DndSensors");

var _Spacer = _interopRequireDefault(require("../pageComponents/Spacer"));

var _Header = _interopRequireDefault(require("../pageComponents/Header"));

var _NavigationBar = _interopRequireDefault(require("../pageComponents/NavigationBar"));

var _StyledLink = _interopRequireDefault(require("../pageComponents/StyledLink"));

var _TextEditor = _interopRequireDefault(require("../pageComponents/TextEditor"));

var _PictureSlideShow = _interopRequireDefault(require("../pageComponents/PictureSlideShow"));

var _SubscriptionCards = _interopRequireDefault(require("../pageComponents/SubscriptionCards"));

var _Footer = _interopRequireDefault(require("../pageComponents/Footer"));

var _AdminWrapper = _interopRequireDefault(require("../wrappers/AdminWrapper"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _SubscriberBox = _interopRequireDefault(require("../pageComponents/SubscriberBox"));

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

function Page404(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      flatComponents = _useContext.flatComponents,
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings,
      appMethods = _useContext.appMethods;

  var initialState = props.components;

  if (initialState.length === 0) {
    initialState = [{
      name: "NavigationBar",
      id: "Page-404-NavBar-1-001",
      content: {}
    }, {
      name: "Header",
      type: "h3",
      id: "Page-404-Header-0-000",
      content: {
        header: "This page doesn't exist"
      }
    }];
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + "-page", initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      components = _useComponentStorage2[0],
      setComponents = _useComponentStorage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeID = _useState2[0],
      setActiveID = _useState2[1];

  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor));

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedComponents = _useState4[0],
      setSelectedComponents = _useState4[1];

  var location = (0, _reactRouterDom.useLocation)();

  var insertComponent = function insertComponent(option, index) {
    var newComponent = {
      name: option.replace(/\s+/g, ''),
      id: generateKey(option, index),
      content: {}
    };
    var newComponents = [].concat(_toConsumableArray(components.slice(0, index + 1)), [newComponent], _toConsumableArray(components.slice(index + 1)));
    setComponents(newComponents);
  };

  var addCurrentPage = function addCurrentPage() {
    var path = location.pathname;
    var name = path.replaceAll(/[/-_]/g, " ");
    var nameWords = name.trim().split();

    for (var i = 0; i < nameWords.length; i++) {
      nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
    }

    name = nameWords.join(" ");
    appMethods.addPage(name, path);
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
    Footer: _Footer.default,
    // Mosaic:Mosaic,
    NavigationBar: _NavigationBar.default,
    SubscriberBox: _SubscriberBox.default,
    StyledLink: _StyledLink.default,
    TextEditor: _TextEditor.default,
    PictureSlideShow: _PictureSlideShow.default,
    SubscriptionCards: _SubscriptionCards.default // VideoFrame:VideoFrame,
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

  }; // useEffect(() => {
  //   if(props.components){
  //       const components = props.components;
  //       setComponents(components)
  //   }
  //   else{
  //       let components = []
  //       for (var i = 0; i < props.defaultComponentList.length; i++){
  //           components.push(
  //               {
  //                   name: props.defaultComponentList[i],
  //                   id: generateKey(props.defaultComponentList[i],i)
  //               })
  //       }
  //       setComponents(components)
  //   }
  // },[]);

  var pagecomponents = [];
  var storedComponents = components || [];
  storedComponents.forEach(function (el, index) {
    var Component = componentMap[el.name];

    if (adminSettings.isEditMode) {
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
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [adminSettings.isAdmin && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "text-center py-3",
      children: [location.pathname != "/404" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          children: ["404 Page: The page ", location.pathname, " does not exist in your website"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mt-4 mb-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            className: "me-3 h4 my-auto",
            children: ["Add ", location.pathname, " to you website. "]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "btn btn-light btn-outline-dark",
            onClick: addCurrentPage,
            children: "Add Page"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: "Below is what guests will see if they navigate off your website:"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        backgroundColor: webStyle.colors.lightShade,
        borderTop: "1px solid black "
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "outerSection",
        className: "min-vh-100" + (localDisplaySettings.isMobile ? " " : " container"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "innerSection",
          className: "col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4",
          style: {
            backgroundColor: webStyle.colors.lightAccent
          },
          children: adminSettings.isEditMode === true ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.DndContext, {
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
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: pagecomponents
          })
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