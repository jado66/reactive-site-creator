import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export function ToastContainer(props){

    const position = (props.bottom ? "bottom-0 " : "" )+(props.end ? "end-0 " : "") + (props.top ? "top-0 " : "" )+(props.start ? "start-0 " : "") +(props.center ? "start-50 translate-middle-x " : "" )

    return (<div className={"toast-container position-fixed p-3 "+position} style={{zIndex:3000}}>
        {props.children}
    </div>)
}

export function ToastYesNo(props){
    
    const [toastTime, setToastTime] = useState(Date.now()) // lol
    const [minsElapsed, setMinsElapsed] = useState(0);
    const [userInput, setUserInput] = useState('')
    
    useEffect(()=>{
        let myInterval = setInterval(() => {
        setMinsElapsed(calculateTimeElapsed(toastTime));
      }, 15000)
      return ()=> {
          clearInterval(myInterval);
        };
      });    

    const onClickYes = (evt) =>{
        if (props.userInput){
            if (userInput !== props.userInput){
                return
            }
        }
        props.onClickYes()
        props.deleteToast()
        evt.stopPropagation()
    }

    const calculateTimeElapsed = (toastTime) => {
        let difference = Date.now() - toastTime
      
        let timeElapsed = 0;
      
        if (difference > 0) {
            timeElapsed = Math.floor((difference / 1000 / 60) % 60)
        }
      
        return timeElapsed;
      };
    
    return(
        <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <span className="me-2 text-warning"><FontAwesomeIcon icon={faPlay}  transform={{ rotate: -90 }}  /></span>
                <strong className="me-auto">Site Editor {props.type}</strong>
                <small>{minsElapsed === 0?"just now":`${minsElapsed} minute${minsElapsed>1?"s":""} ago`}</small>
                <button 
                type="button" 
                className="btn-close" 
                onClick={props.deleteToast}></button>
            </div>
            <div className="toast-body flex-column d-flex bg-light">
                <span className="">{props.msg}</span>
                {props.userInput && <input className="mt-2" type = "text" value={userInput} onChange = {evt=>setUserInput(evt.target.value)}/>}
                <div className="flex-row text-end mt-3">
                    <button className="btn btn-small btn-outline-dark px-4 mx-1" onClick={onClickYes}>{props.userInput?"OK":"Yes"}</button>
                    <button className="btn btn-small btn-outline-dark px-4 mx-1" onClick={props.deleteToast}>No</button>
                </div>
               

            </div>
        </div>
    )
}

export function Toast(props){

    useEffect(() => {
        // declare the data fetching function
    const timedDelete = async () => {
        setTimeout(()=>{
            props.deleteToast()
        },3000)
    }

    // call the function
    timedDelete()
        // make sure to catch any error
        .catch(console.error);
      },[]);

    return (
        <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                {/* <img src="..." className="rounded me-2" alt="..."/  > */}
                <strong className="me-auto">Site Editor</strong>
                <small>just now</small>
                <button 
                type="button" 
                className="btn-close" 
                onClick={()=>props.deleteToast()}></button>
            </div>
            <div className="toast-body">
                {props.msg}
            </div>
        </div>
    )
}

