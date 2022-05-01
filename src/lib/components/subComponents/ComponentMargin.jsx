export default function ComponentMargin(props){

    let backgroundColor = ''
    let verticalSpacing = ''
    let container = ''

    try {
        const colorName = props.webStyle.componentStyles[props.componentName].marginColor
        backgroundColor = props.webStyle.componentStyles.all.includeMargins?"":props.webStyle.colors[colorName]

        verticalSpacing = (props.componentName != "styledLink"?" py-4":" py-1") 

        container = props.webStyle.componentStyles.all.includeComponentMargins?" container":""
    } catch (error) {
        // alert(JSON.stringify(props.componentName))
    }
    
    
   

    return (
        <div style={{...props.style,  backgroundColor:backgroundColor}} className = {" g-0 "} >
                {/* <span>{JSON.stringify(content)}</span> */}
            <div className={" flex-row d-flex px-5"+verticalSpacing+container}>
                {props.children}
            </div>
        </div>
    )
  }
  