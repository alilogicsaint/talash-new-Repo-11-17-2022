import { Button, Grid, TextareaAutosize, TextField, } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { Navbar } from '../components/navBar';
import { Box } from '@mui/system'
import Footer from '../components/footer';
import MathValidation from '../components/MathValidation';
import HomeButton from '../components/buttons/homeButton'
import CommonBtn from '../components/buttons/Commonbtn';
import profilePlaceholder from '../Assets/images/400X400placeholder.png'
import { ImageUpload } from '../components/imgUpandShow/uploadimage';
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import HeadingsMain from '../components/headings/heading';
import SubHeadings from '../components/headings/subheading';


export default function CustomerAccount() {

  
  return (
    <div>
    <Navbar />
    <Box sx={{
        height: 90,
      }}
    />



    <Grid container xs direction="row" > 
 
    <Grid item  xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
    <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>
    
    <Grid container xs={12} sm={8} md={8}  lg={7.9} sx={{ mt:5, display: "flex", justifyContent: "center", }}  > 

    <div style={{ textAlign:"center",width:"100%" }} >

    <HeadingsMain h_vlaue={"Customer Account"} h_urdu={""} />

    </div>
    <Grid item  xs={12}  sm={12} md={6} lg={5} 
    direction="column" 
    sx={{display:"flex" , alignItems: "center",  
    }}>
      
     <Box  sx={{ 
           display: "flex",
           flexDirection: "column",
           justifyContent: "space-between",
           margin: "5px 0px",
           width: "80%",
        }} >
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}}  
            placeholder="Full Name"              
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Land Line Number "      
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Mobile No"             
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Whatsapp No"            
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Email Address"
            type='email'         
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Facebook ID "           
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Instagram ID"          
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Country"               
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="Province / Estate "     
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="City "                 
         />
        <TextField color="warning"  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1}} 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            placeholder="UC/ VC/ Main Area "    
         />
        <TextField color="warning"  
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}} 
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1,mb:2 }}
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

    <Grid item xs={12}  sm={12} md={6} lg={6} 
         direction="column" 
         sx={{display:"flex" ,  alignItems: "center",  }}>

    <SubHeadings subheadingvlaue={"Profile Pic"} />
            
     

      <Box  sx={{ 
                width:  "30vh",
                height: "30vh",
                margin: "0px 0px",   
                // border: "2px solid gray",
                boxShadow: " 0px 2px 25px -13px rgba(0,0,0,0.62)",
                display:"flex",           
             }} >

             <ImageUpload Cheight={"100%"} CWidth={"100%"} imgLink={profilePlaceholder} />
            
             </Box>
             <p style={{fontSize:"10px",color: "#afaeae",margin:"5px auto"}} >click on image to upload profile, picture must be size 400x400  </p>
       
    <Box  sx={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height:"130px",
          width: "80%",
          margin: "18px 0px",                
        }} >

        <TextField   
             color="warning"  
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}}  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="User ID" />
        <TextField 
            color="warning" 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}}  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} placeholder="Password" />
        <TextField   color="warning" 
            inputProps={{style:{padding:"7px 10px", fontSize:"14px" }}}  
            sx={{ mt:1, boxShadow: 3 ,borderRadius:1 }} 
            placeholder="Confirm Password" />
        
    </Box>

        <MathValidation/>

        <Box  sx={myStyle.commonBtns} >
      <Button 
         variant="contained"  
         sx={{backgroundColor:"#70B243",
         '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
         }}> Submit
      </Button>
          <CommonBtn color={"#FFC619"} link={"/Business_Account"} textvalue={"Business Account"} widthval={"100%"} />     
          <CommonBtn color={"#F37825"} link={"/Agent_Account"} textvalue={"Agent Account"} widthval={"100%"} />
      </Box>

      <Box  sx={{ mt:1 }} >
          <HomeButton/>
      </Box> 
      <Box height={50} ></Box>
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
 