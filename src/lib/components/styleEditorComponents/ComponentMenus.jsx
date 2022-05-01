import {
    MenuDivider,
    MenuHeader,
    SubMenu,
    FocusableItem,
    applyStatics
  } from "@szhsin/react-menu";
  import "@szhsin/react-menu/dist/index.css";

import getContrastColor from "../helpers/getContrastColor";
import ColorSelect from "./customSelects/ColorSelect";
import OptionSelect from "./customSelects/OptionSelect";
// import { FocusableItem } from "@szhsin/react-menu";
import {FocusableItemTT} from "./MenuTooltipItems"

applyStatics(SubMenu)(FooterMenu);
applyStatics(SubMenu)(HeaderMenu);
applyStatics(SubMenu)(NavigationBarMenu);
applyStatics(SubMenu)(LinkBoxMenu);
applyStatics(SubMenu)(PictureFrameMenu);
applyStatics(SubMenu)(StyledLinkMenu);
applyStatics(SubMenu)(PictureSlideShowMenu);
applyStatics(SubMenu)(TextEditorMenu);
applyStatics(SubMenu)(MosaicMenu);
applyStatics(SubMenu)(SubscriberCardMenu);
applyStatics(SubMenu)(SubscriberBoxMenu);
applyStatics(SubMenu)(BackgroundMenu);
applyStatics(SubMenu)(PhotoGalleryMenu);

export function BackgroundMenu(props){
  return (
  <SubMenu {...props} label="Page Styles" key={"backgroundMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
    <MenuHeader>Background Options</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                color:getContrastColor(props.webStyle.colors[props.webStyle.componentStyles.background.backgroundColor])
              }
            } 
          >
            Website Content
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItemTT ttText = {"This is the color of the inner website section"}>
        <span className="me-2">Background Color: </span> 
        {/* <select value ={webStyle.componentStyles.all.shadowColor} onChange = {(evt)=>{handleComponentStyleChange("all","shadowColor",evt.target.value)}}> */}
        <ColorSelect 
          value ={props.webStyle.componentStyles.background.backgroundColor} 
          onChange = {(selectedOption)=>{props.handleSelectChange("background","backgroundColor",selectedOption)}}  
          colors = {props.webStyle.colors} 
        />
      </FocusableItemTT>
      <FocusableItem>
        <div className="me-2 form-check">
          <input className="form-check-input me-3" type="checkbox" 
              checked={props.webStyle.componentStyles.all.includeMargins} 
              onClick={()=>props.handleStyleToggle("all","includeMargins")}
          />
          <label className="form-check-label">
            Include Page Margins
          </label>
        </div>
      </FocusableItem>
      {props.webStyle.componentStyles.all.includeMargins &&
        <>
          <FocusableItemTT >
            <div className="form-check">
              <input className="form-check-input me-3" type="checkbox" 
                checked={props.webStyle.componentStyles.background.applyBackground} 
                onClick={()=>props.handleStyleToggle("background","applyBackground")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Apply Shadow to Background
              </label>
            </div>
          </FocusableItemTT>
          <FocusableItemTT ttText = {"This is the color of the website margins"}>
            <span className="me-2">Margin Color: </span> 
            <ColorSelect 
              value ={props.webStyle.componentStyles.background.marginColor} 
              onChange = {(selectedOption)=>{props.handleSelectChange("background","marginColor",selectedOption)}}  
              colors = {props.webStyle.colors} 
            />
          </FocusableItemTT>
        </>
      }
      {!props.webStyle.componentStyles.all.includeMargins &&
        
        <FocusableItemTT >
          <div className="form-check">
            <input className="form-check-input me-3" type="checkbox" 
              checked={props.webStyle.componentStyles.all.includeComponentMargins} 
              onClick={()=>props.handleStyleToggle("all","includeComponentMargins")}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Add margins to components
            </label>
          </div>
        </FocusableItemTT>
      }
    
    
    
  </SubMenu>
  )
}

export function SubscriberCardMenu(props) {
  return (
    <SubMenu {...props} label="Subscription Card" key={"subscriberCardMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Subscriber Card Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div className="d-flex flex-column flex-grow-1">
            <div 
              className=" border p-2 text-center mt-3 " 
              style={
                {
                  backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor],
                  color:props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.headerTextColor]
                }
              } 
            >
              Subscription Card
            </div>
            <div 
              className=" border p-2 text-center mb-3 " 
              style={
                {
                  backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.bodyBackgroundColor],
                  color:props.webStyle.colors[props.webStyle.componentStyles.subscriptionCard.bodyTextColor]
                }
              } 
            >
              Description
            </div>
          </div>
          
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Header Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.headerTextColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriptionCard","headerTextColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Body Text Colors: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.bodyTextColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriptionCard","bodyTextColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Header Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriptionCard","headerBackgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Body Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.bodyBackgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriptionCard","bodyBackgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      {/* headerTextColor: "lightShade",
          headerBackgroundColor: "darkAccent",
          bodyTextColor: "darkShade",
          bodyBackgroundColor: "lightShade" */}
    </SubMenu>
  );
}

