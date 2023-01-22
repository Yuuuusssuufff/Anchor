import React from "react";
import Anchor from "../../Atoms/Anchor/Anchor";
import "./cview.css";

const CView = ({ img, text, path, linkText }) => {
  return (
    <div className="all">
      <div className="inner">
        <div className="innermost">
          <div className="note_section">
            <h3 className="note">{text}</h3>
            <span>
              <Anchor path={path} linkText={linkText} />
            </span>
          </div>
          <div className="img_section">
            <div className="img-bgd">
            <img src={img} alt={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CView;
