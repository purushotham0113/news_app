import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<News key="general" catagory="general" pagesize={6} />}
          />
          <Route
            path="/business"
            element={<News key="business" catagory="business" pagesize={6} />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" catagory="entertainment" pagesize={6} />}
          />
          <Route
            path="/health"
            element={<News key="health" catagory="health" pagesize={6} />}
          />
          <Route
            path="/science"
            element={<News key="science" catagory="science" pagesize={6} />}
          />
          <Route
            path="/sports"
            element={<News key="sports" catagory="sports" pagesize={6} />}
          />
          <Route
            path="/technology"
            element={<News key="technology" catagory="technology" pagesize={6} />}
          />
          {/* Optional About route if you have an About component */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}
