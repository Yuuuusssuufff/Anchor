import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/introduction.css";

const Buttons = ({path, anchorText}) => {
  return (
    <div>
        <Link to={path} className="btn1">{anchorText}</Link>
    </div>
  )
}

export default Buttons