import  React,{ useState, useEffect, useContext } from "react";

// import { useContext, useState} from 'react'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import PictureFrame from "../subComponents/PictureFrame";

import NavigationBar from "../pageComponents/NavigationBar";
import useComponentStorage from '../helpers/useStorage';
import { WebContext } from "../Website";

export default function ShopManager(props) {
    const { webStyle, adminSettings, localDisplaySettings, appMethods} = useContext(WebContext);
    const [productSearchQuery, setProductSearchQuery] = useState("")
    const [products, setProducts] = useState({
      39398220093 : {
        name: "Rose Lip Balm",
        imageContent: {},
        groups: "Beauty Rose",
        price: 50.45,
        description: "Tasty, smooth, put on lips now",
      },
      393982200456 : {
        name: "Rose Lip Stick",
        imageContent: {},
        groups: "Beauty Discount Rose",
        price: 45.15,
        description: "Not tasty, smooth, put on lips now", 
      },
      393982200256 : {
        name: "Diamond Lip Stick",
        imageContent: {},
        groups: "Beauty Discount Diamond",
        price: 45.15,
        description: "Not tasty, smooth, put on lips now"
      },
      393982200451 : {
        name: "Diamond Lip Balm",
        imageContent: {},
        groups: "Beauty Diamond",
        price: 45.15,
        description: "Not tasty, smooth, put on lips now"
      }
    }
    )

  const setProductProperty = (id, property, value) =>{
    setProducts(prevState => {
      let newState = {...prevState}

      newState[id][property] = value

      return newState
    })
  }

  const deleteProduct = (id) => {
    if (window.confirm(`Are you sure you want to delete the product ${products[id].name}?`)){
      setProducts(prevState =>{
        let newState = {...prevState}
        delete newState[id]
  
        return newState
      })
    }
   
  }

  const addNewProduct = () => {
    let id = Math.floor(Math.random()*100000000000)

    let n = 0

    while (id in products){
      let id = Math.floor(Math.random()*100000000000);

      if (n > 1000){
        alert("Infinite loop")
        return
      }
      n++;
    }

    setProducts(prevState =>{
      let newState = {...prevState}
      prevState[id] = {
        name: "New Product",
        imageContent: {},
        groups: "Groups",
        price: 1.00,
        description: "New description"
      }

      return newState
    })


  }
  // useEffect(() => {
        
  //   if(props.components){
  //       const components = props.components;
       
  //       setComponents(components)
    
  //   }
  //   else{
        
  //       let components = []
  //       for (var i = 0; i < props.defaultComponentList.length; i++){
  //           components.push(
  //               {
  //                   name: props.defaultComponentList[i],
  //                   id: generateKey(props.defaultComponentList[i],i)
  //               })
  //       }
  //       setComponents(components)

  //   }

  // },[]);
  let borderColor = webStyle.colors[webStyle.componentStyles.all.borderColor]  
  let shadowColor = webStyle.colors[webStyle.componentStyles.all.shadowColor]
  let marginColor = webStyle.colors[webStyle.componentStyles.background.marginColor]  
  let backgroundColor = webStyle.colors[webStyle.componentStyles.background.backgroundColor]  

  let borderAndShadow = ""
  if (webStyle.componentStyles.all.borderSize!==0){
    borderAndShadow +=`${borderColor} 0px 1px ${webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${webStyle.componentStyles.all.borderSize}px, `
  }
  borderAndShadow += webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)

  return (
    <div style ={{backgroundColor:marginColor, marginTop:adminSettings.isShowEditor?"50px":""}}>
      <div id = "outerSection" className={"min-vh-100"+(localDisplaySettings.isMobile?" ":" container")} >
        <div 
          id = "innerSection"
          className={"col justify-items-baseline min-vh-100 pb-4 pt-5"} 
          style={{backgroundColor:backgroundColor,boxShadow:(webStyle.componentStyles.background.applyBackground?borderAndShadow:"none")}}
        >
          <NavigationBar
              key={"productManagerC"} id={"productManagerC"} index = {0} pageName = {"ProductManager"} pageID = {"ProductManager"}
              content = {{}} componentName = {"NavigationBar"} style={{ cursor: "auto"}}
          />
          <div className="d-flex flex-column">
            <h2 className="text-center mt-4">Product and Service Manager</h2>
            <div className="mb-3 px-5 flex-row d-flex justify-content-around">
              <div className="flex-column flex-grow-1 me-3">
                <label for="exampleFormControlInput1" class="form-label">Search by Product Name</label>
                <input class="form-control"type={"text"} value = {productSearchQuery} onChange = {evt=>setProductSearchQuery(evt.target.value)} placeholder = {"Type to filter products"}/>
              </div>
              <div className="flex-column flex-grow-1 ms-3" style={{alignSelf:"end"}}>
                <button className="btn btn-light" onClick={addNewProduct} >Create New Product</button>
              </div>
            </div>
            <hr/>
            {/* <span>{JSON.stringify(products)}</span> */}
            <div className="px-5 pt-3">
              {Object.keys(products).filter((product) =>
                  products[product].name.toUpperCase().includes(productSearchQuery.trim().toUpperCase())
              )
              .sort((productA, productB) =>
              productA.name > productB.name ? 1 : -1
              )
              .map((productID) => <Product 
                                    className = "mb-5" 
                                    key = {productID}
                                    product = {products[productID]} 
                                    productID = {productID} 
                                    adminSettings = {adminSettings} 
                                    webStyle = {webStyle} 
                                    setProductProperty = {setProductProperty}
                                    deleteProduct = {(id)=>deleteProduct(id)} 
                                  />
                    )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

function Product(props){
  
  const titleEditable = React.createRef();
  const descriptionEditable =  React.createRef();

  const [isShowButtons, showButtons] = useState(false)

  const borderColor = props.webStyle.colors[props.webStyle.componentStyles.all.borderColor]
  const borderShape = props.webStyle.componentStyles.all.borderShape
  const shadowColor = props.webStyle.colors[props.webStyle.componentStyles.all.shadowColor]
  let borderAndShadow = ""
  if (props.webStyle.componentStyles.all.borderSize!==0){
      borderAndShadow +=`${borderColor} 0px 1px ${props.webStyle.componentStyles.all.borderSize*2}px, ${borderColor} 0px 0px 0px ${props.webStyle.componentStyles.all.borderSize}px, `
      }
  borderAndShadow += props.webStyle.componentStyles.all.shadowStyle.replaceAll('C',shadowColor)


  return(

    <div 
      style={{...props.style,}}
      className={"text-center relative-div g-0 "+ props.className} data-no-dnd="true"
      onMouseEnter={() => {
        showButtons(true);
      }}
      onMouseLeave={() => {
        showButtons(false);
      }}
    >
      <div className='flex-row d-flex'>

        <div className='col me-3' >
          <PictureFrame
              adminSettings = {props.adminSettings} 
              webStyle = {props.webStyle} 
              // images = {images}
              imageContent = {props.product.imageContent} 
              id = {props.id+"picture"} 
              setImageContent = {(value)=>{props.setProductProperty(props.productID,"imageContent",value)}} 
              // setImageContent = {()=>{alert("Set image content")}} 
              isNested
          />
          {/* <img style={{minHeight:"100px", minWidth:"100px", backgroundColor:webStyle.colors.darkAccent}}/> */}
        </div>

        <div 
            className={'col ms-3 text-start py-3 px-4 flex-column d-flex relative-div '+borderShape} 
            style={{backgroundColor:props.webStyle.colors.lightShade, boxShadow: borderAndShadow}}   
        >  
          { isShowButtons &&
          <div className="relative">
            <button 
              className="me-2 mt-2 btn"
              onClick={()=>props.deleteProduct(props.productID)}
            >
              <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
          </div>
          }
          
          <ContentEditable
              className=' mb-0'
              //   style={{color:webStyle.colors[componentStyle.textColor]}}
              spellCheck = "false"
              innerRef={titleEditable}
              html={props.product.name} // innerHTML of the editable div
              onChange={evt=>props.setProductProperty(props.productID,"name",evt.target.value)} // handle innerHTML change
              tagName={'h2'} // Use a custom HTML tag (uses a div by default)
          /> 
          <input className="fw-bold form-control-plaintext fst-italic" style={{wordSpacing:".75em"}} value = {props.product.groups} onChange={evt=>props.setProductProperty(props.productID,"groups",evt.target.value)}/>
          <div className='input-group '>
              <span className='input-group-text bg-transparent border-0 ms-0 ps-0 pe-2'>$</span>
              <input className='form-control-plaintext no-arrows ms-3 w-75 py-0' type={"number"} onChange={evt=>props.setProductProperty(props.productID,"price",evt.target.value)} value={props.product.price}/>
          </div>
              
          <ContentEditable
            className=' mb-1 flex-row flex-grow-1'
            //   style={{color:webStyle.colors[componentStyle.textColor]}}
            spellCheck = "false"
            innerRef={descriptionEditable}
            html={props.product.description} // innerHTML of the editable div
            onChange={evt=>props.setProductProperty(props.productID,"description",evt.target.value)} // handle innerHTML change
            tagName={'p'} // Use a custom HTML tag (uses a div by default)
          /> 
          <button className='btn btn-outline-secondary my-2'>Add to cart</button>
        </div>
      </div>
    </div>
    )
  };
    
    