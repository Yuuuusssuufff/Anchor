import React from 'react'
import { Link } from "react-router-dom";
import "../styles/endnote.css";

const EndNote = () => {
  return (
    <div className="introduction">
      <div className="intro">
        <h1>Say it all with Anchor</h1>
        <p className="note">
          Spotify’s free podcasting platform—the easiest way to create,
          distribute, and monetize your show.
        </p>
        <Link to="/signup" className="btn1">Get started</Link>
        <p className="switch_anchor">
          Already have podcast? <Link to="/switch">Switch to Anchor</Link>
        </p>
      </div>
      
    </div>
  )
}

export default EndNote