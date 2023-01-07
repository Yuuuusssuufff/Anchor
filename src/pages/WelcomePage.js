import React from "react";
import { Link } from "react-router-dom";
import "../styles/introduction.css";
import img1 from "../assets/anchor-hero-img-C1.webp";
import Heading from '../components/Heading'
import Info from "../components/Info"
import Links from "../components/Buttons"
const {info1} = require('../assets/texts')
const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro">
        <Heading title='Say it all with Anchor' /> 
        <Info info={info1}/>
        
        <Links path='/signup' anchorText='Get started'/>
        
        <p className="switch_anchor">
          Already have podcast? <Link to="/switch">Switch to Anchor</Link>
        </p>
      </div>
      <div className="img-section">
        <img src={img1} alt="Photo_of_a_person_recording_podcast" />
      </div>
    </div>
  );
};

export default Introduction;
