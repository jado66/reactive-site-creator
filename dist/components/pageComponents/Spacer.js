"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spacer;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _Website = require("../Website");

function Spacer(props) {
  const [isShowBar, showBar] = (0, _react.useState)(false);
  const [isShowButtons, setShowButtons] = (0, _react.useState)(false);
  const {
    componentOptions
  } = (0, _react.useContext)(_Website.WebContext);

  const insertComponent = option => {
    props.insertComponent(option, props.index);
    showBar(false);
  };

  let options = componentOptions.map((option, index) => /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-dark border-0 my-1 col me-1",
    key: option,
    onClick: (evt, option) => {
      insertComponent(componentOptions[index]);
    }
  }, option));
  const optionButtons = /*#__PURE__*/React.createElement("div", {
    style: {
      whiteSpace: "nowrap"
    },
    className: "py-0 g-0 overflow-auto no-scroll"
  }, options);
  return /*#__PURE__*/React.createElement("div", {
    className: "g-0 row align-content-center ",
    style: {
      height: isShowButtons ? "2.5em" : ".5em"
    },
    onMouseEnter: () => showBar(true),
    onMouseLeave: () => {
      showBar(false);
    },
    onClick: () => {
      setShowButtons(!isShowButtons);
    } // onFocus

  }, isShowButtons ? /*#__PURE__*/React.createElement("div", {
    className: "m-0 px-5 mx-auto "
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row px-3 mx-auto rounded rounded-pill",
    style: {
      backgroundColor: "white",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, optionButtons)))) : /*#__PURE__*/React.createElement("div", {
    className: "px-5"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "m-0 p-0 w-100 mx-auto bg-primary",
    style: {
      height: "4px",
      display: isShowBar ? "" : "none"
    }
  })));
}