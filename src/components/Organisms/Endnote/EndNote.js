import React from "react";
import { Link } from "react-router-dom";
import "./endnote.css";
import Anchor from "../../Atoms/Anchor/Anchor";
import Buttons from "../../Atoms/Buttons/Buttons";

const EndNote = () => {
  return (
    <div className="introduction1">
      <div className="intro1">
        <h2>For everyone, everywhere, for free</h2>
        <div className="note1">
          We believe everyone's stories can and should be heard, so we're giving
          creators around the world—from first-time podcasters to pros—a
          powerful platform to
          
            <Anchor path="/" linkText=" share their voices" />
          
          
        </div>
        <Buttons anchorText="Get started" path="/signup" className="btn"/>
         
        
        <p className="switch_anchor1">
          Already have podcast? <Link to="/switch">Switch to Anchor</Link>
        </p>
      </div>
    </div>
  );
};

export default EndNote;
