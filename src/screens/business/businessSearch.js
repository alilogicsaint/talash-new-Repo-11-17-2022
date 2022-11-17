import { Box, Grid, TextField,  } from '@mui/material'
import React from 'react'
import ButtonLeftlist from '../../components/buttons/buttonLeftlist'
import ButtonRightList from '../../components/buttons/buttonRightList'
import Footer from '../../components/footer'
import { Navbar } from '../../components/navBar'
import { useEffect} from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getTabledata} from '../../store/action'
import DataTableSearch from './components/dataTableSearch'
import HomeButton from '../../components/buttons/homeButton'
import Mobilebtn from '../../components/buttons/navbtn/mobilebtn'
import NavBtnLeft from '../../components/buttons/navbtn/navBtnLeft'
import NavBtnRight from '../../components/buttons/navbtn/navBtnRight'

import AdvertisBox from '../../components/AdvertisBox'
import HeadingsMain from '../../components/headings/heading'

export default function BusinessSearch(props) {


  console.log("this is Business props====>", props)

  const TabledataBusinessSearch = ["S.no",
    "Shop Name",
    "Main Category",
    "Sub Category",
    "Item Name",
    "Model",
    "Province",
    "City",
    "Uc/VC/M ain Areia"]
  const rowDdata=["ShopName","MainCategory","SubCategory","ItemName","Model","Province","City","UcMainArea"]
    
    const state = useSelector(state =>state)
    const dispatch = useDispatch()
    
    useEffect(()=>{
       dispatch(getTabledata())  
    },[]);



  return (
  
<>
    
    <Navbar   />
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
    <Grid item xs={12} sm={8}  md={7.9} lg={7.9}  >               
        <Grid item xs={12} sm={12} md={12}  lg={12} >
             <Box sx={{p:2 }} >
                
              <Grid xs item container direction="row" sx={{justifyContent: "center"}} >
                    <AdvertisBox  
                    Ads={"Advertisement"} 
                    d_Width={"100%"} 
                    d_height={"100px"} 
                    d_color={"#5B9BD5"}
                    />
                    <div  style={mystyle.heading} >
                    <HeadingsMain h_vlaue={"Business Search"} h_urdu={" "} />
                       
                    </div>
                  <Box sx={{ display:"flex", justifyContent:"center",width:"100%" ,flexWrap:"wrap",ml:15,mr:15}}>
                  
                  <Grid xs direction="column"   >
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="shop Name" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Hardware" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Hammers" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Item Name" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Model" 
                         sx={mystyle.textfiedld} />
                  </Grid>

                  <Grid xs direction="column"  >
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Province / Estate" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Chakwal" 
                         sx={mystyle.textfiedld} />
                      <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="UC/ VC/ Main Area" 
                         sx={mystyle.textfiedld} />
                  </Grid> 

                  </Box>

              </Grid>

             </Box>
         </Grid>
    </Grid>
    <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>
 
   <Grid  item xs={12} sm={12}  md={12}  lg={12} sx={sections}>
   
                      <div  style={mystyle.heading} >
                      <HeadingsMain h_vlaue={"Search Result"} h_urdu={" "} />
                       
                      </div>
   <Box sx={{ display:"flex", justifyContent:"center",width:"100%",}}>
       <DataTableSearch data={TabledataBusinessSearch} tabledata={state} forRowData={rowDdata} />
   </Box> 
          
   </Grid>
     
  </Grid >
  <Grid item xs={12} sm={12}  md={12}  lg={12} sx={sections3} >

   <HomeButton/>  
  </Grid>
    
<Footer/>
          
      </>

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
        fontSize:"28px",
        padding:"5px",
        alignItems: "flex-end",
        justifyContent:"center"
    },
    img2:{
        width:"94%",
        height:"94%",
        padding: "10px",
    },
    htag:{
        margin:"0 auto"
    },
    htag2:{
      margin:"0 auto",
      fontSize:"28px",
  },
  textfiedld:{
     m:1,
     borderRadius:1 ,
     minWidth:"280px",  
     maxWidth:"320px",
  }
}

const inputstyle = {
    padding:"6px 10px", fontSize:"14px" , 
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
    margin:"40px 10px 40px 10px !important",
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