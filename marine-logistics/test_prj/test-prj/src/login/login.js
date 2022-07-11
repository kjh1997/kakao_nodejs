import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState, useRef } from "react";
import client from "../config/baseServer";
import { useNavigate  } from "react-router-dom"

const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [success, setSuccess] = useState("")
    const pwHandler = (e) =>{
        setPw(e.currentTarget.value)
    } 
    const idHandler = (e) =>{
        setId(e.currentTarget.value)
    }
    const loginFunc = (e)=>{
        e.preventDefault()
        client.post('/login',{username:id, password:pw}).then((res)=>{
            setSuccess( res.status)
            localStorage.setItem("authorization",res.headers['authorization'])
            localStorage.setItem("authorization_refresh",res.headers['authorization_refresh'])
            localStorage.setItem("username",res.headers['username'])
            // console.log("headers : " + res.headers['authorization'])
            // console.log("headers : " + res.headers['authorization_refresh'])
            // console.log("headers : " + JSON.stringify(res.headers))
            // console.log("local : " + localStorage.getItem('authorization'))
            // console.log("local refresh : " + localStorage.getItem('authorization_refresh'))
            // console.log("local name : " + localStorage.getItem('username'))
            alert(res.status)

        })
    }
    useDidMountEffect(()=>{
        if(success ===200){
          alert(id +'님 환영합니다.')
          return navigate('/')
        }
        
        alert('회원가입에 실패하셨습니다.');
      },[success])

    return (
        <>
        <br></br>
        <div>
            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                        <Form.Control type="email" onChange={(e)=>idHandler(e)} placeholder="Enter email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" onChange={(e)=>pwHandler(e)} placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" onClick={loginFunc}>
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
        </>
    );
}

export default Login