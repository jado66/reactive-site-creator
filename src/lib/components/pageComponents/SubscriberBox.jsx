import React, {useState, useEffect, useContext} from 'react'
import ContentEditable from 'react-contenteditable'
import useComponentStorage from '../helpers/useStorage';

import { WebContext } from "../Website";

export default function SubscriberBox(props){
    const contentEditable = React.createRef();

    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState = {
            header: "Subscribe to our newsletter!"
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [formState,setFormState] = useState({name:"",email:""})
    const {webStyle, msgPort, adminSettings, localDisplaySettings, apiMethods} = useContext(WebContext)
  
    // Save data
    // useEffect(() => {
    //   if (msgPort == "save"){
    //     apiMethods.setValueInDatabase(props.pageID+props.id,JSON.stringify(content))
    //     localStorage.removeItem(props.pageID+props.id)
    //   }
    // }, [msgPort]);
  
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
    <div className='px-5'>
      <div className={"px-5 text-center mx-auto boxShadow py-3 rounded "+(localDisplaySettings.isMobile?"":"w-75")} data-no-dnd="true" style={{backgroundColor:webStyle.colors.darkShade}}>
        <ContentEditable
          className='apply-font-primary mb-4'
          style={{color:webStyle.colors.lightShade}}
          spellCheck = "false"
          innerRef={contentEditable}
          html={content.header} // innerHTML of the editable div
          disabled={!adminSettings.isEditMode}      // use true to disable editing
          onChange={evt=>{handleContentChange("header",evt.target.value)}} // handle innerHTML change
          tagName='h3' // Use a custom HTML tag (uses a div by default)
          /> 
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