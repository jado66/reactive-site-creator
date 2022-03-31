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
  restrictToWindowEdges,
  snapCenterToCursor,
} from '@dnd-kit/modifiers';

// import "bootstrap/dist/css/bootstrap.css";
import { MouseSensor } from "../helpers/DndSensors";
import Spacer from "../pageComponents/Spacer"
import Header from "../pageComponents/Header";
import NavigationBar from "../pageComponents/NavigationBar";
import StyledLink from '../pageComponents/StyledLink'
import TextEditor from "../pageComponents/TextEditor";
import SubscriptionCards from "../pageComponents/SubscriptionCards";
// import BlogPreview from "./BlogPreview";
// import CaptionedPicture from "./pageComponents/CaptionedPicture";
// import DynamicForm from "./pageComponents/DynamicForm";
// import CardPaymentBlock from "./CardPaymentBlock";
import PictureSlideShow from "../pageComponents/PictureSlideShow";
import Mosaic from "../pageComponents/Mosaic";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import PhotoGallery from "../pageComponents/PhotoGallery";

export default function DynamicPage(props) {
  const {flatComponents, webStyle, adminSettings, localDisplaySettings} = useContext(WebContext);

  const initialState = props.components
  if (!props.components){
      initialState = []
  }

  const [ components, setComponents] = useComponentStorage(props.pageID+"-page",initialState);
  const [ activeID, setActiveID ] = useState(null)

  const sensors = useSensors(useSensor(MouseSensor));

  const [selectedComponents, setSelectedComponents] = useState([]);

  const deleteSelectedComponents = () =>{
    setComponents((prevState) => {
      return prevState.filter(el => !selectedComponents.includes(el.id));
    })
    setSelectedComponents([])
  }

  const insertComponent = (option,index) => {
    let newComponent = {
      name:option.replace(/\s+/g, ''),
      id:generateKey(option,index),
      content:{}
    }
    let newComponents = [...components.slice(0,index+1),newComponent,...components.slice(index+1)]

    setComponents(newComponents)

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
    Mosaic:Mosaic,
    NavigationBar:NavigationBar,
    SubscriberBox:SubscriberBox,
    StyledLink:StyledLink,
    TextEditor:TextEditor,
    PictureSlideShow:PictureSlideShow,
    SubscriptionCards:SubscriptionCards,
    PhotoGallery:PhotoGallery
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

  components.forEach((el, index) => {

    const Component = componentMap[el.name];
    
    let makeSticky = false
    let offsetY = null
    if (el.name === "NavigationBar"){
      if (webStyle.componentStyles.navigationBar.isSticky){
        makeSticky = true
        offsetY = parseFloat(webStyle.componentStyles.navigationBar.stickyOffsetY)
      }
    }

    if (adminSettings.isEditMode){
      pagecomponents.push(
        <AdminWrapper
          key={el.id}
          makeSticky = {makeSticky}
          offsetY = {offsetY}
          isFlat ={flatComponents.includes(el.name)}
          isEditMode = {adminSettings.isEditMode}
          isShowEditor = {adminSettings.isShowEditor}
          isSelected = {selectedComponents.includes(el.id)}
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

  let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]  
  let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
  let marginColor = webStyle.colors[webStyle.componentStyles.background.marginColor]  
  let backgroundColor = webStyle.colors[webStyle.componentStyles.background.backgroundColor]  


  let borderAndShadow = ""
  if (webStyle.componentStyles.all.borderSize!==0){
    borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
  }
  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

  return (
    <div style ={{backgroundColor:marginColor, marginTop:adminSettings.isShowEditor?"50px":""}}>
       {selectedComponents.length > 0 && 
        <div className="d-flex  " style={{position:"absolute", width:"100vw", zIndex:2000}}>
          <div className="d-flex w-100 flex-row">
            <div class="btn-group mx-auto mt-2" role="group" aria-label="Basic example">
              <button 
                type="button" 
                class="btn btn-light btn-outline-dark border-end-0"
                onClick={()=>deleteSelectedComponents()}
              >
                Delete Selected Components
              </button>
              <button 
                type="button" 
                class="btn btn-light btn-outline-dark border-start-0"
                onClick={()=>setSelectedComponents([])}
              >
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            </div>
              {/* <button className="btn btn-light btn-outline-dark my-2 mx-auto">Delete Selected Components</button> */}
          </div>
         

        </div>
      }
      <div id = "outerSection" className={"min-vh-100"+(localDisplaySettings.isMobile?" ":" container")} >
     

        <div 
          id = "innerSection"
          className={"col justify-items-baseline min-vh-100 pb-4 pt-4"} 
          style={{backgroundColor:backgroundColor,boxShadow:(webStyle.componentStyles.background.applyBackground?borderAndShadow:"none")}}
        >
          {/* <span>{JSON.stringify(selectedComponents)}</span> */}
          {adminSettings.isEditMode === true?  
          <DndContext
            sensors={sensors}
            modifiers = {[restrictToVerticalAxis]}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={components}
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
    else{
      setSelectedComponents((prevState) => {

        if (prevState.includes(activeID)){
          return prevState.filter(id => id !== active.id);
        }
        else{
          return([...prevState,active.id])
        }
      })
    }
  }
}

function OverlaySpot(props){
  return(<div className="text-center"></div>)
} 