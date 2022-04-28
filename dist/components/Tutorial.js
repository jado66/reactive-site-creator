"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tutorial;

var _react = require("react");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Website = require("./Website");

var _Footer = _interopRequireDefault(require("./pageComponents/Footer"));

var _reactRouterDom = require("react-router-dom");

var _Spacer = _interopRequireDefault(require("./pageComponents/Spacer"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _DndSensors = require("../components/helpers/DndSensors");

var _utilities = require("@dnd-kit/utilities");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Tutorial(props) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      appMethods = _useContext.appMethods,
      socialMedias = _useContext.socialMedias,
      localDisplaySettings = _useContext.localDisplaySettings,
      pages = _useContext.pages;

  var completeStep = function completeStep() {
    setStep(function (prevstep) {
      localStorage.setItem("showTutorial", prevstep + 1);
      return prevstep + 1;
    });
  };

  var finishTutorial = function finishTutorial() {
    // alert("finish")
    localStorage.setItem("showTutorial", -1);
    appMethods.setShowTutorial(false);
  }; // Website init


  (0, _react.useEffect)(function () {
    var step = localStorage.getItem("showTutorial");

    if (step) {
      if (step === '-1') {
        setStep(0);
      } else {
        setStep(parseInt(step));
      }
    }
  }, []);
  var steps = [/*#__PURE__*/(0, _jsxRuntime.jsx)(Step0, {
    completeStep: completeStep,
    appMethods: appMethods
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step1, {
    completeStep: completeStep,
    webStyle: webStyle
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step2, {
    completeStep: completeStep,
    appMethods: appMethods,
    webStyle: webStyle
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step3, {
    completeStep: completeStep,
    socialMedias: socialMedias
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step4, {
    completeStep: completeStep,
    pages: pages
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step5, {
    completeStep: completeStep
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LastStep, {
    completeStep: finishTutorial
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Step7, {
    completeStep: completeStep
  })];
  var stepheaders = ["Quick Start: Complete These Tasks", "Give Your Site A Name", "Set the Site Colors", "Add Social Media Links", "Add a New Page", "Add Components", "You are ready!"]; //,"Move Components","Delete a Component","","","",""]

  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var marginColor = webStyle.colors[webStyle.componentStyles.background.marginColor];
  var backgroundColor = webStyle.colors[webStyle.componentStyles.background.backgroundColor];
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "w-100",
    style: {
      backgroundColor: marginColor
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "outerSection ",
      className: " " + (localDisplaySettings.isMobile ? " " : " container"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "innerSection",
        className: "col justify-items-baseline ",
        style: {
          backgroundColor: backgroundColor,
          boxShadow: webStyle.componentStyles.background.applyBackground ? borderAndShadow : "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "d-flex w-100 justify-content-center flex-column text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "border-top-0 border border-dark w-50 mx-auto p-3 flex-column d-flex relative-div ",
            style: {
              backgroundColor: "white"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "relative p-3 ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "btn",
                onClick: function onClick() {
                  return appMethods.setShowTutorial(false);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  icon: _freeSolidSvgIcons.faXmark
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "text-decoration-underline mb-2",
              children: step === 0 ? "Welcome to Reactive Site Creator" : step < stepheaders.length - 1 ? "Step ".concat(step) : 'Congrats!'
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
              className: "mb-4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex-row d-flex justify-content-between mb-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CircleButton, {
                onClick: function onClick() {
                  return setStep(function (prevstep) {
                    if (prevstep > 0) {
                      localStorage.setItem("showTutorial", prevstep - 1);
                      return prevstep - 1;
                    } else {
                      return prevstep;
                    }
                  });
                },
                children: step > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  icon: _freeSolidSvgIcons.faBackwardStep
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "mb-1 text-center ",
                children: stepheaders[step]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CircleButton, {
                onClick: function onClick() {
                  return setStep(function (prevstep) {
                    if (prevstep < stepheaders.length - 1) {
                      localStorage.setItem("showTutorial", prevstep + 1);
                      return prevstep + 1;
                    } else {
                      return prevstep;
                    }
                  });
                },
                children: step < stepheaders.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  icon: _freeSolidSvgIcons.faForwardStep
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mx-5",
              children: steps[step]
            })]
          })
        })
      })
    })
  });
}

;

function CircleButton(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "rounded-circle",
    style: {
      width: "2em",
      height: "2em"
    },
    onClick: props.onClick,
    children: props.children
  });
}

