import React from "react";
import { Link } from "react-router-dom";
import "../styles/cview.css"

const Anchor = ({ path, linkText }) => {
  return (
    <div className="links">
      <Link to={path}>
        <span>{linkText}</span>
      </Link>
    </div>
  );
};

export default Anchor;
