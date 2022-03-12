"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationBar;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

require("bootstrap/dist/js/bootstrap.bundle.min");

var _modifiers = require("@dnd-kit/modifiers");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _DndSensors = require("../helpers/DndSensors");

var _AdminNavWrapper = _interopRequireDefault(require("../wrappers/AdminNavWrapper"));

var _Website = require("../Website");

var _reactRouterDom = require("react-router-dom");

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO dropdowns need to open only their dropdowns
function NavigationBar(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSettingsMode = _useState2[0],
      setIsSettingsMode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isUnique = _useState4[0],
      setIsUnique = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEdit = _useState6[0],
      setIsEdit = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isShowDeleteSpot = _useState8[0],
      showDeleteSpot = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isShowDropdownDeleteSpot = _useState10[0],
      showDropdownDeleteSpot = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isShowButtons = _useState12[0],
      showButtons = _useState12[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      msgPort = _useContext.msgPort,
      appMethods = _useContext.appMethods,
      apiMethods = _useContext.apiMethods,
      socialMedias = _useContext.socialMedias,
      cart = _useContext.cart,
      masterNavData = _useContext.masterNavData;

  var _useState13 = (0, _react.useState)("Site Creator"),
      _useState14 = _slicedToArray(_useState13, 2),
      homeLinkText = _useState14[0],
      setHomeLinkText = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      uniqueNavData = _useState16[0],
      setUniqueNavData = _useState16[1];

  var _useComponentStorage = (0, _useStorage.default)(props.pageName + props.id, {
    isUnique: false,
    homeLinkText: "home",
    naveData: []
  }),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  (0, _react.useEffect)(function () {
    if (msgPort == "save") {
      if (isUnique) {
        apiMethods.setValueInDatabase(props.pageID + props.id, content);
      }
    }
  }, [msgPort]);
  var componentMapping = {
    Email: _freeSolidSvgIcons.faEnvelope,
    Facebook: _freeBrandsSvgIcons.faFacebookSquare,
    Twitter: _freeBrandsSvgIcons.faTwitter,
    Instagram: _freeBrandsSvgIcons.faInstagram,
    Youtube: _freeBrandsSvgIcons.faYoutube,
    Tiktok: _freeBrandsSvgIcons.faTiktok,
    Discord: _freeBrandsSvgIcons.faDiscord,
    Etsy: _freeBrandsSvgIcons.faEtsy,
    Github: _freeBrandsSvgIcons.faGithub,
    Imdb: _freeBrandsSvgIcons.faImdb,
    LinkedinIn: _freeBrandsSvgIcons.faLinkedinIn,
    Patreon: _freeBrandsSvgIcons.faPatreon,
    Pinterest: _freeBrandsSvgIcons.faPinterestP,
    Reddit: _freeBrandsSvgIcons.faReddit,
    Shopify: _freeBrandsSvgIcons.faShopify,
    Spotify: _freeBrandsSvgIcons.faSpotify,
    Soundcloud: _freeBrandsSvgIcons.faSoundcloud,
    Snapchat: _freeBrandsSvgIcons.faSnapchatGhost
  };
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 5
    }
  }));
  var navData = isUnique ? content.navData : masterNavData.navData;

  if (!navData) {
    navData = [];
  }

  var navItems = [];

  if (isEdit) {
    // for(var index = 1; index < navData.length; index++){
    _toConsumableArray(navData).forEach(function (el, index) {
      // let el = navData[index]
      var dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach(function (subEl, subIndex) {
          dropdownItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(DropDownLink, {
            isEdit: true,
            webStyle: webStyle,
            name: subEl.name,
            path: subEl.path,
            onChangeName: function onChangeName(evt) {
              handleLinkDropdownChange(evt, index, subIndex, "name");
            },
            onChangePath: function onChangePath(evt) {
              handleLinkDropdownChange(evt, index, subIndex, "path");
            }
          }, el.name + subEl.name + subEl.path + "DropDown"));
        });
      }

      navItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: "nav-item " + (webStyle.isMobile ? "ms-2" : "mx-4"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: "dropdown" in el ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "position-relative " + (webStyle.isMobile ? "input-group" : ""),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
              onChange: function onChange(evt) {
                handleLinkChange(evt, index, "text");
              },
              style: {
                width: "".concat(el.name.length + 2, "ch"),
                color: webStyle.colors.lightShade
              },
              value: el.name
            }, "edit" + el.name + "input"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
              className: "nav-link dropdown-toggle" + (webStyle.isMobile ? " w-50" : ""),
              style: {
                color: webStyle.colors.lightShade
              },
              "data-no-dnd": "true",
              "data-bs-toggle": "dropdown",
              id: "navbarDropdown",
              role: "button",
              "aria-expanded": "false",
              path: "javascript:void(0)",
              children: "Dropdown"
            }, "edit" + el.name + "dropToggle"), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
              className: "dropdown-menu " + (webStyle.isMobile ? "" : "boxShadow"),
              style: {
                backgroundColor: webStyle.colors.darkAccent
              },
              "aria-labelledby": "navbarDropdown",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: dropdownItems
              })
            }, "edit" + el.name + "ul")]
          }, "edit" + el.name + "div2") : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: webStyle.isMobile ? "input-group" : "",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
              onChange: function onChange(evt) {
                handleLinkChange(evt, index, "name");
              },
              style: {
                width: "".concat(el.name.length + 2, "ch"),
                color: webStyle.colors.lightShade
              },
              value: el.name
            }, "edit" + el.name + "input1"), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
              onChange: function onChange(evt) {
                handleLinkChange(evt, index, "path");
              },
              style: {
                width: "".concat(el.path.length + 2, "ch"),
                color: webStyle.colors.lightShade
              },
              value: el.path
            }, "edit" + el.name + "input2")]
          }, "edit" + el.name + "div")
        }, "edit" + el.name + "div")
      }, "edit" + el.name + "input2"));
    }); // Move Mode

  } else {
    var _loop = function _loop() {
      var el = navData[index];
      var dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach(function (el, index) {
          dropdownItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminNavWrapper.default, {
            id: el.id // order = {el.or}
            ,
            className: webStyle.isMobile ? "ps-3" : "py-2 ",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              className: "nav-item ms-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                style: {
                  color: webStyle.colors.lightShade
                },
                "data-no-dnd": "true",
                className: "nav-link ",
                "aria-current": "page",
                to: el.path,
                children: el.name
              })
            })
          }, el.id));
        });
      }

      navItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminNavWrapper.default, {
        id: el.id // order = {el.or}
        ,
        className: "py-2 ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "nav-item " + (webStyle.isMobile ? "ms-2" : "mx-4"),
          style: {
            whiteSpace: "nowrap"
          },
          children: "dropdown" in el ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "position-relative ",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              style: {
                color: webStyle.colors.lightShade
              },
              className: "  dropdown-toggle text-decoration-none",
              "data-bs-toggle": "dropdown",
              id: "navbarDropdown" + el.id,
              role: "button",
              "aria-expanded": "false",
              path: "javascript:void(0)",
              children: el.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
              className: "dropdown-menu border-0 rounded-0 mt-0 " + (webStyle.isMobile ? "" : "boxShadow"),
              style: {
                backgroundColor: webStyle.colors.darkAccent,
                top: "2.5em",
                opacity: "1 !important"
              },
              "aria-labelledby": "navbarDropdown" + el.id,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
                  sensors: sensors,
                  collisionDetection: _core.closestCenter // modifiers = {[ verticalListSortingStrategy]}
                  ,
                  onDragStart: function onDragStart() {
                    showDropdownDeleteSpot(true);
                  },
                  onDragEnd: function onDragEnd(evt) {
                    handleDropdownDragEnd(evt, index);
                    showDropdownDeleteSpot(false);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_sortable.SortableContext, {
                    items: el.dropdown,
                    strategy: _sortable.verticalListSortingStrategy,
                    children: [dropdownItems, isShowDropdownDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsx)(DeleteDrop, {
                      id: "".concat(index, ":deleteDrop")
                    }), isShowButtons && webStyle.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      className: "btn " + (webStyle.isMobile ? "ps-4" : "w-100"),
                      "data-no-dnd": "true",
                      type: "button",
                      style: {
                        color: webStyle.colors.lightShade
                      },
                      onClick: function onClick(evt) {
                        addDropdownlink(evt, index);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faPlusSquare
                      })
                    })]
                  })
                })
              })
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            "data-no-dnd": "true",
            style: {
              color: webStyle.colors.lightShade
            },
            className: "text-decoration-none ",
            "aria-current": "page",
            to: el.path,
            children: el.name
          })
        })
      }, el.id));
    };

    for (var index = 0; index < navData.length; index++) {
      _loop();
    }

    ;
  }

  var socialLinks = socialMedias.filter(function (_ref) {
    var location = _ref.location;

    if (location === "New Link") {
      return false; // skip
    }

    return true;
  }).map(function (_ref2) {
    var link = _ref2.link,
        location = _ref2.location;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: "py-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        className: 'nav-link social-link',
        href: "".concat(link),
        style: {
          color: webStyle.colors.lightShade
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "sm-icons",
          icon: componentMapping[location]
        })
      }, location)
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fullWidth boxShadow px-5  ",
    style: {
      backgroundColor: webStyle.colors.darkAccent,
      color: webStyle.colors.lightShade,
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      zIndex: 1
    },
    onMouseEnter: function onMouseEnter() {
      showButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      showButtons(false);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      className: "navbar navbar-expand-lg mx-4 p-0 container mx-auto",
      children: !isSettingsMode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "container-fluid g-0 " + (webStyle.isMobile ? " ms-3" : ""),
        children: [isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          "data-no-dnd": "true",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            style: {
              color: webStyle.colors.lightShade
            },
            className: "form-control-plaintext w-50",
            value: homeLinkText,
            onChange: function onChange(evt) {
              handleLinkChange(evt, 0, "name");
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "form-control-plaintext w-50",
            style: {
              color: webStyle.colors.lightShade
            },
            value: "\\",
            onChange: function onChange(evt) {
              handleLinkChange(evt, 0, "path");
            }
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          "data-no-dnd": "true",
          className: "navbar-brand",
          to: "/",
          style: {
            color: webStyle.colors.lightShade
          },
          children: homeLinkText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          "data-no-dnd": "true",
          className: "navbar-toggler btn",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            style: {
              color: webStyle.colors.lightShade
            },
            icon: _freeSolidSvgIcons.faBars
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            className: "navbar-nav me-auto mb-2 mb-lg-0 " + (webStyle.isMobile ? " " : "align-items-center"),
            children: isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              "data-no-dnd": "true",
              className: "d-flex " + (webStyle.isMobile ? "flex-column " : "flex-direction-col"),
              children: navItems
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
              sensors: sensors,
              modifiers: [webStyle.isMobile ? _modifiers.restrictToVerticalAxis : _modifiers.restrictToHorizontalAxis],
              collisionDetection: _core.closestCenter,
              onDragStart: function onDragStart() {
                showDeleteSpot(true);
              },
              onDragEnd: function onDragEnd(evt) {
                handleDragEnd(evt);
                showDeleteSpot(false);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_sortable.SortableContext, {
                items: navData,
                strategy: webStyle.isMobile ? _sortable.verticalListSortingStrategy : _sortable.horizontalListSortingStrategy,
                children: [navItems, isShowDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "py-2",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DeleteDrop, {
                    id: "deleteDrop"
                  })
                })]
              })
            })
          }), isShowButtons && webStyle.isEditMode && !isShowDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            "data-no-dnd": "true",
            className: "btn-group  ",
            role: "group",
            "aria-label": "Basic example" // onClick={()=>{alert("group")}}
            ,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn border-end mx-2",
              type: "button",
              onClick: function onClick() {
                addLink();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faPlusSquare,
                style: {
                  color: webStyle.colors.lightShade
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn mx-1 px-0",
              type: "button",
              onClick: function onClick() {
                addLink(true);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faCaretSquareDown,
                style: {
                  color: webStyle.colors.lightShade
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn border-start mx-2",
              type: "button",
              onClick: function onClick() {
                setIsEdit(!isEdit);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: isEdit ? _freeSolidSvgIcons.faArrowsAlt : _freeSolidSvgIcons.faPencilAlt,
                style: {
                  color: webStyle.colors.lightShade
                }
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
            className: "navbar-nav sm-icons justify-content-start me-0 ",
            style: {
              float: 0
            },
            children: [socialLinks, Object.keys(cart).length != 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
              className: "position-relative",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                className: "col ms-3",
                to: "/checkout",
                style: {
                  color: webStyle.colors.lightShade
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  className: "m-icons",
                  icon: _freeSolidSvgIcons.faShoppingCart
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "position-absolute top-0 start-100 translate-middle badge rounded-pill ",
                children: [Object.keys(cart).length, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "visually-hidden",
                  children: "unread messages"
                })]
              })]
            })]
          }), isShowButtons && webStyle.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "relative-r btn",
            style: {
              marginRight: "-2.5em"
            },
            "data-no-dnd": "true",
            onClick: function onClick() {
              setIsSettingsMode(!isSettingsMode);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faCog,
              style: {
                color: webStyle.colors.lightShade
              }
            })
          })]
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center w-100 py-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Navigation Bar Settings"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          className: "text-start",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "form-check mb-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              class: "form-check-input",
              type: "checkbox",
              value: "",
              id: "flexCheckDefault"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "form-check-label",
              for: "flexCheckDefault",
              children: "Is this Navigation Bar unique?"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            class: "mb-3",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              for: "exampleFormControlTextarea1",
              class: "form-label",
              children: "Below will be other settings:"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "relative-r btn h-auto mt-2 ",
          style: {
            marginRight: "-2.5em",
            top: "0"
          },
          "data-no-dnd": "true",
          onClick: function onClick() {
            setIsSettingsMode(!isSettingsMode);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faCog,
            style: {
              color: webStyle.colors.lightShade
            }
          })
        })]
      })
    })
  });

  function saveNavData(value) {
    if (isUnique) {
      setContent(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          navData: value
        });
      });
    }
  }

  function addLink(isDropdown) {
    var newLink = isDropdown ? {
      id: Math.random() * 10000,
      name: "New Dropdown",
      dropdown: [{
        name: "New Link",
        path: "/",
        id: Math.random() * 10000
      }]
    } : {
      id: Math.random() * 10000,
      name: "New Link",
      path: "/"
    };
    saveNavData([].concat(_toConsumableArray(navData), [newLink]));
  }

  function addDropdownlink(event, index) {
    saveNavData(function (prevData) {
      // alert(index);
      var newData = _toConsumableArray(prevData);

      newData[index].dropdown = [].concat(_toConsumableArray(newData[index].dropdown), [{
        id: Math.random() * 10000,
        name: "New Link",
        path: "/"
      }]);
      saveNavData(newData);
    });
    event.stopPropagation();
  }

  function removeLink(index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      saveNavData(function (prevData) {
        // alert(index);
        var newData = [].concat(_toConsumableArray(prevData.slice(0, index)), _toConsumableArray(prevData.slice(index + 1)));
        saveNavData(newData);
      });
    }
  }

  function removeDropdownLink(parentIndex, index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      saveNavData(function (prevData) {
        // alert(index);
        var newData = _toConsumableArray(prevData);

        var newDropdown = [].concat(_toConsumableArray(newData[parentIndex].dropdown.slice(0, index)), _toConsumableArray(newData[parentIndex].dropdown.slice(index + 1)));
        newData[parentIndex].dropdown = newDropdown;
        saveNavData(newData);
      });
    }
  }

  function handleLinkChange(event, index, type) {
    // TODO ensure theses don't get out of sync
    var newData = _toConsumableArray(navData);

    newData[index][type] = event.target.value;
    saveNavData(newData);
  }

  function handleLinkDropdownChange(event, parentIndex, index, type) {
    var newData = _toConsumableArray(navData);

    newData[parentIndex].dropdown[index][type] = event.target.value;
    saveNavData(newData);
  }

  function handleDragEnd(event) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      var oldIndex = active.data.current.sortable.index;

      if (!over.data.current) {
        removeLink(oldIndex);
        return;
      }

      var newIndex = over.data.current.sortable.index; // removeLink

      var newData = (0, _sortable.arrayMove)(navData, oldIndex, newIndex);
      saveNavData(newData);
    }
  }

  function handleDropdownDragEnd(event, index) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      var oldIndex = active.data.current.sortable.index; // if( === 0){

      if (!over.data.current) {
        removeDropdownLink(index, oldIndex);
        return;
      }

      var newIndex = over.data.current.sortable.index;

      var newData = _toConsumableArray(navData);

      newData[index].dropdown = (0, _sortable.arrayMove)(newData[index].dropdown, oldIndex, newIndex);
      saveNavData(newData);
    } // event.preventDefault();

  }
}

var DeleteDrop = function DeleteDrop(props) {
  var _useDroppable = (0, _core.useDroppable)({
    id: props.id
  }),
      setNodeRef = _useDroppable.setNodeRef;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: setNodeRef,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: "nav-link active border-primary rounded-3",
      style: {
        borderStyle: "dashed",
        borderWidth: "1px"
      },
      children: "Delete"
    })
  });
}; //  I really need to consolidate this....


var DropDownLink = function DropDownLink(props) {
  var _useContext2 = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext2.webStyle;

  if (props.isEdit) return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    className: "nav-item col",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "input-group ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        style: {
          color: webStyle.colors.lightShade
        },
        className: "form-control-plaintext w-50",
        value: props.name,
        onChange: props.onChangeName
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-control-plaintext w-50",
        style: {
          color: webStyle.colors.lightShade
        },
        value: props.path,
        onChange: props.onChangePath
      })]
    })
  });else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
  }
};