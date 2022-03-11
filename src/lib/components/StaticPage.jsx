import { useState, useEffect, useContext } from "react";


// import "bootstrap/dist/css/bootstrap.css";

import Header from "./pageComponents/Header";
import NavigationBar from "./pageComponents/NavigationBar";
// import BlogPreview from "./BlogPreview";
// import CaptionedPicture from "./pageComponents/CaptionedPicture";
// import DynamicForm from "./pageComponents/DynamicForm";
// import CardPaymentBlock from "./CardPaymentBlock";
// import Mosaic from "./pageComponents/Mosaic";
// import Footer from "./pageComponents/Footer";
// import VideoFrame from "./pageComponents/VideoFrame";
// import SlideShow from "./pageComponents/SlideShow";
// import PictureFrame from "./PictureFrame";
// import QuickLink from "./pageComponents/QuickLink";
// import Paragraph from "./pageComponents/Paragraph";
// import ProductComparisonCards from "./pageComponents/ProductComparisonCards";
// import ProductComparisonTable from "./pageComponents/ProductComparisonTable";
// import WalkThrough from "./pageComponents/Walkthrough";
// import ParagraphBacked from "./pageComponents/ParagraphBacked";
// import CountDown from "./pageComponents/CountDown";
// import Appointments from "./pageComponents/Appointments";
// import PhotoGallery from "./pageComponents/PhotoGallery";

import { WebContext } from "./Website";

export default function StaticPage(props) {
  const {webStyle} = useContext(WebContext);

  const [ components, setComponents] = useState([]);

  const componentMap = {
    Header:Header,
    // Footer:Footer,
    // Mosaic:Mosaic,
    NavigationBar:NavigationBar,
    // VideoFrame:VideoFrame,
    // CardPaymentBlock:CardPaymentBlock,
    // DynamicForm:DynamicForm,
    // BlogPreview:BlogPreview,
    // CaptionedPicture,CaptionedPicture,
    // SlideShow:SlideShow,
    // PictureFrame:PictureFrame,
    // QuickLink:QuickLink,
    // Paragraph:Paragraph,
    // ParagraphBacked:ParagraphBacked,
    // ProductComparisonCards:ProductComparisonCards,
    // ProductComparisonTable:ProductComparisonTable,
    // WalkThrough:WalkThrough,
    // CountDown:CountDown,
    // Appointments:Appointments,
    // PhotoGallery:PhotoGallery
  };

  useEffect(() => {
        
    if(props.components){
        const components = props.components;
       
        setComponents(components)
    
    }
    else{
        
        let components = []
        for (var i = 0; i < props.defaultComponentList.length; i++){
            components.push(
                {
                    name: props.defaultComponentList[i],
                    id: generateKey(props.defaultComponentList[i],i)
                })
        }
        setComponents(components)

    }

  },[]);

  let pagecomponents = [];

  components.forEach((el, index) => {

    const Component = componentMap[el.name];
    pagecomponents.push(
      <div
        key={el.id}
        className={"py-3 "}
      >
        <Component 
          key={el.id + "c"} id={el.id + "c"} index = {index} pageName = {props.pageName} 
          content = {el.content} componentName = {el.name} style={{ cursor: "auto"}}
        />     
      </div>
    );

    pagecomponents.push(
      <div
        className="g-0 row align-content-center "
        style={{ height: ".5em" }}
        // onFocus
      ></div>
    )
    
  });

  return (
    <div style ={{backgroundColor:webStyle.colors.lightShade}}>
      <div id = "outerSection" className={"min-vh-100"+(webStyle.isMobile?" ":" container")} >
        <div id = "innerSection" className="col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4" style={{backgroundColor:webStyle.colors.lightAccent}}>

          {pagecomponents}

        </div>
      </div>
    </div>
  );
  function generateKey(componentName, index){
    return `${props.pageName}-${componentName}-${ index }${ String(new Date().getTime()).slice(-3) }`;
  }
}