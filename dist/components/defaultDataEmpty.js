"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWebStyles = exports.defaultSiteData = exports.defaultComponentOptions = void 0;

var _Header = _interopRequireDefault(require("./pageComponents/Header"));

var _NavigationBar = _interopRequireDefault(require("./pageComponents/NavigationBar"));

var _StyledLink = _interopRequireDefault(require("./pageComponents/StyledLink"));

var _TextEditor = _interopRequireDefault(require("./pageComponents/TextEditor"));

var _SubscriptionCards = _interopRequireDefault(require("./pageComponents/SubscriptionCards"));

var _PictureSlideShow = _interopRequireDefault(require("./pageComponents/PictureSlideShow"));

var _Mosaic = _interopRequireDefault(require("./pageComponents/Mosaic"));

var _Footer = _interopRequireDefault(require("./pageComponents/Footer"));

var _SubscriberBox = _interopRequireDefault(require("./pageComponents/SubscriberBox"));

var _PhotoGallery = _interopRequireDefault(require("./pageComponents/PhotoGallery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSiteData = {
  siteName: "New Website",
  pages: [{
    id: "Page-1",
    name: "Home",
    path: "/",
    components: []
  }],
  masterNavBarData: {
    isUnique: false,
    includeSocials: false,
    homeLinkText: "Home",
    html: "<h1 class = \"ql-align-center\">{siteName}</h1>",
    navData: []
  },
  socialMedias: [],
  promoCodes: {}
};
exports.defaultSiteData = defaultSiteData;
var defaultWebStyles = {
  colors: {
    lightShade: "#FFFFFF",
    lightAccent: "#FFFFFF",
    mainBrandColor: "#FFFFFF",
    darkAccent: "#FFFFFF",
    darkShade: "#FFFFFF"
  },
  componentStyles: {
    all: {
      shadowStyle: " ",
      borderSize: 0,
      borderShape: "",
      borderColor: "darkShade",
      shadowColor: 'darkShade',
      linkStyle: "text-decoration-underline"
    },
    background: {
      marginColor: "lightShade",
      backgroundColor: "lightAccent",
      applyBackground: false
    },
    header: {
      size: "h2",
      textColor: "darkShade"
    },
    mosaic: {
      arrangement: "LP,RL-LL,RP"
    },
    navigationBar: {
      includeHeader: false,
      topBarMargin: false,
      isSticky: false,
      stickyOffsetY: -4.5,
      justifyButtons: "justify-content-start",
      backgroundColor: "darkAccent",
      textColor: "lightShade",
      navbarStyle: "fullWidth"
    },
    linkBox: {
      backgroundColor: "lightShade",
      textColor: "darkShade",
      linkColor: "darkAccent"
    },
    subscriptionCard: {
      headerTextColor: "lightShade",
      headerBackgroundColor: "darkAccent",
      bodyTextColor: "darkShade",
      bodyBackgroundColor: "lightShade"
    },
    subscriberBox: {
      headerTextColor: "lightShade",
      backgroundColor: "darkAccent"
    },
    pictureFrame: {
      backgroundColor: "mainBrandColor",
      padding: ""
    },
    photoGallery: {
      margin: 8,
      fullBorder: false
    },
    styledLink: {
      borderShape: 'rounded-6',
      backgroundColor: "darkAccent",
      textColor: "lightShade"
    },
    footer: {
      textColor: "darkShade"
    },
    textEditor: {
      backgroundColor: "lightShade",
      textColor: "darkShade"
    }
  }
};
exports.defaultWebStyles = defaultWebStyles;
var defaultComponentOptions = {
  Header: {
    component: _Header.default,
    isNestedComponent: false
  },
  Footer: {
    component: _Footer.default,
    isNestedComponent: false
  },
  Mosaic: {
    component: _Mosaic.default,
    isNestedComponent: true
  },
  NavigationBar: {
    componentName: "Navigation Bar",
    component: _NavigationBar.default,
    isNestedComponent: false
  },
  SubscriberBox: {
    componentName: "Subscriber Box",
    component: _SubscriberBox.default,
    isNestedComponent: false
  },
  StyledLink: {
    componentName: "Styled Link",
    component: _StyledLink.default,
    isNestedComponent: false
  },
  TextEditor: {
    componentName: "Text Editor",
    component: _TextEditor.default,
    isNestedComponent: false
  },
  PictureSlideShow: {
    componentName: "Picture Slide Show",
    component: _PictureSlideShow.default,
    isNestedComponent: false
  },
  SubscriptionCards: {
    componentName: "Subscription Cards",
    component: _SubscriptionCards.default,
    isNestedComponent: false
  },
  PhotoGallery: {
    componentName: "Photo Gallery",
    component: _PhotoGallery.default,
    isNestedComponent: true
  }
};
exports.defaultComponentOptions = defaultComponentOptions;