export function PhotoGalleryMenu(props) {
  return (
    <SubMenu {...props} label="Photo Gallery" key={"photoGalleryMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Photo Gallery Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" border p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.headerTextColor]
              }
            } 
          >
            New Subscriber Box
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <div className="form-check">
          <input className="form-check-input me-3" type="checkbox" 
            checked={props.webStyle.componentStyles.photoGallery.fullBorder} 
            onClick={()=>props.handleStyleToggle("photoGallery","fullBorder")}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Border around photo-gallery
          </label>
        </div>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Margin: </span> 
        <OptionSelect
          onChange = {(selectedOption)=>{props.handleSelectChange("photoGallery","margin",selectedOption)}}
          value = {props.webStyle.componentStyles.photoGallery.margin}
          options = 
            {
              [
                {value:0, label:"None"},
                {value:4, label:"1/4 Spacing"},
                {value:8, label:"1/2 Spacing"},
                {value:12, label:"3/4 Spacing"},
                {value:16, label:"Full Spacing"}
              ]
            }          
        />
      </FocusableItem>
      
    </SubMenu>
  );
}

export function SubscriberBoxMenu(props) {
  return (
    <SubMenu {...props} label="Subscribe-to Newsletter" key={"subscriberBoxMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Newsletter Box Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" border p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.subscriberBox.headerTextColor]
              }
            } 
          >
            New Subscriber Box
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.headerTextColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriberBox","headerTextColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.subscriptionCard.headerBackgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("subscriberBox","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
    </SubMenu>
  );
}

export function FooterMenu(props) {
  return (
    <SubMenu {...props} label="Footer" key={"footerStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Footer Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                color:props.webStyle.colors[props.webStyle.componentStyles.footer.textColor]
              }
            } 
          >
            Footer Content
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Social Icon Colors: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.footer.textColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("footer","textColor",selectedOption)}}  
        />
      </FocusableItem>
      { !props.webStyle.componentStyles.all.includeMargins && 
        <FocusableItem>
          <span className="me-3">Margin Color: </span> 
          <ColorSelect 
            colors = {props.webStyle.colors} 
            value = {props.webStyle.componentStyles.footer.marginColor}
            onChange = {(selectedOption)=>{props.handleSelectChange("footer","marginColor",selectedOption)}}  
          />
        </FocusableItem>
      }
    </SubMenu>
  );
}

