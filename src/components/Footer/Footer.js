import React from "react";
import favicon from "./favicon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div
          className="col-md-4 d-flex align-items-center"
          style={{ marginLeft: "7rem" }}
        >
          <span className="mb-3 mb-md-0 text-muted">© Copyright 2023</span>
        </div>
        <Link className="navbar-brand mx-auto" to="/">
          <img
            src={favicon}
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="Navbar icon"
            id="navbar-image"
          />
          <span className="orange_text"> S</span>ayandeep
          <span className="orange_text"> A</span>dhikary
        </Link>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ml-5 justify-content-center">
          <li className="ms-3">
            <a
              href="https://github.com/sayandeep-adhikary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github fa-2x mr-4 my-3" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://www.linkedin.com/in/sayandeep-adhikary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2x mr-4 my-3" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://www.instagram.com/sayandeep.adhikary/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-instagram fa-2x mr-4 my-3" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://www.facebook.com/profile.php?id=100073317752458"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-facebook fa-2x mr-4 my-3" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
