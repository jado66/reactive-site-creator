import React, {useEffect, useContext} from 'react'
import ContentEditable from 'react-contenteditable'
import useComponentStorage from '../helpers/useStorage';
import saveContent from '../helpers/saveContent';
import { WebContext } from "../Website";

export default function Header(props){
  const contentEditable = React.createRef();
  const [content, setContent] = useComponentStorage(props.pageName+props.id,props.content);
  
  const {webStyle, msgPort, apiMethods} = useContext(WebContext)

  // Save data
  useEffect(() => {
    if (msgPort == "save"){
      apiMethods.setValueInDatabase(props.pageName+props.id,JSON.stringify(content))
      localStorage.removeItem(props.pageName+props.id)
    }
  }, [msgPort]);

  const handleContentChange = (key,value) => {
    setContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  let headerHTML = `No Content`
  if (content){
    headerHTML = content.html
  }

  return(

    <div className="px-5 text-center " data-no-dnd="true">
      <ContentEditable
        className='apply-font-primary mb-0'
        style={{color:webStyle.colors.darkShade}}
        spellCheck = "false"
        innerRef={contentEditable}
        html={headerHTML} // innerHTML of the editable div
        disabled={!webStyle.isEditMode}      // use true to disable editing
        onChange={evt=>handleContentChange("html",evt.target.value)} // handle innerHTML change
        tagName='h1' // Use a custom HTML tag (uses a div by default)
        /> 
    </div>
    )
};