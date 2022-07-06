import React, {useState, useEffect} from "react";
import NavBar from '../nav_footer/nav'
import 'bootstrap/dist/css/bootstrap.min.css';


import MainContent from "./mainContent"
import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/board/getList?page=1";

// class ApiService {
//     getBoardList(page){
//       return axios.get(USER_API_BASE_URL + '/getList?page=1');
//     }
    
//     addUser(user){
//       return axios.post(USER_API_BASE_URL, user);
//     }
  
//   }
  
// const service = new ApiService()


const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    axios({url : USER_API_BASE_URL,method:"GET"})
          .then(response => {
            setBoard(response.data);

          });
  })

  return (
    
    <>
    {board.map((board_Data) => { console.log(board_Data)})}
    <div style={{height:"20%", backgroundColor:"red"}}>
    <NavBar></NavBar>
    </div>
    <div style={{height:"80%"}}>
    <MainContent BoardList={board}></MainContent>
    </div>
    </>
  );
}

export default Board