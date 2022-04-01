import delayCallback from "./delayCallback";
import { useContext, useState, useEffect } from "react";

export default function useContextStorage(adminSettings, apiMethods, msgPort, contextName, initialState){
    const [hasBeenMounted, setHasBeenMounted] = useState(false)
    const [value, setValue] = useState(()=>{
        return getStoredComponent(contextName,initialState,adminSettings,apiMethods)
    })
  
    // Save data
    useEffect(() => {
      if (msgPort === "save"){
        alert("Saving ")
        apiMethods.setValueInDatabase(contextName,JSON.stringify(value))
        localStorage.removeItem(contextName)
      }
      if (msgPort === "reload"){
        setHasBeenMounted(false)
        setValue(()=>{
            return getStoredComponent(contextName,initialState,adminSettings,apiMethods)
        })
      }
    }, [msgPort]);
  
    // Update data
    useEffect(() => {
      // The use of has been mounted skips the first render.
      // Since we are programatically changing value we don't need to update our storage
      if (hasBeenMounted){ 
        // Set live content from database
        if (adminSettings.autoUpdateLiveWebsite){
          apiMethods.setValueInDatabase(contextName,JSON.stringify(value))  
        }
        // Store draft data locally
        else if (adminSettings.autoSaveEditsLocally){
          localStorage.setItem(contextName,JSON.stringify(value))
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
  // Custom hook to store the data
  function getStoredComponent(contextName, initialValue, adminSettings, apiMethods){
    let savedData = null
    // If we are viewing the draft load the draft
    if (adminSettings.viewDraftEdits){
        savedData = JSON.parse(localStorage.getItem(contextName))
        
        // we need to override data instead of replace it. This will make it backcompatible
        if (initialValue.constructor == Object){
          let mergedData = {...initialValue}
  
          if (savedData){
            for (const [key, value] of Object.entries(savedData)) {
              if (key in mergedData && value.constructor == Object){
                mergedData[key] = {...mergedData[key], ...value}
              }
              else{
                mergedData[key] = value
              }
            }
            informSiteOfDraftEdits(apiMethods)
          }
  
          return mergedData
  
        }
        if (savedData){
            informSiteOfDraftEdits(apiMethods)
            return savedData
        } 
    }
    
    // Load any values from database
    if (apiMethods.getFromDataBase instanceof Function ){
      savedData = JSON.stringify(apiMethods.getFromDataBase(contextName))
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