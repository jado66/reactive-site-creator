import React, {useState, useEffect, useContext, useCallback, useRef, useReducer} from 'react'

import useComponentStorage from '../helpers/useStorage';
import Gallery from "react-photo-gallery";

import { WebContext } from "../Website";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAlignRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PhotoGallery(props){

    let initialState =  props.content
    if (Object.keys(initialState).length === 0){
        initialState = {
            photos: [
                {
                  src: "",
                  width: 4, height: 3
                },
                {
                  src: "",
                  width: 1, height: 1
                },
                {
                  src: "",
                  width: 3, height: 4
                },
                
                {
                    src: "",
                    width: 5, height: 3
                },
                {
                    src: "",
                    width: 3, height: 4
                  },  
                {
                  src: "",
                  width: 3, height: 4
                },
                
                {
                  src: "",
                  width: 4, height: 3
                }
              ]
        }
    }
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState);
    const [selectedPictures, setSelectedPictures] = useState([])
    const {webStyle, adminSettings, localDisplaySettings, apiMethods} = useContext(WebContext)
    const [isShowButtons, setShowButtons] = useState(false);
    // const [margin, setMargin] = useState(8)
    const [corners, setCorners] = useState([null,null,null,null])
    const [coords, setCoords] = useState([])
    const [topRowY, setTopRowY] = useState(0)
    const [bottomRowY, setBottomRowY] = useState(0)

    useEffect(() => {
        if (coords.length > 0 ){
            if (!coords.includes(null)) {
                findCorners()
            }
        }
    }, [coords]);

    async function findCorners(){
        
        let topLeft = {index:0, coords: coords[0]} 
        let topRight = {index:-1, coords: [-Infinity,Infinity]}
        let bottomLeft = {index:-1, coords: [Infinity,-Infinity]}
        let bottomRight = {index:coords.length-1, coords: coords[-1]}

        setTopRowY(topLeft.coords[1])
        setBottomRowY(coords[coords.length-1][1])

        coords.forEach((coord, index) => {
            // top left -> [0,0]

            // if (coord[1] <= topLeft.coords[1] && coord[0] <= topLeft.coords[0]){
            //     topLeft = {index:index, coords: coord}
            // }
            // top right -> [0,Infinity]
            if (coord[1] <= topLeft.coords[1] && coord[0] >= topLeft.coords[0]){
                topRight = {index:index, coords: coord}
            }

            // bottom left -> [0,0]
            if (coord[1] >= topLeft.coords[1] && coord[0] <= topLeft.coords[0]){
                bottomLeft = {index:index, coords: coord}
            }
            // // bottom right -> [0,0]
            // if (coord[1] >= topLeft.coords[1] && coord[0] >= topLeft.coords[0]){
            //     bottomRight = {index:index, coords: coord}
            // }  
        })

        setCorners([topLeft.index, topRight.index, bottomLeft.index, bottomRight.index])
    }

    async function setPhotoCoords(coords,index){
        setCoords((prevState) => {

            let newCoords = [...prevState]

            newCoords[index] = coords

            
            return newCoords
        })
    }

    async function delayForceUpdate(){
        setTimeout(() => {
            forceUpdate()
            // alert("upda  te")
        }, 1500);
        setCoords([])
        setCorners([null,null,null,null])
    }

    const addPicture = () => {
        setContent((prevState) => {

           
            let newPhotos = [...prevState.photos, {
                src: "",
                width: 4, height: 3
              },]

            return {
            ...prevState,
            photos: newPhotos,
          }})
        delayForceUpdate()
    }

    async function deletePictures(){
        setContent((prevState) => {

            let newPhotos = [...prevState.photos]

            newPhotos = newPhotos.filter((el, index) => !selectedPictures.includes(index));

            return {
            ...prevState,
            photos: newPhotos,
          }})
        setTimeout(() => {
            setSelectedPictures([])
            forceUpdate()

        }, 250);
    }

    const setImageUrl = (index, url) =>{
        setContent((prevState) => {

            let newPhotos = [...prevState.photos]

            newPhotos[index].src = url
            return {
            ...prevState,
            photos: newPhotos,
          }})
        delayForceUpdate()
    }

    const selectPicture = (picIndex) => {
        setSelectedPictures((prevState) => {

            let newList = [...prevState]

            const index = newList.indexOf(picIndex);
            if (index > -1) {
                // This means id is present in the array, so remove it
                newList.splice(index, 1);
            } else {
                // This means id is not present in the array, so add it
                newList.push(picIndex);
            }

            return newList
        })
          
    }

    let componentStyles = {}
  
    try {
      componentStyles = 
      {
        textColor:webStyle.componentStyles.subscriberBox.headerTextColor,
        backgroundColor:webStyle.componentStyles.subscriberBox.backgroundColor,
        margin: webStyle.componentStyles.photoGallery.margin,
        fullBorder: webStyle.componentStyles.photoGallery.fullBorder
        }
    } 
    catch (error) {
        
    }
  
    let borderShape = webStyle.componentStyles.all.borderShape
    let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]
    let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
  
    let borderAndShadow = ""
      if (webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
      }
    borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

    let backgroundColors = Object.values(webStyle.colors).filter(color => color != webStyle.colors[webStyle.componentStyles.background.backgroundColor])

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo, margin, photos }) => (
          <SelectedImage
            // selected={selectAll ? true : false}
            selectPicture = {selectPicture}
            selectPictures = {selectedPictures}
            setPhotoCoords = {setPhotoCoords}
            setImageUrl = {setImageUrl}
            topRowY = {topRowY}
            backgroundColors = {backgroundColors}
            bottomRowY = {bottomRowY}
            corners = {corners}
            borderShape = {borderShape}
            boxShadow = {borderAndShadow}
            key={key}
            margin={margin}
            index={index}
            photo={photo}
            photos={content.photos}
            left={left}
            top={top}
          />
        ),
        [borderShape, borderAndShadow, corners, content.photos, webStyle, selectedPictures]
    );
    
    return (
        <div 
            className='px-5 mt-3 justify-contents-around g-0 relative-div' 
            data-no-dnd = "true" 
            style={{cursor:"auto"}}
            onMouseEnter={()=>{setShowButtons(true)}} 
            onMouseLeave={()=>{setShowButtons(false)}}
        >
            {/* {JSON.stringify(selectedPictures)} */}
            { selectedPictures.length > 0 &&
                <div className={'top-toolbar border-0 text-center '+(adminSettings.isShowEditor?" mt-5":"")}>
                    <button onClick={deletePictures} className='mx-auto mt-3 btn btn-light btn-outline-dark'>Delete Selected Picture{selectedPictures.length >1?"s":""}</button>
                </div>
            }
            <div  
                className={'g-0 '+borderShape}
                style={{boxShadow:(componentStyles.fullBorder?borderAndShadow:"")}}
            >   

                <div 
                    // className='bg-info'
                    style={{margin:`-${componentStyles.margin}px`}}
                >
                    <Gallery photos={content.photos} renderImage={imageRenderer} margin = {componentStyles.margin}/>

                </div>
            </div>
            { isShowButtons &&
                <div className='position-absolute d-flex w-100' style={{bottom:0, right:0}}>
                    <button onClick={addPicture} className='mx-auto btn btn-light btn-outline-dark'>Add Picture</button>
                </div>
            }
           
        </div>
    );
}

