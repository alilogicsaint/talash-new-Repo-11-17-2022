import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate, useNavigate, } from "react-router-dom";
import AgentAccount from "./screens/AgentAccount";
import BusinessAccount from "./screens/businessAccount";
import BusinessEntery from "./screens/business/BusinessEntery";
import CustomerAccount from "./screens/customerAccount";
import Home from "./screens/home";
import Register from "./screens/Register";
import  store  from './store/index';
import { Provider, useSelector } from 'react-redux';
import ExpertSearch from "./screens/Expert/expertSearch";
import ExpertEntry from "./screens/Expert/expertEntery";
import HelperEntry from "./screens/laberHelper/HelperEntery";
import HelperSearch from "./screens/laberHelper/HelperSearch";
import Login from "./screens/login";
import BusinessSearch from './screens/business/businessSearch'
import './App.css'


export default function BasicExample() {
  //  const navigate = useNavigate();
   const [isAuthenticated, setIsAuthenticated] = useState(false) 
   const [token, settoken] = useState() 
  
function authenticate(token) {
    setIsAuthenticated(true)
    settoken(token)
} 

function logout(){
    setIsAuthenticated(false)
    settoken("")
}
 
 function RequireAuth({ children ,isAuthenticated, token,redirectTo,  ...rest  }) {
  console.log("children===>",children)
 return children.props.isAuthenticated ? children :  <Navigate to={redirectTo} />
}

 
  return (
    <Provider store={store}>
    
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="business_Account" element={<BusinessAccount/>} />
      <Route path="register" element={<Register/>} />
      <Route path="Customer_Account" element={<CustomerAccount/>} />
      <Route path="Agent_Account" element={<AgentAccount/>} />
      {/* <Route path="Enter" element={<BusinessEntery/>} /> */}
      <Route path="Business_Entery" element={<BusinessEntery/>} />
      <Route path="Business_Search" element={<BusinessSearch/>} />
      <Route path="Expert_Entery" element={<ExpertEntry/>} />
      <Route path="Expert_Search" element={<ExpertSearch/>} />
      <Route path="Helper_Entry"  element={<HelperEntry/>} />
      <Route path="Helper_Search" element={<HelperSearch/>} />
      <Route path="Login" element={ <Login authenticate={(e)=>authenticate(e)} isAuthenticated={isAuthenticated} logout={()=>logout()} />} />
      
      <Route
          path="/"
          element={
            <RequireAuth redirectTo="/login">
             <Home isAuthenticated={isAuthenticated} token={token} />
            </RequireAuth>
           
          }
        />
      
   
    </Routes>
    
  </Provider>
  );
};



