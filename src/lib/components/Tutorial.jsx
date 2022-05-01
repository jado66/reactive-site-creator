import { useState, useContext, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faBackwardStep, faFile, faForwardStep, faPalette, faUserCog, faXmark } from "@fortawesome/free-solid-svg-icons"

import { WebContext } from "./Website";
import SocialLinks from "./pageComponents/Footer";
import {
  Link
} from "react-router-dom";
import Spacer from "./pageComponents/Spacer";

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
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable"; 
import {
  restrictToVerticalAxis
} from '@dnd-kit/modifiers';
import { MouseSensor } from "../components/helpers/DndSensors";
import { CSS } from "@dnd-kit/utilities";

export default function Tutorial(props){
  
  const [step, setStep] = useState(0)
  const {webStyle, appMethods, socialMedias, localDisplaySettings, pages} = useContext(WebContext)

  const completeStep = () =>{
    setStep(prevstep=>{
      localStorage.setItem("showTutorial", prevstep+1)
      return prevstep+1
      }
    )
  } 

  const finishTutorial = () =>{
    // alert("finish")
    localStorage.setItem("showTutorial", -1)
    appMethods.setShowTutorial(false)
  } 

  // Website init
  useEffect(() => {
    
    const step = localStorage.getItem("showTutorial")
    if (step){
      if (step === '-1'){
        setStep(0)
      }
      else{
        setStep(parseInt(step))
      }
    }
  }, []);

  const steps = [
    <Step0 completeStep = {completeStep} appMethods = {appMethods}/>,
    <Step1 completeStep = {completeStep} appMethods = {appMethods} webStyle = {webStyle}/>,
    <Step2 completeStep = {completeStep} appMethods = {appMethods} webStyle = {webStyle}/>,
    <Step3 completeStep = {completeStep} socialMedias = {socialMedias}/>,
    <Step4 completeStep = {completeStep} pages = {pages}/>,
    <Step5 completeStep = {completeStep} />,
    <LastStep completeStep = {finishTutorial} />,
    <Step7 completeStep = {completeStep} />,


  ]
  const stepheaders = ["Quick Start: Complete These Tasks","Give Your Site A Name","Set the Site Colors","Add Social Media Links","Add a New Page","Add Components","You are ready!"]//,"Move Components","Delete a Component","","","",""]

  
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
    <div className="w-100" style ={{backgroundColor:marginColor}} >
      

      <div id = "outerSection " className={" "+(localDisplaySettings.isMobile?" ":" container")} >
      

        <div 
          id = "innerSection"
          className={"col justify-items-baseline "} 
          style={{backgroundColor:backgroundColor,boxShadow:(webStyle.componentStyles.background.applyBackground?borderAndShadow:"none")}}
        >
          <div className="d-flex w-100 justify-content-center flex-column text-center">
            <div className="border-top-0 border border-dark w-50 mx-auto p-3 flex-column d-flex relative-div " style={{backgroundColor:"white"}}>
              <div className="relative p-3 ">
                <button className="btn" onClick={()=>appMethods.setShowTutorial(false)}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <h3 className="text-decoration-underline mb-2">{step === 0 ?"Welcome to Reactive Site Creator" :(step < stepheaders.length - 1 ?`Step ${step}`:'Congrats!')}</h3>
              {/* <span>{step}</span> */}
              <hr className="mb-4"/>
              <div className="flex-row d-flex justify-content-between mb-4">
                <CircleButton 
                  onClick = {()=>setStep(prevstep =>{
                    if (prevstep > 0){
                      localStorage.setItem("showTutorial", prevstep-1)
                      return prevstep - 1
                    }
                    else{
                      return prevstep
                    }
                  })}
                  >
                  {step>0&&<FontAwesomeIcon icon={faBackwardStep}/>}
                </CircleButton>
                  <h3 className="mb-1 text-center ">{stepheaders[step]}</h3>

                <CircleButton 
                  onClick = {()=>setStep(prevstep =>{
                    if (prevstep < stepheaders.length-1){
                      localStorage.setItem("showTutorial", prevstep+1)
                      return prevstep + 1
                    }
                    else{
                      return prevstep
                    }
                  })}
                >
                  {step<stepheaders.length-1&&<FontAwesomeIcon icon={faForwardStep}/>}
                  {/* <FontAwesomeIcon icon={faForwardStep}/> */}
                </CircleButton>
                
              </div>
              <div className="mx-5">
                {steps[step]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

function CircleButton(props){
  return(
    <button className="rounded-circle" style={{width:"2em", height:"2em"}} onClick = {props.onClick}>
      {props.children}
    </button>
  )
}

function Step0(props){
  return(
    <>
      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark"
      >
        Lets Go!
      </button>
    </>
  )
}

function Step1(props){

  const [siteName, setSiteName] = useState("")
  const [canContinue, setCanContinue] = useState(false)
  
  const completeStep = () =>{
    // alert("complete")
    props.appMethods.setWebStyle((prevState) => ({
      ...prevState,
      siteName: siteName
    }))
    props.completeStep()
  }


  useEffect(() => {
    if (siteName !== ""){
      setCanContinue(true)
    }
  },[siteName])

  useEffect(() => {
    if (props.webStyle.siteName !== "New Website"){
        setSiteName(props.webStyle.siteName)
      }
  },[])

  return(
    <div className="flex-column d-flex">
      <h4>What is the site name?</h4>
      <input className="my-3" placeholder="New Site" value={siteName} onChange = {evt=>{setSiteName(evt.target.value)}}/>
      
      <p className="h5 mt-3 mb-4" style={{visibility:!canContinue?"hidden":""}}>You can change the name later by going to the admin menu (this icon <FontAwesomeIcon icon={faUserCog} /> on the ribbon) under Site Name. </p>


      <button 
        onClick={completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {!canContinue}
      >
        Click Here to Continue
      </button>
    </div>
  )
}

function Step2(props){

  const [paletteHasBeenGenerated, setPaletteHasBeenGenerated] = useState(false)
  const [canContinue, setCanContinue] = useState(false)

  useEffect(() => {
    if (
      props.webStyle.colors.lightShade !== "#FFFFFF" ||
      props.webStyle.colors.lightAccent !== "#FFFFFF" ||
      props.webStyle.colors.mainBrandColor !== "#FFFFFF" ||
      props.webStyle.colors.darkAccent !== "#FFFFFF" ||
      props.webStyle.colors.darkShade !== "#FFFFFF" 
      ){
        setPaletteHasBeenGenerated(true)
        setCanContinue(true)
      }
  },[])

  const generateColorPalette = () =>{
    setCanContinue(true)
    if (!paletteHasBeenGenerated){
      setPaletteHasBeenGenerated(true)
    }

    props.appMethods.getRandomColors()
  }

  return(
    <div className="flex-column d-flex">
      <h4>Test Out Some Color Palletes</h4>
      
        {paletteHasBeenGenerated&&<div className="flex-row d-flex justify-content-center my-3">
          <div className="border border-dark border-end-0 " style = {{width:"40px",height:"40px", backgroundColor:props.webStyle.colors.lightShade}}></div>
          <div className="border border-dark border-start-0 border-end-0" style = {{width:"40px",height:"40px", backgroundColor:props.webStyle.colors.lightAccent}}></div>
          <div className="border border-dark border-start-0 border-end-0" style = {{width:"40px",height:"40px", backgroundColor:props.webStyle.colors.mainBrandColor}}></div>
          <div className="border border-dark border-start-0 border-end-0" style = {{width:"40px",height:"40px", backgroundColor:props.webStyle.colors.darkAccent}}></div>
          <div className="border border-dark border-start-0 " style = {{width:"40px",height:"40px", backgroundColor:props.webStyle.colors.darkShade}}></div>

        </div>}
      
       
        <button className="mt-3 btn btn-outline-dark" onClick={generateColorPalette}>New Color Palette</button>
        
        <p className="h5 my-4" style={{color:props.webStyle.colors.darkShade}}>You can individually change these colors by going to the Styles menu (this icon <FontAwesomeIcon icon={faPalette} /> on the ribbon) and then Color Options. </p>
      

      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {!canContinue}
      >
        Continue
      </button>
    </div>
  )
}

function Step3(props){
  return(
    <>
      <h4>On the ribbon click this icon <img className="ms-2" style={{height:"32px"}} src="data:image/png;base64,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"/></h4>
      
      <SocialLinks/>

      {/* {JSON.stringify(props.socialMedias)} */}
      {
        props.socialMedias.filter(socialMedia => socialMedia.location != "New Link").length === 0 ?
        <h5 className="pb-2">Click the plus and add your first social media link </h5>
        :
        <h5 className="pb-2">Add as many as you would like </h5>

      }

      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {props.socialMedias.filter(socialMedia => socialMedia.location != "New Link").length === 0}

      >
        Continue
      </button>
    </>
  )
}

function Step4(props){
  
  const [navigatedAway, setNavigatedAway] = useState(false)

  return(
    <>
      
      <p className="h4 text-center">On the ribbon click this icon <FontAwesomeIcon className=" ms-3" icon={faFile} /></p>

      {/* {JSON.stringify(props.pages)} */}
      <div className="mt-4 fw-bold"><span>Pages:</span>
      {
        props.pages.map((page,index) => <Link to={page.path} onClick = {()=>{if (index ===0)setNavigatedAway(true)}} className="ms-2 fw-bold">{page.name + (index !== props.pages.length - 1?",":"")}</Link>)
      }
      </div>
      

      {
        props.pages.filter(page => page.name != "Home").length === 0 ?
        <h5 className="pb-2 mt-4">Click the plus under Home and add a new page. You can change the name and path. To save the changes click "Save Page Changes". </h5>
        :
        <>
        {navigatedAway ?
          <h5 className="pb-2 mt-4">Visit the page in the pages menu or click the links above.</h5>
          :
          <h5 className="pb-2 mt-4">See what happens when you change the pages name.</h5>
        }
        </>
      }

      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        
        disabled = {props.pages.filter(page => page.name != "Home").length === 0 }

      >
        Continue
      </button>
    </>
  )
}

function Step5(props){

  const [hasClicked, setHasClicked] = useState(false)
  const [hasAddedComponents, setHasAddedComponents] = useState(false)
  return(
    <div className="flex-column d-flex">

      {
        hasClicked ?
        <h4>Click on a component </h4>
        :
        <h4>Hover the mouse in between components and click the light blue separator. </h4>

      }

      <div className="border border-dark my-3 d-flex justify-content-center" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 1</p></div>
      <Spacer onClick = {()=>setHasClicked(true)} insertComponent = {()=>setHasAddedComponents(true)}/>
      <div className="border border-dark my-3 d-flex justify-content-center" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 2</p></div>

      <p className="h5 mt-3 mb-4" style={{visibility:!hasAddedComponents?"hidden":""}}>Try this out on the page below. Hover the mouse a little bit under the tutorial. You may have to move the mouse around to find the spacer.  </p>

      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {!hasAddedComponents}

      >
        Continue
      </button>
    </div>
  )
}

function LastStep(props){
  return(
    <>
      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark"
      >
        Complete the tutorial!
      </button>
    </>
  )
}

function Step6(props){

  const [canContinue, setCanContinue] = useState(false)

  const [items, setItems] = useState([
  <ComponentWrapper><div className="border border-dark my-3 d-flex justify-content-center rounded" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 1</p></div></ComponentWrapper>,
  <ComponentWrapper><div className="border border-dark my-3 d-flex justify-content-center rounded" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 2</p></div></ComponentWrapper>,
  <ComponentWrapper><div className="border border-dark my-3 d-flex justify-content-center rounded" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 3</p></div></ComponentWrapper>
  ])

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }
  ));

  const handleDragStart = (event) => {
    const { active } = event;
    // setActiveID(active.id);
    
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;
      const newIndex = over.data.current.sortable.index;

      setItems((components) => {
        return arrayMove(components, oldIndex, newIndex);
      });

      // setActiveID(null)
    }
  }

  return(

    <div className="flex-column d-flex">

      <h4>Click and hold on a component </h4>

      <div className="px-3 border border-dark my-3 rounded">

        <DndContext
            sensors={sensors}
            modifiers = {[restrictToVerticalAxis]}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items}
            </SortableContext>

          </DndContext>

        

      </div>
      

      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {!canContinue}

      >
        Continue
      </button>
    </div>
  )
}

