import React from "react";
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <div className="container my-5">
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <div className="display-4 text-center my-5" data-aos="fade-up">
        <span className="orange_text">Skills </span>&amp;
        <span className="orange_text"> Expertise</span>
        <div className="lead my-5">Programming Languages</div>
        <div className="row">
          <div
            className="col-6 col-lg-3 col-md-6 my-3 circle-progress-circle"
            data-aos="fade-in"
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>C++</div>
            <circle-progress
                value="90"
                max="100"
                className={`${styles.progress_cycle} ${styles.skillItem}`}
              ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-in"
            data-aos-duration={400}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>Java</div>
            <circle-progress
              value={60}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-in"
            data-aos-duration={800}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>Python</div>
            <circle-progress
              value={40}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-in"
            data-aos-duration={1200}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>Javascript</div>
            <circle-progress
              value={85}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
        </div>
        <div className="lead my-5">Web Development Journey</div>
        <div className="row">
          <div className="col-6 col-lg-3 col-md-6 my-3" data-aos="fade-out">
            <div className={`h5 my-4 ${styles.skillItem}`}>HTML</div>
            <circle-progress
              value={95}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-out"
            data-aos-duration={1600}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>CSS</div>
            <circle-progress
              value={90}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-out"
            // data-aos-duration={1700}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>Javascript</div>
            <circle-progress
              value={85}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
          <div
            className="col-6 col-lg-3 col-md-6 my-3"
            data-aos="fade-out"
            // data-aos-duration={2000}
          >
            <div className={`h5 my-4 ${styles.skillItem}`}>React JS</div>
            <circle-progress
              value={80}
              max={100}
              className={`${styles.progress_cycle} ${styles.skillItem}`}
            ></circle-progress>
          </div>
        </div>
      </div>
    </div>
  );
}
