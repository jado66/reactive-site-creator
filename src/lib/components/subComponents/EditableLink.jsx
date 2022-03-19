import React, {useContext, useState} from 'react'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faPencilAlt,  faCheck} from '@fortawesome/free-solid-svg-icons'

export default function EditableLink(props){
  
  const [mode, setMode] = useState("link")
  const [tempLinkText, setTempLinkText] = useState(props.linkText)
  const [tempHref, setTempHref] = useState(props.href)
  const [showButtons, setShowButtons] = useState(false);

  const saveLinkEdits = () =>{      
    let newLinkText = tempLinkText
    let newHref = tempHref

    if (newLinkText === ""){
      newLinkText = props.linkText
    }

    if (newHref === ""){
      newHref = props.href
    }

    props.setLinkText(newLinkText)
    props.setHref(newHref)

    setTempHref(newHref)
    setTempLinkText(newLinkText) //this retrieves the string inside > <
    setMode("link")
  }

  const changeToEditMode = () => {
    props.setLinkText(props.linkText)
    props.setHref(props.href)
    setMode("edit")
  }

  const setButtonsVisibility = (showButtons) => {
    setShowButtons(showButtons)
  }

    return(
      <div onMouseEnter={() => setButtonsVisibility(true)} onMouseLeave={() => {setButtonsVisibility(false)}}>
        {mode == "edit" ?
            <div   className={'d-flex flex-column '+(props.localDisplaySettings.isMobile?"w-75 ":"w-50 ")+ (props.divClass)} 
            style={{...props.divStyle, position:"relative"}}>
                <div className="input-group mb-1">
                    <label className="col-form-label col-sm-4">Text</label>
                    <input 
                        type="text" 
                        className="form-control  col-sm-8" 
                        placeholder="Text" 
                        value={tempLinkText}
                        onChange = {evt=>setTempLinkText(evt.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label className="col-form-label col-sm-4">HyperLink</label>
                    <input 
                        type="text" 
                        className="form-control col-sm-8" 
                        placeholder="Href" 
                        value = {tempHref}
                        onChange = {evt=>setTempHref(evt.target.value)}
                    />
                </div>
{/* showButtons */}
                {true && <div className='relative-r' style={{color:props.webStyle.colors.darkShade, top:0}}>
                    {
                    
                        <FontAwesomeIcon className="icon-link" icon={ faCheck} onClick = {saveLinkEdits}/>
                    }
                </div>}
         </div>
        // <div className='relative-div'>
                
        //         <div className="row">
        //         <div className='col-5'>
        //             <div className="input-group ">
        //             <div className="input-group-prepend">
        //                 <span className="input-group-text" id="basic-addon3">Text:</span>
        //             </div>
        //             <input type="text" className="form-control" onChange={handleLinkHTMLChange} value={tempLinkText}/>
        //             </div>
        //         </div>
        //         <div className='col-5'>
        //             <div className="input-group">
        //             <div className="input-group-prepend">
        //                 <span className="input-group-text" id="basic-addon3">href:</span>
        //             </div>
        //             <input type="text" className="form-control" onChange={handleLinkHrefChange} value={tempHref}/>
        //             </div>
        //         </div>
        //         </div> 
        //     </div>
          :
          // justify-content-end '} 
          <div 
            className={'d-flex '+(props.localDisplaySettings.isMobile?"w-75 ":"w-50 ")+ (props.divClass)} 
            style={{...props.divStyle, position:"relative"}}>
              {/* {JSON.stringify(props.localDisplaySettings)} */}
              {/*  */}
              <Link className = {""+props.linkClass}  style={{...props.linkStyle, }} to={props.href} >{props.linkText}</Link>
                {/*  */}
                { showButtons && props.adminSettings.isEditMode && 
                  <div className='relative-r' style={{color:props.webStyle.colors.darkShade, top:0}}>                    
                    <FontAwesomeIcon className="icon-link"  icon={ faPencilAlt} onClick = {changeToEditMode}/>
                   </div>
                }
          </div>
          }
      </div>
      )
};

