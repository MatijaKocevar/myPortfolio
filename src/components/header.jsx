import React, { useState } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  let startingOffset = window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88;
  const [offset, setOffset] = useState(startingOffset);

  window.addEventListener("resize", () => {
    setOffset(window.innerWidth < 768 ? -63 : window.innerWidth < 992 ? -67 : -88);
  });

  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>very inspiring and motivational quote</h1>
        <Typed
          className="typed-text"
          strings={["This", "is", "cool"]}
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
