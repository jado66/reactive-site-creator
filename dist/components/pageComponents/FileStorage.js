"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FileStorage;

var _ComponentMargin = _interopRequireDefault(require("../subComponents/ComponentMargin"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _react = require("react");

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function FileStorage(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      appMethods = _useContext.appMethods;

  var _useState = (0, _react.useState)({
    "Library": {
      "Data": {
        "-": ["Text1.txt", "Text2.txt"]
      },
      "-": ["Img1.png", "Img2.png", "Img3.png", "Img4.png"]
    },
    '-': []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dirMap = _useState2[0],
      setDirMap = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      allSelected = _useState4[0],
      setAllSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      allFavorited = _useState6[0],
      setAllFavorited = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hover = _useState8[0],
      setHover = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      currentUrl = _useState10[0],
      setCurrentUrl = _useState10[1];

  var inputFile = (0, _react.useRef)(null);

  var _useState11 = (0, _react.useState)({
    "-": ["Text1.txt", "Text2.txt"]
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      currentDirContents = _useState12[0],
      setCurrentDirContents = _useState12[1]; // content


  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedFiles = _useState14[0],
      setSelectedFiles = _useState14[1];

  var _useState15 = (0, _react.useState)("Home/Library/Data"),
      _useState16 = _slicedToArray(_useState15, 2),
      path = _useState16[0],
      setPath = _useState16[1];

  var changeImage = function changeImage(imageName) {
    alert(path + "/" + imageName);
  };

  var removeFiles = function removeFiles(evt) {
    var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var filesToRemove = [];

    if (fileName) {
      filesToRemove = [fileName];
    } else {
      if (allSelected) {
        filesToRemove = [].concat(_toConsumableArray(currentDirContents['-']), _toConsumableArray(Object.keys(currentDirContents).filter(function (el) {
          return el !== "-";
        }).map(function (el) {
          return el + "/";
        })));
      } else {
        filesToRemove = _toConsumableArray(selectedFiles);
      }
    }

    var foldersToRemove = [];

    for (var i = filesToRemove.length - 1; i >= 0; i--) {
      if (filesToRemove[i][filesToRemove[i].length - 1] === '/') {
        foldersToRemove.push(filesToRemove[i].slice(0, -1));
        filesToRemove.splice(i, 1);
      }
    }

    var warningMessage = "Are you sure you would like to delete the selected";

    if (filesToRemove.length > 0) {
      warningMessage += " file".concat(filesToRemove.length > 1 ? "s" : "");
      if (foldersToRemove.length > 0) warningMessage += " and";else {
        warningMessage += "?";
      }
    }

    if (foldersToRemove.length > 0) {
      warningMessage += " folder".concat(foldersToRemove.length > 1 ? "s" : "", "? Type \"YES\" to continue:");
    }

    appMethods.createWarningToast(warningMessage, function () {
      // Remove favorited storage
      for (var i = 0; i < filesToRemove.length; i++) {
        localStorage.removeItem("FavoriteFiles: ".concat(path + "/" + filesToRemove[i]));
      }

      setSelectedFiles([]);
      var directories = path.split('/').slice(1);

      var newDirMap = _objectSpread({}, dirMap);

      var currentDir = newDirMap;

      for (var i = 0; i < directories.length; i++) {
        currentDir = currentDir[directories[i]];
      }

      var fileIndeciesToRemove = [];

      for (var i = 0; i < currentDir['-'].length; i++) {
        if (filesToRemove.includes(currentDir['-'][i])) {
          fileIndeciesToRemove.push(i);
        }
      }

      for (var i = fileIndeciesToRemove.length - 1; i >= 0; i--) {
        currentDir['-'].splice(fileIndeciesToRemove[i], 1);
      }

      for (var i = 0; i < foldersToRemove.length; i++) {
        delete currentDir[foldersToRemove[i]];
      }

      setSelectedFiles([]);
      setDirMap(newDirMap);
      setCurrentDirContents(currentDir);
    }, "warning-105", foldersToRemove.length > 0 ? "YES" : null);
  };

  var addFile = function addFile(files) {
    var newFiles = [];

    for (var i = 0; i < files.length; i++) {
      newFiles.push(files[i].name);
    }

    var directories = path.split('/').slice(1);

    var newDirMap = _objectSpread({}, dirMap);

    var currentDir = newDirMap;

    for (var i = 0; i < directories.length; i++) {
      currentDir = currentDir[directories[i]];
    }

    currentDir['-'] = [].concat(_toConsumableArray(currentDir['-']), newFiles);
    setDirMap(newDirMap);
    setCurrentDirContents(currentDir);
  };

  var renameFolder = function renameFolder(evt, folderName) {
    var newFolderName = window.prompt("What is the new folder name?");

    if (newFolderName) {
      var _directories = path.split('/').slice(1);

      var newDirMap = _objectSpread({}, dirMap);

      var currentDir = newDirMap;

      for (var i = 0; i < _directories.length; i++) {
        currentDir = currentDir[_directories[i]];
      }

      currentDir[newFolderName] = _objectSpread({}, currentDir[folderName]);
      delete currentDir[folderName];
      setDirMap(newDirMap);
      setCurrentDirContents(currentDir);
    }
  };

  var renameSelected = function renameSelected(evt, fileName) {
    var filesToRename = [];

    if (fileName) {
      filesToRename = [fileName];
    } else {
      if (allSelected) {
        filesToRename = [].concat(_toConsumableArray(currentDirContents['-']), _toConsumableArray(Object.keys(currentDirContents).filter(function (el) {
          return el !== "-";
        }).map(function (el) {
          return el + "/";
        })));
      } else {
        filesToRename = _toConsumableArray(selectedFiles);
      }
    }

    for (var i = filesToRename.length - 1; i >= 0; i--) {
      if (filesToRename[i][filesToRename[i].length - 1] === '/') {
        filesToRename.splice(i, 1);
      }
    }

    if (filesToRename.length === 0) {
      appMethods.createWarningToast("This method can only be used to rename multiple files.", function () {}, "warning-105");
      return;
    }

    var prompt = filesToRename.length > 1 ? "What is the new base-name for the files? Because multiple files are selected, files will have a number appended to the base name." : "What is the new name for the file?";
    var baseName = window.prompt(prompt);

    if (baseName.trim()) {
      setSelectedFiles([]);

      var _directories2 = path.split('/').slice(1);

      var newDirMap = _objectSpread({}, dirMap);

      var currentDir = newDirMap;

      for (var i = 0; i < _directories2.length; i++) {
        currentDir = currentDir[_directories2[i]];
      }

      var fileIndeciesToRename = [];

      for (var i = 0; i < currentDir['-'].length; i++) {
        if (filesToRename.includes(currentDir['-'][i])) {
          fileIndeciesToRename.push(i);
        }
      }

      var k = 0;

      for (var i = 0; i < fileIndeciesToRename.length; i++) {
        var fileExt = currentDir['-'][i].match(/\.[0-9a-z]+$/i)[0];

        if (filesToRename.length > 1) {
          currentDir['-'][i] = baseName + k.toString() + fileExt;
        } else {
          currentDir['-'][i] = baseName + fileExt;
        }

        k++;
      }

      setSelectedFiles([]);
      setAllSelected(false);
      setDirMap(newDirMap);
      setCurrentDirContents(currentDir);
    }
  };

  var addSelectedFile = function addSelectedFile(imageName, isFolder) {
    setSelectedFiles(function (prevState) {
      if (isFolder) {
        return [].concat(_toConsumableArray(prevState), [imageName + "/"]);
      } else {
        return [].concat(_toConsumableArray(prevState), [imageName]);
      }
    });
  };

  var removeSelectedFile = function removeSelectedFile(imageName, isFolder) {
    setSelectedFiles(function (prevState) {
      var newState = _toConsumableArray(prevState);

      var idx = newState.indexOf(imageName + (isFolder ? "/" : ""));
      if (idx != -1) newState.splice(idx, 1);
      return newState;
    });
  };

  var deleteFolder = function deleteFolder(evt, folderName) {
    appMethods.createWarningToast("Are you sure you would like to delete the folder \"".concat(folderName, "\"? Type \"YES\" to delete this page:"), function () {
      var directories = path.split('/').slice(1);

      var newDirMap = _objectSpread({}, dirMap);

      var currentDir = newDirMap;

      for (var i = 0; i < directories.length; i++) {
        currentDir = currentDir[directories[i]];
      }

      delete currentDir[folderName];
      setDirMap(newDirMap);
      setCurrentDirContents(currentDir);
    }, "warning-105", "YES");
  };

  var addNewFolder = function addNewFolder() {
    var newFolderName = window.prompt("What is the new folders name?");

    if (newFolderName && newFolderName !== "-") {
      var _directories3 = path.split('/').slice(1);

      var newDirMap = _objectSpread({}, dirMap);

      var currentDir = newDirMap;

      for (var i = 0; i < _directories3.length; i++) {
        currentDir = currentDir[_directories3[i]];
      }

      currentDir[newFolderName] = {
        '-': []
      };
      setDirMap(newDirMap);
      setCurrentDirContents(currentDir);
    }
  };

  var goToCurrentFolder = function goToCurrentFolder(directory) {
    // setCurrentFolder(directory)
    setAllFavorited(false);
    setAllSelected(false);
    setSelectedFiles([]);
    var directories = path.split('/');
    var directoryIndex = directories.indexOf(directory);
    var newDirectories;
    var newPath;

    if (directoryIndex !== -1) {
      newDirectories = directories.slice(0, directoryIndex + 1);
      newPath = newDirectories.join('/');
    } else {
      newDirectories = [].concat(_toConsumableArray(directories), [directory]);
      newPath = path + '/' + directory;
    }

    setPath(newPath);

    var newContents = _objectSpread({}, dirMap);

    newDirectories.slice(1).forEach(function (directory) {
      newContents = _objectSpread({}, newContents[directory]);
    });
    setCurrentDirContents(newContents);
  };

  var directories = path.split('/');
  var folders = Object.keys(currentDirContents).filter(function (el) {
    return el !== '-';
  });
  var borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor];
  var shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor];
  var borderShape = webStyle.componentStyles.all.borderShape;
  var borderAndShadow = "";

  if (webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ComponentMargin.default, {
    webstyle: webStyle,
    componentName: "all",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      style: {
        display: "none"
      },
      type: "file",
      ref: inputFile,
      onChange: function onChange(event) {
        // console.log(event.target.files);
        addFile(event.target.files);
      },
      multiple: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'flex-grow-1 text-center relative-div mb-5 mt-3 p-4 bg-light cursor-auto ' + borderShape,
      style: {
        backgroundColor: webStyle.colors[webStyle.componentStyles.fileStorage.backgroundColor],
        color: webStyle.colors[webStyle.componentStyles.fileStorage.textColor],
        boxShadow: borderAndShadow
      },
      "data-no-dnd": "true",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: "Title"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "border border-dark",
          style: {
            minHeight: "300px",
            backgroundColor: webStyle.colors.mainBrandColor
          },
          children: currentUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: " w-100 no-select",
            src: currentUrl
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "row text-center  g-0 ",
        style: {
          justifyContent: "space-around"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
          className: "mt-3",
          "aria-label": "breadcrumb ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ol", {
            class: "breadcrumb ",
            children: [directories.slice(0, -1).map(function (dirName) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                class: "breadcrumb-item",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  onClick: function onClick() {
                    goToCurrentFolder(dirName);
                  },
                  className: "btn btn-link p-0 ",
                  children: dirName
                })
              });
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              class: "breadcrumb-item",
              "aria-current": "page",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "btn p-0",
                children: directories[directories.length - 1]
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: JSON.stringify()
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          className: " border-bottom flex-row d-flex align-items-center border-bottom border-dark",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex-col flex-shrink-1",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              className: "px-2 col cursor-pointer",
              icon: allSelected ? hover ? _freeSolidSvgIcons.faCheckSquare : _freeRegularSvgIcons.faCheckSquare : hover ? _freeSolidSvgIcons.faSquare : _freeRegularSvgIcons.faSquare,
              onMouseEnter: function onMouseEnter() {
                return setHover(true);
              },
              onMouseLeave: function onMouseLeave() {
                return setHover(false);
              },
              onClick: function onClick() {
                return setAllSelected(function (prevState) {
                  return !prevState;
                });
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex-col flex-grow-1 col justify-content-between d-flex align-items-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "ms-3 ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "- File Name -"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex-col ",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "me-4 pe-2",
              children: "Date"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex-col flex-shrink-1",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: allFavorited ? _freeSolidSvgIcons.faHeart : _freeRegularSvgIcons.faHeart,
              className: "me-4 col invisible"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex-col justify-content-end d-flex dropdown",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn  ",
              "data-bs-toggle": "dropdown",
              disabled: !allSelected && selectedFiles.length <= 1,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faEllipsisH
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
              class: "dropdown-menu",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  class: "dropdown-item",
                  type: "button",
                  children: "Download Selected"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  class: "dropdown-item",
                  type: "button",
                  onClick: renameSelected,
                  children: "Rename Selected"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
                  class: "dropdown-divider"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  class: "dropdown-item",
                  type: "button",
                  onClick: removeFiles,
                  children: "Delete Selected"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "border-top mb-0 text-start",
          style: {
            listStyleType: "none"
          },
          children: [folders.map(function (dirName) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Line, {
              selected: allSelected || selectedFiles.includes(path + "/" + dirName),
              favorited: allFavorited,
              name: dirName,
              path: path,
              removeFile: removeFiles,
              deleteFolder: deleteFolder,
              goToCurrentFolder: goToCurrentFolder,
              addSelectedFile: addSelectedFile,
              renameSelected: renameSelected,
              renameFolder: renameFolder,
              removeSelectedFile: removeSelectedFile,
              folder: true
            }, path + dirName);
          }), currentDirContents['-'].map(function (dirName) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Line, {
              selected: allSelected || selectedFiles.includes(path + "/" + dirName),
              favorited: allFavorited,
              name: dirName,
              path: path,
              removeFile: removeFiles,
              fileType: "image",
              addSelectedFile: addSelectedFile,
              deleteFolder: deleteFolder,
              renameSelected: renameSelected,
              renameFolder: renameFolder,
              removeSelectedFile: removeSelectedFile,
              changeImage: changeImage
            }, path + dirName);
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            className: "flex-row justify-content-center d-flex",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn ",
              onClick: function onClick() {
                inputFile.current.click();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faPlus
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "btn ",
              onClick: addNewFolder,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faFolderPlus
              })
            })]
          })]
        })]
      })]
    })]
  });
}