const imgStyle = {
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
    };
const selectedImgStyle = {
    transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
    };
      
    
const SelectedImage = ({
      index,
      photo,
      margin,
      direction,
      boxShadow,
      corners,
      selectPicture,
      selectPictures,
      setImageUrl,
      setPhotoCoords,
      borderShape,
      topRowY,
      bottomRowY,
      backgroundColors,
      photos,
      top,
      left,
    }) => {
    
    const isSelected = selectPictures.includes(index) 
    const [isShowButtons, setShowButtons] = useState(null)
    
    const [offsetTop, setOffsetTop] = useState(null)
    const inputFile = useRef(null) 

    const updateImage = (newImage) =>  {
        if (newImage){
            encodeImageFileAsURL(newImage)
        }
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
                // setImageUrl(newResult)
                setImageUrl(index, newResult)
                // localStorage.setItem(props.id,compressedResult);
                // });
                // $('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
            }

        

           

            

        }
        reader.readAsDataURL(file);
      }

    useEffect(() => {
        setOffsetTop(ref.current.offsetTop);
        setPhotoCoords([ref.current.offsetLeft,ref.current.offsetTop], index)
      }, []);
   
    const ref = React.createRef()  

    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;
   
    const backgroundColor = backgroundColors[index % backgroundColors.length]

    const handleOnClick = e => {
        // setIsSelected(!isSelected);
        selectPicture(index)
      };

    const cont = {
        backgroundColor: "#eee",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative"
    };

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    let alteredBorderShape = ""
    if (corners.includes(index)?borderShape:""){
        alteredBorderShape = borderShape
        // 0 topleft 
        if (corners.indexOf(index) === 0){
            alteredBorderShape += " topLeft"
        }
        else if (corners.indexOf(index) === 1){
            alteredBorderShape += " topRight"
        }
        else if (corners.indexOf(index) === 2){
            alteredBorderShape += " bottomLeft"
        }
        else if (corners.indexOf(index) === 3){
            alteredBorderShape += " bottomRight"
        }
    }
    
    let divStyle = {
        margin, 
        height: photo.height, 
        boxShadow:boxShadow, 
        width: photo.width, 
        ...cont, 
        backgroundColor:backgroundColor,
        boxShadow:boxShadow
    }

    return (
        <div
            style={
                isSelected ? { ...divStyle, ...selectedImgStyle } : { ...divStyle }
            }
            className={alteredBorderShape + (!isSelected ? " not-selected" : "") + (topRowY == offsetTop?" mt-0 ":"") + (bottomRowY == offsetTop?" mb-0":"" )} //borderShape
            onMouseEnter={()=>{setShowButtons(true)}} 
            onMouseLeave={()=>{setShowButtons(false)}}
            onClick={handleOnClick}
            ref = {ref}
        >
            {/* <span>{index} : {offsetTop},{offsetLeft}</span> */}
            {photo.src ? 
                // <div className = {(borderShape)+" "+(componentStyles.padding)} style={{backgroundColor:props.webStyle.colors[componentStyles.backgroundColor],boxShadow:borderAndShadow}}>
                    <img
                       
                        
                        className={alteredBorderShape} //borderShape
                        
                        alt={photo.title}
                        {...photo}
                    />
                // </div>
                
                :
                <div style={{backgroundColor:backgroundColor}}></div>
                // <div className={(alteredBorderShape)+" blankDiv w-100"} style={{minHeight:"150px",boxShadow:boxShadow}}></div>//backgroundColor:props.webStyle.colors[componentStyles.backgroundColor]
            }
            
            {
                isShowButtons &&
                <div className="d-flex relative w-100 justify-content-center">
                    <input
                        className='btn btn-light btn-outline-dark py-1 px-2 round-0 '   
                        style={{display:"none"}}
                        type="file"
                        ref={inputFile} 
                        onChange={(event) => {
                            event.stopPropagation()

                            console.log(event.target.files[0]);
                            updateImage(event.target.files[0]);

                            }}
                        // ref={inputFile} 
                    />
                    
                    <input 
                        className='btn btn-light btn-outline-dark py-1 px-2 round-0 '
                        type ="button" 
                        value="Change Image" 
                        
                        onClick={(event)=>{
                            event.stopPropagation()
                            inputFile.current.click()


                            // inputFile.current.click()
                        }} 
                        // style={buttonStyle}
                    />
                </div>
            }
            {
                isShowButtons && index != 0 && photo.src &&
                <div className="d-flex relative w-100 justify-content-start ">
                    <button
                        className='btn btn-light btn-outline-dark py-1 px-2 round-0 '
                        type="button"
                        // ref={inputFile} 
                        onChange={(event) => {
                            
                            console.log(event.target.files[0]);
                            event.stopPropagation()
                            // updateImage(event.target.files[0]);
                            }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>

                </div>
            }
            {
                isShowButtons && index != photos.length-1 && photo.src &&
                <div className="d-flex relative w-100 justify-content-end ">
                    <button
                        className='btn btn-light btn-outline-dark py-1 px-2 round-0 '
                        type="button"
                        // ref={inputFile} 
                        onChange={(event) => {
                            
                            console.log(event.target.files[0]);
                            event.stopPropagation()
                            // updateImage(event.target.files[0]);
                            }}
                    >
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>

                </div>
            }
        </div>
      );
    };
    
    