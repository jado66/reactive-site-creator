import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import { compress, decompress } from "lz-string"
// const images = require.context('../../public/images', true);
import { Menu, MenuItem, MenuButton, MenuHeader,
    MenuDivider, FocusableItem, SubMenu} from '@szhsin/react-menu';
import { WebContext } from "../Website";

export default function PictureFrame(props){

    // const content {type: "srcType", url: "" || name: "" } 
    let initialURL = ""
    let initialName = "null"

    // try{
    if (props.imageContent){
        if (props.imageContent.type === "url"){
            initialURL = props.imageContent.url
        }
    }

    const [url, setUrl] = useState(initialURL)
    const [videoFile, setVideoFile] = useState(null)
    const [imageName, setImageName] = useState("")
    const [areButtonsVisible, setButtonsVisible] = useState(false)
    const [width, setWidth] = useState(0)
    const [height,setHeight] = useState(0)
    const inputImageFile = useRef(null) 
    const inputVideoFile = useRef(null)
    const container = useRef(null)


    const {apiMethods} = useContext(WebContext)

    // Similar to componentDidMount and componentDidUpdate:
    // setVideoRatio

    useEffect(() => {

        if (props.imageContent.type == "youtube"){
            setTimeout(() => {
                setVideoRatio()
            }, 1000)
        }

    }, []);

    useEffect(() => {

        const fetchData = async () => {
            const image = await apiMethods.retreiveImageFromDB(props.imageName)
            // setImageUrl(image)
            if (image){
                resizeImageUri(image)

            }
        }
        
        // call the function
        fetchData()
        .catch(console.error);

    }, [props.imageName]);

    useEffect(() => {
        if (props.imageContent.type == "url"){
            setUrl(props.imageContent.url)
        }     
    }, [props.imageContent]);

    const updateImage = (newImage) =>  {
        if (newImage){

            apiMethods.uploadImageToDB(newImage, () => {})

            props.setImageContent({type:"file", name:newImage.name})
            setImageName(newImage.name)
            encodeImageFileAsURL(newImage)
        }
    }

    const updateVideo = (newVideo) =>  {
        if (newVideo){

            // apiMethods.uploadImageToDB(newVideo, () => {})

            props.setImageContent({type:"video", name:newVideo.name})
            setUrl( URL.createObjectURL(newVideo));
            // encodeImageFileAsURL(newVideo)
        }
    }

    const removePicture = () => {
        setUrl("")
        props.setImageContent({type:""})

        // localStorage.removeItem(props.id);
    }

    const getRandomPicture = () => {
        let keyword = props.webStyle.componentStyles.pictureFrame.randomImageKeyword
        let randomNum = Math.floor(Math.random()*1000)
        const url = `https://loremflickr.com/1024/1024/${keyword}?lock=${randomNum}"`
        setUrl(url)
        props.setImageContent({type:"url", url:url})
    }

    const imageToDataUri = (img, width, height) => {

        // create an off-screen canvas
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
    
        // set its dimension to target size
        canvas.width = width;
        canvas.height = height;
    
        // draw source image into the off-screen canvas:
        ctx.drawImage(img, 0, 0, width, height);
    
        // encode image to data-uri with base64 version of compressed image
        return canvas.toDataURL();
    }

    /**
     * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     *
     * @param {Number} srcWidth width of source image
     * @param {Number} srcHeight height of source image
     * @param {Number} maxWidth maximum available width
     * @param {Number} maxHeight maximum available height
     * @return {Object} { width, height }
     */
    const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {

        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { width: srcWidth*ratio, height: srcHeight*ratio };
    }

    /**
    //  * Resize a base 64 Image
    //  * @param {String} base64 - The base64 string (must include MIME type)
    //  * @param {Number} newWidth - The width of the image in pixels
    //  * @param {Number} newHeight - The height of the image in pixels
    //  */
    // const resizeBase64Img = (base64, newWidth, newHeight)=> {
    //     return new Promise((resolve, reject)=>{

    //         alert(`${newWidth},${newHeight}`)

    //         var canvas = document.createElement("canvas");
    //         canvas.style.width = newWidth.toString()+"px";
    //         canvas.style.height = newHeight.toString()+"px";
    //         let context = canvas.getContext("2d");
    //         let img = document.createElement("img");
    //         img.src = base64;
    //         img.onload = function () {
    //             context.scale(newWidth/img.width,  newHeight/img.height);
    //             context.drawImage(img, 0, 0); 
    //             resolve(canvas.toDataURL());               
    //         }
    //     });
    // }

    const changeImageFromURL = () =>{
        const imageUrl = window.prompt("Input the url")



        setUrl(imageUrl)
        props.setImageContent({type:"url",url:imageUrl})
    }

    const changeVideoFromURL = () =>{
        const videoUrl = window.prompt("Input the url")

        setUrl(videoUrl)
        props.setImageContent({type:"video",url:videoUrl})
    }

    const setVideoRatio = () =>{
        if(container.current){
            setWidth(container.current.clientWidth) 

            const height = Math.floor(9*container.current.clientWidth/16)
              setHeight(height)
            container.current.style.minHeight = `${height}px`
          }
    }

    const embedVideoFromURL = () =>{
        const videoUrl = window.prompt("Input the url")
        
            setTimeout(() => {
                setVideoRatio()
            }, 1000)
          
        setUrl(videoUrl)
        props.setImageContent({type:"youtube",url:videoUrl})
    }

    const resizeImageUri = (url) => {
        var image = new Image();
        image.src = url;

        image.onload = function() {
            // access image size here 
            // alert(`${this.width},${this.height}`);

            // let ratio = this.height/this.width;
            // let height = 350 * ratio
            let dims = calculateAspectRatioFit(this.width, this.height, 600, 600)

            let newResult = imageToDataUri(image,dims.width,dims.height)

            // resizeBase64Img(result, dims.width, dims.height).then((compressedResult)=>{
            // const compressedResult = compress(newResult)
            setUrl(newResult)
            // props.setImageUrl(newResult)
            // localStorage.setItem(props.id,compressedResult);
            // });
            // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
        }
    }

    const encodeImageFileAsURL = (file) => {
        var reader = new FileReader();
        reader.onloadend = function() {
            // alert(`RESULT, ${reader.result}`)
            // alert(props.id)
            const result = reader.result

            var image = new Image();
            image.src = result;

            image.onload = function() {
                // access image size here 
                // alert(`${this.width},${this.height}`);

                // let ratio = this.height/this.width;
                // let height = 350 * ratio
                let dims = calculateAspectRatioFit(this.width, this.height, 600, 600)

                let newResult = imageToDataUri(image,dims.width,dims.height)

                // resizeBase64Img(result, dims.width, dims.height).then((compressedResult)=>{
                // const compressedResult = compress(newResult)
                setUrl(newResult)
                props.setImageContent({type:"file",name:file.name})
                // localStorage.setItem(props.id,compressedResult);
                // });
                // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
            }
        }
        reader.readAsDataURL(file);
      }


    const buttonStyle = {backgroundColor:props.webStyle.lightShade,color:props.webStyle.darkShade,
                         borderRadius: "3px", border: `1px solid ${props.webStyle.colors.darkShade}`}
    
    let componentStyles = {}
    try {
        componentStyles = 
        {
            padding:props.webStyle.componentStyles.pictureFrame.padding,
            backgroundColor:props.webStyle.componentStyles.pictureFrame.backgroundColor
        }
        } catch (error) {
        
    }


    let borderShape = props.webStyle.componentStyles.all.borderShape
    let borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor]
    let shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor]
    
    let borderAndShadow = ""
    if (props.webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${props.webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${props.webStyle.componentStyles.all.borderSize}px, `
    }
    borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

    const imageMenu = <>
                        <MenuItem className={"px-0 py-2"}>
                            <MenuButton 
                                className={"btn p-0 px-4 text-start flex-grow-1"}
                                onClick={()=>{inputImageFile.current.click()}}
                            >
                                {!url ?"Upload Image from File":"Change Image from File"}
                            </MenuButton>
                        </MenuItem>
                        <MenuItem className={"px-0 py-2"}>
                            <MenuButton 
                                className={"btn p-0 px-4 text-start flex-grow-1"}
                                onClick={changeImageFromURL}
                            >
                                {!url ?"Set Image from URL":"Change Image from URL"}
                            </MenuButton>
                        </MenuItem>
                        <MenuItem className={"px-0 py-2"}>
                            <MenuButton 
                                className={"btn p-0 px-4 text-start flex-grow-1"}
                                onClick={getRandomPicture}
                            >
                                Random Image
                            </MenuButton>
                        </MenuItem>
                    </>


    return(
        <div className={"relative-div "+props.className+(props.isNested?"":" px-5 mb-5")} onMouseEnter={()=>{setButtonsVisible(true)}} onMouseLeave={()=>{setButtonsVisible(false)}} style={{flex: "1"}}>
            {/* <span>{JSON.stringify(props.imageContent)}</span> */}
            <div className = {(borderShape)+" "+(componentStyles.padding)} style={{minHeight:"300px",backgroundColor:props.webStyle.colors[componentStyles.backgroundColor],boxShadow:borderAndShadow}}>
                { props.imageContent.type == "video" &&
                <>
                    <video className="d-flex flex-grow-1 w-100" src={url} controls>
                        Your browser does not support the video tag.
                    </video>
                </>    
                }
                { props.imageContent.type == "youtube" &&    
                <div  className="video-responsive">
                    {/* <span>{width}x{height}</span> */}
                    <iframe
                        ref={container}
                        // width="560" height="315"
                        className="d-flex flex-grow-1 w-100 h-100"
                        src={`https://www.youtube.com/embed/${props.imageContent.url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                }
                { props.imageContent.type == "url" &&
                <img className={(borderShape)+" w-100 no-select" } src={url} />
                }
            </div>
                
            {
                areButtonsVisible && props.adminSettings.isEditMode &&
                <div className="d-flex flex-row relative" style={{left:0}}>
                    <input
                        style={{display:"none"}}
                        type="file"
                        ref={inputImageFile} 
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            updateImage(event.target.files[0]);
                            }}
                    />
                    <input
                        style={{display:"none"}}
                        type="file"
                        ref={inputVideoFile} 
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            updateVideo(event.target.files[0]);
                            }}
                    />
                    {props.moveLeft &&
                        <input className="ms-3 mt-2 btn btn-light border border-dark" type ="button" value="Move Left" onClick={()=>props.moveLeft()} style={buttonStyle}/>
                    }
                    <Menu className=" dropdown " menuClassName={"border  "} menuButton={<MenuButton className={"ms-2 mt-2 btn btn-light dropdown-toggle border border-dark "}>{props.imageContent.type !== ""?"Change Media":"Add Media"}</MenuButton>} transition>
                        {
                            props.includeVideos ?
                        <>
                            <SubMenu label = {"Image"} menuClassName={"border"}>
                                {imageMenu}
                            </SubMenu>
                            <SubMenu label = {"Video"} menuClassName={"border"}>
                                <MenuItem className={"px-0 py-2"}>
                                    <MenuButton 
                                        className={"btn p-0 px-4 text-start flex-grow-1"}
                                        onClick={()=>{inputVideoFile.current.click()}}
                                    >
                                        {!url ?"Upload Video from File":"Change Video from File"}
                                    </MenuButton>
                                </MenuItem>
                                <MenuItem className={"px-0 py-2"}>
                                    <MenuButton 
                                        className={"btn p-0 px-4 text-start flex-grow-1"}
                                        onClick={changeVideoFromURL}
                                    >
                                        {!url ?"Set Video from URL":"Change Video from URL"}
                                    </MenuButton>
                                </MenuItem>
                                <MenuItem className={"px-0 py-2"}>
                                    <MenuButton 
                                        className={"btn p-0 px-4 text-start flex-grow-1"}
                                        onClick={embedVideoFromURL}
                                    >
                                        Embed YouTube Video
                                    </MenuButton>
                                </MenuItem>
                                
                            </SubMenu>
                        </>
                        
                        :    
                        <>
                        {imageMenu}
                        </>
                    }
                    </Menu>
                   
                    {props.imageContent.type &&
                        <input className="ms-3 mt-2 btn btn-light border border-dark" type ="button" value="Remove Media" onClick={()=>removePicture()} style={buttonStyle}/>
                    }
                    {props.moveRight &&
                        <input className="ms-3 mt-2 btn btn-light border border-dark" type ="button" value="Move Right" onClick={()=>props.moveRight()} style={buttonStyle}/>
                    }
                </div>
            }
            </div> 
    )
}