import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent2'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Test1 from './test/test1';
import Board from './board/board';
import Home from './components/Home';
import Login from './login/login';
import RegisterPage from './login/SignUpForm';
import CreateBoard from './board/createBoard';


function App() {
  return (
    <div>
        <Router>
            <HeaderComponent></HeaderComponent>
            <div className="container">
              <Routes>
                  <Route path = "/" element = {<Home/>}></Route>
                  <Route path = "/board"  element={<Board/>}></Route>
                  <Route path = "/test1" element = {<Test1/>}></Route>
                  <Route path = "/login" element = {<Login/>}></Route>
                  <Route path = "/signup" element = {<RegisterPage/>}></Route>
                  <Route path = "/boardCreate" element = {<CreateBoard/>}></Route>
              </Routes>
            </div>
            <FooterComponent></FooterComponent>
        </Router>

    </div>
  );
}

export default App;
