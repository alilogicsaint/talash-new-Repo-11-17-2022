// import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled';
import { AppBar,  Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import '../App.css'
// import Head from 'next/head';

// const NavbarRoot = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#F47926",
//   boxShadow: theme.shadows[3],
//   justifyContent: "center",
//   position:'static'
  
// }));

export const Navbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <div style={{display: "flex",
      justifyContent: "flex-end",}}>
      <AppBar
        sx={{ 
          width: "100%",
          height:"90px",
          backgroundColor:"#F57D2E"
        }}
        {...other}>
      <Toolbar
        disableGutters
        sx={{left: 0, px: 3}}
        backgroundColor={{  backgroundColor:"#ffff", }}
      >
          <Link to="/"  style={{color:"white",textDecoration: "none" }}>
          <div style={{display:'flex',alignItems:"flex-end",}}>
            <p className="headingLogo" >Talash</p><p className='subLogo' >.com</p> 
           </div>
          </Link>
           
          <Box sx={{ flexGrow: 1 }} /> 
          <Link  to="/"    style={{color:"white",textDecoration: "none"}}  >
           <div style={navBarStyle.headingDiv}>
           <p className='subLogo' > سب کی سب کیلیے </p><p className='headingLogo'>تلاش </p> 
           </div>
          </Link>
          
      </Toolbar>
    </AppBar>
    </div>
  );
}


const navBarStyle = {
  headingDiv:{
  display:'flex',
  alignItems:"flex-end",
  fontFamily:"'Noto Nastaliq Urdu', serif" ,
  fontWeight:300,
  height:90
  },
  
  
}
