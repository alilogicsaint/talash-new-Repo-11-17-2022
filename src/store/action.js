import { Token } from "@mui/icons-material";
import axios from "axios"
import { Navigate, redirect, useNavigate } from "react-router-dom";





const RegisterAgent=(user)=>{

   return async (dispatch) => {  
      await axios.post(`${process.env.REACT_APP_API}register`, {
         name:user.name,
         email:user.email,
         password:user.password,
      }).then(function (response) {
         dispatch({type:"REGISTERDATA", user:response.data} )
      })
       .catch(err => console.error(err.message));
      };
 }

const LoginUser=(token)=>{
   return (dispatch) => { 
   dispatch({type:"LOGINDATA", user:token})   
   };
 }
 
// firebase APIS____________________________________________________________________________
const getdata=()=>{
    return async (dispatch) => {       
    await axios.get('https://test-api-for-data-default-rtdb.firebaseio.com/user.json')
    .then(function (response) {
     
    dispatch({type:"GETDATA", user:response.data})
     })
     .catch(err => console.error(err.message));
    };
 }

const getTabledata =()=>  {
   return async (dispatch) => {       
   await axios.get('https://test-api-for-data-default-rtdb.firebaseio.com/data.json')
   .then( function (response) {
      
   dispatch({type:"GETTABLEDATA", data:response.data})
    }).catch(err => console.error(err.message));
   };
}

export {
    getdata,
    getTabledata,
   //  loginToken,
    RegisterAgent,
    LoginUser,
}



