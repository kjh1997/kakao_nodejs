import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import { ButtonGroup, Button} from 'react-bootstrap';


const client = axios.create({
    baseURL: "http://127.0.0.1:8080/board" 
  });

const PageIncrease = (page,maxpage)=>{
    if(maxpage === page){
        return page;
    } else {
        return page + 1;
    }
}
const PageDescend =  (page)=>{
    if(page===1){
        return page;
    } else {
        return page - 1;
    }
}
const buttonNum = (maxpage) =>{
    let arr = []
    for(var i =0; i<maxpage;i++){
        arr.push(i+1)
    }
    console.log(arr)
    return arr
}


const Board =(props) => {
    const [maxpage, setMaxpage] = React.useState();
    
    const [boardData, setBoardData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    React.useEffect(()=>{
        client.get('/board/count').then((response)=>{
            setMaxpage(response.data)
        })
    },[maxpage])
    React.useEffect(() =>{
        client.get('/getList?page='+1).then((response)=>{
            setBoardData(response.data.boardList)
        })
    },[])  
    React.useEffect(() =>{
        client.get('/getList?page='+page).then((response)=>{
            const mainData = response.data
            setMaxpage(mainData.count)
            setBoardData(mainData.boardList)
        })
    },[page])  

    return (
        <>
            <br></br>
            <div style={{ display: "flex",  justifyContent: "end"}}>
            <button><a href='/boardCreate' style={{textDecoration:'none', color:'#000000'}}>글작성</a></button>
            </div>
            <br></br>
            <Table striped bordered hover>
            <thead>
                <tr>    
                <th>글 번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                </tr>
            </thead>
            <tbody>
            {boardData.map((data)=>(
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.username}</td>
                                <td>{data.localDateTime.split('T')[0]}</td>
                            </tr>
                        ))}
                
            </tbody>
            </Table>
            
            <div >
                
                <div style={{ display: "flex",  justifyContent: "center"}}>
                <ButtonGroup className="me-2-center" aria-label="First group" >
                <button onClick={()=>setPage(PageDescend(page, maxpage))}>이전</button>
                

                {buttonNum(maxpage).map((i)=>(
                    <Button variant="secondary" onClick={()=>{setPage(PageIncrease(page, maxpage)); setPage(i);}
                
                }>{i}</Button>
                ))}
                
                
                <button onClick={()=>setPage(PageIncrease(page, maxpage))}>이후</button>
                </ButtonGroup>
                </div>
            </div> 
            
        </>

    )
}


export default Board