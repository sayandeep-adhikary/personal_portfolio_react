import React from "react";
import styles from "./contact.module.css";

export default function Contact({mode}) {
  return (
    <div className="container">
      <div className="row my-4">
        <div
          className="col-lg-6 col-12 order-2 order-lg-1 text"
          data-aos="fade-right"
        >
          <div className={`cursive-text ${styles.contactText}`}>
            Send all your messages and queries.
          </div>
          <form action="https://formspree.io/f/mleygnnv" method="post" className={styles.form}>
            <div className="form-group my-4">
              <label htmlFor="email" className="lead">
                Email
              </label>
              <input
                type="email"
                className={styles.input_field}
                id="email"
                aria-describedby="emailHelp"
                name="Email"
                autoComplete="off"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                P.S. We never share emails with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="lead my-3">
                Write Your Message
              </label>
              <input
                type="text"
                className={styles.input_field}
                id="message"
                name="Message"
                autoComplete="off"
                required
              />
            </div>
            <button
              type="submit"
              className={`btn btn-outline-${mode === "light-theme" ? "dark" : "light"} my-3 p-2`}
            >
              Send Message
            </button>
          </form>
        </div>
        <div
          className="col-lg-6 col-12 order-1 order-lg-2 d-flex align-items-center justify-content-center"
          data-aos="fade-right"
          style={{minHeight: "30vh"}}
        >
          <lottie-player src="https://lottie.host/605a22bd-4d19-4401-b80d-8de949ad5202/jaUwiP5dPn.json" background={mode === "light-theme" ? "#fff" : "#03001c"} speed="1" style={{width: "300rem"}} loop autoplay direction="1" mode="normal"></lottie-player>
          {/* <img src="" alt="" class="img2"> */}
        </div>
      </div>
    </div>
  );
}
