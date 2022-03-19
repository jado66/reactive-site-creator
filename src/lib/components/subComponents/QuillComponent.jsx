import ReactQuill from 'react-quill';
import '../helpers/quill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser';
import QuillToolbar from "./QuillToolbar";
import QuillToolbarMini from "./QuillToolbarMini";

// import { WebContext } from "../App";
// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      save: ()=>{alert("hello")},
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];

export default function QuillComponent(props){

  const placeholder = "Here is some text"

  const copyToClipboard =() =>{
    let htmlString = props.html
    htmlString = htmlString.replace(/></g,`>\n<`)
    navigator.clipboard.writeText(htmlString)
    alert("Copied contents to clipboard")
  }

  const handleChange = value => {
    props.setHtml(value)
  };
  return (
    <div className="text-editor  " >
      {props.isEditMode?
      <div >
        {props.mini?
        <QuillToolbarMini check checkCallback = {()=>{props.saveEdits()}} clipboardCallback = {() => {copyToClipboard()}}/>
        :
        <QuillToolbar check checkCallback = {()=>{props.saveEdits()}} clipboardCallback = {() => {copyToClipboard()}}/>
      }
        <ReactQuill
          className={"text-left "+ props.className}
          theme="snow"
          value={props.html}
          onChange={handleChange}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
        />
      </div>:
      <div className="relative-div text-left " >
        {/* {<div className="relative-r">
          <FontAwesomeIcon icon = {faPencilAlt} onClick={()=>{setEdit(true)}}/>
        </div>} */}
        <div className={props.className} style = {{color: props.webStyle.colors.darkShade}}>
          {/* {props.html} */}
          {props.html? parse(props.html): parse(placeholder)} 
        </div>
        
      </div>}
    </div>
        
  );
};

