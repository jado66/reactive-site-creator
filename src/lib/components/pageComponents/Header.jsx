import React, { useContext, useState} from 'react'
import ContentEditable from 'react-contenteditable'
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";

import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props){
  const contentEditable = React.createRef();

  const {webStyle, adminSettings} = useContext(WebContext)

  let initialState = props.content
  if (Object.keys(initialState).length === 0){
      initialState = {
          
          header: props.pageName,
          styles:{
          }
      }
  }

  const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
  const [isShowButtons, showButtons] = useState(false)
  const [isSettingsMode, setIsSettingsMode]= useState(false)

  

  const handleContentChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleStyleChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      styles: {
        ...prevState.style,
        [key]: value
      }
    }));
  };



  let componentStyle = {}
  try {
    componentStyle = 
    {
      size: webStyle.componentStyles.header.size,
      textColor:webStyle.componentStyles.header.textColor,
      ...content.styles,
    }
  } catch (error) {
    
  }
  

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
      {/* <span>Defualt style{JSON.stringify(webStyle.componentStyles.header)}</span>
      <span>Ind. styles{JSON.stringify(content.styles)}</span> */}

      <ContentEditable
        className='apply-font-primary mb-0'
        style={{color:webStyle.colors[componentStyle.textColor]}}
        spellCheck = "false"
        innerRef={contentEditable}
        html={content.header} // innerHTML of the editable div
        disabled={!adminSettings.isEditMode}      // use true to disable editing
        onChange={evt=>handleContentChange("header",evt.target.value)} // handle innerHTML change
        tagName={componentStyle.size} // Use a custom HTML tag (uses a div by default)
        /> 
      {isSettingsMode &&
      <>
      <div class="input-group mt-3 mb-1 w-75 mx-auto">
        <label class="input-group-text" for="inputGroupSelect01">Header Size</label>
        <select onChange={evt=>handleStyleChange("size",evt.target.value)} value = {componentStyle.size} className="form-select">
          <option value={"h1"}>X-Large (h1)</option>
          <option value={"h2"}>Large (h2)</option>
          <option value={"h3"}>Medium (h3)</option>
          <option value={"h4"}>Small (h4)</option>
        </select>
      </div>
      <div class="input-group mb-3 w-75 mx-auto">
        <label class="input-group-text" for="inputGroupSelect01">Text Color</label>
        <select value ={componentStyle.color} onChange = {(evt)=>{handleStyleChange("textColor",evt.target.value)}}>
          <option value={"lightShade"}>Light Shade</option>
          <option value={"lightAccent"}>Light Accent</option>
          <option value={"mainBrandColor"}>Main Brand Color</option>
          <option value={"darkAccent"}>Dark Accent</option>
          <option value={"darkShade"}>Dark Shade</option>
        </select>
      </div>
      </>
      }
      
      
      {isShowButtons && adminSettings.isEditMode &&
      <button className="relative-r btn" style={{marginRight:"2.5em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
        <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.darkShade}} />
      </button>}
    </div>
    )
};