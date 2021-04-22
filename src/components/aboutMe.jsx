import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about-me" className="aboutMe container">
      <h1 className="about-heading">about me</h1>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="about-photo-wrap">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <p>
          Hello! I am Matija. I am trying to become a junior developer. This is my first webpage which I created to serve as my developers resume.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
