import LinkBox from "../subComponents/LinkBox";
import PictureFrame from "../subComponents/PictureFrame";
import { useContext } from "react"
import { WebContext } from "../Website";

import useComponentStorage from '../helpers/useStorage';

import Fade from 'react-reveal/Fade';

export default function Mosaic(props){

    let initialState = props.content
    if (Object.keys(initialState).length === 0){
        initialState =
        {
            lImageName: "",
    
            lTitle: "Title",
            lSubTitle: "SubTitle",
            lLinkText: `New Link`,
            lHref: "",
    
            rImageName: "",
    
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
                    imageName = {content.lImageName} 
                    setImageName = {(value)=>{handleContentEntryChange("lImageName",value)}} 
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
                    imageName = {content.rImageName} 
                    id = {rightPictureFrameID} 
                    setImageName = {(value)=>{handleContentEntryChange("rImageName",value)}} 
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
        <div style={{...props.style}} className = {"row "+(localDisplaySettings.isMobile?"px-2 ":"px-5")} data-no-dnd="true">
            <div className="col">
                <div className = {"row g-0 mb-5" }>
                    <Fade>
                        <div className="row g-0 mb-5">
                            <PictureFrame  
                                 key = {leftPictureFrameID} adminSettings = {adminSettings} webStyle = {webStyle} images = {images}
                                id = {leftPictureFrameID} imageName = {content.lImageName} setImageName = {(value)=>{handleContentEntryChange("lImageName",value)}} isNested
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
                                          imageName = {content.rImageName}  setImageName = {(value)=>{handleContentEntryChange("rImageName",value)}} id = {rightPictureFrameID} isNested/>
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
            <div style={{...props.style}} className = {"row g-0 px-5"} data-no-dnd="true">
                <span>{JSON.stringify(content)}</span>

                <div className = {"col me-3"}>
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
                <div className = {"col ms-3"}>
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
            </div>
        )
    }
}