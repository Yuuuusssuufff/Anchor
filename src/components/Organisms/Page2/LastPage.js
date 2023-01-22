import React from "react";
import { note5 } from "../../../assets/texts";
import Buttons from "../../Atoms/Buttons/Buttons";
import "./lastpage.css";

import Info from "../../Atoms/Info/Info";

const LastPage = ({ img, text, path, linkText, info }) => {
  return (
    <div className="all">
      <div className="note_section">
        <div className="note">{text}</div>

        <p>{note5}</p>
        <Buttons path={path} anchorText={linkText} />
      </div>
      <div className="img_section">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default LastPage;
