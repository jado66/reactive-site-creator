import LinkBox from "../subComponents/LinkBox";
import PictureFrame from "../subComponents/PictureFrame";
import { useContext } from "react"
import { WebContext } from "../Website";

import useComponentStorage from '../helpers/useStorage';

import Fade from 'react-reveal/Fade';
import ComponentMargin from "../subComponents/ComponentMargin";

export default function Mosaic(props){

    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            lImageContent: {},

            lTitle: "Title",
            lSubTitle: "SubTitle",
            lLinkText: `New Link`,
            lHref: "",
    
            rImageContent: {},
    
            rTitle: "Title",
            rSubTitle: "SubTitle",
            rLinkText: `New Link`,
            rHref: "",

        }
    }


    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const {webStyle, localDisplaySettings, images, adminSettings} = useContext(WebContext)

    const arrangement = webStyle.componentStyles.mosaic.arrangement


    const handleContentEntryChange = (key, value) =>{
        setContent((prevState) => ({
            ...prevState,
            [key]: value,
          }))
    }

    const rightLinkBoxID = `${props.id}-Rl`
    const rightPictureFrameID = `${props.id}-Rp`
    const leftLinkBoxID = `${props.id}-Ll`
    const leftPictureFrameID = `${props.id}-Lp`

    const leftPictureFrame  = (divClass) => {
        return(    
            <div className={"g-0 " + (divClass)} key = {"leftPictureFrame"}>
                <PictureFrame  
                    key = {leftPictureFrameID} 
                    adminSettings = {adminSettings} 
                    webStyle = {webStyle} 
                    images = {images}
                    id = {leftPictureFrameID} 
                    imageContent = {content.lImageContent} 
                    setImageContent = {(value)=>{handleContentEntryChange("lImageContent",value)}} 
                    isNested
                />
            </div>     
        )
    }

    const rightPictureFrame = (divClass) => {
        return(
            <div className={"g-0 " + (divClass)} key = {"rightPictureFrame"}>
                <PictureFrame 
                    key = {rightPictureFrameID} 
                    adminSettings = {adminSettings} 
                    webStyle = {webStyle} 
                    images = {images}
                    imageContent = {content.rImageContent} 
                    id = {rightPictureFrameID} 
                    setImageContent = {(value)=>{handleContentEntryChange("rImageContent",value)}} 
                    isNested
                />
            </div>
        )
    }

    const leftLinkBox = (divClass) => {
        return(
            <div className={"g-0 " + (divClass)} key = {"leftLinkBox"}>
                <LinkBox 
                    className="row g-0 "
                    key = {leftLinkBoxID} 
                    id = {leftLinkBoxID} 
                    adminSettings = {adminSettings} 
                    webStyle = {webStyle}
                    title = {content.lTitle} 
                    subTitle = {content.lSubTitle} 
                    linkText = {content.lLinkText} 
                    href = {content.lHref} 
                    localDisplaySettings = {localDisplaySettings}
                    setTitle = {(value)=>{handleContentEntryChange("lTitle",value)}} 
                    setSubTitle = {(value)=>{handleContentEntryChange("lSubTitle",value)}} 
                    setLinkText = {(value)=>{handleContentEntryChange("lLinkText",value)}} 
                    setHref = {(value)=>{handleContentEntryChange("lHref",value)}}
                />
            </div>
        )
    }
    
    const rightLinkBox = (divClass) => {
        return(
            <div className={"g-0 " + (divClass)} key = {"rightLinkBox"}>
                <LinkBox 
                    key = {rightLinkBoxID} 
                    id = {rightLinkBoxID} 
                    adminSettings = {adminSettings} 
                    webStyle = {webStyle}
                    title = {content.rTitle} 
                    subTitle = {content.rSubTitle} 
                    linkText = {content.rLinkText} 
                    href = {content.rHref} 
                    localDisplaySettings = {localDisplaySettings}
                    setTitle = {(value)=>{handleContentEntryChange("rTitle",value)}} 
                    setSubTitle = {(value)=>{handleContentEntryChange("rSubTitle",value)}} 
                    setLinkText = {(value)=>{handleContentEntryChange("rLinkText",value)}} 
                    setHref = {(value)=>{handleContentEntryChange("rHref",value)}}
                />
            </div> 
        )
    }

    const componentMap = 
        {
            LP:(divClass)=>leftPictureFrame(divClass),
            RP:(divClass)=>rightPictureFrame(divClass),
            LL:(divClass)=>leftLinkBox(divClass),
            RL:(divClass)=>rightLinkBox(divClass)
        }

    if (localDisplaySettings.isMobile){
        return(
        <div style={{...props.style, backgroundColor:webStyle.colors[webStyle.componentStyles.mosaic.backgroundColor]}} className = {"row "+(localDisplaySettings.isMobile?"px-2 ":"px-5")} data-no-dnd="true">
            <div className="col">
                <div className = {"row g-0 mb-5" }>
                    <Fade>
                        <div className="row g-0 mb-5">
                            <PictureFrame  
                                 key = {leftPictureFrameID} adminSettings = {adminSettings} webStyle = {webStyle} images = {images}
                                id = {leftPictureFrameID} imageContent = {content.lImageContent} setImageContent = {(value)=>{handleContentEntryChange("lImageContent",value)}} isNested
                            />
                        </div>
                    </Fade>
                    <Fade>
                        <LinkBox 
                            className="row g-0 "
                            key = {leftLinkBoxID} id = {leftLinkBoxID} adminSettings = {adminSettings} webStyle = {webStyle}
                            title = {content.lTitle} subTitle = {content.lSubTitle} linkText = {content.lLinkText} href = {content.lHref} localDisplaySettings = {localDisplaySettings}
                            setTitle = {(value)=>{handleContentEntryChange("lTitle",value)}} setSubTitle = {(value)=>{handleContentEntryChange("lSubTitle",value)}} setLinkText = {(value)=>{handleContentEntryChange("lLinkText",value)}} setHref = {(value)=>{handleContentEntryChange("lHref",value)}}
                        />
                    </Fade>
                </div>
                <div className = {"row g-0"}>
                    <Fade>
                        <div className="row g-0 mb-5">
                            <PictureFrame key = {rightPictureFrameID} adminSettings = {adminSettings} webStyle = {webStyle} images = {images}
                                          imageContent = {content.rImageContent}  setImageContent = {(value)=>{handleContentEntryChange("rImageContent",value)}} id = {rightPictureFrameID} isNested/>
                        </div>
                    </Fade>
                    <Fade>
                        <LinkBox 
                            key = {rightLinkBoxID} id = {rightLinkBoxID} adminSettings = {adminSettings} webStyle = {webStyle}
                            title = {content.rTitle} subTitle = {content.rSubTitle} linkText = {content.rLinkText} href = {content.rHref} localDisplaySettings = {localDisplaySettings}
                            setTitle = {(value)=>{handleContentEntryChange("rTitle",value)}} setSubTitle = {(value)=>{handleContentEntryChange("rSubTitle",value)}} setLinkText = {(value)=>{handleContentEntryChange("rLinkText",value)}} setHref = {(value)=>{handleContentEntryChange("rHref",value)}}
                        />
                    </Fade>
                </div>
            </div>
        </div>)
    }
    else{
        return(
            <Fade>
            <ComponentMargin componentName = {"mosaic"} webStyle = {webStyle}>
                <div className = {"col me-3"} data-no-dnd="true">
                    <Fade>
                        {arrangement.split('-')[0].split(",").map((el, index,) => 
                            {
                                if (index === 0){
                                    return componentMap[el]("mb-5")
                                }
                                else{
                                    return componentMap[el]("")
                                }
                            }
                        )}
                    </Fade>
                </div>
                <div className = {"col ms-3"} data-no-dnd="true">
                    <Fade>
                        {arrangement.split('-')[1].split(",").map((el, index,) => 
                            {
                                if (index === 0){
                                    return componentMap[el]("mb-5")
                                }
                                else{
                                    return componentMap[el]("")
                                }
                            }
                        )}                      
                    </Fade>
                </div>  
            </ComponentMargin>  
            </Fade>          
        )
    }
}

