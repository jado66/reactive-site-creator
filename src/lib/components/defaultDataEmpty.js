import Header from "./pageComponents/Header";
import NavigationBar from "./pageComponents/NavigationBar";
import StyledLink from './pageComponents/StyledLink'
import TextEditor from "./pageComponents/TextEditor";
import SubscriptionCards from "./pageComponents/SubscriptionCards";
import MediaSlideShow from "./pageComponents/MediaSlideShow";
import MediaFrame from "./pageComponents/MediaFrame";
import Mosaic from "./pageComponents/Mosaic";
import Footer from "./pageComponents/Footer";
import SubscriberBox from "./pageComponents/SubscriberBox";
import PhotoGallery from "./pageComponents/PhotoGallery";
import FileStorage from "./pageComponents/FileStorage";

export const defaultSiteData = {
  siteName: "New Website",
  pages: [
      {
        id:"Page-1",
        name:"Home",
        path:"/",
        components:
        [{"name":"Header","id":"Home-Header--1141","content":{}},{"name":"Mosaic","id":"Home-Mosaic-0569","content":{}}]
      }
    ],
  masterNavBarData: 
    {
      isUnique: false,
      includeSocials: false,
      homeLinkText: "Home",
      html: `<h1 class = "ql-align-center">{siteName}</h1>`,
      navData: 
      [
        
      ]
    },
  socialMedias:[
      
      ],
  promoCodes:{}
}

export const defaultWebStyles = {
  colors: {
    lightShade: "#FFFFFF",
    lightAccent: "#FFFFFF",
    mainBrandColor: "#FFFFFF",
    darkAccent: "#FFFFFF" ,
    darkShade: "#FFFFFF"
  },
  componentStyles :{
    all:{
      includeMargins: true,
      includeComponentMargins: false,
      shadowStyle: " ",
      borderSize: 0,
      borderShape: "",
      borderColor: "darkShade",
      shadowColor: 'darkShade',
      linkStyle: "text-decoration-underline"

    },
    background:{
      marginColor:"lightShade",
      backgroundColor: "lightAccent",
      applyBackground: false
    },
    fileStorage:{
      marginColor:"",
      backgroundColor:"lightAccent",
      textColor:"darkShade",
      pictureBackgroundColor:"",
    },
    header:{
      size: "h2",
      textColor: "darkShade",
      backgroundColor: "lightShade",
      marginColor: "",

    },
    mosaic:{
      arrangement: "LP,RL-LL,RP",
      marginColor: "",
    },
    navigationBar:{
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
    linkBox:{
      backgroundColor: "lightShade",
      textColor: "darkShade",
      linkColor: "darkAccent"
    },
    subscriptionCard:{
      marginColor: "",
      headerTextColor: "lightShade",
      headerBackgroundColor: "darkAccent",
      bodyTextColor: "darkShade",
      bodyBackgroundColor: "lightShade"
    },
    subscriberBox:{
      marginColor: "",
      headerTextColor: "lightShade",
      backgroundColor: "darkAccent",
    },
    pictureFrame:{
      backgroundColor: "mainBrandColor",
      padding: "",
    },
    photoGallery:{
      margin: 8,
      fullBorder: false
    },
    styledLink:{
      borderShape: 'rounded-6',
      backgroundColor: "darkAccent",
      textColor: "lightShade",
    },
    footer:{
      marginColor: "",

      textColor: "darkShade",
    },
    textEditor:{
      backgroundColor: "lightShade",
      textColor: "darkShade",
    },
  }
}

export const defaultComponentOptions = {
  Header: {
    component: Header,
    isNestedComponent: false
  },
  Footer: {
    component: Footer,
    isNestedComponent: false
  },
  Mosaic: {
    component: Mosaic,
    isNestedComponent: true
  }, 
  NavigationBar: {
    componentName: "Navigation Bar",
    component: NavigationBar,
    isNestedComponent: false
  }, 
  SubscriberBox: {
    componentName: "Subscriber Box",
    component: SubscriberBox,
    isNestedComponent: false
  }, 
  StyledLink: {
    componentName: "Styled Link",
    component: StyledLink,
    isNestedComponent: false
  }, 
  TextEditor: {
    componentName: "Text Editor",
    component: TextEditor,
    isNestedComponent: false
  }, 
  MediaSlideShow: {
    componentName: "Media Slide Show",
    component: MediaSlideShow,
    isNestedComponent: false
  }, 
  MediaFrame: {
    componentName: "Media Frame",
    component: MediaFrame,
    isNestedComponent: false
  }, 
  SubscriptionCards: {
    componentName: "Subscription Cards",
    component: SubscriptionCards,
    isNestedComponent: false
  }, 
  PhotoGallery: {
    componentName: "Photo Gallery",
    component: PhotoGallery,
    isNestedComponent: true
  }, 
  FileStorage: {
    componentName: "File Storage",
    component: FileStorage,
    isNestedComponent: false
  }
}