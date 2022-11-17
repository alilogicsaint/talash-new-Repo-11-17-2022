import React from 'react'
import HeadingsMain from './headings/heading'
import SubHeadings from './headings/subheading'

export default function LoginSuccess(props) {
  
  // name:name,
  // email:email, 
  // password:confirmPass,
  // landLine:landLine,
  // mobNum:mobNum,
  // whatsappNo:whatsappNo,
  // fbID:fbID,
  // instaID:instaID,
  // countryl:countryl,
  // estate:estate,
  // city:city,
  // NearestPlace:NearestPlace,
  // address:address,
  // areaUC:areaUC,
  // maplink:maplink,
  // cnic:cnic,
  // cnicCnicIssueDate:cnicCnicIssueDate,
  // cnicExpiDate:cnicExpiDate,
  // cnicAdminCode:cnicAdminCode,
  // userID:userID,
  return (
    <div>
        <div  style={myStyle.logoutContainer} >
    
          <div className='userProfileContainer'>
            <div style={{display:'flex'}}>
               <img  style={myStyle.profileImg}  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1667983752~exp=1667984352~hmac=a78041729e228486a3cfd9f39d0524d825e86538d0d57455e6fadb0687826136" />
               <div  style={myStyle.heading} >
                 <SubHeadings subheadingvlaue={"User Name "}  />
               </div>
            </div>
             <h5 style={{margin:"10px auto"}}>profile Info</h5>
            <div style={myStyle.profileContainer} >
              
                <ul className='profile_info'>
                  <li>name</li>
                  <li>email</li>
                  <li>password</li>
                  <li>landLine</li>
                  <li>mobNum</li>
                  <li>whatsappNo</li>
                  <li>fbID</li>
                  <li>instaID</li>
                </ul>
                <ul  className='profile_info'>
                  <li>country</li>
                  <li>city</li>
                  <li>NearestPlace</li>
                  <li>areaUC</li>
                  <li>cnic</li>
                  <li>cnicCnicIssueDate</li>
                  <li>cnicExpiDate</li>
                  <li>userID</li>
                 
                </ul>
            </div>
          </div>
           
         
          <div style={{display:"flex",}}>
            <button class="logoutBtn" onClick={()=>props.logout()}  >
             logout
            </button>
          </div>
          
      </div>

    </div>
  )
}

const myStyle={
  heading:{
    width:"50%",
    display:"flex",
    alignItems:"flex-end",
    alignContent:"flex-end",
    paddingLeft:"20px"
  },
  profileImg:{
    width:"100px",
    height:"100px"
  },
  logoutContainer: {
    width: "500px",
    // textAlign: "center",
    margin: "150px auto",
    boxShadow: "rgb(17 12 46 / 15%) 0px 48px 100px 0px",
    padding: "20px",
    width: "89%",
    margin: "15px auto",
    boxShadow: "rgb(17 12 46 / 15%) 0px 48px 100px 0px",
    padding: "20px",
  },
  profileContainer:{
    "display":"flex",
    justifyContent: "space-between",
  }
}