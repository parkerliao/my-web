import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="paragraph">
          <h1>About Parker</h1>
          <h3>Student from YZU</h3>
          <p className="content">
            I am a student, majoring in electric engineering in YZU. Currently,I
            am studing about A.I and Web Development stuffs.
          </p>
          <a id="button" href="/#">Learn more</a>
        </div>
        <div className="image-container">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
