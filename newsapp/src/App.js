import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News  from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API
  console.log(apiKey);

  const [progress, setProgress] = useState(0);


  return (
      <>
        <Router>
          <NavBar></NavBar>
          {/* <News pageSize={6} country="in" category="science"></News> */}
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                ></News>
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  
}

export default App;
