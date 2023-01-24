import React, { useState } from "react";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import AnchorLogo from "../../Vector/AnchorLogo";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navIn">
        <div className="navInner">
          <div className=" flex flex-1">
            <div className="lastIn">
              <div className="logo">
                <Link to="/">
                  <AnchorLogo />
                </Link>
              </div>

              <div className="options">
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
              </div>
              <div className="lastgrp">
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
            </div>

            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <FaBars
                  size={30}
                  style={{
                    color: "#fff",
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    padding: "5px",
                  }}
                />
              ) : (
                <FaTimes
                  size={30}
                  style={{
                    color: "#fff",
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    padding: "5px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
