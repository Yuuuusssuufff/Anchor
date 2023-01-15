import React from "react";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link } from "react-router-dom";
import {FaGlobe} from 'react-icons/fa'
import "./navbar.css";
// import '../index.css'


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
      <ul className="">
        <li>
          <Link to="/signin"></Link>
        </li>
        <li>
          <Link to="/signup">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/signup"><FaGlobe/>EN</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
