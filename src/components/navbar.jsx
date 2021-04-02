import React, { useState } from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const NavBar = () => {
  let startingOffset = window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88;
  const [offset, setOffset] = useState(startingOffset);

  window.addEventListener("resize", () => {
    setOffset(window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88);
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="container-fluid">
          <Link smooth={true} to="home" className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="about-me"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  about me
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  experience
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="service"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  services
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  portfolio
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="testimonials"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  clients
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contacts"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