// TODO
export function MosaicMenu(props) {

  const componentMap = 
  {
      LP:<span className="m-2 py-2 px-5 border border-dark bg-light text-center">Picture Frame</span>,
      RP:<span className="m-2 py-2 px-5 border border-dark bg-light text-center">Picture Frame</span>,
      LL:<span className="m-2 py-2 px-5 border border-dark bg-light text-center">Link Box</span>,
      RL:<span className="m-2 py-2 px-5 border border-dark bg-light text-center">Link Box</span>
  }

  const arrangement = props.webStyle.componentStyles.mosaic.arrangement

  return (
    <SubMenu {...props} label="Mosiac" key={"mosaicMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Mosaic Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        
        <MockMenuComponent webStyle = {props.webStyle}>
          <div className="flex-grow-1 flex-row d-flex">
            <div className="d-flex flex-column">
              {arrangement.split('-')[0].split(",").map((el) => 
                  {
                    return componentMap[el]
                  }
              )}
            </div>
            <div className="d-flex flex-column">
              {arrangement.split('-')[1].split(",").map((el) => 
                  {
                    return componentMap[el]
                  }
              )}
            </div>
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-3">Subcomponent Arrangement: </span> 
        <OptionSelect
          onChange = {(selectedOption)=>{props.handleSelectChange("mosaic","arrangement",selectedOption)}}
          value = {props.webStyle.componentStyles.mosaic.arrangement}
          classNamePrefix="multi-line-option"
          options = 
            {
              [
                {value:"LP,LL-RL,RP", label:"Row 1:      Picture - Link\nRow 2:      Link   -   Picture"},
                {value:'LP,LL-RP,RL', label:"Row 1:      Picture - Picture\nRow 2:      Link   -    Link"},
                {value:'LL,LP-RP,RL', label:"Row 1:      Link   -   Picture\nRow 2:      Picture - Link"},
              ]
            }          
        />
         
      </FocusableItem>
      { !props.webStyle.componentStyles.all.includeMargins && 
        <FocusableItem>
          <span className="me-3">Margin Color: </span> 
          <ColorSelect 
            colors = {props.webStyle.colors} 
            value = {props.webStyle.componentStyles.mosaic.marginColor}
            onChange = {(selectedOption)=>{props.handleSelectChange("mosaic","marginColor",selectedOption)}}  
          />
        </FocusableItem>
      }
      
    </SubMenu>
  );
}

export function HeaderMenu(props) {
  return (
    <SubMenu {...props} label="Header" key={"headerStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Header Styles</MenuHeader>
        <FocusableItem
          className={"focusItem1"}
        />

        <FocusableItem className={"p-0"}>
          <MockMenuComponent webStyle = {props.webStyle}>
            <div 
              className=" p-2 mx-1 text-center my-3 flex-grow-1  " 
              style={
                {
                  color:props.webStyle.colors[props.webStyle.componentStyles.header.textColor]
                }
              } 
            >
              Header 
            </div>
          </MockMenuComponent>
        </FocusableItem>
        <FocusableItem>
          <span className="me-2">Text Color: </span> 
          {/* <select value ={props.webStyle.componentStyles.header.textColor} onChange = {(evt)=>{props.handleComponentStyleChange("header","textColor",evt.target.value)}}> */}
          <ColorSelect 
            colors = {props.webStyle.colors} 
            value = {props.webStyle.componentStyles.header.textColor}
            onChange = {(selectedOption)=>{props.handleSelectChange("header","textColor",selectedOption)}}  
          />
        </FocusableItem>
        { !props.webStyle.componentStyles.all.includeMargins && 
          <FocusableItem>
            <span className="me-3">Margin Color: </span> 
            <ColorSelect 
              colors = {props.webStyle.colors} 
              value = {props.webStyle.componentStyles.header.marginColor}
              onChange = {(selectedOption)=>{props.handleSelectChange("header","marginColor",selectedOption)}}  
            />
          </FocusableItem>
        }
      
      </SubMenu>
  );
}

export function NavigationBarMenu(props) {
  return (
    <SubMenu {...props} label="Navigation Bar" key={"navbarStyleMenu"}position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"}>
      <MenuHeader>Navigation Bar Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className= {" border p-2 mx-1 text-center mb-3 flex-grow-1 "+(props.webStyle.componentStyles.navigationBar.topBarMargin?" my-3":"")} 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.navigationBar.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.navigationBar.textColor]
              }
            } 
          >
          
          <div className="flex-column d-flex">
            {props.webStyle.componentStyles.navigationBar.includeHeader&&<span>Header</span>}
            <div className={"d-flex flex-row "+(props.webStyle.componentStyles.navigationBar.justifyButtons)}>
              <span className="mx-1">
                Link
              </span>
              <span className="mx-2">
                Link
              </span>
              <span className="mx-1">
                Link
              </span>
            </div>
          </div>
            
             
          </div>
        </MockMenuComponent>
      </FocusableItem>

      {/* <MenuDivider className={"mt-0"}/> */}
      <FocusableItem
        className={"pt-3"}
      >
        <div className="me-2 form-check">
          <input className="form-check-input me-3" type="checkbox" 
            checked={props.webStyle.componentStyles.navigationBar.isSticky} 
            onClick={()=>props.handleStyleToggle("navigationBar","isSticky")}
          />
          <label className="form-check-label">
            Stick to Top *    
          </label>
          { props.webStyle.componentStyles.navigationBar.isSticky && <>
          <span className="ms-2 me-1">-</span>
          <label for="customRange2" className="mx-2 ">Offset Y: {parseFloat(props.webStyle.componentStyles.navigationBar.stickyOffsetY).toFixed(1)}</label>
          <input 
            value={props.webStyle.componentStyles.navigationBar.stickyOffsetY} 
            onChange = {(evt)=>{props.handleStyleChange("navigationBar","stickyOffsetY",evt.target.value)}}
            className="ms-2 flex-grow-1" 
            type="range"   
            min="-10" 
            max="0" 
            step='.5' 
            id="customRange2"
          /></>}
        </div>
      </FocusableItem>
      <FocusableItem>
        <div className="me-2 form-check">
          <input className="form-check-input me-3" type="checkbox" 
            checked={props.webStyle.componentStyles.all.includeHeader} 
            onClick={()=>props.handleStyleToggle("navigationBar","includeHeader")}
          />
          <label className="form-check-label">
            Include Header Above Navbar
          </label>
        </div>
      </FocusableItem>
      <FocusableItem>
        <div className="me-2 form-check">
          <input className="form-check-input me-3" type="checkbox" 
            checked={props.webStyle.componentStyles.navigationBar.topBarMargin} 
            onClick={()=>props.handleStyleToggle("navigationBar","topBarMargin")}
          />
          <label className="form-check-label">
            Add Top Margin (Only effects top navigation bars)
          </label>
        </div>
      </FocusableItem>
      <MenuDivider />

      <FocusableItem>
        <span className="me-2">Navigation Bar Style: </span> 

        <OptionSelect
          onChange = {(selectedOption)=>{props.handleSelectChange("navigationBar","navbarStyle",selectedOption)}}
          value = {props.webStyle.componentStyles.navigationBar.navbarStyle}
          options = 
            {
              [
                {value:"fullWidth", label:"Full Width"},
                {value:'extendedWidth', label:"Extended"},
                {value:'px-5', label:"Component Style"},
              ]
            }          
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Links Justify: </span> 

        <OptionSelect
          onChange = {(selectedOption)=>{props.handleSelectChange("navigationBar","justifyButtons",selectedOption)}}
          value = {props.webStyle.componentStyles.navigationBar.justifyButtons}
          options = 
            {
              [
                {value:"justify-content-start", label:"Justify Left"},
                {value:'justify-content-end', label:"Justify Right"},
                {value:'justify-content-center', label:"Justify Center"},
                {value:'justify-content-around', label:"Space Around"},
                {value:'justify-content-between', label:"Space Between"},
                {value:'justify-content-evenly', label:"Space Evenly"},

              ]
            }          
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.navigationBar.backgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("navigationBar","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.navigationBar.textColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("navigationBar","textColor",selectedOption)}}  
        />
      </FocusableItem>
      
      
      {props.webStyle.componentStyles.navigationBar.isSticky&&<MenuDivider />}

      {props.webStyle.componentStyles.navigationBar.isSticky&&
      <FocusableItem>
        <div className="d-flex flex-column">
          <span className="mx-2 ">* A sticky nav bar will be obscured by editor menus</span>
          <span className="mx-2">upon scrolling ( click <strong>X</strong> button to hide the ribbon) </span>

        </div>
      </FocusableItem>}
      { !props.webStyle.componentStyles.all.includeMargins && 
        <FocusableItem>
          <span className="me-3">Margin Color: </span> 
          <ColorSelect 
            colors = {props.webStyle.colors} 
            value = {props.webStyle.componentStyles.navigationBar.marginColor}
            onChange = {(selectedOption)=>{props.handleSelectChange("navigationBar","marginColor",selectedOption)}}  
          />
        </FocusableItem>
      }
    </SubMenu>
  );
}

