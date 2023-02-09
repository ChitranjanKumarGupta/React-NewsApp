import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { News } from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  c = "John";
  render() {
    return (
      <>
        <Router>
          <NavBar></NavBar>
          {/* <News pageSize={6} country="in" category="science"></News> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general"></News>}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"></News>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"></News>}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general"></News>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"></News>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science"></News>}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"></News>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
