import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./home.module.css";
import Portrait from "./portrait.png";
import portrait_small from "./portrait_small.png";

export default function Home({ mode }) {
  const el = useRef(null);
  const [currentImage, setCurrentImage] = useState(portrait_small);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(Portrait);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer.",
        "Programmer.",
        "Graphic Designer.",
        "Tech Geek.",
        "LEARNER.",
      ],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="container my-3">
      <div className="row mt-0">
        <div
          className="col-lg-6 col-12 order-2 order-lg-1"
          data-aos="fade-right"
        >
          <div className={`container ${styles.home_text}`}>
            <p className="lead mb-0 cursive-text">Hello,</p>
            <div className="display-4">
              I am
              <strong>
                <span className="orange_text drop"> Sayandeep</span>
                <span className="drop"> Adhikary.</span>
              </strong>
            </div>
            <h3 className="my-3 typeJs">
              A <span ref={el} className="orange_text"></span>
            </h3>
            <div className={`container my-4 px-0 ${styles.buttonContainer}`}>
              <button
                className={`glow-on-hover`}
                type="button"
                mode={mode}
              >
                <a
                  href="/sayandeepadhikaryresume.pdf"
                  download={"Sayandeep Adhikary Resume.pdf"}
                  style={{ color: "inherit" }}
                >
                  DOWNLOAD CV
                </a>
              </button>
            </div>
            <a
              href="https://github.com/sayandeep-adhikary"
              target="_blank"
              className="icons mr-4"
              rel="noreferrer"
              alt="github"
            >
              <i className="fa-brands fa-square-github fa-2x my-3"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sayandeep-adhikary/"
              target="_blank"
              className="icons mr-4"
              rel="noreferrer"
              alt="linkedin"
            >
              <i className="fa-brands fa-linkedin fa-2x my-3"></i>
            </a>
            <a
              href="https://www.instagram.com/sayandeep.adhikary/"
              target="_blank"
              className="icons mr-4"
              rel="noreferrer"
              alt="instagram"
            >
              <i className="fa-brands fa-square-instagram fa-2x my-3"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100073317752458"
              target="_blank"
              className="icons mr-4"
              rel="noreferrer"
              alt="facebook"
            >
              <i className="fa-brands fa-square-facebook fa-2x my-3"></i>
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 col-12 order-1 order-lg-2 d-flex align-items-center justify-content-center mt-5"
          data-aos="fade-right"
        >
          <img
            style={{
              filter: `${loading ? "blur(20px)" : ""}`,
              background: "transparent",
            }}
            src={currentImage}
            alt="portrait"
            className={`${styles.portrait} img-fluid`}
          />
          {/* <img src="" alt="" className="img2"> */}
        </div>
      </div>
    </div>
  );
}
