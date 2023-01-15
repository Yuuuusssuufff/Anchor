import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaApple, FaGooglePlay } from "react-icons/fa";
import "./footer.css";
// import Buttons from "./Buttons";
import Buttons2 from "../Buttons/Buttons2";

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
      <div className="footer_btn">
        <Buttons2 icon={<FaApple/>} path="/" anchorText="App store" />
        <Buttons2 icon={<FaGooglePlay/>}path="/" anchorText="Google play" />
      </div>
    </div>
  );
};

export default Footer;
