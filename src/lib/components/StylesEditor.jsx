import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faXmark, faSave, faPlus, faUserCog, faShoppingBag, faTowerBroadcast, faTriangleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Menu, MenuItem, MenuButton, MenuHeader,
         MenuDivider, FocusableItem, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
  Link
} from "react-router-dom";

import {FocusableItemTT, MenuItemTT, MenuButtonTT} from './styleEditorComponents/MenuTooltipItems'

import { useLocation, useHistory } from 'react-router-dom'

import { WebContext } from "./Website";
import ColorSelect from "./styleEditorComponents/customSelects/ColorSelect";
import OptionSelect from "./styleEditorComponents/customSelects/OptionSelect";

import { HeaderMenu, FooterMenu, NavigationBarMenu, LinkBoxMenu, PictureFrameMenu, StyledLinkMenu, PictureSlideShowMenu, TextEditorMenu, SubscriberCardMenu, MosaicMenu, BackgroundMenu, SubscriberBoxMenu, PhotoGalleryMenu } from "./styleEditorComponents/ComponentMenus";

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
    Background: <BackgroundMenu webStyle = {webStyle} handleStyleToggle = {handleStyleToggle} handleSelectChange = {handleSelectChange} handleStyleChange = {handleStyleChange}/>,
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

  let pageMenus = tempPages.map(({name, path},index)=> 
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

  let socialMediaLinks = socialMedias.map(({location, link},index)=> 
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
    
    <div className={"nav nav-fill container-fluid border-bottom border-dark g-0 bg-light  "+showRibbonClass} style={{position: "fixed",top: 0,zIndex:999}} >
      <UserPreferencesContext.Provider value = {
          {
            userEditorPreferences: userEditorPreferences,
            setShowTooltips:setShowTooltips
          }
        }
      >
        <div className={"row m-auto w-100 "} style={{zIndex:2}}>
          
          <div className={"col text-start "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            
            <Menu className=" dropdown" menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon   icon={faPalette} /></MenuButton>} transition>
              <MenuHeader>Color & Style Options</MenuHeader>
              <MenuDivider />
              <SubMenu label = {"Color Options"} menuClassName={"border border-dark"}>
                <MenuHeader >Main Colors</MenuHeader>
                <FocusableItem><input   type={"color"} value ={webStyle.colors.lightShade} name = {"lightShade"} onChange = {handleColorChange}
                                        style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} />-  Light Shade (Background)</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.lightAccent} onChange = {handleColorChange} name = {"lightAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Light Accent</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.mainBrandColor} onChange = {handleColorChange} name = {"mainBrandColor"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Main Brand Color</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.darkAccent} onChange = {handleColorChange} name = {"darkAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Accent</FocusableItem>
                <FocusableItem><input type={"color"} value ={webStyle.colors.darkShade} onChange = {handleColorChange} name = {"darkShade"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Shade (Font) </FocusableItem>
                <MenuDivider />
                <MenuItemTT ttText = {`Click to invert the website colors - Use this to toggle "darkmode"`}>
                  <MenuButton
                    className={"btn p-0"}
                    onClick={(evt) => {
                      invertColors();
                      evt.stopPropagation();
                    }}
                  >
                    Invert Main Colors
                  </MenuButton>
                </MenuItemTT>
                {/* <FocusableItem><a onClick={invertColors}>Invert Main Colors</a> </FocusableItem> */}
              </SubMenu>
              <SubMenu label = {"Website Styles"} menuClassName={"border border-dark"}>
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
                  </SubMenu>
                  

                  
              </Menu>
          </div>
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              {/* Pages Menu */}
              <Menu className="nav-item dropdown" menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faFile} /></MenuButton>} transition>
                  <MenuHeader>Your Website Pages</MenuHeader>
                  {pageMenus}
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
              <Menu className="nav-item dropdown " menuClassName={"border border-dark"} menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faTwitter} /></MenuButton>} transition>
                  <MenuHeader>Your Social Media Links</MenuHeader>
                  {socialMediaLinks}
                  <MenuButton className={"styleEditorSubmenuIcon"} onClick = {()=>appMethods.addSocialMedia()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
              </Menu>
          </div>
          
          {/* Shop Page */}
          {/* <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faShoppingBag} /></MenuButton>} transition>
                  <SubMenu label={"Promo Codes"}>
                  {promoCodeMenus}
                  <MenuItem className = "justify-content-center"><a onClick={()=>{alert("Add Promo Code")}}><FontAwesomeIcon icon={faPlus}/></a></MenuItem>
                  </SubMenu>
              </Menu>
          </div> */}
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
              {/* Socials Pages */}
              <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>appMethods.saveWebsite()}><FontAwesomeIcon  icon={faUpload} /></MenuButton>
          </div>
          <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Socials Pages */}
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
      </UserPreferencesContext.Provider>
    </div>   
  );
}