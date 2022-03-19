import React, { useState, useContext, useEffect  } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  useDroppable
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
} from '@dnd-kit/modifiers';



import { faCaretSquareDown,  faPencilAlt, faArrowsAlt, faShoppingCart, faBars, faCog, faL, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faTiktok, faDiscord, faEtsy, faGithub, faImdb, faLinkedinIn,faPatreon, faPinterestP, faReddit, faShopify, faSpotify, faSoundcloud, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import { MouseSensor } from "../helpers/DndSensors";
import AdminNavWrapper from "../wrappers/AdminNavWrapper";

import { WebContext } from "../Website";

import {
  Link
} from "react-router-dom";
import  useComponentStorage  from "../helpers/useStorage";


// TODO dropdowns need to open only their dropdowns

export default function NavigationBar(props) {
  const [isSettingsMode,setIsSettingsMode] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isShowDeleteSpot, showDeleteSpot] = useState(false);
  const [isShowDropdownDeleteSpot, showDropdownDeleteSpot] = useState(false);
  const [isShowButtons, showButtons] = useState(false);

  const {webStyle, adminSettings, localDisplaySettings, msgPort, appMethods, apiMethods, socialMedias, cart, masterNavData} = useContext(WebContext)

  let initialState = props.content
  if (Object.keys(initialState).length === 0){
    initialState = {...masterNavData}
  }

  const [content, setContent] = useComponentStorage(props.pageID+props.id,initialState)

  // useEffect(() => {
  //   if (msgPort == "save"){
  //     if (content.isUnique){
  //       apiMethods.setValueInDatabase(props.pageID+props.id,content)
  //     }
  //   }
  // }, [msgPort]);
  
  // useEffect(() => {
  //   if (!content.isUnique){
  //     setContent(masterNavData)
  //   }
  // }, [masterNavData]);

  const componentMapping = {
    Email:faEnvelope,
    Facebook: faFacebookSquare,
    Twitter: faTwitter,
    Instagram: faInstagram,
    Youtube: faYoutube,
    Tiktok: faTiktok,
    Discord: faDiscord,
    Etsy: faEtsy,
    Github: faGithub,
    Imdb: faImdb,
    LinkedinIn: faLinkedinIn,
    Patreon: faPatreon,
    Pinterest: faPinterestP,
    Reddit: faReddit,
    Shopify: faShopify,
    Spotify: faSpotify,
    Soundcloud: faSoundcloud,
    Snapchat: faSnapchatGhost
  };

  const sensors = useSensors(useSensor(MouseSensor,{
    activationConstraint: {
      delay: 100,
      tolerance: 5,
    }

  }));

 

  let navItems = [];

  // if (isEdit) {
    // for(var index = 1; index < navData.length; index++){
  [...content.navData].forEach((el,index) => {
    // let el = navData[index]

    let dropdownItems = [];

    if ("dropdown" in el) {
      el.dropdown.forEach((subEl, subIndex) => {
        dropdownItems.push(
        <AdminNavWrapper
          key={subEl.id+"admin"}
          id={subEl.id}
          // order = {el.or}
          className={"py-2 "}>
          <DropDownLink
            key = {subEl.id+"DropDown"}
            id = {subEl.id+"DropDown"}
            isEdit = {isEdit} webStyle = {webStyle}
            name = {subEl.name} path = {subEl.path} 
            parentIndex = {index} index = {subIndex}
            handleLinkDropdownChange = {handleLinkDropdownChange}  
          />
        </AdminNavWrapper>
        );
      });

     
    }

    // navItems.push(
      // <EditableNavItem 
      //   key = {el.name+el.path+"Link"}
      //   el = {el}
      //   webStyle = {webStyle}
      //   handleLinkChange = {handleLinkChange}
      //   index = {index}
      //   isEdit = {isEdit}
      // >
      //   {dropdownItems}
      // </EditableNavItem>
      navItems.push(
        <AdminNavWrapper
            key={el.id+"admin"}
            id={el.id}
            // order = {el.or}
            className={"py-2 "}
          >
            <EditableNavItem 
              key = {el.name+el.path+"Link"}
              el = {el}
              id = {el.name+el.path+"Link"}
              webStyle = {webStyle}
              localDisplaySettings = {localDisplaySettings}
              handleLinkChange = {handleLinkChange}
              index = {index}
              isEdit = {isEdit}
              handleDropdownDragEnd = {handleDropdownDragEnd}
            >
              {/* <span>{JSON.stringify(el.dropdown)}</span> */}
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}

                // modifiers = {[ verticalListSortingStrategy]}

                onDragStart={() => {
                  showDropdownDeleteSpot(true);
                }}
                onDragEnd={(evt) => {
                  handleDropdownDragEnd(evt, index);
                  showDropdownDeleteSpot(false);
                  
                }}
              >
                <SortableContext
                  items={el.dropdown}
                  strategy={verticalListSortingStrategy}
                >
                  {dropdownItems}
                  {isShowDropdownDeleteSpot && (
                    <DeleteDrop id={`${index}:deleteDrop`} />
                  )}

                  {isShowButtons&& adminSettings.isEditMode &&
                  <button
                    className={"btn "+(localDisplaySettings.isMobile?"ps-4":"w-100")}
                    data-no-dnd="true"
                    type="button"
                    style={{color:webStyle.colors.lightShade}}
                    onClick={(evt) => {
                      addDropdownlink(evt, index);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlusSquare}/>
                  </button>}
                </SortableContext>
              </DndContext>
            </EditableNavItem>
        </AdminNavWrapper>
      )
    // }
  });

  //   // Move Mode
  // } else {
  //   for(var index = 0; index < content.navData.length; index++){

  //     let el = content.navData[index]

  //     let dropdownItems = [];

  //     if ("dropdown" in el) {
  //       el.dropdown.forEach((el) => {
  //         dropdownItems.push(
  //           <AdminNavWrapper
  //             key={el.id}
  //             id={el.id}
  //             // order = {el.or}
  //             className={(localDisplaySettings.isMobile?"ps-3":"py-2 ")}
  //           >
  //             <li className="nav-item ms-2" >
  //               <Link
  //                 style={{color:webStyle.colors.lightShade}}
  //                 data-no-dnd="true"
  //                 className="nav-link "
  //                 aria-current="page"
  //                 to={el.path}
  //               >
  //                 {el.name}
  //               </Link>
  //             </li>
  //           </AdminNavWrapper>
  //         );
  //       });
  //     }

      // navItems.push(
      //   <AdminNavWrapper
      //     key={el.id}
      //     id={el.id}
      //     // order = {el.or}
      //     className={"py-2 "}
      //   >
          // <li className={"nav-item "+(localDisplaySettings.isMobile?"ms-2":"mx-4")} style ={{whiteSpace: "nowrap"}}>
          //   {"dropdown" in el ? (
          //     <div className="position-relative ">
          //       <a
          //         style={{color:webStyle.colors.lightShade}}
          //         className="  dropdown-toggle text-decoration-none"
          //         data-bs-toggle="dropdown"
          //         id={"navbarDropdown" + el.id}
          //         role="button"
          //         aria-expanded="false"
          //         path="javascript:void(0)"
          //       >
          //         {el.name}
          //       </a>
                // <ul
                //   className={"dropdown-menu border-0 rounded-0 mt-0 "+(localDisplaySettings.isMobile?"":"boxShadow")} style={{backgroundColor:webStyle.colors.darkAccent, top:"2.5em", opacity:"1 !important"}}
                //   aria-labelledby={"navbarDropdown" + el.id}

                // >                  
                //   <div>

                //   <DndContext
                  //   sensors={sensors}
                  //   collisionDetection={closestCenter}

                  //   // modifiers = {[ verticalListSortingStrategy]}

                  //   onDragStart={() => {
                  //     showDropdownDeleteSpot(true);
                  //   }}
                  //   onDragEnd={(evt) => {
                  //     handleDropdownDragEnd(evt, index);
                  //     showDropdownDeleteSpot(false);
                      
                  //   }}
                  // >
                  //   <SortableContext
                    //   items={el.dropdown}
                    //   strategy={verticalListSortingStrategy}
                    // >
                    //   {dropdownItems}
                    //   {isShowDropdownDeleteSpot && (
                    //     <DeleteDrop id={`${index}:deleteDrop`} />
                    //   )}

                    //   {isShowButtons&& adminSettings.isEditMode &&<button
                    //     className={"btn "+(localDisplaySettings.isMobile?"ps-4":"w-100")}
                    //     data-no-dnd="true"
        //                 type="button"
        //                 style={{color:webStyle.colors.lightShade}}
        //                 onClick={(evt) => {
        //                   addDropdownlink(evt, index);
        //                 }}
        //               >
        //                 <span>{index}</span>
        //                 <FontAwesomeIcon icon={faPlusSquare}/>
        //               </button>}
        //             </SortableContext>
        //           </DndContext>
        //           </div>
        //         </ul>
        //       </div>
        //     ) : (
        //       <EditableNavItem
        //         isEdit ={false}
        //         key = {el.name+el.path+"Link"}
        //         el = {el}
        //         webStyle = {webStyle}
        //         handleLinkChange = {handleLinkChange}
        //         index = {index}
        //       >
        //         {dropdownItems}
        //       />
        //     )}  
        //   </li>
        // </AdminNavWrapper>
      // ); 
  //   };
  // }

  const socialLinks = socialMedias.filter(({location}) => {
    if (location === "New Link") {
      return false; // skip
    }
    return true;
    }).map(({link,location}) =>
      <li className="py-2">
        <Link className={'nav-link social-link'} key = {`Nav - ${componentMapping[location]}`}  to={{pathname: `${link}`}}  style={{color:webStyle.colors.lightShade}}><FontAwesomeIcon className={"sm-icons"} icon={componentMapping[location]} /></Link>
      </li>
    );

  return (
    <div
      className="fullWidth boxShadow px-5  " style={{backgroundColor:webStyle.colors.darkAccent, color:webStyle.colors.lightShade, position: "sticky",top: 0, alignSelf: "flex-start",zIndex:5}}
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >
            {/* <span>{JSON.stringify(content)}</span> */} 

      {/* <span>{JSON.stringify(masterNavData.navData)}</span><br/>
      {/* <span>IsEdit: {JSON.stringify(isEdit)}</span>  */}

      {/* style={{backgroundColor:webStyle.colors.lightShade}} */}
        <nav className="navbar navbar-expand-lg mx-4 p-0 container mx-auto"  >      

          {!isSettingsMode?
            <div className={"container-fluid g-0 "+(localDisplaySettings.isMobile?" ms-3":"")} >
            {isEdit?
            <div data-no-dnd="true">
              <input
                // style ={{,color:props.webStyle.colors.lightShade}}
                style ={{color:webStyle.colors.lightShade,width:`${content.homeLinkText.length+2}ch`}}

                className="form-control-plaintext navbar-brand me-0"
                value={content.homeLinkText}
                onChange={(evt) => {
                  handleHomeLinkText(evt.target.value);
                }}
              />
                
            </div>
            :
            <Link data-no-dnd="true" className="navbar-brand" to = '/' style={{color:webStyle.colors.lightShade}}>{content.homeLinkText}</Link>
            }
            <button
              data-no-dnd="true"
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon  style={{color:webStyle.colors.lightShade}} icon={faBars}/>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={"navbar-nav me-auto mb-2 mb-lg-0 "+(localDisplaySettings.isMobile?" ":"align-items-center")} >                 
                <DndContext
                  sensors={sensors}
                  modifiers = {[ localDisplaySettings.isMobile
                    ? restrictToVerticalAxis
                    : restrictToHorizontalAxis]}
                  collisionDetection={closestCenter}
                  onDragStart={() => {
                    showDeleteSpot(true);
                  }}
                  onDragEnd={(evt) => {
                    handleDragEnd(evt);
                    showDeleteSpot(false);
                  }}
                >
                  <SortableContext
                    items={content.navData}
                    strategy={
                      localDisplaySettings.isMobile
                        ? verticalListSortingStrategy
                        : horizontalListSortingStrategy
                    }
                  >
                    {navItems}
                    {isShowDeleteSpot && (
                      <div className={"py-2"}>
                        <DeleteDrop id={"deleteDrop"} />
                      </div>
                    )}
                  </SortableContext>
                  
                </DndContext>
                
              </ul>
              {isShowButtons && adminSettings.isEditMode && !isShowDeleteSpot && (
                  <div
                    data-no-dnd="true"
                    className="btn-group  "
                    role="group"
                    aria-label="Basic example"

                    // onClick={()=>{alert("group")}}
                  >
                    <button
                      className="btn border-end mx-2"
                      
                      type="button"
                      onClick={() => {
                        addLink();
                      }}
                    >
                      <FontAwesomeIcon icon={faPlusSquare} style={{color:webStyle.colors.lightShade}} />
                    </button>
                      
                    <button
                      className="btn mx-1 px-0"
                      type="button"
                      onClick={() => {
                        addLink(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretSquareDown} style={{color:webStyle.colors.lightShade}}/>

                    </button>
                    <button
                      className="btn border-start mx-2"
                      type="button"
                      onClick={() => {
                        setIsEdit(!isEdit); 
                      }}
                    >
                      <FontAwesomeIcon icon={isEdit?faCheck:faPencilAlt} style={{color:webStyle.colors.lightShade}}/> 
                    </button>
                  </div>
                )}
                { content.includeSocials &&
                  <ul className="navbar-nav sm-icons justify-content-start me-0 " style={{float:0}} >
                    {socialLinks}
                    
                    {Object.keys(cart).length != 0 &&
                    <li className="position-relative">
                      <Link className='col ms-3' to={"/checkout"}  style={{color:webStyle.colors.lightShade}}><FontAwesomeIcon className={"m-icons"} icon={faShoppingCart} /></Link>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                        {Object.keys(cart).length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </li>
                    } 
                  </ul>
                }
                  {isShowButtons && adminSettings.isEditMode &&
                  <div className="relative-r h-100 d-flex" >
                    <button className="btn" style={{marginRight:"-2.5em", top:".2em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
                      <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.lightShade}} />
                    </button>
                  </div>
                  }
                
            </div>
            </div>
            :
            <div className="text-center w-100 py-3" data-no-dnd = "true">
              <h3>Navigation Bar Settings</h3>
              <form className="text-start">
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" checked = {content.isUnique} onClick = {toggleUnique} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Is this Navigation Bar unique?
                </label>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" checked = {content.includeSocials} onClick = {()=>handleContentCheckbox("includeSocials")} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Include social medias?
                </label>
              </div>
                
              </form>
              {
                <div className="relative-r mt-2">
                  <button className="btn d-flex" style={{marginRight:"-2.5em", top:"0"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
                    <FontAwesomeIcon icon={faCog} style={{color:webStyle.colors.lightShade}} />
                  </button>
                </div> 
              }
            </div> 
          }


        </nav>
      </div>
  );

  function handleContentCheckbox(key){
    setContent((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    if (!content.isUnique){
      appMethods.setMasterNavData(
        (prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        })
      )
    }
  }

  function toggleUnique(){
    if (content.isUnique){
      if (window.confirm("Are you sure you want to make this Navigation bar a copy of the master Navigation bar? This will remove any unique links?")){
        setContent((prevState) => ({
          ...prevState,
          isUnique: false,
        }));
      }
    }
    else{
      setContent((prevState) => ({
        ...prevState,
        ...masterNavData,
        isUnique: true
      }));
    }
  }
  async function saveNavData(value){
    if (content.isUnique){
      setContent((prevState) => ({
        ...prevState,
        navData: value,
      }));
    }
    else{
      setContent((prevState) => ({
        ...prevState,
        navData: value,
      }));
      appMethods.setMasterNavData(
        (prevState) => ({
          ...prevState,
          navData: value,
        })
      )
    }
  }

  function addLink(isDropdown) {
    const newLink = isDropdown
      ? {
          id: Math.random() * 10000,
          name: "New Dropdown",
          dropdown: [{ name: "New Link", path: "/", id: Math.random() * 10000 }]
        }
      : { id: Math.random() * 10000, name: "New Link", path: "/" };

    saveNavData([...content.navData, newLink]);
  }

  function addDropdownlink(event, index) {
    
    // alert(index);
    let newData = [...content.navData];

    newData[index].dropdown = [
      ...newData[index].dropdown,
      { id: Math.random() * 10000, name: "New Link", path: "/" }
    ];

    saveNavData(newData);
    event.stopPropagation();
  }

  function removeLink(index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
        // alert(index);
        let newData = [
          ...content.navData.slice(0, index),
          ...content.navData.slice(index + 1)
        ];

        saveNavData(newData);
      
    }
  }

  function removeDropdownLink(parentIndex, index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
        // alert(index);
        let newData = [...content.navData];
        let newDropdown = [
          ...newData[parentIndex].dropdown.slice(0, index),
          ...newData[parentIndex].dropdown.slice(index + 1)
        ];
        newData[parentIndex].dropdown = newDropdown;
        saveNavData(newData);
      
    }
  }

  function handleHomeLinkText(value) {
    // TODO ensure theses don't get out of sync
    if (content.isUnique){
        setContent((prevState) => ({
          ...prevState,
          homeLinkText: value,
        }));
      
    }
    else{
      appMethods.setMasterNavData(
        (prevState) => ({
          ...prevState,
          homeLinkText: value,
        })
      )
    }
  }

  function handleLinkChange(name, path, index) {
    // TODO ensure theses don't get out of sync
    let newData = [...content.navData];

    newData[index].name = name;
    newData[index].path = path;

    saveNavData(newData)
  }

  function handleLinkDropdownChange(name, path, parentIndex, index) {
    let newData = [...content.navData];

    newData[parentIndex].dropdown[index].name = name;
    newData[parentIndex].dropdown[index].path = path;

    // newData[parentIndex].dropdown[index][type] = event.target.value;

    saveNavData(newData)
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;

      if (!over.data.current) {
        removeLink(oldIndex);
        return;
      }

      const newIndex = over.data.current.sortable.index;

      // removeLink
      let newData = arrayMove(content.navData, oldIndex, newIndex)

      saveNavData(newData);
    }

  }

  function handleDropdownDragEnd(event, index) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;

      // if( === 0){
      if (!over.data.current) {
        removeDropdownLink(index, oldIndex);
        return;
      }

      const newIndex = over.data.current.sortable.index;

      let newData = [...content.navData];

      newData[index].dropdown = arrayMove(
        newData[index].dropdown,
        oldIndex,
        newIndex
      );

      saveNavData(newData);
    }
    // event.preventDefault();

  }

}

const DeleteDrop = (props) => {
  const { setNodeRef } = useDroppable({
    id: props.id
  });
  return (
    <div ref={setNodeRef}>
      <li
        className="nav-link active border-primary rounded-3"
        style={{ borderStyle: "dashed", borderWidth: "1px" }}
      >
        Delete
      </li>
    </div>
  );
};



//  I really need to consolidate this....

const EditableNavItem = (props) => {
  
  const [name, setName] = useState(props.el.name)
  const [path, setPath] = useState(props.el.path)
  const [isShowDeleteSpot, showDeleteSpot] = useState(false)
  
  useEffect(() => {
    // alert(props.isEdit)
    if (props.isEdit){
      setName(props.el.name)
      setPath(props.el.path)
    }
    else{
      if (name !== props.el.name || path !== props.el.path){
        props.handleLinkChange(name, path, props.index)
      }
    }
    
  }, [props.isEdit]);


  if ("dropdown" in props.el){

    let items = props.el.dropdown


    return(
      
      <li className={"nav-item "+(props.localDisplaySettings.isMobile?"ms-2":"mx-4")} >
        <div className= {"position-relative "+(props.localDisplaySettings.isMobile ? "input-group" : "")}>
          {props.isEdit ?
          <>
            <input  
              className={"form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : "")}
              onChange={(evt) => setName(evt.target.value)}
              style ={{width:`${name.length+2}ch`,color:props.webStyle.colors.lightShade}}
              value={name}
            />
            <a
              className={"nav-link dropdown-toggle" + (props.localDisplaySettings.isMobile ? " w-50" : "")}
              style ={{color:props.webStyle.colors.lightShade}}
              data-no-dnd="true"
              data-bs-toggle="dropdown"
              id={"navbarDropdown-" + props.el.id}
              role="button"
              aria-expanded="false"
              path="javascript:void(0)"
            >
              Dropdown
            </a>
          </>
          :
          <a
            className={"nav-link dropdown-toggle" + (props.localDisplaySettings.isMobile ? " w-50" : "")}
            style ={{color:props.webStyle.colors.lightShade}}
            data-no-dnd="true"
            data-bs-toggle="dropdown"
            id={"navbarDropdown-" + props.el.id}

            role="button"
            aria-expanded="false"
            path="javascript:void(0)"
            >
            {name}
          </a>
          }
            <ul  className={"dropdown-menu "+(props.localDisplaySettings.isMobile?"":"boxShadow")} style={{backgroundColor:props.webStyle.colors.darkAccent, top:props.isEdit?"5em":"2.9em",zIndex:1}} aria-labelledby={"navbarDropdown-" + props.el.id}>
              <DndContext
                sensors={props.sensors}
                // modifiers = {[restrictToVerticalAxis]}
                collisionDetection={closestCenter}
                onDragStart={() => {
                  showDeleteSpot(true);
                }}
                onDragEnd={(evt) => {
                  props.handleDropdownDragEnd(evt);
                  showDeleteSpot(false);
                }}
              >
                <SortableContext
                  items={items}
                  strategy={verticalListSortingStrategy}
                >
                  {props.children}
                  {isShowDeleteSpot && (
                    <div className={"py-2"}>
                      <DeleteDrop id={"deleteDrop"} />
                    </div>
                  )}
                </SortableContext>
                
              </DndContext>
            </ul>
        </div>
      </li>
    )
  }
  else{
    return(
    <li className={"nav-item py-2 "+(props.localDisplaySettings.isMobile?"ms-2":"mx-4")} >
      {props.isEdit?
      <>
        <input
          className={"form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : "")}
          onChange={(evt) => setName(evt.target.value)}
          style ={{width:`${name.length+2}ch`,color:props.webStyle.colors.lightShade}}
          value={name}
        />
        <input    
          className={"form-control-plaintext" + (props.localDisplaySettings.isMobile ? " w-50" : "")}
          onChange={(evt) => setPath(evt.target.value)}
            style ={{width:`${path.length+2}ch`,color:props.webStyle.colors.lightShade}}
            value={path}
        />
      </>
      :
      <Link
        data-no-dnd="true"
        style={{color:props.webStyle.colors.lightShade}}
        className={"text-decoration-none "}
        aria-current="page"
        to={path}
      >
        {name}
      </Link>
      }
    </li>
    )
  }
}

const DropDownLink = (props) =>{
  const { webStyle } = useContext(WebContext);

  const [name, setName] = useState(props.name)
  const [path, setPath] = useState(props.path)

  useEffect(() => {
    // alert(props.isEdit)
    if (props.isEdit){
      setName(props.name)
      setPath(props.path)
    }
    else{
      if (name !== props.name || path !== props.path){
        props.handleLinkDropdownChange(name, path, props.parentIndex, props.index)
      }
    }
    
  }, [props.isEdit]);

    return (
      <li className="nav-item col ms-2" >
        {
          props.isEdit?
          <div className="input-group " >
            <input
              style ={{color:webStyle.colors.lightShade}}

              className="form-control-plaintext w-50"
              value={name}
              onChange={evt=>setName(evt.target.value)}
              
            />
            <input
              className="form-control-plaintext w-50"
              style ={{color:webStyle.colors.lightShade}}
              value={path}
              onChange={evt=>setPath(evt.target.value)}
            />
          </div>
          :
          <Link
            data-no-dnd="true"
            style={{color:props.webStyle.colors.lightShade}}
            className={"nav-link "}
            aria-current="page"
            to={path}
          >
            {name}
          </Link>
        }
        
      </li>
    )
}

