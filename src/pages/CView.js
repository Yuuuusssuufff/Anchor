import React from "react";
import Anchor from '../components/Anchor'
import "../styles/cview.css";

const CView = ({ img, text, path, linkText }) => {
  return (
    <div className="all">
      <div className="note_section">
        <h1 className="note">{text}</h1>
        <span>
        <Anchor path={path} linkText={linkText}/></span>
      </div>
      <div className="img_section">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default CView;
