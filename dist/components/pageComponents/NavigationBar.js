"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationBar;

require("core-js/modules/web.dom-collections.iterator.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO dropdowns need to open only their dropdowns
function NavigationBar(props) {
  const [isSettingsMode, setIsSettingsMode] = (0, _react.useState)(false);
  const [isUnique, setIsUnique] = (0, _react.useState)(false);
  const [isEdit, setIsEdit] = (0, _react.useState)(false);
  const [isShowDeleteSpot, showDeleteSpot] = (0, _react.useState)(false);
  const [isShowDropdownDeleteSpot, showDropdownDeleteSpot] = (0, _react.useState)(false);
  const [isShowButtons, showButtons] = (0, _react.useState)(false);
  const {
    webStyle,
    msgPort,
    appMethods,
    socialMedias,
    cart,
    masterNavData
  } = (0, _react.useContext)(_Website.WebContext);
  const [homeLinkText, setHomeLinkText] = (0, _react.useState)("Site Creator");
  const [uniqueNavData, setUniqueNavData] = (0, _react.useState)([]);

  const setNavData = state => {
    if (isUnique) {
      setUniqueNavData(state);
    } else {
      appMethods.setMasterNavData(state);
    }
  };

  const setContent = content => {
    setIsUnique(true);
    setHomeLinkText(content.homeLinkText);
    setUniqueNavData(content.navData);
  };

  const getContent = () => {
    let content = {};

    if (isUnique) {
      content.homeLinkText = homeLinkText;
      content.navData = uniqueNavData;
      return content;
    } else {
      return {};
    }
  };

  const makeNavbarUnique = () => {
    setIsUnique(true);
    setNavData(masterNavData);
  };

  (0, _react.useEffect)(() => {
    if (msgPort == "save") {
      const componentData = {
        name: props.componentName,
        id: props.id,
        content: getContent()
      };
      appMethods.saveComponentData(props.pageName, props.index, componentData);
    }
  }, [msgPort]);
  (0, _react.useEffect)(() => {
    if (Object.keys(props.content).length > 0) {
      setContent(props.content);
    }
  }, []);
  const componentMapping = {
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
  const sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 5
    }
  }));
  let navData = isUnique ? uniqueNavData : masterNavData;

  if (!navData) {
    navData = [];
  }

  let navItems = [];

  if (isEdit) {
    // for(var index = 1; index < navData.length; index++){
    [...navData].forEach((el, index) => {
      // let el = navData[index]
      let dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach((subEl, subIndex) => {
          dropdownItems.push( /*#__PURE__*/_react.default.createElement(DropDownLink, {
            key: el.name + subEl.name + subEl.path + "DropDown",
            isEdit: true,
            webStyle: webStyle,
            name: subEl.name,
            path: subEl.path,
            onChangeName: evt => {
              handleLinkDropdownChange(evt, index, subIndex, "name");
            },
            onChangePath: evt => {
              handleLinkDropdownChange(evt, index, subIndex, "path");
            }
          }));
        });
      }

      navItems.push( /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item " + (webStyle.isMobile ? "ms-2" : "mx-4"),
        key: "edit" + el.name + "input2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        key: "edit" + el.name + "div"
      }, "dropdown" in el ? /*#__PURE__*/_react.default.createElement("div", {
        key: "edit" + el.name + "div2",
        className: "position-relative " + (webStyle.isMobile ? "input-group" : "")
      }, /*#__PURE__*/_react.default.createElement("input", {
        key: "edit" + el.name + "input",
        className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
        onChange: evt => {
          handleLinkChange(evt, index, "text");
        },
        style: {
          width: "".concat(el.name.length + 2, "ch"),
          color: webStyle.lightShade
        },
        value: el.name
      }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        key: "edit" + el.name + "dropToggle",
        className: "nav-link dropdown-toggle" + (webStyle.isMobile ? " w-50" : ""),
        style: {
          color: webStyle.lightShade
        },
        "data-no-dnd": "true",
        "data-bs-toggle": "dropdown",
        id: "navbarDropdown",
        role: "button",
        "aria-expanded": "false",
        path: "javascript:void(0)"
      }, "Dropdown"), /*#__PURE__*/_react.default.createElement("ul", {
        key: "edit" + el.name + "ul",
        className: "dropdown-menu " + (webStyle.isMobile ? "" : "boxShadow"),
        style: {
          backgroundColor: webStyle.darkAccent
        },
        "aria-labelledby": "navbarDropdown"
      }, /*#__PURE__*/_react.default.createElement("div", null, dropdownItems))) : /*#__PURE__*/_react.default.createElement("div", {
        key: "edit" + el.name + "div",
        className: webStyle.isMobile ? "input-group" : ""
      }, /*#__PURE__*/_react.default.createElement("input", {
        key: "edit" + el.name + "input1",
        className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
        onChange: evt => {
          handleLinkChange(evt, index, "name");
        },
        style: {
          width: "".concat(el.name.length + 2, "ch"),
          color: webStyle.lightShade
        },
        value: el.name
      }), /*#__PURE__*/_react.default.createElement("input", {
        key: "edit" + el.name + "input2",
        className: "form-control-plaintext" + (webStyle.isMobile ? " w-50" : ""),
        onChange: evt => {
          handleLinkChange(evt, index, "path");
        },
        style: {
          width: "".concat(el.path.length + 2, "ch"),
          color: webStyle.lightShade
        },
        value: el.path
      })))));
    }); // Move Mode
  } else {
    for (var index = 0; index < navData.length; index++) {
      let el = navData[index];
      let dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach((el, index) => {
          dropdownItems.push( /*#__PURE__*/_react.default.createElement(_AdminNavWrapper.default, {
            key: el.id,
            id: el.id // order = {el.or}
            ,
            className: webStyle.isMobile ? "ps-3" : "py-2 "
          }, /*#__PURE__*/_react.default.createElement("li", {
            className: "nav-item ms-2"
          }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
            style: {
              color: webStyle.lightShade
            },
            "data-no-dnd": "true",
            className: "nav-link ",
            "aria-current": "page",
            to: el.path
          }, el.name))));
        });
      }

      navItems.push( /*#__PURE__*/_react.default.createElement(_AdminNavWrapper.default, {
        key: el.id,
        id: el.id // order = {el.or}
        ,
        className: "py-2 "
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item " + (webStyle.isMobile ? "ms-2" : "mx-4"),
        style: {
          whiteSpace: "nowrap"
        }
      }, "dropdown" in el ? /*#__PURE__*/_react.default.createElement("div", {
        className: "position-relative "
      }, /*#__PURE__*/_react.default.createElement("a", {
        style: {
          color: webStyle.lightShade
        },
        className: "  dropdown-toggle text-decoration-none",
        "data-bs-toggle": "dropdown",
        id: "navbarDropdown" + el.id,
        role: "button",
        "aria-expanded": "false",
        path: "javascript:void(0)"
      }, el.name), /*#__PURE__*/_react.default.createElement("ul", {
        className: "dropdown-menu border-0 rounded-0 mt-0 " + (webStyle.isMobile ? "" : "boxShadow"),
        style: {
          backgroundColor: webStyle.darkAccent,
          top: "2.5em",
          opacity: "1 !important"
        },
        "aria-labelledby": "navbarDropdown" + el.id
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.DndContext, {
        sensors: sensors,
        collisionDetection: _core.closestCenter // modifiers = {[ verticalListSortingStrategy]}
        ,
        onDragStart: () => {
          showDropdownDeleteSpot(true);
        },
        onDragEnd: evt => {
          handleDropdownDragEnd(evt, index);
          showDropdownDeleteSpot(false);
        }
      }, /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
        items: el.dropdown,
        strategy: _sortable.verticalListSortingStrategy
      }, dropdownItems, isShowDropdownDeleteSpot && /*#__PURE__*/_react.default.createElement(DeleteDrop, {
        id: "".concat(index, ":deleteDrop")
      }), isShowButtons && /*#__PURE__*/_react.default.createElement("button", {
        className: "btn " + (webStyle.isMobile ? "ps-4" : "w-100"),
        "data-no-dnd": "true",
        type: "button",
        style: {
          color: webStyle.lightShade
        },
        onClick: evt => {
          addDropdownlink(evt, index);
        }
      }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlusSquare
      }))))))) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        "data-no-dnd": "true",
        style: {
          color: webStyle.lightShade
        },
        className: "text-decoration-none ",
        "aria-current": "page",
        to: el.path
      }, el.name))));
    }

    ;
  }

  const socialLinks = socialMedias.filter(_ref => {
    let {
      location
    } = _ref;

    if (location === "New Link") {
      return false; // skip
    }

    return true;
  }).map(_ref2 => {
    let {
      link,
      location
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "py-2"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: 'nav-link social-link',
      key: location,
      href: "".concat(link),
      style: {
        color: webStyle.lightShade
      }
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      className: "sm-icons",
      icon: componentMapping[location]
    })));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fullWidth boxShadow px-5  ",
    style: {
      backgroundColor: webStyle.darkAccent,
      color: webStyle.lightShade,
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      zIndex: 1
    },
    onMouseEnter: () => {
      showButtons(true);
    },
    onMouseLeave: () => {
      showButtons(false);
    }
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg mx-4 p-0 container mx-auto"
  }, !isSettingsMode ? /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid g-0 " + (webStyle.isMobile ? " ms-3" : "")
  }, isEdit ? /*#__PURE__*/_react.default.createElement("div", {
    "data-no-dnd": "true"
  }, /*#__PURE__*/_react.default.createElement("input", {
    style: {
      color: webStyle.lightShade
    },
    className: "form-control-plaintext w-50",
    value: homeLinkText,
    onChange: evt => {
      handleLinkChange(evt, 0, "name");
    }
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "form-control-plaintext w-50",
    style: {
      color: webStyle.lightShade
    },
    value: "\\",
    onChange: evt => {
      handleLinkChange(evt, 0, "path");
    }
  })) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    "data-no-dnd": "true",
    className: "navbar-brand",
    to: "/",
    style: {
      color: webStyle.lightShade
    }
  }, homeLinkText), /*#__PURE__*/_react.default.createElement("button", {
    "data-no-dnd": "true",
    className: "navbar-toggler btn",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    style: {
      color: webStyle.lightShade
    },
    icon: _freeSolidSvgIcons.faBars
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0 " + (webStyle.isMobile ? " " : "align-items-center")
  }, isEdit ? /*#__PURE__*/_react.default.createElement("div", {
    "data-no-dnd": "true",
    className: "d-flex " + (webStyle.isMobile ? "flex-column " : "flex-direction-col")
  }, navItems) : /*#__PURE__*/_react.default.createElement(_core.DndContext, {
    sensors: sensors,
    modifiers: [webStyle.isMobile ? _modifiers.restrictToVerticalAxis : _modifiers.restrictToHorizontalAxis],
    collisionDetection: _core.closestCenter,
    onDragStart: () => {
      showDeleteSpot(true);
    },
    onDragEnd: evt => {
      handleDragEnd(evt);
      showDeleteSpot(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
    items: navData,
    strategy: webStyle.isMobile ? _sortable.verticalListSortingStrategy : _sortable.horizontalListSortingStrategy
  }, navItems, isShowDeleteSpot && /*#__PURE__*/_react.default.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/_react.default.createElement(DeleteDrop, {
    id: "deleteDrop"
  }))))), isShowButtons && !isShowDeleteSpot && /*#__PURE__*/_react.default.createElement("div", {
    "data-no-dnd": "true",
    className: "btn-group  ",
    role: "group",
    "aria-label": "Basic example" // onClick={()=>{alert("group")}}

  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn border-end mx-2",
    type: "button",
    onClick: () => {
      addLink();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlusSquare,
    style: {
      color: webStyle.lightShade
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn mx-1 px-0",
    type: "button",
    onClick: () => {
      addLink(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretSquareDown,
    style: {
      color: webStyle.lightShade
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn border-start mx-2",
    type: "button",
    onClick: () => {
      setIsEdit(!isEdit);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: isEdit ? _freeSolidSvgIcons.faArrowsAlt : _freeSolidSvgIcons.faPencilAlt,
    style: {
      color: webStyle.lightShade
    }
  }))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav sm-icons justify-content-start me-0 ",
    style: {
      float: 0
    }
  }, socialLinks, Object.keys(cart).length != 0 && /*#__PURE__*/_react.default.createElement("li", {
    className: "position-relative"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "col ms-3",
    to: "/checkout",
    style: {
      color: webStyle.lightShade
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "m-icons",
    icon: _freeSolidSvgIcons.faShoppingCart
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "position-absolute top-0 start-100 translate-middle badge rounded-pill "
  }, Object.keys(cart).length, /*#__PURE__*/_react.default.createElement("span", {
    className: "visually-hidden"
  }, "unread messages")))), isShowButtons && /*#__PURE__*/_react.default.createElement("button", {
    className: "relative-r btn",
    style: {
      marginRight: "-2.5em"
    },
    "data-no-dnd": "true",
    onClick: () => {
      setIsSettingsMode(!isSettingsMode);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCog,
    style: {
      color: webStyle.lightShade
    }
  })))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center w-100 py-3"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Navigation Bar Settings"), /*#__PURE__*/_react.default.createElement("form", {
    className: "text-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, "Is this Navigation Bar unique?")), /*#__PURE__*/_react.default.createElement("div", {
    class: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    for: "exampleFormControlTextarea1",
    class: "form-label"
  }, "Below will be other settings:"))), /*#__PURE__*/_react.default.createElement("button", {
    className: "relative-r btn h-auto mt-2 ",
    style: {
      marginRight: "-2.5em",
      top: "0"
    },
    "data-no-dnd": "true",
    onClick: () => {
      setIsSettingsMode(!isSettingsMode);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCog,
    style: {
      color: webStyle.lightShade
    }
  })))));

  function addLink(isDropdown) {
    const newLink = isDropdown ? {
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
    setNavData([...navData, newLink]);
  }

  function addDropdownlink(event, index) {
    setNavData(prevData => {
      // alert(index);
      let newData = [...prevData];
      newData[index].dropdown = [...newData[index].dropdown, {
        id: Math.random() * 10000,
        name: "New Link",
        path: "/"
      }];
      setNavData(newData);
    });
    event.stopPropagation();
  }

  function removeLink(index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      setNavData(prevData => {
        // alert(index);
        let newData = [...prevData.slice(0, index), ...prevData.slice(index + 1)];
        setNavData(newData);
      });
    }
  }

  function removeDropdownLink(parentIndex, index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      setNavData(prevData => {
        // alert(index);
        let newData = [...prevData];
        let newDropdown = [...newData[parentIndex].dropdown.slice(0, index), ...newData[parentIndex].dropdown.slice(index + 1)];
        newData[parentIndex].dropdown = newDropdown;
        setNavData(newData);
      });
    }
  }

  function handleLinkChange(event, index, type) {
    setNavData(prevData => {
      let newData = [...prevData];
      newData[index][type] = event.target.value;
      return newData;
    });
  }

  function handleLinkDropdownChange(event, parentIndex, index, type) {
    setNavData(prevData => {
      let newData = [...prevData];
      newData[parentIndex].dropdown[index][type] = event.target.value;
      return newData;
    });
  }

  function handleDragEnd(event) {
    const {
      active,
      over
    } = event; // event.preventDefault();

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;

      if (!over.data.current) {
        removeLink(oldIndex);
        return;
      }

      const newIndex = over.data.current.sortable.index; // removeLink

      setNavData(prevData => {
        return (0, _sortable.arrayMove)(prevData, oldIndex, newIndex);
      });
    }
  }

  function handleDropdownDragEnd(event, index) {
    const {
      active,
      over
    } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index; // if( === 0){

      if (!over.data.current) {
        removeDropdownLink(index, oldIndex);
        return;
      }

      const newIndex = over.data.current.sortable.index;
      setNavData(prevData => {
        let newData = [...prevData];
        newData[index].dropdown = (0, _sortable.arrayMove)(newData[index].dropdown, oldIndex, newIndex);
        return newData;
      });
    } // event.preventDefault();

  }
}

const DeleteDrop = props => {
  const {
    setNodeRef
  } = (0, _core.useDroppable)({
    id: props.id
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: setNodeRef
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-link active border-primary rounded-3",
    style: {
      borderStyle: "dashed",
      borderWidth: "1px"
    }
  }, "Delete"));
}; //  I really need to consolidate this....


const DropDownLink = props => {
  const {
    webStyle
  } = (0, _react.useContext)(_Website.WebContext);
  if (props.isEdit) return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group "
  }, /*#__PURE__*/_react.default.createElement("input", {
    style: {
      color: webStyle.lightShade
    },
    className: "form-control-plaintext w-50",
    value: props.name,
    onChange: props.onChangeName
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "form-control-plaintext w-50",
    style: {
      color: webStyle.lightShade
    },
    value: props.path,
    onChange: props.onChangePath
  })));else {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
};