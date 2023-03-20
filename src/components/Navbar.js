 import '../cssfiles/home.css';
 import {
   Link,
   NavLink
 } from "react-router-dom";
 import React, {
   useContext
 } from 'react';
 import {
   UserContext
 } from "../App";

 function Navbar() {
   const {
     state,
     dispatch
   } = useContext(UserContext);
   const RenderMenu = () => {

     if (state) {
       return ( <
         >
         <
         li > < NavLink className = "nav"
         to = "/Home" > Home < /NavLink><br / > < /li> <
         li > < Link className = "nav"
         to = "/About" > About < /Link><br / > < /li> <
         li > < Link className = "nav"
         to = "/Care" > Contact Us < /Link><br / > < /li> <
         li > < Link className = "nav"
         to = "/Logout" > Logout < /Link><br / > < /li> < / >
       )
     } else {
       return ( <
         >
         <
         li > < NavLink className = "nav"
         to = "/Home" > Home < /NavLink><br / > < /li> <
         li > < Link className = "nav"
         to = "/About" > About < /Link><br / > < /li> <
         li > < Link className = "nav"
         to = "/Care" > Contact Us < /Link><br / > < /li> <
         li > < Link className = "nav"
         to = "/Pick" > Properties < /Link><br / > < /li><
         li > < Link className = "nav"
         to = "/Login" > Login < /Link><br / > < /li> <
         li > < Link className = "nav"
         to = "/Signup" > SignUp < /Link><br / > < /li>  < / >
       )
     }
   }
   return ( <
     div >
     <
     title > Home < /title> <
     div className = "img1" >
     <
     img src = "EasySpacesmall.png"
     alt = "logo-top"
     height = "90px"
     width = "90px" / >
     <
     /div>

     <
     div className = "topnav" >
     <
     ul >
     <
     RenderMenu / >
     <
     /ul> < /
     div >


     <
     /div>
   )
 }
 export default Navbar;