"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebContext = void 0;
exports.default = Website;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

require("../css/website.css");

require("../css/index.css");

require("bootstrap/dist/css/bootstrap.css");

require("../css/bootstrapOverrides.css");

var _StylesEditor = _interopRequireDefault(require("./StylesEditor"));

var _DynamicPage = _interopRequireDefault(require("./DynamicPage"));

var _StaticPage = _interopRequireDefault(require("./StaticPage"));

var _delayCallback = _interopRequireDefault(require("./helpers/delayCallback"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["isAdmin"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import {site_template} from "./websiteVersions/current"
var site_template = {
  siteName: "New Website",
  colors: {
    lightShade: "#EEE4E8",
    lightAccent: "#8BF6FD",
    mainBrandColor: "#1D92B2",
    darkAccent: "#1F4C57",
    darkShade: "#1C191E"
  },
  pages: [{
    id: "Page-1",
    name: "Home",
    path: "/",
    components: [{
      name: "Header",
      id: "Home-Header-0-000",
      content: {
        header: "New Website Home"
      }
    }, {
      name: "NavigationBar",
      id: "Home-NavBar-1-001 ",
      content: {}
    }]
  }, {
    id: "Page-2",
    name: "Blog",
    path: "/blog",
    components: [{
      name: "Header",
      id: "Blog-Header-0-000",
      content: {}
    }, {
      name: "NavigationBar",
      id: "Blog-NavBar-1-001",
      content: {}
    }]
  }],
  masterNavBarData: {
    homeLinkText: "home",
    navData: [{
      id: 1,
      name: "Blog",
      path: "/blog"
    }]
  },
  socialMedias: [{
    location: "Youtube",
    link: "https://youtube.com"
  }, {
    location: "Instagram",
    link: "https://instagram.com"
  }, {
    location: "Twitter",
    link: "https://instagram.com"
  }],
  promoCodes: {},
  pageData: _defineProperty({}, "Home", [{
    name: "Header",
    id: "Home-Header-0-000",
    content: {
      html: "New Website Home"
    }
  }, {
    name: "NavigationBar",
    id: "Home-NavBar-1-001 ",
    content: {}
  }])
};
var WebContext = /*#__PURE__*/(0, _react.createContext)();
exports.WebContext = WebContext;

function Website(_ref) {
  var _ref3;

  var _ref$isAdmin = _ref.isAdmin,
      isAdmin = _ref$isAdmin === void 0 ? true : _ref$isAdmin,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      siteIsDraft = _useState2[0],
      _setSiteIsDraft = _useState2[1];

  var apiMethods = {
    getFromDatabase: function getFromDatabase(id, componentState) {
      if (props.getFromDatabase) {
        props.getFromDatabase(id);
      }
    },
    setValueInDatabase: function setValueInDatabase(id, componentState) {
      if (props.saveComponentToDB) {
        props.saveComponentDataToDB(id, componentState);
      }
    },
    addNewSubscriber: function addNewSubscriber(formState) {
      if (props.addNewSubscriber) {
        props.addNewSubscriber(formState);
      }
    },
    setSiteIsDraft: function setSiteIsDraft(state) {
      return _setSiteIsDraft(state);
    }
  };

  var _useState3 = (0, _react.useState)({
    viewDraftEdits: true,
    autoSaveEditsLocally: true,
    autoUpdateLiveWebsite: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      storageSettings = _useState4[0],
      _setStorageSettings = _useState4[1];

  var _useContextStorage = useContextStorage(storageSettings, apiMethods, "webStyle", {
    siteName: site_template.siteName,
    isEditMode: props.isAdmin,
    isShowEditor: props.isAdmin,
    isAdmin: props.isAdmin,
    // Website colors
    colors: _objectSpread({}, site_template.colors),
    promoCodes: _objectSpread({}, site_template.promoCodes)
  }),
      _useContextStorage2 = _slicedToArray(_useContextStorage, 2),
      webStyle = _useContextStorage2[0],
      _setWebStyle = _useContextStorage2[1];

  var _useContextStorage3 = useContextStorage(storageSettings, apiMethods, "masterNavData", site_template.masterNavBarData),
      _useContextStorage4 = _slicedToArray(_useContextStorage3, 2),
      masterNavData = _useContextStorage4[0],
      _setMasterNavData = _useContextStorage4[1];

  var _useContextStorage5 = useContextStorage(storageSettings, apiMethods, "socialMedias", site_template.socialMedias),
      _useContextStorage6 = _slicedToArray(_useContextStorage5, 2),
      socialMedias = _useContextStorage6[0],
      _setSocialMedias = _useContextStorage6[1];

  var _useContextStorage7 = useContextStorage(storageSettings, apiMethods, "pages", site_template.pages),
      _useContextStorage8 = _slicedToArray(_useContextStorage7, 2),
      pages = _useContextStorage8[0],
      _setPages = _useContextStorage8[1];

  var _useContextStorage9 = useContextStorage(storageSettings, apiMethods, "promoCodes", site_template.pages),
      _useContextStorage10 = _slicedToArray(_useContextStorage9, 2),
      promoCodes = _useContextStorage10[0],
      _setPromoCodes = _useContextStorage10[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      cart = _useState6[0],
      _setCart = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      msgPort = _useState8[0],
      setMsgPort = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      savedData = _useState10[0],
      _setSavedData = _useState10[1];

  var componentOptions = ["Navigation Bar", "Header", "Footer", "Subscriber Box"].sort(); // const componentOptions = ["Product Comparison Table","Walk Through","Product Comparison Cards","Paragraph","Paragraph Backed","Quick Link","Navigation Bar","Header","Footer","Mosaic","Captioned Picture","Video Frame","Slide Show"].sort()

  var flatComponents = ["NavigationBar", "Header", "Footer", "CountDown", "ProductComparisonTable", "Subscriber Box"];
  var appMethods = {
    setWebStyle: function setWebStyle(state) {
      return _setWebStyle(state);
    },
    setMasterNavData: function setMasterNavData(state) {
      return _setMasterNavData(state);
    },
    setStorageSettings: function setStorageSettings(state) {
      return _setStorageSettings(state);
    },
    setCart: function setCart(state) {
      return _setCart(state);
    },
    setSocialMedias: function setSocialMedias(state) {
      return _setSocialMedias(state);
    },
    setPages: function setPages(state) {
      return _setPages(state);
    },
    sendMsgPortMsg: function sendMsgPortMsg(msg) {
      return setMsgPort(msg);
    },
    setSavedData: function setSavedData(state) {
      return _setSavedData(state);
    },
    setPromoCodes: function setPromoCodes(state) {
      return _setPromoCodes(state);
    },
    addToCart: function addToCart(cartItem) {
      // Check if we already have it in the cart
      if (cartItem.name in cart) {
        var newCart = _objectSpread({}, cart);

        newCart[cartItem.name].quantity += 1;

        _setCart(newCart);
      } else {
        var _newCart = _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, cartItem.name, cartItem));

        _setCart(_newCart);
      }
    },
    removeFromCart: function removeFromCart(itemName) {
      // Check if we already have it in the cart
      if (itemName in cart) {
        var newCart = _objectSpread({}, cart);

        delete newCart[itemName];

        _setCart(newCart);
      }
    },
    setCartItemQuantity: function setCartItemQuantity(itemName, quantity) {
      // This should only be called if the item already exists in the cart
      if (itemName in cart) {
        var newCart = _objectSpread({}, cart);

        newCart[itemName].quantity = parseInt(quantity);

        if (newCart[itemName].quantity === 0) {
          delete newCart[itemName];
        }

        _setCart(newCart); // localStorage.setItem("cart",JSON.stringify(newCart))

      } else {
        alert("Error: Item not found in cart");
      }
    },
    handlePageNameChange: function handlePageNameChange(index, name) {
      var newPage = _objectSpread(_objectSpread({}, pages[index]), {}, {
        name: name
      });

      _setPages([].concat(_toConsumableArray(pages.slice(0, index)), [newPage], _toConsumableArray(pages.slice(index + 1)))); // Callback to save to storage

    },
    handlePagePathChange: function handlePagePathChange(index, path) {
      var newPage = _objectSpread(_objectSpread({}, pages[index]), {}, {
        path: path
      });

      _setPages([].concat(_toConsumableArray(pages.slice(0, index)), [newPage], _toConsumableArray(pages.slice(index + 1))));
    },
    checkIfPageExists: function checkIfPageExists(path) {
      var pageExists = false;
      pages.forEach(function (page) {
        if (page.path === path) {
          pageExists = true;
        }
      });
      return pageExists;
    },
    deletePage: function deletePage(pageName, index) {
      var sureDelete = prompt("Are you sure you would like to delete the page ".concat(pageName, "? This action is irreversible. Type \"YES\" to delete this page:"), "");

      if (sureDelete === "YES") {
        _setPages([].concat(_toConsumableArray(pages.slice(0, index)), _toConsumableArray(pages.slice(index + 1))));
      }
    },
    addPage: function addPage() {
      // alert("New Page")
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

      _setPages([].concat(_toConsumableArray(pages), [newPage]));
    },
    // Social
    handleSocialSiteChange: function handleSocialSiteChange(index, location) {
      var newSocialMedia = {
        link: socialMedias[index].link,
        location: location
      };

      _setSocialMedias([].concat(_toConsumableArray(socialMedias.slice(0, index)), [newSocialMedia], _toConsumableArray(socialMedias.slice(index + 1)))); // Callback to save to storage

    },
    handleSocialLinkChange: function handleSocialLinkChange(index, link) {
      var newSocialMedia = {
        location: socialMedias[index].location,
        link: link
      };

      _setSocialMedias([].concat(_toConsumableArray(socialMedias.slice(0, index)), [newSocialMedia], _toConsumableArray(socialMedias.slice(index + 1))));
    },
    deleteSocialMedia: function deleteSocialMedia(location, index) {
      var sureDelete = window.confirm("Are you sure you would like to your social media link to ".concat(location));

      if (sureDelete) {
        _setSocialMedias([].concat(_toConsumableArray(socialMedias.slice(0, index)), _toConsumableArray(socialMedias.slice(index + 1))));
      }
    },
    addSocialMedia: function addSocialMedia() {
      var newSocialMedia = {
        location: "New Link",
        link: "/"
      };

      _setSocialMedias([].concat(_toConsumableArray(socialMedias), [newSocialMedia]));
    },
    saveWebsite: function saveWebsite() {
      // Check if user really wants to publish edits
      if (window.confirm("Are you sure you want to publish your edits?")) {
        // If the site-creator is connected to a database
        if (props.saveComponentToDB) {
          appMethods.sendMsgPortMsg("save");

          _setSiteIsDraft(false);
        } else {
          if (window.confirm("There is no database connection, thus continueing will result in losing your edits. Are you sure you want to continue?")) {
            appMethods.sendMsgPortMsg("save");

            _setSiteIsDraft(false);
          }
        }
      } else {
        alert("Please sign in as Admin to save");
      }
    },
    toggleStyleEditor: function toggleStyleEditor() {
      var newWebstyle = _objectSpread({}, webStyle);

      newWebstyle.isShowEditor = !newWebstyle.isShowEditor;

      _setWebStyle(newWebstyle);
    },
    saveComponentData: function saveComponentData(pageName, index, data) {
      var newSavedData = savedData;

      if (pageName in newSavedData) {
        newSavedData[pageName][index] = data;
      } else {
        newSavedData[pageName] = {};
        newSavedData[pageName][index] = data;
      }

      _setSavedData(newSavedData);
    }
  };

  function handleWindowSizeChange() {
    var isMobile = window.innerWidth <= 991;

    _setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      isMobile: isMobile
    }));
  } // Website init


  (0, _react.useEffect)(function () {
    setCartFromStorage();
    window.addEventListener('resize', handleWindowSizeChange);
    return function () {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  var setCartFromStorage = function setCartFromStorage() {
    // This stays as a local storage item
    var storedCart = JSON.parse(localStorage.getItem("cart"), 4, null);

    if (storedCart) {
      // storedCart = {}
      _setCart(storedCart);
    }
  };

  function handleWindowSizeChange() {
    var isMobile = window.innerWidth <= 991;

    _setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      isMobile: isMobile
    }));
  }

  function generatePageKey() {
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
  }

  (0, _react.useEffect)(function () {
    if (msgPort == "save") {
      appMethods.sendMsgPortMsg("");
    }
  }, [msgPort]);
  var sitePages = pages.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        path = _ref2.path,
        components = _ref2.components;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Route, {
      exact: true,
      path: path + "/:pathParam?",
      children: [webStyle.isAdmin && webStyle.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {}), webStyle.isEditMode === true ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicPage.default, {
        pageName: name,
        pageID: id,
        components: components,
        defaultComponentList: ["Header", "Navbar"],
        componentOptions: componentOptions
      }, id) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_StaticPage.default, {
        pageName: name,
        pageID: id,
        components: components
      }, id + "static")]
    }, name + "Route");
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WebContext.Provider, {
    value: (_ref3 = {
      webStyle: webStyle,
      socialMedias: socialMedias,
      masterNavData: masterNavData,
      pages: pages,
      promoCodes: promoCodes,
      cart: cart,
      storageSettings: storageSettings
    }, _defineProperty(_ref3, "storageSettings", storageSettings), _defineProperty(_ref3, "siteIsDraft", siteIsDraft), _defineProperty(_ref3, "msgPort", msgPort), _defineProperty(_ref3, "savedData", savedData), _defineProperty(_ref3, "flatComponents", flatComponents), _defineProperty(_ref3, "componentOptions", componentOptions), _defineProperty(_ref3, "appMethods", appMethods), _defineProperty(_ref3, "apiMethods", apiMethods), _ref3),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "App",
      style: {
        minHeight: "100vh",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Switch, {
          children: sitePages
        })
      })
    })
  });

  function useContextStorage(storageSettings, apiMethods, contextName, initialState) {
    var _useState11 = (0, _react.useState)(false),
        _useState12 = _slicedToArray(_useState11, 2),
        hasBeenMounted = _useState12[0],
        setHasBeenMounted = _useState12[1];

    var _useState13 = (0, _react.useState)(function () {
      return getStoredComponent(contextName, initialState, storageSettings, apiMethods);
    }),
        _useState14 = _slicedToArray(_useState13, 2),
        value = _useState14[0],
        setValue = _useState14[1];

    (0, _react.useEffect)(function () {
      // The use of has been mounted skips the first render.
      // Since we are programatically changing value we don't need to update our storage
      if (hasBeenMounted) {
        // Set live content from database
        if (storageSettings.autoUpdateLiveWebsite) {
          if (apiMethods.isAthenticated()) {
            apiMethods.setValueInDatabase(contextName, JSON.stringify(value));
          }
        } // Store draft data locally
        else if (storageSettings.autoSaveEditsLocally) {
          localStorage.setItem(contextName, JSON.stringify(value)); // TODO get this to work

          informSiteOfDraftEdits(apiMethods);
        }
      } else {
        setHasBeenMounted(true);
      }
    }, [value]);
    return [value, setValue];
  }
}

function getStoredComponent(contextName, initialValue, storageSettings, apiMethods) {
  var savedData = null; // If we are viewing the draft load the draft

  if (storageSettings.viewDraftEdits) {
    savedData = JSON.parse(localStorage.getItem(contextName));

    if (savedData) {
      informSiteOfDraftEdits(apiMethods);
      return savedData;
    }
  } // Load any values from database


  if (apiMethods.getFromDataBase instanceof Function) {
    savedData = JSON.stringify(apiMethods.getFromDataBase(contextName));

    if (savedData) {
      return savedData;
    }
  } // If nothing is stored load the prop data from the template


  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

function informSiteOfDraftEdits(apiMethods) {
  (0, _delayCallback.default)(function () {
    apiMethods.setSiteIsDraft(true);
  }, 500);
}