import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  return (
    //  <>
    //  <Navbar/>
    //  <News  pageSize = {this.pageSize} country= "in" category = "science"/>
    //  </>
    <>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key="Science"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="Science"
              />
            }
          ></Route>
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key="Sports"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="Sports"
              />
            }
          ></Route>
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key="Technology"
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="Technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
