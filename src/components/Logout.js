import React, { useEffect,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";

function Logout(){
    const {state,dispatch} = useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/Logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "content-Type": "application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            navigate("/Login",{replace:true});
            if(res.status!==200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    });

    return(
        <div>
            
            </div>
    )
}
export default Logout