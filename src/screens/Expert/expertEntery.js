import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../../components/buttons/buttonLeftlist'
import ButtonRightList from '../../components/buttons/buttonRightList'
import CommonBtn from '../../components/buttons/Commonbtn'
import HomeButton from '../../components/buttons/homeButton'
import Mobilebtn from '../../components/buttons/navbtn/mobilebtn'
import NavBtnLeft from '../../components/buttons/navbtn/navBtnLeft'
import NavBtnRight from '../../components/buttons/navbtn/navBtnRight'
import HeadingsMain from '../../components/headings/heading'
import SubHeadings from '../../components/headings/subheading'
import MapGoogle from '../../components/map'
import { Navbar } from '../../components/navBar'
import AddItem_Expert_entry from './components/AddItem_Expert_entry'
import DataTable from './components/datatableEntery'

export default function ExpertEntry() {

//   const TabledataBusinessSearch = ["S.no",
//   "Shop Name",
//   "Main Category",
//   "Sub Category",
//   "Item Name",
//   "Model",
//   "Province",
//   "City",
//   "Uc/VC/M ain Areia"]
// const rowDdata=["ShopName","MainCategory","SubCategory","ItemName","Model","Province","City","UcMainArea"]
  
//   const state = useSelector(state =>state)
//   const dispatch = useDispatch()
  
//   useEffect(()=>{
//      dispatch(getTabledata())  
//   },[]);
  return (
    <div>
    
    <Navbar />

    <Box sx={{
        height: 90,
      }}
    />

        
    <Grid container  xs={12} sm={12}  md={12}  lg={12} >
        
    <Grid item  xs={6} sm={0} md={2}  lg={2} sx={hidbtnTabeMode}> <ButtonLeftlist/> </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnLeft/>  </Grid>
    <Grid item  xs={12} sm={12} md={2}  lg={2} sx={hidbuttonMobile}> <Mobilebtn/>  </Grid>

    <Grid container xs={12} sm={8} md={8}  lg={7.9} sx={{mt:5 }}  > 

    <Box sx={{ml:1, mr:1, boxShadow: "0px 2px 25px -13px rgba(0,0,0,0.62)", display:"flex", flexWrap:'wrap' ,p:1, alignContent: "flex-start" }}>
      
    <HeadingsMain h_vlaue={"Expert "} h_urdu={" (کاریگر) "} />
        
           


         <Grid item xs={12} sm={12} md={7}  lg={7} >
          <Box sx={{p:1 }} >
                <Box sx={{ display:"flex", justifyContent:"center",width:"100%" ,flexWrap: "wrap", }}>
                <img style={mystyle.img} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />                   
                <div  style={mystyle.heading} >
                <SubHeadings subheadingvlaue={"Mani Fani Food Point"} />
                </div>
                </Box>
             <Grid  item container direction="row"  sx={{p:1,mt:1 }}>
                <Grid xs direction="column"  >
                     <Typography>name</Typography>
                     <Typography>number</Typography>
                     <Typography>watsapp</Typography>
                     <Typography>email</Typography>
                     <Typography>facebook</Typography>
                     <Typography>instagram</Typography>
                </Grid>
                <Grid xs direction="column"  >
                     <Typography>country</Typography>
                     <Typography>state</Typography>
                     <Typography>U / VC/ Main Area </Typography>
                     <Typography>famous</Typography>
                     <Typography>address</Typography>
                 </Grid> 
             </Grid>
          </Box>
        </Grid>
        

        <Grid item xs={12} sm={12}  md={5}  lg={5} >
             
      <Box sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              }}>
                 <div>
                 <img style={mystyle.img2} src="https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png" />
                 </div>
                 <MapGoogle/>
             </Box>
        </Grid>

    </Box>
          
    </Grid>

    <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>
     
    </Grid>

    {/* section 2 */}
       
    <Grid item xs={12} sm={12}  md={12}  lg={12} sx={sections} >
              <div style={mystyle.heading}>
                <h1 style={mystyle.htag} >
                <HeadingsMain h_vlaue={"Add New Item"} h_urdu={" "} />
                    
                </h1>
              </div>
             <Box >
              <AddItem_Expert_entry/>
             </Box>
    </Grid>
        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={sections}>
        <div style={mystyle.heading}>
                <h1 style={mystyle.htag} >
                <HeadingsMain h_vlaue={"  Existing Items Data"} h_urdu={" "} />
                 
                  
                </h1>
              </div>
             <Box >
              <DataTable/>
             </Box>
        </Grid>


        <Grid item xs={12} sm={12}  md={12}  lg={12} sx={sections3} >
         <Box sx={{display:"flex", justifyContent:"center", width:"100%",flexWrap:"wrap-reverse",height:"140px" }}>
          <HomeButton widthVal={"150px"} /> 
          <Box sx={{width:"5px"}}></Box> 
          <CommonBtn color={"#72B347"} link={"/Business_Search"} textvalue={"next page"} widthval={"200px"} />
          <Box sx={{width:"5px"}}></Box>
          <CommonBtn color={"#EDBD2B"} link={"/"} textvalue={"Add New Item"} widthval={"200px"} /> 
          <Box sx={{width:"5px"}}></Box>
         </Box> 
    </Grid>
       
    
          
    </div>
  )
}

const mystyle = {
  img:{
      width:"40%",
      height:"40%",
      padding: "10px",
  },

  heading:{
      display:"flex",
      fontSize:"15px",
      padding:"5px",
      alignItems: "flex-end",
  },
  img2:{
      width:"94%",
      height:"80%",
      padding: "10px",
  },
  htag:{
      margin:" 10px auto"
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



