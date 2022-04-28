"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopManager;

var _react = _interopRequireWildcard(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _PictureFrame = _interopRequireDefault(require("../subComponents/PictureFrame"));

var _NavigationBar = _interopRequireDefault(require("../pageComponents/NavigationBar"));

var _useStorage = _interopRequireDefault(require("../helpers/useStorage"));

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ShopManager(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      adminSettings = _useContext.adminSettings,
      localDisplaySettings = _useContext.localDisplaySettings,
      appMethods = _useContext.appMethods;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      productSearchQuery = _useState2[0],
      setProductSearchQuery = _useState2[1];

  var _useState3 = (0, _react.useState)({
    39398220093: {
      name: "Rose Lip Balm",
      imageContent: {},
      groups: "Beauty Rose",
      price: 50.45,
      description: "Tasty, smooth, put on lips now"
    },
    393982200456: {
      name: "Rose Lip Stick",
      imageContent: {},
      groups: "Beauty Discount Rose",
      price: 45.15,
      description: "Not tasty, smooth, put on lips now"
    },
    393982200256: {
      name: "Diamond Lip Stick",
      imageContent: {},
      groups: "Beauty Discount Diamond",
      price: 45.15,
      description: "Not tasty, smooth, put on lips now"
    },
    393982200451: {
      name: "Diamond Lip Balm",
      imageContent: {},
      groups: "Beauty Diamond",
      price: 45.15,
      description: "Not tasty, smooth, put on lips now"
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      products = _useState4[0],
      setProducts = _useState4[1];

  var setProductProperty = function setProductProperty(id, property, value) {
    setProducts(function (prevState) {
      var newState = _objectSpread({}, prevState);

      newState[id][property] = value;
      return newState;
    });
  };

  var _deleteProduct = function deleteProduct(id) {
    if (window.confirm("Are you sure you want to delete the product ".concat(products[id].name, "?"))) {
      setProducts(function (prevState) {
        var newState = _objectSpread({}, prevState);

        delete newState[id];
        return newState;
      });
    }
  };

  var addNewProduct = function addNewProduct() {
    var id = Math.floor(Math.random() * 100000000000);
    var n = 0;

    while (id in products) {
      var _id = Math.floor(Math.random() * 100000000000);

      if (n > 1000) {
        alert("Infinite loop");
        return;
      }

      n++;
    }

    setProducts(function (prevState) {
      var newState = _objectSpread({}, prevState);

      prevState[id] = {
        name: "New Product",
        imageContent: {},
        groups: "Groups",
        price: 1.00,
        description: "New description"
      };
      return newState;
    });
  }; // useEffect(() => {
  //   if(props.components){
  //       const components = props.components;
  //       setComponents(components)
  //   }
  //   else{
  //       let components = []
  //       for (var i = 0; i < props.defaultComponentList.length; i++){
  //           components.push(
  //               {
  //                   name: props.defaultComponentList[i],
  //                   id: generateKey(props.defaultComponentList[i],i)
  //               })
  //       }
  //       setComponents(components)
  //   }
  // },[]);


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
    style: {
      backgroundColor: marginColor,
      marginTop: adminSettings.isShowEditor ? "50px" : ""
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "outerSection",
      className: "min-vh-100" + (localDisplaySettings.isMobile ? " " : " container"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "innerSection",
        className: "col justify-items-baseline min-vh-100 pb-4 pt-5",
        style: {
          backgroundColor: backgroundColor,
          boxShadow: webStyle.componentStyles.background.applyBackground ? borderAndShadow : "none"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NavigationBar.default, {
          id: "productManagerC",
          index: 0,
          pageName: "ProductManager",
          pageID: "ProductManager",
          content: {},
          componentName: "NavigationBar",
          style: {
            cursor: "auto"
          }
        }, "productManagerC"), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "d-flex flex-column",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "text-center mt-4",
            children: "Product and Service Manager"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-3 px-5 flex-row d-flex justify-content-around",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex-column flex-grow-1 me-3",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                for: "exampleFormControlInput1",
                class: "form-label",
                children: "Search by Product Name"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                class: "form-control",
                type: "text",
                value: productSearchQuery,
                onChange: function onChange(evt) {
                  return setProductSearchQuery(evt.target.value);
                },
                placeholder: "Type to filter products"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex-column flex-grow-1 ms-3",
              style: {
                alignSelf: "end"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "btn btn-light",
                onClick: addNewProduct,
                children: "Create New Product"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "px-5 pt-3",
            children: Object.keys(products).filter(function (product) {
              return products[product].name.toUpperCase().includes(productSearchQuery.trim().toUpperCase());
            }).sort(function (productA, productB) {
              return productA.name > productB.name ? 1 : -1;
            }).map(function (productID) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(Product, {
                className: "mb-5",
                product: products[productID],
                productID: productID,
                adminSettings: adminSettings,
                webStyle: webStyle,
                setProductProperty: setProductProperty,
                deleteProduct: function deleteProduct(id) {
                  return _deleteProduct(id);
                }
              }, productID);
            })
          })]
        })]
      })
    })
  });
}

