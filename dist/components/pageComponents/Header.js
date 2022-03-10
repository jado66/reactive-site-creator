"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _Website = require("../Website");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Header(props) {
  const contentEditable = /*#__PURE__*/_react.default.createRef();

  const [html, setHtml] = (0, _react.useState)("Header");
  const {
    webStyle,
    msgPort,
    appMethods
  } = (0, _react.useContext)(_Website.WebContext);

  const setContent = content => {
    //const \[(.+), .+ use.+
    // set$1(content.$1)
    if (Object.keys(content).length !== 0 && content) {
      setHtml(content.html);
    } else if (props.index === 0) {
      setHtml(props.pageName);
    }
  };

  const getContent = () => {
    //const \[(.+), .+ use.+
    //content.$1 = $1
    let content = {};
    content.html = html;
    return content;
  }; // Load content


  (0, _react.useEffect)(() => {
    setContent(props.content);
  }, []); // Save data

  (0, _react.useEffect)(() => {
    if (msgPort == "save") {
      const componentData = {
        name: props.componentName,
        id: props.id,
        content: getContent()
      };
      appMethods.saveComponentData(props.pageName, props.index, componentData);
    }
  }, [msgPort]);

  const handleChange = evt => {
    setHtml(evt.target.value); // localStorage.setItem(props.id,evt.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "px-5 text-center ",
    "data-no-dnd": "true"
  }, /*#__PURE__*/_react.default.createElement(_reactContenteditable.default, {
    className: "apply-font-primary mb-0",
    style: {
      color: webStyle.darkShade
    },
    spellCheck: "false",
    innerRef: contentEditable,
    html: html // innerHTML of the editable div
    ,
    disabled: !webStyle.isEditMode // use true to disable editing
    ,
    onChange: handleChange // handle innerHTML change
    ,
    tagName: "h1" // Use a custom HTML tag (uses a div by default)

  }));
}

;