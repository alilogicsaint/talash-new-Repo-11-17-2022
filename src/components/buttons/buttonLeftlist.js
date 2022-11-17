
import { Box, Button, } from '@mui/material';
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher  } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import { useNavigate } from 'react-router';
import CommonRowBtn from './L_R_ComonBtn';



export default function ButtonLeftlist(props) {
   const Chwidth  = props.CHWidth;
   
  //  const navigate = useNavigate();
  // function handleClick(e) {
   
  //   navigate(e);
  // } 
  
  return (
    
    <Box
    orientation="vertical"
    sx={{ml:1,
      display:"flex",
      justifyContent:"center", 
      flexDirection:"Column",
      width:Chwidth  
     }}>

           <CommonRowBtn dyn_Color= {"#FFC294"} dyn_Width={"90%"} dyn_height={"100%"} 
           dyn_btnText={"کاروبر"}  
           dyn_Value={"/Business_Entery"} 
           FlexD={"row"}
           dyn_endIcons={<BusinessIcon/>}  />
           
           
           <CommonRowBtn dyn_Color= {"#89CAFF"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"کاریگر"}  
                    dyn_Value={"/Expert_Entery"} 
                    FlexD={"row"}
                    dyn_endIcons={<EngineeringIcon/>}  />

      <CommonRowBtn dyn_Color= {"#588539"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"مزدورہیلپر"}  
                    dyn_Value={"/Helper_Entry"} 
                    FlexD={"row"}
                    dyn_endIcons={<HomeRepairServiceIcon/>}  />

      <CommonRowBtn dyn_Color= {"#AFBBCB"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"گھریلوسامان"}  
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<GiBlockHouse/>}  />

      <CommonRowBtn dyn_Color= {"#FFC106"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"مالمویشی"}  
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<SiHappycow/>}  />

      <CommonRowBtn dyn_Color= {"#06B354"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"عالم ومفتی"}  
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<Person3SharpIcon/>}  />

      <CommonRowBtn dyn_Color= {"#0773C0"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"امام حافظ و قاری"}  
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<FaChalkboardTeacher/>}  />

      <CommonRowBtn dyn_Color= {"#8446B2"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={"اساتزہکرام"} 
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<GiTeacher/>}  />

      <CommonRowBtn dyn_Color= {"#C70F0F"} dyn_Width={"90%"} dyn_height={"100%"} 
                    dyn_btnText={" تلاش گمشدہ"} 
                    dyn_Value={" "} 
                    FlexD={"row"}
                    dyn_endIcons={<GiWantedReward/>}  /> 
         </Box>    
        
     
  )
}




const btnsleft={
  common:{
    fontFamily:"'Noto Nastaliq Urdu', serif;", 
    boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)", m: 1 , justifyContent:"space-between"   , 
  }
}