"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPreferencesContext = void 0;
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

var _MenuTooltipItems = require("./styleEditorComponents/MenuTooltipItems");

var _Website = require("./Website");

var _ColorSelect = _interopRequireDefault(require("./styleEditorComponents/customSelects/ColorSelect"));

var _OptionSelect = _interopRequireDefault(require("./styleEditorComponents/customSelects/OptionSelect"));

var _ComponentMenus = require("./styleEditorComponents/ComponentMenus");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UserPreferencesContext = /*#__PURE__*/(0, _react.createContext)();
exports.UserPreferencesContext = UserPreferencesContext;

function StylesEditor(props) {
  var _componentStyleMenus;

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

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      componentsFilter = _useState8[0],
      setComponentsFilter = _useState8[1];

  var _useState9 = (0, _react.useState)({
    showTooltips: true
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      userEditorPreferences = _useState10[0],
      setUserEditorPreferences = _useState10[1];

  var setShowTooltips = function setShowTooltips(isShowTooltips) {
    setUserEditorPreferences(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        showTooltips: isShowTooltips
      });
    });
  };

  var location = (0, _reactRouterDom.useLocation)();
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    if (pages) setTempPages(pages); // alert("Page change")
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

  var handleStyleToggle = function handleStyleToggle(component, key) {
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      componentStyles: _objectSpread(_objectSpread({}, webStyle.componentStyles), {}, _defineProperty({}, component, _objectSpread(_objectSpread({}, webStyle.componentStyles[component]), {}, _defineProperty({}, key, !webStyle.componentStyles[component][key]))))
    }));
  };

  var handleStyleChange = function handleStyleChange(component, key, value) {
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      componentStyles: _objectSpread(_objectSpread({}, webStyle.componentStyles), {}, _defineProperty({}, component, _objectSpread(_objectSpread({}, webStyle.componentStyles[component]), {}, _defineProperty({}, key, value))))
    }));
  };

  var handleSelectChange = function handleSelectChange(component, key, selectResults) {
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      componentStyles: _objectSpread(_objectSpread({}, webStyle.componentStyles), {}, _defineProperty({}, component, _objectSpread(_objectSpread({}, webStyle.componentStyles[component]), {}, _defineProperty({}, key, selectResults.selectedOption.value))))
    }));
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

  var componentStyleMenus = (_componentStyleMenus = {
    "Photo Gallery": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.PhotoGalleryMenu, {
      webStyle: webStyle,
      handleStyleToggle: handleStyleToggle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    Background: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.BackgroundMenu, {
      webStyle: webStyle,
      handleStyleToggle: handleStyleToggle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    Footer: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.FooterMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    Header: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.HeaderMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Styled Link": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.StyledLinkMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Subscriber Card": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.SubscriberCardMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Mosaic": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.MosaicMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Picture Frame": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.PictureFrameMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    // "Picture Slide Show": <PictureSlideShowMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange}/>,
    "Text Editor": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.TextEditorMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Navigation Bar": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.NavigationBarMenu, {
      webStyle: webStyle,
      handleStyleToggle: handleStyleToggle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    }),
    "Link Box": /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.LinkBoxMenu, {
      webStyle: webStyle,
      handleSelectChange: handleSelectChange,
      handleStyleChange: handleStyleChange
    })
  }, _defineProperty(_componentStyleMenus, "Picture Frame", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.PictureFrameMenu, {
    webStyle: webStyle,
    handleSelectChange: handleSelectChange,
    handleStyleChange: handleStyleChange
  })), _defineProperty(_componentStyleMenus, "Subscriber Box", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMenus.SubscriberBoxMenu, {
    webStyle: webStyle,
    handleSelectChange: handleSelectChange,
    handleStyleChange: handleStyleChange
  })), _componentStyleMenus);
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
      menuClassName: "border border-dark",
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
  var socialMediaLinks = socialMedias || [];
  var socialMediaLinkComponents = socialMediaLinks.map(function (_ref2, index) {
    var location = _ref2.location,
        link = _ref2.link;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
      label: location,
      menuClassName: "border border-dark",
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
      menuClassName: "border border-dark",
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
      position: "fixed",
      top: 0,
      zIndex: 999
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserPreferencesContext.Provider, {
      value: {
        userEditorPreferences: userEditorPreferences,
        setShowTooltips: setShowTooltips
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "row m-auto w-100 ",
        style: {
          zIndex: 2
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "col text-start " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
            className: " dropdown",
            menuClassName: "border border-dark",
            menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
              className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faPalette
              })
            }),
            transition: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: "Color & Style Options"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
              label: "Color Options",
              menuClassName: "border border-dark",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Main Colors"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.FocusableItem, {
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuTooltipItems.MenuItemTT, {
                ttText: "Click to invert the website colors - Use this to toggle \"darkmode\"",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
                  className: "btn p-0",
                  onClick: function onClick(evt) {
                    invertColors();
                    evt.stopPropagation();
                  },
                  children: "Invert Main Colors"
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
              label: "Website Styles",
              menuClassName: "border border-dark",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Website Borders"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: "This is the default border thickness",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Border Thickness: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "borderSize", selectedOption);
                  },
                  value: webStyle.componentStyles.all.borderSize,
                  options: [{
                    value: 0,
                    label: "No Border"
                  }, {
                    value: .25,
                    label: "0.25px - Super Thin Border"
                  }, {
                    value: .5,
                    label: "0.5px - Extra Thin Border"
                  }, {
                    value: 1,
                    label: "1px - Thin Border"
                  }, {
                    value: 1.5,
                    label: "1.5px - Medium Border"
                  }, {
                    value: 2,
                    label: "2px - Thicker Border"
                  }, {
                    value: 3,
                    label: "3px - Thick Border"
                  }, {
                    value: 4,
                    label: "4px - Extra Thick Border"
                  }]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: webStyle.componentStyles.all.borderSize === 0 ? "Change border thickness to set border color." : "This is the default component border color",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-3",
                  children: "Border Color:"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
                  isDisabled: webStyle.componentStyles.all.borderSize === 0,
                  colors: webStyle.colors,
                  value: webStyle.componentStyles.all.borderColor,
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "borderColor", selectedOption);
                  }
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: "This is the shape of the component borders",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-3",
                  children: "Border Shape: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "borderShape", selectedOption);
                  },
                  value: webStyle.componentStyles.all.borderShape,
                  options: [{
                    value: "",
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Component Shadows"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: "This is the default shadow style",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Shadow Style: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "shadowStyle", selectedOption);
                  },
                  value: webStyle.componentStyles.all.shadowStyle,
                  options: [{
                    value: "#00000000 0px 0px 25px 0px",
                    label: "None"
                  }, {
                    label: "Hover Shadows",
                    options: [{
                      value: "C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px ",
                      label: "Hover 1"
                    }, {
                      value: "C30 0px 10px 20px, C3b 0px 6px 6px",
                      label: "Hover 2"
                    }, {
                      value: "C40 0px 50px 100px -20px, C4d 0px 30px 60px -30px, C59 0px -2px 6px 0px inset",
                      label: "Hover 3"
                    }, {
                      value: "C40 0px 50px 100px -20px, C4d 0px 30px 60px -30px",
                      label: "Hover 4"
                    }]
                  }, {
                    label: "Button Styles",
                    options: [{
                      value: "C66 0px 2px 4px, C4d 0px 7px 13px -3px, C33 0px -3px 0px inset",
                      label: "Button"
                    }, {
                      value: "C66 0px 2px 4px, C4d 0px 10px 13px -3px, C33 0px -5px 0px inset",
                      label: "Button 2"
                    }, {
                      value: "C66 0px 2px 4px, C4d 0px 10px 13px -3px, C33 0px -5px 0px inset, C 0px -5px 1px 1px inset",
                      label: "Button w/ Border"
                    }]
                  }, {
                    label: "Stacked Styles",
                    options: [{
                      value: "C66 -5px 5px",
                      label: "Stacked"
                    }, {
                      value: "C66 -5px 5px, C4d -10px 10px",
                      label: "Stacked 2"
                    }, {
                      value: "C66 -5px 5px, C4d -10px 10px, C33 -15px 15px",
                      label: "Stacked 3"
                    }, {
                      value: "C66 -5px 5px, C4d -10px 10px, C33 -15px 15px, C1A -20px 20px",
                      label: "Stacked 4"
                    }, {
                      value: "C66 -5px 5px, C4d -10px 10px, C33 -15px 15px, C1A -20px 20px,\n              C0d -25px 25px",
                      label: "Stacked 5"
                    }]
                  }].concat(_toConsumableArray(props.customShadowStyles))
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: "This is the default shadow color",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Shadow Color: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorSelect.default, {
                  value: webStyle.componentStyles.all.shadowColor,
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "shadowColor", selectedOption);
                  },
                  colors: webStyle.colors,
                  default: webStyle.componentStyles.all.shadowColor
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Misc Settings"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuTooltipItems.FocusableItemTT, {
                ttText: "This is the link color",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "me-2",
                  children: "Link Style: "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionSelect.default, {
                  onChange: function onChange(selectedOption) {
                    handleSelectChange("all", "linkStyle", selectedOption);
                  },
                  value: webStyle.componentStyles.all.linkStyle,
                  options: [{
                    value: "text-decoration-none",
                    label: "None"
                  }, {
                    value: "text-decoration-underline",
                    label: "Underline"
                  }, {
                    value: "fw-bold text-decoration-none",
                    label: "Bold"
                  }, {
                    value: "fw-bold",
                    label: "Bold + Underline"
                  }]
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
              label: "Component Styles",
              menuClassName: "border border-dark",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
                children: "Individual Component Options"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
                children: function children(_ref3) {
                  var ref = _ref3.ref;
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                    className: "border-0 border-bottom",
                    ref: ref,
                    type: "text",
                    placeholder: "Search By Components",
                    value: componentsFilter,
                    onChange: function onChange(e) {
                      return setComponentsFilter(e.target.value);
                    }
                  });
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), Object.keys(componentStyleMenus).filter(function (components) {
                return components.toUpperCase().includes(componentsFilter.trim().toUpperCase());
              }).sort(function (componentA, componentB) {
                return componentA > componentB ? 1 : -1;
              }).map(function (component) {
                return componentStyleMenus[component];
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "col text-start " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
            className: " dropdown",
            menuClassName: "border border-dark",
            menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
              className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faUserCog
              })
            }),
            transition: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: "Site Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.FocusableItem, {
              className: "form-control",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                className: "border-0",
                value: webStyle.siteName,
                type: "text",
                onChange: function onChange(evt) {
                  return appMethods.setWebStyle(function (prevState) {
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                      siteName: evt.target.value
                    });
                  });
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
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
                  className: "form-check-label",
                  children: "Current Draft"
                }), adminSettings.autoUpdateLiveWebsite && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "form-check-label",
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuDivider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
              label: "Editor Settings",
              menuClassName: "border border-dark",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                  onClick: function onClick(evt) {
                    setShowTooltips(!userEditorPreferences.showTooltips);
                    evt.stopPropagation();
                  },
                  children: [userEditorPreferences.showTooltips ? "Hide" : "Show", " Tooltips"]
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "col text-center " + (localDisplaySettings.isMobile ? "mx-1 g-0" : "mx-4"),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.Menu, {
            className: "nav-item dropdown",
            menuClassName: "border border-dark",
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
              menuClassName: "border border-dark",
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
            menuClassName: "border border-dark",
            menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
              className: "styleEditorIcon dropdown-toggle font-shrink-md m-0",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeBrandsSvgIcons.faTwitter
              })
            }),
            transition: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuHeader, {
              children: "Your Social Media Links"
            }), socialMediaLinkComponents, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
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
              icon: _freeSolidSvgIcons.faXmark
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
    })
  });
}