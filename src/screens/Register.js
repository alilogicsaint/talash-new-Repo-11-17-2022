import React from 'react'
import {Navbar} from "../components/navBar";
import { Grid,  Button, Box,} from '@mui/material';
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';
import HomeButton from '../components/buttons/homeButton';
import HeadingsMain from '../components/headings/heading';


export default function Register() {
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(e);
    }  
      
  return (
    <div >
    
    <Navbar />

    <Box sx={{
          height: 90,
        }}
    />

      <Grid item container xs={12} sm={12}  md={12} lg={12} direction="row" > 
     
      {/* button list 1 */}
   
      <Grid item  xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
      <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
      <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>

      {/* button list center 2 */}

      <Grid item container xs={12} sm={8} md={8}  lg={8} sx={{ mt:5, display: "flex", justifyContent: "center", }}  >
      
      <div className='registerFormContainer'>

      <div className='registerFormContainer_inner'>

      
      <Box sx={{
            display:"flex", 
            flexDirection:"column",
            height:'100%',justifyContent: "center", 
            alignContent: "center",
            alignItems: "center", }}>

        <div>
           <HeadingsMain h_vlaue={"Signup New Account"} h_urdu={""} />

           <div style={registerStyle.regSubHeading}>
               Select Account Category
           </div>
        </div>

       <Box sx={{ maxWidth:"570px" ,minWidth:"300px" , mt:1, display:"flex",flexDirection:"column"}}>
       
        <Button  
            value="/Customer_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", 
            m: 1, backgroundColor:"#77B550",
            '&:hover': { 
                    backgroundColor: '#77B550',
                    opacity: [0.9, 0.8, 0.7],} ,
                    fontFamily:"monospace" , 
                    fontSize:20, 
                    borderRadius:0 
            }}>
        Customer Account
        </Button>
        
        <Button  
            value="/business_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", 
                    m: 1, backgroundColor:"#FFC620",
                    '&:hover': { backgroundColor: '#FFC620', 
                    opacity: [0.9, 0.8, 0.7],} ,
                    fontFamily:"monospace" , 
                    fontSize:20, 
                    borderRadius:0 
            }}>

         Business Account
        </Button>
        
        <Button  
            value="/Agent_Account"
            onClick={(e)=>{handleClick(e.target.value)}}
            variant="contained"   
            sx={{... registerStyle.btn ,
                backgroundColor:"#F67C2A",
                '&:hover': {  backgroundColor: '#F67C2A',
                              opacity: [0.9, 0.8, 0.7],} 
        }}>
            Talaash Agent Account
        </Button>
            <Box  
                sx={{ 
                display:"flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center", 
                mt:1,  
             }} >

            <HomeButton/> 
            
            </Box>
        </Box>
        
         </Box>
        </div>
       </div>
    </Grid>
  
    <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>
  
      </Grid>
   
    <Footer/>
      </div>
  )
}


const registerStyle= {
    btn:{
        boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
        m: 1, 
        fontFamily:"monospace" , 
        fontSize:20, 
        borderRadius:0, 
    },
    regheading:{
        marginBottom:"50px", 
        fontSize:"40px", 
        textAlign:"center",
        fontWight:"bold",
    },
    regSubHeading:{
        marginBottom:"10px", 
        fontSize:"20px", 
        textAlign:"center" ,
        color:"red",
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
  
  
 