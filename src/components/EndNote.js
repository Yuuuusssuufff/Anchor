import React from 'react'
import { Link } from "react-router-dom";
import "../styles/endnote.css";
import Anchor from './Anchor';

const EndNote = () => {
  return (
    <div className="introduction">
      <div className="intro">
        <h1>For everyone, everywhere, for free</h1>
        <p className="note">
        We believe everyone's stories can and should be heard, so we're giving creators around the world—from first-time podcasters to pros—a powerful platform to <Anchor path='/' linkText='share their voices'/>.
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