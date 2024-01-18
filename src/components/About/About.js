import React, { forwardRef } from "react";
import "./About.css";
import { getAge } from "../../utils/CommonUtils.js";
const About = ({ props }, ref) => {
  return (
    <>
      <div ref={ref} className="about-container">
        <div className="profile-container">
          <div>
            <img
              className="profile-photo"
              src={require("../../assets/images/profile_photo.jpeg")}
            />
          </div>
          <div>
            <ul className="media-ul">
              <li>
                <a
                  href="https://www.linkedin.com/in/aditya-salgaonkar-7876621a5/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="mailto: adityasalg97@gmail.com" target="_blank">
                  <i className="fab fa-google icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ad1_salgaonkar/"
                  target="_blank"
                >
                  <i className="fab fa-instagram icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-me">
          <h1 className="about-me-heading">About me!</h1>
          <div className="about-me-paragraph-container">
            <p>
              Hi I am Aditya Salgaonkar, a {getAge("1997-05-16")} year old Full
              stack developer working with tech stack React, React Native and
              Node.js in{" "}
              <a
                className="location-link"
                href="https://maps.app.goo.gl/xsefgSyUrXc38uXC9"
                target="_blank"
              >
                {" "}
                Pune, India
              </a>
              . I am a committed and innovative professional with strong
              analytical and debugging skills.
            </p>
            <p>
              Have a look at my skills or just connect with me on{" "}
              <span className="linkedin-connect">
                <a
                  href="https://www.linkedin.com/in/aditya-salgaonkar-7876621a5/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
              . I am always excited to do work with like minded people.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator-line" />
    </>
  );
};

export default forwardRef(About);
