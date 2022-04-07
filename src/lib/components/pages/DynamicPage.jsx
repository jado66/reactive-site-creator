import { useState, useContext } from "react";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

// Drag and drop stuff
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
import { MouseSensor } from "../helpers/DndSensors";

// Component Wrapper
import AdminWrapper from "../wrappers/AdminWrapper";

// Custom hook for storing data
import useComponentStorage from '../helpers/useStorage';

import { WebContext } from "../Website";

// Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Spacer from "../pageComponents/Spacer";

export default function DynamicPage(props) {
  const {webStyle, adminSettings, localDisplaySettings} = useContext(WebContext);

  const initialState = props.components
  if (!props.components){
      initialState = []
  }

  const [ components, setComponents] = useComponentStorage(props.pageID+"-page",initialState);
  const [ activeID, setActiveID ] = useState(null)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }
  ));

  const [selectedComponents, setSelectedComponents] = useState([]);

  const deleteSelectedComponents = () =>{
    setComponents((prevState) => {
      return prevState.filter(el => !selectedComponents.includes(el.id));
    })
    setSelectedComponents([])
  }

  const toggleComponentSelect = (id) => {
    setSelectedComponents((prevState) => {

      if (prevState.includes(id)){
        return prevState.filter(componetID => componetID !== id);
      }
      else{
        return([...prevState,id])
      }
    })
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

  let pagecomponents = [];

  const storedComponents = components || []
  storedComponents.forEach((el, index) => {

    const componentOption = props.componentOptions[el.name] 
    
    const Component = componentOption.component;
    const isNestedComponent = componentOption.isNestedComponent;

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
          isFlat ={!isNestedComponent}
          isEditMode = {adminSettings.isEditMode}
          toggleComponentSelect = {toggleComponentSelect}
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

  // Add first spacer if there is none
  if (pagecomponents.length === 0 && adminSettings.isEditMode ){
    pagecomponents.push(<Spacer insertComponent = {insertComponent} index = {-1}/>);

  }



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