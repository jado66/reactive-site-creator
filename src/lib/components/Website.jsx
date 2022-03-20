import { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// CSS
import '../css/website.css';
import '../css/index.css';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/bootstrapOverrides.css'

// High level components
import StylesEditor from "./StylesEditor";
import DynamicPage from "./pages/DynamicPage";
import Page404 from "./pages/Page404";
// Pages
// import CheckoutPage from "./pages/checkoutPage";
// import AdminPage from "./pages/AdminPage"
// import AdminLogin from "./pages/AdminLogin"
// import Page404 from "./pages/Page404"


// Data

import delayCallback from "./helpers/delayCallback";

// import {site_template} from "./websiteVersions/current"

const site_template = {
    siteName: "New Website",
    colors: {
        lightShade: "#EEE4E8",
        lightAccent: "#8BF6FD",
        mainBrandColor: "#1D92B2",
        darkAccent: "#1F4C57" ,
        darkShade: "#1C191E"
    },
    pages: [
        {
          id:"Page-1",
          name:"Home",
          path:"/",
          components:
            [
              { 
                  name: "Header",
                  id: `Home-Header-0-000`,
                  content: { 
                    type: "h1",
                    header: "New Website Home" }
              },
              {
                  name: "NavigationBar",
                  id: `Home-NavBar-1-001 `,
                  content:{}
              }
            ]
        },
        {
          id:"Page-2",
          name:"Blog",
          path:"/blog",
          components:
            [
              { 
                  type: "h1",
                  name: "Header",
                  id: `Blog-Header-0-000`,
                  content: {}
              },
              {
                name: "NavigationBar",
                id: `Blog-NavBar-1-001`,
                content:{}
              }
            ]
        }  
      ],
    masterNavBarData: 
      {
        isUnique: false,
        includeSocials: true,
        homeLinkText: "Home",
        navData: 
        [
          {
            id:1,
            name:"Blog",
            path:"/blog"
          }
        ]
      },
    socialMedias:[
        {
            location  :"Youtube",
            link:"https://youtube.com"
        },
        {
          location  :"Instagram",
          link:"https://instagram.com"
        },
        {
          location  :"Twitter",
          link:"https://instagram.com"
        }
        ],
    promoCodes:{}
}

export const WebContext = createContext()

export default function Website(props) {

  const images = require.context('../../../public/images', true);

  const [siteIsDraft, setSiteIsDraft] = useState(false)

  const apiMethods = {
    getFromDatabase:  (id,componentState) =>{
      if (props.getFromDatabase){
        props.getFromDatabase(id)
      }
    },
    setValueInDatabase: (id,componentState) =>{
      if (props.saveComponentToDB){
        props.saveComponentDataToDB(id,componentState)
      }
    },
    addNewSubscriber: (formState)=>{
      if (props.addNewSubscriber){
        props.addNewSubscriber(formState)
      }
      
    },
    setSiteIsDraft: (state) => setSiteIsDraft(state),

    
  }
  const [adminSettings, setAdminSettings] = useState({
    isEditMode: props.isAdmin||false,
    isShowEditor: props.isAdmin||false,
    isAdmin: props.isAdmin||false,
    viewDraftEdits: true, 
    autoSaveEditsLocally: true,
    autoUpdateLiveWebsite: false
  })
  const [localDisplaySettings,setLocalDisplaySettings] = useState({
    isMobile: false
  })

  const [msgPort,setMsgPort] = useState("")

  const [webStyle, setWebStyle] = useContextStorage(adminSettings,apiMethods,msgPort,"webStyle",{
    siteName: site_template.siteName,
    // Website colors
    colors: {...site_template.colors},
    componentStyles :{
        header:{
          size: "h1",
          textColor: "darkShade",
        },
        navigationBar:{
          backgroundColor: "darkAccent",
          textColor: "lightShade",
        },
        styledLink:{
          backgroundColor: "mainBrandColor",
          textColor: "darkShade",
        },
        footer:{
          textColor: "darkShade",
        }
      }
  } )

  // Ensure backwards compatible
  useEffect(() => {
    
      
  },[webStyle])
  
  const [masterNavData, setMasterNavData] =  useContextStorage(adminSettings,apiMethods,msgPort,"masterNavData",site_template.masterNavBarData)
  const [socialMedias, setSocialMedias] = useContextStorage(adminSettings,apiMethods,msgPort,"socialMedias",site_template.socialMedias)
  const [pages, setPages] = useContextStorage(adminSettings,apiMethods,msgPort,"pages",site_template.pages)
  const [promoCodes, setPromoCodes] = useContextStorage(adminSettings,apiMethods,msgPort,"promoCodes",site_template.pages)
  const [cart, setCart] = useState({})
  const [savedData, setSavedData] = useState({})
  const componentOptions = ["Navigation Bar","Header","Footer","Subscriber Box", "Styled Link","Mosaic","Text Editor", "Picture Slide Show", "Subscription Cards"].sort()

  // const componentOptions = ["Product Comparison Table","Walk Through","Product Comparison Cards","Paragraph","Paragraph Backed","Quick Link","Navigation Bar","Header","Footer","Mosaic","Captioned Picture","Video Frame","Slide Show"].sort()
  const flatComponents = ["NavigationBar","Header","Footer","CountDown","ProductComparisonTable","Subscriber Box"]

  
  const appMethods = {
    setWebStyle: (state) => setWebStyle(state),
    setMasterNavData: (state) => setMasterNavData(state),
    setAdminSettings: (state) => setAdminSettings(state),
    setCart: (state) => setCart(state),
    setSocialMedias: (state) => setSocialMedias(state),
    setPages: (state) => setPages(state),
    sendMsgPortMsg:(msg)=> setMsgPort(msg),
    setSavedData: (state) => setSavedData(state),
    setPromoCodes: (state) => setPromoCodes(state),
    
    

    addToCart: (cartItem) =>{
      // Check if we already have it in the cart
      if (cartItem.name in cart){
        let newCart = {...cart}
        newCart[cartItem.name].quantity += 1
        setCart(newCart)
      }
      else{
        let newCart = {...cart,[cartItem.name]:cartItem}
        setCart(newCart)
      }
    },
  
    removeFromCart: (itemName) =>{
      // Check if we already have it in the cart
      if (itemName in cart){
        let newCart = {...cart}
        delete newCart[itemName]
        setCart(newCart)
      }
    },
  
    setCartItemQuantity: (itemName, quantity) =>{
      // This should only be called if the item already exists in the cart
      if (itemName in cart){
        let newCart = {...cart}
        
        newCart[itemName].quantity = parseInt(quantity)
        
        if (newCart[itemName].quantity === 0){
          delete newCart[itemName]
        }
        setCart(newCart)
        // localStorage.setItem("cart",JSON.stringify(newCart))
      }
      else{
        alert("Error: Item not found in cart")
      }
    }, 

    handlePageNameChange: (index,name) => {
      let newPage = {
        ...pages[index],
        name: name
      }
      setPages([...pages.slice(0,index), newPage ,...pages.slice(index+1)]); // Callback to save to storage
    },
  
    handlePagePathChange: (index,path) => {
      let newPage = {
        ...pages[index],
        path: path
      }
      setPages([...pages.slice(0,index), newPage ,...pages.slice(index+1)]);
    },
  
    checkIfPageExists: (path) => {
      let pageExists = false
      pages.forEach(page => {
        if (page.path === path){
          pageExists = true;
        }
      })
      return pageExists;
    },
  
    addPage: (name, path) => {
      // alert("New Page")
      const newID = generatePageKey()

      let newName = name;
      let newPath = path;

      if (!name){
        newName = "New Page" 
      }
      if (!path){
        newPath = "/"
      }

      let newPage = {
        id: newID,
        path: newPath,
        name: newName,
        components:
          [
            { 
                name: "Header",
                id: `Page-${newID}-Header-0-000`,
                content: {}
            },
            {
              name: "NavigationBar",
              id: `Page-${newID}-NavBar-1-001`,
              content:{}
            }
          ]
      }
      setPages([...pages, newPage])
    },
  
    // Social
    handleSocialSiteChange: (index,location) => {
      let newSocialMedia = {
        link: socialMedias[index].link,
        location: location
      }
      setSocialMedias([...socialMedias.slice(0,index), newSocialMedia ,...socialMedias.slice(index+1)]); // Callback to save to storage
    },
  
    handleSocialLinkChange: (index,link) => {
      let newSocialMedia = {
        location: socialMedias[index].location,
        link:link
      }
      setSocialMedias([...socialMedias.slice(0,index), newSocialMedia ,...socialMedias.slice(index+1)]);
    },
  
    deleteSocialMedia: (location, index) => {
      let sureDelete = window.confirm(`Are you sure you would like to your social media link to ${location}`);
  
      if (sureDelete){
        setSocialMedias([...socialMedias.slice(0,index) ,...socialMedias.slice(index+1)]);
      }
    },
  
    addSocialMedia: () => {
      let newSocialMedia = {
        location: "New Link",
        link: "/"
      }

      setSocialMedias([...socialMedias, newSocialMedia]);
    },
    toggleViewDraftEdits:(toggleOn)=>{
        
        appMethods.setAdminSettings((prevState) => ({
          ...prevState,
          viewDraftEdits: toggleOn,
        }))
        if (!toggleOn){
          setSiteIsDraft(false)
        }
        appMethods.sendMsgPortMsg("reload")

    },
    saveWebsite:()=>{
      // Check if user really wants to publish edits
      if(window.confirm("Are you sure you want to publish your edits?")){
      
        // If the site-creator is connected to a database
        if (props.saveComponentToDB){
          appMethods.sendMsgPortMsg("save")
          setSiteIsDraft(false)
        }
        else{
          if(window.confirm("There is no database connection, thus continueing will result in losing your edits. Are you sure you want to continue?")){
            appMethods.sendMsgPortMsg("save")
            setSiteIsDraft(false)
          }
        }
      }
      else{
        alert("Please sign in as Admin to save")
      }

    },

    toggleStyleEditor:()=>{
      let newWebstyle = {...webStyle}
      newWebstyle.isShowEditor = !newWebstyle.isShowEditor
      setAdminSettings(newWebstyle)
     
    },

    saveComponentData: (pageName,index, data)=>{
      
      let newSavedData = savedData

      if (pageName in newSavedData){
        newSavedData[pageName][index] = data
      }
      else{
        newSavedData[pageName] = {}
        newSavedData[pageName][index] = data
      }
      
      setSavedData(newSavedData)
    }
  }  

  function handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 991
    setLocalDisplaySettings({...localDisplaySettings, isMobile:isMobile})
  }

  // Website init
  useEffect(() => {
    setCartFromStorage();


    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }

  }, []);

  useEffect(() => {
    setAdminSettings(prevState => ({
      ...prevState,
      isEditMode: props.isAdmin,
      isShowEditor: props.isAdmin,
      isAdmin: props.isAdmin
    }))

  }, [props.isAdmin]);


  const setCartFromStorage = () => {
    // This stays as a local storage item
    let storedCart = JSON.parse(localStorage.getItem("cart"),4,null)
    if (storedCart){
      // storedCart = {}
      setCart(storedCart)
    }
  }

  function handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 991
    setLocalDisplaySettings({...localDisplaySettings, isMobile:isMobile})
  }

  function generatePageKey(){
    let newID = -1

    while (newID === -1){
      newID = String(new Date().getTime()).slice(-3)

      // Check if newID exists
      pages.forEach((page)=>{
        if (newID === page.id){
          newID = -1
        }
      })
    }
    return newID
  }

  useEffect(() => {
    if (msgPort == "save"){
      appMethods.sendMsgPortMsg("")
    }
    if (msgPort == "reload"){
      appMethods.sendMsgPortMsg("")
    }
  }, [msgPort]);

  


  let sitePages  = pages.map(({id, name, path, components})=> {
    
    return(
        <Route exact path = {path+"/:pathParam?"} key = {name+"Route"}>
            {adminSettings.isAdmin && adminSettings.isShowEditor &&
                <StylesEditor/>
            }   
            
            
            
            <DynamicPage   
              key = {id} 
              pageName = {name}
              pageID = {id}
              components = {components}
              defaultComponentList = { ["Header","Navbar"]} componentOptions = {componentOptions}
            />
            
        </Route>
        )
    }
     
  )

  

  return (
    <WebContext.Provider value = {
        {
          images: images,
          localDisplaySettings: localDisplaySettings,
          webStyle: webStyle,
          socialMedias: socialMedias,
          masterNavData: masterNavData,
          pages: pages,
          promoCodes: promoCodes,
          cart: cart, 
          adminSettings: adminSettings,
          siteIsDraft: siteIsDraft,
          msgPort: msgPort,
          savedData: savedData, 
          flatComponents: flatComponents,
          componentOptions: componentOptions,
          appMethods: appMethods,
          apiMethods: apiMethods
        }
      }>
      {/* {JSON.stringify(adminSettings)} */}
      <div className="App" style={{minHeight:"100vh", overflowX: "hidden"}}>

        <Router>
            <Switch>
            
            {/* App pages */}
            {sitePages}
            
            {/* Admin */}
            {/* <Route path="/admin">
              { webStyle.isAdmin?
                <AdminPage
                          cart = {cart} cartCallbacks = {cartCallbacks} 
                          promoCodes = {promoCodes}
                          updateWebStyles = {updateWebStyles} pages = {pages} pageCallbacks = {pageCallbacks} 
                          socialMedias = {socialMedias} webStyle = {webStyle} logOutCallback = {()=>{setWebStyle(prevState => ({
                            ...prevState,
                            isEditMode: false,
                            isAdmin: false,
                        }))}}/>
                :
                <AdminLogin cart = {cart} updateWebStyles = {updateWebStyles} pages = {pages} pageCallbacks = {pageCallbacks} 
                            socialMedias = {socialMedias} webStyle = {webStyle} signInCallback = {(rememberMe)=>{ 
                              if (rememberMe){
                                localStorage.setItem('webStyle-isAdmin',"true");
                              }
                              setWebStyle(prevState => ({
                                                          ...prevState,
                                                          isAdmin: true,
                                                      }))}} />
              }
            </Route> */}
            {/* <Route path="/checkout">
                <CheckoutPage promoCodes = {promoCodes} cart = {cart} cartCallbacks = {cartCallbacks} pages = {pages} pageCallbacks = {pageCallbacks} socialMedias = {socialMedias} webStyle = {webStyle}/>
            </Route>
             */}
             <Route path = "*">
               <>
               {adminSettings.isAdmin && adminSettings.isShowEditor &&
                <StylesEditor/>
            }  
                <Page404
                  key = {"404Page"} 
                  pageName = {"404"}
                  pageID = {"404Page"}
                  components = {[]}
                  defaultComponentList = { ["Header","Navbar"]} componentOptions = {componentOptions}   
                />
                </>
            </Route>
          </Switch>
          {/* </Fade> */}
        </Router>

      </div>
    </WebContext.Provider>
  );

