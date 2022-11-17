import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { GiBlockHouse,GiTeacher, GiWantedReward } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import { FaChalkboardTeacher  } from "react-icons/fa";
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
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

export default function Mobilebtn() {


  return (
    <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
<CommonNavBtn 
    dyn_Color= {"#FFC294"} 
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"کاروبر"}  
    dyn_Value={"/Business_Entery"} 
    FlexD={"column-reverse"}
    dyn_endIcons={<BusinessIcon/>} 
    />
<CommonNavBtn 
    dyn_Color= {"#89CAFF"} 
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"کاریگر"}  
    dyn_Value={"/Expert_Entery"}
    FlexD={"column-reverse"}

    dyn_endIcons={<EngineeringIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#588539"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"مزدورہیلپر"}  
    dyn_Value={"/Helper_Entry"} 
    FlexD={"column-reverse"}
    dyn_endIcons={<HomeRepairServiceIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#AFBBCB"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"گھریلوسامان"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<GiBlockHouse/>}  />

<CommonNavBtn 
    dyn_Color= {"#FFC106"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"مالمویشی"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<SiHappycow/>}  />

<CommonNavBtn 
    dyn_Color= {"#06B354"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"عالم ومفتی"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<Person3SharpIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#0773C0"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"امام حافظ و قاری"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<FaChalkboardTeacher/>}  />

<CommonNavBtn 
    dyn_Color= {"#8446B2"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={"اساتزہکرام"} 
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<GiTeacher/>}  />

<CommonNavBtn 
    dyn_Color= {"#C70F0F"}
    dyn_Width={"90px"} dyn_height={"90px"} 
    dyn_btnText={" تلاش گمشدہ"} 
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<GiWantedReward/>}  
    />
{/* ReftBtns Start */}
<CommonNavBtn 
    dyn_Color= {"#F9BC00"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={"ضرورت رشتہ"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<Diversity1Icon/>}  />
<CommonNavBtn 
    dyn_Color= {"#8446B2"}
    dyn_Width={"90px"} 
    dyn_height={"90px"}               
    dyn_btnText={"ٹرانسپورٹ"}               
    dyn_Value={""} 
    FlexD={"column-reverse"}
    dyn_endIcons={<LocalTaxiIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#204D77"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={"موبائیل"}  
    dyn_Value={""} 
    FlexD={"column-reverse"}
    dyn_endIcons={<SmartphoneIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#7C7C7C"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={"گاڑیاں"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<DirectionsCarIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#826409"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={"مکان"}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<GiteIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#C15811"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={"دکان "}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<StoreMallDirectoryIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#0773C0"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={" ذمین "}  
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<ApartmentIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#EDBD2B"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={" مشہورجگہ "} 
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<AddAPhotoIcon/>}  />

<CommonNavBtn 
    dyn_Color= {"#112F6D"}
    dyn_Width={"90px"} 
    dyn_height={"90px"} 
    dyn_btnText={" کتب خانہ "} 
    dyn_Value={" "} 
    FlexD={"column-reverse"}
    dyn_endIcons={<LocalLibraryIcon/>}  />

    </div>
  )
}
