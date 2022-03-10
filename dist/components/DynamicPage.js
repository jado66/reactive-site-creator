"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DynamicPage;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.includes.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "bootstrap/dist/css/bootstrap.css";
// import BlogPreview from "./BlogPreview";
// import CaptionedPicture from "./pageComponents/CaptionedPicture";
// import DynamicForm from "./pageComponents/DynamicForm";
// import CardPaymentBlock from "./CardPaymentBlock";
// import Mosaic from "./pageComponents/Mosaic";
// import Footer from "./pageComponents/Footer";
// import VideoFrame from "./pageComponents/VideoFrame";
// import SlideShow from "./pageComponents/SlideShow";
// import PictureFrame from "./PictureFrame";
// import QuickLink from "./pageComponents/QuickLink";
// import Paragraph from "./pageComponents/Paragraph";
// import ProductComparisonCards from "./pageComponents/ProductComparisonCards";
// import ProductComparisonTable from "./pageComponents/ProductComparisonTable";
// import WalkThrough from "./pageComponents/Walkthrough";
// import ParagraphBacked from "./pageComponents/ParagraphBacked";
// import CountDown from "./pageComponents/CountDown";
// import Appointments from "./pageComponents/Appointments";
// import PhotoGallery from "./pageComponents/PhotoGallery";
function DynamicPage(props) {
  const {
    flatComponents,
    webStyle
  } = (0, _react.useContext)(_Website.WebContext);
  const [components, setComponents] = (0, _react.useState)([]);
  const [activeID, setActiveID] = (0, _react.useState)(null);
  const sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor));
  const [selectedComponents, setSelectedComponents] = (0, _react.useState)([]);

  const insertComponent = (option, index) => {
    let newComponent = {
      name: option.replace(/\s+/g, ''),
      id: generateKey(option, index),
      content: {}
    };
    let newComponents = [...components.slice(0, index + 1), newComponent, ...components.slice(index + 1)];
    setComponents(newComponents);
  };

  const addSelected = id => {
    setSelectedComponents([...selectedComponents, id]);
  };

  const removeSelected = id => {
    try {
      const idIndex = selectedComponents.indexOf(id); // alert(`Removing ${id} at index ${idIndex}`);

      setSelectedComponents([...selectedComponents.splice(idIndex, 1)]);
    } catch (error) {
      alert("Error in removedSelected function:" + error);
    }
  };

  const componentMap = {
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
  (0, _react.useEffect)(() => {
    if (props.content) {
      const components = props.content;
      setComponents(components);
    } else {
      let components = [];

      for (var i = 0; i < props.defaultComponentList.length; i++) {
        components.push({
          name: props.defaultComponentList[i],
          id: generateKey(props.defaultComponentList[i], i)
        });
      }

      setComponents(components);
    }
  }, []);
  let pagecomponents = [];
  components.forEach((el, index) => {
    const Component = componentMap[el.name];
    pagecomponents.push( /*#__PURE__*/React.createElement(_AdminWrapper.default, {
      key: el.id,
      isFlat: flatComponents.includes(el.name),
      id: el.id,
      addSelected: addSelected,
      removeSelected: removeSelected,
      className: "py-3 "
    }, /*#__PURE__*/React.createElement(Component, {
      key: el.id + "c",
      id: el.id + "c",
      index: index,
      pageName: props.pageName,
      content: el.content,
      componentName: el.name,
      style: {
        cursor: "auto"
      }
    })));

    if (index !== components.length - 1) {
      pagecomponents.push( /*#__PURE__*/React.createElement(_Spacer.default, {
        insertComponent: insertComponent,
        index: index
      }));
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: webStyle.lightShade
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "outerSection",
    className: "min-vh-100" + (webStyle.isMobile ? " " : " container")
  }, /*#__PURE__*/React.createElement("div", {
    id: "innerSection",
    className: "col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4",
    style: {
      backgroundColor: webStyle.lightAccent
    }
  }, /*#__PURE__*/React.createElement(_core.DndContext, {
    sensors: sensors,
    modifiers: [_modifiers.restrictToVerticalAxis],
    collisionDetection: _core.closestCenter,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/React.createElement(_sortable.SortableContext, {
    items: components,
    strategy: _sortable.verticalListSortingStrategy
  }, pagecomponents), /*#__PURE__*/React.createElement(_core.DragOverlay, null, activeID ? /*#__PURE__*/React.createElement(OverlaySpot, {
    id: activeID
  }) : null)))));

  function generateKey(componentName, index) {
    return "".concat(props.pageName, "-").concat(componentName, "-").concat(index).concat(String(new Date().getTime()).slice(-3));
  }

  function handleDragStart(event) {
    const {
      active
    } = event;
    setActiveID(active.id);
  }

  function handleDragEnd(event) {
    const {
      active,
      over
    } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;
      const newIndex = over.data.current.sortable.index;
      setComponents(components => {
        return (0, _sortable.arrayMove)(components, oldIndex, newIndex);
      });
      setActiveID(null);
    }
  }
}

function OverlaySpot(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  });
}