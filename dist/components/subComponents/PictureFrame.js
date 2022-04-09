"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PictureFrame;

var _react = _interopRequireWildcard(require("react"));

var _lzString = require("lz-string");

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PictureFrame(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      imageName = _useState4[0],
      setImageName = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      areButtonsVisible = _useState6[0],
      setButtonsVisible = _useState6[1];

  var inputFile = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      apiMethods = _useContext.apiMethods; // Similar to componentDidMount and componentDidUpdate:


  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var image;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return apiMethods.retreiveImageFromDB(props.imageName);

              case 2:
                image = _context.sent;

                // setImageUrl(image)
                if (image) {
                  resizeImageUri(image);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }(); // call the function


    fetchData().catch(console.error);
  }, [props.imageName]);

  var updateImage = function updateImage(newImage) {
    if (newImage) {
      apiMethods.uploadImageToDB(newImage, function () {});
      props.setImageName(newImage.name);
      setImageName(newImage.name);
      encodeImageFileAsURL(newImage);
    }
  };

  var removePicture = function removePicture() {
    props.setImageName(""); // setImageUrl("")
    // localStorage.removeItem(props.id);
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
  /**
  //  * Resize a base 64 Image
  //  * @param {String} base64 - The base64 string (must include MIME type)
  //  * @param {Number} newWidth - The width of the image in pixels
  //  * @param {Number} newHeight - The height of the image in pixels
  //  */
  // const resizeBase64Img = (base64, newWidth, newHeight)=> {
  //     return new Promise((resolve, reject)=>{
  //         alert(`${newWidth},${newHeight}`)
  //         var canvas = document.createElement("canvas");
  //         canvas.style.width = newWidth.toString()+"px";
  //         canvas.style.height = newHeight.toString()+"px";
  //         let context = canvas.getContext("2d");
  //         let img = document.createElement("img");
  //         img.src = base64;
  //         img.onload = function () {
  //             context.scale(newWidth/img.width,  newHeight/img.height);
  //             context.drawImage(img, 0, 0); 
  //             resolve(canvas.toDataURL());               
  //         }
  //     });
  // }


  var resizeImageUri = function resizeImageUri(url) {
    var image = new Image();
    image.src = url;

    image.onload = function () {
      // access image size here 
      // alert(`${this.width},${this.height}`);
      // let ratio = this.height/this.width;
      // let height = 350 * ratio
      var dims = calculateAspectRatioFit(this.width, this.height, 600, 600);
      var newResult = imageToDataUri(image, dims.width, dims.height); // resizeBase64Img(result, dims.width, dims.height).then((compressedResult)=>{
      // const compressedResult = compress(newResult)

      setImageUrl(newResult); // props.setImageUrl(newResult)
      // localStorage.setItem(props.id,compressedResult);
      // });
      // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
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

        setImageUrl(newResult);
        props.setImageName(file.name); // localStorage.setItem(props.id,compressedResult);
        // });
        // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
      };
    };

    reader.readAsDataURL(file);
  };

  var buttonStyle = {
    backgroundColor: props.webStyle.lightShade,
    color: props.webStyle.darkShade,
    borderRadius: "3px",
    border: "1px solid ".concat(props.webStyle.colors.darkShade)
  };
  var componentStyles = {};

  try {
    componentStyles = {
      padding: props.webStyle.componentStyles.pictureFrame.padding,
      backgroundColor: props.webStyle.componentStyles.pictureFrame.backgroundColor
    };
  } catch (error) {}

  var borderShape = props.webStyle.componentStyles.all.borderShape;
  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative-div " + props.className + (props.isNested ? "" : " px-5 mb-5"),
    onMouseEnter: function onMouseEnter() {
      setButtonsVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      setButtonsVisible(false);
    },
    style: {
      flex: "1"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: ["Image Name ", imageName]
    }), imageUrl ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: borderShape + " " + componentStyles.padding,
      style: {
        backgroundColor: props.webStyle.colors[componentStyles.backgroundColor],
        boxShadow: borderAndShadow
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: borderShape + " w-100 no-select",
        src: imageUrl
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: borderShape + " blankDiv w-100",
      style: {
        minHeight: "300px",
        backgroundColor: props.webStyle.colors[componentStyles.backgroundColor],
        boxShadow: borderAndShadow
      }
    }), areButtonsVisible && props.adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "row relative-l",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          style: {
            display: "none"
          },
          type: "file",
          ref: inputFile,
          onChange: function onChange(event) {
            console.log(event.target.files[0]);
            updateImage(event.target.files[0]);
          }
        }), !props.imageUrl ? /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "button",
          value: "Upload Image",
          onClick: function onClick() {
            inputFile.current.click();
          },
          style: buttonStyle
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "button",
          value: "Change Image",
          onClick: function onClick() {
            inputFile.current.click();
          },
          style: buttonStyle
        }), props.imageUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "button",
          value: "Remove Picture",
          onClick: function onClick() {
            return removePicture();
          },
          style: buttonStyle
        })]
      })
    })]
  });
}