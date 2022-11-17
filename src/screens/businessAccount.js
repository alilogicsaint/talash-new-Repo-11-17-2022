import { Button, Grid,  TextareaAutosize, TextField, } from '@mui/material'
import React, { useState } from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { Navbar } from '../components/navBar';
import { Box } from '@mui/system'
import Footer from '../components/footer';
import MathValidation from '../components/MathValidation';
import HomeButton from '../components/buttons/homeButton';
import CommonBtn from '../components/buttons/Commonbtn';
import MySliderSWP from '../components/slider/slider';
import { ImageUpload } from '../components/imgUpandShow/uploadimage';
import profilePlaceholder from '../Assets/images/400X400placeholder.png'
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import HeadingsMain from '../components/headings/heading';
import SubHeadings from '../components/headings/subheading';

export default function BusinessAccount(props) {
  
  
  
   const [Fullname, setFullname] = useState('')
   const [LineNumber, setLinemumber] = useState()
   const [MobileNo, setMobileNo] = useState()
   const [WhatsappNo, setWhatsappNo] = useState()
  
   var data =[
      Fullname,
      LineNumber,
      MobileNo,
      WhatsappNo,
    ]
   function collectdata(){
    let send = data
    console.log(send)
   }
   
  return (
  <div>
    <head>
      <title>Home App</title>
    </head>

  <Navbar/>

  <Box sx={{
        height: 90,
      }}
    />


  <Grid container xs direction="row" > 
  <Grid item   xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
     <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
     <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>

   <Grid container xs={12} sm={8} md={8}  lg={7.9} sx={{ mt:5, display: "flex", justifyContent: "center", }}  > 

     <div style={{ textAlign:"center",width:"100%" }} >
      <HeadingsMain h_vlaue={"Business Account"} h_urdu={""} />
     </div>  
     <Grid item xs={12}  sm={12} md={6} lg={5}  
          direction="column" 
          sx={{display:"flex" , alignItems: "center", 
           }}>
          <Box sx={{ 
           display: "flex",
           flexDirection: "column",
           justifyContent: "space-between",
           margin: "5px 0px",
           width: "80%",
          }} >
          <Box  sx={{ 
            width:  "30vh",
            height: "30vh",
            margin: "0px 0px",   
            // border: "2px solid gray",
            boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)"           
          }} >

            <ImageUpload Cheight={"100%"} CWidth={"100%"} imgLink={profilePlaceholder} />
             
             </Box>

            <TextField 
                onChange={(e)=>{setFullname(e.target.value)}}
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }}  
                placeholder="Full Name"                          
                 />
            <TextField   
                onChange={(e)=>{setLinemumber(e.target.value)}}
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Land Line Number "      
             />
            <TextField  
                onChange={(e)=>{setMobileNo(e.target.value)}} 
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Mobile No"                  
             />
            <TextField  
                onChange={(e)=>{setWhatsappNo(e.target.value)}}  
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Whatsapp No"                 
             />
            <TextField
                onChange={(e)=>{setWhatsappNo(e.target.value)}}    
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Email Address"              
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Facebook ID "                 
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Instagram ID"                
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Country"                    
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="Province / Estate "     
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="City "                           
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}   
                color="warning" sx={myStyle.TextFieldsx} 
                inputProps={{style:myStyle.TextInSty }} 
                placeholder="UC/ VC/ Main Area "    
             />
            <TextField 
                onChange={(e)=>{setWhatsappNo(e.target.value)}}  
                color="warning" sx={myStyle.TextFieldsx}
                inputProps={{style:myStyle.TextInSty }}  
                placeholder="Nearest Famous Place "
             />
             <Box height={15} ></Box>
         <TextareaAutosize   
                minRows={3} 
                input 
                placeholder=" Street Address " 
                style={myStyle.textarea} 
             />
             <Box height={15} ></Box>
            <TextareaAutosize   
                minRows={4}   
                placeholder=" Google Maps Link  " 
                style={myStyle.textarea}  
             />
         </Box>
  </Grid>
    
  <Grid item  xs={12}  sm={12} md={6} lg={6} 
  direction="column" 
  sx={{display:"flex" , alignItems:"center",}}>
    
    <Box  sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height:"140px",
                width: "80%",
                margin: "10px 0px 22px 0px",
             }} >

    <TextField   
         color="warning"  
         inputProps={{style:myStyle.TextInSty }}  
         sx={myStyle.TextFieldsx } placeholder="CNIC" />
    <TextField   
         color="warning" 
         inputProps={{style:myStyle.TextInSty }}  
         sx={myStyle.TextFieldsx } 
         placeholder="CNIC Issue Date" />
    <TextField   color="warning" 
         inputProps={{style:myStyle.TextInSty }}
          sx={myStyle.TextFieldsx} 
         placeholder="CNIC Expiry Code" />
    <TextField  
         color="warning" 
         inputProps={{style:myStyle.TextInSty }}
          sx={myStyle.TextFieldsx}
         placeholder="Enter Admin Code" />

     </Box>
    <SubHeadings subheadingvlaue={"Business Pic Slide Show"} />
        
    <Box  sx={{ 
          width:"80%",
          height:"170px",
          margin:"0px 0px", 
          boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)" ,               
        }} ><MySliderSWP  /></Box> 
    <Box  sx={{ 
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          height:"120px",
          width: "80%",
          margin:"10px 0px",                
        }} >

        <TextField   
             color="warning"  
             inputProps={{style:myStyle.TextInSty }}  
             sx={myStyle.TextFieldsx } placeholder="User ID" />
        <TextField 
            color="warning" 
            inputProps={{style:myStyle.TextInSty }}  sx={myStyle.TextFieldsx} placeholder="Password" />
        <TextField   color="warning" 
            inputProps={{style:myStyle.TextInSty }}  sx={myStyle.TextFieldsx} 
            placeholder="Confirm Password" />
        
    </Box>

        <MathValidation/>
        
      <Box  sx={{ 
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "130px",
                margin: "22px 0px 0px 0px ",
                width: "80%",
                alignContent: "space-around",
                justifyContent: "space-between",
                
             }} >
        <Button 
           variant="contained"  
            onClick={collectdata()}
            sx={{backgroundColor:"#70B243",
            '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
             }}> Submit
        </Button>
          <CommonBtn color={"#FFC619"} link={"/Business_Account"} textvalue={"BusinessAccount"} widthval={"100%"} />     
          <CommonBtn color={"#F37825"} link={"/Customer_Account"} textvalue={"Customer Account"} widthval={"100%"} />
      </Box>

      <Box  sx={{ mt:1 }} >
          <HomeButton/>
      </Box> 
    </Grid>
      
      
  </Grid>
    
    
  <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
  <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>

    </Grid>
 
    <Footer/>

    </div>
  )
}




