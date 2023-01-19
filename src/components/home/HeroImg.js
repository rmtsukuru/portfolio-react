import "../home/HeroImgStyles.css";

import React from "react";

//Importing my picture
import MyImg from "../../assets/alice.jpg";

//Importing link when use
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={MyImg} alt="My pic" />
      </div>
      <div className="content">
        <p>
          Hello, I AM <strong> Alice Nouhouemale</strong>{" "}
        </p>
        <h1>FULL-STACK WEB DEVELOPPER</h1>
        <div>
          {/* UsING link to make my btn clickable  */}
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
