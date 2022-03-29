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
        mainBrandColor: "#17A9CC",
        darkAccent: "#1F4C57" ,
        darkShade: "#322127"
    },
    pages: [
        {
          id:"Page-1",
          name:"Home",
          path:"/",
          components:
            [
              {
                  name: "NavigationBar",
                  id: `Home-NavBar-0-001 `,
                  content:{}
              },
              {
                name: "Mosaic",
                id: `Home-Mosaic-1-042 `,
                content:{}
              },
              {
                name: "TextEditor",
                id: `Home-TextEditor-2-948`,
                content: {
                  html:`<h2 class="ql-align-center mb-3">Here is some text</h2>
                  <p class="ql-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pharetra nisl. Pellentesque in pellentesque justo, et ultrices augue. Mauris neque magna, laoreet vel purus nec, porttitor cursus quam. Maecenas posuere tellus in mauris elementum, id hendrerit lectus convallis. Nulla nec odio odio. Duis sed orci orci. Phasellus lobortis tristique ex vitae cursus. Ut eu erat sit amet orci tincidunt pretium. Phasellus malesuada, purus ut luctus scelerisque, turpis nisi dictum ex, malesuada semper nisl purus quis ligula. Mauris eu mollis mauris. Cras quis metus velit.</p>
                  <p class="ql-align-justify">Morbi vel tellus venenatis, rutrum neque sit amet, mollis enim. In eget placerat dolor. Mauris porttitor augue sit amet ligula commodo, sed sollicitudin turpis tempor. In placerat purus sem, a placerat ligula varius a. Curabitur consectetur, dui at pulvinar gravida, elit augue lobortis ipsum, laoreet bibendum massa libero id est. Donec maximus, turpis volutpat placerat lacinia, neque ante bibendum sapien, vel venenatis lectus diam in nisi. Donec aliquam dignissim tellus, condimentum eleifend arcu porttitor et. Morbi quis posuere dui, in vulputate augue.</p>
                  <p class="ql-align-justify">In diam tellus, congue vitae purus eget, posuere tristique diam. Vivamus placerat dictum nisi, ut scelerisque mauris tempor ut. Pellentesque imperdiet, arcu eu faucibus posuere, nulla ante gravida ligula, vel condimentum leo orci a ligula. Vivamus suscipit velit felis, sed mollis nibh faucibus nec. Fusce efficitur pretium blandit. In ac pulvinar purus. Nunc vitae magna orci. Ut maximus nibh ut felis tincidunt auctor. Etiam rhoncus sem at nunc feugiat, quis interdum urna tristique. Nullam elementum dapibus velit. Morbi ac odio commodo, iaculis lectus sagittis, dignissim felis. Aliquam fermentum at tellus a ullamcorper.</p>`
                }
              },
              {
                name: "Footer",
                id: `Home-Footer-2-051 `,
                content:{}
              }
            ]
        },
        {
          id:"Page-2",
          name:"About",
          path:"/about",
          components:
            [
              {
                name: "NavigationBar",
                id: `About-NavBar-1-001`,
                content:{}
              },
              
            ]
        }, 
        {
          id:"Page-3",
          name:"Contact",
          path:"/contact",
          components:
            [
              {
                name: "NavigationBar",
                id: `Contact-NavBar-1-001`,
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
        html: `<h1 class = "ql-align-center">{siteName}</h1>`,
        navData: 
        [
          {
            id:1,
            name:"About Us",
            path:"/about"
          },
          {
            id:2,
            name:"Contact",
            path:"/contact"
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

  const images = []// require.context('../../../public/images', true);

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
    siteName: props.siteName || site_template.siteName,
    // Website colors
    colors: {...site_template.colors},
    componentStyles :{
        all:{
          shadowStyle: "C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px ",
          borderSize: 0,
          borderShape: "",
          borderColor: "darkShade",
          shadowColor: 'darkShade',
          linkStyle: "text-decoration-underline"

        },
        background:{
          marginColor:"lightShade",
          backgroundColor: "lightAccent",
          applyBackground: true
        },
        header:{
          size: "h1",
          textColor: "darkShade",
        },
        mosaic:{
          arrangement: "LP,RL-LL,RP"
        },
        navigationBar:{
          includeHeader: true,
          topBarMargin: false,
          isSticky: true,
          stickyOffsetY: -4.5,
          justifyButtons: "justify-content-start",
          backgroundColor: "darkAccent",
          textColor: "lightShade",
          navbarStyle: "fullWidth"
        },
        linkBox:{
          backgroundColor: "lightShade",
          textColor: "darkShade",
          linkColor: "darkAccent"
        },
        subscriptionCard:{
          headerTextColor: "lightShade",
          headerBackgroundColor: "darkAccent",
          bodyTextColor: "darkShade",
          bodyBackgroundColor: "lightShade"
        },
        subscriberBox:{
          headerTextColor: "lightShade",
          backgroundColor: "darkAccent",
        },
        pictureFrame:{
          backgroundColor: "mainBrandColor",
          padding: "",
        },
        styledLink:{
          borderShape: null,
          backgroundColor: "mainBrandColor",
          textColor: "darkShade",
        },
        footer:{
          textColor: "darkShade",
        },
        textEditor:{
          backgroundColor: "lightShade",
          textColor: "darkShade",
        },
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
        <Route exact path = {path+"/:pathParam?"} key = {name+"Route"}>
            {adminSettings.isAdmin && adminSettings.isShowEditor &&
                <StylesEditor customShadowStyles = {props.customShadowStyles || []}/>
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
      {/* {JSON.stringify(adminSettings)} , overflowX: "hidden" */}
      <div className="App" style={{minHeight:"100vh"}}>

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
                <StylesEditor customShadowStyles = {props.customShadowStyles || []}/>
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

        if (savedData){
          for (const [key, value] of Object.entries(savedData)) {
            if (key in mergedData && value.constructor == Object){
              mergedData[key] = {...mergedData[key], ...value}
            }
            else{
              mergedData[key] = value
            }
          }
          informSiteOfDraftEdits(apiMethods)
        }

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

