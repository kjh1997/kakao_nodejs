import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/board";

class BoardService {

    getBoards(num) {
        const url = BOARD_API_BASE_URL+'/getList?page='+num;
        console.log(url)
        return axios({url :url, 
            method: "GET",
          })
    }
    getBoardListCount(){
        const url = BOARD_API_BASE_URL + '/count'
        return axios({url: url, method:"GET"})
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL+ "/" + no);
    }

    updateBoard(no,board){
        return axios.put(BOARD_API_BASE_URL + "/" + no, board);
    }

    deleteBoard(no) {
        return axios.delete(BOARD_API_BASE_URL + "/" + no);
    }
}

export default new BoardService();