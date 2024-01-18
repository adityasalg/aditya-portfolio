import React, { forwardRef } from "react";
import "./Experience.css";

const Experience = ({ props }, ref) => {
  return (
    <>
      <div ref={ref} className="exp-container">
        <div className="exp-heading-container">
          <h1 className="exp-heading">Experience</h1>
        </div>
        <div className="company-details-container">
          <div className="company-logo-container">
            <a
              href="https://www.linkedin.com/company/fold-health-inc/"
              target="_blank"
            >
              <img
                className="company-logo"
                src={require(`../../assets/logo/fold.png`)}
              />
            </a>
          </div>
          <div className="position-details-container">
            <h4 className="position">Software Engineer</h4>
            <h4 className="company-name">
              Fold Health <span>&#x2022;</span> Full-time
            </h4>
            <h4 className="duration">
              Jul 2022 - Nov 2023 <span>&#x2022;</span> 1 yr 5 mos
            </h4>
            <h4 className="duration">Pune, Maharashtra, India</h4>
            <div className="skills-applied-container">
              <h4 className="skills-heading">
                Skills:{" "}
                <span className="skills-list">
                  ReactJS <span>&#x2022;</span> React Native{" "}
                  <span>&#x2022;</span> HTML <span>&#x2022;</span> CSS{" "}
                  <span>&#x2022;</span> JavaScript <span>&#x2022;</span>{" "}
                  TypeScript <span>&#x2022;</span> Redux <span>&#x2022;</span>{" "}
                  NestJS <span>&#x2022;</span> GraphQL
                </span>
              </h4>
            </div>
          </div>
        </div>
        <hr className="company-separator" />
        <div className="company-details-container">
          <div className="company-logo-container">
            <img
              className="company-logo"
              src={require(`../../assets/logo/athena.png`)}
            />
          </div>
          <div className="position-details-container">
            <h4 className="position">athenahealth</h4>
            <h4 className="company-name">
              Full-time <span>&#x2022;</span> 2 yr 5 mos
            </h4>
            <h4 className="duration">Pune, Maharashtra, India</h4>

            <div className="position-container" style={{ marginTop: 12 }}>
              <h4 className="position">
                <span>&#x2022;</span> Member Of Technical Staff
              </h4>
              <h4 className="duration" style={{ marginLeft: 10 }}>
                May 2021 - Jul 2022 <span>&#x2022;</span> 1 yr 3 mos
              </h4>
            </div>

            <div className="position-container" style={{ marginTop: 12 }}>
              <h4 className="position">
                <span>&#x2022;</span> Associate Member Of Technical Staff
              </h4>
              <h4 className="duration" style={{ marginLeft: 10 }}>
                Mar 2020 - Apr 2021 <span>&#x2022;</span> 1 yr 2 mos
              </h4>
            </div>

            <div className="skills-applied-container" style={{marginTop: 14, marginBottom: 20}}>
              <h4 className="skills-heading">
                Skills:{" "}
                <span className="skills-list">
                  Swift <span>&#x2022;</span> React Native <span>&#x2022;</span>{" "}
                  NodeJS <span>&#x2022;</span> TypeScript
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="separator-line" />
    </>
  );
};

export default forwardRef(Experience);
