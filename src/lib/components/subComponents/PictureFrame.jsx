import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import { compress, decompress } from "lz-string"
// const images = require.context('../../public/images', true);


export default function PictureFrame(props){

    const [imageUrl, setImageUrl] = useState("")
    const [areButtonsVisible, setButtonsVisible] = useState(null)
    const inputFile = useRef(null) 
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // const images = props.images

        if (props.imageUrl != ""){
            setImageUrl(props.imageUrl)
            // try{
            //     let path = `./${props.imageUrl}`
            //     setImageUrl(images(path).default)
            // }
            // catch{

            // }
            
        }    
    }, [props.imageUrl]);

    const updateImage = (newImage) =>  {
        if (newImage){
            encodeImageFileAsURL(newImage)
        }
    }

    const removePicture = () => {
        props.setImageUrl("")
        // setImageUrl("")
        // localStorage.removeItem(props.id);
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
                setImageUrl(newResult)
                props.setImageUrl(newResult)
                // localStorage.setItem(props.id,compressedResult);
                // });
                // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
            }

        

           

            

        }
        reader.readAsDataURL(file);
      }


    const buttonStyle = {backgroundColor:props.webStyle.lightShade,color:props.webStyle.darkShade,
                         borderRadius: "3px", border: `1px solid ${props.webStyle.colors.darkShade}`}

    
    const borderStyle = (props.noBorder ? "" : "boxShadow ")
    
    return(
        <div className={"relative-div "+props.className+(props.isNested?"":" px-5 mb-5")} onMouseEnter={()=>{setButtonsVisible(true)}} onMouseLeave={()=>{setButtonsVisible(false)}} style={{flex: "1"}}>
            {/* {props.webStyle.isEditMode?<span>Edit Mode</span>:<span>No Edit Mode</span>} */}
            {imageUrl ? 
                <div style={{backgroundColor:props.webStyle.colors.darkAccent}}>
                    <img className={(borderStyle)+"w-100 no-select" } src={imageUrl} />
                </div>
                
                :
                <div className={borderStyle+"blankDiv w-100"} style={{minHeight:"300px",backgroundColor:props.webStyle.colors.darkAccent}}></div>
            }
            {
                areButtonsVisible && props.adminSettings.isEditMode &&
                <div className="row relative-l">
                    <div > 
                        <input
                            style={{display:"none"}}
                            type="file"
                            ref={inputFile} 
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                updateImage(event.target.files[0]);
                                }}
                            />
                        {!props.imageUrl ?
                            <input type ="button" value="Upload Image" onClick={()=>{inputFile.current.click()}} style={buttonStyle}/>
                            :
                            <input type ="button" value="Change Image" onClick={()=>{inputFile.current.click()}} style={buttonStyle}/>
                        }
                        {props.imageUrl &&
                            <input type ="button" value="Remove Picture" onClick={()=>removePicture()} style={buttonStyle}/>
                        }
                    </div>
                </div>
            }
            </div> 
    )
}