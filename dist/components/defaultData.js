"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWebStyles = exports.defaultSiteData = exports.defaultComponentOptions = void 0;

var _Header = _interopRequireDefault(require("../components/pageComponents/Header"));

var _NavigationBar = _interopRequireDefault(require("../components/pageComponents/NavigationBar"));

var _StyledLink = _interopRequireDefault(require("../components/pageComponents/StyledLink"));

var _TextEditor = _interopRequireDefault(require("../components/pageComponents/TextEditor"));

var _SubscriptionCards = _interopRequireDefault(require("../components/pageComponents/SubscriptionCards"));

var _MediaFrame = _interopRequireDefault(require("./pageComponents/MediaFrame"));

var _MediaSlideShow = _interopRequireDefault(require("./pageComponents/MediaSlideShow"));

var _Mosaic = _interopRequireDefault(require("../components/pageComponents/Mosaic"));

var _Footer = _interopRequireDefault(require("../components/pageComponents/Footer"));

var _SubscriberBox = _interopRequireDefault(require("../components/pageComponents/SubscriberBox"));

var _PhotoGallery = _interopRequireDefault(require("../components/pageComponents/PhotoGallery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSiteData = {
  siteName: "New Website",
  pages: [{
    id: "Page-1",
    name: "Home",
    path: "/",
    components: [{
      name: "NavigationBar",
      id: "Home-NavBar-0-001 ",
      content: {}
    }, {
      name: "Mosaic",
      id: "Home-Mosaic-1-042 ",
      content: {}
    }, {
      name: "TextEditor",
      id: "Home-TextEditor-2-948",
      content: {
        html: "<h2 class=\"ql-align-center mb-3\">Here is some text</h2>\n                <p class=\"ql-align-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pharetra nisl. Pellentesque in pellentesque justo, et ultrices augue. Mauris neque magna, laoreet vel purus nec, porttitor cursus quam. Maecenas posuere tellus in mauris elementum, id hendrerit lectus convallis. Nulla nec odio odio. Duis sed orci orci. Phasellus lobortis tristique ex vitae cursus. Ut eu erat sit amet orci tincidunt pretium. Phasellus malesuada, purus ut luctus scelerisque, turpis nisi dictum ex, malesuada semper nisl purus quis ligula. Mauris eu mollis mauris. Cras quis metus velit.</p>\n                <p class=\"ql-align-justify\">Morbi vel tellus venenatis, rutrum neque sit amet, mollis enim. In eget placerat dolor. Mauris porttitor augue sit amet ligula commodo, sed sollicitudin turpis tempor. In placerat purus sem, a placerat ligula varius a. Curabitur consectetur, dui at pulvinar gravida, elit augue lobortis ipsum, laoreet bibendum massa libero id est. Donec maximus, turpis volutpat placerat lacinia, neque ante bibendum sapien, vel venenatis lectus diam in nisi. Donec aliquam dignissim tellus, condimentum eleifend arcu porttitor et. Morbi quis posuere dui, in vulputate augue.</p>\n                <p class=\"ql-align-justify\">In diam tellus, congue vitae purus eget, posuere tristique diam. Vivamus placerat dictum nisi, ut scelerisque mauris tempor ut. Pellentesque imperdiet, arcu eu faucibus posuere, nulla ante gravida ligula, vel condimentum leo orci a ligula. Vivamus suscipit velit felis, sed mollis nibh faucibus nec. Fusce efficitur pretium blandit. In ac pulvinar purus. Nunc vitae magna orci. Ut maximus nibh ut felis tincidunt auctor. Etiam rhoncus sem at nunc feugiat, quis interdum urna tristique. Nullam elementum dapibus velit. Morbi ac odio commodo, iaculis lectus sagittis, dignissim felis. Aliquam fermentum at tellus a ullamcorper.</p>"
      }
    }, {
      name: "Footer",
      id: "Home-Footer-2-051 ",
      content: {}
    }]
  }, {
    id: "Page-2",
    name: "About",
    path: "/about",
    components: [{
      name: "NavigationBar",
      id: "About-NavBar-1-001",
      content: {}
    }, {
      name: "Header",
      id: "About-Header-1-001",
      content: {
        header: "Photo Gallery",
        type: 'h2'
      }
    }, {
      name: "PhotoGallery",
      id: "About-PhotoGallery-1-001",
      content: {}
    }]
  }, {
    id: "Page-3",
    name: "Contact",
    path: "/contact",
    components: [{
      name: "NavigationBar",
      id: "Contact-NavBar-1-001",
      content: {}
    }]
  }],
  masterNavBarData: {
    isUnique: false,
    includeSocials: false,
    homeLinkText: "Home",
    html: "<h1 class = \"ql-align-center\">{siteName}</h1>",
    navData: [{
      id: 1,
      name: "About Us",
      path: "/about"
    }, {
      id: 2,
      name: "Contact",
      path: "/contact"
    }]
  },
  socialMedias: [{
    location: "Youtube",
    link: "https://youtube.com"
  }, {
    location: "Instagram",
    link: "https://instagram.com"
  }, {
    location: "Twitter",
    link: "https://instagram.com"
  }],
  promoCodes: {}
};
exports.defaultSiteData = defaultSiteData;
var defaultWebStyles = {
  colors: {
    lightShade: "#EEE4E8",
    lightAccent: "#8BF6FD",
    mainBrandColor: "#17A9CC",
    darkAccent: "#1F4C57",
    darkShade: "#322127"
  },
  componentStyles: {
    all: {
      includeMargins: true,
      includeComponentMargins: false,
      shadowStyle: "C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px ",
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
      marginColor: "",
      size: "h2",
      textColor: "darkShade",
      backgroundColor: "lightShade"
    },
    mosaic: {
      marginColor: "",
      arrangement: "LP,RL-LL,RP"
    },
    navigationBar: {
      marginColor: "",
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
      marginColor: "",
      backgroundColor: "lightShade",
      textColor: "darkShade",
      linkColor: "darkAccent"
    },
    subscriptionCard: {
      marginColor: "",
      headerTextColor: "lightShade",
      headerBackgroundColor: "darkAccent",
      bodyTextColor: "darkShade",
      bodyBackgroundColor: "lightShade"
    },
    subscriberBox: {
      marginColor: "",
      headerTextColor: "lightShade",
      backgroundColor: "darkAccent"
    },
    pictureFrame: {
      marginColor: "",
      backgroundColor: "mainBrandColor",
      padding: "",
      randomImageKeyword: "cat"
    },
    photoGallery: {
      marginColor: "",
      margin: 8,
      fullBorder: false
    },
    styledLink: {
      marginColor: "",
      borderShape: 'rounded-6',
      backgroundColor: "darkAccent",
      textColor: "lightShade"
    },
    footer: {
      marginColor: "",
      textColor: "darkShade"
    },
    textEditor: {
      marginColor: "",
      backgroundColor: "lightShade",
      textColor: "darkShade"
    }
  }
};
exports.defaultWebStyles = defaultWebStyles;
var defaultComponentOptions = {
  Header: {
    componentName: "Header",
    component: _Header.default,
    isNestedComponent: false
  },
  Footer: {
    componentName: "Footer",
    component: _Footer.default,
    isNestedComponent: false
  },
  Mosaic: {
    componentName: "Mosaic",
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
  MediaSlideShow: {
    componentName: "Media Slide Show",
    component: _MediaSlideShow.default,
    isNestedComponent: false
  },
  MediaFrame: {
    componentName: "Media Frame",
    component: _MediaFrame.default,
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