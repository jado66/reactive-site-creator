import ContentEditable from 'react-contenteditable'
import EditableLink from './EditableLink';

import React, { useContext, useEffect } from "react"
// import {WebContext} from "../App"

export default function LinkBox(props){
  const contentEditable1 = React.createRef();
  const contentEditable2 = React.createRef();

  const setTitle = evt => {
    props.setTitle(evt.target.value);
    // localStorage.setItem(this.props.id+'-h2',evt.target.value);
  };

  const setSubTitle = evt => {
    props.setSubTitle(evt.target.value);
    // localStorage.setItem(this.props.id+'-h3',evt.target.value);
  };

  let componentStyles = {}
  
  try {
    componentStyles = 
    {
      textColor:props.webStyle.componentStyles.linkBox.textColor,
      backgroundColor:props.webStyle.componentStyles.linkBox.backgroundColor,
      linkColor:props.webStyle.componentStyles.linkBox.linkColor
      }
  } 
  catch (error) {
      
  }

  let borderShape = props.webStyle.componentStyles.all.borderShape
  let borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor]
  let shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor]

  let borderAndShadow = ""
    if (props.webStyle.componentStyles.all.borderSize!==0){
      borderAndShadow +=`${borderColor} 0px 1px ${props.webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${props.webStyle.componentStyles.all.borderSize}px, `
    }
  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)


  return(
    <div className={"p-3 g-0 "+borderShape} style={{backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.linkBox.backgroundColor], boxShadow: borderAndShadow}}>
      <ContentEditable
        style={{color: props.webStyle.colors[componentStyles.textColor]}}
        innerRef={contentEditable1}
        html={props.title} // innerHTML of the editable div
        disabled={! props.adminSettings.isEditMode}       // use true to disable editing
        onChange={setTitle} // handle innerHTML change
        tagName='h2' // Use a custom HTML tag (uses a div by default)
      />
      <ContentEditable
        className='apply-font-secondary'
        style={{color: props.webStyle.colors[componentStyles.textColor]}}
        innerRef={contentEditable2}
        html={props.subTitle} // innerHTML of the editable div
        disabled={! props.adminSettings.isEditMode}       // use true to disable editing
        onChange={setSubTitle} // handle innerHTML change
        tagName='h3' // Use a custom HTML tag (uses a div by default)
      />
      <EditableLink 
        divClass = {"px-0"}
        linkStyle = {{color: props.webStyle.colors[componentStyles.linkColor]}}
        linkClass = {props.webStyle.componentStyles.all.linkStyle}
        id = {props.id+"-link"} localDisplaySettings = {props.localDisplaySettings} adminSettings = {props.adminSettings} webStyle = {props.webStyle}
        linkText = {props.linkText} href = {props.href} setLinkText = {props.setLinkText} setHref = {props.setHref}
      />
      </div>)
  
};