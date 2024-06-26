import React from "react";
import project1 from "./images/nike.png";
import project1m from "./images/nikem.png";
import project2 from "./images/textUtils.png";
import project2m from "./images/textUtilsm.png";
import project3 from "./images/project1.png";
import project3m from "./images/project1m.png";
import project4 from "./images/project2.png";
import project4m from "./images/project2m.png";
import project5 from "./images/project3.png";
import project5m from "./images/project3m.png";
import project6 from "./images/project4.png";
import project6m from "./images/project4m.png";
import project7 from "./images/project5.png";
import project7m from "./images/project5m.png";
import freshcon from "./images/freshcon.png";
import freshconm from "./images/freshconm.png";
import Footer from "../Footer/Footer";

export default function Project() {
  return (
    <>
      <div
        className="h1 text-center mt-2 mb-5"
        data-aos="fade-up"
        style={{ fontFamily: '"Montserrat", sans-serif' }}
      >
        <span className="orange_text">Technologies </span>I have worked on
        <div className="container">
          <div className="row my-5">
            <div className="col-6 col-lg-4 my-3">
              <i
                id="techImg1"
                className="techImg fa-brands fa-html5 fa-2x"
                style={{ color: "#ff6600" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-6 col-lg-4 my-3">
              <i
                id="techImg2"
                className="techImg fa-brands fa-css3-alt fa-2x"
                style={{ color: "#337eff" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-12 col-lg-4 my-3">
              <i
                id="techImg3"
                className="techImg fa-brands fa-js fa-2x"
                style={{ color: "#ffe01a" }}
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-lg-4 my-3">
              <i
                id="techImg4"
                className="techImg fa-brands fa-git-alt fa-2x"
                style={{ color: "#f05033" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-6 col-lg-4 my-3">
              <i
                id="techImg5"
                className="techImg fa-brands fa-node-js fa-2x"
                style={{ color: "#87cf30" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-6 col-lg-4 my-3">
              <i
                id="techImg6"
                className="techImg fa-brands fa-react fa-2x"
                style={{ color: "#53c1de" }}
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="my-5" data-aos="fade-up">
            My Recent <span className="orange_text">Project Works</span>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                Freshcon - Amplify the taste of your dishes!
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={freshconm} />
                <img
                  id="freshcon"
                  src={freshcon}
                  alt="freshcon"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                "The Freshcon website's homepage, built using ReactJS,
                introduces visitors to our business specializing in shredded
                coconuts. It provides a welcoming and informative gateway to
                explore our offerings and learn more about our high-quality
                coconut products. With a user-friendly design, it ensures a
                seamless browsing experience, inviting customers to discover the
                versatility and freshness of our shredded coconuts."{" "}
                <a
                  href="https://freshcon-kappa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                Nike Brand Store - The World of Best Shoes Ever.
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project1m} />
                <img
                  id="nike_project"
                  src={project1}
                  alt="nike website"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                "The "Nike Brand Store" is my ReactJS project, inspired by the
                iconic Nike brand. While it may not offer the full range of
                products or e-commerce functionality, this project is dedicated
                to replicating the aesthetics and user experience of Nike's
                official website. It showcases Nike's footwears, providing users
                with a visually appealing and interactive platform to explore
                the brand's offerings. The website's responsive design ensures a
                seamless and immersive experience, whether accessed from
                desktops, tablets, or mobile devices, allowing users to engage
                with the Nike brand in a digital space reminiscent of the
                official Nike website."{" "}
                <a
                  href="https://nikke-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                TextUtils - The Complete Text Analyzer/Formatter.
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project2m} />
                <img
                  id="textutils_project"
                  src={project2}
                  alt="textutils"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                "Textutils is a versatile web application powered by ReactJS,
                designed to simplify and enhance text manipulation. With an
                array of useful features, it allows users to effortlessly
                convert text to uppercase or lowercase, copy text to the
                clipboard, clear text fields, and remove extra spaces, making it
                an indispensable tool for text editing tasks. Textutils also
                offers a convenient dark mode toggle for comfortable usage in
                low-light environments. This fully responsive web app adapts
                seamlessly to various screen sizes and devices, ensuring a
                consistent and user-friendly experience across all viewports."{" "}
                <a
                  href="https://text-utils-react-js-lyart.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                Netflix Clone - All Day Binge Watch, Just Netflix and Chill.
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project3m} />
                <img
                  id="project1"
                  src={project3}
                  alt="netflix project"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                The "Netflix Clone" is my website project, a dummy version of
                the well-known streaming platform Netflix, designed using HTML
                and CSS. While it may not have the actual binge-watching
                functionality, the project focuses on replicating the user
                interface and design elements of Netflix to provide a familiar
                browsing experience. Users can explore a selection of movies and
                TV shows showcased on the clone website. The website's
                responsive design ensures seamless access from various devices,
                offering users a glimpse of the popular streaming service's
                interface.{" "}
                <a
                  href="https://netflix-clone-tan-six.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                SWeather - A Ready To Go Weather App!
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project4m} />
                <img
                  id="project2"
                  src={project4}
                  alt="sweather project"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                'SWeather' is my website project, a user-friendly weather app
                designed to provide instant weather updates for any location.
                With a focus on simplicity and accuracy, it delivers real-time
                information on temperature, wind speed, and cloud conditions for
                the user's current location. Additionally, users can easily
                search for weather details in any specific city of their choice.
                'SWeather' aims to be a reliable and efficient tool for users to
                stay informed about the weather conditions, ensuring they are
                well-prepared for any outdoor activities or travel plans.{" "}
                <a
                  href="https://sweather-swart.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                My To Do - A Hassle Free Destination of All Your ToDos.
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project5m} />
                <img
                  id="project3"
                  src={project5}
                  alt="mytodo project"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                'My To Do' is my website project, a convenient Todo List app
                that allows users to efficiently add and organize tasks in a
                sequential manner. Users can mark completed tasks, which will be
                visually indicated with a strikethrough effect. The app's
                standout feature is its integration with local storage, ensuring
                that tasks persist even after page refreshes. With a clean and
                intuitive interface, 'My To Do' enables users to stay on top of
                their daily tasks and keep track of completed items
                effortlessly.{" "}
                <a
                  href="https://todo-list-beta-nine-23.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                iCoder - Your Most Favourite Tech Blog Website.
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project6m} />
                <img
                  id="project4"
                  src={project6}
                  alt="icoder project"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                'iCoders' is my coding blog website project, where I honed my
                Bootstrap skills. This website features a sleek navbar with
                functional login and signup sections, providing a seamless user
                experience. An impressive image carousel adds a dynamic touch to
                the site. With multiple pages, 'iCoders' offers a wealth of
                coding resources and insightful blog posts. The entire website
                is styled using Bootstrap, showcasing my proficiency in this
                essential front-end framework. This project has allowed me to
                explore web development techniques and create an engaging
                platform for fellow coders to learn and share knowledge.{" "}
                <a
                  href="https://i-coder-bootstrap-theta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            <div className="col-12 my-5">
              <div className="projectTitle my-5" data-aos="fade-up">
                TinDog - Meet New And Interesting Dogs Nearby!
              </div>
              <picture>
                <source media="(max-width: 500px)" srcSet={project7m} />
                <img
                  id="project5"
                  src={project7}
                  alt="tindog project"
                  loading="lazy"
                  className="my-5"
                  style={{ width: "85%" }}
                />
              </picture>
              <p className="col-12 my-5 netflix-element" data-aos="fade-up">
                "TinDog is an exciting single-page website project that I
                developed as a responsive clone of Tinder, but with a fun twist
                – it's like Tinder, but for dogs! This unique platform brings
                dog owners together to find playmates for their furry friends,
                and users can do it all without navigating multiple pages. Built
                using HTML and CSS, the website boasts multiple sections,
                including a dynamic home page, engaging testimonials, and
                transparent pricing. The user-friendly interface allows seamless
                navigation, making it easy for dog lovers to connect and explore
                potential matches for their canine companions. TinDog is a
                delightful and interactive website that celebrates the joy of
                canine companionship."{" "}
                <a
                  href="https://tinder-clone-tindog.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check the live website
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </p>
            </div>
            And <span className="orange_text">Many More...</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
