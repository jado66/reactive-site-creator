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

var _jsxRuntime = require("react/jsx-runtime");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Pages
// import CheckoutPage from "./pages/checkoutPage";
// import AdminPage from "./pages/AdminPage"
// import AdminLogin from "./pages/AdminLogin"
// import Page404 from "./pages/Page404"
// Data
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
        html: "New Website Home"
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
    }]
  }],
  masterNavBarData: [{
    id: 1,
    name: "Blog",
    path: "/blog"
  }],
  socialMedias: [{
    location: "Github",
    link: "https://github.com"
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

function Website() {
  var _useState = (0, _react.useState)({
    siteName: site_template.siteName,
    isEditMode: true,
    isShowEditor: true,
    isAdmin: true,
    // Website colors
    colors: _objectSpread({}, site_template.colors),
    promoCodes: _objectSpread({}, site_template.promoCodes)
  }),
      _useState2 = _slicedToArray(_useState, 2),
      webStyle = _useState2[0],
      _setWebStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(site_template.masterNavBarData),
      _useState4 = _slicedToArray(_useState3, 2),
      masterNavData = _useState4[0],
      _setMasterNavData = _useState4[1];

  var _useState5 = (0, _react.useState)(site_template.socialMedias),
      _useState6 = _slicedToArray(_useState5, 2),
      socialMedias = _useState6[0],
      _setSocialMedias = _useState6[1];

  var _useState7 = (0, _react.useState)(site_template.pages),
      _useState8 = _slicedToArray(_useState7, 2),
      pages = _useState8[0],
      _setPages = _useState8[1];

  var _useState9 = (0, _react.useState)(site_template.pages),
      _useState10 = _slicedToArray(_useState9, 2),
      promoCodes = _useState10[0],
      _setPromoCodes = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      cart = _useState12[0],
      _setCart = _useState12[1];

  var _useState13 = (0, _react.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      msgPort = _useState14[0],
      setMsgPort = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      savedData = _useState16[0],
      _setSavedData = _useState16[1];

  var componentOptions = ["Product Comparison Table", "Walk Through", "Product Comparison Cards", "Paragraph", "Paragraph Backed", "Quick Link", "Navigation Bar", "Header", "Footer", "Mosaic", "Captioned Picture", "Video Frame", "Slide Show"].sort();
  var flatComponents = ["NavigationBar", "Header", "Footer", "CountDown", "ProductComparisonTable"];
  var appMethods = {
    setWebStyle: function setWebStyle(state) {
      return _setWebStyle(state);
    },
    setMasterNavData: function setMasterNavData(state) {
      return _setMasterNavData(state);
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
      var newPage = {
        id: generatePageKey(),
        path: "/new-page",
        name: "New Page",
        components: [{
          name: "Header",
          id: "Home-Header-0-000",
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
      appMethods.sendMsgPortMsg("save");
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
  var sitePages = pages.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        path = _ref.path,
        components = _ref.components;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Route, {
      exact: true,
      path: path + "/:pathParam?",
      children: [webStyle.isAdmin && webStyle.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicPage.default, {
        webStyle: webStyle,
        pageName: name,
        components: components,
        defaultComponentList: ["Header", "Navbar"],
        componentOptions: componentOptions
      }, id)]
    }, name + "Route");
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WebContext.Provider, {
    value: {
      webStyle: webStyle,
      socialMedias: socialMedias,
      masterNavData: masterNavData,
      pages: pages,
      promoCodes: promoCodes,
      cart: cart,
      msgPort: msgPort,
      savedData: savedData,
      flatComponents: flatComponents,
      componentOptions: componentOptions,
      appMethods: appMethods
    },
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
}