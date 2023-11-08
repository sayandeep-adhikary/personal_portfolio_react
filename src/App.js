import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light-theme");
  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/contact" element={<Contact mode={mode}/>} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
