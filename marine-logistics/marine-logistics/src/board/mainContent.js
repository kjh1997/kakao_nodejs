import React, {Component } from "react"
import { ListGroup} from 'react-bootstrap';
import PaginationBar from "./Pagination";
// import axios from "axios";
import { Dropdown, InputGroup,Form, DropdownButton } from 'react-bootstrap';


// import ApiService from '../config/SetProxy'

class MainContent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            data : [],
            mode : ""
        }
        
    }
    
    render(){
        
        return(
            <>    
                    
            <div style={{width:'100%', justifyContent:"center", margin:"auto" }}>
            
            <ListGroup key={'md'} horizontal={'md'} className="my-2" style={{width:"100%"}}>
            {['제목', '요약','작성일','작성자'].map((text) => (
                <ListGroup.Item style={{width:"25%"}}>{text}</ListGroup.Item>
            ))}
            </ListGroup>
            {['md', 'md', 'md', 'md', 'md','md', 'md', 'md', 'md', 'md'].map((breakpoint) => (
                <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2" style={{width:"100%"}}>
                <ListGroup.Item style={{width:"25%"}}>Thisrqerqew ListGroup2</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>renders horizontally</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>onfadsfas {breakpoint}</ListGroup.Item>
                <ListGroup.Item style={{width:"25%"}}>and above!</ListGroup.Item>
                </ListGroup>
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


