import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect } from "react";

function Login(){
    const [id, setId] = useEffect("")
    const [pw, setPw] = useEffect("")

    const pwHandler = (e) =>{
        setPw(e.currentTarget.value)
        console.log(pw)
    } 
    const idHandler = (e) =>{
        setId(e.currentTarget.value)
        console.log(id)
    }

    return (
        <>
        <br></br>
        <div>
            
            <Container className="panel">
                
                        <Col sm>
                            <input type={"text"} onChange={idHandler} placeholder="UserId"></input>
                        </Col>
                    

                        <Col sm>
                            <Form.Control type="password" onChange={{pwHandler}} placeholder="Password" />
                        </Col>
                   
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" >
                            Sign In
                        </Button>
                    </div>
                
            </Container>
        </div>
        </>

    );
}

export default Login