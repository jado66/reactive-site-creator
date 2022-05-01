"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PictureFrame;

var _react = _interopRequireWildcard(require("react"));

var _lzString = require("lz-string");

var _reactMenu = require("@szhsin/react-menu");

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
  // const content {type: "srcType", url: "" || name: "" } 
  var initialURL = "";
  var initialName = "null"; // try{

  if (props.imageContent) {
    if (props.imageContent.type === "url") {
      initialURL = props.imageContent.url;
    }
  }

  var _useState = (0, _react.useState)(initialURL),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      videoFile = _useState4[0],
      setVideoFile = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      imageName = _useState6[0],
      setImageName = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      areButtonsVisible = _useState8[0],
      setButtonsVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      width = _useState10[0],
      setWidth = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      height = _useState12[0],
      setHeight = _useState12[1];

  var inputImageFile = (0, _react.useRef)(null);
  var inputVideoFile = (0, _react.useRef)(null);
  var container = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_Website.WebContext),
      apiMethods = _useContext.apiMethods; // Similar to componentDidMount and componentDidUpdate:
  // setVideoRatio


  (0, _react.useEffect)(function () {
    if (props.imageContent) {
      if (props.imageContent.type == "youtube") {
        setTimeout(function () {
          setVideoRatio();
        }, 1000);
      }
    }
  }, []);
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
  (0, _react.useEffect)(function () {
    if (props.imageContent) {
      if (props.imageContent.type == "url") {
        setUrl(props.imageContent.url);
      }
    }
  }, [props.imageContent]);

  var updateImage = function updateImage(newImage) {
    if (newImage) {
      apiMethods.uploadImageToDB(newImage, function () {});
      props.setImageContent({
        type: "file",
        name: newImage.name
      });
      setImageName(newImage.name);
      encodeImageFileAsURL(newImage);
    }
  };

  var updateVideo = function updateVideo(newVideo) {
    if (newVideo) {
      // apiMethods.uploadImageToDB(newVideo, () => {})
      props.setImageContent({
        type: "video",
        name: newVideo.name
      });
      setUrl(URL.createObjectURL(newVideo)); // encodeImageFileAsURL(newVideo)
    }
  };

  var removePicture = function removePicture() {
    setUrl("");
    props.setImageContent({
      type: ""
    }); // localStorage.removeItem(props.id);
  };

  var getRandomPicture = function getRandomPicture() {
    var keyword = props.webStyle.componentStyles.pictureFrame.randomImageKeyword;
    var randomNum = Math.floor(Math.random() * 1000);
    var url = "https://loremflickr.com/1024/1024/".concat(keyword, "?lock=").concat(randomNum, "\"");
    setUrl(url);
    props.setImageContent({
      type: "url",
      url: url
    });
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


  var changeImageFromURL = function changeImageFromURL() {
    var imageUrl = window.prompt("Input the url");
    setUrl(imageUrl);
    props.setImageContent({
      type: "url",
      url: imageUrl
    });
  };

  var changeVideoFromURL = function changeVideoFromURL() {
    var videoUrl = window.prompt("Input the url");
    setUrl(videoUrl);
    props.setImageContent({
      type: "video",
      url: videoUrl
    });
  };

  var setVideoRatio = function setVideoRatio() {
    if (container.current) {
      setWidth(container.current.clientWidth);

      var _height = Math.floor(9 * container.current.clientWidth / 16);

      setHeight(_height);
      container.current.style.minHeight = "".concat(_height, "px");
    }
  };

  var embedVideoFromURL = function embedVideoFromURL() {
    var videoUrl = window.prompt("Input the url");
    setTimeout(function () {
      setVideoRatio();
    }, 1000);
    setUrl(videoUrl);
    props.setImageContent({
      type: "youtube",
      url: videoUrl
    });
  };

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

      setUrl(newResult); // props.setImageUrl(newResult)
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

        setUrl(newResult);
        props.setImageContent({
          type: "file",
          name: file.name
        }); // localStorage.setItem(props.id,compressedResult);
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

  var backgroundColor = props.webStyle.colors[componentStyles.backgroundColor];
  var borderShape = props.webStyle.componentStyles.all.borderShape;
  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  var imageMenu = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
      className: "px-0 py-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
        className: "btn p-0 px-4 text-start flex-grow-1",
        onClick: function onClick() {
          inputImageFile.current.click();
        },
        children: !url ? "Upload Image from File" : "Change Image from File"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
      className: "px-0 py-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
        className: "btn p-0 px-4 text-start flex-grow-1",
        onClick: changeImageFromURL,
        children: !url ? "Set Image from URL" : "Change Image from URL"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
      className: "px-0 py-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
        className: "btn p-0 px-4 text-start flex-grow-1",
        onClick: getRandomPicture,
        children: "Random Image"
      })
    })]
  });
  var imageContent = props.imageContent;

  if (!imageContent) {
    imageContent = {
      type: ""
    };
  }

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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: borderShape + " " + componentStyles.padding,
      style: {
        minHeight: "300px",
        backgroundColor: backgroundColor,
        boxShadow: borderAndShadow
      },
      children: [imageContent.type == "video" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
          className: "d-flex flex-grow-1 w-100",
          src: url,
          controls: true,
          children: "Your browser does not support the video tag."
        })
      }), imageContent.type == "youtube" && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "video-responsive",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          ref: container // width="560" height="315"
          ,
          className: "d-flex flex-grow-1 w-100 h-100",
          src: "https://www.youtube.com/embed/".concat(props.imageContent.url),
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          title: "Embedded youtube"
        })
      }), imageContent.type == "url" && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: borderShape + " w-100 no-select",
        src: url
      })]
    }), areButtonsVisible && props.adminSettings.isEditMode && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex flex-row relative",
      style: {
        left: 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        style: {
          display: "none"
        },
        type: "file",
        ref: inputImageFile,
        onChange: function onChange(event) {
          console.log(event.target.files[0]);
          updateImage(event.target.files[0]);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        style: {
          display: "none"
        },
        type: "file",
        ref: inputVideoFile,
        onChange: function onChange(event) {
          console.log(event.target.files[0]);
          updateVideo(event.target.files[0]);
        }
      }), props.moveLeft && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "ms-3 mt-2 btn btn-light border border-dark",
        type: "button",
        value: "Move Left",
        onClick: function onClick() {
          return props.moveLeft();
        },
        style: buttonStyle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.Menu, {
        className: " dropdown ",
        menuClassName: "border  ",
        menuButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
          className: "ms-2 mt-2 btn btn-light dropdown-toggle border border-dark ",
          children: imageContent.type !== "" ? "Change Media" : "Add Media"
        }),
        transition: true,
        children: props.includeVideos ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.SubMenu, {
            label: "Image",
            menuClassName: "border",
            children: imageMenu
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactMenu.SubMenu, {
            label: "Video",
            menuClassName: "border",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              className: "px-0 py-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
                className: "btn p-0 px-4 text-start flex-grow-1",
                onClick: function onClick() {
                  inputVideoFile.current.click();
                },
                children: !url ? "Upload Video from File" : "Change Video from File"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              className: "px-0 py-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
                className: "btn p-0 px-4 text-start flex-grow-1",
                onClick: changeVideoFromURL,
                children: !url ? "Set Video from URL" : "Change Video from URL"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuItem, {
              className: "px-0 py-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMenu.MenuButton, {
                className: "btn p-0 px-4 text-start flex-grow-1",
                onClick: embedVideoFromURL,
                children: "Embed YouTube Video"
              })
            })]
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: imageMenu
        })
      }), imageContent.type && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "ms-3 mt-2 btn btn-light border border-dark",
        type: "button",
        value: "Remove Media",
        onClick: function onClick() {
          return removePicture();
        },
        style: buttonStyle
      }), props.moveRight && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "ms-3 mt-2 btn btn-light border border-dark",
        type: "button",
        value: "Move Right",
        onClick: function onClick() {
          return props.moveRight();
        },
        style: buttonStyle
      })]
    })]
  });
}