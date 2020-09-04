import React from "react";
import "./Skill.scss";

import cpp from "../../../assets/images/SVG/cpp.svg";
import html5 from "../../../assets/images/SVG/html5.svg";
import css from "../../../assets/images/SVG/css3.svg";
import javascript from "../../../assets/images/SVG/js.svg";
import sass from "../../../assets/images/SVG/sass.svg";
import node from "../../../assets/images/SVG/node.svg";
import java from "../../../assets/images/SVG/java.svg";

const common_path = "../../../assets/images/SVG/";

const skills = [
  {
    name: "C++",
    path: cpp,
  },
  {
    name: "Html",
    path: html5,
  },
  {
    name: "Css",
    path: css,
  },
  {
    name: "JavaScript",
    path: javascript,
  },
  {
    name: "Sass",
    path: sass,
  },
  {
    name: "Java",
    path: java,
  },
  {
    name: "Node.js",
    path: node,
  },
];

const Skill = () => {
  return (
    <div className="skills-container">
      <div className="skills-row">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h3 className="skill-name">{skill.name}</h3>
              <img src={skill.path} alt="Error"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
