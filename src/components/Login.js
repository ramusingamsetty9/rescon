import React, {
  useState,
  useContext
} from 'react';
import {
  NavLink,
  useNavigate
} from 'react-router-dom';
import '../cssfiles/login.css'
import {
  UserContext
} from "../App";
const Login = () => {

  const {
    state,
    dispatch
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid details")
    } else {
      dispatch({
        type: "USER",
        payload: true
      })
      window.alert("login completed")
      navigate("/dashboard");
    }
  }


  return ( <
    >

    <
    div className = "login" >
    <
    h2 className = "signup" > LOGIN < /h2>

    <
    form method = "POST"
    id = "register-form" >

    <
    div className = "sign" >

    <
    label htmlfor = "email" >
    <
    i class = "zmdi zmdi-email material-icons-name" > < /i> <
    /label>

    <
    input type = "email"
    name = "email"
    id = "text"
    autoComplete = "off"
    value = {
      email
    }
    onChange = {
      (e) => setEmail(e.target.value)
    }
    placeholder = "your Email" /
    >
    <
    /div>

    <
    div className = "sign" >
    <
    label htmlfor = "password" >
    <
    i class = "zmdi zmdi-lock material-icons-name" > < /i> <
    /label> <
    input type = "password"
    name = "password"
    id = "text"
    autoComplete = "off"
    value = {
      password
    }
    onChange = {
      (e) => setPassword(e.target.value)
    }
    placeholder = "your password" /
    >
    <
    /div>

    <
    NavLink to = "/Signup"
    className = "link" > create a account ? < /NavLink>

    <
    div className = "button" >
    <
    input type = "submit"
    name = "signup"
    className = "btn"
    value = "Login"
    onClick = {
      loginuser
    }
    /> <
    /div> <
    /form>


    {
      /* <div className="image">
                          <figure>
                              <img src="./pooja3.jpg" alt="logo" />
                              </figure>
                      </div> */
    } <
    /div>


    <
    />
  )
}
export default Login