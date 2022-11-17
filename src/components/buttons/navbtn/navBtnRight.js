import { Box, Button, } from '@mui/material';
import React from 'react'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GiteIcon from '@mui/icons-material/Gite';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import CommonNavBtn from './commonNavBtn';



export default function NavBtnRight(props) {
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
      <CommonNavBtn 
      dyn_Color= {"#F9BC00"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={"ضرورت رشتہ"}  
      dyn_Value={""}
      FlexD={"column-reverse"} 
      dyn_endIcons={<Diversity1Icon/>}  />
      <CommonNavBtn 
      dyn_Color= {"#8446B2"} 
      dyn_Width={"100px"}
      dyn_height={"100px"} 
      dyn_btnText={"ٹرانسپورٹ"}  
      dyn_Value={""} 
      FlexD={"column-reverse"}
      dyn_endIcons={<LocalTaxiIcon/>}  />

      <CommonNavBtn 
      dyn_Color= {"#204D77"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={"موبائیل"}  
      dyn_Value={""} 
      FlexD={"column-reverse"}
      dyn_endIcons={<SmartphoneIcon/>}  />

      <CommonNavBtn dyn_Color= {"#7C7C7C"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={"گاڑیاں"}  
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<DirectionsCarIcon/>}  />

      <CommonNavBtn dyn_Color= {"#826409"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={"مکان"}  
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<GiteIcon/>}  />

      <CommonNavBtn dyn_Color= {"#C15811"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={"دکان "}  
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<StoreMallDirectoryIcon sx={{ml:1}}/>}  />

      <CommonNavBtn dyn_Color= {"#0773C0"} 
      dyn_Width={"100px"}
       dyn_height={"100px"} 
      dyn_btnText={" ذمین "}  
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<ApartmentIcon/>}  />

      <CommonNavBtn dyn_Color= {"#EDBD2B"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={" مشہورجگہ "} 
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<AddAPhotoIcon/>}  />

      <CommonNavBtn 
      dyn_Color= {"#112F6D"} 
      dyn_Width={"100px"} 
      dyn_height={"100px"} 
      dyn_btnText={" کتب خانہ "} 
      dyn_Value={" "}
      FlexD={"column-reverse"} 
      dyn_endIcons={<LocalLibraryIcon/>}  />
     </Box>
  )
}
