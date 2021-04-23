import React, { useState } from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const NavBar = () => {
  let startingOffset =
    window.innerWidth < 768
      ? -61
      : window.innerWidth < 991
      ? -61
      : window.innerWidth < 1199
      ? -61
      : -86;

  let startingToggle =
    window.innerWidth < 768
      ? "collapse"
      : window.innerWidth < 991
      ? "collapse"
      : window.innerWidth < 1199
      ? "keep"
      : "keep";

  const [offset, setOffset] = useState(startingOffset);

  const [toggle, setToggle] = useState(startingToggle);

  window.addEventListener("resize", () => {
    setOffset(
      window.innerWidth < 768
        ? -61
        : window.innerWidth < 991
        ? -61
        : window.innerWidth < 1199
        ? -61
        : -86
    );
    setToggle(
      window.innerWidth < 768
        ? "collapse"
        : window.innerWidth < 991
        ? "collapse"
        : window.innerWidth < 1199
        ? "keep"
        : "keep"
    );
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
              <li className="nav-item active">
                <Link
                  smooth={true}
                  to="about-me"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  about me
                </Link>
              </li>
              {/* - */}
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="education"
                  offset={offset}
                  ignoreCancelEvents={true}
                  className="nav-link"
                  href="#"
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  education
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
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
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
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  skills
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
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  projects
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
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  interests
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
                  data-bs-toggle={toggle}
                  data-bs-target="#navbarNav"
                >
                  contact me
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
