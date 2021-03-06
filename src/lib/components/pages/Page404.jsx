import { useState, useEffect, useContext } from "react";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import {
  DndContext,
  closestCenter,
  useSensor,
  DragOverlay,

  useSensors
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"; 
import {
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';

import { useLocation } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
import { MouseSensor } from "../helpers/DndSensors";
import Spacer from "../pageComponents/Spacer"
import Header from "../pageComponents/Header";
import NavigationBar from "../pageComponents/NavigationBar";
import StyledLink from "../pageComponents/StyledLink"
import TextEditor from "../pageComponents/TextEditor";
import MediaSlideShow from "../pageComponents/MediaSlideShow";
import SubscriptionCards from "../pageComponents/SubscriptionCards";
// import BlogPreview from "./BlogPreview";
// import CaptionedPicture from "./pageComponents/CaptionedPicture";
// import DynamicForm from "./pageComponents/DynamicForm";
// import CardPaymentBlock from "./CardPaymentBlock";
// import Mosaic from "./pageComponents/Mosaic";
import Footer from "../pageComponents/Footer";
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
import AdminWrapper from "../wrappers/AdminWrapper";
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";
import SubscriberBox from "../pageComponents/SubscriberBox";

export default function Page404(props) {
  const {flatComponents, webStyle, adminSettings, localDisplaySettings, appMethods} = useContext(WebContext);

  let initialState = props.components
  if (initialState.length === 0){ 
      initialState = 
          [
            
            {
              name: "NavigationBar",
              id: `Page-404-NavBar-1-001`,
              content:{}
            },
            { 
              name: "Header",
              type:"h3",
              id: `Page-404-Header-0-000`,
              content: {header:"This page doesn't exist"}
          }
        ]
      
  }

  const [ components, setComponents] = useComponentStorage(props.pageID+"-page",initialState);
  const [ activeID, setActiveID ] = useState(null)

  const sensors = useSensors(useSensor(MouseSensor));

  const [selectedComponents, setSelectedComponents] = useState([]);
  const location = useLocation();

  const insertComponent = (option,index) => {
    let newComponent = {
      name:option.replace(/\s+/g, ''),
      id:generateKey(option,index),
      content:{}
    }
    let newComponents = [...components.slice(0,index+1),newComponent,...components.slice(index+1)]

    setComponents(newComponents)

  }

  const addCurrentPage = () => {
    let path = location.pathname;
    let name = path.replaceAll(/[/-_]/g," ")

    let nameWords = name.trim().split()
    for (let i = 0; i < nameWords.length; i++) {
      nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
    }

    name = nameWords.join(" ");

    appMethods.addPage(name,path)
  }

  const addSelected = (id) => {
    setSelectedComponents([...selectedComponents, id]);
  };
  const removeSelected = (id) => {
    try {
      const idIndex = selectedComponents.indexOf(id);
      // alert(`Removing ${id} at index ${idIndex}`);
      setSelectedComponents([...selectedComponents.splice(idIndex, 1)]);
    } catch (error) {
      alert("Error in removedSelected function:" + error);
    }
  };


  const componentMap = {
    Header:Header,
    Footer:Footer,
    // Mosaic:Mosaic,
    NavigationBar:NavigationBar,
    SubscriberBox:SubscriberBox,
    StyledLink:StyledLink,
    TextEditor:TextEditor,
    MediaSlideShow:MediaSlideShow,
    SubscriptionCards:SubscriptionCards

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

  // useEffect(() => {
        
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

  let pagecomponents = [];

  const storedComponents = components || []
  storedComponents.forEach((el, index) => {

    const Component = componentMap[el.name];
    
    if (adminSettings.isEditMode){
      pagecomponents.push(
        <AdminWrapper
          key={el.id}
          isFlat ={flatComponents.includes(el.name)}
          id={el.id}
          addSelected={addSelected}
          removeSelected={removeSelected}
          className={"py-3 "}
        >
          <Component 
            key={el.id + "c"} id={el.id + "c"} index = {index} pageName = {props.pageName} pageID = {props.pageID}
            content = {el.content} componentName = {el.name} style={{ cursor: "auto"}}
          />     
        </AdminWrapper>
      );
      pagecomponents.push(<Spacer insertComponent = {insertComponent} index = {index}/>);
    }

    

    else{
      pagecomponents.push(
        <Fade>
        <div
          className={"py-3 "}
        >
          <Component 
            key={el.id + "c"} id={el.id + "c"} index = {index} pageName = {props.pageName} pageID = {props.pageID}
            content = {el.content} componentName = {el.name} style={{ cursor: "auto"}}
          />     
        </div>
        </Fade>
      );
      pagecomponents.push(<div style={{height:".5em"}}></div>)
    }
  });

  return (
    <>
      {adminSettings.isAdmin && adminSettings.isEditMode &&
      <div className="text-center py-3">

        {location.pathname != "/404" &&
        <>
        <h2>404 Page: The page {location.pathname} does not exist in your website</h2>
        <div className="mt-4 mb-3">
          <label className="me-3 h4 my-auto">Add {location.pathname} to you website. </label>
          <button className="btn btn-light btn-outline-dark" onClick={addCurrentPage}>Add Page</button>
        </div>
        </>
        } 
        <h3>Below is what guests will see if they navigate off your website:</h3>
      </div>
      }
      <div style ={{backgroundColor:webStyle.colors.lightShade, borderTop: "1px solid black "}}>
        <div id = "outerSection" className={"min-vh-100"+(localDisplaySettings.isMobile?" ":" container")} >

          <div id = "innerSection" className="col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4" style={{backgroundColor:webStyle.colors.lightAccent}}>
            

            {adminSettings.isEditMode === true?  
            <DndContext
              sensors={sensors}
              modifiers = {[restrictToVerticalAxis]}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={storedComponents}
                strategy={verticalListSortingStrategy}
              >
                {pagecomponents}
              </SortableContext>
              <DragOverlay>{activeID ? <OverlaySpot id = {activeID}/> : null}</DragOverlay>

            </DndContext>
            :
            <>
            {pagecomponents}
            </>
          }
          </div>
        </div>
      </div>
    </>
  );

  function generateKey(componentName, index){
    return `${props.pageName}-${componentName}-${ index }${ String(new Date().getTime()).slice(-3) }`;
  }

  function handleDragStart(event) {
    const { active } = event;
    setActiveID(active.id);
    
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;
      const newIndex = over.data.current.sortable.index;

      setComponents((components) => {
        return arrayMove(components, oldIndex, newIndex);
      });

      setActiveID(null)
    }
  }
}

function OverlaySpot(props){
  return(<div className="text-center"></div>)
} 