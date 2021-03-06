import { useContext, useState, useEffect } from "react";
import { WebContext } from "../Website";
import delayCallback from "./delayCallback";
// Needs a pageID as a parent object
export default function useComponentStorage(componentID, initialState){
    
    const { adminSettings, apiMethods, msgPort  } = useContext(WebContext)
    const [hasBeenMounted, setHasBeenMounted] = useState(false)

    const [value, setValue] = useState(()=>{
        return getStoredComponent(componentID,initialState,adminSettings,apiMethods)
    })

    // load saved data
    useEffect(() =>{
         // Load any values from database
        if (adminSettings.viewDraftEdits){
            let savedData = JSON.parse(localStorage.getItem(componentID))
            
            if (!savedData){
                loadFromDatabase(apiMethods,componentID, setValue, setHasBeenMounted)
            } 
        }
        else{
            loadFromDatabase(apiMethods,componentID, setValue, setHasBeenMounted)
        }
        
    }, []);

    // Save data
    useEffect(() => {
        if (msgPort === "save"){
            // alert("Saving ")
            apiMethods.setValueInDatabase(componentID,JSON.stringify(value))
            localStorage.removeItem(componentID)
        }
        if (msgPort === "reload"){
            setHasBeenMounted(false)
            setValue(()=>{
                return getStoredComponent(componentID,initialState,adminSettings,apiMethods)
            })
        }

    }, [msgPort]);

    useEffect(() => {
        // The use of has been mounted skips the first render.
        // Since we are programatically changing value we don't need to update our storage
        if (hasBeenMounted){ 
            // Set live content from database
            if (adminSettings.autoUpdateLiveWebsite){
                apiMethods.setValueInDatabase(componentID,JSON.stringify(value))
            
            }
            // Store draft data locally
            else if (adminSettings.autoSaveEditsLocally){
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


function getStoredComponent(componentID, initialValue, adminSettings, apiMethods){
    let savedData = null
    
    // If we are viewing the draft load the draft
    if (adminSettings.viewDraftEdits){
        savedData = JSON.parse(localStorage.getItem(componentID))
        
        if (savedData){
            informSiteOfDraftEdits(apiMethods)
            return savedData
        } 
    }
        
    // If nothing is stored load the prop data from the template
    if (initialValue instanceof Function){ return initialValue()}
    return initialValue 
}

function loadFromDatabase(apiMethods, componentID, setValue, setHasBeenMounted){
    if (apiMethods.getFromDataBase instanceof Function ){
        apiMethods.getFromDataBase(componentID).then(response=>{
            if (response){
                setValue(response)
                setHasBeenMounted(false)
            } 
        })  
    }
}

function informSiteOfDraftEdits(apiMethods){
    

    delayCallback(()=>{
        apiMethods.setSiteIsDraft(true)
    },500)
}

