"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebContext = void 0;
exports.default = Website;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.parse-int.js");

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

require("../css/website.css");

require("../css/index.css");

require("bootstrap/dist/css/bootstrap.css");

require("../css/bootstrapOverrides.css");

var _StylesEditor = _interopRequireDefault(require("./StylesEditor"));

var _DynamicPage = _interopRequireDefault(require("./DynamicPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Pages
// import CheckoutPage from "./pages/checkoutPage";
// import AdminPage from "./pages/AdminPage"
// import AdminLogin from "./pages/AdminLogin"
// import Page404 from "./pages/Page404"
// Data
// import {site_template} from "./websiteVersions/current"
const site_template = {
  siteName: "New Website",
  colors: {
    lightShade: "#EEE4E8",
    lightAccent: "#8BF6FD",
    mainBrandColor: "#1D92B2",
    darkAccent: "#1F4C57",
    darkShade: "#1C191E"
  },
  pages: [{
    id: 1,
    name: "Home",
    path: "/"
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
  pageData: {
    ["Home"]: [{
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
  }
};
const WebContext = /*#__PURE__*/(0, _react.createContext)();
exports.WebContext = WebContext;

function Website() {
  const [webStyle, _setWebStyle] = (0, _react.useState)({
    siteName: site_template.siteName,
    isEditMode: true,
    isShowEditor: true,
    isAdmin: true,
    // Website colors
    colors: _objectSpread({}, site_template.colors),
    promoCodes: _objectSpread({}, site_template.promoCodes)
  });
  const [masterNavData, _setMasterNavData] = (0, _react.useState)(site_template.masterNavBarData);
  const [socialMedias, _setSocialMedias] = (0, _react.useState)(site_template.socialMedias);
  const [pages, _setPages] = (0, _react.useState)(site_template.pages);
  const [promoCodes, _setPromoCodes] = (0, _react.useState)(site_template.pages);
  const [cart, _setCart] = (0, _react.useState)({});
  const [msgPort, setMsgPort] = (0, _react.useState)("");
  const [savedData, _setSavedData] = (0, _react.useState)({});
  const componentOptions = ["Product Comparison Table", "Walk Through", "Product Comparison Cards", "Paragraph", "Paragraph Backed", "Quick Link", "Navigation Bar", "Header", "Footer", "Mosaic", "Captioned Picture", "Video Frame", "Slide Show"].sort();
  const flatComponents = ["NavigationBar", "Header", "Footer", "CountDown", "ProductComparisonTable"];
  const appMethods = {
    setWebStyle: state => _setWebStyle(state),
    setMasterNavData: state => _setMasterNavData(state),
    setCart: state => _setCart(state),
    setSocialMedias: state => _setSocialMedias(state),
    setPages: state => _setPages(state),
    sendMsgPortMsg: msg => setMsgPort(msg),
    setSavedData: state => _setSavedData(state),
    setPromoCodes: state => _setPromoCodes(state),
    addToCart: cartItem => {
      // Check if we already have it in the cart
      if (cartItem.name in cart) {
        let newCart = _objectSpread({}, cart);

        newCart[cartItem.name].quantity += 1;

        _setCart(newCart);
      } else {
        let newCart = _objectSpread(_objectSpread({}, cart), {}, {
          [cartItem.name]: cartItem
        });

        _setCart(newCart);
      }
    },
    removeFromCart: itemName => {
      // Check if we already have it in the cart
      if (itemName in cart) {
        let newCart = _objectSpread({}, cart);

        delete newCart[itemName];

        _setCart(newCart);
      }
    },
    setCartItemQuantity: (itemName, quantity) => {
      // This should only be called if the item already exists in the cart
      if (itemName in cart) {
        let newCart = _objectSpread({}, cart);

        newCart[itemName].quantity = parseInt(quantity);

        if (newCart[itemName].quantity === 0) {
          delete newCart[itemName];
        }

        _setCart(newCart); // localStorage.setItem("cart",JSON.stringify(newCart))

      } else {
        alert("Error: Item not found in cart");
      }
    },
    handlePageNameChange: (index, name) => {
      let newPage = {
        path: pages[index].path,
        name: name
      };

      _setPages([...pages.slice(0, index), newPage, ...pages.slice(index + 1)]); // Callback to save to storage

    },
    handlePagePathChange: (index, path) => {
      let newPage = {
        path: path,
        name: pages[index].name
      };

      _setPages([...pages.slice(0, index), newPage, ...pages.slice(index + 1)]);
    },
    checkIfPageExists: path => {
      let pageExists = false;
      pages.forEach(page => {
        if (page.path === path) {
          pageExists = true;
        }
      });
      return pageExists;
    },
    deletePage: (pageName, index) => {
      let sureDelete = prompt("Are you sure you would like to delete the page ".concat(pageName, "? This action is irreversible. Type \"YES\" to delete this page:"), "");

      if (sureDelete === "YES") {
        _setPages([...pages.slice(0, index), ...pages.slice(index + 1)]);
      }
    },
    addPage: (name, path) => {
      // alert("New Page")
      if (!name) {
        name = "New Page";
      }

      if (!path) {
        path = "/new-page";
      }

      let newPage = {
        path: path,
        name: name
      };

      _setPages([...pages, newPage]);
    },
    // Social
    handleSocialSiteChange: (index, location) => {
      let newSocialMedia = {
        link: socialMedias[index].link,
        location: location
      };

      _setSocialMedias([...socialMedias.slice(0, index), newSocialMedia, ...socialMedias.slice(index + 1)]); // Callback to save to storage

    },
    handleSocialLinkChange: (index, link) => {
      let newSocialMedia = {
        location: socialMedias[index].location,
        link: link
      };

      _setSocialMedias([...socialMedias.slice(0, index), newSocialMedia, ...socialMedias.slice(index + 1)]);
    },
    deleteSocialMedia: (location, index) => {
      let sureDelete = window.confirm("Are you sure you would like to your social media link to ".concat(location));

      if (sureDelete) {
        _setSocialMedias([...socialMedias.slice(0, index), ...socialMedias.slice(index + 1)]);
      }
    },
    addSocialMedia: () => {
      let newSocialMedia = {
        location: "New Link",
        link: "/"
      };

      _setSocialMedias([...socialMedias, newSocialMedia]);
    },
    saveWebsite: () => {
      appMethods.sendMsgPortMsg("save");
    },
    toggleStyleEditor: () => {
      let newWebstyle = _objectSpread({}, webStyle);

      newWebstyle.isShowEditor = !newWebstyle.isShowEditor;

      _setWebStyle(newWebstyle);
    },
    saveComponentData: (pageName, index, data) => {
      let newSavedData = savedData;

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
    const isMobile = window.innerWidth <= 991;

    _setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      isMobile: isMobile
    }));
  } // Website init


  (0, _react.useEffect)(() => {
    setCartFromStorage();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const setCartFromStorage = () => {
    // This stays as a local storage item
    let storedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedCart) {
      // storedCart = {}
      _setCart(storedCart);
    }
  };

  function handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 991;

    _setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
      isMobile: isMobile
    }));
  }

  (0, _react.useEffect)(() => {
    if (msgPort == "save") {
      appMethods.sendMsgPortMsg("");
    }
  }, [msgPort]);
  let sitePages = pages.map(_ref => {
    let {
      name,
      path
    } = _ref;
    let pageContent = site_template.pageData[name];
    return /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
      basename: "/site-creator",
      exact: true,
      path: path + "/:pathParam?",
      key: name + "Route"
    }, webStyle.isAdmin && webStyle.isShowEditor && /*#__PURE__*/React.createElement(_StylesEditor.default, null), /*#__PURE__*/React.createElement(_DynamicPage.default, {
      webStyle: webStyle,
      key: name + "Page",
      pageName: name,
      content: pageContent,
      defaultComponentList: ["Header", "Navbar"],
      componentOptions: componentOptions
    }));
  });
  return /*#__PURE__*/React.createElement(WebContext.Provider, {
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
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "App",
    style: {
      minHeight: "100vh",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, {
    basename: "/site-creator"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, sitePages))));
}