function Line(props) {
  var _useState17 = (0, _react.useState)(props.selected),
      _useState18 = _slicedToArray(_useState17, 2),
      selected = _useState18[0],
      setSelected = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      favorited = _useState20[0],
      setFavorited = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      hover = _useState22[0],
      setHover = _useState22[1];

  (0, _react.useEffect)(function () {
    setSelected(props.selected);
  }, [props.selected]);
  (0, _react.useEffect)(function () {
    setFavorited(props.favorited);
  }, [props.favorited]);
  (0, _react.useEffect)(function () {
    var fileName = "FavoriteFiles: ".concat(props.path + "/" + props.name);
    var isFavorited = localStorage.getItem(fileName);

    if (isFavorited) {
      setFavorited(true); // alert(`FavoriteFiles: ${props.path+"/"+props.name}`)
    }
  }, []);
  var fileIcon;

  switch (props.fileType) {
    case "txt":
      fileIcon = _freeSolidSvgIcons.faFileLines;
      break;

    case "image":
      fileIcon = _freeSolidSvgIcons.faImage;
      break;

    default:
      fileIcon = _freeSolidSvgIcons.faFile;
      break;
  }

  var toggleHeartSelect = function toggleHeartSelect() {
    setFavorited(function (prevState) {
      if (!prevState) {
        localStorage.setItem("FavoriteFiles: ".concat(props.path + "/" + props.name), true);
      } else {
        localStorage.removeItem("FavoriteFiles: ".concat(props.path + "/" + props.name));
      }

      return !prevState;
    });
  };

  var renameFileOrFolder = function renameFileOrFolder() {
    if (props.folder) {
      props.renameFolder(null, props.name);
    } else {
      props.renameSelected(null, props.name);
    }
  };

  var toggleSelectedFile = function toggleSelectedFile() {
    if (selected) {
      props.removeSelectedFile(props.name, props.folder);
    } else {
      props.addSelectedFile(props.name, props.folder);
    }

    setSelected(function (prevState) {
      return !prevState;
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
    style: {
      backgroundColor: selected ? "#e6e6e6" : ""
    },
    className: " border-bottom flex-row d-flex align-items-center ",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex-col flex-shrink-1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        className: "px-2 col cursor-pointer",
        icon: selected ? hover ? _freeSolidSvgIcons.faCheckSquare : _freeRegularSvgIcons.faCheckSquare : hover ? _freeSolidSvgIcons.faSquare : _freeRegularSvgIcons.faSquare,
        onMouseEnter: function onMouseEnter() {
          return setHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return setHover(false);
        },
        onClick: function onClick() {
          return toggleSelectedFile();
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex-col flex-grow-1 col justify-content-between d-flex align-items-center",
      children: props.folder ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        onClick: function onClick() {
          props.goToCurrentFolder(props.name);
        },
        className: "ms-3 btn btn-link p-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "mx-2",
          icon: _freeSolidSvgIcons.faFolder
        }), props.name]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        onClick: function onClick() {
          props.changeImage(props.name);
        },
        className: "ms-3 btn p-0 text-dark",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "mx-2",
          icon: fileIcon
        }), props.name]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex-col ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "me-4 pe-2",
        children: "3/12/2020"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex-col flex-shrink-1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        onClick: function onClick() {
          return toggleHeartSelect();
        },
        style: {
          color: favorited ? "red" : selected ? "white" : "lightGrey"
        },
        icon: favorited ? _freeSolidSvgIcons.faHeart : _freeRegularSvgIcons.faHeart,
        className: "me-4 col cursor-pointer"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex-col  justify-content-end d-flex dropdown",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "btn  ",
        "data-bs-toggle": "dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faEllipsisH
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        class: "dropdown-menu",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            class: "dropdown-item",
            type: "button",
            children: ["Download ", props.folder ? "Folder" : "File"]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            class: "dropdown-item",
            type: "button",
            onClick: renameFileOrFolder,
            children: ["Rename ", props.folder ? "Folder" : "File"]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
            class: "dropdown-divider"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            class: "dropdown-item",
            type: "button",
            onClick: function onClick(evt) {
              if (props.folder) {
                props.deleteFolder(evt, props.name);
              } else {
                props.removeFile(evt, props.name);
              }
            },
            children: ["Delete ", props.folder ? "Folder" : "File"]
          })
        })]
      })]
    })]
  });
}