function useContextStorage(adminSettings, apiMethods, msgPort, contextName, initialState){
  const [hasBeenMounted, setHasBeenMounted] = useState(false)
  const [value, setValue] = useState(()=>{
      return getStoredComponent(contextName,initialState,adminSettings,apiMethods)
  })

  // Save data
  useEffect(() => {
    if (msgPort === "save"){
        alert("Saving ")
        apiMethods.setValueInDatabase(contextName,JSON.stringify(value))
        localStorage.removeItem(contextName)
    }
    if (msgPort === "reload"){
        setHasBeenMounted(false)
        setValue(()=>{
            return getStoredComponent(contextName,initialState,adminSettings,apiMethods)
        })
    }

}, [msgPort]);

  useEffect(() => {
      // The use of has been mounted skips the first render.
      // Since we are programatically changing value we don't need to update our storage
      if (hasBeenMounted){ 
          // Set live content from database
          if (adminSettings.autoUpdateLiveWebsite){
            apiMethods.setValueInDatabase(contextName,JSON.stringify(value))  
          }
          // Store draft data locally
          else if (adminSettings.autoSaveEditsLocally){
              localStorage.setItem(contextName,JSON.stringify(value))
              // TODO get this to work
              informSiteOfDraftEdits(apiMethods)
          }
      }
      else{
          setHasBeenMounted(true)
      }
        
    },[value])

    return [value, setValue]
  }
  
}

