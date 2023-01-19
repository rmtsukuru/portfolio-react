import React from "react";

import "../footer/FooterStyles.css";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Seattle, Washington</p>
              <p>United States</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1 (425) 240 - 2401
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              alicenouhouemale@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Full-Stack web devepoler. Fully Work Authorized • No Visa
            Sponsorship Required.
          </p>
          <div className="social">
            <a href="https://github.com/Alicenouhouemale" target="_blanc">
              {" "}
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/alice-nouhouemale"
              target="_blanc"
            >
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