function Step0(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark",
      children: "Lets Go!"
    })
  });
}

function Step1(props) {
  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      siteName = _useState4[0],
      setSiteName = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      canContinue = _useState6[0],
      setCanContinue = _useState6[1];

  var completeStep = function completeStep() {
    alert("complete");
    props.appMethods.setWebStyle(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        siteName: siteName
      });
    });
    props.completeStep();
  };

  (0, _react.useEffect)(function () {
    if (siteName !== "") {
      setCanContinue(true);
    }
  }, [siteName]);
  (0, _react.useEffect)(function () {
    if (props.webStyle.siteName !== "New Website") {
      setSiteName(props.webStyle.siteName);
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-column d-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "What is the site name?"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: "my-3",
      placeholder: "New Site",
      value: siteName,
      onChange: function onChange(evt) {
        setSiteName(evt.target.value);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "h5 mt-3 mb-4",
      style: {
        visibility: !canContinue ? "hidden" : ""
      },
      children: ["You can change the name later by going to the admin menu (this icon ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUserCog
      }), " on the ribbon) under Site Name. "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: !canContinue,
      children: "Click Here to Continue"
    })]
  });
}

function Step2(props) {
  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      paletteHasBeenGenerated = _useState8[0],
      setPaletteHasBeenGenerated = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      canContinue = _useState10[0],
      setCanContinue = _useState10[1];

  (0, _react.useEffect)(function () {
    if (props.webStyle.colors.lightShade !== "#FFFFFF" || props.webStyle.colors.lightAccent !== "#FFFFFF" || props.webStyle.colors.mainBrandColor !== "#FFFFFF" || props.webStyle.colors.darkAccent !== "#FFFFFF" || props.webStyle.colors.darkShade !== "#FFFFFF") {
      setPaletteHasBeenGenerated(true);
      setCanContinue(true);
    }
  }, []);

  var generateColorPalette = function generateColorPalette() {
    setCanContinue(true);

    if (!paletteHasBeenGenerated) {
      setPaletteHasBeenGenerated(true);
    }

    props.appMethods.getRandomColors();
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-column d-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "Test Out Some Color Palletes"
    }), paletteHasBeenGenerated && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex-row d-flex justify-content-center my-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border border-dark border-end-0 ",
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: props.webStyle.colors.lightShade
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border border-dark border-start-0 border-end-0",
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: props.webStyle.colors.lightAccent
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border border-dark border-start-0 border-end-0",
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: props.webStyle.colors.mainBrandColor
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border border-dark border-start-0 border-end-0",
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: props.webStyle.colors.darkAccent
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border border-dark border-start-0 ",
        style: {
          width: "40px",
          height: "40px",
          backgroundColor: props.webStyle.colors.darkShade
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "mt-3 btn btn-outline-dark",
      onClick: generateColorPalette,
      children: "New Color Palette"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "h5 my-4",
      style: {
        color: props.webStyle.colors.darkShade
      },
      children: ["You can individually change these colors by going to the Styles menu (this icon ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPalette
      }), " on the ribbon) and then Color Options. "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: !canContinue,
      children: "Continue"
    })]
  });
}

function Step3(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
      children: ["On the ribbon click this icon ", /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "ms-2",
        style: {
          height: "32px"
        },
        src: "data:image/png;base64,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"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {}), props.socialMedias.filter(function (socialMedia) {
      return socialMedia.location != "New Link";
    }).length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
      className: "pb-2",
      children: "Click the plus and add your first social media link "
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
      className: "pb-2",
      children: "Add as many as you would like "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: props.socialMedias.filter(function (socialMedia) {
        return socialMedia.location != "New Link";
      }).length === 0,
      children: "Continue"
    })]
  });
}

