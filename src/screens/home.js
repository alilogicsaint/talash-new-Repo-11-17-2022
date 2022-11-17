import { Grid,  Button,ButtonGroup, Box,} from '@mui/material';
import {Navbar} from "../components/navBar";
import ButtonLeftlist from '../components/buttons/buttonLeftlist'
import ButtonRightList from '../components/buttons/buttonRightList'
import CenterButton from "../components/buttons/CenterButton";
import Footer from "../components/footer";
import NavBtnLeft from '../components/buttons/navbtn/navBtnLeft';
import Mobilebtn from '../components/buttons/navbtn/mobilebtn';
import NavBtnRight from '../components/buttons/navbtn/navBtnRight';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function Home(props) {
  // const state = useSelector(state =>state)
  // const [users, setusers] = useState()
  // const logindata= state.login 
  console.log("homeProps:",props)
  return (
  <div >
    
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

    <Grid item container xs={12} sm={8} md={8}  lg={7.9} sx={{ mt:5, display: "flex", justifyContent: "center", }}  >
          <CenterButton/>
    </Grid>

    {/* button list center 3 */}

    <Grid item xs={6} sm={2} md={2}  lg={2}  sx={hidbtnTabeMode}> <ButtonRightList/>  </Grid>
    <Grid item  xs={6} sm={2} md={2}  lg={2} sx={hidbtnWebMode}> <NavBtnRight/>  </Grid>

    </Grid>
  
    <div>
    <h1>Clients</h1>
            {/* { users.map((users, index) => {
                return (
                    <div className="client" key={index}>
                        {users.name}<br />
                        {users.email}<br />
                        <hr />
                    </div>
                )
            })} */}
    </div>
  
    <Footer/>
    </div>
  )
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


