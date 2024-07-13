import React from "react";
import "./Experience.css";

const ExperienceTile = ({ data }) => {
  const isSinglePosition = () => {
    return data.positions.length === 1;
  };

  const getExperienceCard = (position) => {
    return (
      <div className="position-container" style={{ marginTop: 12 }}>
        <h4 className="position">
          <span>&#x2022;</span> {position.title}
        </h4>
        <h4 className="duration" style={{ marginLeft: 10 }}>
          {position.duration} <span>&#x2022;</span> {position.experience}
        </h4>
      </div>
    );
  };

  return (
    <div className="company-details-container">
      <div className="company-logo-container">
        <a href={data.companyUrl} target="_blank">
          <img
            className="company-logo"
            src={require(`../../assets/logo/${data.logoName}`)}
          />
        </a>
      </div>
      <div className="position-details-container">
        <h4 className="position"><a href={data.companyUrl} target="_blank" className="company-name-link">{data.companyName}</a></h4>
        {isSinglePosition() ? (
          <>
            <h4 className="company-name">
              {data.positions[0].title} <span>&#x2022;</span> {data.category}
            </h4>
            <h4 className="duration">
              {data.positions[0].duration} <span>&#x2022;</span>{" "}
              {data.positions[0].experience}
            </h4>
          </>
        ) : (
          <h4 className="company-name">
            {data.category} <span>&#x2022;</span> {data.totalExperience}
          </h4>
        )}
        <h4 className="duration">{data.location}</h4>

        {!isSinglePosition() && (
          <div>
            {data.positions.map((position) => {
              return getExperienceCard(position);
            })}
          </div>
        )}

        <div className="skills-applied-container">
          <h4 className="skills-heading">
            Skills:{" "}
            <span className="skills-list">
              {data.skills.map((skill) => {
                return (
                  <>
                    <span>&#x2022;</span> {skill}{" "}
                  </>
                );
              })}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
