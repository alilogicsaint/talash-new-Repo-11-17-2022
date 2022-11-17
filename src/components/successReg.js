import { Box } from '@mui/material'
import React from 'react'
import'../App.css'
import CommonBtn from './buttons/Commonbtn'
import image from '../Assets/images/sucess1.gif'


export default function SuccessReg() {
  return (
    <div>
        <div className='LoginFormContainer'>
           <div className='successContainer'>
                <div className='successImage'>
                    <img  src={image} />
                </div> 
              <h1> Success</h1>
              <p>
               congratulations you are now  registered <br></br>continue for login      
              </p>
              <div>
              <Box sx={{width:"5px"}}></Box> 
              <CommonBtn color={"#72B347"} link={"/Login"} textvalue={"Login"} widthval={"200px"} />
              </div>
           </div>
        </div>
    </div>
  )
}


