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
import DynamicPage from "./DynamicPage";
// Pages
// import CheckoutPage from "./pages/checkoutPage";
// import AdminPage from "./pages/AdminPage"
// import AdminLogin from "./pages/AdminLogin"
// import Page404 from "./pages/Page404"


// Data



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
                  content: { html: "New Website Home" }
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
                  name: "Header",
                  id: `Blog-Header-0-000`,
                  content: {}
              }
            ]
        }  
      ],
    masterNavBarData: 
        [
          {
            id:1,
            name:"Blog",
            path:"/blog"
          }
        ],
    socialMedias:[
        {
            location  :"Github",
            link:"https://github.com"
        }],
    promoCodes:{},
    pageData:{
      ["Home"]: 
        [
          { 
              name: "Header",
              id: `Home-Header-0-000`,
              content: { html: "New Website Home" }
          },
          {
              name: "NavigationBar",
              id: `Home-NavBar-1-001 `,
              content:{}
          }
        ]
    }
}

export const WebContext = createContext()

export default function Website() {

  const [webStyle, setWebStyle] = useState({
    siteName: site_template.siteName,
    isEditMode: true,
    isShowEditor: true,
    isAdmin: true,
    // Website colors
    colors: {...site_template.colors},
    promoCodes: {...site_template.promoCodes}
  } )

  const [masterNavData, setMasterNavData] = useState(site_template.masterNavBarData)
  const [socialMedias, setSocialMedias] = useState(site_template.socialMedias)
  const [pages, setPages] = useState(site_template.pages)
  const [promoCodes, setPromoCodes] = useState(site_template.pages)
  const [cart, setCart] = useState({})
  const [msgPort,setMsgPort] = useState("")
  const [savedData, setSavedData] = useState({})
  const componentOptions = ["Product Comparison Table","Walk Through","Product Comparison Cards","Paragraph","Paragraph Backed","Quick Link","Navigation Bar","Header","Footer","Mosaic","Captioned Picture","Video Frame","Slide Show"].sort()
  const flatComponents = ["NavigationBar","Header","Footer","CountDown","ProductComparisonTable"]

  const appMethods = {
    setWebStyle: (state) => setWebStyle(state),
    setMasterNavData: (state) => setMasterNavData(state),
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
  
    deletePage: (pageName, index) => {
      let sureDelete = prompt(`Are you sure you would like to delete the page ${pageName}? This action is irreversible. Type "YES" to delete this page:`, "");
  
      if (sureDelete === "YES"){
        setPages([...pages.slice(0,index) ,...pages.slice(index+1)]);
      }
    },
  
    addPage: () => {
      // alert("New Page")
      
      let newPage = {
        id: generatePageKey(),
        path: "/new-page",
        name: "New Page",
        components:
          [
            { 
                name: "Header",
                id: `Home-Header-0-000`,
                content: {}
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
    saveWebsite:()=>{
      appMethods.sendMsgPortMsg("save")
    },

    toggleStyleEditor:()=>{
      let newWebstyle = {...webStyle}
      newWebstyle.isShowEditor = !newWebstyle.isShowEditor
      setWebStyle(newWebstyle)
     
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
    setWebStyle({...webStyle, isMobile:isMobile})
  }

  // Website init
  useEffect(() => {
    setCartFromStorage();


    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

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
    setWebStyle({...webStyle, isMobile:isMobile})
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
  }, [msgPort]);


  let sitePages  = pages.map(({id, name, path, components})=> {
    
    return(
        <Route exact path = {path+"/:pathParam?"} key = {name+"Route"}>
            {webStyle.isAdmin && webStyle.isShowEditor &&
                <StylesEditor/>
            }         
            <DynamicPage   
              key = {id} 
              webStyle = {webStyle} 
              pageName = {name}
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
          webStyle: webStyle,
          socialMedias: socialMedias,
          masterNavData: masterNavData,
          pages: pages,
          promoCodes: promoCodes,
          cart: cart, 
          msgPort: msgPort,
          savedData: savedData, 
          flatComponents: flatComponents,
          componentOptions: componentOptions,

          appMethods: appMethods
        }
      }>
      {/* {pages.map((page,index)=><><span>{JSON.stringify(page)}</span><br></br></> )} */}
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
            <Route>
              <Page404 cart = {cart} cartCallbacks = {cartCallbacks} pages = {pages} pageCallbacks = {pageCallbacks} socialMedias = {socialMedias} webStyle = {webStyle}/>
            </Route> */}
          </Switch>
          {/* </Fade> */}
        </Router>

      </div>
    </WebContext.Provider>
  );
}