function Step4(props) {
  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      navigatedAway = _useState12[0],
      setNavigatedAway = _useState12[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "h4 text-center",
      children: ["On the ribbon click this icon ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        className: " ms-3",
        icon: _freeSolidSvgIcons.faFile
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "mt-4 fw-bold",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Pages:"
      }), props.pages.map(function (page, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: page.path,
          onClick: function onClick() {
            if (index === 0) setNavigatedAway(true);
          },
          className: "ms-2 fw-bold",
          children: page.name + (index !== props.pages.length - 1 ? "," : "")
        });
      })]
    }), props.pages.filter(function (page) {
      return page.name != "Home";
    }).length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
      className: "pb-2 mt-4",
      children: "Click the plus under Home and add a new page. You can change the name and path. To save the changes click \"Save Page Changes\". "
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: navigatedAway ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
        className: "pb-2 mt-4",
        children: "Visit the page in the pages menu or click the links above."
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
        className: "pb-2 mt-4",
        children: "See what happens when you change the pages name."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: props.pages.filter(function (page) {
        return page.name != "Home";
      }).length === 0,
      children: "Continue"
    })]
  });
}

function Step5(props) {
  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      hasClicked = _useState14[0],
      setHasClicked = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      hasAddedComponents = _useState16[0],
      setHasAddedComponents = _useState16[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-column d-flex",
    children: [hasClicked ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "Click on a component "
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "Hover the mouse in between components and click the light blue separator. "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 1"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Spacer.default, {
      onClick: function onClick() {
        return setHasClicked(true);
      },
      insertComponent: function insertComponent() {
        return setHasAddedComponents(true);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 2"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "h5 mt-3 mb-4",
      style: {
        visibility: !hasAddedComponents ? "hidden" : ""
      },
      children: "Try this out on the page below. Hover the mouse a little bit under the tutorial. You may have to move the mouse around to find the spacer.  "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: !hasAddedComponents,
      children: "Continue"
    })]
  });
}

function LastStep(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark",
      children: "Complete the tutorial!"
    })
  });
}

function Step6(props) {
  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      canContinue = _useState18[0],
      setCanContinue = _useState18[1];

  var _useState19 = (0, _react.useState)([/*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentWrapper, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center rounded",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 1"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentWrapper, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center rounded",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 2"
      })
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentWrapper, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center rounded",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 3"
      })
    })
  })]),
      _useState20 = _slicedToArray(_useState19, 2),
      items = _useState20[0],
      setItems = _useState20[1];

  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_DndSensors.MouseSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }));

  var handleDragStart = function handleDragStart(event) {
    var active = event.active; // setActiveID(active.id);
  };

  var handleDragEnd = function handleDragEnd(event) {
    var active = event.active,
        over = event.over;

    if (active.id !== over.id) {
      var oldIndex = active.data.current.sortable.index;
      var newIndex = over.data.current.sortable.index;
      setItems(function (components) {
        return (0, _sortable.arrayMove)(components, oldIndex, newIndex);
      }); // setActiveID(null)
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-column d-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "Click and hold on a component "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "px-3 border border-dark my-3 rounded",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
        sensors: sensors,
        modifiers: [_modifiers.restrictToVerticalAxis],
        collisionDetection: _core.closestCenter,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sortable.SortableContext, {
          items: items,
          strategy: _sortable.verticalListSortingStrategy,
          children: items
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: !canContinue,
      children: "Continue"
    })]
  });
}

function Step7(props) {
  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      canContinue = _useState22[0],
      setCanContinue = _useState22[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-column d-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: "Click above the component "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border border-dark my-3 d-flex justify-content-center",
      style: {
        backgroundColor: "#AEC7BE",
        height: "45px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "m-auto",
        children: "Component 1"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: props.completeStep,
      className: "btn btn-outline-dark my-2",
      disabled: !canContinue,
      children: "Continue"
    })]
  });
} // import "bootstrap/dist/css/bootstrap.css";


function ComponentWrapper(props) {
  var _useSortable = (0, _sortable.useSortable)({
    id: props.id
  }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition,
      isDragging = _useSortable.isDragging;

  var style = {
    position: props.makeSticky ? "sticky" : "",
    top: props.makeSticky ? "".concat(props.offsetY + 1.5, "em") : "",
    zIndex: props.makeSticky ? 15 : "",
    cursor: isDragging ? "move" : "auto",
    opacity: isDragging ? 0.5 : 1,
    transform: _utilities.CSS.Translate.toString(transform),
    transition: transition
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread(_objectSpread({
    onClick: function onClick(event) {
      if (event.target === event.currentTarget) {
        props.toggleComponentSelect(props.id);
      }
    },
    ref: setNodeRef,
    style: _objectSpread(_objectSpread({}, style), props.style)
  }, attributes), listeners), {}, {
    className: props.className + (props.isSelected ? " border border-primary" : ""),
    children: props.children
  }));
}