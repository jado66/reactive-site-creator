
import Website from './lib/components/Website';
import { useEffect, useState } from 'react'

const componentOptions = {
  TestComponent: {
    componentName: "Test Component",
    component: (props) => {
      return(
        <div className='mt-3' style = {{...props.style, width:`50%`, margin:"25px auto"}} data-no-dnd = "true">
          <div className='row text-center' style={{justifyContent:"space-around"}}>
            <span>Test Component</span>
          </div>
        </div>
        )
    },
    isNestedComponent: false
  }
}

function App() {
  const [isAuthenticated, setIsAthenticated] = useState(false)

  useEffect(() => {
    async function fetchMyAPI() {
      checkIP().then(response =>{
        setIsAthenticated(true)
        // alert(response)

      })
    }

    fetchMyAPI()
  },[]);

  return (
    <Website
      // siteName = {"Jadon's Site"}
      isAdmin = {isAuthenticated}
      // basename = {"/site-creator"}
      componentOptions = {componentOptions} 

      customShadowStyles = {
        [
          {
            label:"Custom Styles",
            options: [
              {value:`C4d 0px 0px 0px 3px`, label: "Box1"}
            ]
          }
        ]

      }
    />
  );
}

export async function checkIP(){
  try{
    const response = await fetch("https://ipinfo.io/json").then(j=>j.json()) 
    
    return response.ip === '74.96.171.159'
  }
  catch (err) {
    alert(err)
    return false
   }
  
}

export default App;

