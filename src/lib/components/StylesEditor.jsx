import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faTimes, faSave, faPlus, faUserCog, faShoppingBag, faTowerBroadcast, faTriangleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Menu, MenuItem, MenuButton, MenuHeader,
         MenuDivider, FocusableItem, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
  Link
} from "react-router-dom";

import { useLocation, useHistory } from 'react-router-dom'

import { WebContext } from "./Website";

export default function StylesEditor(props) {

  const { siteIsDraft, webStyle, localDisplaySettings, pages, socialMedias, appMethods, apiMethods, adminSettings, promoCodes } = useContext(WebContext);
  const [tempPages, setTempPages] = useState(pages)
  const [isShowSavePagesButton, showSavePagesButton] = useState(false);
  const [lastPathChange, setLastPathChange] = useState(["NA",-1]);
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
    <SubMenu label={name}>
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
    <SubMenu label={location}>
        <FocusableItem>Site: <select onChange = {(e)=>{appMethods.handleSocialSiteChange(index,e.target.value)}} value={location}>{socialMediaSelectOptions}</select></FocusableItem>
        <FocusableItem>link: <input type={"text"} value={link} onChange = {(e)=>{appMethods.handleSocialLinkChange(index,e.target.value)}} name = {"homePageName"} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
        <MenuItem><Link to={link}>Visit Link</Link></MenuItem>
        <MenuDivider />
        <MenuItem><a onClick={()=>{appMethods.deleteSocialMedia(location,index)}}>Delete Link</a></MenuItem>
    </SubMenu>
  ))

  let promoCodeMenus = Object.keys(promoCodes).map((code,index)=>{
    return (
      <SubMenu label={code}>
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
    
    <div className={"nav nav-fill container-fluid border-bottom border-dark g-0 bg-light  "+showRibbonClass} style={{position: "sticky",top: 0, alignSelf: "flex-start",zIndex:999}} >
      <div className={"row m-auto w-100 "} style={{zIndex:2}}>
        <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
          <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon   icon={faPalette} /></MenuButton>} transition>
            <SubMenu label = {"Colors"}>
              <MenuHeader>Main Colors</MenuHeader>
              <MenuDivider />
              <FocusableItem><input   type={"color"} value ={webStyle.colors.lightShade} name = {"lightShade"} onChange = {handleColorChange}
                                      style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} />-  Light Shade (Background)</FocusableItem>
              <FocusableItem><input type={"color"} value ={webStyle.colors.lightAccent} onChange = {handleColorChange} name = {"lightAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Light Accent</FocusableItem>
              <FocusableItem><input type={"color"} value ={webStyle.colors.mainBrandColor} onChange = {handleColorChange} name = {"mainBrandColor"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Main Brand Color</FocusableItem>
              <FocusableItem><input type={"color"} value ={webStyle.colors.darkAccent} onChange = {handleColorChange} name = {"darkAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Accent</FocusableItem>
              <FocusableItem><input type={"color"} value ={webStyle.colors.darkShade} onChange = {handleColorChange} name = {"darkShade"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Dark Shade (Font) </FocusableItem>
              <MenuDivider />
              <FocusableItem><a onClick={invertColors}>Invert Main Colors</a> </FocusableItem>
            </SubMenu>

            <SubMenu label = {"Component Styles"}>
              <SubMenu label = {"Header"}>
                <MenuHeader>Default Styles</MenuHeader>
                <MenuDivider />
                <FocusableItem>
                  <span className="me-2">Size: </span> 
                  <select value ={webStyle.componentStyles.header.size} onChange = {(evt)=>{handleComponentStyleChange("header","size",evt.target.value)}}>
                    <option value={"h1"}>X-Large (h1)</option>
                    <option value={"h2"}>Large (h2)</option>
                    <option value={"h3"}>Medium (h3)</option>
                    <option value={"h4"}>Small (h4)</option>
                  </select>
                  </FocusableItem>
                <FocusableItem>
                  <span className="me-2">Text Color: </span> 
                  <select value ={webStyle.componentStyles.header.textColor} onChange = {(evt)=>{handleComponentStyleChange("header","textColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                  </FocusableItem>
              </SubMenu>
              <SubMenu label = {"Navigation Bar"}>
                <MenuHeader>Default Styles</MenuHeader>
                <MenuDivider />
                <FocusableItem>
                  <span className="me-2">Background Color: </span> 
                  <select value ={webStyle.componentStyles.navigationBar.backgroundColor} onChange = {(evt)=>{handleComponentStyleChange("navigationBar","backgroundColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                </FocusableItem>
                <FocusableItem>
                  <span className="me-2">Text Color: </span> 
                  <select value ={webStyle.componentStyles.navigationBar.textColor} onChange = {(evt)=>{handleComponentStyleChange("navigationBar","textColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                </FocusableItem>
          
              </SubMenu>
              <SubMenu label = {"Styled Link"}>
                <MenuHeader>Default Styles</MenuHeader>
                <MenuDivider />
                <FocusableItem>
                  <span className="me-2">Background Color: </span> 
                  <select value ={webStyle.componentStyles.styledLink.backgroundColor} onChange = {(evt)=>{handleComponentStyleChange("styledLink","backgroundColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                </FocusableItem>
                <FocusableItem>
                  <span className="me-2">Text Color: </span> 
                  <select value ={webStyle.componentStyles.styledLink.textColor} onChange = {(evt)=>{handleComponentStyleChange("styledLink","textColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                </FocusableItem>
              </SubMenu>
              <SubMenu label = {"Footer"}>
                <MenuHeader>Default Styles</MenuHeader>
                <MenuDivider />
                <FocusableItem>
                  <span className="me-2">Icon Colors: </span> 
                  <select value ={webStyle.componentStyles.footer.textColor} onChange = {(evt)=>{handleComponentStyleChange("footer","textColor",evt.target.value)}}>
                    <option value={"lightShade"}>Light Shade</option>
                    <option value={"lightAccent"}>Light Accent</option>
                    <option value={"mainBrandColor"}>Main Brand Color</option>
                    <option value={"darkAccent"}>Dark Accent</option>
                    <option value={"darkShade"}>Dark Shade</option>
                  </select>
                  </FocusableItem>
              </SubMenu>
            </SubMenu>
          </Menu>

        </div>
        <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Admin Menu */}
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faUserCog} /></MenuButton>} transition>
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
                        <label className="form-check-label mx-auto" >Current Draft</label> 
                      }
                      {
                        adminSettings.autoUpdateLiveWebsite &&
                        <label className="form-check-label mx-auto" >Live Website</label> 
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

                
            </Menu>
        </div>
        <div className={"col text-center "+(localDisplaySettings.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Pages Menu */}
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faFile} /></MenuButton>} transition>
                <MenuHeader>Your Website Pages</MenuHeader>
                {pageMenus}
                <MenuButton className={"styleEditorSubmenuIcon "} onClick = {()=>addPage()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
                <MenuDivider />
                <SubMenu label={"Error Page (404)"}>
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
            <Menu className="nav-item dropdown " menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faTwitter} /></MenuButton>} transition>
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
          <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>{appMethods.toggleStyleEditor()}}><FontAwesomeIcon  icon={faTimes} /></MenuButton>
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
    </div>   
  );
}