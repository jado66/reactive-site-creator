import {useContext, useState } from "react";
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";
import QuillComponent from "../subComponents/QuillComponent"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function TextEditor(props) {

  let initialState = props.content
  if (Object.keys(initialState).length === 0){
      initialState = {
          html: "",
          isBacked: false
      }
  }

  const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
  const [isEditMode, setIsEditMode] = useState(false)
  const [isShowButtons, showButtons] = useState(false)
  const [isSettingsMode, setIsSettingsMode]= useState(false)
  const {webStyle, adminSettings} = useContext(WebContext)

  const handleCheckbox = (key) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }

  const handleContentChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const backgroundColor = content.isBacked?webStyle.colors[webStyle.componentStyles.textEditor.backgroundColor]:""
  const textColor = webStyle.colors[webStyle.componentStyles.textEditor.textColor]
  
  

  let componentStyles = {}
  
  try {
    componentStyles = 
    {
      textColor:webStyle.componentStyles.textEditor.textColor,
      backgroundColor:webStyle.componentStyles.textEditor.backgroundColor
      }
  } 
  catch (error) {
      
  }

  let borderShape = webStyle.componentStyles.all.borderShape
  let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]
  let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]

  let borderAndShadow = ""
    if (webStyle.componentStyles.all.borderSize!==0){
      borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
    }
  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)


  return(
    <div 
      style={{...props.style}}
      className="px-5 text-center relative-div " data-no-dnd="true"
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >

    {!isSettingsMode ?
      <div style={{
        backgroundColor:backgroundColor,
        boxShadow: content.isBacked?borderAndShadow:""
        }} 
        className = {"px-5 "+borderShape+(content.isBacked?"  py-5":"")}
      >
        <QuillComponent 
          adminSettings = {adminSettings}
          webStyle = {webStyle}
          className = "paragraph text-start" 
          html = {content.html} 
          isEditMode = {isEditMode} 
          setHtml = {(value)=>{handleContentChange("html",value)}} 
          saveEdits = {()=>{setIsEditMode(!isEditMode)}}
          style ={{color:textColor||webStyle.colors.darkShade}}
        />
      </div>

      :
      <>
        <div 
          style={{
            backgroundColor:backgroundColor,
            boxShadow: content.isBacked?borderAndShadow:""
            }} 
            className = {"px-5 "+borderShape+(content.isBacked?" pt-3 pb-5":"")}
        >
          <form className="col">

            <h3>Text Editor Settings</h3>

            <div class="form-check d-flex align-items-start">
              <input class="form-check-input" type="checkbox" checked={content.isBacked} onClick = {()=>{handleCheckbox("isBacked")}} />
              <label class="form-check-label ms-3" for="flexCheckDefault">
                Background?
              </label>
            </div>
          </form>
        </div>
      </>
      }
      
      {/*  */}
      {isShowButtons && adminSettings.isEditMode &&
      <>
        
        <div className="relative d-flex  ">
          
        
          {!isSettingsMode &&
            <button className=" btn p-0"  style={{marginRight:"1.5em"}} data-no-dnd = "true" onClick = {()=>{setIsEditMode(!isEditMode)}}>
              <FontAwesomeIcon icon={faPencilAlt} style={{color:textColor}} />
            </button>
          }
          <button className={"btn "+(isEditMode?"":"p-0")} style={{marginRight:"2.5em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
            <FontAwesomeIcon icon={faCog} style={{color:textColor}} />
          </button>
        </div>
      </>
      }
      
    </div>
    )
};