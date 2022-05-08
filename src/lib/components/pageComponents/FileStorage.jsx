import ComponentMargin from "../subComponents/ComponentMargin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faFileLines, faFolder, faImage, faPlus, faEllipsisH, faSquare as faSquareSolid, faCheckSquare as faCheckSquareSolid, faHeart as faHeartSolid, faFolderPlus} from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare, faSquare, faHeart,  } from "@fortawesome/free-regular-svg-icons"
import { useContext, useEffect, useState, useRef } from "react"
import { WebContext } from "../Website";

export default function FileStorage(props){

    const {webStyle, adminSettings, appMethods} = useContext(WebContext)
    const [dirMap, setDirMap] = useState({
        "Library": {
            "Data":
                {
                "-":
                    [
                    "Text1.txt",
                    "Text2.txt"
                    ]
                },
            "-":
                [
                "Img1.png",
                "Img2.png",
                "Img3.png",
                "Img4.png",
                ]
            }
        ,
        '-':[]
    })
  
    const [allSelected, setAllSelected] = useState(false)
    const [allFavorited, setAllFavorited] = useState(false)
    const [hover, setHover] = useState(false)
    const [currentUrl, setCurrentUrl] = useState("")
    const inputFile = useRef(null) 

    const [currentDirContents, setCurrentDirContents] = useState({
        "-":
        [
          "Text1.txt",
          "Text2.txt"
        ]
    },) // content

    const [selectedFiles, setSelectedFiles] = useState([])

    const [path, setPath] = useState("Home/Library/Data")
  
    const changeImage = (imageName) => {
        alert(path+"/"+imageName)
    }

    const removeFiles = (evt, fileName = null) =>{
        let filesToRemove = []

        if (fileName){
            filesToRemove = [fileName]
        }
        else{

            if (allSelected){
                filesToRemove = [...currentDirContents['-'], ...Object.keys(currentDirContents).filter(el => el !== "-").map(el => el+"/")]
            }
            else{
                filesToRemove = [...selectedFiles]
            }
        }

        let foldersToRemove = []

        for (var i = filesToRemove.length -1; i >= 0; i--){
            if (filesToRemove[i][filesToRemove[i].length-1] === '/'){
                foldersToRemove.push(filesToRemove[i].slice(0, -1))
                filesToRemove.splice(i,1);
            }
        }

        let warningMessage = `Are you sure you would like to delete the selected`
        if (filesToRemove.length > 0){
            warningMessage += ` file${filesToRemove.length>1?"s":""}`
            if (foldersToRemove.length > 0)
                warningMessage += " and"
            else{
                warningMessage += "?"
            }
        }
        if (foldersToRemove.length>0){
            warningMessage += ` folder${foldersToRemove.length>1?"s":""}? Type "YES" to continue:`
        }

        appMethods.createWarningToast(warningMessage, ()=>{        
            
            // Remove favorited storage
            for (var i = 0; i < filesToRemove.length; i++){
                localStorage.removeItem(`FavoriteFiles: ${path+"/"+filesToRemove[i]}`)
            }

            setSelectedFiles([])

            const directories = path.split('/').slice(1)

            let newDirMap = {...dirMap}

            let currentDir = newDirMap

            for (var i = 0; i < directories.length; i++){
                currentDir = currentDir[directories[i]]
            }

            let fileIndeciesToRemove = []
            for (var i = 0; i < currentDir['-'].length; i++){
                if (filesToRemove.includes(currentDir['-'][i])){
                    fileIndeciesToRemove.push(i)
                }
            }
            
            for (var i = fileIndeciesToRemove.length -1; i >= 0; i--){
                currentDir['-'].splice(fileIndeciesToRemove[i],1);
            }

            for (var i = 0; i < foldersToRemove.length; i++){
                delete currentDir[foldersToRemove[i]]
            }
            
            setSelectedFiles([])

            setDirMap(newDirMap)
            setCurrentDirContents(currentDir)

          }, "warning-105",(foldersToRemove.length>0?"YES":null))

    }

    const addFile = (files)=>{
        
        let newFiles = []
        
        for (var i = 0; i < files.length; i++){
            newFiles.push(files[i].name)
        }

        const directories = path.split('/').slice(1)

        let newDirMap = {...dirMap}

        let currentDir = newDirMap

        for (var i = 0; i < directories.length; i++){
            currentDir = currentDir[directories[i]]
        }
        currentDir['-'] = [...currentDir['-'], ...newFiles ]

        setDirMap(newDirMap)
  
        setCurrentDirContents(currentDir)
    }

    const renameFolder = (evt, folderName) =>{
        const newFolderName = window.prompt("What is the new folder name?")
    
        if (newFolderName){
            const directories = path.split('/').slice(1)

            let newDirMap = {...dirMap}

            let currentDir = newDirMap

            for (var i = 0; i < directories.length; i++){
                currentDir = currentDir[directories[i]]
            }
            currentDir[newFolderName] = {...currentDir[folderName]}
            delete currentDir[folderName]

            setDirMap(newDirMap)

            setCurrentDirContents(currentDir)
        }
        
    }

    const renameSelected = (evt, fileName) =>{
        
        let filesToRename = []

        if (fileName){
            filesToRename = [fileName]
        }
        else{

            if (allSelected){
                filesToRename = [...currentDirContents['-'], ...Object.keys(currentDirContents).filter(el => el !== "-").map(el => el+"/")]
            }
            else{
                filesToRename = [...selectedFiles]
            }
        }


        for (var i = filesToRename.length -1; i >= 0; i--){
            if (filesToRename[i][filesToRename[i].length-1] === '/'){
                filesToRename.splice(i,1);
            }
        }

        if (filesToRename.length === 0){
            appMethods.createWarningToast("This method can only be used to rename multiple files.", ()=>{}, "warning-105")
            return
        } 
        
        const prompt = filesToRename.length> 1? 
            "What is the new base-name for the files? Because multiple files are selected, files will have a number appended to the base name."
            :
            `What is the new name for the file?` 

        const baseName = window.prompt(prompt)

        if (baseName.trim()){
            
            setSelectedFiles([])

            const directories = path.split('/').slice(1)

            let newDirMap = {...dirMap}

            let currentDir = newDirMap

            for (var i = 0; i < directories.length; i++){
                currentDir = currentDir[directories[i]]
            }

            let fileIndeciesToRename = []
            for (var i = 0; i < currentDir['-'].length; i++){
                if (filesToRename.includes(currentDir['-'][i])){
                    fileIndeciesToRename.push(i)
                }
            }
            
            let k = 0;

            for (var i = 0; i < fileIndeciesToRename.length; i++){

                const fileExt = currentDir['-'][i].match(/\.[0-9a-z]+$/i)[0]

                if (filesToRename.length > 1){
                    currentDir['-'][i] = baseName + k.toString()+fileExt
                }
                else{
                    currentDir['-'][i] = baseName+fileExt
                }
                k ++;
                
            }

            setSelectedFiles([])
            setAllSelected(false)
            setDirMap(newDirMap)
            setCurrentDirContents(currentDir)
        }

    }

    const addSelectedFile = (imageName, isFolder) => {
        setSelectedFiles(prevState => {
            if (isFolder){
                return [...prevState, imageName+"/"]
            }
            else{
                return [...prevState, imageName]
            }
        })
    }

    const removeSelectedFile = (imageName, isFolder) => {
        setSelectedFiles(prevState => {
            let newState = [...prevState]
            var idx = newState.indexOf(imageName+(isFolder?"/":""));
            if (idx != -1) newState.splice(idx, 1);
            return newState
        })
    }

    const deleteFolder = (evt,folderName) =>{

        appMethods.createWarningToast(`Are you sure you would like to delete the folder "${folderName}"? Type "YES" to delete this page:`, ()=>{
            const directories = path.split('/').slice(1)

            let newDirMap = {...dirMap}

            let currentDir = newDirMap

            for (var i = 0; i < directories.length; i++){
                currentDir = currentDir[directories[i]]
            }
            delete currentDir[folderName]

            setDirMap(newDirMap)

            setCurrentDirContents(currentDir)
          }, "warning-105","YES")
    }

    const addNewFolder = () =>{
        const newFolderName = window.prompt("What is the new folders name?")

        if (newFolderName && newFolderName !== "-"){

            const directories = path.split('/').slice(1)

            let newDirMap = {...dirMap}

            let currentDir = newDirMap

            for (var i = 0; i < directories.length; i++){
                currentDir = currentDir[directories[i]]
            }
            currentDir[newFolderName] = {'-':[]}

            setDirMap(newDirMap)
    
            setCurrentDirContents(currentDir)
        
        }
    }

    const goToCurrentFolder = (directory) => {
        // setCurrentFolder(directory)
        setAllFavorited(false)
        setAllSelected(false)
        setSelectedFiles([])
        const directories = path.split('/')
    
        const directoryIndex = directories.indexOf(directory)
        let newDirectories;
        let newPath;
        if (directoryIndex !== -1){
            newDirectories = directories.slice(0,directoryIndex+1)
            newPath = newDirectories.join('/')
        }
        else{
            newDirectories = [...directories,directory]
            newPath = path + '/' + directory
        }
  
        setPath(newPath)
    
        let newContents = {...dirMap}
    
        newDirectories.slice(1).forEach(directory => {
            newContents = {...newContents[directory]}
        })
  
        setCurrentDirContents(newContents)
    }
  
    const directories = path.split('/')
    const folders = Object.keys(currentDirContents).filter(el => el!== '-')
    
    let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]  
    let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
    let borderShape = webStyle.componentStyles.all.borderShape

    let borderAndShadow = ""
    
    if (webStyle.componentStyles.all.borderSize!==0){
        borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
    }
    borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

    return(
      <ComponentMargin webstyle = {webStyle} componentName = "all">
        <input
            style={{display:"none"}}
            type="file"
            ref={inputFile} 
            onChange={(event) => {
                // console.log(event.target.files);
                addFile(event.target.files);
                }}
            multiple
        />
        <div 
            className={'flex-grow-1 text-center relative-div mb-5 mt-3 p-4 bg-light cursor-auto '+borderShape} 
            style = {{backgroundColor:webStyle.colors[webStyle.componentStyles.fileStorage.backgroundColor], color:webStyle.colors[webStyle.componentStyles.fileStorage.textColor],  boxShadow: borderAndShadow}}
            data-no-dnd = "true"
        >
        <h2 >Title</h2>
        <div className="border">
            <div 
                className="border border-dark"
                style={{minHeight:"300px",backgroundColor:webStyle.colors.mainBrandColor}}
            > 
                    
                { currentUrl &&
                    <img className={" w-100 no-select" } src = {currentUrl} />
                }
            </div>    
        </div>
        <div className='row text-center  g-0 ' style={{justifyContent:"space-around"}}>
            <nav className="mt-3" aria-label="breadcrumb ">
                <ol class="breadcrumb ">
                    {
                    directories.slice(0,-1).map(dirName=>{
                        return <li class="breadcrumb-item"><button onClick={()=>{goToCurrentFolder(dirName)}} className='btn btn-link p-0 ' >{dirName}</button></li>
                    })
                    }
                    <li class="breadcrumb-item" aria-current="page"><button className="btn p-0">{directories[directories.length-1]}</button></li>
                </ol>
            </nav>
            <span>{JSON.stringify()}</span>

            <li className=" border-bottom flex-row d-flex align-items-center border-bottom border-dark">
                <div className="flex-col flex-shrink-1">
                    <FontAwesomeIcon 
                        className="px-2 col cursor-pointer" 
                        icon = {allSelected?(hover?faCheckSquareSolid:faCheckSquare):(hover?faSquareSolid:faSquare)} 
                        onMouseEnter = {()=>setHover(true)}
                        onMouseLeave = {()=>setHover(false)}
                        onClick = {()=>setAllSelected(prevState=>!prevState)}
                    />
                </div>
                <div className="flex-col flex-grow-1 col justify-content-between d-flex align-items-center">         
                    <div className="ms-3 ">
                        <span>- File Name -</span>
                    </div>        
                </div>
                    
                <div className="flex-col ">
                    <span className="me-4 pe-2">Date</span>
                </div>
                <div className="flex-col flex-shrink-1">
                    <FontAwesomeIcon 
                        
                        icon={allFavorited?faHeartSolid:faHeart}
                        className="me-4 col invisible"      
                    />
                </div>
                <div className="flex-col justify-content-end d-flex dropdown">
                    <button className="btn  " data-bs-toggle="dropdown" disabled = {!allSelected && selectedFiles.length <= 1}><FontAwesomeIcon icon={faEllipsisH}/></button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Download Selected</button></li>
                        <li><button class="dropdown-item" type="button" onClick={renameSelected}>Rename Selected</button></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><button class="dropdown-item" type="button" onClick={removeFiles}>Delete Selected</button></li>
                    </ul>
                </div>    
            </li>

            <ul className="border-top mb-0 text-start" style={{listStyleType:"none"}}>
            {
                folders.map(dirName=>{
                    return( 
                        <Line 
                            key = {path+dirName} 
                            selected = {allSelected||selectedFiles.includes(path+"/"+dirName)}  
                            favorited = {allFavorited}
                            name = {dirName} 
                            path = {path}
                            removeFile = {removeFiles}
                            deleteFolder = {deleteFolder}
                            goToCurrentFolder = {goToCurrentFolder} 
                            addSelectedFile = {addSelectedFile} 
                            renameSelected = {renameSelected}
                            renameFolder = {renameFolder}
                            removeSelectedFile = {removeSelectedFile}
                            folder
                        />
                        )
                    }
                )
            }
            {
                currentDirContents['-'].map(dirName=>{
                    return( 
                        <Line 
                            key = {path+dirName} 
                            selected = {allSelected||selectedFiles.includes(path+"/"+dirName)}  
                            favorited = {allFavorited}
                            name = {dirName} 
                            path = {path}
                            removeFile = {removeFiles}
                            fileType = {"image"} 
                            addSelectedFile = {addSelectedFile} 
                            deleteFolder = {deleteFolder}
                            renameSelected = {renameSelected}
                            renameFolder = {renameFolder}
                            removeSelectedFile = {removeSelectedFile}
                            changeImage = {changeImage} 
                        />)
                    }
                )
            }
                <li className="flex-row justify-content-center d-flex">
                    <button 
                        className="btn "
                        onClick={()=>{inputFile.current.click()}}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <button 
                        className="btn "
                        onClick={addNewFolder}
                    >
                        <FontAwesomeIcon icon={faFolderPlus}/>
                    </button>
                </li>
            </ul>
        </div>
      </div>
      </ComponentMargin>
    )
}
  

