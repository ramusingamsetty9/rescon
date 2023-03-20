import React, { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import '../cssfiles/login.css'
const Signup = ()=> {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        name: "", email: "", work: "", password: "", cpassword: ""
    });
    let name,value;

    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }

    const postData=async(e)=>{
        e.preventDefault();
        const{ name, email, phone ,work , password, cpassword} = user;
        
       const res = await fetch("/register",{
           method:"POST",
           headers:{
               "Content-Type" : "application/json"
           },
           body:JSON.stringify({
            name,email,phone,work,password,cpassword
           })
       });
       const data = await res.json();
       if(data.status===422 || !data){
           window.alert("Invalid registration");
           console.log("Invalid registration");
       }
       else{
        window.alert("done registration");
        console.log("done registration");
       navigate("/login"); 
    }
    }

    return (
        <>

            <div className="login">
                <h2 className="signup" >Sign up </h2>
                <form method="POST" className="register-form" id="register-form">
                   
                    <div className="sign">
                        <label htmlfor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="text" autoComplete="off"
                             value={user.name}
                             onChange={handleInputs}
                             placeholder="your Name"
                            />
                    </div>

                    <div className="sign">
                        <label htmlfor="email">
                        <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="text" autoComplete="off"
                              value={user.email}
                              onChange={handleInputs}
                             placeholder="your Email"
                            />
                    </div>

                    <div className="sign">
                        <label htmlfor="phone">
                        <i class="zmdi zmdi-phone material-icons-name"></i>
                            </label>
                            <input type="phone" name="phone" id="text" autoComplete="off"
                             value={user.phone}
                             onChange={handleInputs}
                            placeholder="your Phone"
                            />
                    </div>

                    <div className="sign">
                        <label htmlfor="work">
                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                            </label>
                            <input type="text" name="work" id="text" autoComplete="off"
                              value={user.work}
                              onChange={handleInputs}
                             placeholder="your Work"
                            />
                    </div>

                    <div className="sign">
                        <label htmlfor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="text" autoComplete="off"
                              value={user.password}
                              onChange={handleInputs}
                             placeholder="your password"
                            />
                    </div>

                    <div className="sign">
                        <label htmlfor="cpassword">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="cpassword" id="text" autoComplete="off"
                              value={user.cpassword}
                              onChange={handleInputs}
                             placeholder="your conformpassword"
                            />
                    </div>
                    <NavLink to="/Login" className="link">I am already register.....!</NavLink>

                    <div className="button">
                        <input type="submit" name="signup" className="btn"
                        value="register" onClick={postData}
                        />
                    </div>
                </form>
                {/* <div className="signup-image">
                    <figure>
                        <img src="./pooja3.jpg" alt="logo" />
                        </figure>
                </div> */}
                </div>
        </>
    )
}
export default Signup

