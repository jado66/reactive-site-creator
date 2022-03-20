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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      className: "col text-center",
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
    }, location);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "mt-3",
    style: {
      width: "50%",
      margin: "25px auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "row",
      style: {
        justifyContent: "space-evenly"
      },
      children: socialLinks
    })
  });
}

;