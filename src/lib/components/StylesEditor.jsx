import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faXmark, faSave, faPlus, faUserCog, faShoppingBag, faTowerBroadcast, faTriangleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFile, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { Menu, MenuItem, MenuButton, MenuHeader,
         MenuDivider, FocusableItem, SubMenu} from '@szhsin/react-menu';
import {ciede2000, rgbToHex} from "./helpers/colorDiff";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
  Link
} from "react-router-dom";

import {defaultSiteData, defaultWebStyles} from './defaultDataEmpty'

import {FocusableItemTT, MenuItemTT, MenuButtonTT} from './styleEditorComponents/MenuTooltipItems'

import { useLocation, useHistory } from 'react-router-dom'

import { WebContext } from "./Website";
import ColorSelect from "./styleEditorComponents/customSelects/ColorSelect";
import OptionSelect from "./styleEditorComponents/customSelects/OptionSelect";

import { HeaderMenu, FooterMenu, NavigationBarMenu, LinkBoxMenu, PictureFrameMenu, StyledLinkMenu, PictureSlideShowMenu, TextEditorMenu, SubscriberCardMenu, MosaicMenu, BackgroundMenu, SubscriberBoxMenu, PhotoGalleryMenu } from "./styleEditorComponents/ComponentMenus";
import Tutorial from "./Tutorial";

export const UserPreferencesContext = createContext()

