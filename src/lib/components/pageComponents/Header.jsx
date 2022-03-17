import React, {useEffect, useContext} from 'react'
import ContentEditable from 'react-contenteditable'
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";

export default function Header(props){
  const contentEditable = React.createRef();

  let initialState = props.content
  if (Object.keys(initialState).length === 0){
      initialState = {
          header: props.pageName
      }
  }

  const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
  
  const {webStyle, adminSettings, msgPort, apiMethods} = useContext(WebContext)

  

  const handleContentChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  let value = content

  return(

    <div className="px-5 text-center " data-no-dnd="true">
      <ContentEditable
        className='apply-font-primary mb-0'
        style={{color:webStyle.colors.darkShade}}
        spellCheck = "false"
        innerRef={contentEditable}
        html={content.header} // innerHTML of the editable div
        disabled={!adminSettings.isEditMode}      // use true to disable editing
        onChange={evt=>handleContentChange("header",evt.target.value)} // handle innerHTML change
        tagName='h1' // Use a custom HTML tag (uses a div by default)
        /> 
    </div>
    )
};