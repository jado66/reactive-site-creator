"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocialLinks;

var _react = require("react");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _reactRouterDom = require("react-router-dom");

var _Website = require("../Website");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SocialLinks(props) {
  var _useContext = (0, _react.useContext)(_Website.WebContext),
      webStyle = _useContext.webStyle,
      socialMedias = _useContext.socialMedias;

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
  var componentStyles = {};

  try {
    componentStyles = {
      textColor: webStyle.componentStyles.footer.textColor
    };
  } catch (error) {}

  var socialLinks = socialMedias.filter(function (_ref) {
    var location = _ref.location;

    if (location === "New Link") {
      return false; // skip
    }

    return true;
  }).map(function (_ref2) {
    var link = _ref2.link,
        location = _ref2.location;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        to: {
          pathname: link
        },
        target: "_blank",
        style: {
          color: webStyle.colors[componentStyles.textColor]
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: "socialMediaLink m-auto",
          icon: componentMapping[location]
        })
      }, location)
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "mt-3",
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      width: "50%",
      margin: "25px auto"
    }),
    "data-no-dnd": "true",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "row",
      style: {
        justifyContent: "space-around"
      },
      children: socialLinks
    })
  });
}

;