import { useState, useEffect, useContext } from "react";

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
  restrictToVerticalAxis
} from '@dnd-kit/modifiers';

import Spacer from "./pageComponents/Spacer";

// import "bootstrap/dist/css/bootstrap.css";
import { MouseSensor } from "./helpers/DndSensors";

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
import AdminWrapper from "./wrappers/AdminWrapper";

import { WebContext } from "./Website";

export default function DynamicPage(props) {
  const {flatComponents, webStyle} = useContext(WebContext);

  const [ components, setComponents] = useState([]);
  const [ activeID, setActiveID ] = useState(null)

  const sensors = useSensors(useSensor(MouseSensor));

  const [selectedComponents, setSelectedComponents] = useState([]);


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
        
    if(props.content){
        const components = props.content;
       
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
      <AdminWrapper
        key={el.id}
        isFlat ={flatComponents.includes(el.name)}
        id={el.id}
        addSelected={addSelected}
        removeSelected={removeSelected}
        className={"py-3 "}
      >
        <Component 
          key={el.id + "c"} id={el.id + "c"} index = {index} pageName = {props.pageName} 
          content = {el.content} componentName = {el.name} style={{ cursor: "auto"}}
        />     
      </AdminWrapper>
    );

    if (index !== components.length-1){
      pagecomponents.push(<Spacer insertComponent = {insertComponent} index = {index}/>);
    }
  });

  return (
    <div style ={{backgroundColor:webStyle.lightShade}}>
      <div id = "outerSection" className={"min-vh-100"+(webStyle.isMobile?" ":" container")} >
        <div id = "innerSection" className="col justify-items-baseline boxShadow min-vh-100 pb-4 pt-4" style={{backgroundColor:webStyle.lightAccent}}>

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
  }
}

function OverlaySpot(props){
  return(<div className="text-center"></div>)
} 