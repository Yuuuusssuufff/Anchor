import React from 'react'
import { note5 } from '../assets/texts';
import Buttons from '../components/Buttons';
import '../styles/lastpage.css'

import Info from '../components/Info';

const LastPage = ({ img, text, path, linkText, info }) => {
  return (
    <div className="all">
      <div className="note_section">
        <div className="note">{text}</div>
        <span>
        <Info info={info}/></span>
        <p>{note5}</p>
        <Buttons path={path} anchorText={linkText} />
      </div>
      <div className="img_section">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default LastPage