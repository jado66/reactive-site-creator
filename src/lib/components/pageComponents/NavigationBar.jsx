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



import { faCaretSquareDown,  faPencilAlt, faArrowsAlt, faShoppingCart, faBars, faCog } from '@fortawesome/free-solid-svg-icons'
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


// TODO dropdowns need to open only their dropdowns

export default function NavigationBar(props) {
  const [isSettingsMode,setIsSettingsMode] = useState(false);
  const [isUnique, setIsUnique] = useState(false)
  const [isEdit, setIsEdit] = useState(false);
  const [isShowDeleteSpot, showDeleteSpot] = useState(false);
  const [isShowDropdownDeleteSpot, showDropdownDeleteSpot] = useState(false);
  const [isShowButtons, showButtons] = useState(false);

  const {webStyle, msgPort, appMethods, socialMedias, cart, masterNavData} = useContext(WebContext)
  const [homeLinkText, setHomeLinkText] = useState("Site Creator")
  const [uniqueNavData, setUniqueNavData] = useState([]);

  const setNavData = (state) => {
    if (isUnique){
      setUniqueNavData(state)
    }
    else{
      appMethods.setMasterNavData(state)
    }
  }

  const setContent = (content) =>{
    setIsUnique(true)
    setHomeLinkText(content.homeLinkText)
    setUniqueNavData(content.navData)
  } 

  const getContent = () =>{
    let content = {}

    if (isUnique){
      content.homeLinkText = homeLinkText
      content.navData = uniqueNavData
      return content
    }
    else{
      return {}
    }
  }

  const makeNavbarUnique = () => {
    setIsUnique(true)

    setNavData(masterNavData)
  }

  useEffect(() => {
    if (msgPort == "save"){

      const componentData = { 
        name: props.componentName,
        id: props.id,
        content: getContent()
      }

      appMethods.saveComponentData(props.pageName,props.index,componentData)
    }
  }, [msgPort]);

  useEffect(() => {
    if (Object.keys(props.content).length > 0){

      setContent(props.content)
    }
  }, []);

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

  let navData = (isUnique?uniqueNavData:masterNavData)

  if (!navData){
    navData = []
  }


  let navItems = [];

  if (isEdit) {
    // for(var index = 1; index < navData.length; index++){
    [...navData].forEach((el,index) => {
      // let el = navData[index]

      let dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach((subEl, subIndex) => {
          dropdownItems.push(
            <DropDownLink
              key = {el.name+subEl.name+subEl.path+"DropDown"}
              isEdit = {true} webStyle = {webStyle}
              name = {subEl.name} path = {subEl.path} 
              onChangeName = {(evt) => {
                handleLinkDropdownChange(evt, index, subIndex, "name");
              }}

              onChangePath = {(evt) => {
                handleLinkDropdownChange(evt, index, subIndex, "path");
              }}/>
          );
        });
      }

      navItems.push(
        <li className={"nav-item "+(webStyle.isMobile?"ms-2":"mx-4")} 
            key={"edit"+el.name+"input2"}
        >
          <div key={"edit"+el.name+"div"}>
            {"dropdown" in el ? (
              <div  key={"edit"+el.name+"div2"}
                    className= {"position-relative "+(webStyle.isMobile ? "input-group" : "")}>
                <input
                  key={"edit"+el.name+"input"}
                  className={
                    "form-control-plaintext" + (webStyle.isMobile ? " w-50" : "")
                  }
                  onChange={(evt) => {
                    handleLinkChange(evt, index, "text");
                  }}
                  style ={{width:`${el.name.length+2}ch`,color:webStyle.lightShade}}

                  value={el.name}
                />
                <Link
                  key={"edit"+el.name+"dropToggle"}
                  className={
                    "nav-link dropdown-toggle" + (webStyle.isMobile ? " w-50" : "")
                  }
                  style ={{color:webStyle.lightShade}}
                  data-no-dnd="true"
                  data-bs-toggle="dropdown"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                  path="javascript:void(0)"
                >
                  Dropdown
                </Link>
                <ul key={"edit"+el.name+"ul"} className={"dropdown-menu "+(webStyle.isMobile?"":"boxShadow")} style={{backgroundColor:webStyle.darkAccent}} aria-labelledby="navbarDropdown">
                  <div>
                  {dropdownItems}

                  </div>
                </ul>
              </div>
            ) : (
              <div key={"edit"+el.name+"div"} className={webStyle.isMobile ? "input-group" : ""} >
                <input
                  key={"edit"+el.name+"input1"}
                  className={
                    "form-control-plaintext" + (webStyle.isMobile ? " w-50" : "")
                  }
                  onChange={(evt) => {
                    handleLinkChange(evt, index, "name");
                  }}
                  style ={{width:`${el.name.length+2}ch`,color:webStyle.lightShade}}

                  value={el.name}
                />
                <input
                  key={"edit"+el.name+"input2"}
                  className={
                    "form-control-plaintext" + (webStyle.isMobile ? " w-50" : "")
                  }
                  onChange={(evt) => {
                    handleLinkChange(evt, index, "path");
                  }}
                  style ={{width:`${el.path.length+2}ch`,color:webStyle.lightShade}}
                  value={el.path}
                />
              </div>
            )}
          </div>
        </li>
      );
    });

    // Move Mode
  } else {
    for(var index = 0; index < navData.length; index++){

      let el = navData[index]

      let dropdownItems = [];

      if ("dropdown" in el) {
        el.dropdown.forEach((el, index) => {
          dropdownItems.push(
            <AdminNavWrapper
              key={el.id}
              id={el.id}
              // order = {el.or}
              className={(webStyle.isMobile?"ps-3":"py-2 ")}
            >
              <li className="nav-item ms-2" >
                <Link
                  style={{color:webStyle.lightShade}}
                  data-no-dnd="true"
                  className="nav-link "
                  aria-current="page"
                  to={el.path}
                >
                  {el.name}
                </Link>
              </li>
            </AdminNavWrapper>
          );
        });
      }

      navItems.push(
        <AdminNavWrapper
          key={el.id}
          id={el.id}
          // order = {el.or}
          className={"py-2 "}
        >
          <li className={"nav-item "+(webStyle.isMobile?"ms-2":"mx-4")} style ={{whiteSpace: "nowrap"}}>
            {"dropdown" in el ? (
              <div className="position-relative ">
                <a
                  style={{color:webStyle.lightShade}}
                  className="  dropdown-toggle text-decoration-none"
                  data-bs-toggle="dropdown"
                  id={"navbarDropdown" + el.id}
                  role="button"
                  aria-expanded="false"
                  path="javascript:void(0)"
                >
                  {el.name}
                </a>
                <ul
                  className={"dropdown-menu border-0 rounded-0 mt-0 "+(webStyle.isMobile?"":"boxShadow")} style={{backgroundColor:webStyle.darkAccent, top:"2.5em", opacity:"1 !important"}}
                  aria-labelledby={"navbarDropdown" + el.id}

                >                  
                  <div>

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

                      {isShowButtons&&<button
                        className={"btn "+(webStyle.isMobile?"ps-4":"w-100")}
                        data-no-dnd="true"
                        type="button"
                        style={{color:webStyle.lightShade}}
                        onClick={(evt) => {
                          addDropdownlink(evt, index);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlusSquare}/>
                      </button>}
                    </SortableContext>
                  </DndContext>
                  </div>
                </ul>
              </div>
            ) : (
              <Link
                data-no-dnd="true"

                style={{color:webStyle.lightShade}}
                className={"text-decoration-none "}
                aria-current="page"
                to={el.path}
              >
                {el.name}
              </Link>
            )}
          </li>
        </AdminNavWrapper>
      );
    };
  }

  const socialLinks = socialMedias.filter(({location}) => {
    if (location === "New Link") {
      return false; // skip
    }
    return true;
    }).map(({link,location}) =>
      <li className="py-2">
        <Link className={'nav-link social-link'} key = {location}  href={`${link}`}  style={{color:webStyle.lightShade}}><FontAwesomeIcon className={"sm-icons"} icon={componentMapping[location]} /></Link>
      </li>
    );

  return (
    <div
      className="fullWidth boxShadow px-5  " style={{backgroundColor:webStyle.darkAccent, color:webStyle.lightShade, position: "sticky",top: 0, alignSelf: "flex-start",zIndex:1}}
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >
      {/* style={{backgroundColor:webStyle.lightShade}} */}
        <nav className="navbar navbar-expand-lg mx-4 p-0 container mx-auto">
          
          {!isSettingsMode?
            <div className={"container-fluid g-0 "+(webStyle.isMobile?" ms-3":"")}>
            {isEdit?
            <div data-no-dnd="true">
              <input
                  style ={{color:webStyle.lightShade}}

                  className="form-control-plaintext w-50"
                  value={homeLinkText}
                  onChange={(evt) => {
                    handleLinkChange(evt, 0, "name");
                  }}
                />
                <input
                  className="form-control-plaintext w-50"
                  style ={{color:webStyle.lightShade}}

                  value={"\\"}
                  onChange={(evt) => {
                    handleLinkChange(evt, 0, "path");
                  }}
                />
            </div>
            :
            <Link data-no-dnd="true" className="navbar-brand" to = '/' style={{color:webStyle.lightShade}}>{homeLinkText}</Link>
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
              <FontAwesomeIcon  style={{color:webStyle.lightShade}} icon={faBars}/>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={"navbar-nav me-auto mb-2 mb-lg-0 "+(webStyle.isMobile?" ":"align-items-center")}>
                {isEdit ? (
                  <div data-no-dnd="true" className={"d-flex "+(webStyle.isMobile?"flex-column ":"flex-direction-col")}>
                      {navItems}
                  </div>
                  
                ) : (
                  
                  <DndContext
                    sensors={sensors}
                    modifiers = {[ webStyle.isMobile
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
                      items={navData}
                      strategy={
                        webStyle.isMobile
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
                  
                )}
              </ul>
              {isShowButtons && !isShowDeleteSpot && (
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
                      <FontAwesomeIcon icon={faPlusSquare} style={{color:webStyle.lightShade}} />
                    </button>
                      
                    <button
                      className="btn mx-1 px-0"
                      type="button"
                      onClick={() => {
                        addLink(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretSquareDown} style={{color:webStyle.lightShade}}/>

                    </button>
                    <button
                      className="btn border-start mx-2"
                      type="button"
                      onClick={() => {
                        setIsEdit(!isEdit); 
                      }}
                    >
                      <FontAwesomeIcon icon={isEdit?faArrowsAlt:faPencilAlt} style={{color:webStyle.lightShade}}/> 
                    </button>
                  </div>
                )}
                  <ul className="navbar-nav sm-icons justify-content-start me-0 " style={{float:0}} >
                    {socialLinks}
                    
                    {Object.keys(cart).length != 0 &&
                    <li className="position-relative">
                      <Link className='col ms-3' to={"/checkout"}  style={{color:webStyle.lightShade}}><FontAwesomeIcon className={"m-icons"} icon={faShoppingCart} /></Link>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                        {Object.keys(cart).length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </li>
                    } 
                  </ul>
                  {isShowButtons&&<button className="relative-r btn" style={{marginRight:"-2.5em"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
                    <FontAwesomeIcon icon={faCog} style={{color:webStyle.lightShade}} />
                  </button>}
                
            </div>
            </div>
            :
            <div className="text-center w-100 py-3">
              <h3>Navigation Bar Settings</h3>
              <form className="text-start">
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Is this Navigation Bar unique?
                </label>
              </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Below will be other settings:</label>
                  {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
                </div>
              </form>
              {<button className="relative-r btn h-auto mt-2 " style={{marginRight:"-2.5em", top:"0"}} data-no-dnd = "true" onClick = {()=>{setIsSettingsMode(!isSettingsMode)}}>
                    <FontAwesomeIcon icon={faCog} style={{color:webStyle.lightShade}} />
                  </button>}
            </div> 
          }


        </nav>
      </div>
  );
  

  function addLink(isDropdown) {
    const newLink = isDropdown
      ? {
          id: Math.random() * 10000,
          name: "New Dropdown",
          dropdown: [{ name: "New Link", path: "/", id: Math.random() * 10000 }]
        }
      : { id: Math.random() * 10000, name: "New Link", path: "/" };

    setNavData([...navData, newLink]);
  }

  function addDropdownlink(event, index) {
    setNavData((prevData) => {
      // alert(index);
      let newData = [...prevData];

      newData[index].dropdown = [
        ...newData[index].dropdown,
        { id: Math.random() * 10000, name: "New Link", path: "/" }
      ];

      setNavData(newData);
    });
    event.stopPropagation();
  }

  function removeLink(index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      setNavData((prevData) => {
        // alert(index);
        let newData = [
          ...prevData.slice(0, index),
          ...prevData.slice(index + 1)
        ];

        setNavData(newData);
      });
    }
  }

  function removeDropdownLink(parentIndex, index) {
    // If dropdown be super sure because it will remove all the subdata
    if (window.confirm("Are you sure you want to remove this link?")) {
      setNavData((prevData) => {
        // alert(index);
        let newData = [...prevData];
        let newDropdown = [
          ...newData[parentIndex].dropdown.slice(0, index),
          ...newData[parentIndex].dropdown.slice(index + 1)
        ];
        newData[parentIndex].dropdown = newDropdown;
        setNavData(newData);
      });
    }
  }

  function handleLinkChange(event, index, type) {
    setNavData((prevData) => {
      let newData = [...prevData];

      newData[index][type] = event.target.value;

      return newData;
    });
  }

  function handleLinkDropdownChange(event, parentIndex, index, type) {
    setNavData((prevData) => {
      let newData = [...prevData];

      newData[parentIndex].dropdown[index][type] = event.target.value;

      return newData;
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;

        // event.preventDefault();


    if (active.id !== over.id) {
      const oldIndex = active.data.current.sortable.index;

      if (!over.data.current) {
        removeLink(oldIndex);
        return;
      }

      const newIndex = over.data.current.sortable.index;

      // removeLink

      setNavData((prevData) => {
        return arrayMove(prevData, oldIndex, newIndex);
      });
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

      setNavData((prevData) => {
        let newData = [...prevData];

        newData[index].dropdown = arrayMove(
          newData[index].dropdown,
          oldIndex,
          newIndex
        );

        return newData;
      });
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

const DropDownLink = (props) =>{
    const { webStyle } = useContext(WebContext);

  if (props.isEdit)
    return (
      
      <li className="nav-item col" >
        <div className="input-group " >
          <input
            style ={{color:webStyle.lightShade}}

            className="form-control-plaintext w-50"
            value={props.name}
            onChange={props.onChangeName}
            
          />
          <input
            className="form-control-plaintext w-50"
            style ={{color:webStyle.lightShade}}
            value={props.path}
            onChange={props.onChangePath}
          />
        </div>
      </li>
    )
  else{
    return(<div></div>)
  }
}