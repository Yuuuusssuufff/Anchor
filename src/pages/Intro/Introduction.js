import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import Info from "../../components/Info/Info";
// import Image from "../../components/Image"
import Buttons from "../../components/Buttons/Buttons";
import "./introduction.css";

const { img1, img6, img7 } = require("../../assets/imageSource");
const { info1 } = require("../../assets/texts");

const Introduction = () => {
  return (
    <div className="introduction">
      
      <div className="intro">
        <Heading title="Say it all with Anchor" />
        <Info info={info1} />

        <Buttons path="/signup" anchorText="Get started" />

        <div className="switch_anchor">
          Already have podcast? <Link to="/switch">Switch to Anchor</Link>
        </div>
      </div>
      <div className="img-section">
        <img src={img1} alt="Photo_of_a_person_recording_podcast" />
      </div>
{/*       
      <div className='sect_two'>
        <Image imgSrc={img6} imgAlt='Phot of a reader'/>
        <Image imgSrc={img7} imgAlt='Phot of a recorder'/>
      </div> */}
     
    </div>
  );
};

export default Introduction;
