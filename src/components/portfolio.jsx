import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Project 1
  const openPopupboxProject1 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project1} alt="Portfolio webpage" />
        <p>My first webpage, made using ReactJS</p>
        <b>Link:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/MatijaKocevar/myPortfolio/tree/main")}
        >
          GitHub
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "Portfolio webpage",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 2
  const openPopupboxProject2 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project2} alt="Project 2" />
        <p>PROJECT 2</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://www.google.com")}>
          Google
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "Project 2",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 3
  const openPopupboxProject3 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project3} alt="Project 3" />
        <p>PROJECT 3</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://www.google.com")}>
          Google
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "Project 3",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 4
  const openPopupboxProject4 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={project4} alt="Project 4" />
        <p>PROJECT 4</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://www.google.com")}>
          Google
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "Project 4",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center">portfolio</h1>
        <div className="image-box-wrapper row">
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject1}>
            <img className="portfolio-image" src={project1} alt="Portfolio webpage" />
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div className="overlay"></div>
            <h3>Portfolio webpage</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject2}>
            <img className="portfolio-image" src={project2} alt="Project 2..." />
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div className="overlay"></div>
            <h3>Project 2</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject3}>
            <img className="portfolio-image" src={project3} alt="Project 3..." />
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div className="overlay"></div>
            <h3>Project 3</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject4}>
            <img className="portfolio-image" src={project4} alt="Project 4..." />
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div className="overlay"></div>
            <h3>Project 4</h3>
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
