import { MenuItem, FocusableItem, applyStatics, MenuButton} from '@szhsin/react-menu';
import { useState, useContext } from 'react';
import Tooltip from "react-power-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { UserPreferencesContext } from '../StylesEditor';
import { WebContext } from '../Website';



applyStatics(FocusableItem)(FocusableItemTT);
applyStatics(MenuItem)(MenuItemTT);


export function MenuItemTT(props) {
  const [show, setShow] = useState(false);

  return (
    <MenuItem
      {...props}
      className={props.className}
      style={{ position: "relative" }}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={props.onClick}
    >
      {props.children}
      <MenuTooltip show={show} text={props.ttText} />
    </MenuItem>
  );
}

export function FocusableItemTT(props) {
  const [show, setShow] = useState(false);

  return (
    <FocusableItem
      {...props}
      className={props.className}
      style={{ position: "relative" }}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={props.onClick}
    >
      {/* <span>Show: {show}</span> */}
      {props.children}
      <MenuTooltip show={show} text={props.ttText} />
    </FocusableItem>
  );
}

function MenuTooltip(props) {

  const {userEditorPreferences, setShowTooltips} = useContext(UserPreferencesContext)

  return (
    <Tooltip show={props.show && userEditorPreferences.showTooltips} arrowAlign="start" textBoxWidth = {"300px"}>
      <div className = "relative-div">
        <span className={"fw-normal pe-3"}>{props.text}</span>
        <div className='relative'>
          <button className='btn btn-hover'>
            <FontAwesomeIcon icon = {faXmark}
              onClick = {()=>{
                if(window.confirm(`Tooltips will now be hidden. You can reverse this in editor settings in the admin menu.`)){
                  setShowTooltips(false)
                }
              }}
            
            />
          </button>
        </div>
      </div>
    </Tooltip>
  );
}