import React, { useContext, useState} from 'react'
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";

import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditableLink from '../subComponents/EditableLink';

export default function QuickLink(props){

  let initialState = props.content
  if (Object.keys(initialState).length === 0){
      initialState = {
          linkText: "New Link",
          href: "/"
      }
  }

  const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
  const [isShowButtons, showButtons] = useState(false)
  const [isSettingsMode, setIsSettingsMode]= useState(false)
  const {webStyle, adminSettings, localDisplaySettings} = useContext(WebContext)

  const handleContentChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  let componentStyles = {}
    try {
      componentStyles = 
      {
        textColor:webStyle.componentStyles.styledLink.textColor,
        backgroundColor:webStyle.componentStyles.styledLink.backgroundColor
      }
    } catch (error) {
      
  }

  let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]  
  let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
  let borderShape = webStyle.componentStyles.styledLink.borderShape || webStyle.componentStyles.all.borderShape

  let borderAndShadow = ""
  if (webStyle.componentStyles.all.borderSize!==0){
    borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
  }
  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

  return(

    <div 
      className="px-5 text-center " data-no-dnd="true"
      style={{...props.style, marginTop:"-.8em",marginBottom:"-.8em"}}
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >
      <div className='relative-div '
        >
          <EditableLink
            webStyle = {webStyle}
            linkText = {content.linkText}
            href = {content.href}
            adminSettings = {adminSettings}
            localDisplaySettings = {localDisplaySettings}
            setLinkText = {(value)=>handleContentChange("linkText",value)}
            setHref = {(value)=>handleContentChange("href",value)}
            divStyle={{backgroundColor:webStyle.colors[componentStyles.backgroundColor], boxShadow: borderAndShadow}}
            divClass = {"py-3 mx-auto justify-content-center "+borderShape}
            linkStyle = {{color:webStyle.colors[componentStyles.textColor], textDecoration:"none"}}
            linkClass = {"h5 m-0"}
          />
        
        {( isShowButtons || isSettingsMode)  && adminSettings.isEditMode &&
        <div className="relative-r btn d-flex col pt-3" style={{top:0}}>
          <button className='d-flex bg-transparent border-0'  style={{marginRight:"2.5em"}}  data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
            <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.darkShade}} />
          </button>
        </div>}
          
      </div>
      {isSettingsMode &&
      <>
      <div class="input-group my-3 w-75 mx-auto">
        Styles Go Here
      </div>
      </>
      }
      
      {/*  */}
      
    </div>
    )
};