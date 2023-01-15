import React, {useState} from "react";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Anchor</Link>
      </div>
      <ul className={click ? "navlinks.active" : "navlinks"}>
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
        {/* <ul className=""> */}
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
          <Link to="/signup">
            <FaGlobe />
            EN
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?<FaBars size={30} style={{color:"#fff", position: "absolute", top: "0", right:"0", padding: "5px"}} />
        :<FaTimes size={30} style={{color:"#fff", position: "absolute", top: "0", right:"0%", padding: "5px"}} />}
      </div>
    </div>
  );
};

export default Navbar;
