import React, { useState } from "react";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Buttons from "../../Atoms/Buttons/Buttons"
import AnchorLogo from "../../Vector/AnchorLogo";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar"
    // {click ?"navbar" :"navbar-active"}
    >
      <div className="navIn">
        <div className="navInner">
          <div className=" flex flex-1">
            <div className=
            {click?"lastIn-active" :"lastIn"}
            >
             
              <div className="logo">
                <Link to="/">
                  <AnchorLogo />
                </Link>
              </div>

              <div className= "options">
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
              <div className= "lastgrp">
                <span>
                  <Link to="/signup">{click?"Sign in":"Careers"}</Link>
                </span>
                <span>
                  <Link to="/signup">{click ?"Sign up": "Help"}</Link>
                </span>
                <span className="lang">
                  <Link to="/signup">
                    <FaGlobe />
                    EN
                  </Link>
                </span>
              </div>
              {click &&   <div className="sect-but">

                <Buttons path="/" anchorText="Sign up" />
                <Buttons path="/" anchorText="Sign in" />

                </div>}
            </div>

            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <FaTimes
                  size={30}
                  style={{
                    color: "#fff",
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    padding: "5px",
                  }}
                />)
                :(<FaBars
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
