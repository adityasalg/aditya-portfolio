import React, { forwardRef } from "react";
import "./Skills.css";
import Tile from "../Tile/Tile";

const Skills = ({ props }, ref) => {
  return (
    <>
      <div ref={ref} className="skills-container">
        <div className="skills-heading-container">
          <h1 className="skills-heading">Skills</h1>
        </div>
        <div className="sub-section">
          <div className="section-heading-container">
            <h4 className="section-heading">Proficient in:</h4>
          </div>
          <div className="skills">
            <Tile
              imgName="react.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              ReactJS
            </Tile>
            <Tile
              imgName="react.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              React Native
            </Tile>
            <Tile
              imgName="html.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              HTML
            </Tile>
            <Tile
              imgName="css.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              CSS
            </Tile>
            <Tile
              imgName="javascript.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              JavaScript
            </Tile>
            <Tile
              imgName="typescript.png"
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              TypeScript
            </Tile>
          </div>
        </div>

        <div className="sub-section">
          <div className="section-heading-container">
            <h4 className="section-heading">Basic understanding of:</h4>
          </div>
          <Tile
            imgName="redux.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            Redux
          </Tile>
          <Tile
            imgName="tailwind.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            TailwindCSS
          </Tile>
          <Tile
            imgName="nodejs.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            NodeJS
          </Tile>
          <Tile
            imgName="nestjs.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            NestJS
          </Tile>
          <Tile
            imgName="graphql.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            GraphQL
          </Tile>
          <Tile
            imgName="swift.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            Swift
          </Tile>
        </div>

        <div className="sub-section">
          <div className="section-heading-container">
            <h4 className="section-heading">Tools used:</h4>
          </div>
          <Tile
            imgName="github.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            Git
          </Tile>
          <Tile
            imgName="jira.png"
            style={{ marginRight: 10, marginBottom: 10 }}
          >
            Jira
          </Tile>
        </div>
      </div>
      <div className="download-button-container">
        <a
          href="https://drive.google.com/uc?export=download&id=1QeEPR5eRerTxOWgXnr5SYLuv7Ju-zyeI"
          download
        >
          <button className="download-btn">
            <div className="download-button-content">
              <img
                className="download-logo"
                src={require(`../../assets/logo/download.png`)}
              />
              <span className="btn-text">Download My Resume</span>
            </div>
          </button>
        </a>
      </div>
      <hr className="separator-line" />
    </>
  );
};

export default forwardRef(Skills);
