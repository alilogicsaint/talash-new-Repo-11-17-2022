import React from 'react'
import '../../App.css';

export default function SubHeadings(props) {
    const headingvlaue= props.subheadingvlaue
  return (
    <div>
         <p  className="subHeading" >
            {headingvlaue}
         </p>
    </div>
  )
}