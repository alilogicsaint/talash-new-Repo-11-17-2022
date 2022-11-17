import { Box, Button, } from '@mui/material';
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher  } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import CommonNavBtn from './commonNavBtn';



export default function NavBtnLeft(props) {
    const Chwidth  = props.CHWidth;
  return (
    
    <Box
    orientation="vertical"
    sx={{
      display:"flex",
      justifyContent:"center", 
      flexDirection:"Column",
      width:Chwidth  
     }}>
      
      <CommonNavBtn dyn_Color= {"#FFC294"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"کاروبر"}  
                    dyn_Value={"/Business_Entery"} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<BusinessIcon/>}  />
      <CommonNavBtn dyn_Color= {"#89CAFF"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"کاریگر"}  
                    dyn_Value={"/Expert_Entery"} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<EngineeringIcon/>}  />

      <CommonNavBtn dyn_Color= {"#588539"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"مزدورہیلپر"}  
                    dyn_Value={"/Helper_Entry"} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<HomeRepairServiceIcon/>}  />

      <CommonNavBtn dyn_Color= {"#AFBBCB"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"گھریلوسامان"}  
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<GiBlockHouse/>}  />

      <CommonNavBtn dyn_Color= {"#FFC106"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"مالمویشی"}  
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<SiHappycow/>}  />

      <CommonNavBtn dyn_Color= {"#06B354"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"عالم ومفتی"}  
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<Person3SharpIcon/>}  />

      <CommonNavBtn dyn_Color= {"#0773C0"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"امام حافظ و قاری"}  
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<FaChalkboardTeacher/>}  />

      <CommonNavBtn dyn_Color= {"#8446B2"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={"اساتزہکرام"} 
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<GiTeacher/>}  />

      <CommonNavBtn dyn_Color= {"#C70F0F"} dyn_Width={"100px"} dyn_height={"100px"} 
                    dyn_btnText={" تلاش گمشدہ"} 
                    dyn_Value={""} 
                    FlexD={"column-reverse"}
                    dyn_endIcons={<GiWantedReward/>}  /> 
                    

                
     </Box>
  )
}
