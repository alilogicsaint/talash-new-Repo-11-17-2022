import React from 'react'
import '../../App.css';

export default function HeadingsMain(props) {
   
    const headingvlaue= props.h_vlaue
    const headingurdu= props.h_urdu

  return (
    <div style={{display:"flex", width:"100%" ,justifyContent:"center"}}>
         <p className="mainheading" >
            {headingvlaue}
         </p>
         <p className="mainheadingurdu" >
            {headingurdu}
         </p>
         
    </div>
        
    
  )
}



