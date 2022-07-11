import React from "react";
import { useNavigate  } from "react-router-dom"


const Logout = () =>{
    let navigate = useNavigate()
    localStorage.clear
    console.log(localStorage)
    return navigate('/')

}

export default Logout