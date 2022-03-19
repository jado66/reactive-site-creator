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
            lImageUrl: "",
    
            lTitle: "Title",
            lSubTitle: "SubTitle",
            lLinkText: `New Link`,
            lHref: "",
    
            rImageUrl: "",
    
            rTitle: "Title",
            rSubTitle: "SubTitle",
            rLinkText: `New Link`,
            rHref: "",
        }
    }

    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);

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

    const {webStyle, localDisplaySettings, images, adminSettings} = useContext(WebContext)

    if (localDisplaySettings.isMobile){
        return(
        <div className = {"row "+(localDisplaySettings.isMobile?"px-2 ":"px-5")} data-no-dnd="true">
            <div className="col">
                <div className = {"row g-0 mb-5" }>
                    <Fade>
                        <div className="row g-0 mb-5">
                            <PictureFrame  
                                 key = {leftPictureFrameID} adminSettings = {adminSettings} webStyle = {webStyle} images = {images}
                                id = {leftPictureFrameID} imageUrl = {content.lImageUrl} setImageUrl = {(value)=>{handleContentEntryChange("lImageUrl",value)}} isNested
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
                                          imageUrl = {content.rImageUrl}  setImageUrl = {(value)=>{handleContentEntryChange("rImageUrl",value)}} id = {rightPictureFrameID} isNested/>
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
            <div className = {"row g-0 px-5"} data-no-dnd="true">
                <div className = {"col me-3"}>
                    <Fade>
                        <div className="row g-0 mb-5 w-100">
                            <PictureFrame  webStyle = {webStyle}  key = {leftPictureFrameID} adminSettings = {adminSettings} images = {images}
                                           imageUrl = {content.lImageUrl} setImageUrl = {(value)=>{handleContentEntryChange("lImageUrl",value)}} id = {leftPictureFrameID} isNested/>
                        </div>
                        <LinkBox 
                            key = {leftLinkBoxID} id = {leftLinkBoxID} adminSettings = {adminSettings} localDisplaySettings = {localDisplaySettings}
                            title = {content.lTitle} subTitle = {content.lSubTitle} linkText = {content.lLinkText} href = {content.lHref} webStyle = {webStyle}
                            setTitle = {(value)=>{handleContentEntryChange("lTitle",value)}} setSubTitle = {(value)=>{handleContentEntryChange("lSubTitle",value)}} setLinkText = {(value)=>{handleContentEntryChange("lLinkText",value)}} setHref = {(value)=>{handleContentEntryChange("lHref",value)}}
                        />
                    </Fade>
                </div>
                <div className = {"col ms-3"}>
                    <Fade>
                        <div className="row g-0 mb-5">
                        <LinkBox 
                            key = {rightLinkBoxID} id = {rightLinkBoxID} adminSettings = {adminSettings} webStyle = {webStyle}
                            title = {content.rTitle} subTitle = {content.rSubTitle} linkText = {content.rLinkText} href = {content.rHref} localDisplaySettings = {localDisplaySettings}
                            setTitle = {(value)=>{handleContentEntryChange("rTitle",value)}} setSubTitle = {(value)=>{handleContentEntryChange("rSubTitle",value)}} setLinkText = {(value)=>{handleContentEntryChange("rLinkText",value)}} setHref = {(value)=>{handleContentEntryChange("rHref",value)}}
                        />
                        </div>
                            <PictureFrame  key = {rightPictureFrameID} adminSettings = {adminSettings} webStyle = {webStyle} images = {images}
                            imageUrl = {content.rImageUrl} setImageUrl = {(value)=>{handleContentEntryChange("rImageUrl",value)}} id = {rightPictureFrameID} isNested/>
                    </Fade>
                </div>  
            </div>
        )
    }
}