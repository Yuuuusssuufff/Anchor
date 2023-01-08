import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaAppleAlt } from "react-icons/fa";
import "../styles/footer.css";
import Buttons from "./Buttons";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <small>2021 @ spotify AB</small>
      </Link>
      <ul>
        <li>
          <Link to="/features">career</Link>
        </li>
        <li>
          <Link to="/switch">legal</Link>
        </li>
        <li>
          <Link to="/ads">help</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/features">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link to="/switch">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link to="/ads">
            <FaInstagram />
          </Link>
        </li>
      </ul>
      <div>
        <Buttons path="/" anchorText="Go" />
        <Buttons path="/" anchorText="Come" />
      </div>
    </div>
  );
};

export default Footer;
