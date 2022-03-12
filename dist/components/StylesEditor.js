"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StylesEditor(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      pages = _useContext.pages,
      socialMedias = _useContext.socialMedias,
      appMethods = _useContext.appMethods,
      promoCodes = _useContext.promoCodes;

  var handleInputChange = function handleInputChange(e) {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleColorChange = function handleColorChange(e) {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      colors: _objectSpread(_objectSpread({}, webStyle.colors), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };

  var handleCheckBox = function handleCheckBox(e, name) {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, _defineProperty({}, name, !webStyle[name])));
  };

  var invertColors = function invertColors() {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      colors: _objectSpread(_objectSpread({}, webStyle.colors), {}, {
        lightShade: webStyle.colors.darkShade,
        lightAccent: webStyle.colors.darkAccent,
        darkAccent: webStyle.colors.lightAccent,
        darkShade: webStyle.colors.lightShade
      })
    }));
  };

  var socialMediaSelectOptions = [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Facebook"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Twitter"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Instagram"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Youtube"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Tiktok"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Discord"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Etsy"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Github"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Imdb"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "LinkedinIn"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Patreon"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "PinterestP"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Reddit"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Shopify"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Spotify"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Soundcloud"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Snapchat"
  })];
  var pageMenus = pages.map(function (_ref, index) {
    var name = _ref.name,
        path = _ref.path;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
      label: name,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
        children: ["Name: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          value: name,
          onChange: function onChange(e) {
            appMethods.handlePageNameChange(index, e.target.value);
          },
          style: {
            width: "90px",
            borderWidth: "0px 0px 1px 0px",
            background: "none"
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
        children: ["Path: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          value: path,
          onChange: function onChange(e) {
            appMethods.handlePagePathChange(index, e.target.value);
          },
          style: {
            width: "90px",
            borderWidth: "0px 0px 1px 0px",
            background: "none"
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: path,
          children: "Visit Page"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          onClick: function onClick() {
            appMethods.deletePage(name, index);
          },
          children: "Delete Page"
        })
      })]
    });
  });
  var socialMediaLinks = socialMedias.map(function (_ref2, index) {
    var location = _ref2.location,
        link = _ref2.link;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
      label: location,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
        children: ["Site: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          onChange: function onChange(e) {
            appMethods.handleSocialSiteChange(index, e.target.value);
          },
          value: location,
          children: socialMediaSelectOptions
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
        children: ["link: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          value: link,
          onChange: function onChange(e) {
            appMethods.handleSocialLinkChange(index, e.target.value);
          },
          name: "homePageName",
          style: {
            width: "90px",
            borderWidth: "0px 0px 1px 0px",
            background: "none"
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: link,
          children: "Visit Link"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          onClick: function onClick() {
            appMethods.deleteSocialMedia(location, index);
          },
          children: "Delete Link"
        })
      })]
    });
  });
  var promoCodeMenus = Object.keys(promoCodes).map(function (code, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
      label: code,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "input-group-text",
            children: "Code"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            className: "form-control",
            placeholder: "Promo Code",
            value: code
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "input-group-text",
            children: "Type"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
            className: "form-select",
            "aria-label": "Default select example",
            value: promoCodes[code].type,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              selected: true,
              style: {
                display: "none"
              },
              children: "Pick A Type"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              children: "% Off"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              children: "$ Off"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              children: "Free"
            })]
          })]
        })
      }), promoCodes[code].value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "input-group-text",
            children: "Value"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "number",
            className: "form-control",
            value: promoCodes[code].value
          })]
        })
      })]
    });
  });
  var showRibbonClass = webStyle.isAdmin && webStyle.isShowEditor ? "" : "hidden";
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "nav nav-fill container-fluid border-bottom border-dark g-0 bg-light  " + showRibbonClass,
    style: {
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      zIndex: 999
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "row m-auto w-100 ",
      style: {
        zIndex: 2
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPalette
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
            children: "Colors"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "color",
              value: webStyle.colors.lightShade,
              name: "lightShade",
              onChange: handleColorChange,
              style: {
                border: "none",
                background: "none",
                width: "50px",
                height: "40px",
                padding: "0"
              }
            }), "-  Background Color"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "color",
              value: webStyle.colors.lightAccent,
              onChange: handleColorChange,
              name: "lightAccent",
              style: {
                border: "none",
                background: "none",
                width: "50px",
                height: "40px",
                padding: "0"
              }
            }), " -  Primary Accent"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "color",
              value: webStyle.colors.mainBrandColor,
              onChange: handleColorChange,
              name: "mainBrandColor",
              style: {
                border: "none",
                background: "none",
                width: "50px",
                height: "40px",
                padding: "0"
              }
            }), " -  Main Brand Color"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "color",
              value: webStyle.colors.darkAccent,
              onChange: handleColorChange,
              name: "darkAccent",
              style: {
                border: "none",
                background: "none",
                width: "50px",
                height: "40px",
                padding: "0"
              }
            }), " - Secondary Accent"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "color",
              value: webStyle.colors.darkShade,
              onChange: handleColorChange,
              name: "darkShade",
              style: {
                border: "none",
                background: "none",
                width: "50px",
                height: "40px",
                padding: "0"
              }
            }), " - Secondary Shade (Font) "]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: invertColors,
              children: "Invert Color Scheme"
            }), " "]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faUserCog
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "checkbox",
              checked: webStyle.isEditMode,
              onClick: function onClick(evt) {
                handleCheckBox(evt, "isEditMode");
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "Admin Edit Mode"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "checkbox",
              checked: webStyle.isShowEditor,
              onClick: function onClick(evt) {
                handleCheckBox(evt, "isShowEditor");
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "Show Admin Editor"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "checkbox",
              checked: webStyle.autoSaveEditsLocally,
              onClick: function onClick(evt) {
                handleCheckBox(evt, "autoSaveEditsLocally");
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "Auto Save Locally"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "checkbox",
              checked: false
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "Auto Save To DB"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
              to: "/admin",
              children: "Visit Admin Page"
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeRegularSvgIcons.faFile
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
            children: "Your Website Pages"
          }), pageMenus, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorSubmenuIcon ",
            onClick: function onClick() {
              return appMethods.addPage();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPlus
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.SubMenu, {
            label: "Checkout Page",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/checkout",
                children: "Visit Page"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.SubMenu, {
            label: "Admin Page",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/admin",
                children: "Visit Admin Page"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown ",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeBrandsSvgIcons.faTwitter
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
            children: "Your Social Media Links"
          }), socialMediaLinks, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorSubmenuIcon",
            onClick: function onClick() {
              return appMethods.addSocialMedia();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPlus
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faShoppingBag
            })
          }),
          transition: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
            label: "Promo Codes",
            children: [promoCodeMenus, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              className: "justify-content-center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                onClick: function onClick() {
                  alert("Add Promo Code");
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  icon: _freeSolidSvgIcons.faPlus
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
          className: "styleEditorIcon font-shrink-md m-0",
          onClick: function onClick() {
            return appMethods.saveWebsite();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faSave
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (webStyle.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
          className: "styleEditorIcon font-shrink-md m-0",
          onClick: function onClick() {
            appMethods.toggleStyleEditor();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faTimes
          })
        })
      })]
    })
  });
}