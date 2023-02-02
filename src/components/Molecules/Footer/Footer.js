import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import "./footer.css";
// import Buttons from "./Buttons";
import Buttons2 from "../../Atoms/Buttons/Buttons2";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sets">

      <div className="spotify">

      <Link to="/">
        <small>2021 @ spotify AB</small>
      </Link>
      </div>
      <div className="feat">
        <span className="max-md:invisible">
          <Link to="/features">career</Link>
        </span>
        <span>
          <Link to="/switch">Legal</Link>
        </span>
        <span className="max-md:invisible">
          <Link to="/ads">help</Link>
        </span>
      </div>
      </div>
      <div className="soc">
        <span>
          <Link to="/features">
            <FaFacebook />
          </Link>
        </span>
        <span>
          <Link to="/switch">
            <FaTwitter />
          </Link>
        </span>
        <span>
          <Link to="/ads">
            <FaInstagram />
          </Link>
        </span>
      </div>
      <div className="footer_btn">
        <Buttons2 icon={<FaApple />} path="/" anchorText="App store" />
        <Buttons2 icon={<FaGooglePlay />} path="/" anchorText="Google play" />
      </div>
    </div>
  );
};

export default Footer;
