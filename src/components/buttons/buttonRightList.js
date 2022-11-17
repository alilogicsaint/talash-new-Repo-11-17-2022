
import {Box, Button,ButtonGroup, } from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GiteIcon from '@mui/icons-material/Gite';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import CommonRowBtn from './L_R_ComonBtn';


export default function ButtonRightList() {
  return (
   
        <Box
           orientation="vertical"
           sx={{
             mr:1,
             display:"flex", 
             flexDirection:"column",
             justifyContent:"center",
             width:"100%" 
            }} >
           
            <CommonRowBtn 
      dyn_Color= {"#F9BC00"} 
      dyn_Width={"90%"} dyn_height={"100%"}
      dyn_btnText={"ضرورت رشتہ"}  
      dyn_Value={""}
      FlexD={"row-reverse"} 
      dyn_endIcons={<Diversity1Icon/>}/>
           
           <CommonRowBtn 
      dyn_Color= {"#8446B2"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={"ٹرانسپورٹ"}  
      dyn_Value={""} 
      FlexD={"row-reverse"}
      dyn_endIcons={<LocalTaxiIcon/>}  />

      <CommonRowBtn 
      dyn_Color= {"#204D77"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={"موبائیل"}  
      dyn_Value={""} 
      FlexD={"row-reverse"}
      dyn_endIcons={<SmartphoneIcon/>}  />

      <CommonRowBtn dyn_Color= {"#7C7C7C"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={"گاڑیاں"}  
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<DirectionsCarIcon/>}  />

      <CommonRowBtn dyn_Color= {"#826409"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={"مکان"}  
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<GiteIcon/>}  />

      <CommonRowBtn dyn_Color= {"#C15811"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={"دکان "}  
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<StoreMallDirectoryIcon sx={{ml:1}}/>}  />

      <CommonRowBtn dyn_Color= {"#0773C0"} 
       dyn_Width={"90%"} dyn_height={"100%"}
      dyn_btnText={" ذمین "}  
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<ApartmentIcon/>}  />

      <CommonRowBtn dyn_Color= {"#EDBD2B"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={" مشہورجگہ "} 
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<AddAPhotoIcon/>}  />

      <CommonRowBtn 
      dyn_Color= {"#112F6D"} 
       dyn_Width={"90%"} dyn_height={"100%"} 
      dyn_btnText={" کتب خانہ "} 
      dyn_Value={" "}
      FlexD={"row-reverse"} 
      dyn_endIcons={<LocalLibraryIcon/>}  />
          </Box>
        
  )
}


const btnsleft={
  common:{
    fontFamily:"'Noto Nastaliq Urdu', serif;", 
    boxShadow: "2px 2px 30px -13px rgba(0,0,0,1)",
    m: 1 ,
    justifyContent:"space-between"   , 
  }
}