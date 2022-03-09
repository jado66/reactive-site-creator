import { useState, useContext } from "react";
import { WebContext } from "../Website";
export default function Spacer(props) {
    const [isShowBar, showBar] = useState(false);
    const [isShowButtons, setShowButtons] = useState(false)
  
    const {componentOptions} = useContext(WebContext);

  
    const insertComponent = (option)=>{
        props.insertComponent(option, props.index)
        showBar(false)
    }

    let options = componentOptions.map((option,index) => (
      <button className="btn btn-outline-dark border-0 my-1 col me-1" key ={option} onClick = {(evt,option)=>{insertComponent(componentOptions[index])}}>{option}</button>
      ))
  
    const optionButtons = <div style={{whiteSpace:"nowrap"}} className="py-0 g-0 overflow-auto no-scroll">
                            {options}    
                          </div>
      
  
    return (
      <div
        className="g-0 row align-content-center "
        style={{ height: (isShowButtons?"2.5em":".5em") }}
        onMouseEnter={() => 
          showBar(true)
        }
        onMouseLeave={() => {
          showBar(false);
        }}
        onClick={() => {
          setShowButtons(!isShowButtons);
        }}
        // onFocus
      >
        {isShowButtons?
          <div
            className="m-0 px-5 mx-auto " 
          >
            <div >
              <div className="row px-3 mx-auto rounded rounded-pill" style={{backgroundColor:"white",zIndex:2 }}>
                  <div style={{display:"flex", flexDirection:"row"}} >
                      {/* <button style={{width:"5%"}} className="btn btn-light btn-outline-secondary my-1 g-0" onClick={()=>{this.closeAddComponents()}}>{"X"}</button> */}
                      {/* <button style={{width:"5%"}} className="btn btn-light btn-outline-secondary my-1 g-0" onMouseUp={()=>{this.onMouseUp()}} onMouseDown={()=>{this.onMouseDown(true)}}>{"<"}</button> */}
                      {optionButtons}
                      {/* <button style={{width:"5%"}} className="btn btn-light btn-outline-secondary my-1 g-0" onMouseUp={()=>{this.onMouseUp()}} onMouseDown={()=>{this.onMouseDown(false)}}>{">"}</button> */}
                  </div>
              </div>
          </div> 
          </div>
  
        :
        <div className="px-5">
        <hr
          className="m-0 p-0 w-100 mx-auto bg-primary"
          style={{ height: "4px", display: isShowBar ? "" : "none" }}
        />
        </div>
        }
      </div>
    );
  }
  