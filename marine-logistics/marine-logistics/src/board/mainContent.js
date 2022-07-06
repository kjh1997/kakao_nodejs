import React, {Component} from "react"
import { ListGroup} from 'react-bootstrap';
import PaginationBar from "./Pagination";
import { Dropdown, InputGroup,Form, DropdownButton } from 'react-bootstrap';




const USER_API_BASE_URL = "http://localhost:8080/board";

class MainContent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            data : [],
            mode : ""
        }
        console.log("=============================================");
        console.log(this.props.BoardList+ " ???")
        console.log("=============================================");
    }
    render(){
        
        return(
            <>    
                    
            <div style={{width:'100%', justifyContent:"center", margin:"auto" }}>
            
            <ListGroup key={'md'} horizontal={'md'} className="my-2" style={{width:"100%"}}>
            {['글 번호','제목', '요약','작성일','작성자'].map((text) => (
                <ListGroup.Item style={{width:"25%"}}>{text}</ListGroup.Item>
            ))}
            </ListGroup>
            {this.props.BoardList   .map((data) => (
                <a style={{
                    textDecoration:'none'
                }}  href={`${USER_API_BASE_URL}/getBoard/${data.id}`}><ListGroup key='md' horizontal='md' className="my-2" style={{width:"100%"}}>
                <ListGroup.Item style={{width:"25%"}}>{data.id}</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>{data.title}</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>{data.context}</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>{data. }</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>{data.localDateTime.split('T')[0]   }</ListGroup.Item>
                </ListGroup></a>
            ))}
            </div>
            <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
        <div style={{width:"100%"}}>
            <div style={{width:"70%", margin:"auto"}}>
                <PaginationBar></PaginationBar>
            </div>
        </div>
            </>

        )
    }
}

export default MainContent