function getStoredComponent(contextName, initialValue, adminSettings, apiMethods){
  let savedData = null
  
  // If we are viewing the draft load the draft
  if (adminSettings.viewDraftEdits){
      savedData = JSON.parse(localStorage.getItem(contextName))
      
      // we need to override data instead of replace it. This will make it backcompatible
      if (initialValue.constructor == Object){
        let mergedData = {...initialValue}

        for (const [key, value] of Object.entries(savedData)) {
          if (key in mergedData && value.constructor == Object){
            mergedData[key] = {...mergedData[key], ...value}
          }
          else{
            mergedData[key] = value
          }
        }

        informSiteOfDraftEdits(apiMethods)
        return mergedData

      }
      if (savedData){
          informSiteOfDraftEdits(apiMethods)
          return savedData
      } 
  }
  
  // Load any values from database
  if (apiMethods.getFromDataBase instanceof Function ){
      savedData = JSON.stringify(apiMethods.getFromDataBase(contextName))
      if (savedData){
          return savedData
      } 
  }

  // If nothing is stored load the prop data from the template
  if (initialValue instanceof Function){ return initialValue()}
  return initialValue
 
}

function informSiteOfDraftEdits(apiMethods){
    delayCallback(()=>{
        apiMethods.setSiteIsDraft(true)
    },500)
}

