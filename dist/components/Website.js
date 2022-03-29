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

var _DynamicPage = _interopRequireDefault(require("./pages/DynamicPage"));

var _Page = _interopRequireDefault(require("./pages/Page404"));

var _delayCallback = _interopRequireDefault(require("./helpers/delayCallback"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// import {site_template} from "./websiteVersions/current"
var site_template = {
  siteName: "New Website",
  colors: {
    lightShade: "#EEE4E8",
    lightAccent: "#8BF6FD",
    mainBrandColor: "#17A9CC",
    darkAccent: "#1F4C57",
    darkShade: "#322127"
  },
  pages: [{
    id: "Page-1",
    name: "Home",
    path: "/",
    components: [{
      name: "NavigationBar",
      id: "Home-NavBar-0-001 ",
      content: {}
    }, {
      name: "Mosaic",
      id: "Home-Mosaic-1-042 ",
      content: {}
    }, {
      name: "TextEditor",
      id: "Home-TextEditor-2-948",
      content: {
        html: "<h2 class=\"ql-align-center mb-3\">Here is some text</h2>\n                  <p class=\"ql-align-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pharetra nisl. Pellentesque in pellentesque justo, et ultrices augue. Mauris neque magna, laoreet vel purus nec, porttitor cursus quam. Maecenas posuere tellus in mauris elementum, id hendrerit lectus convallis. Nulla nec odio odio. Duis sed orci orci. Phasellus lobortis tristique ex vitae cursus. Ut eu erat sit amet orci tincidunt pretium. Phasellus malesuada, purus ut luctus scelerisque, turpis nisi dictum ex, malesuada semper nisl purus quis ligula. Mauris eu mollis mauris. Cras quis metus velit.</p>\n                  <p class=\"ql-align-justify\">Morbi vel tellus venenatis, rutrum neque sit amet, mollis enim. In eget placerat dolor. Mauris porttitor augue sit amet ligula commodo, sed sollicitudin turpis tempor. In placerat purus sem, a placerat ligula varius a. Curabitur consectetur, dui at pulvinar gravida, elit augue lobortis ipsum, laoreet bibendum massa libero id est. Donec maximus, turpis volutpat placerat lacinia, neque ante bibendum sapien, vel venenatis lectus diam in nisi. Donec aliquam dignissim tellus, condimentum eleifend arcu porttitor et. Morbi quis posuere dui, in vulputate augue.</p>\n                  <p class=\"ql-align-justify\">In diam tellus, congue vitae purus eget, posuere tristique diam. Vivamus placerat dictum nisi, ut scelerisque mauris tempor ut. Pellentesque imperdiet, arcu eu faucibus posuere, nulla ante gravida ligula, vel condimentum leo orci a ligula. Vivamus suscipit velit felis, sed mollis nibh faucibus nec. Fusce efficitur pretium blandit. In ac pulvinar purus. Nunc vitae magna orci. Ut maximus nibh ut felis tincidunt auctor. Etiam rhoncus sem at nunc feugiat, quis interdum urna tristique. Nullam elementum dapibus velit. Morbi ac odio commodo, iaculis lectus sagittis, dignissim felis. Aliquam fermentum at tellus a ullamcorper.</p>"
      }
    }, {
      name: "Footer",
      id: "Home-Footer-2-051 ",
      content: {}
    }]
  }, {
    id: "Page-2",
    name: "About",
    path: "/about",
    components: [{
      name: "NavigationBar",
      id: "About-NavBar-1-001",
      content: {}
    }]
  }, {
    id: "Page-3",
    name: "Contact",
    path: "/contact",
    components: [{
      name: "NavigationBar",
      id: "Contact-NavBar-1-001",
      content: {}
    }]
  }],
  masterNavBarData: {
    isUnique: false,
    includeSocials: true,
    homeLinkText: "Home",
    html: "<h1 class = \"ql-align-center\">{siteName}</h1>",
    navData: [{
      id: 1,
      name: "About Us",
      path: "/about"
    }, {
      id: 2,
      name: "Contact",
      path: "/contact"
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
  promoCodes: {}
};
var WebContext = /*#__PURE__*/(0, _react.createContext)();
exports.WebContext = WebContext;

function Website(props) {
  var images = []; // require.context('../../../public/images', true);

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
    isEditMode: props.isAdmin || false,
    isShowEditor: props.isAdmin || false,
    isAdmin: props.isAdmin || false,
    viewDraftEdits: true,
    autoSaveEditsLocally: true,
    autoUpdateLiveWebsite: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      adminSettings = _useState4[0],
      _setAdminSettings = _useState4[1];

  var _useState5 = (0, _react.useState)({
    isMobile: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      localDisplaySettings = _useState6[0],
      setLocalDisplaySettings = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      msgPort = _useState8[0],
      setMsgPort = _useState8[1];

  var _useContextStorage = useContextStorage(adminSettings, apiMethods, msgPort, "webStyle", {
    siteName: props.siteName || site_template.siteName,
    // Website colors
    colors: _objectSpread({}, site_template.colors),
    componentStyles: {
      all: {
        shadowStyle: "C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px ",
        borderSize: 0,
        borderShape: "",
        borderColor: "darkShade",
        shadowColor: 'darkShade',
        linkStyle: "text-decoration-underline"
      },
      background: {
        marginColor: "lightShade",
        backgroundColor: "lightAccent",
        applyBackground: true
      },
      header: {
        size: "h1",
        textColor: "darkShade"
      },
      mosaic: {
        arrangement: "LP,RL-LL,RP"
      },
      navigationBar: {
        includeHeader: true,
        topBarMargin: false,
        isSticky: true,
        stickyOffsetY: -4.5,
        justifyButtons: "justify-content-start",
        backgroundColor: "darkAccent",
        textColor: "lightShade",
        navbarStyle: "fullWidth"
      },
      linkBox: {
        backgroundColor: "lightShade",
        textColor: "darkShade",
        linkColor: "darkAccent"
      },
      subscriptionCard: {
        headerTextColor: "lightShade",
        headerBackgroundColor: "darkAccent",
        bodyTextColor: "darkShade",
        bodyBackgroundColor: "lightShade"
      },
      subscriberBox: {
        headerTextColor: "lightShade",
        backgroundColor: "darkAccent"
      },
      pictureFrame: {
        backgroundColor: "mainBrandColor",
        padding: ""
      },
      styledLink: {
        borderShape: null,
        backgroundColor: "mainBrandColor",
        textColor: "darkShade"
      },
      footer: {
        textColor: "darkShade"
      },
      textEditor: {
        backgroundColor: "lightShade",
        textColor: "darkShade"
      }
    }
  }),
      _useContextStorage2 = _slicedToArray(_useContextStorage, 2),
      webStyle = _useContextStorage2[0],
      _setWebStyle = _useContextStorage2[1]; // Ensure backwards compatible


  (0, _react.useEffect)(function () {}, [webStyle]);

  var _useContextStorage3 = useContextStorage(adminSettings, apiMethods, msgPort, "masterNavData", site_template.masterNavBarData),
      _useContextStorage4 = _slicedToArray(_useContextStorage3, 2),
      masterNavData = _useContextStorage4[0],
      _setMasterNavData = _useContextStorage4[1];

  var _useContextStorage5 = useContextStorage(adminSettings, apiMethods, msgPort, "socialMedias", site_template.socialMedias),
      _useContextStorage6 = _slicedToArray(_useContextStorage5, 2),
      socialMedias = _useContextStorage6[0],
      _setSocialMedias = _useContextStorage6[1];

  var _useContextStorage7 = useContextStorage(adminSettings, apiMethods, msgPort, "pages", site_template.pages),
      _useContextStorage8 = _slicedToArray(_useContextStorage7, 2),
      pages = _useContextStorage8[0],
      _setPages = _useContextStorage8[1];

  var _useContextStorage9 = useContextStorage(adminSettings, apiMethods, msgPort, "promoCodes", site_template.pages),
      _useContextStorage10 = _slicedToArray(_useContextStorage9, 2),
      promoCodes = _useContextStorage10[0],
      _setPromoCodes = _useContextStorage10[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      cart = _useState10[0],
      _setCart = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      savedData = _useState12[0],
      _setSavedData = _useState12[1];

  var componentOptions = ["Navigation Bar", "Header", "Footer", "Subscriber Box", "Styled Link", "Mosaic", "Text Editor", "Picture Slide Show", "Subscription Cards"].sort(); // const componentOptions = ["Product Comparison Table","Walk Through","Product Comparison Cards","Paragraph","Paragraph Backed","Quick Link","Navigation Bar","Header","Footer","Mosaic","Captioned Picture","Video Frame","Slide Show"].sort()

  var flatComponents = ["NavigationBar", "Header", "Footer", "CountDown", "ProductComparisonTable", "Subscriber Box"];
  var appMethods = {
    setWebStyle: function setWebStyle(state) {
      return _setWebStyle(state);
    },
    setMasterNavData: function setMasterNavData(state) {
      return _setMasterNavData(state);
    },
    setAdminSettings: function setAdminSettings(state) {
      return _setAdminSettings(state);
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
    addPage: function addPage(name, path) {
      // alert("New Page")
      var newID = generatePageKey();
      var newName = name;
      var newPath = path;

      if (!name) {
        newName = "New Page";
      }

      if (!path) {
        newPath = "/";
      }

      var newPage = {
        id: newID,
        path: newPath,
        name: newName,
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
    toggleViewDraftEdits: function toggleViewDraftEdits(toggleOn) {
      appMethods.setAdminSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          viewDraftEdits: toggleOn
        });
      });

      if (!toggleOn) {
        _setSiteIsDraft(false);
      }

      appMethods.sendMsgPortMsg("reload");
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
      _setAdminSettings(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          isShowEditor: !prevState.isShowEditor
        });
      });
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
    setLocalDisplaySettings(_objectSpread(_objectSpread({}, localDisplaySettings), {}, {
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
  (0, _react.useEffect)(function () {
    _setAdminSettings(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        isEditMode: props.isAdmin,
        isShowEditor: props.isAdmin,
        isAdmin: props.isAdmin
      });
    });
  }, [props.isAdmin]);

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
    setLocalDisplaySettings(_objectSpread(_objectSpread({}, localDisplaySettings), {}, {
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

    if (msgPort == "reload") {
      appMethods.sendMsgPortMsg("");
    }
  }, [msgPort]);
  var sitePages = pages.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        path = _ref.path,
        components = _ref.components;
    return (
      /*#__PURE__*/
      // basename="/site-creator" exact path = {path+"/:pathParam?"} key = {name+"Route"}
      (0, _jsxRuntime.jsxs)(_reactRouterDom.Route, {
        basename: props.baseName,
        exact: true,
        path: path + "/:pathParam?",
        children: [adminSettings.isAdmin && adminSettings.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {
          customShadowStyles: props.customShadowStyles || []
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicPage.default, {
          pageName: name,
          pageID: id,
          components: components,
          defaultComponentList: ["Header", "Navbar"],
          componentOptions: componentOptions
        }, id)]
      }, name + "Route")
    );
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WebContext.Provider, {
    value: {
      images: images,
      localDisplaySettings: localDisplaySettings,
      webStyle: webStyle,
      socialMedias: socialMedias,
      masterNavData: masterNavData,
      pages: pages,
      promoCodes: promoCodes,
      cart: cart,
      adminSettings: adminSettings,
      siteIsDraft: siteIsDraft,
      msgPort: msgPort,
      savedData: savedData,
      flatComponents: flatComponents,
      componentOptions: componentOptions,
      appMethods: appMethods,
      apiMethods: apiMethods
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "App",
      style: {
        minHeight: "100vh"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
        basename: props.basename,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Switch, {
          children: [sitePages, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "*",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [adminSettings.isAdmin && adminSettings.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {
                customShadowStyles: props.customShadowStyles || []
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Page.default, {
                pageName: "404",
                pageID: "404Page",
                components: [],
                defaultComponentList: ["Header", "Navbar"],
                componentOptions: componentOptions
              }, "404Page")]
            })
          })]
        })
      })
    })
  });

  function useContextStorage(adminSettings, apiMethods, msgPort, contextName, initialState) {
    var _useState13 = (0, _react.useState)(false),
        _useState14 = _slicedToArray(_useState13, 2),
        hasBeenMounted = _useState14[0],
        setHasBeenMounted = _useState14[1];

    var _useState15 = (0, _react.useState)(function () {
      return getStoredComponent(contextName, initialState, adminSettings, apiMethods);
    }),
        _useState16 = _slicedToArray(_useState15, 2),
        value = _useState16[0],
        setValue = _useState16[1]; // Save data


    (0, _react.useEffect)(function () {
      if (msgPort === "save") {
        alert("Saving ");
        apiMethods.setValueInDatabase(contextName, JSON.stringify(value));
        localStorage.removeItem(contextName);
      }

      if (msgPort === "reload") {
        setHasBeenMounted(false);
        setValue(function () {
          return getStoredComponent(contextName, initialState, adminSettings, apiMethods);
        });
      }
    }, [msgPort]);
    (0, _react.useEffect)(function () {
      // The use of has been mounted skips the first render.
      // Since we are programatically changing value we don't need to update our storage
      if (hasBeenMounted) {
        // Set live content from database
        if (adminSettings.autoUpdateLiveWebsite) {
          apiMethods.setValueInDatabase(contextName, JSON.stringify(value));
        } // Store draft data locally
        else if (adminSettings.autoSaveEditsLocally) {
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

function getStoredComponent(contextName, initialValue, adminSettings, apiMethods) {
  var savedData = null; // If we are viewing the draft load the draft

  if (adminSettings.viewDraftEdits) {
    savedData = JSON.parse(localStorage.getItem(contextName)); // we need to override data instead of replace it. This will make it backcompatible

    if (initialValue.constructor == Object) {
      var mergedData = _objectSpread({}, initialValue);

      if (savedData) {
        for (var _i2 = 0, _Object$entries = Object.entries(savedData); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (key in mergedData && value.constructor == Object) {
            mergedData[key] = _objectSpread(_objectSpread({}, mergedData[key]), value);
          } else {
            mergedData[key] = value;
          }
        }

        informSiteOfDraftEdits(apiMethods);
      }

      return mergedData;
    }

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