import React, { useState, useEffect } from "react";
import workInProgress from "./work_in_progress.png";
import workInProgress_small from "./work_in_progress_small.png";

export default function Courses() {
  const [currentImage, setCurrentImage] = useState(workInProgress_small);
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
    fetchImage(workInProgress);
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center" data-aos="fade-down">
        <img
          src={currentImage}
          alt="course in progress"
          className="work_in_progress"
          loading="lazy"
          style={{ scale: "0.3" }}
        />
      </div>
    </div>
  );
}
