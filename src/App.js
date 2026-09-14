import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DevOpsBackground from "./Components/Background/DevOpsBackground";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import NotFound from "./Components/NotFound";

// The PDF viewer is heavy, so it is only downloaded when the resume page is opened.
const Resume = lazy(() => import("./Components/Resume/Resume"));

export const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <DevOpsBackground />
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <div className="app-shell">
      <NavBar />
      <main id="main" className="app-main" tabIndex={-1}>
        <Suspense fallback={<div className="page-loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Navigate to="/projects" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
