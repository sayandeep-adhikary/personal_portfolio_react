import React, { useEffect, useState } from "react";
import handShake from "../images/handshake.gif";
import aboutPhoto1 from "../images/image.png";
import aboutPhoto1_small from "../images/aboutMe_photo2_small.jpg";
import aboutPhoto2 from "../images/aboutMe_photo1.png";
import aboutPhoto2_small from "../images/aboutMe_photo1_small.png";
import aboutPhoto3 from "../images/coder.gif";
import aboutPhoto3_small from "../images/coder.gif";
import styles from "./intro.module.css";

export default function Intro() {
  const [currentImage1, setCurrentImage1] = useState(aboutPhoto1_small);
  const [loading1, setLoading1] = useState(true);

  const fetchImage1 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage1(loadingImage.src);
      setLoading1(false);
    };
  };
  const [currentImage2, setCurrentImage2] = useState(aboutPhoto2_small);
  const [loading2, setLoading2] = useState(true);

  const fetchImage2 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage2(loadingImage.src);
      setLoading2(false);
    };
  };
  const [currentImage3, setCurrentImage3] = useState(aboutPhoto3_small);
  const [loading3, setLoading3] = useState(true);

  const fetchImage3 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage3(loadingImage.src);
      setLoading3(false);
    };
  };
  useEffect(() => {
    fetchImage1(aboutPhoto1);
    fetchImage2(aboutPhoto2);
    fetchImage3(aboutPhoto3);
  }, []);
  return (
    <div className="container my-5">
      <div>
        <div className="h1 text-center my-3" data-aos="fade-up">
          <img
            src={handShake}
            alt="shake hand gif"
            width={50}
            className="mb-2"
          />
          <span className="orange_text"> Hello</span> There!
        </div>
        <div className="container">
          <div className="row my-5">
            <div
              className="col-lg-6 col-12 col-12 order-sm-1 order-md-1 order-lg-2 my-3 d-flex align-items-center justify-content-center my-5"
              data-aos="fade-in"
            >
              <img
                style={{
                  filter: `${loading2 ? "blur(20px)" : ""}`,
                }}
                src={currentImage2}
                alt="aboutPhoto1"
                className={`${styles.aboutImg} ${styles.aboutImg1} img-fluid`}
              />
            </div>
            <div
              className="col-lg-6 col-12 order-sm-2 order-md-2 order-lg-1 my-3 d-flex align-items-center justify-content-center"
              data-aos="fade-right"
            >
              <div className={`text-center ${styles.aboutText}`}>
                <div className="h3 mb-3 about-text">
                  I am <span className="orange_text">Sayandeep</span> Adhikary.
                </div>
                <div>
                  <span id="element-1">
                    I'm a 3rd-year Information Technology student at Netaji
                    Subhash Engineering College in Kolkata, West Bengal. I have
                    experience in MERN stack development and am passionate about
                    coding, with expertise in C, C++, and Java, having solved
                    over 500 Leetcode problems. Beyond tech, I'm a music
                    enthusiast who enjoys playing the piano and a chess
                    enthusiast. 🎓💻🎶🎹♟
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5" data-aos="fade-up">
            <div className="col-lg-6 col-12 order-sm-2 order-md-1 order-lg-1 my-3 d-flex align-items-center justify-content-center my-5">
              <img
                style={{
                  filter: `${loading1 ? "blur(20px)" : ""}`,
                }}
                src={currentImage1}
                alt="aboutPhoto2"
                className={`${styles.aboutImg} ${styles.aboutImg2} img-fluid`}
                loading1="lazy"
              />
            </div>
            <div className="col-lg-6 col-12 order-sm-1 order-md-2 order-lg-2 my-3 d-flex align-items-center justify-content-center">
              <div className={`text-center ${styles.aboutText}`}>
                <div className="h3 mb-3 about-text">
                  A <span className="orange_text">Tech Enthusiast.</span>
                </div>
                <div>
                  <span id="element-2">
                    "As a devoted Tech Enthusiast, my passion for all things
                    technological knows no bounds. From the latest advancements
                    in artificial intelligence and virtual reality to the
                    intricacies of programming languages, I am constantly
                    seeking to expand my knowledge and stay at the forefront of
                    innovation. Embracing the ever-evolving world of technology,
                    I thrive on exploring new gadgets, software, and concepts,
                    fueling my curiosity to contribute and shape the digital
                    landscape of the future."
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div
              className="col-lg-6 col-12 order-sm-2 order-md-1 order-lg-2 my-3 d-flex align-items-center justify-content-center my-5"
              data-aos="fade-right"
            >
              <img
                style={{
                  filter: `${loading3 ? "blur(20px)" : ""}`,
                }}
                src={currentImage3}
                alt="aboutPhoto3"
                className={`${styles.aboutImg} ${styles.aboutImg3} img-fluid`}
                loading1="lazy"
              />
            </div>
            <div
              className="col-lg-6 col-12 order-sm-1 order-md-2 order-lg-1 my-3 d-flex align-items-center justify-content-center"
              data-aos="fade-right"
            >
              <div className={`text-center ${styles.aboutText}`}>
                <div className="h3 mb-3 about-text">
                  A <span className="orange_text">Problem Solver.</span>
                </div>
                <div>
                  <span id="element-3">
                    "I am a problem solver, a tenacious individual dedicated to
                    unraveling challenges and finding innovative solutions. With
                    a keen analytical mind and a passion for learning, I embrace
                    every obstacle as an opportunity for growth. My adaptability
                    and resourcefulness enable me to tackle complex issues from
                    multiple angles, ensuring that I can overcome barriers and
                    make a positive impact on the world around me"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
