import Select from "react-select";
import { useState, useEffect } from "react";
import getContrastColor from "../../helpers/getContrastColor";

export default function ColorSelect(props) {
    
    let colors = []

    if (props.colors){
        Object.keys(props.colors).forEach(color=>{
            const colorName = color.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
            colors.push({label:colorName,value:color,color:props.colors[color]})
        })
    }

    let initialValueIndex = colors.findIndex(option => option.value === props.value);  

    let [value,setValue]= useState(colors[initialValueIndex]||colors[0])
    
    // Save data
    useEffect(() => {
        setValue(colors[colors.findIndex(option => option.value === props.value)])

    }, [props.value]);


    
    
    const styles = {
        option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? "bold" : "normal",
        color: getContrastColor(state.data.color),
        backgroundColor: state.data.color
        }),
        singleValue: (provided, state) => ({
        ...provided,
            // color: getContrast(state.data.color),
            // backgroundColor: state.data.color
        })
    };

    const onChange=(selectedOption)=>{
        props.onChange({ selectedOption })
    }

    return (
        <div style={{minWidth:"250px", textAlign:"left"}} className = "flex-grow-1">
            <Select 
                {...props}
                value={value}
                myFontSize="20px" 
                onChange={onChange}
                defaultValue={props.default} 
                options={colors} 
                styles={styles} 
                className ={"flex-grow-1"}
                menuPlacement="auto"
            

            />
        </div>
    );
  
}


