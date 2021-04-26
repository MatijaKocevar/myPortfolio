import React from "react";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="d-flex justify-content-center">
        <h1>education</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Electrotechnician of computer science</h3>
            <h5>High school (.V) / 2004 - 2008</h5>
            <p>Gained basic programming skills in C++, HTML, CSS. </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Computer science and information technologies</h3>
            <h5>2008 - 2011 / College (.VI) - unfinished</h5>
            <p>
              Gained knowledge of Linux Shell scripting language, and furthered skills in C++, HTML
              and CSS.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
