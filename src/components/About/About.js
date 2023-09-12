import React from "react";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <div className="container">
        <Intro />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
