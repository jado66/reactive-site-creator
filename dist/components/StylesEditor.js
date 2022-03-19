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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function StylesEditor(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      siteIsDraft = _useContext.siteIsDraft,
      webStyle = _useContext.webStyle,
      localDisplaySettings = _useContext.localDisplaySettings,
      pages = _useContext.pages,
      socialMedias = _useContext.socialMedias,
      appMethods = _useContext.appMethods,
      apiMethods = _useContext.apiMethods,
      adminSettings = _useContext.adminSettings,
      promoCodes = _useContext.promoCodes;

  var _useState = (0, _react.useState)(pages),
      _useState2 = _slicedToArray(_useState, 2),
      tempPages = _useState2[0],
      setTempPages = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowSavePagesButton = _useState4[0],
      showSavePagesButton = _useState4[1];

  var _useState5 = (0, _react.useState)(["NA", -1]),
      _useState6 = _slicedToArray(_useState5, 2),
      lastPathChange = _useState6[0],
      setLastPathChange = _useState6[1];

  var location = (0, _reactRouterDom.useLocation)();
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    setTempPages(pages); // alert("Page change")
  }, [pages]);

  var updateTempPage = function updateTempPage(key, value, index) {
    var newPage = _objectSpread(_objectSpread({}, tempPages[index]), {}, _defineProperty({}, key, value));

    showSavePagesButton(true);
    setTempPages([].concat(_toConsumableArray(tempPages.slice(0, index)), [newPage], _toConsumableArray(tempPages.slice(index + 1))));
  };

  var savePageChanges = function savePageChanges() {
    appMethods.setPages(tempPages);
    showSavePagesButton(false); // 

    if (location.pathname === lastPathChange[0]) {
      var newRoute = tempPages[lastPathChange[1]].path;
      history.push(newRoute);
    }
  };

  var deletePage = function deletePage(pageName, index) {
    var sureDelete = prompt("Are you sure you would like to delete the page ".concat(pageName, "? This action is irreversible. Type \"YES\" to delete this page:"), "");

    if (sureDelete === "YES") {
      setTempPages([].concat(_toConsumableArray(tempPages.slice(0, index)), _toConsumableArray(tempPages.slice(index + 1))));
      appMethods.setPages([].concat(_toConsumableArray(pages.slice(0, index)), _toConsumableArray(pages.slice(index + 1))));
    }
  };

  var addPage = function addPage() {
    var newID = generatePageKey();
    var newPage = {
      id: newID,
      path: "/new-page",
      name: "New Page",
      components: [{
        name: "Header",
        id: "Page-".concat(newID, "-Header-0-000"),
        content: {}
      }, {
        name: "NavigationBar",
        id: "Page-".concat(newID, "-NavBar-1-001"),
        content: {}
      }]
    };
    setTempPages([].concat(_toConsumableArray(tempPages), [newPage]));
    appMethods.setPages([].concat(_toConsumableArray(pages), [newPage]));
  };

  var generatePageKey = function generatePageKey() {
    var newID = -1;

    while (newID === -1) {
      newID = String(new Date().getTime()).slice(-3); // Check if newID exists

      pages.forEach(function (page) {
        if (newID === page.id) {
          newID = -1;
        }
      });
    }

    return newID;
  };

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

  var handleComponentStyleChange = function handleComponentStyleChange(component, style, value) {
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      componentStyles: _objectSpread(_objectSpread({}, webStyle.componentStyles), {}, _defineProperty({}, component, _objectSpread(_objectSpread({}, webStyle.componentStyles[component]), {}, _defineProperty({}, style, value))))
    }));
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
    value: "LinkedinIn",
    children: "Linkedin"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Patreon"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    children: "Pinterest"
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
  var pageMenus = tempPages.map(function (_ref, index) {
    var name = _ref.name,
        path = _ref.path;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
      label: name,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
        children: ["Name: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          value: name,
          onChange: function onChange(e) {
            updateTempPage("name", e.target.value, index);
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
            updateTempPage("path", e.target.value, index);
            setLastPathChange([path, index]);
          },
          style: {
            width: "90px",
            borderWidth: "0px 0px 1px 0px",
            background: "none"
          }
        })]
      }), isShowSavePagesButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        onClick: function onClick() {
          savePageChanges();
        },
        children: "Save Page Changes"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: path,
          children: "Visit Page"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          onClick: function onClick() {
            deletePage(name, index);
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
  var showRibbonClass = ""; // 

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
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPalette
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
            label: "Colors",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: "Main Colors"
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
              }), "-  Light Shade (Background)"]
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
              }), " -  Light Accent"]
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
              }), " - Dark Accent"]
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
              }), " - Dark Shade (Font) "]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                onClick: invertColors,
                children: "Invert Main Colors"
              }), " "]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.SubMenu, {
            label: "Component Styles",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
              label: "Header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Default Styles"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Size: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                  value: webStyle.componentStyles.header.size,
                  onChange: function onChange(evt) {
                    handleComponentStyleChange("header", "size", evt.target.value);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "h1",
                    children: "X-Large (h1)"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "h2",
                    children: "Large (h2)"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "h3",
                    children: "Medium (h3)"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "h4",
                    children: "Small (h4)"
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Text Color: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                  value: webStyle.componentStyles.header.textColor,
                  onChange: function onChange(evt) {
                    handleComponentStyleChange("header", "textColor", evt.target.value);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "lightShade",
                    children: "Light Shade"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "lightAccent",
                    children: "Light Accent"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "mainBrandColor",
                    children: "Main Brand Color"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "darkAccent",
                    children: "Dark Accent"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                    value: "darkShade",
                    children: "Dark Shade"
                  })]
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
          className: "nav-item dropdown",
          menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
            className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faUserCog
            })
          }),
          transition: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
            children: "Mode"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check ms-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "radio",
              checked: adminSettings.isEditMode,
              onClick: function onClick(evt) {
                appMethods.toggleViewDraftEdits(true);
                appMethods.setAdminSettings(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    isEditMode: true
                  });
                });
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "Edit Site"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
            className: "form-check ms-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-check-input me-2",
              type: "radio",
              checked: !adminSettings.isEditMode,
              onClick: function onClick(evt) {
                appMethods.setAdminSettings(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    isEditMode: false
                  });
                });
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label",
              children: "View As Guest"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), adminSettings.isEditMode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: adminSettings.autoUpdateLiveWebsite ? "Auto publishing to" : "You are editing"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
              className: "form-check",
              children: [adminSettings.autoSaveEditsLocally && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label mx-auto",
                children: "Current Draft"
              }), adminSettings.autoUpdateLiveWebsite && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label mx-auto",
                children: "Live Website"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
              className: "form-check ms-3",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                className: "form-check-input me-2",
                type: "checkbox",
                checked: adminSettings.autoUpdateLiveWebsite,
                onClick: function onClick(evt) {
                  if (window.confirm("Are you sure you would like to auto publish ALL edits?")) {
                    appMethods.setAdminSettings(function (prevState) {
                      return _objectSpread(_objectSpread({}, prevState), {}, {
                        autoSaveEditsLocally: !prevState.autoSaveEditsLocally,
                        autoUpdateLiveWebsite: prevState.autoSaveEditsLocally
                      });
                    });
                  }
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label",
                children: "Auto Publish"
              })]
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: "You are viewing"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
              className: "form-check ms-3",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                className: "form-check-input me-2",
                type: "radio",
                checked: adminSettings.viewDraftEdits,
                onClick: function onClick() {
                  return appMethods.toggleViewDraftEdits(true);
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label",
                children: "Current Draft"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
              className: "form-check ms-3",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                className: "form-check-input me-2",
                type: "radio",
                checked: !adminSettings.viewDraftEdits,
                onClick: function onClick() {
                  return appMethods.toggleViewDraftEdits(false);
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label",
                children: "Live Website"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              onClick: function onClick(evt) {
                appMethods.setAdminSettings(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    isShowEditor: false
                  });
                });
              },
              children: "Hide Editor Ribbon"
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
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
              return addPage();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPlus
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.SubMenu, {
            label: "Error Page (404)",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/404",
                children: "Visit Page"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
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
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
          className: "styleEditorIcon font-shrink-md m-0",
          onClick: function onClick() {
            return appMethods.saveWebsite();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faUpload
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
          className: "styleEditorIcon font-shrink-md m-0",
          onClick: function onClick() {
            appMethods.toggleStyleEditor();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faTimes
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col text-center align-self-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
        children: [siteIsDraft ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faTriangleExclamation
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faTowerBroadcast
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            whiteSpace: "nowrap"
          },
          className: " font-shrink fw-bold mx-3",
          children: siteIsDraft ? "Draft Site" : "Live Site"
        })]
      })]
    })
  });
}