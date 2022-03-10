"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StylesEditor;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _reactMenu = require("@szhsin/react-menu");

require("@szhsin/react-menu/dist/index.css");

require("@szhsin/react-menu/dist/transitions/slide.css");

var _reactRouterDom = require("react-router-dom");

var _Website = require("./Website");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StylesEditor(props) {
  const {
    webStyle,
    pages,
    socialMedias,
    appMethods,
    promoCodes
  } = (0, _react.useContext)(_Website.WebContext);

  const handleInputChange = e => {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckBox = (e, name) => {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      [name]: !webStyle[name]
    }));
  };

  const invertColors = () => {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      lightShade: webStyle.darkShade,
      lightAccent: webStyle.darkAccent,
      darkAccent: webStyle.lightAccent,
      darkShade: webStyle.lightShade
    }));
  };

  const socialMediaSelectOptions = [/*#__PURE__*/_react.default.createElement("option", null, "Facebook"), /*#__PURE__*/_react.default.createElement("option", null, "Twitter"), /*#__PURE__*/_react.default.createElement("option", null, "Instagram"), /*#__PURE__*/_react.default.createElement("option", null, "Youtube"), /*#__PURE__*/_react.default.createElement("option", null, "Tiktok"), /*#__PURE__*/_react.default.createElement("option", null, "Discord"), /*#__PURE__*/_react.default.createElement("option", null, "Etsy"), /*#__PURE__*/_react.default.createElement("option", null, "Github"), /*#__PURE__*/_react.default.createElement("option", null, "Imdb"), /*#__PURE__*/_react.default.createElement("option", null, "LinkedinIn"), /*#__PURE__*/_react.default.createElement("option", null, "Patreon"), /*#__PURE__*/_react.default.createElement("option", null, "PinterestP"), /*#__PURE__*/_react.default.createElement("option", null, "Reddit"), /*#__PURE__*/_react.default.createElement("option", null, "Shopify"), /*#__PURE__*/_react.default.createElement("option", null, "Spotify"), /*#__PURE__*/_react.default.createElement("option", null, "Soundcloud"), /*#__PURE__*/_react.default.createElement("option", null, "Snapchat")];
  let pageMenus = pages.map((_ref, index) => {
    let {
      name,
      path
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
      label: name
    }, /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, "Name: ", /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: name,
      onChange: e => {
        appMethods.handleNameChange(index, e.target.value);
      },
      name: "homePageName",
      style: {
        width: "90px",
        borderWidth: "0px 0px 1px 0px",
        background: "none"
      }
    })), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, "Path: ", /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: path,
      onChange: e => {
        appMethods.handlePathChange(index, e.target.value);
      },
      name: "homePageName",
      style: {
        width: "90px",
        borderWidth: "0px 0px 1px 0px",
        background: "none"
      }
    })), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: path
    }, "Visit Page")), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement("a", {
      onClick: () => {
        appMethods.deletePage(name, index);
      }
    }, "Delete Page")));
  });
  let socialMediaLinks = socialMedias.map((_ref2, index) => {
    let {
      location,
      link
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
      label: location
    }, /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, "Site: ", /*#__PURE__*/_react.default.createElement("select", {
      onChange: e => {
        appMethods.handleSocialSiteChange(index, e.target.value);
      },
      value: location
    }, socialMediaSelectOptions)), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, "link: ", /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: link,
      onChange: e => {
        appMethods.handleSocialLinkChange(index, e.target.value);
      },
      name: "homePageName",
      style: {
        width: "90px",
        borderWidth: "0px 0px 1px 0px",
        background: "none"
      }
    })), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: link
    }, "Visit Link")), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement("a", {
      onClick: () => {
        appMethods.deleteSocialMedia(location, index);
      }
    }, "Delete Link")));
  });
  let promoCodeMenus = Object.keys(promoCodes).map((code, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
      label: code
    }, /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-text"
    }, "Code"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      placeholder: "Promo Code",
      value: code
    }))), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-text"
    }, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-select",
      "aria-label": "Default select example",
      value: promoCodes[code].type
    }, /*#__PURE__*/_react.default.createElement("option", {
      selected: true,
      style: {
        display: "none"
      }
    }, "Pick A Type"), /*#__PURE__*/_react.default.createElement("option", null, "% Off"), /*#__PURE__*/_react.default.createElement("option", null, "$ Off"), /*#__PURE__*/_react.default.createElement("option", null, "Free")))), promoCodes[code].value && /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-text"
    }, "Value"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      className: "form-control",
      value: promoCodes[code].value
    }))));
  });
  let showRibbonClass = webStyle.isAdmin && webStyle.isShowEditor ? "" : "hidden";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nav nav-fill container-fluid border-bottom border-dark g-0 bg-light  " + showRibbonClass,
    style: {
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      zIndex: 999
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row m-auto w-100 ",
    style: {
      zIndex: 2
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.Menu, {
    className: "nav-item dropdown",
    menuButton: /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
      className: "styleEditorIcon dropdown-toggle font-shrink-md m-0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPalette
    })),
    transition: true
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuHeader, null, "Colors"), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    value: webStyle.lightShade,
    name: "lightShade",
    onChange: handleInputChange,
    style: {
      border: "none",
      background: "none",
      width: "50px",
      height: "40px",
      padding: "0"
    }
  }), "-  Background Color"), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    value: webStyle.lightAccent,
    onChange: handleInputChange,
    name: "lightAccent",
    style: {
      border: "none",
      background: "none",
      width: "50px",
      height: "40px",
      padding: "0"
    }
  }), " -  Primary Accent"), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    value: webStyle.mainBrandColor,
    onChange: handleInputChange,
    name: "mainBrandColor",
    style: {
      border: "none",
      background: "none",
      width: "50px",
      height: "40px",
      padding: "0"
    }
  }), " -  Main Brand Color"), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    value: webStyle.darkAccent,
    onChange: handleInputChange,
    name: "darkAccent",
    style: {
      border: "none",
      background: "none",
      width: "50px",
      height: "40px",
      padding: "0"
    }
  }), " - Secoondary Accent"), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "color",
    value: webStyle.darkShade,
    onChange: handleInputChange,
    name: "darkShade",
    style: {
      border: "none",
      background: "none",
      width: "50px",
      height: "40px",
      padding: "0"
    }
  }), " - Secondary Shade (Font) "), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: invertColors
  }, "Invert Color Scheme"), " "))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.Menu, {
    className: "nav-item dropdown",
    menuButton: /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
      className: "styleEditorIcon dropdown-toggle font-shrink-md m-0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faUserCog
    })),
    transition: true
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, {
    className: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-check-input me-2",
    type: "checkbox",
    checked: webStyle.isEditMode,
    onClick: evt => {
      handleCheckBox(evt, "isEditMode");
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label"
  }, "Admin Edit Mode")), /*#__PURE__*/_react.default.createElement(_reactMenu.FocusableItem, {
    className: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-check-input me-2",
    type: "checkbox",
    checked: webStyle.isShowEditor,
    onClick: evt => {
      handleCheckBox(evt, "isShowEditor");
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label"
  }, "Show Admin Editor")), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/admin"
  }, "Visit Admin Page")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.Menu, {
    className: "nav-item dropdown",
    menuButton: /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
      className: "styleEditorIcon dropdown-toggle font-shrink-md m-0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeRegularSvgIcons.faFile
    })),
    transition: true
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuHeader, null, "Your Website Pages"), pageMenus, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
    className: "styleEditorSubmenuIcon ",
    onClick: () => appMethods.addPage()
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlus
  })), /*#__PURE__*/_react.default.createElement(_reactMenu.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
    label: "Checkout Page"
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/checkout"
  }, "Visit Page"))), /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
    label: "Admin Page"
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/admin"
  }, "Visit Admin Page"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.Menu, {
    className: "nav-item dropdown ",
    menuButton: /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
      className: "styleEditorIcon dropdown-toggle font-shrink-md m-0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeBrandsSvgIcons.faTwitter
    })),
    transition: true
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuHeader, null, "Your Social Media Links"), socialMediaLinks, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
    className: "styleEditorSubmenuIcon",
    onClick: () => appMethods.addSocialMedia()
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlus
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.Menu, {
    className: "nav-item dropdown",
    menuButton: /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
      className: "styleEditorIcon dropdown-toggle font-shrink-md m-0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faShoppingBag
    })),
    transition: true
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.SubMenu, {
    label: "Promo Codes"
  }, promoCodeMenus, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuItem, {
    className: "justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: () => {
      alert("Add Promo Code");
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlus
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
    className: "styleEditorIcon font-shrink-md m-0",
    onClick: () => appMethods.saveWebsite()
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSave
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4")
  }, /*#__PURE__*/_react.default.createElement(_reactMenu.MenuButton, {
    className: "styleEditorIcon font-shrink-md m-0",
    onClick: () => {
      appMethods.toggleStyleEditor();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes
  })))));
}