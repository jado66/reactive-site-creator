"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMenu = BackgroundMenu;
exports.FooterMenu = FooterMenu;
exports.HeaderMenu = HeaderMenu;
exports.LinkBoxMenu = LinkBoxMenu;
exports.MosaicMenu = MosaicMenu;
exports.NavigationBarMenu = NavigationBarMenu;
exports.PictureFrameMenu = PictureFrameMenu;
exports.PictureSlideShowMenu = PictureSlideShowMenu;
exports.StyledLinkMenu = StyledLinkMenu;
exports.SubscriberBoxMenu = SubscriberBoxMenu;
exports.SubscriberCardMenu = SubscriberCardMenu;
exports.TextEditorMenu = TextEditorMenu;

var _reactMenu = require("@szhsin/react-menu");

require("@szhsin/react-menu/dist/index.css");

var _getContrastColor = _interopRequireDefault(require("../helpers/getContrastColor"));

var _ColorSelect = _interopRequireDefault(require("./customSelects/ColorSelect"));

var _OptionSelect = _interopRequireDefault(require("./customSelects/OptionSelect"));

var _MenuTooltipItems = require("./MenuTooltipItems");

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(FooterMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(HeaderMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(NavigationBarMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(LinkBoxMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(PictureFrameMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(StyledLinkMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(PictureSlideShowMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(TextEditorMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(MosaicMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(SubscriberCardMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(SubscriberBoxMenu);
(0, _reactMenu.applyStatics)(_reactMenu.SubMenu)(BackgroundMenu);

function BackgroundMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Website Background",
    key: "backgroundMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Background Options"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          color: (0, _getContrastColor.default)(props.webStyle.colors[props.webStyle.componentStyles.background.backgroundColor])
        },
        children: "Website Content"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuTooltipItems.FocusableItemTT, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-check",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-check-input me-3",
        type: "checkbox",
        checked: props.webStyle.componentStyles.background.applyBackground,
        onClick: function onClick() {
          return props.handleStyleToggle("background", "applyBackground");
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "form-check-label",
        for: "flexCheckDefault",
        children: "Apply Shadow to Background"
      })]
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
    ttText: "This is the color of the website margins",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Margin Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      value: props.webStyle.componentStyles.background.marginColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("background", "marginColor", selectedOption);
      },
      colors: props.webStyle.colors
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
    ttText: "This is the color of the inner website section",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      value: props.webStyle.componentStyles.background.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("background", "backgroundColor", selectedOption);
      },
      colors: props.webStyle.colors
    })]
  }));
}

function SubscriberCardMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Subscription Card",
    key: "subscriberCardMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Subscriber Card Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-column flex-grow-1",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: " border p-2 text-center mt-3 ",
          style: {
            backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor],
            color: props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.headerTextColor]
          },
          children: "Subscription Card"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: " border p-2 text-center mb-3 ",
          style: {
            backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.bodyBackgroundColor],
            color: props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.bodyTextColor]
          },
          children: "Description"
        })]
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Header Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.headerTextColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriptionCard", "headerTextColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Body Text Colors: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.bodyTextColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriptionCard", "bodyTextColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Header Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriptionCard", "headerBackgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Body Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.bodyBackgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriptionCard", "bodyBackgroundColor", selectedOption);
      }
    })]
  }));
}

function SubscriberBoxMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Subscribe-to Newsletter",
    key: "subscriberBoxMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Newsletter Box Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.backgroundColor],
          color: props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.headerTextColor]
        },
        children: "New Subscriber Box"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.headerTextColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriberBox", "headerTextColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("subscriberBox", "backgroundColor", selectedOption);
      }
    })]
  }));
}

function FooterMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Footer",
    key: "footerStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Footer Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          color: props.webStyle.colors[props.webStyle.componentStyles.footer.textColor]
        },
        children: "Footer Content"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Social Icon Colors: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.footer.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("footer", "textColor", selectedOption);
      }
    })]
  }));
} // TODO