export function LinkBoxMenu(props) {
  return (
    <SubMenu {...props} label="Link Box" key={"linkBoxStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Link Box Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" border p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.linkBox.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.linkBox.textColor]
              }
            } 
          >
            Link Box
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.linkBox.backgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("linkBox","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.linkBox.textColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("linkBox","textColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Link Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.linkBox.linkColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("linkBox","linkColor",selectedOption)}}  
        />
      </FocusableItem>
    </SubMenu>
  );
}


export function PictureSlideShowMenu(props) {
  return (
    <SubMenu {...props} label="Picture Slide Show" key={"pictureSlideShowStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Picture Slide Show Box Styles</MenuHeader>
      <MenuDivider />
      
    </SubMenu>
  );
}

export function TextEditorMenu(props) {
  return (
    <SubMenu {...props} label="Text Editor" key={"textEditorStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Text Editor Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" border p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.textEditor.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.textEditor.textColor]
              }
            } 
          >
            Text Editor
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.textEditor.backgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("textEditor","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.textEditor.textColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("textEditor","textColor",selectedOption)}}  
        />
      </FocusableItem>
      { !props.webStyle.componentStyles.all.includeMargins && 
          <FocusableItem>
            <span className="me-3">Margin Color: </span> 
            <ColorSelect 
              colors = {props.webStyle.colors} 
              value = {props.webStyle.componentStyles.textEditor.marginColor}
              onChange = {(selectedOption)=>{props.handleSelectChange("textEditor","marginColor",selectedOption)}}  
            />
          </FocusableItem>
        }
    </SubMenu>
  );
}

