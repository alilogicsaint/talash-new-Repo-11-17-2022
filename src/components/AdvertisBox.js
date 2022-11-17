import { Box } from '@mui/material'
import React from 'react'

export default function AdvertisBox(props) {
    const Advertisement = props.Ads
    const d_Width  = props.d_Width
    const d_height = props.d_height
    const d_color  = props.d_color
  
  return (
    <Box  
    sx={{width:d_Width,
     height:d_height,
     display:'flex',
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:d_color}}>
     {Advertisement}
    </Box>
  )
}
