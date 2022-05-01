import { useState } from "react";
import PictureFrame from "../subComponents/PictureFrame";
import useComponentStorage from "../helpers/useStorage";
import { WebContext } from "../Website";
import { useContext } from "react"
import ComponentMargin from "../subComponents/ComponentMargin";

export default function MediaSlideShow(props){
    
    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            ids: [1,2,3,4,5],
            mediaContentList: [{},{},{},{},{}],
            pictureCount: 5
        }
    }


    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [pictureIndex, setPictureIndex] = useState(0)
    const [isShowButtons, showButtons] = useState(false)

    const setPictureContent = (index,value) =>{
        setContent((prevState) => {

            let newImageContent = [...prevState.mediaContentList]

            newImageContent[index] = value

            return {
            ...prevState,
            mediaContentList: newImageContent,
          }})
    }

    const {webStyle, localDisplaySettings, images, adminSettings} = useContext(WebContext)

    const addSlide = () => {
        setPictureIndex(prevState => {
            if (prevState === content.pictureCount -1){
                return prevState +1
            }
            else {
                return prevState
            }
        }
    )
        setContent(prevState => {
            let newState = {...prevState}
            newState.pictureCount = prevState.pictureCount + 1
            newState.mediaContentList =  [...prevState.mediaContentList, {}]
            return newState
        })
    }

    const removeSlide = () => {
        setPictureIndex(prevState => {
                if (prevState === content.pictureCount -1 && prevState>0){
                    return prevState -1
                }
                else {
                    return prevState
                }
            }
        )

        setContent(prevState => {
            if (prevState.pictureCount === 1){
                return prevState
            } 

            let newState = {...prevState}
            newState.pictureCount = prevState.pictureCount - 1
            newState.mediaContentList =  [...prevState.mediaContentList.slice(0,-1)]
            return newState
        })
    }

    const swapMedia = (swapRight, index) => {
        
        if (swapRight){
            if (index === content.pictureCount - 1){
                return
            }
            

            setContent(prevState => {
                let newState = {...prevState}

                let tempID = newState.ids[index]
                newState.ids[index] = prevState.ids[index + 1]
                newState.ids[index + 1] = tempID

                let temp = newState.mediaContentList[index]
                newState.mediaContentList[index] = prevState.mediaContentList[index + 1] 
                newState.mediaContentList[index + 1] = temp
                // alert(`/S/wap ${JSON.stringify(newState.mediaContentList[index + 1])} with ${JSON.stringify(newState.mediaContentList[index])}`)

                return newState
            })
        }
        else{
            if (index === 0){
                return
            }

            setContent(prevState => {
                let newState = {...prevState}
                let temp = newState.mediaContentList[index]
                newState.mediaContentList[index] = prevState.mediaContentList[index - 1] 
                newState.mediaContentList[index - 1] = temp

                return newState
            })
        }
    }

    const nextSlide = (direction) => {
        if(direction < 0 && pictureIndex > 0){
            setPictureIndex(pictureIndex-1)
         }
        if(direction > 0 && pictureIndex < content.pictureCount-1){
            setPictureIndex(pictureIndex+1)
         }
    }

    const numbertext = {color: webStyle.colors.darkShade, fontSize: "large", padding: "8px 12px", position: "absolute",
                        top: 25, left:"2em", zIndex:1,fontWeight: "bold"} 
    const arrow = {cursor: "pointer", position: "absolute", top: "50%", width: "auto", padding: "16px", marginTop: "-35px", 
                    color: webStyle.colors.darkShade, fontWeight: "bold", fontSize: "x-large", borderRadius: "0 3px 3px 0", userSelect: "none", zIndex:1}
            
    return(
        <ComponentMargin webStyle = {webStyle} componentName = {"pictureFrame"}>
        <div 
                style={{...props.style}}      
                className="flex-grow-1 text-center relative-div " 
                data-no-dnd="true"        
                onMouseEnter={() => {
                showButtons(true);
            }}
            onMouseLeave={() => {
                showButtons(false);
            }}
            >
                {pictureIndex >0 && isShowButtons &&
                    <a style={{...arrow,left:"-.25em"}} onClick = {()=>{nextSlide(-1)}}>&#10094;</a>}
                {pictureIndex < content.pictureCount - 1 && isShowButtons &&
                    <a style={{...arrow,right:"-.25em"}} onClick = {()=>{nextSlide(1)}}>&#10095;</a>}
                {pictureIndex == content.pictureCount - 1 && adminSettings.isEditMode && isShowButtons && 
                    <a style={{...arrow,top:"35%",right:"-.25em"}} onClick = {()=>{addSlide()}}>&#x002B;</a>}
                {pictureIndex == content.pictureCount - 1 && content.pictureCount > 1 && adminSettings.isEditMode && isShowButtons && 
                    <a style={{...arrow,bottom:"35%",right:"-.25em"}} onClick = {()=>{removeSlide()}}>-</a>}
                {isShowButtons &&<div  className="numberText" style={numbertext}>{pictureIndex+1} / {content.pictureCount}</div>}
                {/* <span>{JSON.stringify(content.mediaContentList)}</span> */}
                {/* <span>/{content.ids[pictureIndex]}</span> */}
                <PictureFrame  
                    webStyle = {webStyle}  
                    key = {`${props.id}-P${pictureIndex}`} 
                    adminSettings = {adminSettings} 
                    images = {images}
                    imageContent = {content.mediaContentList[pictureIndex]} 
                    setImageContent = {(value)=>{setPictureContent(pictureIndex,value)}} 
                    id = {`${props.id}-P${content.ids[pictureIndex]}`}
                    moveRight = {pictureIndex != content.pictureCount -1 ? ()=>{swapMedia(true, pictureIndex)}:null}
                    moveLeft = {pictureIndex != 0 ? ()=>{swapMedia(false, pictureIndex)}:null}

                    includeVideos 
                    isNested
                />
            </div>
        </ComponentMargin>
       
        )
    
}