function Step7(props){

  const [canContinue, setCanContinue] = useState(false)

  return(

    <div className="flex-column d-flex">

      <h4>Click above the component </h4>

      <div className="border border-dark my-3 d-flex justify-content-center" style={{backgroundColor:"#AEC7BE", height:"45px"}}><p className="m-auto">Component 1</p></div>


      <button 
        onClick={props.completeStep}
        className="btn btn-outline-dark my-2"
        disabled = {!canContinue}

      >
        Continue
      </button>
    </div>
  )
}


// import "bootstrap/dist/css/bootstrap.css";

function ComponentWrapper(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    position: props.makeSticky? "sticky" : "",
    top: props.makeSticky? `${props.offsetY+1.5}em` : "",
    zIndex: props.makeSticky ? 15 : "",
    cursor: isDragging ? "move" : "auto",
    opacity: isDragging ? 0.5 : 1,
    transform: CSS.Translate.toString(transform),
    transition
  };

  return (
    <div
      onClick={(event)=>{
        if (event.target === event.currentTarget) {
          props.toggleComponentSelect(props.id)
        }
      }}
      ref={setNodeRef}
      style={{ ...style, ...props.style}}
      {...attributes}
      {...listeners}
      className={props.className + (props.isSelected ? " border border-primary" : "")}
    >
      {/* <span>Sticky {JSON.stringify(props.makeSticky)}</span> */}
      {props.children}
    </div>
  );
}
