import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

export default function CommonBtn(props) {
   
    const Color = props.color
    const value = props.link
    const text = props.textvalue
    const valwidth =props.widthval

    const navigate = useNavigate();

    function handleClick(e) {
      navigate(e);
    } 
  return (
    <Box sx={{width:valwidth}}>
        <Button 
          size='large'
          variant="contained"
          fullWidth  
          value={value}
          onClick={(e)=>{handleClick(e.target.value)}}
          sx={{ fontSize:'14px',
               backgroundColor:Color,
              '&:hover': { backgroundColor: Color, opacity: [0.9, 0.8, 0.7],  },
            }}> {text}
       </Button>
    </Box>
  )
}


