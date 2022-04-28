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

var _useContextStorage11 = _interopRequireDefault(require("./helpers/useContextStorage"));

var _defaultDataEmpty = require("./defaultDataEmpty");

var _ShopManager = _interopRequireDefault(require("./pages/ShopManager"));

var _colorDiff = require("./helpers/colorDiff");

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

var WebContext = /*#__PURE__*/(0, _react.createContext)();
exports.WebContext = WebContext;

function Website(props) {
  var images = []; // require.context('../../../public/images', true);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      siteIsDraft = _useState2[0],
      _setSiteIsDraft = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showTutorial = _useState4[0],
      _setShowTutorial = _useState4[1];

  var siteData = props.defaultSiteData || _defaultDataEmpty.defaultSiteData; // Components

  var componentOptions = props.defaultComponentOptions || _defaultDataEmpty.defaultComponentOptions;
  componentOptions = _objectSpread(_objectSpread({}, _defaultDataEmpty.defaultComponentOptions), props.componentOptions);
  var apiMethods = {
    // getFromDatabase: props.getFromDatabase,
    getFromDataBase: props.getFromDataBase,
    uploadImageToDB: function uploadImageToDB(file, callback) {
      if (props.uploadImageToDB) {
        props.uploadImageToDB(file, callback);
      }
    },
    retreiveImageFromDB: function retreiveImageFromDB(fileName) {
      if (props.retreiveImageFromDB) {
        props.retreiveImageFromDB(fileName);
      }
    },
    setValueInDatabase: function setValueInDatabase(id, componentState) {
      if (props.saveComponentToDB) {
        props.saveComponentToDB(id, componentState);
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

  var _useState5 = (0, _react.useState)({
    isEditMode: props.isAdmin || false,
    isShowEditor: props.isAdmin || false,
    isAdmin: props.isAdmin || false,
    viewDraftEdits: true,
    autoSaveEditsLocally: true,
    autoUpdateLiveWebsite: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      adminSettings = _useState6[0],
      _setAdminSettings = _useState6[1];

  var _useState7 = (0, _react.useState)({
    isMobile: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      localDisplaySettings = _useState8[0],
      setLocalDisplaySettings = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      msgPort = _useState10[0],
      setMsgPort = _useState10[1];

  var _useContextStorage = (0, _useContextStorage11.default)(adminSettings, apiMethods, msgPort, "webStyle", {
    siteName: siteData.siteName,
    // Website colors
    colors: props.colors || _defaultDataEmpty.defaultWebStyles.colors,
    componentStyles: props.componentStyles || _defaultDataEmpty.defaultWebStyles.componentStyles
  }),
      _useContextStorage2 = _slicedToArray(_useContextStorage, 2),
      webStyle = _useContextStorage2[0],
      _setWebStyle = _useContextStorage2[1];

  var _useContextStorage3 = (0, _useContextStorage11.default)(adminSettings, apiMethods, msgPort, "masterNavData", siteData.masterNavBarData),
      _useContextStorage4 = _slicedToArray(_useContextStorage3, 2),
      masterNavData = _useContextStorage4[0],
      _setMasterNavData = _useContextStorage4[1];

  var _useContextStorage5 = (0, _useContextStorage11.default)(adminSettings, apiMethods, msgPort, "socialMedias", siteData.socialMedias),
      _useContextStorage6 = _slicedToArray(_useContextStorage5, 2),
      socialMedias = _useContextStorage6[0],
      _setSocialMedias = _useContextStorage6[1];

  var _useContextStorage7 = (0, _useContextStorage11.default)(adminSettings, apiMethods, msgPort, "pages", siteData.pages),
      _useContextStorage8 = _slicedToArray(_useContextStorage7, 2),
      pages = _useContextStorage8[0],
      _setPages = _useContextStorage8[1];

  var _useContextStorage9 = (0, _useContextStorage11.default)(adminSettings, apiMethods, msgPort, "promoCodes", siteData.pages),
      _useContextStorage10 = _slicedToArray(_useContextStorage9, 2),
      promoCodes = _useContextStorage10[0],
      _setPromoCodes = _useContextStorage10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      cart = _useState12[0],
      _setCart = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      savedData = _useState14[0],
      _setSavedData = _useState14[1];

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
    setShowTutorial: function setShowTutorial(state) {
      return _setShowTutorial(state);
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
    },
    getRandomColors: function getRandomColors() {
      var url = "http://colormind.io/api/";
      var data = {
        model: "default",
        input: [[Math.floor(Math.random() * 56), Math.floor(Math.random() * 56), Math.floor(Math.random() * 56)], "N", "N", "N", [Math.floor(Math.random() * 36) + 220, Math.floor(Math.random() * 36) + 220, Math.floor(Math.random() * 36) + 220]]
      };
      var http = new XMLHttpRequest();

      http.onreadystatechange = function () {
        // alert(http.readyState)
        if (http.readyState == 4 && http.status == 200) {
          var palette = JSON.parse(http.responseText).result; // var palette = [[190,213,243],[0,0,0],[255,255,255],[105,180,95],[3,8,9]]

          var diff = [];

          for (var i = 0; i < 5; i++) {
            diff.push((0, _colorDiff.ciede2000)(palette[i], [0, 0, 0]));
          } //1) combine the arrays:


          var list = [[palette[0], diff[0]], [palette[1], diff[1]], [palette[2], diff[2]], [palette[3], diff[3]], [palette[4], diff[4]]]; //2) sort:

          list.sort(function (a, b) {
            return b[1] - a[1];
          }); // alert(JSON.stringify(list))

          var hexColors = []; //3) separate them back out:

          for (var k = 0; k < 5; k++) {
            hexColors.push((0, _colorDiff.rgbToHex)(list[k][0]));
          }

          appMethods.setWebStyle(_objectSpread(_objectSpread({}, webStyle), {}, {
            colors: _objectSpread(_objectSpread({}, webStyle.colors), {}, {
              lightShade: hexColors[0],
              lightAccent: hexColors[1],
              mainBrandColor: hexColors[2],
              darkAccent: hexColors[3],
              darkShade: hexColors[4]
            })
          }));
        }
      };

      http.open("POST", url, true);
      http.send(JSON.stringify(data));
    }
  };

  function handleWindowSizeChange() {
    var isMobile = window.innerWidth <= 991;
    setLocalDisplaySettings(_objectSpread(_objectSpread({}, localDisplaySettings), {}, {
      isMobile: isMobile
    }));
  }

  function launchTutorial() {
    var showTutorial = localStorage.getItem("showTutorial");

    if (!showTutorial) {
      showTutorial = '-1';
    }

    if (socialMedias.length === 0 && webStyle.colors.mainBrandColor === "#FFFFFF" || showTutorial !== '-1') {
      _setShowTutorial(true);

      if (!showTutorial) {
        localStorage.setItem("showTutorial", 0);
      }
    }
  } // Website init


  (0, _react.useEffect)(function () {
    if (adminSettings.isAdmin) {
      launchTutorial();
    }

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
  var sitePages = pages || [];
  var sitePageComponents = sitePages.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        path = _ref.path,
        components = _ref.components;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Route, {
      basename: props.basename,
      exact: true,
      path: path + "/:pathParam?",
      children: [adminSettings.isAdmin && adminSettings.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {
        customShadowStyles: props.customShadowStyles || [],
        showTutorial: showTutorial
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicPage.default, {
        showTutorial: showTutorial,
        pageName: name,
        pageID: id,
        components: components,
        componentOptions: componentOptions,
        defaultComponentList: ["Header", "Navbar"]
      }, id)]
    }, name + "Route");
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(WebContext.Provider, {
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
            children: [sitePageComponents, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
              path: "/admin/shop-manager",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [adminSettings.isAdmin && adminSettings.isShowEditor && /*#__PURE__*/(0, _jsxRuntime.jsx)(_StylesEditor.default, {
                  customShadowStyles: props.customShadowStyles || []
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShopManager.default, {
                  pageName: "ShopManager",
                  pageID: "ShopManager"
                }, "Page")]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
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
    })
  });
}