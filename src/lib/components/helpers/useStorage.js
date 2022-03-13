import { useContext, useState, useEffect } from "react";
import { WebContext } from "../Website";
import delayCallback from "./delayCallback";
// Needs a pageID as a parent object
export default function useComponentStorage(componentID, initialState){
    
    const { storageSettings, apiMethods  } = useContext(WebContext)
    const [hasBeenMounted, setHasBeenMounted] = useState(false)
    const [value, setValue] = useState(()=>{
        return getStoredComponent(componentID,initialState,storageSettings,apiMethods)
    })

    useEffect(() => {
        // The use of has been mounted skips the first render.
        // Since we are programatically changing value we don't need to update our storage
        if (hasBeenMounted){ 
            // Set live content from database
            if (storageSettings.autoUpdateLiveWebsite){
                if (apiMethods.isAthenticated()){
                    apiMethods.setValueInDatabase(componentID,JSON.stringify(value))
                }
            }
            // Store draft data locally
            else if (storageSettings.autoSaveEditsLocally){
                localStorage.setItem(componentID,JSON.stringify(value))
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


function getStoredComponent(componentID, initialValue, storageSettings, apiMethods){
    let savedData = null
    
    // If we are viewing the draft load the draft
    if (storageSettings.viewDraftEdits){
        savedData = JSON.parse(localStorage.getItem(componentID))
        
        if (savedData){
            informSiteOfDraftEdits(apiMethods)
            return savedData
        } 
    }
    
    // Load any values from database
    if (apiMethods.getFromDataBase instanceof Function ){
        savedData = JSON.stringify(apiMethods.getFromDataBase())
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

