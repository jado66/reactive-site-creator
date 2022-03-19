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
export default function QuillToolbarMini(props){
    return(
    <div id="toolbar" className={props.className}>
        <span className="ql-formats">
        <select className="ql-font" defaultValue="arial">
            <option value="arial">Arial</option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
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
        </span>
        <span className="ql-formats">
        <select className="ql-align border-0" />
        <select className="ql-color border-0" />
        <select className="ql-background border-0" />
        </span>
        <span className="ql-formats">
        <button className="ql-link border-0" />
      
        </span>
        <span className="ql-formats border-0">
        <button className="ql-clean border-0" />
        </span>
        <span className="ql-formats">
        
            {props.clipboardCallback &&
            <button className="ql-undo  border-0">
                <FontAwesomeIcon icon = {faClipboard} onClick={props.clipboardCallback}/>
            </button>}
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