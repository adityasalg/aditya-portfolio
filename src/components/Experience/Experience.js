import React, { forwardRef, useState } from "react";
import "./Experience.css";
import ExperienceTile from "./ExperienceTile";

const CATEGORIES = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
};

const Experience = ({ props }, ref) => {
  const [data, setData] = useState([
    {
      companyName: "Circana",
      logoName: "circana.png",
      companyUrl: "https://www.linkedin.com/company/wearecircana/mycompany/",
      positions: [
        {
          title: "Senior Software Engineer",
          duration: "Feb 2024 - Present",
        },
      ],
      category: CATEGORIES.FULL_TIME,
      location: "Pune, Maharashtra, India",
      skills: [
        "React Native",
        "HTML",
        "CSS",
        "Redux",
        "TypeScript",
        "JavaScript",
      ],
      shouldAddSeparator: true,
    },
    {
      companyName: "Fold Health",
      logoName: "fold.png",
      companyUrl: "https://www.linkedin.com/company/fold-health-inc/",
      positions: [
        {
          title: "Software Engineer",
          duration: "Jul 2022 - Nov 2023",
          experience: "1 yr 5 mos",
        },
      ],
      category: CATEGORIES.FULL_TIME,
      location: "Pune, Maharashtra, India",
      skills: [
        "ReactJS",
        "React Native",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Redux",
        "NestJS",
        "GraphQL",
      ],
      shouldAddSeparator: true,
    },
    {
      companyName: "athenahealth",
      logoName: "athena.png",
      companyUrl: "https://www.linkedin.com/company/athenahealth/",
      totalExperience: "2 yr 5 mos",
      positions: [
        {
          title: "Member Of Technical Staff",
          duration: "May 2021 - Jul 2022",
          experience: "1 yr 3 mos",
        },
        {
          title: "Associate Member Of Technical Staff",
          duration: "Mar 2020 - Apr 2021",
          experience: "1 yr 2 mos",
        },
      ],
      category: CATEGORIES.FULL_TIME,
      location: "Pune, Maharashtra, India",
      skills: ["Swift", "React Native", "NodeJS", "TypeScript"],
      shouldAddSeparator: false,
    },
  ]);
  return (
    <>
      <div ref={ref} className="exp-container">
        <div className="exp-heading-container">
          <h1 className="exp-heading">Experience</h1>
        </div>
        {data.map((expObj) => {
          return (
            <>
              <ExperienceTile data={expObj} />
              {expObj.shouldAddSeparator && (
                <hr className="company-separator" />
              )}
            </>
          );
        })}
      </div>
      <hr className="separator-line" />
    </>
  );
};

export default forwardRef(Experience);
