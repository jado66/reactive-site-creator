import React, {useState, useContext} from 'react'

import useComponentStorage from '../helpers/useStorage';

import { WebContext } from "../Website";
import QuillComponent from '../subComponents/QuillComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
export default function SubscriberBox(props){

    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState = {
            html: "Subscribe to our newsletter!"
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [formState,setFormState] = useState({name:"",email:""})
    const {webStyle, adminSettings, localDisplaySettings, apiMethods} = useContext(WebContext)
    const [isShowButtons, showButtons] = useState(false);
    const [isEditHeader, setIsEditHeader] = useState(false)

    let componentStyles = {}
  
    try {
      componentStyles = 
      {
        textColor:webStyle.componentStyles.subscriberBox.headerTextColor,
        backgroundColor:webStyle.componentStyles.subscriberBox.backgroundColor,
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
  
    async function saveHtml(value){
        setContent((prevState) => ({
        ...prevState,
        html: value,
        }));
    }

    const handleContentChange = (key,value) => {
      setContent((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };

    const handleFormChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
    };

    const addNewSubscriber = () =>{
        if (!validateEmail(formState.email)){
            alert("Email isn't a valid email")
        }
        else{
            apiMethods.addNewSubscriber(formState)
            setFormState({name:"",email:""})
        }
    }

    const validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email);
    }

    return(
    <div
        style={{...props.style}}
        className='px-5'
        
    >
        <div 
            className={"px-5 text-center mx-auto py-3  "+(localDisplaySettings.isMobile?"":"w-75 ")+borderShape} 
            data-no-dnd="true" 
            style={{backgroundColor: webStyle.colors[webStyle.componentStyles.subscriberBox.backgroundColor], boxShadow: borderAndShadow}}
            onMouseEnter={() => {
                showButtons(true);
              }}
            onMouseLeave={() => {
            showButtons(false);
            }}
        >
            <div className="container mx-auto pt-3 relative-div mb-4" data-no-dnd = "true">
                <QuillComponent 
                    variables = {{
                    pageName:props.pageName,
                    siteName:webStyle.siteName
                    }}
                    style = {{color:webStyle.colors[componentStyles.textColor]}}
                    webStyle = {webStyle}
                    className = "navbar-header" 
                    html = {content.html} 
                    isEditMode = {isEditHeader} 
                    setHtml = {(value)=>{saveHtml(value)}} 
                    saveEdits = {()=>{setIsEditHeader(!isEditHeader)}}
                />
                {isShowButtons && !isEditHeader &&
                <div className='relative' data-no-dnd="true">
                  <button className='btn ' onClick={()=>setIsEditHeader(true)}>
                    <FontAwesomeIcon style={{color:webStyle.colors[componentStyles.textColor]}} icon = {faPencilAlt}/>
                  </button>
                </div>
              }
              
            </div>
        
        <form className=' rounded mb-3' >
            <div className='row'>
                <div className = "form-group col">
                    <input 
                        type="text" 
                        className = "form-control mb-2" 
                        id="name" 
                        placeholder="Name" 
                        value={formState.name}
                        onChange = {event => handleFormChange("name",event.target.value)}
                    />
                    <input 
                        type="email" 
                        className = "form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Email" 
                        value={formState.email} 
                        onChange = {event => handleFormChange("email",event.target.value)}
                    />
                </div>
                
                <div className = {"form-group d-flex " + (webStyle.isMobile?"col-5":"col-3")}>
                    <button type='button' className = "btn btn-light my-auto text-nowrap" onClick={addNewSubscriber}>Sign Me Up</button>

                </div>

            </div>
           
        </form>
      </div>
      </div>
      )
  };