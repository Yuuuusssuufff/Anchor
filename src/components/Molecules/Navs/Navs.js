import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./navs.css";

const Navs = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navs">
      <div className="logo">
        <Link to="/">Anchor</Link>
      </div>
      <div className="">
        
        <span>
          <Link to="/features">Features</Link>
        </span>
        <span>
          <Link to="/switch">Switch to Anchor</Link>
        </span>
        <span>
          <Link to="/ads">Ads by Anchor</Link>
        </span>
        <span>
          <Link to="/blog">Blog</Link>
        </span>

        <span>
          <Link to="/signup">Sign in</Link>
        </span>
        <span>
          <Link to="/signup">Sign up</Link>
        </span>
        <span className="lang">
          <Link to="/signup">
            <FaGlobe />
            EN
          </Link>
        </span>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars
            size={30}
            style={{
              color: "#fff",
              position: "absolute",
              top: "0",
              right: "0",
              padding: "5px",
            }}
          />
        ) : (
          <FaTimes
            size={30}
            style={{
              color: "#fff",
              position: "absolute",
              top: "0",
              right: "0%",
              padding: "5px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navs;
