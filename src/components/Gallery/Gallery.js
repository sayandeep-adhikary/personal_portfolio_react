import React, { useState, useEffect } from "react";
import image1 from "./images/galleryImage1.jpg";
import image2 from "./images/galleryImage2.jpg";
import image3 from "./images/galleryImage3.jpg";
import image4 from "./images/galleryImage4.jpg";
import image5 from "./images/galleryImage5.jpg";
import image6 from "./images/galleryImage6.jpg";
import image7 from "./images/galleryImage7.jpg";
import image8 from "./images/galleryImage8.jpg";
import image9 from "./images/galleryImage9.jpg";
import image10 from "./images/galleryImage10.jpg";
import image11 from "./images/galleryImage11.jpg";
import image12 from "./images/galleryImage12.jpg";
import image13 from "./images/galleryImage13.jpg";
import image14 from "./images/galleryImage14.jpg";
import image1_small from "./small_images/galleryImage1.jpg";
import image2_small from "./small_images/galleryImage2.jpg";
import image3_small from "./small_images/galleryImage3.jpg";
import image4_small from "./small_images/galleryImage4.jpg";
import image5_small from "./small_images/galleryImage5.jpg";
import image6_small from "./small_images/galleryImage6.jpg";
import image7_small from "./small_images/galleryImage7.jpg";
import image8_small from "./small_images/galleryImage8.jpg";
import image9_small from "./small_images/galleryImage9.jpg";
import image10_small from "./small_images/galleryImage10.jpg";
import image11_small from "./small_images/galleryImage11.jpg";
import image12_small from "./small_images/galleryImage12.jpg";
import image13_small from "./small_images/galleryImage13.jpg";
import image14_small from "./small_images/galleryImage14.jpg";
import Footer from "../Footer/Footer";