const myStyle={
  TextFieldsx:{
    mt:1, 
    boxShadow: 3 ,
    borderRadius:1,
    width:'100%'
  },
  TextInSty:{
    padding:"7px 10px", 
    fontSize:"14px"
  },
  textarea:{    
    border: "0px ",
    boxShadow: "rgb(0 0 0 / 43%) 0px 1px 6px 1px",
    width: "97%",
    margin: "0px 1px",
    borderRadius: "3px",
    outline: "none",
    height: "48px",
    padding: "5px"
  },
 commonBtns:{ 
       display: "inline-flex",
       flexDirection: "column",
       height: "130px",
       margin: "22px 0px 0px 0px ",
       width: "80%",
       alignContent: "space-around",
       justifyContent: "space-between",
 }
}



const sections={
  justifyContent: "space-between",
  margin:"40px 180px 0px 180px",
  boxShadow: "0px 2px 25px -13px rgba(0,0,0,0.62)",
  pl:3,
  pr:3,
  pt:3,
  pb:3,
  mt:5,
  
  '@media (min-width:480px)and (max-width:880px)' : {
    margin:"40px 10px 0px 10px !important",
  },
  '@media (min-width:280px)and (max-width:470px)' : {
    margin:"40px 10px 0px 10px !important",
  }
}

const hidbtnTabeMode={
  '@media (min-width:480px)and (max-width:880px)' : {
    display:"none",
  },
  '@media (min-width:280px)and (max-width:470px)' : {
    display:"none",
  } 
}


const hidbtnWebMode={
  '@media (min-width:880px)and (max-width:2470px)' : {
    display:"none"
  },
  '@media (min-width:280px)and (max-width:470px)' : {
    display:"none",
  } 
}

const hidbuttonMobile={
  '@media (min-width:880px)and (max-width:2470px)' : {
    display:"none"
  },
  '@media (min-width:480px)and (max-width:880px)' : {
    display:"none",
  },
} 


const sections3={
  margin:"40px 150px 0px 150px",
  '@media (min-width:480px)and (max-width:880px)' : {
    margin:"40px 10px 40px 10px !important",
  },
  '@media (min-width:280px)and (max-width:470px)' : {
    margin:"40px 40px 40px 40px !important",
  }
}
