import React from "react";
import NavBar from '../nav_footer/nav'
import 'bootstrap/dist/css/bootstrap.min.css';


import MainContent from "./mainContent"
import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/board";

class ApiService {
    getBoardList(){
      return axios.get(USER_API_BASE_URL + '/getList');
    }
    
    addUser(user){
      return axios.post(USER_API_BASE_URL, user);
    }
  
  }
  
  


function Board(){
    var data = ""
    const service = new ApiService()
    service.getBoardList()
        .then( (response) =>{
            data = JSON.stringify(response)
        })
    console.log(data + " test tes tses")
    
   



    return(
        <>
        <div style={{height:"20%", backgroundColor:"red"}}>
        <NavBar></NavBar>
        </div>
        <div style={{height:"80%"}}>
        <MainContent></MainContent>
        </div>
        </>
    )
}


export default Board