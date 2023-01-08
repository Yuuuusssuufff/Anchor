import React from "react";
import { Link } from "react-router-dom";

const Anchor = ({ path, linkText }) => {
  return (
    <div>
      <Link to={path}>
        <span>{linkText}</span>
      </Link>
    </div>
  );
};

export default Anchor;
