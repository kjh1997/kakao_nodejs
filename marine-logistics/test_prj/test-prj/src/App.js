import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent2'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Test1 from './test/test1';
import Test2 from './test/test2';
import Home from './components/Home';


function App() {
  return (
    <div>
        <Router>
            <HeaderComponent></HeaderComponent>
            <div className="container">
            <h1>test</h1>
              <Routes>
                  <Route path = "/" component = {Home}></Route>
                  <Route path = "/test2"  element={<Test2/>}></Route>
                  <Route path = "/test1" element = {<Test1/>}></Route>
              </Routes>
            </div>
            <FooterComponent></FooterComponent>
        </Router>

    </div>
  );
}

export default App;
