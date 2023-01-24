import React from "react";
// import { note5 } from "../../../texts";
import Buttons from "../../Atoms/Buttons/Buttons";
import "./lastpage.css";

import Info from "../../Atoms/Info/Info";

const LastPage = ({ img, text, path, linkText, note}) => {
  return (
    <div className="alls">
      <div className="in">
        
        <div className="note_section">
          <div className="note">{text}</div>

          <div>{note}</div>
          <Buttons path={path} anchorText={linkText} />
        </div>
        <div className="img_section">
          <img src={img} alt={img} />
        </div>
      </div>
    </div>
  );
};

export default LastPage;
