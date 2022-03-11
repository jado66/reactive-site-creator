import React, {useState, useEffect, useContext} from 'react'
import ContentEditable from 'react-contenteditable'

import { WebContext } from "../Website";

export default function Header(props){
    const contentEditable = React.createRef();
    const [html, setHtml] = useState(`Header`);
    
    const {webStyle, msgPort, appMethods} = useContext(WebContext)

    const setContent = (content) =>{
      // Save in local browser
      if (webStyle.autoSaveEdits){
        const html = localStorage.getItem(props.id);
        if (html){
          setHtml(html)
          return
        }
      }

      if (Object.keys(content).length !== 0 && content){
        setHtml(content.html)
      }
      else if (props.index === 0){
        setHtml(props.pageName)
      }
    } 
  
    const getContent = () =>{
      let content = {}
      content.html = html
      return (content)
    }
    
    // Load content
    useEffect(() => {
      setContent(props.content)
    }, []);
  
    // Save data
    useEffect(() => {
      if (msgPort == "save"){
        const componentData = { 
          name: props.componentName,
          id: props.id,
          content: getContent()
        }
        appMethods.saveComponentData(props.pageName,props.index,componentData)
      }
    }, [msgPort]);

    const handleChange = (evt) => {
      setHtml(evt.target.value);

      if (webStyle.autoSaveEdits){
        localStorage.setItem(props.id,evt.target.value);
      }
    };
    return(

      <div className="px-5 text-center " data-no-dnd="true">
        <ContentEditable
          className='apply-font-primary mb-0'
          style={{color:webStyle.colors.darkShade}}
          spellCheck = "false"
          innerRef={contentEditable}
          html={html} // innerHTML of the editable div
          disabled={!webStyle.isEditMode}      // use true to disable editing
          onChange={handleChange} // handle innerHTML change
          tagName='h1' // Use a custom HTML tag (uses a div by default)
          /> 
      </div>
      )
  };