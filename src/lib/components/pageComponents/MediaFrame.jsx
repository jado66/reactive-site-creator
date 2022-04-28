import { useState } from "react";
import PictureFrame from "../subComponents/PictureFrame";
import useComponentStorage from "../helpers/useStorage";
import { WebContext } from "../Website";
import { useContext } from "react"

export default function MediaFrame(props){
    
    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            mediaContent: {},
            caption: null
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [isShowButtons, showButtons] = useState(false)
    const {webStyle, localDisplaySettings, images, adminSettings} = useContext(WebContext)

    const setMediaContent = (mediaContent) =>{
        setContent(prevState => {
            let newState = {...prevState}
            newState.mediaContent = mediaContent
            return newState
        })
    }

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
            {/* <span>{JSON.stringify(content.mediaContent)}</span> */}
            <PictureFrame  
                webStyle = {webStyle}  
                key = {`${props.id}-Media`} 
                adminSettings = {adminSettings} 
                imageContent = {content.mediaContent} 
                setImageContent = {(value)=>{setMediaContent(value)}} 
                id = {`${props.id}-Media`} 
                includeVideos
                isNested
            />
            {
                content.caption !== null &&
                <div className="mt-4 px-3">
                    <p>Here is a caption</p>
                </div>
            }
        </div>
        )
    
}