export function StyledLinkMenu(props) {
  return (
    <SubMenu {...props} label="Styled Link" key={"styledLinkStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"}>
      <MenuHeader>Styled Link Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className={" border p-2 mx-1 text-center my-3 flex-grow-1 "+(props.webStyle.componentStyles.styledLink.borderShape || props.webStyle.componentStyles.all.borderShape)} 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.styledLink.backgroundColor],
                color:props.webStyle.colors[props.webStyle.componentStyles.styledLink.textColor]
              }
            } 
          >
            Styled Link
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.styledLink.backgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("styledLink","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Text Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.styledLink.textColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("styledLink","textColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-3">Border Shape: </span> 
        <OptionSelect 
          onChange = {(selectedOption)=>{props.handleSelectChange("styledLink","borderShape",selectedOption)}}
          value = {props.webStyle.componentStyles.styledLink.borderShape}
          options = {[
              {value:null, label:"Website Border Shape (Inherit)"},
              {value:"rounded-0", label:"Square (None)"},
              {value:'rounded-1', label:"Round Corners 1"},
              {value:'rounded-2', label:"Round Corners 2"},
              {value:'rounded-3', label:"Round Corners 3"},
              {value:'rounded-4', label:"Round Corners 4"},
              {value:'rounded-5', label:"Round Corners 5"},
              {value:'rounded-6', label:"Round Corners 6"},
          ]}
        />
      </FocusableItem>
      { !props.webStyle.componentStyles.all.includeMargins && 
          <FocusableItem>
            <span className="me-3">Margin Color: </span> 
            <ColorSelect 
              colors = {props.webStyle.colors} 
              value = {props.webStyle.componentStyles.styledLink.marginColor}
              onChange = {(selectedOption)=>{props.handleSelectChange("styledLink","marginColor",selectedOption)}}  
            />
          </FocusableItem>
        }
    </SubMenu>
  );
}

export function PictureFrameMenu(props) {
  return (
    <SubMenu {...props} label="Picture Frame" key={"pictureStyleMenu"} position={"auto"} align = {"end"}  menuoverflow={"auto"} menuClassName={"border border-dark"} >
      <MenuHeader>Picture Frame Styles</MenuHeader>
      <FocusableItem
        className={"focusItem1"}
      />

      <FocusableItem className={"p-0"}>
        <MockMenuComponent webStyle = {props.webStyle}>
          <div 
            className=" border p-2 mx-1 text-center my-3 flex-grow-1  " 
            style={
              {
                backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.pictureFrame.backgroundColor],
                color:getContrastColor(props.webStyle.colors[props.webStyle.componentStyles.pictureFrame.backgroundColor])
              }
            } 
          >
            Picture Frame
          </div>
        </MockMenuComponent>
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Background Color: </span> 
        <ColorSelect 
          colors = {props.webStyle.colors} 
          value = {props.webStyle.componentStyles.pictureFrame.backgroundColor}
          onChange = {(selectedOption)=>{props.handleSelectChange("pictureFrame","backgroundColor",selectedOption)}}  
        />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Padding: </span> 
        <OptionSelect
            onChange = {(selectedOption)=>{props.handleSelectChange("pictureFrame","padding",selectedOption)}}
            value = {props.webStyle.componentStyles.pictureFrame.padding}
            options = 
              {[
                {value:"", label:"None"},
                {value:'p-1 ', label:"Small Padding"},
                {value:'p-2 ', label:"Medium Small Padding"},
                {value:'p-3 ', label:"Medium Padding"}
                
              ]}       
          />
      </FocusableItem>
      <FocusableItem>
        <span className="me-2">Random Image Keyword: </span> 
        <input 
          onChange = {(evt)=>{props.handleStyleChange("pictureFrame","randomImageKeyword",evt.target.value)}}
          value={props.webStyle.componentStyles.pictureFrame.randomImageKeyword}/>
      </FocusableItem>
    </SubMenu>
  );
}

function MockMenuComponent(props){

  let borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor]  
  let shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor]

  let borderAndShadow = ""
  if (props.webStyle.componentStyles.all.borderSize!==0){
    borderAndShadow +=`${borderColor} 0px 1px ${props.webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${props.webStyle.componentStyles.all.borderSize}px, `
  }
  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

  return(<div 
    className="px-5 justify-content-center w-100 div-relative" 
    style={{backgroundColor: props.webStyle.colors[props.webStyle.componentStyles.background.marginColor],
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"

    }}

  >
    <div 
      className="p-0 px-5 d-flex"          
      style={{
        backgroundColor:props.webStyle.colors[props.webStyle.componentStyles.background.backgroundColor],
        boxShadow:(props.webStyle.componentStyles.background.applyBackground?borderAndShadow:"none")
      }}
    >
      {props.children}
    </div>
    
  </div>)
}