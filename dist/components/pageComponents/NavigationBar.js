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

var _QuillComponent = _interopRequireDefault(require("../subComponents/QuillComponent"));

var _ComponentMargin = _interopRequireDefault(require("../subComponents/ComponentMargin"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

// TODO dropdowns need to open only their dropdowns
function NavigationBar(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSettingsMode = _useState2[0],
      setIsSettingsMode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEdit = _useState4[0],
      setIsEdit = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isShowDeleteSpot = _useState6[0],
      showDeleteSpot = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isShowDropdownDeleteSpot = _useState8[0],
      showDropdownDeleteSpot = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isShowButtons = _useState10[0],
      showButtons = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isEditHeader = _useState12[0],
      setIsEditHeader = _useState12[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings,
      msgPort = _useContext.msgPort,
      appMethods = _useContext.appMethods,
      apiMethods = _useContext.apiMethods,
      socialMedias = _useContext.socialMedias,
      cart = _useContext.cart,
      masterNavData = _useContext.masterNavData;

  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = _objectSpread({}, masterNavData);
  }

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1]; // TODO include html in content


  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isEditMode = _useState14[0],
      setIsEditMode = _useState14[1];

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
  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.navigationBar.textColor,
      backgroundColor: webStyle.componentStyles.navigationBar.backgroundColor
    };
  } catch (error) {}

  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor); // alert(borderAndShadow)

  var navItems = []; // if (isEdit) {
  // for(var index = 1; index < navData.length; index++){

  _toConsumableArray(content.navData).forEach(function (el, index) {
    // let el = navData[index]
    var dropdownItems = [];

    if ("dropdown" in el) {
      el.dropdown.forEach(function (subEl, subIndex) {
        dropdownItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminNavWrapper.default, {
          id: subEl.id // order = {el.or}
          ,
          className: "py-2 ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DropDownLink, {
            id: subEl.id + "DropDown",
            componentStyles: componentStyles,
            isEdit: isEdit,
            webStyle: webStyle,
            name: subEl.name,
            path: subEl.path,
            parentIndex: index,
            index: subIndex,
            handleLinkDropdownChange: handleLinkDropdownChange
          }, subEl.id + "DropDown")
        }, subEl.id + "admin"));
      });
    } // navItems.push(
    // <EditableNavItem 
    //   key = {el.name+el.path+"Link"}
    //   el = {el}
    //   webStyle = {webStyle}
    //   handleLinkChange = {handleLinkChange}
    //   index = {index}
    //   isEdit = {isEdit}
    // >
    //   {dropdownItems}
    // </EditableNavItem>


    navItems.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminNavWrapper.default, {
      id: el.id // order = {el.or}
      ,
      className: "py-2 ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(EditableNavItem, {
        el: el,
        id: el.name + el.path + "Link",
        borderAndShadow: borderAndShadow,
        webStyle: webStyle,
        componentStyles: componentStyles,
        localDisplaySettings: localDisplaySettings,
        handleLinkChange: handleLinkChange,
        index: index,
        isEdit: isEdit,
        handleDropdownDragEnd: handleDropdownDragEnd,
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
            }), isShowButtons && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn " + (localDisplaySettings.isMobile ? "ps-4" : "w-100"),
              "data-no-dnd": "true",
              type: "button",
              style: {
                color: webStyle.colors[componentStyles.textColor]
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
      }, el.name + el.path + "Link")
    }, el.id + "admin")); // }
  });

  var socialMediaLinks = socialMedias || [];
  var socialLinks = socialMediaLinks.filter(function (_ref) {
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
        to: {
          pathname: "".concat(link)
        },
        style: {
          color: webStyle.colors[componentStyles.textColor]
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "sm-icons",
          icon: componentMapping[location]
        })
      }, "Nav - ".concat(componentMapping[location]))
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentMargin.default, {
    componentName: "navigationBar",
    webStyle: webStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _objectSpread({}, props.style),
      className: (props.index === 0 && !webStyle.componentStyles.navigationBar.topBarMargin ? "navbarTop " : " ") + webStyle.componentStyles.navigationBar.navbarStyle,
      onMouseEnter: function onMouseEnter() {
        showButtons(true);
      },
      onMouseLeave: function onMouseLeave() {
        showButtons(false);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: " ",
        style: {
          backgroundColor: webStyle.colors[componentStyles.backgroundColor],
          color: webStyle.colors[componentStyles.textColor],
          boxShadow: borderAndShadow
        },
        children: [webStyle.componentStyles.navigationBar.includeHeader && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "container mx-auto pt-3 relative-div",
          "data-no-dnd": "true",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_QuillComponent.default, {
            adminSettings: adminSettings,
            variables: {
              pageName: props.pageName,
              siteName: webStyle.siteName
            },
            color: webStyle.colors[componentStyles.textColor],
            webStyle: webStyle,
            className: "navbar-header ",
            html: content.html,
            isEditMode: isEditHeader,
            setHtml: function setHtml(value) {
              saveHtml(value);
            },
            saveEdits: function saveEdits() {
              setIsEditHeader(!isEditHeader);
            }
          }), isShowButtons && !isEditHeader && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "relative",
            "data-no-dnd": "true",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn ",
              onClick: function onClick() {
                return setIsEditHeader(true);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                style: {
                  color: webStyle.colors[componentStyles.textColor]
                },
                icon: _freeSolidSvgIcons.faPencilAlt
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
          className: "navbar navbar-expand-lg px-4 container mx-auto py-0",
          style: {
            position: "sticky",
            top: "2em",
            alignSelf: "flex-start"
          },
          children: !isSettingsMode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "container-fluid g-0 " + (localDisplaySettings.isMobile ? " ms-3" : ""),
            children: [isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              "data-no-dnd": "true",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                // style ={{,color:props.webStyle.colors.lightShade}}
                style: {
                  color: webStyle.colors[componentStyles.textColor],
                  width: "".concat(content.homeLinkText.length + 2, "ch")
                },
                className: "form-control-plaintext navbar-brand me-0",
                value: content.homeLinkText,
                onChange: function onChange(evt) {
                  handleHomeLinkText(evt.target.value);
                }
              })
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
              "data-no-dnd": "true",
              className: "navbar-brand",
              to: "/",
              style: {
                color: webStyle.colors[componentStyles.textColor]
              },
              children: content.homeLinkText
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
                  color: webStyle.colors[componentStyles.textColor]
                },
                icon: _freeSolidSvgIcons.faBars
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "collapse navbar-collapse",
              id: "navbarSupportedContent",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
                className: "navbar-nav flex-grow-1 mb-2 mb-lg-0 " + (localDisplaySettings.isMobile ? " " : "align-items-center ") + webStyle.componentStyles.navigationBar.justifyButtons,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
                  sensors: sensors,
                  modifiers: [localDisplaySettings.isMobile ? _modifiers.restrictToVerticalAxis : _modifiers.restrictToHorizontalAxis],
                  collisionDetection: _core.closestCenter,
                  onDragStart: function onDragStart() {
                    showDeleteSpot(true);
                  },
                  onDragEnd: function onDragEnd(evt) {
                    handleDragEnd(evt);
                    showDeleteSpot(false);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_sortable.SortableContext, {
                    items: content.navData,
                    strategy: localDisplaySettings.isMobile ? _sortable.verticalListSortingStrategy : _sortable.horizontalListSortingStrategy,
                    children: [navItems, isShowDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "py-2",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DeleteDrop, {
                        id: "deleteDrop"
                      })
                    })]
                  })
                })
              }), isShowButtons && adminSettings.isEditMode && !isShowDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
                      color: webStyle.colors[componentStyles.textColor]
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
                      color: webStyle.colors[componentStyles.textColor]
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  className: "btn border-start mx-2",
                  type: "button",
                  onClick: function onClick() {
                    setIsEdit(!isEdit);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                    icon: isEdit ? _freeSolidSvgIcons.faCheck : _freeSolidSvgIcons.faPencilAlt,
                    style: {
                      color: webStyle.colors[componentStyles.textColor]
                    }
                  })
                })]
              }), content.includeSocials && /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
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
                      color: webStyle.colors[componentStyles.textColor]
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
              }), isShowButtons && adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "relative-r h-100 d-flex",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  className: "btn",
                  style: {
                    marginRight: "-2.5em",
                    top: ".2em"
                  },
                  "data-no-dnd": "true",
                  onClick: function onClick() {
                    setIsSettingsMode(!isSettingsMode);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                    icon: _freeSolidSvgIcons.faCog,
                    style: {
                      color: webStyle.colors[componentStyles.textColor]
                    }
                  })
                })
              })]
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-center w-100 py-3",
            "data-no-dnd": "true",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: "Navigation Bar Settings"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
              className: "text-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "form-check mb-3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  checked: content.isUnique,
                  onClick: toggleUnique,
                  id: "flexCheckDefault"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  class: "form-check-label",
                  for: "flexCheckDefault",
                  children: "Is this Navigation Bar unique?"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "form-check mb-3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  checked: content.includeSocials,
                  onClick: function onClick() {
                    return handleContentCheckbox("includeSocials");
                  },
                  id: "flexCheckDefault"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  class: "form-check-label",
                  for: "flexCheckDefault",
                  children: "Include social medias?"
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "relative-r mt-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "btn d-flex",
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
                    color: webStyle.colors[componentStyles.textColor]
                  }
                })
              })
            })]
          })
        })]
      })
    })
  });

  function handleContentCheckbox(key) {
    setContent(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, !prevState[key]));
    });

    if (!content.isUnique) {
      appMethods.setMasterNavData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, !prevState[key]));
      });
    }
  }

  function toggleUnique() {
    if (content.isUnique) {
      if (window.confirm("Are you sure you want to make this Navigation bar a copy of the master Navigation bar? This will remove any unique links?")) {
        setContent(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            isUnique: false
          });
        });
      }
    } else {
      setContent(function (prevState) {
        return _objectSpread(_objectSpread(_objectSpread({}, prevState), masterNavData), {}, {
          isUnique: true
        });
      });
    }
  }

  function saveHtml(_x) {
    return _saveHtml.apply(this, arguments);
  }

  function _saveHtml() {
    _saveHtml = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (content.isUnique) {
                setContent(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    html: value
                  });
                });
              } else {
                setContent(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    html: value
                  });
                });
                appMethods.setMasterNavData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    html: value
                  });
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveHtml.apply(this, arguments);
  }

  function saveNavData(_x2) {
    return _saveNavData.apply(this, arguments);
  }

  function _saveNavData() {
    _saveNavData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (content.isUnique) {
                setContent(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    navData: value
                  });
                });
              } else {
                setContent(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    navData: value
                  });
                });
                appMethods.setMasterNavData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    navData: value
                  });
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _saveNavData.apply(this, arguments);
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
    saveNavData([].concat(_toConsumableArray(content.navData), [newLink]));
  }

  function addDropdownlink(event, index) {
    // alert(index);
    var newData = _toConsumableArray(content.navData);

    newData[index].dropdown = [].concat(_toConsumableArray(newData[index].dropdown), [{
      id: Math.random() * 10000,
      name: "New Link",
      path: "/"
    }]);
    saveNavData(newData);
    event.stopPropagation();
  }

  function removeLink(index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      // alert(index);
      var newData = [].concat(_toConsumableArray(content.navData.slice(0, index)), _toConsumableArray(content.navData.slice(index + 1)));
      saveNavData(newData);
    }
  }

  function removeDropdownLink(parentIndex, index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      // alert(index);
      var newData = _toConsumableArray(content.navData);

      var newDropdown = [].concat(_toConsumableArray(newData[parentIndex].dropdown.slice(0, index)), _toConsumableArray(newData[parentIndex].dropdown.slice(index + 1)));
      newData[parentIndex].dropdown = newDropdown;
      saveNavData(newData);
    }
  }

  function handleHomeLinkText(value) {
    // TODO ensure theses don't get out of sync
    if (content.isUnique) {
      setContent(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          homeLinkText: value
        });
      });
    } else {
      appMethods.setMasterNavData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          homeLinkText: value
        });
      });
    }
  }

  function handleLinkChange(name, path, index) {
    // TODO ensure theses don't get out of sync
    var newData = _toConsumableArray(content.navData);

    newData[index].name = name;
    newData[index].path = path;
    saveNavData(newData);
  }

  function handleLinkDropdownChange(name, path, parentIndex, index) {
    var newData = _toConsumableArray(content.navData);

    newData[parentIndex].dropdown[index].name = name;
    newData[parentIndex].dropdown[index].path = path; // newData[parentIndex].dropdown[index][type] = event.target.value;

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

      var newData = (0, _sortable.arrayMove)(content.navData, oldIndex, newIndex);
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

      var newData = _toConsumableArray(content.navData);

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


var EditableNavItem = function EditableNavItem(props) {
  var _useState15 = (0, _react.useState)(props.el.name),
      _useState16 = _slicedToArray(_useState15, 2),
      name = _useState16[0],
      setName = _useState16[1];

  var _useState17 = (0, _react.useState)(props.el.path),
      _useState18 = _slicedToArray(_useState17, 2),
      path = _useState18[0],
      setPath = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isShowDeleteSpot = _useState20[0],
      showDeleteSpot = _useState20[1];

  (0, _react.useEffect)(function () {
    // alert(props.isEdit)
    if (props.isEdit) {
      setName(props.el.name);
      setPath(props.el.path);
    } else {
      if (name !== props.el.name || path !== props.el.path) {
        props.handleLinkChange(name, path, props.index);
      }
    }
  }, [props.isEdit]);

  if ("dropdown" in props.el) {
    var items = props.el.dropdown;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: "nav-item " + (props.localDisplaySettings.isMobile ? "ms-2" : "mx-4"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "position-relative " + (props.localDisplaySettings.isMobile ? "input-group" : ""),
        children: [props.isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : ""),
            onChange: function onChange(evt) {
              return setName(evt.target.value);
            },
            style: {
              width: "".concat(name.length + 2, "ch"),
              color: props.webStyle.colors[props.componentStyles.textColor]
            },
            value: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            className: "nav-link dropdown-toggle" + (props.localDisplaySettings.isMobile ? " w-50" : ""),
            style: {
              color: props.webStyle.colors[props.componentStyles.textColor]
            },
            "data-no-dnd": "true",
            "data-bs-toggle": "dropdown",
            id: "navbarDropdown-" + props.el.id,
            role: "button",
            "aria-expanded": "false",
            path: "javascript:void(0)",
            children: "Dropdown"
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: "nav-link dropdown-toggle" + (props.localDisplaySettings.isMobile ? " w-50" : ""),
          style: {
            color: props.webStyle.colors[props.componentStyles.textColor]
          },
          "data-no-dnd": "true",
          "data-bs-toggle": "dropdown",
          id: "navbarDropdown-" + props.el.id,
          role: "button",
          "aria-expanded": "false",
          path: "javascript:void(0)",
          children: name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "dropdown-menu ",
          style: {
            backgroundColor: props.webStyle.colors[props.componentStyles.backgroundColor],
            top: props.isEdit ? "5em" : "2.9em",
            zIndex: 1,
            boxShadow: props.localDisplaySettings.isMobile ? "" : props.borderAndShadow
          },
          "aria-labelledby": "navbarDropdown-" + props.el.id,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
            sensors: props.sensors // modifiers = {[restrictToVerticalAxis]}
            ,
            collisionDetection: _core.closestCenter,
            onDragStart: function onDragStart() {
              showDeleteSpot(true);
            },
            onDragEnd: function onDragEnd(evt) {
              props.handleDropdownDragEnd(evt);
              showDeleteSpot(false);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_sortable.SortableContext, {
              items: items,
              strategy: _sortable.verticalListSortingStrategy,
              children: [props.children, isShowDeleteSpot && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "py-2",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DeleteDrop, {
                  id: "deleteDrop"
                })
              })]
            })
          })
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: "nav-item py-2 " + (props.localDisplaySettings.isMobile ? "ms-2" : "mx-4"),
      children: props.isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : ""),
          onChange: function onChange(evt) {
            return setName(evt.target.value);
          },
          style: {
            width: "".concat(name.length + 2, "ch"),
            color: props.webStyle.colors[props.componentStyles.textColor]
          },
          value: name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : ""),
          onChange: function onChange(evt) {
            return setPath(evt.target.value);
          },
          style: {
            width: "".concat(path.length + 2, "ch"),
            color: props.webStyle.colors[props.componentStyles.textColor]
          },
          value: path
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        "data-no-dnd": "true",
        style: {
          color: props.webStyle.colors[props.componentStyles.textColor]
        },
        className: "text-decoration-none ",
        "aria-current": "page",
        to: path,
        children: name
      })
    });
  }
};

