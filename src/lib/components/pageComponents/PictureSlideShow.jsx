import { useState } from "react";
import PictureFrame from "../subComponents/PictureFrame";
import useComponentStorage from "../helpers/useStorage";
import { WebContext } from "../Website";
import { useContext } from "react"

export default function PictureSlideShow(props){
    
    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            imageUrls: [""]
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [pictureIndex, setPictureIndex] = useState(0)
    const [pictureCount, setPictureCount] = useState(5)
    const [isShowButtons, showButtons] = useState(false)
    const setPictureUrl = (index,value) =>{
        setContent((prevState) => {

            let newImageUrls = [...prevState.imageUrls]

            newImageUrls[index] = value

            return {
            ...prevState,
            imageUrls: newImageUrls,
          }})
    }

    const {webStyle, localDisplaySettings, images, adminSettings} = useContext(WebContext)


    const nextSlide = (direction) => {
        if(direction < 0 && pictureIndex > 0){
            setPictureIndex(pictureIndex-1)
         }
        if(direction > 0 && pictureIndex < pictureCount-1){
            setPictureIndex(pictureIndex+1)
         }
    }

    const numbertext = {color: webStyle.colors.darkShade, fontSize: "large", padding: "8px 12px", position: "absolute",
                        top: 25, left:"2em", zIndex:1,fontWeight: "bold"} 
    const arrow = {cursor: "pointer", position: "absolute", top: "50%", width: "auto", padding: "16px", marginTop: "-35px", 
                    color: webStyle.colors.darkShade, fontWeight: "bold", fontSize: "x-large", borderRadius: "0 3px 3px 0", userSelect: "none", zIndex:1}
            
    return(
        <div 
            style={{...props.style}}      
            className="px-5 text-center relative-div " 
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
            {pictureIndex < pictureCount - 1 && isShowButtons &&
                <a style={{...arrow,right:"-.25em"}} onClick = {()=>{nextSlide(1)}}>&#10095;</a>}
            {pictureIndex == pictureCount - 1 && adminSettings.isEditMode && isShowButtons &&
                <a style={{...arrow,right:"1em"}} onClick = {()=>{nextSlide(1)}}>&#x002B;</a>}
            {isShowButtons &&<div  className="numberText" style={numbertext}>{pictureIndex+1} / {pictureCount}</div>}
            <PictureFrame  
                webStyle = {webStyle}  
                key = {`${props.id}-P${pictureIndex}`} 
                adminSettings = {adminSettings} 
                images = {images}
                imageUrl = {content.imageUrls[pictureIndex]} 
                setImageUrl = {(value)=>{setPictureUrl(pictureIndex,value)}} 
                id = {`${props.id}-P${pictureIndex}`} 
                isNested
            />
        </div>
        )
    
}