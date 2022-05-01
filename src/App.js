
import Website, {WebContext} from './lib/components/Website';

import { useEffect, useState, useContext } from 'react'
import ComponentMargin from './lib/components/subComponents/ComponentMargin';

function FileStorage(props){

  const {webStyle} = useContext(WebContext)


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

  const [topFolder, setTopFolder] = useState("")
  const [currentDirContents, setCurrentDirContents] = useState({
    "-":
      [
        "Text1.txt",
        "Text2.txt"
      ]
  },) // content
  const [path, setPath] = useState("Home/Library/Data")

  const goToCurrentFolder = (directory) => {
    // setCurrentFolder(directory)
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

  return(
    <ComponentMargin webstyle = {webStyle} componentName = "all">
    <div className='flex-grow-1 text-center relative-div mb-5 mt-3 p-3 bg-light' style = {{...props.style}} data-no-dnd = "true">
      <div className='row text-center  g-0 ' style={{justifyContent:"space-around"}}>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {
            directories.slice(0,-1).map(dirName=>{
              return <li class="breadcrumb-item"><button onClick={()=>{goToCurrentFolder(dirName)}} className='btn btn-link p-0 mb-2' href="#">{dirName}</button></li>
            })
          }
          <li class="breadcrumb-item" aria-current="page"><span>{directories[directories.length-1]}</span></li>

        </ol>
      </nav>
      <ul>
        {
          folders.map(dirName=>{
            return <li ><button onClick={()=>{goToCurrentFolder(dirName)}} className='btn btn-link p-0' href="#">{dirName}</button></li>
          })
        }
        {
          currentDirContents['-'].map(dirName=>{
            return <li ><span>{dirName}</span></li>
          })
        }
      </ul>
      </div>
    </div>
    </ComponentMargin>
    
    //   <div 
    //   style={{...props.style}}      
    //   className=" " 
    //   data-no-dnd="true"        
    //   onMouseEnter={() => {
    //   showButtons(true);
    // }}
    // onMouseLeave={() => {
    //   showButtons(false);
    // }}
  
    )
}


const componentOptions = {
  FileStorage: {
    componentName: "File Storage",
    component: FileStorage,
    isNestedComponent: false
  }
}

function App() {
  const [isAuthenticated, setIsAthenticated] = useState(true)

  useEffect(() => {
    // async function fetchMyAPI() {
    //   checkIP().then(response =>{
    //     setIsAthenticated(true)
    //     // alert(response)

    //   })
    // }

    // fetchMyAPI()
  },[]);

  return (
    <>
    <Website
      // siteName = {"Jadon's Site"}
      isAdmin = {isAuthenticated}
      // basename = {"/site-creator"}
      componentOptions = {componentOptions} 

      customShadowStyles = {
        [
          {
            label:"Custom Styles",
            options: [
              {value:`C4d 0px 0px 0px 3px`, label: "Box1"}
            ]
          }
        ]

      }
    />
    </>
    
  );
}

export async function checkIP(){
  try{
    const response = await fetch("https://ipinfo.io/json").then(j=>j.json()) 
    
    return response.ip === '74.96.171.159'
  }
  catch (err) {
    alert(err)
    return false
   }
  
}

export default App;

