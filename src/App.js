import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Entertinement from './components/Entertinement';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path='/business' element={<News key='a' catagory='business' pagesize={6} />}></Route>
            <Route path='/health' element={<News key='b' catagory='health' pagesize={6} />}></Route>
            <Route path='/sports' element={<News key='c' catagory='sports' pagesize={6} />}></Route>
            <Route path='/' element={<News key='d' catagory='general' pagesize={6} />}></Route>
            <Route path='/technology' element={<News key='e' catagory='technology' pagesize={6} />}></Route>
            <Route path='/science' element={<News key='f' catagory='science' pagesize={6} />}></Route>
            <Route path='/entertainment' element={<News key='g' catagory='entertainment' pagesize={6} />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}

