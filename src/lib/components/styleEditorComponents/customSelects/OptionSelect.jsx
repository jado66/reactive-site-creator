import Select from "react-select";
import { useState, useEffect } from "react";

export default function OptionSelect(props) {
    let [value,setValue]= useState(getInitalValue(props.value,props.options))

    useEffect(() => {
        setValue(getInitalValue(props.value,props.options))

    }, [props.value]);
    
    const onChange=(selectedOption)=>{
        props.onChange({ selectedOption })
    }

    return (
        <div style={{minWidth:"250px", textAlign:"left"}} className = "flex-grow-1">
            <Select 
                {...props} 
                value={value} 
                onChange={onChange}  
                options={props.options} 
                className ={"flex-grow-1"}
                menuPlacement="auto"
            />
        </div>
    );
  
}

function getInitalValue(value,options){
    let initialValue = options[options.findIndex(option => option.value === value)]

    if (initialValue) return initialValue

    // Maybe it is nested

    for(var i = 0; i < options.length; i++){
        if ('options' in options[i]){
            initialValue = options[i].options[options[i].options.findIndex(option => option.value === value)]

            if (initialValue){
                return initialValue
            } 
        }
    };
       
    

    // if nothing is found return first value
    if (!Array.isArray(options[0])){
        return options[0]
    }
    else{
        return options[0][0]
    }
}
