import React, {useState} from 'react'
import "./LoginRegister.css"
import client from '../config/baseServer';
import { Navigate  } from "react-router-dom"
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [res, setRes] = useState("")

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log("회원가입 시작");
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
    alert('yrdy.')
    client.post('/user/register',{name: name,email:email,password:password} )
    .then((response)=>{
      setRes(response.data)
      console.log(response.data + " test ")
    })
  
    console.log(name, email, password)
    if(res !== ""){
        return <Navigate to="/login" replace={true}/>
    }
    return alert('회원가입에 실패하셨습니다.');
  }

  return (
    <div className="loginregister">
      <form>
          <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="loginregister__input"/></div>
          <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
          <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="loginregister__input"/></div>
          <div><button type="submit" onClick={onSubmit} className="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
  );
}
export default RegisterPage;