import React from 'react'
import {Link} from 'react-router-dom'
import "./buttons.css";

const Buttons = ({path, anchorText}) => {
  return (
    <div>
        <Link to={path} className="btn1">{anchorText}</Link>
    </div>
  )
}

export default Buttons