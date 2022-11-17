import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ImageUpload } from '../../../components/imgUpandShow/uploadimage'
import profilePlaceholder from '../../../Assets/images/400X400placeholder.png'

export default function AddItem_Business_entry() {
  return (
   <div>
   <Grid item container xs={12}  sx={{justifyContent:"space-around"}}>

   <Grid xs={12}  sm={6} md={6} lg={3}>
      <Box  sx={{width:"94%",padding:"10px" }}>
          <TextField 
             fullWidth  
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}}
             placeholder="Main Category"              
          />
          <TextField   
             fullWidth 
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}}
             placeholder="Sub Category"      
          />
          <TextField  
             fullWidth  
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}}
             placeholder="Item Name"             
          />
   </Box>
   </Grid>
   
   <Grid xs={12}  sm={6} md={6} lg={3}>
   <Box  sx={{width:"94%",padding:"10px" }}>
          <TextField  
             fullWidth  
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}} 
             placeholder=" Model"              
          />
          <TextField  
             fullWidth  
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}} 
             placeholder="Price"      
          />
          <TextField 
             fullWidth   
             color="warning"  
             sx={{ mt:1, boxShadow: 3 ,borderRadius:1  }} 
             inputProps={{style:{padding:"7px 10px", fontSize:"14px" , }}} 
             placeholder="Location in Shop"             
          />
   </Box>
   </Grid>
   
   <Grid xs={12}  sm={6} md={6} lg={3} >
       <Box sx={{
           margin:"0px 10px 0px 10px"

       }}>
          <Box  sx={{ 
               width:"100%",
               height:"140px",       
               display: "flex",
                 alignContent: "center",
                 alignItems: "center",   
               // border: "2px solid gray",
               boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"           
            }} >

           <ImageUpload Cheight={"100%"} CWidth={"100%"} imgLink={"https://new.kani.ge/upload/noimage.jpg"}  objectFit={"cover"}  />
            
            </Box>
       </Box>
   </Grid>

   
   <Grid xs={12}  sm={6} md={6} lg={3}
        sx={{
           display:'flex',
           flexDirection:"column", 
           justifyContent: "center",           
    }}
   >
       <Box sx={{
              display:'flex',
              flexDirection:"column",
              padding:"10px"
       }}>
       <Button 
        variant="contained"  
        sx={{
        backgroundColor:"#70B243",
        m:"15px",
        '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
        }}> Submit
       </Button>
       <Button 
        variant="contained"  
        sx={{backgroundColor:"#70B243",
        m:"15px",
        '&:hover': { backgroundColor: '#70B243', opacity: [0.9, 0.8, 0.7],},
        }}> save
     </Button>
       </Box>
   </Grid>
   
</Grid>
   </div>
  )
}
