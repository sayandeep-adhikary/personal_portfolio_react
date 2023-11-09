import React from "react";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <div className="container">
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Intro />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
