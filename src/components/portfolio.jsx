import React from "react";
import project1 from "../images/project1.png";
import woi from "../images/woi.png";
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
        text: "Online resume",
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
        <img className="portfolio-image-popupbox" src={woi} alt="..." />
        <p>...</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/MatijaKocevar")}>
          GitHub
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "...",
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
        <img className="portfolio-image-popupbox" src={woi} alt="..." />
        <p>...</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/MatijaKocevar")}>
          GitHub
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "...",
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
        <img className="portfolio-image-popupbox" src={woi} alt="..." />
        <p>...</p>
        <b>Link:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/MatijaKocevar")}>
          GitHub
        </a>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: "...",
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
            <div className="project-wrapper">
              <img className="portfolio-image" src={project1} alt="Portfolio webpage" />
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              <div className="overlay"></div>
            </div>
            <h3>Online resume</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject2}>
            <div className="project-wrapper">
              <img className="portfolio-image" src={woi} alt="Project 2..." />
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              <div className="overlay"></div>
            </div>
            <h3>...</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject3}>
            <div className="project-wrapper">
              <img className="portfolio-image" src={woi} alt="Project 3..." />
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              <div className="overlay"></div>
            </div>
            <h3>...</h3>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6" onClick={openPopupboxProject4}>
            <div className="project-wrapper">
              <img className="portfolio-image" src={woi} alt="Project 4..." />
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              <div className="overlay"></div>
            </div>
            <h3>...</h3>
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
