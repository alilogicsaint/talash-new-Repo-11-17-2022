import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React, { useEffect } from 'react'
import {Navbar} from "../../components/navBar";
import ButtonLeftlist from '../../components/buttons/buttonLeftlist'
import ButtonRightList from '../../components/buttons/buttonRightList';
import HomeButton from '../../components/buttons/homeButton';
import Footer from '../../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import ExpertSearchTabl from './components/dataTableSearch';
import { getTabledata } from '../../store/action';




export default function ExpertSearch() {

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
  <Grid item xs={12} sm={3}  md={2} lg={2}  >
      <ButtonLeftlist/>
  </Grid> 

    {/* button list center 2 */}
  <Grid item xs={12} sm={6}  md={7} lg={7.9}  >               
      <Grid item xs={12} sm={12} md={4}  lg={12} >
           <Box sx={{p:2 , pl:20,pr:20 }} >
              <Box sx={{ display:"flex", justifyContent:"center",width:"100%" }}>
                  <div  style={mystyle.heading} >
                      <h2 style={mystyle.htag}>Expert Search</h2>
                  </div>
               </Box>
              <Grid  item container direction="row"  >
                <Grid xs direction="column" sx={{p:2 }}  >
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    </Grid>
                    <Grid xs direction="column" sx={{p:2 }} >
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    <TextField fullWidth  color="warning" inputProps={{style:inputstyle}}  placeholder="Full Name" 
                       sx={{ mt:1, boxShadow: 3 ,borderRadius:1 ,p:0 }} />
                    </Grid> 
              </Grid>
         
              <Box sx={{ display:"flex", justifyContent:"center",width:"100%",pt:20 }}>
                    <div  style={mystyle.heading} >
                      <h2 style={mystyle.htag2}>Search Result</h2>
                    </div>
              </Box>          
           </Box>
       </Grid>
  </Grid>

    <Grid item xs={12} sm={3}  md={2} lg={2}   >
         <ButtonRightList/>
    </Grid>
 
 <Grid item xs={12} sm={12}  md={12} lg={12}  sx={{margin:"0px 150px"}}>
         <ExpertSearchTabl data={TabledataBusinessSearch} tabledata={state} forRowData={rowDdata} />
 </Grid>

   
</Grid>
<Grid item xs={12} sm={12}  md={12}  lg={12} sx={{margin:"20px 150px 40px 150px"}} >
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
}
}



const inputstyle = {
  padding:"6px 10px", fontSize:"14px" , 
}