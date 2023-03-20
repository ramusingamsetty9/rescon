import '../src/cssfiles/home.css';
import {Route , Routes} from "react-router-dom";
import About from './components/About';
import Care from './components/Care';
import Home from './components/Home';
import Networks from './components/Networks';
import Pick from './components/Pick';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import React,{createContext, useReducer} from 'react';
import {initialState,reducer} from './reducer/UseReducer'

export const UserContext = createContext();
const Routing = () => {
    return(
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
       <Route path="/Home" element={<Home />}></Route>
       <Route path="/About" element={<About />}></Route>
       <Route path="/Services" element={<Services />}></Route>
       <Route path="/Networks" element={<Networks />}></Route>
       <Route path="/Pick" element={<Pick />}></Route>
       <Route path="/Care" element={<Care />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
       </Routes>
    )
}

function App()
{
    const [state, dispatch] = useReducer(reducer,initialState);
    return(
       <div>
           <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Routing />
       </UserContext.Provider>
       <Footer />
</div>
    )
}

export default App;