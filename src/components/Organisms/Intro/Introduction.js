import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../Atoms/Heading";
import Info from "../../Atoms/Info/Info";

import Buttons from "../../Atoms/Buttons/Buttons";
import "./introduction.css";

const { img1, img3, img2 } = require("../../../assets/imageSource");
const { info1 } = require("../../../texts");

const Introduction = () => {
  return (
    <div className=" introduction">
      <div className="sections">
        <div className="intro">
          <Heading title="Say it all with Anchor" />
          <Info info={info1} />

          <Buttons path="/signup" anchorText="Get started" />

          <div className="switch_anchor">
            Already have podcast? <Link to="/switch">Switch to Anchor</Link>
          </div>
        </div>
        <div className="img-section">
          <div className="imgShell">
            <img
              src={img1}
              className="image"
              alt="Photo_of_a_person_recording"
            />
          </div>
        </div>
      </div>
      <div className="img_sect2">
        <img src={img2}  className="sect1" alt="photo of a person recording podcast"/>
        <img src={img3}  className="sect2" alt="photo of a person recording pod"/>
      </div>
    </div>
  );
};

export default Introduction;
