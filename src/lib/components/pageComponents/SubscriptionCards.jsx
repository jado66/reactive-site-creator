import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import ContentEditable from 'react-contenteditable'
import EditableButton from '../subComponents/EditableButton'
import QuillComponent from "../subComponents/QuillComponent"
import useComponentStorage from '../helpers/useStorage';

import { WebContext } from "../Website";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ComponentMargin from '../subComponents/ComponentMargin'

export default function SubscriptionCards (props){
    
    const [packagePlanCount, setPackagePlanCount] = useState(3)
    const {webStyle, adminSettings, localDisplaySettings} = useContext(WebContext)
    const [maxHeight, setMaxHeight] = useState(0)
    const [heights, setHeights] = useState([0,0,0])

    const getMaxHeight = (height, index) =>{
        setHeights((prevState) => {
            let newPrevState = [...prevState]
            newPrevState[index] = height
            return newPrevState
            })
        
        setMaxHeight(Math.max(height))  
        
    }
    

    let initialState = props.content    
    if (Object.keys(initialState).length === 0){
        initialState = {
            
            data: [
                {
                  header: "Product 1",
                  htmlContent: `<p class="ql-align-center">
                  <strong>$ Price 1</strong>
                  </p>
                  <p>- Here is a description</p>`,
                },
                {
                  header: "Product 2",
                  htmlContent: `<p class="ql-align-center">
                  <strong>$ Price 2</strong>
                  </p>
                  <p>- Here is a description</p>`,
                },
                {
                  header: "Product 3",
                  htmlContent: `<p class="ql-align-center">
                  <strong>$ Price 3</strong>
                  </p>
                  <p>- Here is a description</p>`,
                }
             ],
            styles:{
            }
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [isShowButtons, showButtons] = useState(false)
    const [isSettingsMode, setIsSettingsMode]= useState(false) 

    const handleDataChange = (index,key,value) => {
       
        setContent((prevState) => {
        
            let newData = [...prevState.data]
            newData[index] = {...newData[index]}
            newData[index][key] = value

            return {
                ...prevState,
                data: newData,
            }
        })
    };

    const handleStyleChange = (key,value) => {
        setContent((prevState) => ({
        ...prevState,
        styles: {
            ...prevState.style,
            [key]: value
        }
        }));
    };



    let componentStyle = {}
    try {
        componentStyle = 
        {
            headerTextColor: webStyle.componentStyles.subscriptionCard.headerTextColor,
            headerBackgroundColor: webStyle.componentStyles.subscriptionCard.headerBackgroundColor,
            bodyTextColor: webStyle.componentStyles.subscriptionCard.bodyTextColor,
            bodyBackgroundColor: webStyle.componentStyles.subscriptionCard.bodyBackgroundColor,
            ...content.styles,
        }
    } catch (error) {
        
    }

    return(
        <ComponentMargin webStyle = {webStyle} componentName = {"subscriptionCard"}>
            <div className={"flex-grow-1 text-center "+(localDisplaySettings.isMobile?" flex-column":" d-flex flex-row")}>
            {/* <span>Heights: {JSON.stringify(heights)}</span>
            <span>Max Height: {JSON.stringify(maxHeight)}</span> */}
            <SubscriptionCard 
                maxHeight = {maxHeight}
                getMaxHeight = {getMaxHeight}
                componentStyle = {componentStyle}
                data = {content.data[0]} 
                webStyle = {webStyle} 
                id = {props.id+"-1"} 
                adminSettings = {adminSettings}
                index = {0} 
                handleDataChange = {handleDataChange}
                className ={'g-0 '+(localDisplaySettings.isMobile?"mb-3":"me-3 ")}
            />
            <SubscriptionCard
                maxHeight = {maxHeight} 
                getMaxHeight = {getMaxHeight}
                componentStyle = {componentStyle}
                data = {content.data[1]} 
                webStyle = {webStyle} 
                id = {props.id+"-2"} 
                adminSettings = {adminSettings}
                index = {1} 
                handleDataChange = {handleDataChange}
                className ={'g-0 '+(localDisplaySettings.isMobile?"my-3":"mx-3")}
            />
            <SubscriptionCard 
                maxHeight = {maxHeight}
                getMaxHeight = {getMaxHeight}
                componentStyle = {componentStyle}
                data = {content.data[2]} 
                webStyle = {webStyle} 
                id = {props.id+"-3"} 
                adminSettings = {adminSettings}
                index = {2} 
                handleDataChange = {handleDataChange}
                className ={'g-0 '+(localDisplaySettings.isMobile?"mt-3":"ms-3")}
            />
        </div>
        </ComponentMargin>
        
      )
};


function SubscriptionCard(props){
    
    const contentEditable = [React.createRef(),React.createRef()] // Header, Price, Button
    const [isEditMode, setIsEditMode] = useState(false)
    const [isShowButtons, showButtons] = useState(false)
    const [height, setHeight] = useState(0);
    const [isAutoHeight, setIsAutoHeight] = useState(true)
    const bodyRef = useRef(null)


    const setHeader = (val) => {props.handleDataChange(props.index,"header",val)}
    const setHtmlContent = (val) => {props.handleDataChange(props.index,"htmlContent",val)}

    async function getNSetHeight(){
        if(bodyRef.current.clientHeight){
            setIsAutoHeight(true)

            setTimeout(() => {
                const height = bodyRef.current.clientHeight
                setHeight(height) 
                props.getMaxHeight(height, props.index)
                setIsAutoHeight(false)
            }, 250)
        }
    }

    useEffect(() => {
        
        getNSetHeight()
            
    },[])

    const saveEdits = () =>{
        
        setIsEditMode(!isEditMode)
        getNSetHeight()

    }

    let borderShape = props.webStyle.componentStyles.all.borderShape
    let borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor]
    let shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor]
  
    let borderAndShadow = ""
      if (props.webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${props.webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${props.webStyle.componentStyles.all.borderSize}px, `
      }
    borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

    return(
        <div className={"col " +(props.className)} data-no-dnd = "true" 
            style={{...props.style}}
        >
            <div 
                className={" "+borderShape} 
                style={{
                    boxShadow:borderAndShadow,
                    backgroundColor:props.webStyle.colors[props.componentStyle.bodyBackgroundColor],
                    
                }}
            >
            <div  className={(borderShape)+" py-3 noBottomRadius "} 
            
                style={{
                    backgroundColor:props.webStyle.colors[props.componentStyle.headerBackgroundColor],
                   
                    }}>
                <ContentEditable
                    style={{color:props.webStyle.colors[props.componentStyle.headerTextColor]}}
                    className="my-0 fw-normal"
                    spellCheck = "false"
                    innerRef={contentEditable[0]}
                    html={props.data.header} // innerHTML of the editable div
                    disabled={!props.adminSettings.isEditMode}      // use true to disable editing
                    onChange={(evt)=>{setHeader(evt.target.value)}} // handle innerHTML change
                    tagName='h2'
                />
            </div>
            <div 
                className={"p-3  d-flex flex-column flex relative-div " }
                style={{
                    
                    
                    minHeight: props.maxHeight !=0 && !isAutoHeight ? props.maxHeight : "",
                    // boxShadow:borderAndShadow,
                   
                }}
                ref = {bodyRef}
                onMouseEnter={() => {
                    showButtons(true);
                }}
                onMouseLeave={() => {
                    showButtons(false);
                }}
            >
                {/* <span>{height}px</span> */}
                {/* <h1 className="card-title pricing-card-title">$250</h1> */}
                {isShowButtons && props.adminSettings.isEditMode && !isEditMode &&
                    <div className="relative d-flex  " style={{zIndex:10}}>
                        
                        <button className=" btn pt-3"  style={{marginRight:".5em"}} data-no-dnd = "true" onClick = {()=>{setIsEditMode(!isEditMode)}}>
                            <FontAwesomeIcon icon={faPencilAlt} style={{color:props.webStyle.colors[props.componentStyle.headerBackgroundColor]}} />
                        </button>
                    </div>
                }
                
                <ul className="list-unstyled mt-1 mb-4 flex-grow-1">
                    
                <QuillComponent 
                    className = "paragraph text-start" 
                    html = {props.data.htmlContent} 
                    isEditMode = {isEditMode} 
                    setHtml = {(value)=>{setHtmlContent(value)}} 
                    saveEdits = {saveEdits}
                    mini = {true} 
                    style = {{color: props.webStyle.colors[props.componentStyle.bodyTextColor]}}
                    webStyle = {props.webStyle} 
                    id ={props.id} 
                    content = {{html:props.data.html}}
                    />
            
                </ul>
                <EditableButton webStyle = {props.webStyle} className={"w-100 btn btn-lg "+(borderShape)} style = {{backgroundColor:props.webStyle.colors[props.componentStyle.headerBackgroundColor], color: props.webStyle.colors[props.componentStyle.headerTextColor]}} callback = {()=>{alert("User picks callback: Link, Go to purhcase, ...")}}/>
               
                {/* <button type="button" className="w-100 btn btn-lg btn-outline-dark">Sign Up</button> */}
            </div>
            </div>
        </div>
    )
}