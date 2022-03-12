import React, {useState, useEffect, useContext} from 'react'

import { WebContext } from "../Website";



export default function NewComponent(props){
    const [contentVal1, setContentVal1] = useStorage(0);
    const [contentVal2, setContentVal2] = useState({});
    
    const {webStyle, msgPort, appMethods} = useContext(WebContext)

    const setContent = (content) => {
      setContentVal1(content.val1)
      setContentVal2(content.val2)
    }

    const getContent = () => {
      return {
        contentVal1:contentVal1,
        contentVal2:contentVal2
      }
    }

    const pullContent = (fromTemplate = false) =>{

      if (!fromTemplate){
        // 1st Pull Data from DB
        let content = appMethods.getComponentFromDB(props.pageID,props.id)

        if (content){
          setContent(content)
        }

        // Pull draft content from local browser      
        if (webStyle.viewDraftEdits){
          let content = localStorage.getItem(props.id);

          if (content){
            content = JSON.parse(content)
            setContent(content)

            // Mark site as a draft
            appMethods.setSiteIsDraft(true)

            // Exit function. No need to load template values
            return
          }
        }
      }

      // If no draft or database values load from a template
      if (props.content){
        if (Object.keys(props.content).length !== 0) 
          setContent(content)

          if (fromTemplate){
            saveContent()
          }
      }
    } 

    const saveContent = () =>{
      const content = getContent()

      // Save draft edits locally
      if (webStyle.autoSaveEditsLocally){
        localStorage.setItem("masterNavData",JSON.stringify(content));
        appMethods.setSiteIsDraft(true)
      }

      // Make all edits live
      if (webStyle.autoUpdateLiveWebsite){
        appMethods.saveComponentToDB(props.pageID,props.id,content)
      }
    }
    
    // Load content on mount
    useEffect(() => {
      pullContent()
    }, []);
  
    // Save data
    useEffect(() => {
      if (msgPort == "save"){
        saveContent()
      }
    }, [msgPort]);

    // Load draft data from local browser or only show live edits
    useEffect(() => {
      if (msgPort == "viewDraft" || msgPort == "viewLiveSite"){
        pullContent()
      }
    }, [msgPort]);

    return(
      <div className="px-5 text-center " data-no-dnd="true"> {/* data-no-dnd="true" makes this area not draggable */}
        <input value={contentValue1} onChange = {evt=>setContentVal1(evt.target.value)}/>
        <input value={contentValue2} onChange = {evt=>setContentVal2(evt.target.value)}/>
      </div>
      )
  };