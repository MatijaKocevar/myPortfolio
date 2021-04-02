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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan aliquet
            auctor. Curabitur et felis finibus, placerat nisi scelerisque, rhoncus turpis. Nulla
            facilisi. Suspendisse sodales varius lectus, ac imperdiet magna sagittis at. Mauris
            libero libero, convallis in enim eget, lobortis fringilla quam. In eget blandit nunc, at
            aliquet ex. Aliquam lacinia tortor enim, vulputate varius risus vestibulum sed. Integer
            tempor quam tortor, ac luctus velit consequat quis. Ut finibus porttitor purus ac
            interdum. Nullam ullamcorper urna ut tellus pharetra, ac euismod ante feugiat. Nullam
            non leo ultricies, imperdiet dolor nec, fringilla purus. Vivamus tortor purus, mattis at
            orci elementum, convallis elementum risus. Vivamus tincidunt ligula fermentum erat
            porta, sed ullamcorper orci pulvinar. Nullam a nisi nisi. Maecenas sapien est, dignissim
            tempus arcu quis, fermentum pretium tortor. Aliquam quis sapien ullamcorper, tristique
            odio et, sodales eros. Sed ut sapien ligula. Etiam ornare diam lectus, eu consectetur
            massa cursus non. Sed malesuada lectus at mattis molestie. Quisque vel accumsan velit,
            non rutrum nisl. Phasellus in luctus sem. Nullam ut est sit amet velit sollicitudin
            tincidunt at at erat. Praesent id enim pharetra, finibus tellus eu, dictum nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
