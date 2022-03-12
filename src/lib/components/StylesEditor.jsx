import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faTimes, faSave, faPlus, faUserCog, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Menu, MenuItem, MenuButton, MenuHeader,
         MenuDivider, FocusableItem, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {
  Link
} from "react-router-dom";

import { WebContext } from "./Website";

export default function StylesEditor(props) {
    
  const { siteIsDraft, webStyle, pages, socialMedias, appMethods, apiMethods, storageSettings, promoCodes } = useContext(WebContext);

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
  <option>LinkedinIn</option>,
  <option>Patreon</option>,
  <option>PinterestP</option>,
  <option>Reddit</option>,
  <option>Shopify</option>,
  <option>Spotify</option>,
  <option>Soundcloud</option>,
  <option>Snapchat</option>]

  let pageMenus = pages.map(({name, path},index)=> 
  (
    <SubMenu label={name}>
        <FocusableItem>Name: <input type={"text"} value={name} onChange = {(e)=>{appMethods.handlePageNameChange(index,e.target.value)}} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
        <FocusableItem>Path: <input type={"text"} value={path} onChange = {(e)=>{appMethods.handlePagePathChange(index,e.target.value)}} style = {{width:"90px", borderWidth:"0px 0px 1px 0px",background:"none"}} /></FocusableItem>
        <MenuItem><Link to={path}>Visit Page</Link></MenuItem>
        <MenuDivider />
        <MenuItem><a onClick={()=>{appMethods.deletePage(name,index)}}>Delete Page</a></MenuItem>
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

  let showRibbonClass = (webStyle.isAdmin && webStyle.isShowEditor? "" :"hidden")

  return (
    
    <div className={"nav nav-fill container-fluid border-bottom border-dark g-0 bg-light  "+showRibbonClass} style={{position: "sticky",top: 0, alignSelf: "flex-start",zIndex:999}} >
      <div className={"row m-auto w-100 "} style={{zIndex:2}}>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
          <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon   icon={faPalette} /></MenuButton>} transition>
            <MenuHeader>Colors</MenuHeader>
            <MenuDivider />
            <FocusableItem><input   type={"color"} value ={webStyle.colors.lightShade} name = {"lightShade"} onChange = {handleColorChange}
                                    style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} />-  Background Color</FocusableItem>
            <FocusableItem><input type={"color"} value ={webStyle.colors.lightAccent} onChange = {handleColorChange} name = {"lightAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Primary Accent</FocusableItem>
            <FocusableItem><input type={"color"} value ={webStyle.colors.mainBrandColor} onChange = {handleColorChange} name = {"mainBrandColor"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> -  Main Brand Color</FocusableItem>
            <FocusableItem><input type={"color"} value ={webStyle.colors.darkAccent} onChange = {handleColorChange} name = {"darkAccent"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Secondary Accent</FocusableItem>
            <FocusableItem><input type={"color"} value ={webStyle.colors.darkShade} onChange = {handleColorChange} name = {"darkShade"} style = {{border:"none",background:"none",width:"50px",height:"40px",padding:"0"}} /> - Secondary Shade (Font) </FocusableItem>
            <FocusableItem><button onClick={invertColors}>Invert Color Scheme</button> </FocusableItem>
          </Menu>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Admin Menu */}
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faUserCog} /></MenuButton>} transition>
                <FocusableItem className="form-check">
                    <input className="form-check-input me-2" type={"checkbox"} checked = {webStyle.isEditMode} onClick={(evt)=>{handleCheckBox(evt,"isEditMode")}} />
                    <label className="form-check-label" >Admin Edit Mode</label> 
                </FocusableItem>
                <FocusableItem className="form-check">
                    <input className="form-check-input me-2" type={"checkbox"} checked = {webStyle.isShowEditor} onClick={(evt)=>{handleCheckBox(evt,"isShowEditor")}} />
                    <label className="form-check-label" >Show Admin Editor</label> 
                </FocusableItem>
                <FocusableItem className="form-check">
                    <input className="form-check-input me-2" type={"checkbox"} checked = {storageSettings.showDraftEdits} 
                           onClick={(evt)=>
                              {
                                appMethods.setStorageSettings((prevState) => ({
                                  ...prevState,
                                  showDraftEdits: !prevState.showDraftEdits,
                                })
                            )}
                            } 
                    />
                    <label className="form-check-label" >Show Draft Edits</label> 
                </FocusableItem>
                <FocusableItem className="form-check">
                    <input className="form-check-input me-2" type={"checkbox"} checked = {storageSettings.autoSaveEditsLocally} 
                           onClick={(evt)=>
                              {
                                appMethods.setStorageSettings((prevState) => ({
                                  ...prevState,
                                  autoSaveEditsLocally: !prevState.autoSaveEditsLocally,
                                })
                            )}
                            } 
                    />
                    <label className="form-check-label" >Auto Save Locally</label> 
                </FocusableItem>
                <FocusableItem className="form-check">
                    <input className="form-check-input me-2" type={"checkbox"} checked = {storageSettings.autoUpdateLiveWebsite} 
                          onClick={(evt)=>
                              {
                                appMethods.setStorageSettings((prevState) => ({
                                  ...prevState,
                                  autoUpdateLiveWebsite: !prevState.autoUpdateLiveWebsite,
                                })
                            )}
                            } />
                    <label className="form-check-label" >Auto Save To DB</label> 
                </FocusableItem>
                <MenuItem>
                    <Link to={"/admin"}>Visit Admin Page</Link>
                </MenuItem>
            </Menu>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Pages Menu */}
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faFile} /></MenuButton>} transition>
                <MenuHeader>Your Website Pages</MenuHeader>
                {pageMenus}
                <MenuButton className={"styleEditorSubmenuIcon "} onClick = {()=>appMethods.addPage()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
                <MenuDivider />
                <SubMenu label={"Checkout Page"}>
                    <MenuItem><Link to={"/checkout"}>Visit Page</Link></MenuItem>
                    </SubMenu>
                    <SubMenu label={"Admin Page"}>
                    <MenuItem><Link to={"/admin"}>Visit Admin Page</Link></MenuItem>
                </SubMenu>
            </Menu>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Socials Pages */}
            <Menu className="nav-item dropdown " menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faTwitter} /></MenuButton>} transition>
                <MenuHeader>Your Social Media Links</MenuHeader>
                {socialMediaLinks}
                <MenuButton className={"styleEditorSubmenuIcon"} onClick = {()=>appMethods.addSocialMedia()}><FontAwesomeIcon  icon={faPlus} /></MenuButton>
            </Menu>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Shop Page */}
            <Menu className="nav-item dropdown" menuButton={<MenuButton className={"styleEditorIcon dropdown-toggle font-shrink-md m-0"}><FontAwesomeIcon  icon={faShoppingBag} /></MenuButton>} transition>
                <SubMenu label={"Promo Codes"}>
                {promoCodeMenus}
                <MenuItem className = "justify-content-center"><a onClick={()=>{alert("Add Promo Code")}}><FontAwesomeIcon icon={faPlus}/></a></MenuItem>
                </SubMenu>
            </Menu>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
            {/* Socials Pages */}
            <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>appMethods.saveWebsite()}><FontAwesomeIcon  icon={faSave} /></MenuButton>
        </div>
        <div className={"col text-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
          {/* Socials Pages */}
          <MenuButton className={"styleEditorIcon font-shrink-md m-0"} onClick = {()=>{appMethods.toggleStyleEditor()}}><FontAwesomeIcon  icon={faTimes} /></MenuButton>
        </div>
        <div className={"col text-center align-self-center "+(webStyle.isMobile?"mx-1 g-0":"mx-4")}>
          <span className={" font-shrink fw-bold m-0"}>{siteIsDraft?"Draft Site":"Live Site"}</span>
        </div>
      </div>
    </div>   
  );
}