function Line(props){
      
    const [selected, setSelected] = useState(props.selected)
    const [favorited, setFavorited] = useState(false)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected]); 

    useEffect(() => {
        setFavorited(props.favorited)
    }, [props.favorited]); 

    useEffect(() => {
        const fileName = `FavoriteFiles: ${props.path+"/"+props.name}`
        const isFavorited = localStorage.getItem(fileName)

        if (isFavorited){
            setFavorited(true)
            // alert(`FavoriteFiles: ${props.path+"/"+props.name}`)
        }
    }, []); 


    let fileIcon;
    
    switch (props.fileType){
        case "txt":
            fileIcon = faFileLines
            break;
        case "image":
            fileIcon = faImage
            break;
        default:
            fileIcon = faFile
            break;
    }

    const toggleHeartSelect = () =>{
        setFavorited(prevState =>{
            if (!prevState){
                localStorage.setItem(`FavoriteFiles: ${props.path+"/"+props.name}`, true)
            }
            else{
                localStorage.removeItem(`FavoriteFiles: ${props.path+"/"+props.name}`)
            } 

            return !prevState
        })
    }

    const renameFileOrFolder = () =>{
        if (props.folder){
            props.renameFolder(null,props.name)
        }
        else{
            props.renameSelected(null,props.name)
        }
    }

    const toggleSelectedFile = () =>{
        
        if (selected){
            props.removeSelectedFile(props.name, props.folder)
        }
        else{
            props.addSelectedFile(props.name, props.folder)
        }
        
        setSelected(prevState => !prevState)        
    }

    return(
    <li style={{backgroundColor:selected?"#e6e6e6":""}} className=" border-bottom flex-row d-flex align-items-center ">
        
        <div className="flex-col flex-shrink-1">
            <FontAwesomeIcon 
                className="px-2 col cursor-pointer" 
                icon = {selected?(hover?faCheckSquareSolid:faCheckSquare):(hover?faSquareSolid:faSquare)} 
                onMouseEnter = {()=>setHover(true)}
                onMouseLeave = {()=>setHover(false)}
                onClick = {()=>toggleSelectedFile()}
            />
        </div>
        <div className="flex-col flex-grow-1 col justify-content-between d-flex align-items-center">
        { props.folder ?
            <button 
                onClick={()=>{props.goToCurrentFolder(props.name)}} 
                className='ms-3 btn btn-link p-0' 
            >
                <FontAwesomeIcon className="mx-2" icon={faFolder}/>
                {props.name}
            </button>
            :
            <button 
                onClick={()=>{props.changeImage(props.name)}} 
                className='ms-3 btn p-0 text-dark'>
                <FontAwesomeIcon className="mx-2" icon={fileIcon}/>
                {props.name}
            </button>
            }
        </div>
        
        
        <div className="flex-col ">
            <span className="me-4 pe-2">3/12/2020</span>
        </div>
        <div className="flex-col flex-shrink-1">
            <FontAwesomeIcon 
                onClick={()=>toggleHeartSelect()} 
                style = {{color:favorited?"red":selected?"white":"lightGrey"}} 
                icon={favorited?faHeartSolid:faHeart}
                className="me-4 col cursor-pointer"    
            />
        </div>
        <div className="flex-col  justify-content-end d-flex dropdown">
            <button className="btn  " data-bs-toggle="dropdown" ><FontAwesomeIcon icon={faEllipsisH}/></button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button">Download {props.folder?"Folder":"File"}</button></li>
                <li><button class="dropdown-item" type="button" onClick={renameFileOrFolder}>Rename {props.folder?"Folder":"File"}</button></li>
                <li><hr class="dropdown-divider"/></li>
                <li>
                    <button 
                        class="dropdown-item" 
                        type="button" 
                        onClick = {evt => {
                            if (props.folder){
                                props.deleteFolder(evt,props.name)
                            }
                            else{
                                props.removeFile(evt,props.name)
                            }
                        }}
                    >Delete {props.folder?"Folder":"File"}</button></li>
            </ul>
        </div>
        
    </li>
    )
}

