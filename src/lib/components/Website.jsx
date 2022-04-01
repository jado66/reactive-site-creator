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

// Custom Hook for Saving Context Data
import useContextStorage from "./helpers/useContextStorage";

import { defaultSiteData, defaultWebStyles, defaultComponentOptions } from "./defaultData"

export const WebContext = createContext()

export default function Website(props) {

  const images = []// require.context('../../../public/images', true);

  const [siteIsDraft, setSiteIsDraft] = useState(false)

  const siteData = props.defaultSiteData || defaultSiteData

  // Components
  let componentOptions = (props.defaultComponentOptions || defaultComponentOptions)
  componentOptions = {...defaultComponentOptions, ...props.componentOptions}

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
    siteName: siteData.siteName,
    // Website colors
    colors: props.colors || defaultWebStyles.colors,
    componentStyles : props.componentStyles || defaultWebStyles.componentStyles
  })
  
  const [masterNavData, setMasterNavData] =  useContextStorage(adminSettings,apiMethods,msgPort,"masterNavData",siteData.masterNavBarData)
  const [socialMedias, setSocialMedias] = useContextStorage(adminSettings,apiMethods,msgPort,"socialMedias",siteData.socialMedias)
  const [pages, setPages] = useContextStorage(adminSettings,apiMethods,msgPort,"pages",siteData.pages)
  const [promoCodes, setPromoCodes] = useContextStorage(adminSettings,apiMethods,msgPort,"promoCodes",siteData.pages)
  const [cart, setCart] = useState({})
  const [savedData, setSavedData] = useState({})
  
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
      setAdminSettings(prevState => ({
        ...prevState,
        isShowEditor: !prevState.isShowEditor
      }))   
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
      <Route basename={props.basename} exact path = {path+"/:pathParam?"} key = {name+"Route"}>
        {adminSettings.isAdmin && adminSettings.isShowEditor &&
          <StylesEditor customShadowStyles = {props.customShadowStyles || []}/>
        }   
        <DynamicPage   
          key = {id} 
          pageName = {name}
          pageID = {id}
          components = {components}
          componentOptions = {componentOptions}
          defaultComponentList = { ["Header","Navbar"]}
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
        componentOptions: componentOptions,
        appMethods: appMethods,
        apiMethods: apiMethods
      }
    }>
    <div className="App" style={{minHeight:"100vh"}}>
      <Router basename={props.basename}>
        <Switch>  
          {/* App pages */}
          {sitePages}
          
          <Route path = "*">
            <>
              {adminSettings.isAdmin && adminSettings.isShowEditor &&
                <StylesEditor customShadowStyles = {props.customShadowStyles || []}/>
              }  
              <Page404
                key = {"404Page"} 
                pageName = {"404"}
                pageID = {"404Page"}
                components = {[]}
                defaultComponentList = { ["Header","Navbar"]} 
                componentOptions = {componentOptions}   
              />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  </WebContext.Provider>
  );
}