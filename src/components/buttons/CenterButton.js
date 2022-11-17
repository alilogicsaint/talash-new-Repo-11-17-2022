import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import CommonBtn from './Commonbtn';

export default function CenterButton() {

    const navigate = useNavigate();

    function handleClick(e) {
      navigate(e);
    }  
   


  return (
    <div className="" style={{textAlign:"center",}}>
    <ButtonGroup
       orientation="vertical"
       sx={{width:"330px" ,mt:8 }}
      >
        <Button 
        variant="contained"   
        sx={CenterBtbStyke.btnSearch}>
          Search</Button>
        <Button 
        variant="contained"  
        value="/" 
        onClick={(e)=>{handleClick(e.target.value)}}  
        sx={CenterBtbStyke.btnEnter}>
          Enter Your Data</Button>
        <Button 
        variant="contained"   
        value="/login"
        onClick={(e)=>{handleClick(e.target.value)}}
        sx={CenterBtbStyke.btnlogin}>
          Login</Button>
        <Button 
        variant="contained" 
        value="/register"
        onClick={(e)=>{handleClick(e.target.value)}}  
        sx={CenterBtbStyke.btnSignup}>
          Signup</Button>   
        <Button 
        variant="contained"   
        sx={CenterBtbStyke.btnSubscription}>
          Subscription Plans</Button>
        <Button 
        variant="contained"   
        sx={CenterBtbStyke.btnContact}>
          Contact us</Button>
    </ButtonGroup>
  </div>
  )
}


const CenterBtbStyke={
    
    btnSearch:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#F57A27",'&:hover': { backgroundColor: '#F57A27', opacity: [0.9, 0.8, 0.7],} ,fontFamily:"monospace" , fontSize:20, borderRadius:0 },

    btnEnter:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#4071CA",'&:hover': { backgroundColor: '#4071CA', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 },

    btnlogin:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#70B244",'&:hover': { backgroundColor: '#70B244', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 },

    btnSignup:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#F8C200",'&:hover': { backgroundColor: '#F8C200', opacity: [0.9, 0.8, 0.7], } ,fontFamily:"monospace" , fontSize:20 },

    btnSubscription:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#A6A6A6",'&:hover': { backgroundColor: '#A6A6A6', opacity: [0.9, 0.8, 0.7],} , fontFamily:"monospace" , fontSize:20, },

    btnContact:{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1, backgroundColor:"#5D9EDB",'&:hover': { backgroundColor: '#5D9EDB', opacity: [0.9, 0.8, 0.7],} ,fontFamily:"monospace" , fontSize:20 , borderRadius: 0, },

}