export default function Gallery() {
  const [currentImage1, setCurrentImage1] = useState(image1_small);
  const [loading1, setLoading1] = useState(true);
  const [currentImage2, setCurrentImage2] = useState(image2_small);
  const [loading2, setLoading2] = useState(true);
  const [currentImage3, setCurrentImage3] = useState(image3_small);
  const [loading3, setLoading3] = useState(true);
  const [currentImage4, setCurrentImage4] = useState(image4_small);
  const [loading4, setLoading4] = useState(true);
  const [currentImage5, setCurrentImage5] = useState(image5_small);
  const [loading5, setLoading5] = useState(true);
  const [currentImage6, setCurrentImage6] = useState(image6_small);
  const [loading6, setLoading6] = useState(true);
  const [currentImage7, setCurrentImage7] = useState(image7_small);
  const [loading7, setLoading7] = useState(true);
  const [currentImage8, setCurrentImage8] = useState(image8_small);
  const [loading8, setLoading8] = useState(true);
  const [currentImage9, setCurrentImage9] = useState(image9_small);
  const [loading9, setLoading9] = useState(true);
  const [currentImage10, setCurrentImage10] = useState(image10_small);
  const [loading10, setLoading10] = useState(true);
  const [currentImage11, setCurrentImage11] = useState(image11_small);
  const [loading11, setLoading11] = useState(true);
  const [currentImage12, setCurrentImage12] = useState(image12_small);
  const [loading12, setLoading12] = useState(true);
  const [currentImage13, setCurrentImage13] = useState(image13_small);
  const [loading13, setLoading13] = useState(true);
  const [currentImage14, setCurrentImage14] = useState(image14_small);
  const [loading14, setLoading14] = useState(true);

  const fetchImage1 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage1(loadingImage.src);
      setLoading1(false);
    };
  };
  const fetchImage2 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage2(loadingImage.src);
      setLoading2(false);
    };
  };
  const fetchImage3 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage3(loadingImage.src);
      setLoading3(false);
    };
  };
  const fetchImage4 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage4(loadingImage.src);
      setLoading4(false);
    };
  };
  const fetchImage5 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage5(loadingImage.src);
      setLoading5(false);
    };
  };
  const fetchImage6 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage6(loadingImage.src);
      setLoading6(false);
    };
  };
  const fetchImage7 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage7(loadingImage.src);
      setLoading7(false);
    };
  };
  const fetchImage8 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage8(loadingImage.src);
      setLoading8(false);
    };
  };
  const fetchImage9 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage9(loadingImage.src);
      setLoading9(false);
    };
  };
  const fetchImage10 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage10(loadingImage.src);
      setLoading10(false);
    };
  };
  const fetchImage11 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage11(loadingImage.src);
      setLoading11(false);
    };
  };
  const fetchImage12 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage12(loadingImage.src);
      setLoading12(false);
    };
  };
  const fetchImage13 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage13(loadingImage.src);
      setLoading13(false);
    };
  };
  const fetchImage14 = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage14(loadingImage.src);
      setLoading14(false);
    };
  };
  useEffect(() => {
    fetchImage1(image1);
    fetchImage2(image2);
    fetchImage3(image3);
    fetchImage4(image4);
    fetchImage5(image5);
    fetchImage6(image6);
    fetchImage7(image7);
    fetchImage8(image8);
    fetchImage9(image9);
    fetchImage10(image10);
    fetchImage11(image11);
    fetchImage12(image12);
    fetchImage13(image13);
    fetchImage14(image14);
  }, []);
  return (
    <>
      <div className="display-4 text-center container my-3" data-aos="fade-up">
        Image <span className="orange_text">Gallery</span>
        <div className="gallery">
          <ul className="images">
            <li className="cardi style1">
              <img
                src={currentImage1}
                alt="img-text1"
                id="galImg1"
                loading="lazy"
                style={{
                  filter: `${loading1 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style2">
              <img
                src={currentImage2}
                alt="img-tex2"
                id="galImg2"
                loading="lazy"
                style={{
                  filter: `${loading2 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <li className="cardi style3">
              <img
                src={currentImage3}
                alt="img-text3"
                id="galImg3"
                loading="lazy"
                style={{
                  filter: `${loading3 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style1">
              <img
                src={currentImage4}
                alt="img-text4"
                id="galImg4"
                loading="lazy"
                style={{
                  filter: `${loading4 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style2">
              <img
                src={currentImage5}
                alt="img-text5"
                id="galImg5"
                loading="lazy"
                style={{
                  filter: `${loading5 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style3">
              <img
                src={currentImage6}
                alt="img-text6"
                id="galImg6"
                loading="lazy"
                style={{
                  filter: `${loading6 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <li className="cardi style1">
              <img
                src={currentImage7}
                alt="img-text7"
                id="galImg7"
                loading="lazy"
                style={{
                  filter: `${loading7 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style3">
              <img
                src={currentImage8}
                alt="img-text8"
                id="galImg8"
                loading="lazy"
                style={{
                  filter: `${loading8 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style2">
              <img
                src={currentImage9}
                alt="img-text9"
                id="galImg9"
                loading="lazy"
                style={{
                  filter: `${loading9 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
            <li className="cardi style1">
              <img
                src={currentImage10}
                alt="img-text10"
                id="galImg10"
                loading="lazy"
                style={{
                  filter: `${loading10 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style3">
              <img
                src={currentImage11}
                alt="img-text11"
                id="galImg11"
                loading="lazy"
                style={{
                  filter: `${loading11 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style1">
              <img
                src={currentImage12}
                alt="img-text12"
                id="galImg12"
                loading="lazy"
                style={{
                  filter: `${loading12 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style3">
              <img
                src={currentImage13}
                alt="img-text13"
                id="galImg13"
                loading="lazy"
                style={{
                  filter: `${loading13 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
            <li className="cardi style2">
              <img
                src={currentImage14}
                alt="img-text14"
                id="galImg14"
                loading="lazy"
                style={{
                  filter: `${loading14 ? "blur(20px)" : ""}`,
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
