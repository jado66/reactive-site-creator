import React from 'react'
import { useState } from 'react'
import ContentEditable from 'react-contenteditable'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faPencilAlt} from '@fortawesome/free-solid-svg-icons'

export default function EditableButton(props){
    const [innerHtml,setInnerHtml] = useState("Sign Up")
    const contentEditable = React.createRef()
    const [edit,setEdit] = useState(false)
    const [admin,setAdmin] = useState(false)

    
    return(
        <div className='relative-div' onMouseEnter={()=>{setAdmin(true)}} onMouseLeave={()=>{setAdmin(false)}}>
            {edit?
                <ContentEditable
                style={{...props.style}}
                className={props.className +(admin?"":" hidden")}
                spellCheck = "false"
                innerRef={contentEditable}
                html={innerHtml} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={(evt)=>{setInnerHtml(evt.target.value)}} // handle innerHTML change
                tagName={'span'}
            />
            :
            <button className={props.className} style={{...props.style}} onClick={props.callback}>{innerHtml}</button>
            }
            <div className={'relative-r'+(admin&& props.webStyle.isEditMode?"":" hidden")}>
                <button onClick={()=>{setEdit(!edit)}} className='btn btn-outline-light no-back'><FontAwesomeIcon className='font-shrink' icon={edit?faCheck:faPencilAlt}/></button>
            </div>
        </div>
    )
    
}