var DropDownLink = function DropDownLink(props) {
  var _useContext2 = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext2.webStyle;

  var _useState21 = (0, _react.useState)(props.name),
      _useState22 = _slicedToArray(_useState21, 2),
      name = _useState22[0],
      setName = _useState22[1];

  var _useState23 = (0, _react.useState)(props.path),
      _useState24 = _slicedToArray(_useState23, 2),
      path = _useState24[0],
      setPath = _useState24[1];

  (0, _react.useEffect)(function () {
    // alert(props.isEdit)
    if (props.isEdit) {
      setName(props.name);
      setPath(props.path);
    } else {
      if (name !== props.name || path !== props.path) {
        props.handleLinkDropdownChange(name, path, props.parentIndex, props.index);
      }
    }
  }, [props.isEdit]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    className: "nav-item col ms-2",
    children: props.isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "input-group ",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        style: {
          color: webStyle.colors[props.componentStyles.textColor]
        },
        className: "form-control-plaintext w-50",
        value: name,
        onChange: function onChange(evt) {
          return setName(evt.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-control-plaintext w-50",
        style: {
          color: webStyle.colors[props.componentStyles.textColor]
        },
        value: path,
        onChange: function onChange(evt) {
          return setPath(evt.target.value);
        }
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      "data-no-dnd": "true",
      style: {
        color: props.webStyle.colors[props.componentStyles.textColor]
      },
      className: "nav-link ",
      "aria-current": "page",
      to: path,
      children: name
    })
  });
};