function Product(props) {
  var titleEditable = /*#__PURE__*/_react.default.createRef();

  var descriptionEditable = /*#__PURE__*/_react.default.createRef();

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isShowButtons = _useState6[0],
      showButtons = _useState6[1];

  var borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor];
  var borderShape = props.webStyle.componentStyles.all.borderShape;
  var shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor];
  var borderAndShadow = "";

  if (props.webStyle.componentStyles.all.borderSize !== 0) {
    borderAndShadow += "".concat(borderColor, " 0px 1px ").concat(props.webStyle.componentStyles.all.borderSize * 2, "px, ").concat(borderColor, " 0px 0px 0px ").concat(props.webStyle.componentStyles.all.borderSize, "px, ");
  }

  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C', shadowColor);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _objectSpread({}, props.style),
    className: "text-center relative-div g-0 " + props.className,
    "data-no-dnd": "true",
    onMouseEnter: function onMouseEnter() {
      showButtons(true);
    },
    onMouseLeave: function onMouseLeave() {
      showButtons(false);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex-row d-flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col me-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureFrame.default, {
          adminSettings: props.adminSettings,
          webStyle: props.webStyle // images = {images}
          ,
          imageContent: props.product.imageContent,
          id: props.id + "picture",
          setImageContent: function setImageContent(value) {
            props.setProductProperty(props.productID, "imageContent", value);
          } // setImageContent = {()=>{alert("Set image content")}} 
          ,
          isNested: true
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: 'col ms-3 text-start py-3 px-4 flex-column d-flex relative-div ' + borderShape,
        style: {
          backgroundColor: props.webStyle.colors.lightShade,
          boxShadow: borderAndShadow
        },
        children: [isShowButtons && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "me-2 mt-2 btn",
            onClick: function onClick() {
              return props.deleteProduct(props.productID);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeRegularSvgIcons.faTrashAlt
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
          className: " mb-0" //   style={{color:webStyle.colors[componentStyle.textColor]}}
          ,
          spellCheck: "false",
          innerRef: titleEditable,
          html: props.product.name // innerHTML of the editable div
          ,
          onChange: function onChange(evt) {
            return props.setProductProperty(props.productID, "name", evt.target.value);
          } // handle innerHTML change
          ,
          tagName: 'h2' // Use a custom HTML tag (uses a div by default)

        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "fw-bold form-control-plaintext fst-italic",
          style: {
            wordSpacing: ".75em"
          },
          value: props.product.groups,
          onChange: function onChange(evt) {
            return props.setProductProperty(props.productID, "groups", evt.target.value);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-group ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "input-group-text bg-transparent border-0 ms-0 ps-0 pe-2",
            children: "$"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "form-control-plaintext no-arrows ms-3 w-75 py-0",
            type: "number",
            onChange: function onChange(evt) {
              return props.setProductProperty(props.productID, "price", evt.target.value);
            },
            value: props.product.price
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactContenteditable.default, {
          className: " mb-1 flex-row flex-grow-1" //   style={{color:webStyle.colors[componentStyle.textColor]}}
          ,
          spellCheck: "false",
          innerRef: descriptionEditable,
          html: props.product.description // innerHTML of the editable div
          ,
          onChange: function onChange(evt) {
            return props.setProductProperty(props.productID, "description", evt.target.value);
          } // handle innerHTML change
          ,
          tagName: 'p' // Use a custom HTML tag (uses a div by default)

        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn btn-outline-secondary my-2",
          children: "Add to cart"
        })]
      })]
    })
  });
}

;