import { Box } from '@mui/system'
import React from 'react'

export default function MapGoogle() {
  return (
    <Box sx={mapStyle}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.73431278437604!2d67.35375724920635!3d24.86892417217729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3331717e1adcb%3A0xc33936eefc1f90f8!2sLogic%20Saint%20(Computer%20Institute%20%26%20Software%20House)!5e0!3m2!1sen!2s!4v1665752908230!5m2!1sen!2s" 
    width={"100%"} 
    height={"100%"} 
    style={{border: 0}} 
    allowFullScreen loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>  
    </Box>
   
  )
}



const mapStyle={
    width:"94%", 
    margin:"0 auto",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    '@media (min-width:480px)and (max-width:880px)' : {
       margin:"40px 0px 0px 0px !important",
       height:"270px",
      },
      '@media (min-width:280px)and (max-width:470px)' : {
        margin: "30px 0px 19px 0px!important",
        height: "258px",
      } 
  }