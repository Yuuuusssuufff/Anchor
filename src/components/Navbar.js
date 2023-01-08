import React from "react";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import '../index.css'


const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Anchor</h1>
      </Link>
      <ul>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/switch">Switch to Anchor</Link>
        </li>
        <li>
          <Link to="/ads">Ads by Anchor</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
