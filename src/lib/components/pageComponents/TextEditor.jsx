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

  const backgroundColor = content.isBacked?webStyle.colors.lightShade:""

  return(
    <div 
      className="px-5 text-center relative-div " data-no-dnd="true"
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >
      {/* {JSON.stringify(content.isBacked)} */}
    {!isSettingsMode ?
      <div style={{backgroundColor:backgroundColor}} className = {"px-5 "+(content.isBacked?" boxShadow py-5":"")}>
        <QuillComponent 
          webStyle = {webStyle}
          className = "paragraph text-start" 
          html = {content.html} 
          isEditMode = {isEditMode} 
          setHtml = {(value)=>{handleContentChange("html",value)}} 
          saveEdits = {()=>{setIsEditMode(!isEditMode)}}
        />
      </div>

      :
      <>
        <div className={"input-group w-100 mx-auto d-flex px-5"+(content.isBacked?" boxShadow py-5":"")} style={{backgroundColor:backgroundColor}}>
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
      {true && adminSettings.isEditMode &&
      <>
        
        <div className="relative d-flex  ">
          
        
          {!isEditMode && !isSettingsMode &&
            <button className=" btn p-0"  style={{marginRight:"1.5em"}} data-no-dnd = "true" onClick = {()=>{setIsEditMode(!isEditMode)}}>
              <FontAwesomeIcon icon={faPencilAlt} style={{color:webStyle.colors.darkShade}} />
            </button>
          }
          <button className={"btn "+(isEditMode?"":"p-0")} style={{marginRight:"2.5em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
            <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.darkShade}} />
          </button>
        </div>
      </>
      }
      
    </div>
    )
};