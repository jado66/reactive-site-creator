"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhotoGallery;

var _react = _interopRequireWildcard(require("react"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _reactPhotoGallery = _interopRequireDefault(require("react-photo-gallery"));

var _Website = require("../Website");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PhotoGallery(props) {
  var initialState = props.content;

  if (Object.keys(initialState).length === 0) {
    initialState = {
      photos: [{
        src: "",
        width: 4,
        height: 3
      }, {
        src: "",
        width: 1,
        height: 1
      }, {
        src: "",
        width: 3,
        height: 4
      }, {
        src: "",
        width: 5,
        height: 3
      }, {
        src: "",
        width: 3,
        height: 4
      }, {
        src: "",
        width: 3,
        height: 4
      }, {
        src: "",
        width: 4,
        height: 3
      }]
    };
  }

  var _useReducer = (0, _react.useReducer)(function (x) {
    return x + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceUpdate = _useReducer2[1];

  var _useComponentStorage = (0, _useStorage.default)(props.pageID + props.id, initialState),
      _useComponentStorage2 = _slicedToArray(_useComponentStorage, 2),
      content = _useComponentStorage2[0],
      setContent = _useComponentStorage2[1];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPictures = _useState2[0],
      setSelectedPictures = _useState2[1];

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings,
      apiMethods = _useContext.apiMethods;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButtons = _useState4[0],
      setShowButtons = _useState4[1]; // const [margin, setMargin] = useState(8)


  var _useState5 = (0, _react.useState)([null, null, null, null]),
      _useState6 = _slicedToArray(_useState5, 2),
      corners = _useState6[0],
      setCorners = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      coords = _useState8[0],
      setCoords = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      topRowY = _useState10[0],
      setTopRowY = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      bottomRowY = _useState12[0],
      setBottomRowY = _useState12[1];

  (0, _react.useEffect)(function () {
    if (coords.length > 0) {
      if (!coords.includes(null)) {
        findCorners();
      }
    }
  }, [coords]);

  function findCorners() {
    return _findCorners.apply(this, arguments);
  }

  function _findCorners() {
    _findCorners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var topLeft, topRight, bottomLeft, bottomRight;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              topLeft = {
                index: 0,
                coords: coords[0]
              };
              topRight = {
                index: -1,
                coords: [-Infinity, Infinity]
              };
              bottomLeft = {
                index: -1,
                coords: [Infinity, -Infinity]
              };
              bottomRight = {
                index: coords.length - 1,
                coords: coords[-1]
              };
              setTopRowY(topLeft.coords[1]);
              setBottomRowY(coords[coords.length - 1][1]);
              coords.forEach(function (coord, index) {
                // top left -> [0,0]
                // if (coord[1] <= topLeft.coords[1] && coord[0] <= topLeft.coords[0]){
                //     topLeft = {index:index, coords: coord}
                // }
                // top right -> [0,Infinity]
                if (coord[1] <= topLeft.coords[1] && coord[0] >= topLeft.coords[0]) {
                  topRight = {
                    index: index,
                    coords: coord
                  };
                } // bottom left -> [0,0]


                if (coord[1] >= topLeft.coords[1] && coord[0] <= topLeft.coords[0]) {
                  bottomLeft = {
                    index: index,
                    coords: coord
                  };
                } // // bottom right -> [0,0]
                // if (coord[1] >= topLeft.coords[1] && coord[0] >= topLeft.coords[0]){
                //     bottomRight = {index:index, coords: coord}
                // }  

              });
              setCorners([topLeft.index, topRight.index, bottomLeft.index, bottomRight.index]);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _findCorners.apply(this, arguments);
  }

  function setPhotoCoords(_x, _x2) {
    return _setPhotoCoords.apply(this, arguments);
  }

  function _setPhotoCoords() {
    _setPhotoCoords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(coords, index) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setCoords(function (prevState) {
                var newCoords = _toConsumableArray(prevState);

                newCoords[index] = coords;
                return newCoords;
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _setPhotoCoords.apply(this, arguments);
  }

  function delayForceUpdate() {
    return _delayForceUpdate.apply(this, arguments);
  }

  function _delayForceUpdate() {
    _delayForceUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setTimeout(function () {
                forceUpdate(); // alert("upda  te")
              }, 1500);
              setCoords([]);
              setCorners([null, null, null, null]);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _delayForceUpdate.apply(this, arguments);
  }

  var addPicture = function addPicture() {
    setContent(function (prevState) {
      var newPhotos = [].concat(_toConsumableArray(prevState.photos), [{
        src: "",
        width: 4,
        height: 3
      }]);
      return _objectSpread(_objectSpread({}, prevState), {}, {
        photos: newPhotos
      });
    });
    delayForceUpdate();
  };

  function deletePictures() {
    return _deletePictures.apply(this, arguments);
  }

  function _deletePictures() {
    _deletePictures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setContent(function (prevState) {
                var newPhotos = _toConsumableArray(prevState.photos);

                newPhotos = newPhotos.filter(function (el, index) {
                  return !selectedPictures.includes(index);
                });
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  photos: newPhotos
                });
              });
              setTimeout(function () {
                setSelectedPictures([]);
                forceUpdate();
              }, 250);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _deletePictures.apply(this, arguments);
  }

  var setImageUrl = function setImageUrl(index, url) {
    setContent(function (prevState) {
      var newPhotos = _toConsumableArray(prevState.photos);

      newPhotos[index].src = url;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        photos: newPhotos
      });
    });
    delayForceUpdate();
  };

  var selectPicture = function selectPicture(picIndex) {
    setSelectedPictures(function (prevState) {
      var newList = _toConsumableArray(prevState);

      var index = newList.indexOf(picIndex);

      if (index > -1) {
        // This means id is present in the array, so remove it
        newList.splice(index, 1);
      } else {
        // This means id is not present in the array, so add it
        newList.push(picIndex);
      }

      return newList;
    });
  };

  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.subscriberBox.headerTextColor,
      backgroundColor: webStyle.componentStyles.subscriberBox.backgroundColor,
      margin: webStyle.componentStyles.photoGallery.margin,
      fullBorder: webStyle.componentStyles.photoGallery.fullBorder
    };
  } catch (error) {}

  var borderShape = webStyle.componentStyles.all.borderShape;
  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  var backgroundColors = Object.values(webStyle.colors).filter(function (color) {
    return color != webStyle.colors[webStyle.componentStyles.background.backgroundColor];
  });
  var imageRenderer = (0, _react.useCallback)(function (_ref) {
    var index = _ref.index,
        left = _ref.left,
        top = _ref.top,
        key = _ref.key,
        photo = _ref.photo,
        margin = _ref.margin,
        photos = _ref.photos;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectedImage // selected={selectAll ? true : false}
    , {
      selectPicture: selectPicture,
      selectPictures: selectedPictures,
      setPhotoCoords: setPhotoCoords,
      setImageUrl: setImageUrl,
      topRowY: topRowY,
      backgroundColors: backgroundColors,
      bottomRowY: bottomRowY,
      corners: corners,
      borderShape: borderShape,
      boxShadow: borderAndShadow,
      margin: margin,
      index: index,
      photo: photo,
      photos: content.photos,
      left: left,
      top: top
    }, key);
  }, [borderShape, borderAndShadow, corners, content.photos, webStyle, selectedPictures]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "px-5 mt-3 justify-contents-around g-0 relative-div",
    "data-no-dnd": "true",
    style: {
      cursor: "auto"
    },
    onMouseEnter: function onMouseEnter() {
      setShowButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      setShowButtons(false);
    },
    children: [selectedPictures.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: 'top-toolbar border-0 text-center ' + (adminSettings.isShowEditor ? " mt-5" : ""),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        onClick: deletePictures,
        className: "mx-auto mt-3 btn btn-light btn-outline-dark",
        children: ["Delete Selected Picture", selectedPictures.length > 1 ? "s" : ""]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: 'g-0 ' + borderShape,
      style: {
        boxShadow: componentStyles.fullBorder ? borderAndShadow : ""
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        // className='bg-info'
        style: {
          margin: "-".concat(componentStyles.margin, "px")
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactPhotoGallery.default, {
          photos: content.photos,
          renderImage: imageRenderer,
          margin: componentStyles.margin
        })
      })
    }), isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "position-absolute d-flex w-100",
      style: {
        bottom: 0,
        right: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: addPicture,
        className: "mx-auto btn btn-light btn-outline-dark",
        children: "Add Picture"
      })
    })]
  });
}

var imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
var selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};

var SelectedImage = function SelectedImage(_ref2) {
  var index = _ref2.index,
      photo = _ref2.photo,
      margin = _ref2.margin,
      direction = _ref2.direction,
      boxShadow = _ref2.boxShadow,
      corners = _ref2.corners,
      selectPicture = _ref2.selectPicture,
      selectPictures = _ref2.selectPictures,
      setImageUrl = _ref2.setImageUrl,
      setPhotoCoords = _ref2.setPhotoCoords,
      borderShape = _ref2.borderShape,
      topRowY = _ref2.topRowY,
      bottomRowY = _ref2.bottomRowY,
      backgroundColors = _ref2.backgroundColors,
      photos = _ref2.photos,
      top = _ref2.top,
      left = _ref2.left;
  var isSelected = selectPictures.includes(index);

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      isShowButtons = _useState14[0],
      setShowButtons = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      offsetTop = _useState16[0],
      setOffsetTop = _useState16[1];

  var inputFile = (0, _react.useRef)(null);

  var updateImage = function updateImage(newImage) {
    if (newImage) {
      encodeImageFileAsURL(newImage);
    }
  };

  var imageToDataUri = function imageToDataUri(img, width, height) {
    // create an off-screen canvas
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'); // set its dimension to target size

    canvas.width = width;
    canvas.height = height; // draw source image into the off-screen canvas:

    ctx.drawImage(img, 0, 0, width, height); // encode image to data-uri with base64 version of compressed image

    return canvas.toDataURL();
  };
  /**
   * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
   * images to fit into a certain area.
   *
   * @param {Number} srcWidth width of source image
   * @param {Number} srcHeight height of source image
   * @param {Number} maxWidth maximum available width
   * @param {Number} maxHeight maximum available height
   * @return {Object} { width, height }
   */


  var calculateAspectRatioFit = function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {
      width: srcWidth * ratio,
      height: srcHeight * ratio
    };
  };

  var encodeImageFileAsURL = function encodeImageFileAsURL(file) {
    var reader = new FileReader();

    reader.onloadend = function () {
      // alert(`RESULT, ${reader.result}`)
      // alert(props.id)
      var result = reader.result;
      var image = new Image();
      image.src = result;

      image.onload = function () {
        // access image size here 
        // alert(`${this.width},${this.height}`);
        // let ratio = this.height/this.width;
        // let height = 350 * ratio
        var dims = calculateAspectRatioFit(this.width, this.height, 600, 600);
        var newResult = imageToDataUri(image, dims.width, dims.height); // resizeBase64Img(result, dims.width, dims.height).then((compressedResult)=>{
        // const compressedResult = compress(newResult)
        // setImageUrl(newResult)

        setImageUrl(index, newResult); // localStorage.setItem(props.id,compressedResult);
        // });
        // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
      };
    };

    reader.readAsDataURL(file);
  };

  (0, _react.useEffect)(function () {
    setOffsetTop(ref.current.offsetTop);
    setPhotoCoords([ref.current.offsetLeft, ref.current.offsetTop], index);
  }, []);

  var ref = /*#__PURE__*/_react.default.createRef();

  var sx = (100 - 30 / photo.width * 100) / 100;
  var sy = (100 - 30 / photo.height * 100) / 100;
  selectedImgStyle.transform = "translateZ(0px) scale3d(".concat(sx, ", ").concat(sy, ", 1)");
  var backgroundColor = backgroundColors[index % backgroundColors.length];

  var handleOnClick = function handleOnClick(e) {
    // setIsSelected(!isSelected);
    selectPicture(index);
  };

  var cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
  };

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  var alteredBorderShape = "";

  if (corners.includes(index) ? borderShape : "") {
    alteredBorderShape = borderShape; // 0 topleft 

    if (corners.indexOf(index) === 0) {
      alteredBorderShape += " topLeft";
    } else if (corners.indexOf(index) === 1) {
      alteredBorderShape += " topRight";
    } else if (corners.indexOf(index) === 2) {
      alteredBorderShape += " bottomLeft";
    } else if (corners.indexOf(index) === 3) {
      alteredBorderShape += " bottomRight";
    }
  }

  var divStyle = _objectSpread(_objectSpread({
    margin: margin,
    height: photo.height,
    boxShadow: boxShadow,
    width: photo.width
  }, cont), {}, {
    backgroundColor: backgroundColor,
    boxShadow: boxShadow
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: isSelected ? _objectSpread(_objectSpread({}, divStyle), selectedImgStyle) : _objectSpread({}, divStyle),
    className: alteredBorderShape + (!isSelected ? " not-selected" : "") + (topRowY == offsetTop ? " mt-0 " : "") + (bottomRowY == offsetTop ? " mb-0" : "") //borderShape
    ,
    onMouseEnter: function onMouseEnter() {
      setShowButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      setShowButtons(false);
    },
    onClick: handleOnClick,
    ref: ref,
    children: [photo.src ?
    /*#__PURE__*/
    // <div className = {(borderShape)+" "+(componentStyles.padding)} style={{backgroundColor:props.webStyle.colors[componentStyles.backgroundColor],boxShadow:borderAndShadow}}>
    (0, _jsxRuntime.jsx)("img", _objectSpread({
      className: alteredBorderShape //borderShape
      ,
      alt: photo.title
    }, photo)) // </div>
    : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        backgroundColor: backgroundColor
      }
    }) // <div className={(alteredBorderShape)+" blankDiv w-100"} style={{minHeight:"150px",boxShadow:boxShadow}}></div>//backgroundColor:props.webStyle.colors[componentStyles.backgroundColor]
    , isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex relative w-100 justify-content-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "btn btn-light btn-outline-dark py-1 px-2 round-0 ",
        style: {
          display: "none"
        },
        type: "file",
        ref: inputFile,
        onChange: function onChange(event) {
          event.stopPropagation();
          console.log(event.target.files[0]);
          updateImage(event.target.files[0]);
        } // ref={inputFile} 

      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "btn btn-light btn-outline-dark py-1 px-2 round-0 ",
        type: "button",
        value: "Change Image",
        onClick: function onClick(event) {
          event.stopPropagation();
          inputFile.current.click(); // inputFile.current.click()
        } // style={buttonStyle}

      })]
    }), isShowButtons && index != 0 && photo.src && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex relative w-100 justify-content-start ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "btn btn-light btn-outline-dark py-1 px-2 round-0 ",
        type: "button" // ref={inputFile} 
        ,
        onChange: function onChange(event) {
          console.log(event.target.files[0]);
          event.stopPropagation(); // updateImage(event.target.files[0]);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faArrowLeft
        })
      })
    }), isShowButtons && index != photos.length - 1 && photo.src && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex relative w-100 justify-content-end ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "btn btn-light btn-outline-dark py-1 px-2 round-0 ",
        type: "button" // ref={inputFile} 
        ,
        onChange: function onChange(event) {
          console.log(event.target.files[0]);
          event.stopPropagation(); // updateImage(event.target.files[0]);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faArrowRight
        })
      })
    })]
  });
};