import React, { useState } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  let startingOffset =
    window.innerWidth < 768
      ? -61
      : window.innerWidth < 991
      ? -61
      : window.innerWidth < 1199
      ? -61
      : -86;
  const [offset, setOffset] = useState(startingOffset);

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
  });

  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>portfolio</h1>
        <Typed
          className="typed-text"
          strings={["Creative", "Hard working", "Positive"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contacts"
          offset={offset}
          ignoreCancelEvents={true}
          href="#"
          className="btn-main-offer"
        >
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
