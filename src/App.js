import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/Components/Pre";
import Footer from "./Components/Footer";
import "./style.css";
import Resume from "./Components/Resume/ResumeNew";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

export const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar></Navbar>
        <ScrollToTop />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
