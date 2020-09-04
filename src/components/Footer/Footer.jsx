import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="context-container">
        <span id="contact-us">Contact Us</span>
        <div className="contact-icons">
          <a >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
        <div className="contact-words">
          <span id="phone">Phone:0983933561 </span>|
          <span id="email">Email:joshf1558@gmail.com</span>
        </div>
        <div className="made-by">@Made by Parker-Liao 2020/8/20</div>
      </div>
    </div>
  );
};

export default Footer;
