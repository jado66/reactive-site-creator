import React from "react";
import '../helpers/quill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faClipboard, faSave} from '@fortawesome/free-solid-svg-icons'
import { Quill } from "react-quill";

// Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);



// Quill Toolbar component
export default function QuillToolbar(props){
    return(
    <div id="toolbar" className={props.className?props.className:""}>
        <span className="ql-formats">
        <select className="ql-font" defaultValue="arial">
            <option value="arial">Arial</option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
        </select>
        <select className="ql-header" defaultValue="0">
            <option value="2">H1</option>
            <option value="3">H2</option>
            <option value="4">H3</option>
            <option value="5">H4</option>
            <option value="6">H5</option>

        </select>
        </span>
        <span className="ql-formats">
        <button className="ql-bold border-0" />
        <button className="ql-italic border-0" />
        <button className="ql-underline border-0" />
        <button className="ql-strike border-0" />
        </span>
        <span className="ql-formats">
        <button className="ql-list border-0" value="ordered" />
        <button className="ql-list border-0" value="bullet" />
        <button className="ql-indent border-0" value="-1" />
        <button className="ql-indent border-0" value="+1" />
        </span>
        <span className="ql-formats">
        <button className="ql-script border-0" value="super" />
        <button className="ql-script border-0" value="sub" />
        <button className="ql-blockquote border-0" />
        <button className="ql-direction border-0" />
        </span>
        <span className="ql-formats">
        <select className="ql-align border-0" />
        <select className="ql-color border-0" />
        <select className="ql-background border-0" />
        </span>
        <span className="ql-formats">
        <button className="ql-link border-0" />
        <button className="ql-image border-0" />
        <button className="ql-video border-0" />
        </span>
        <span className="ql-formats border-0">
        <button className="ql-code-block border-0" />
        <button className="ql-clean border-0" />
        </span>
        <span className="ql-formats">
        
        
        <button className="ql-undo  border-0">
            <FontAwesomeIcon icon = {faClipboard} onClick={props.clipboardCallback}/>
        </button>
        {props.update &&
            <button className="ql-undo  border-0" onClick={props.checkCallback}>
                <FontAwesomeIcon icon = {faSave} onClick={props.clipboardCallback}/>
            </button>
        }
        {props.check &&
            <button className="ql-undo border-0">
                <FontAwesomeIcon icon = {faCheck} onClick={props.checkCallback}/>
            </button>
        }
        </span>
    </div>
    );
}