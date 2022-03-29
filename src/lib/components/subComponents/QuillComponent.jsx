import ReactQuill from 'react-quill';
import '../helpers/quill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
// import parse from 'html-react-parser';
import QuillToolbar from "./QuillToolbar";
import QuillToolbarMini from "./QuillToolbarMini";
import { useLocation } from "react-router-dom";

import JsxParser from 'react-jsx-parser';
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

  const location = useLocation()
  const path = location.pathname;
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
    <div className="text-editor  " data-no-dnd = "true">
      {props.isEditMode?
      <div >
        {props.mini?
          <QuillToolbarMini check checkCallback = {()=>{props.saveEdits()}} clipboardCallback = {() => {copyToClipboard()}}/>
          :
          <div className={'top-toolbar bg-light'+(props.adminSettings.isShowEditor?" mt-5":"")}>
            <h3 className='mt-2'>Text Editor Toolbar</h3>
            <QuillToolbar check checkCallback = {()=>{props.saveEdits()}} clipboardCallback = {() => {copyToClipboard()}}/>
          </div>
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
      </div>
      :
       
      <div className={props.className + " ql-editor"} style = {props.style}>        
        {/* <span>{JSON.stringify(props.variables)}</span>
        <span>{props.html}</span> */}
        <JsxParser
          truthyProp={true}
          bindings={{
            ...props.variables, path:path
          }}
          // variables = {props.variables}
          autoCloseVoidElements 
          jsx={props.html?props.html:placeholder}
        />
      </div>
        
      }
    </div>
        
  );
};

