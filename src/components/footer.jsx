import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  let startingOffset = window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88;
  const [offset, setOffset] = useState(startingOffset);

  window.addEventListener("resize", () => {
    setOffset(window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88);
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="fpos">
              <a href="tel:+38670892271">070 892 271</a>
              <br />
              <a href="mailto: matija.kocev@gmail.com">matija.kocev@gmail.com</a>
              <p>Ljubljana, Slovenia</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={offset} ignoreCancelEvents={true} href="#">
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about-me"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="experience"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Experience
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="service" offset={offset} ignoreCancelEvents={true} href="#">
                  Services
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="testimonials"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Clients
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="fpos2">
              <div className="d-flex justify-content-center pt-1">
                <FacebookShareButton
                  url={"https://www.google.com"}
                  quote={"Google"}
                  hashtag="#javascript"
                >
                  <FacebookIcon className="mx-3" size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={"https://www.google.com"}
                  quote={"Google"}
                  hashtag="#javascript"
                >
                  <TwitterIcon className="mx-3" size={36} />
                </TwitterShareButton>
                <RedditShareButton
                  url={"https://www.google.com"}
                  quote={"Google"}
                  hashtag="#javascript"
                >
                  <RedditIcon className="mx-3" size={36} />
                </RedditShareButton>
                <LinkedinShareButton
                  url={"https://www.google.com"}
                  quote={"Google"}
                  hashtag="#javascript"
                >
                  <LinkedinIcon className="mx-3" size={36} />
                </LinkedinShareButton>
              </div>
              <p className="pt-2 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;M.K.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
