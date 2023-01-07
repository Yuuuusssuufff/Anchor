import React from "react";
import '../styles/cview.css'

const CView = ({img, text}) => {
  return (
    <div className="all">
      <div className="note_section"><p className="note">{text}</p></div>
      <div className="img_section">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default CView;