export default function StylesEditor(props) {

  const { siteIsDraft, webStyle, localDisplaySettings, pages, socialMedias, appMethods, apiMethods, adminSettings, promoCodes } = useContext(WebContext);
  const [tempPages, setTempPages] = useState(pages)
  const [isShowSavePagesButton, showSavePagesButton] = useState(false);
  const [lastPathChange, setLastPathChange] = useState(["NA",-1]);
  const [componentsFilter, setComponentsFilter] = useState("");
  const [userEditorPreferences, setUserEditorPreferences] = useState({
    showTooltips: true
  })

  const setShowTooltips = (isShowTooltips) =>{
    setUserEditorPreferences((prevState) => ({
      ...prevState,
      showTooltips: isShowTooltips,
    }))
  } 

  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    if (pages)
      setTempPages(pages)
    // alert("Page change")
  },[pages])

  const updateTempPage = (key, value, index) => {
    let newPage = {
      ...tempPages[index],
      [key]: value
    }
    showSavePagesButton(true)
    setTempPages([...tempPages.slice(0,index), newPage ,...tempPages.slice(index+1)]);
  }

  const savePageChanges = () => {
    appMethods.setPages(tempPages)
    showSavePagesButton(false)

    // 
    if (location.pathname === lastPathChange[0]){
      const newRoute = tempPages[lastPathChange[1]].path
      history.push(newRoute);

    }

  }

  const deletePage = (pageName, index) => {
    let sureDelete = prompt(`Are you sure you would like to delete the page ${pageName}? This action is irreversible. Type "YES" to delete this page:`, "");

    if (sureDelete === "YES"){
      setTempPages([...tempPages.slice(0,index) ,...tempPages.slice(index+1)]);
      appMethods.setPages([...pages.slice(0,index) ,...pages.slice(index+1)])

    }
  }

  const addPage = () =>{
    const newID = generatePageKey()

      let newPage = {
        id: newID,
        path: "/new-page",
        name: "New Page",
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
      setTempPages([...tempPages,newPage])
      appMethods.setPages([...pages, newPage])
  }
  const generatePageKey = () =>{
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

  const handleInputChange = (e) => {
    appMethods.setWebStyle(
      {
        ...webStyle,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleStyleToggle = (component,key) =>{
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(
      {
        ...webStyle,
        componentStyles: {
          ...webStyle.componentStyles,
          [component]: {
            ...webStyle.componentStyles[component],
            [key]: !webStyle.componentStyles[component][key]  
          }
        }
      }
    )
  }

  const handleStyleChange = (component,key,value) =>{
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(
      {
        ...webStyle,
        componentStyles: {
          ...webStyle.componentStyles,
          [component]: {
            ...webStyle.componentStyles[component],
            [key]: value
          }
        }
      }
    )
  }

  const handleSelectChange = (component,key,selectResults) =>{
    // this.setState({ selectedOption });
    // alert(`Change ${component}.${key} to ${JSON.stringify(selectResults.selectedOption.value)}`) 
    appMethods.setWebStyle(
      {
        ...webStyle,
        componentStyles: {
          ...webStyle.componentStyles,
          [component]: {
            ...webStyle.componentStyles[component],
            [key]: selectResults.selectedOption.value
          }
        }
      }
    )
  }

  const handleColorChange = (e) => {
    appMethods.setWebStyle(
      {
        ...webStyle,
        colors: {
          ...webStyle.colors,
          [e.target.name]: e.target.value
        }
      }
    )
  }

  const handleCheckBox = (e,name) => {
    appMethods.setWebStyle(
      {
        ...webStyle,
        [name]: !webStyle[name]
      }
    )    
  }

  

  const handleComponentStyleChange = (component, style, value) => {
    appMethods.setWebStyle(
      {
        ...webStyle,
        componentStyles: {
          ...webStyle.componentStyles,
          [component]: {
            ...webStyle.componentStyles[component],
            [style]: value
          }
        }
      }
    )
  }
  
  // const getRandomColors = () =>{
  //   var url = "http://colormind.io/api/";
  //   var data = {
  //     model : "default",
  //     input : [[Math.floor(Math.random() * 56),Math.floor(Math.random() * 56),Math.floor(Math.random() * 56)],"N","N","N",[Math.floor(Math.random() * 36)+220,Math.floor(Math.random() * 36)+220,Math.floor(Math.random() * 36)+220]]
  //   }
    
  //   var http = new XMLHttpRequest();
    
  //   http.onreadystatechange = function() {
  //     // alert(http.readyState)
  //     if(http.readyState == 4 && http.status == 200) {
  //       var palette = JSON.parse(http.responseText).result;
  //       // var palette = [[190,213,243],[0,0,0],[255,255,255],[105,180,95],[3,8,9]]
  //       var diff = []

  //       for (var i = 0; i < 5; i++){
  //         diff.push(ciede2000(palette[i],[0,0,0]))
  //       }

  //       //1) combine the arrays:
  //       let list = [    
  //         [palette[0], diff[0]],
  //         [palette[1], diff[1]],
  //         [palette[2], diff[2]],
  //         [palette[3], diff[3]],
  //         [palette[4], diff[4]]
  //       ]
  //       //2) sort:
  //       list.sort((a, b) => b[1] - a[1]);

  //       // alert(JSON.stringify(list))

  //       let hexColors = []
  //       //3) separate them back out:
  //       for (var k = 0; k < 5; k++) {
  //         hexColors.push(rgbToHex(list[k][0]));
  //       }

  //       appMethods.setWebStyle(
  //         {
  //           ...webStyle,
  //           colors:{
  //             ...webStyle.colors,
  //             lightShade: hexColors[0],
  //             lightAccent: hexColors[1],
  //             mainBrandColor: hexColors[2],
  //             darkAccent: hexColors[3],
  //             darkShade: hexColors[4]
  //           }
  //         }
  //       )     
  //     }
  //   }
    
  //   http.open("POST", url, true);
  //   http.send(JSON.stringify(data));
    
  // }

  const invertColors = () =>{
    appMethods.setWebStyle(
      {
        ...webStyle,
        colors:{
          ...webStyle.colors,
          lightShade: webStyle.colors.darkShade,
          lightAccent: webStyle.colors.darkAccent,
          darkAccent: webStyle.colors.lightAccent,
          darkShade: webStyle.colors.lightShade
        }
      }
    )     
  }

  const componentStyleMenus = {
    "Photo Gallery": <PhotoGalleryMenu webStyle = {webStyle} handleStyleToggle = {handleStyleToggle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    Footer: <FooterMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    Header: <HeaderMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Styled Link": <StyledLinkMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange } handleStyleChange = {handleStyleChange}/>,
    "Subscriber Card": <SubscriberCardMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Mosaic": <MosaicMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Picture Frame": <PictureFrameMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    // "Picture Slide Show": <PictureSlideShowMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange}/>,
    "Text Editor": <TextEditorMenu webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Navigation Bar": <NavigationBarMenu  webStyle = {webStyle} handleStyleToggle = {handleStyleToggle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Link Box": <LinkBoxMenu  webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Picture Frame": <PictureFrameMenu  webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
    "Subscriber Box": <SubscriberBoxMenu  webStyle = {webStyle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
  };  

const socialMediaSelectOptions = [
  <option>Facebook</option>,
  <option>Twitter</option>,
  <option>Instagram</option>,
  <option>Youtube</option>,
  <option>Tiktok</option>,
  <option>Discord</option>,
  <option>Etsy</option>,
  <option>Github</option>,
  <option>Imdb</option>,
  <option value="LinkedinIn">Linkedin</option>,
  <option>Patreon</option>,
  <option>Pinterest</option>,
  <option>Reddit</option>,
  <option>Shopify</option>,
  <option>Spotify</option>,
  <option>Soundcloud</option>,
  <option>Snapchat</option>]

  let tempPageLists = tempPages || []
  let pageMenuComponents = tempPageLists.map(({name, path},index)=> 
  (
    <SubMenu label={name}  menuClassName={"border border-dark"}>
      <FocusableItem>Name: <input type={"text"} value={name} onChange = {(e)=>{updateTempPage("name",e.target.value,index)}} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
      <FocusableItem>Path: <input type={"text"} value={path} onChange = {(e)=>{
        updateTempPage("path",e.target.value,index);
        setLastPathChange([path,index])
        }} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
      {isShowSavePagesButton ?
      <MenuItem onClick={()=>{savePageChanges()}}>Save Page Changes</MenuItem>
      :
      <MenuItem><Link to={path}>Visit Page</Link></MenuItem>}
      <MenuDivider />
      <MenuItem><a onClick={()=>{deletePage(name,index)}}>Delete Page</a></MenuItem>
    </SubMenu>
  ))

  let socialMediaLinks = socialMedias || []
  let socialMediaLinkComponents = socialMediaLinks.map(({location, link},index)=> 
  (
    <SubMenu label={location} menuClassName={"border border-dark"}>
        <FocusableItem>Site: <select onChange = {(e)=>{appMethods.handleSocialSiteChange(index,e.target.value)}} value={location}>{socialMediaSelectOptions}</select></FocusableItem>
        <FocusableItem>link: <input type={"text"} value={link} onChange = {(e)=>{appMethods.handleSocialLinkChange(index,e.target.value)}} name = {"homePageName"} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
        <MenuItem><Link to={link}>Visit Link</Link></MenuItem>
        <MenuDivider />
        <MenuItem><a onClick={()=>{appMethods.deleteSocialMedia(location,index)}}>Delete Link</a></MenuItem>
    </SubMenu>
  ))

  let promoCodeMenus = Object.keys(promoCodes).map((code,index)=>{
    return (
      <SubMenu label={code} menuClassName={"border border-dark"}>
        <FocusableItem>
          <div className="input-group">
            <span className="input-group-text">Code</span>
            <input type="text" className="form-control" placeholder="Promo Code" value={code}/>
          </div>
        </FocusableItem>
        <FocusableItem>
          <div className="input-group">
            <span className="input-group-text">Type</span>
            <select className="form-select" aria-label="Default select example" value={promoCodes[code].type}>
              <option selected style={{display:"none"}}>Pick A Type</option>
              <option>% Off</option>
              <option>$ Off</option>
              <option>Free</option>
            </select>
          </div>
        </FocusableItem>
        {promoCodes[code].value &&
            <FocusableItem>
            <div className="input-group">
              <span className="input-group-text">Value</span>
              <input type="number" className="form-control" value={promoCodes[code].value}/>
            </div>
          </FocusableItem>
        }
      </SubMenu>
    )
  })

  let showRibbonClass = ""
// 
  return (
    
    <div className={"nav nav-fill container-fluid  g-0   "+showRibbonClass} style={{top: 0,zIndex:999, position:props.showTutorial?"":"fixed"}} >
      <UserPreferencesContext.Provider value = {
          {
            userEditorPreferences: userEditorPreferences,
            setShowTooltips:setShowTooltips
          }
        }
      >
        <div className={"row m-auto w-100 border-bottom border-dark bg-light"} style={{zIndex:2}}>
          
          <div className={"col text-start "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            
            <Menu className=" dropdown" menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon   icon={faPalette} /></MenuButton>} transition>
              <MenuHeader>Color & Style Options</MenuHeader>
              <MenuDivider />
              <SubMenu label = {"Color Options"} menuClassName={"border border-dark"}>
                <MenuHeader >Main Color Palette</MenuHeader>
                <FocusableItem><input   type={"color"} value ={webStyle.colors.lightShade} name = {"lightShade"} onChange = {handleColorChange}
                                        style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} />-  Light Shade (Background)</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.lightAccent} onChange = {handleColorChange} name = {"lightAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Light Accent</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.mainBrandColor} onChange = {handleColorChange} name = {"mainBrandColor"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Main Brand Color</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.darkAccent} onChange = {handleColorChange} name = {"darkAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Accent</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.darkShade} onChange = {handleColorChange} name = {"darkShade"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Shade (Font) </FocusableItem>
                <MenuDivider />
               
                <MenuItemTT className={"px-0 py-2"} ttText = {`Click to invert the website colors - Use this to toggle "darkmode"`}>
                  <MenuButton
                    className={"btn p-0 ps-4 text-start flex-grow-1"}
                    onClick={(evt) => {
                      invertColors();
                      evt.stopPropagation();
                    }}
                  >
                    Invert Main Colors
                  </MenuButton> 
                </MenuItemTT>
                <MenuItemTT className={"px-0 py-2"} ttText = {`Click replace the current colors with a new AI generated color palette.`}>
                  <MenuButton
                    className={"btn p-0 ps-4 text-start flex-grow-1"}
                    onClick={(evt) => {
                      appMethods.getRandomColors();
                      evt.stopPropagation();
                    }}
                  >
                    Generate New Color Palette
                  </MenuButton>
                </MenuItemTT>
                {/* <FocusableItem><a onClick={invertColors}>Invert Main Colors</a> </FocusableItem> */}
              </SubMenu>
              <SubMenu label = {"Website Styles"} menuClassName={"border border-dark"}>
                <BackgroundMenu webStyle = {webStyle} handleStyleToggle = {handleStyleToggle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>
                <SubMenu label = {"Default Component Styles"} menuClassName={"border border-dark"}>
                <MenuHeader>Website Borders</MenuHeader>
                  
                  <FocusableItemTT ttText = {"This is the default border thickness"}>
                    <span className="me-2">Border Thickness: </span> 
                    {/* <select value ={webStyle.componentStyles.all.borderSize} onChange = {(evt)=>{handleComponentStyleChange("all","borderSize",evt.target.value)}}> */}
                    <OptionSelect 
                      onChange = {(selectedOption)=>{handleSelectChange("all","borderSize",selectedOption)}}
                      value ={webStyle.componentStyles.all.borderSize}
                      options = {[
                        {value:0, label:"No Border"},
                        {value:.25, label:"0.25px - Super Thin Border"},
                        {value:.5, label:"0.5px - Extra Thin Border"},
                        {value:1, label:"1px - Thin Border"},
                        {value:1.5, label:"1.5px - Medium Border"},
                        {value:2, label:"2px - Thicker Border"},
                        {value:3, label:"3px - Thick Border"},
                        {value:4, label:"4px - Extra Thick Border"}
                      ]}
                    />
                  </FocusableItemTT>
                  <FocusableItemTT ttText = {webStyle.componentStyles.all.borderSize === 0?"Change border thickness to set border color.":"This is the default component border color"}>
                    <span className="me-3">Border Color:</span> 
                    <ColorSelect 
                      isDisabled={webStyle.componentStyles.all.borderSize === 0}
                      colors = {webStyle.colors} 
                      value = {webStyle.componentStyles.all.borderColor}
                      onChange = {(selectedOption)=>{handleSelectChange("all","borderColor",selectedOption)}}  
                    />
                  </FocusableItemTT>
                  <FocusableItemTT ttText = {"This is the shape of the component borders"}>
                    <span className="me-3">Border Shape: </span> 
                    {/* onChange = {(evt)=>{handleComponentStyleChange("all","borderShape",evt.target.value)}} */}

                    <OptionSelect 
                      onChange = {(selectedOption)=>{handleSelectChange("all","borderShape",selectedOption)}}
                      value = {webStyle.componentStyles.all.borderShape}
                      options = {[
                          {value:"", label:"Square (None)"},
                          {value:'rounded-1', label:"Round Corners 1"},
                          {value:'rounded-2', label:"Round Corners 2"},
                          {value:'rounded-3', label:"Round Corners 3"},
                          {value:'rounded-4', label:"Round Corners 4"},
                          {value:'rounded-5', label:"Round Corners 5"},
                          {value:'rounded-6', label:"Round Corners 6"},
                      ]}
                    />
                  </FocusableItemTT>
                <MenuDivider />
                <MenuHeader>Component Shadows</MenuHeader>
                  <FocusableItemTT ttText = {"This is the default shadow style"}>
                    <span className="me-2">Shadow Style: </span> 
                    <OptionSelect 
                      onChange = {(selectedOption)=>{handleSelectChange("all","shadowStyle",selectedOption)}}  
                      value ={webStyle.componentStyles.all.shadowStyle}
                      options = {[
                        
                        {value:"#00000000 0px 0px 25px 0px", label: "None"},
                        
                        {
                          label: "Hover Shadows",
                          options: 
                            [
                              {value:`C85 0px 16px 38px -12px, C1f 0px 4px 25px 0px, C33 0px 8px 10px -5px `, label: "Hover 1"},
                              {value:"C30 0px 10px 20px, C3b 0px 6px 6px", label: "Hover 2"},
                              {value:"C40 0px 50px 100px -20px, C4d 0px 30px 60px -30px, C59 0px -2px 6px 0px inset", label: "Hover 3"},
                              {value:"C40 0px 50px 100px -20px, C4d 0px 30px 60px -30px", label: "Hover 4"}
                            ]
                        },
                        {
                          label: "Button Styles",
                          options: 
                            [
                              {value:`C66 0px 2px 4px, C4d 0px 7px 13px -3px, C33 0px -3px 0px inset`, label: "Button"}, 
                              {value:`C66 0px 2px 4px, C4d 0px 10px 13px -3px, C33 0px -5px 0px inset`, label: "Button 2"},
                              {value:`C66 0px 2px 4px, C4d 0px 10px 13px -3px, C33 0px -5px 0px inset, C 0px -5px 1px 1px inset`, label: "Button w/ Border"}

                            ],
                          },  
                        {
                          label: "Stacked Styles",
                          options: 
                            [
                              {value:`C66 -5px 5px`, label: "Stacked"},
                              {value:`C66 -5px 5px, C4d -10px 10px`, label: "Stacked 2"},
                              {value:`C66 -5px 5px, C4d -10px 10px, C33 -15px 15px`, label: "Stacked 3"},
                              {value:`C66 -5px 5px, C4d -10px 10px, C33 -15px 15px, C1A -20px 20px`, label: "Stacked 4"},
                              {value:`C66 -5px 5px, C4d -10px 10px, C33 -15px 15px, C1A -20px 20px,
              C0d -25px 25px`, label: "Stacked 5"}
                            ],
                          },
                        ...props.customShadowStyles                  
                        
                      ]}
                    />
                  
                  </FocusableItemTT>
                  <FocusableItemTT ttText = {"This is the default shadow color"}>
                    <span className="me-2">Shadow Color: </span> 
                    {/* <select value ={webStyle.componentStyles.all.shadowColor} onChange = {(evt)=>{handleComponentStyleChange("all","shadowColor",evt.target.value)}}> */}
                    <ColorSelect 
                      value ={webStyle.componentStyles.all.shadowColor} 
                      onChange = {(selectedOption)=>{handleSelectChange("all","shadowColor",selectedOption)}}  
                      colors = {webStyle.colors} 
                      default = {webStyle.componentStyles.all.shadowColor}
                    />
                  </FocusableItemTT>
                  <MenuDivider />
                  <MenuHeader>Misc Settings</MenuHeader>
                  <FocusableItemTT ttText = {"This is the link color"}>
                    <span className="me-2">Link Style: </span> 
                    {/* <select value ={webStyle.componentStyles.all.shadowColor} onChange = {(evt)=>{handleComponentStyleChange("all","shadowColor",evt.target.value)}}> */}
                    <OptionSelect 
                      onChange = {(selectedOption)=>{handleSelectChange("all","linkStyle",selectedOption)}}
                      value ={webStyle.componentStyles.all.linkStyle}
                      options = {[
                        {value:"text-decoration-none", label:"None"},
                        {value:"text-decoration-underline", label:"Underline"},
                        {value:"fw-bold text-decoration-none", label:"Bold"},
                        {value:"fw-bold", label:"Bold + Underline"},
                      ]}
                    />
                  </FocusableItemTT>

                </SubMenu>
                  
              </SubMenu>
              <SubMenu label = {"Component Styles"} menuClassName={"border border-dark"}>
                <MenuHeader>Individual Component Options</MenuHeader>
                <MenuDivider />

                <FocusableItem>
                  {({ ref }) => (
                    <input
                      className="border-0 border-bottom"
                      ref={ref}
                      type="text"
                      placeholder="Search By Components"
                      value={componentsFilter}
                      onChange={(e) => setComponentsFilter(e.target.value)}
                    />
                  )}
                  
                </FocusableItem>
                <MenuDivider />

                {Object.keys(componentStyleMenus)
                  .filter((components) =>
                    components.toUpperCase().includes(componentsFilter.trim().toUpperCase())
                  )
                  .sort((componentA, componentB) =>
                    componentA > componentB ? 1 : -1
                  )
                  .map((component) => componentStyleMenus[component])}
                  </SubMenu>
            </Menu>

          </div>
          <div className={"col text-start "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              {/* Admin Menu */}
              <Menu className=" dropdown" menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faUserCog} /></MenuButton>} transition>
                <MenuHeader>Site Name</MenuHeader>

                <FocusableItem className="form-control">
                  <input className="border-0" value = {webStyle.siteName} type = "text" onChange={(evt)=>appMethods.setWebStyle((prevState) => ({
                                  ...prevState,
                                  siteName: evt.target.value
                                }))}/>
                </FocusableItem>
                {/* <MenuDivider /> */}

                <MenuHeader>Mode</MenuHeader>
                  <FocusableItem className="form-check ms-3">
                          <input 
                          
                            className="form-check-input me-2" type={"radio"}  checked = {adminSettings.isEditMode} 
                            onClick={(evt)=>
                              {
                                appMethods.toggleViewDraftEdits(true)
                                appMethods.setAdminSettings((prevState) => ({
                                  ...prevState,
                                  isEditMode: true
                                })
                            )}
                            }
                          />
                          <label className="form-check-label" >Edit Site</label> 
                  </FocusableItem>   
                  <FocusableItem className="form-check ms-3">
                    <input 
                      className="form-check-input me-2" type={"radio"} checked = {!adminSettings.isEditMode} 
                      onClick={(evt)=>
                        {
                          appMethods.setAdminSettings((prevState) => ({
                            ...prevState,
                            isEditMode: false,
                          })
                      )}
                      }
                    />
                    <label className="form-check-label" >View As Guest</label> 
                  </FocusableItem>                         

                  {/* <FocusableItem className="form-check">
                      <input className="form-check-input me-2" type={"checkbox"} checked = {webStyle.isShowEditor} onClick={(evt)=>{handleCheckBox(evt,"isShowEditor")}} />
                      <label className="form-check-label" >Show Admin Editor</label> 
                  </FocusableItem> */}
                  <MenuDivider />
                  {
                    adminSettings.isEditMode?
                    <>
                      <MenuHeader>{adminSettings.autoUpdateLiveWebsite?"Auto publishing to":"You are editing"}</MenuHeader>
                      <FocusableItem className="form-check">
                        {
                          adminSettings.autoSaveEditsLocally &&
                          <label className="form-check-label" >Current Draft</label> 
                        }
                        {
                          adminSettings.autoUpdateLiveWebsite &&
                          <label className="form-check-label" >Live Website</label> 
                        }
                      </FocusableItem>
                      <MenuDivider />
                      <FocusableItem className="form-check ms-3">
                          <input 
                            className="form-check-input me-2" 
                            type={"checkbox"} 
                            checked = {adminSettings.autoUpdateLiveWebsite}
                            onClick={(evt)=>
                              {
                                if (window.confirm("Are you sure you would like to auto publish ALL edits?")){
                                
                                  appMethods.setAdminSettings((prevState) => ({
                                    ...prevState,
                                    autoSaveEditsLocally: !prevState.autoSaveEditsLocally,
                                    autoUpdateLiveWebsite: prevState.autoSaveEditsLocally,

                                  }))
                                } 
                              } }
                          />
                          <label className="form-check-label" >Auto Publish</label> 
                      </FocusableItem>
                    </>
                  :
                  <>
                    <MenuHeader>You are viewing</MenuHeader>
                      <FocusableItem className="form-check ms-3">
                        <input 
                          className="form-check-input me-2" type={"radio"} checked = {adminSettings.viewDraftEdits} 
                          onClick={()=>appMethods.toggleViewDraftEdits(true)}
                        />
                        <label className="form-check-label" >Current Draft</label> 
                      </FocusableItem>   
                      <FocusableItem className="form-check ms-3">
                        <input 
                          className="form-check-input me-2" type={"radio"} checked = {!adminSettings.viewDraftEdits} 
                          onClick={()=>appMethods.toggleViewDraftEdits(false)}
                        />
                        <label className="form-check-label" >Live Website</label> 
                      </FocusableItem>                         
                  </>
                  }
                  
                  <MenuDivider />
                  <SubMenu label={"Editor Settings"} menuClassName={"border border-dark"}>
                    <MenuItem>
                      <a onClick={(evt)=>
                        {
                          appMethods.setAdminSettings((prevState) => ({
                            ...prevState,
                            isShowEditor: false,
                          })
                        )}}
                      >

                        Hide Editor Ribbon
                      </a>
                    </MenuItem>
                    
                  </SubMenu>
                  <SubMenu label={"Danger Zone"} menuClassName={"border border-dark"}>
                    <MenuItem>
                      <a onClick={(evt)=>
                        {   
                          let sureDelete = prompt(`Are you sure you would like to delete all site data? This action is irreversible. Type "YES" to start over:`, "");

                          if (sureDelete === "YES"){
                            appMethods.setWebStyle({
                              siteName: defaultSiteData.siteName,
                              colors: defaultWebStyles.colors,
                              componentStyles : defaultWebStyles.componentStyles
                            })
                            appMethods.setPages(defaultSiteData.pages)
                            appMethods.setMasterNavData(defaultSiteData.masterNavBarData)
                            appMethods.setSocialMedias(defaultSiteData.socialMedias)
                            // localStorage.setItem("showTutorial",'-1')

                            appMethods.setShowTutorial(true)
                            

                            setTimeout(()=>{
                              apiMethods.setSiteIsDraft(false)
                              localStorage.clear()

                            },
                            1000)
                          }
                        }}
                      >

                        Delete Site Data
                      </a>
                    </MenuItem>
                    
                  </SubMenu>

                  
              </Menu>
          </div>
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              {/* Pages Menu */}
              <Menu className="nav-item dropdown" menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faFile} /></MenuButton>} transition>
                  <MenuHeader>Your Website Pages</MenuHeader>
                  {pageMenuComponents}
                  <MenuButton className={"styleEditorSubmenuIcon "} onClick = {()=>addPage()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
                  <MenuDivider />
                  <SubMenu label={"Error Page (404)"} menuClassName={"border border-dark"}>
                    <MenuItem><Link to={"/404"}>Visit Page</Link></MenuItem>
                  </SubMenu>
                  {/* <SubMenu label={"Checkout Page"}>
                    <MenuItem><Link to={"/checkout"}>Visit Page</Link></MenuItem>
                  </SubMenu>
                  <SubMenu label={"Admin Page"}>
                    <MenuItem><Link to={"/admin"}>Visit Admin Page</Link></MenuItem>
                  </SubMenu> */}
              </Menu>
          </div>
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              {/* Socials Pages */}
              <Menu 
                className="nav-item dropdown " 
                menuClassName={"border border-dark"} 
                menuButton={
                  <MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}>
                    <img className="mb-1" style={{height:"32px"}} src="data:image/png;base64,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"></img>
                  </MenuButton>} 
                transition>
                  <MenuHeader>Your Social Media Links</MenuHeader>
                  {socialMediaLinkComponents}
                  <MenuButton className={"styleEditorSubmenuIcon"} onClick = {()=>appMethods.addSocialMedia()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
              </Menu>
          </div>
          
          {/* Shop Page */}
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faShoppingBag} /></MenuButton>} transition>
              
              <SubMenu label={"Promo Codes"}>
                {promoCodeMenus}
                <MenuItem className = "justify-content-center"><a onClick={()=>{alert("Add Promo Code")}}><FontAwesomeIcon icon={faPlus}/></a></MenuItem>
              </SubMenu>
              <MenuItemTT ttText = {`Go to Shop Manager`}>
                <Link to={"/admin/shop-manager"}>Visit Shop Manager</Link>

                
              </MenuItemTT>
            </Menu>
          </div>
         {/* Shop Page */}
         <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faQuestionCircle} /></MenuButton>} transition>
              
              <MenuItem>
                <a onClick={(evt)=>
                  {
                    setShowTooltips(!userEditorPreferences.showTooltips)
                    evt.stopPropagation();
                  }}
                >
                {userEditorPreferences.showTooltips?"Hide":"Show"} Tooltips
                </a>
              </MenuItem>
              <MenuItemTT ttText = {`Start Tutorial`}>
                <a onClick={(evt)=>
                  {
                    appMethods.setShowTutorial(true)
                    evt.stopPropagation();

                  }}
                >
                  Start Tutorial
                {/* {userEditorPreferences.showTooltips?"Hide":"Show"} Tooltips */}
                </a>
              </MenuItemTT>
            </Menu>
          </div>
         
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>appMethods.saveWebsite()}><FontAwesomeIcon  icon={faUpload} /></MenuButton>
          </div>
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>{appMethods.toggleStyleEditor()}}><FontAwesomeIcon  icon={faXmark} /></MenuButton>
          </div>
          <div className={"col text-center align-self-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>

            {
              siteIsDraft ?
                <FontAwesomeIcon  icon={faTriangleExclamation} />
              :
                <FontAwesomeIcon  icon={faTowerBroadcast} />
            }
            <span style={{whiteSpace: "nowrap"}} className={" font-shrink fw-bold mx-3"}>{siteIsDraft?"Draft Site":"Live Site"}</span>

          </div>
        </div>
        {props.showTutorial &&
          <Tutorial/>
        }
      </UserPreferencesContext.Provider>
    </div>   
  );
}