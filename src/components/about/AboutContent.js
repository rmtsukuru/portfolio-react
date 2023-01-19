import React from "react";

import "../about/AboutContentStyles.css";
import { Link } from "react-router-dom";
// import pic from "../assets/pic-one.jpg";
import pic from "../../assets/pic-one.jpg";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am?</h1>
        <p>
          Full-stack web developer with a background in Computer Science,
          specializing in the MERN stack, I create reponsive secure websites.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pic} className="img" alt="pic-one" />
          </div>
          <div className="img-stack bottom">
            {/* <img src={Desktop} className="img" alt="picture-one" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