function MosaicMenu(props) {
  var componentMap = {
    LP: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "m-2 py-2 px-5 border border-dark bg-light text-center",
      children: "Picture Frame"
    }),
    RP: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "m-2 py-2 px-5 border border-dark bg-light text-center",
      children: "Picture Frame"
    }),
    LL: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "m-2 py-2 px-5 border border-dark bg-light text-center",
      children: "Link Box"
    }),
    RL: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "m-2 py-2 px-5 border border-dark bg-light text-center",
      children: "Link Box"
    })
  };
  var arrangement = props.webStyle.componentStyles.mosaic.arrangement;
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Mosiac",
    key: "mosaicMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Mosaic Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex-grow-1 flex-row d-flex",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "d-flex flex-column",
          children: arrangement.split('-')[0].split(",").map(function (el) {
            return componentMap[el];
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "d-flex flex-column",
          children: arrangement.split('-')[1].split(",").map(function (el) {
            return componentMap[el];
          })
        })]
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-3",
      children: "Mosaic Arrangement: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("mosaic", "arrangement", selectedOption);
      },
      value: props.webStyle.componentStyles.mosaic.arrangement,
      classNamePrefix: "multi-line-option",
      options: [{
        value: "LP,LL-RL,RP",
        label: "Row 1:      Picture - Link\nRow 2:      Link   -   Picture"
      }, {
        value: 'LP,LL-RP,RL',
        label: "Row 1:      Picture - Picture\nRow 2:      Link   -    Link"
      }, {
        value: 'LL,LP-RP,RL',
        label: "Row 1:      Link   -   Picture\nRow 2:      Picture - Link"
      }]
    })]
  }));
}

function HeaderMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Header",
    key: "headerStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Header Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          color: props.webStyle.colors[props.webStyle.componentStyles.header.textColor]
        },
        children: "Header"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.header.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("header", "textColor", selectedOption);
      }
    })]
  }));
}

function NavigationBarMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Navigation Bar",
    key: "navbarStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Navigation Bar Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center mb-3 flex-grow-1 " + (props.webStyle.componentStyles.navigationBar.topBarMargin ? " my-3" : ""),
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.navigationBar.backgroundColor],
          color: props.webStyle.colors[props.webStyle.componentStyles.navigationBar.textColor]
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex-column d-flex",
          children: [props.webStyle.componentStyles.navigationBar.includeHeader && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "Header"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-flex flex-row " + props.webStyle.componentStyles.navigationBar.justifyButtons,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "mx-1",
              children: "Link"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "mx-2",
              children: "Link"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "mx-1",
              children: "Link"
            })]
          })]
        })
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "pt-3",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "me-2 form-check",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-check-input me-3",
        type: "checkbox",
        checked: props.webStyle.componentStyles.navigationBar.isSticky,
        onClick: function onClick() {
          return props.handleStyleToggle("navigationBar", "isSticky");
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "form-check-label",
        children: "Stick to Top *"
      }), props.webStyle.componentStyles.navigationBar.isSticky && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "ms-2 me-1",
          children: "-"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          for: "customRange2",
          className: "mx-2 ",
          children: ["Offset Y: ", parseFloat(props.webStyle.componentStyles.navigationBar.stickyOffsetY).toFixed(1)]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          value: props.webStyle.componentStyles.navigationBar.stickyOffsetY,
          onChange: function onChange(evt) {
            props.handleStyleChange("navigationBar", "stickyOffsetY", evt.target.value);
          },
          className: "ms-2 flex-grow-1",
          type: "range",
          min: "-10",
          max: "0",
          step: ".5",
          id: "customRange2"
        })]
      })]
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "me-2 form-check",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-check-input me-3",
        type: "checkbox",
        checked: props.webStyle.componentStyles.navigationBar.includeHeader,
        onClick: function onClick() {
          return props.handleStyleToggle("navigationBar", "includeHeader");
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "form-check-label",
        children: "Include Header Above Navbar"
      })]
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "me-2 form-check",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-check-input me-3",
        type: "checkbox",
        checked: props.webStyle.componentStyles.navigationBar.topBarMargin,
        onClick: function onClick() {
          return props.handleStyleToggle("navigationBar", "topBarMargin");
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "form-check-label",
        children: "Add Top Margin (Only effects top navigation bars)"
      })]
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Navigation Bar Style: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("navigationBar", "navbarStyle", selectedOption);
      },
      value: props.webStyle.componentStyles.navigationBar.navbarStyle,
      options: [{
        value: "fullWidth",
        label: "Full Width"
      }, {
        value: 'extendedWidth',
        label: "Extended"
      }, {
        value: 'px-5',
        label: "Component Style"
      }]
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Links Justify: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("navigationBar", "justifyButtons", selectedOption);
      },
      value: props.webStyle.componentStyles.navigationBar.justifyButtons,
      options: [{
        value: "justify-content-start",
        label: "Justify Left"
      }, {
        value: 'justify-content-end',
        label: "Justify Right"
      }, {
        value: 'justify-content-center',
        label: "Justify Center"
      }, {
        value: 'justify-content-around',
        label: "Space Around"
      }, {
        value: 'justify-content-between',
        label: "Space Between"
      }, {
        value: 'justify-content-evenly',
        label: "Space Evenly"
      }]
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.navigationBar.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("navigationBar", "backgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.navigationBar.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("navigationBar", "textColor", selectedOption);
      }
    })]
  }), props.webStyle.componentStyles.navigationBar.isSticky && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), props.webStyle.componentStyles.navigationBar.isSticky && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex flex-column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "mx-2 ",
        children: "* A sticky nav bar will be obscured by editor menus"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "mx-2",
        children: ["upon scrolling ( click ", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
          children: "X"
        }), " button to hide the ribbon) "]
      })]
    })
  }));
}

function LinkBoxMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Link Box",
    key: "linkBoxStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Link Box Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.linkBox.backgroundColor],
          color: props.webStyle.colors[props.webStyle.componentStyles.linkBox.textColor]
        },
        children: "Link Box"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.linkBox.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("linkBox", "backgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.linkBox.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("linkBox", "textColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Link Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.linkBox.linkColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("linkBox", "linkColor", selectedOption);
      }
    })]
  }));
}

function PictureSlideShowMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Picture Slide Show",
    key: "pictureSlideShowStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Picture Slide Show Box Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}));
}

function TextEditorMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Text Editor",
    key: "textEditorStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Text Editor Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.textEditor.backgroundColor],
          color: props.webStyle.colors[props.webStyle.componentStyles.textEditor.textColor]
        },
        children: "Text Editor"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.textEditor.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("textEditor", "backgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.textEditor.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("textEditor", "textColor", selectedOption);
      }
    })]
  }));
}

function StyledLinkMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Styled Link",
    key: "styledLinkStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Styled Link Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center my-3 flex-grow-1 " + (props.webStyle.componentStyles.styledLink.borderShape || props.webStyle.componentStyles.all.borderShape),
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.styledLink.backgroundColor],
          color: props.webStyle.colors[props.webStyle.componentStyles.styledLink.textColor]
        },
        children: "Styled Link"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.styledLink.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("styledLink", "backgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Text Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.styledLink.textColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("styledLink", "textColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-3",
      children: "Border Shape: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("styledLink", "borderShape", selectedOption);
      },
      value: props.webStyle.componentStyles.styledLink.borderShape,
      options: [{
        value: null,
        label: "Website Border Shape (Inherit)"
      }, {
        value: "rounded-0",
        label: "Square (None)"
      }, {
        value: 'rounded-1',
        label: "Round Corners 1"
      }, {
        value: 'rounded-2',
        label: "Round Corners 2"
      }, {
        value: 'rounded-3',
        label: "Round Corners 3"
      }, {
        value: 'rounded-4',
        label: "Round Corners 4"
      }, {
        value: 'rounded-5',
        label: "Round Corners 5"
      }, {
        value: 'rounded-6',
        label: "Round Corners 6"
      }]
    })]
  }));
}

function PictureFrameMenu(props) {
  return /*#__PURE__*/(0, _react.createElement)(_reactMenu.SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    label: "Picture Frame",
    key: "pictureStyleMenu",
    position: "auto",
    align: "end",
    menuoverflow: "auto",
    menuClassName: "border border-dark"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
    children: "Picture Frame Styles"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "focusItem1"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
    className: "p-0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MockMenuComponent, {
      webStyle: props.webStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " border p-2 mx-1 text-center my-3 flex-grow-1  ",
        style: {
          backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.pictureFrame.backgroundColor],
          color: (0, _getContrastColor.default)(props.webStyle.colors[props.webStyle.componentStyles.pictureFrame.backgroundColor])
        },
        children: "Picture Frame"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Background Color: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
      colors: props.webStyle.colors,
      value: props.webStyle.componentStyles.pictureFrame.backgroundColor,
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("pictureFrame", "backgroundColor", selectedOption);
      }
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "me-2",
      children: "Padding: "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
      onChange: function onChange(selectedOption) {
        props.handleSelectChange("pictureFrame", "padding", selectedOption);
      },
      value: props.webStyle.componentStyles.pictureFrame.padding,
      options: [{
        value: "",
        label: "None"
      }, {
        value: 'p-1 border',
        label: "Small Padding"
      }, {
        value: 'p-2 border',
        label: "Medium Small Padding"
      }, {
        value: 'p-3 border',
        label: "Medium Padding"
      }]
    })]
  }));
}

function MockMenuComponent(props) {
  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "px-5 justify-content-center w-100 div-relative",
    style: {
      backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.background.marginColor],
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-0 px-5 d-flex",
      style: {
        backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.background.backgroundColor],
        boxShadow: props.webStyle.componentStyles.background.applyBackground ? borderAndShadow : "none"
      },
      children: props.children
    })
  });
}