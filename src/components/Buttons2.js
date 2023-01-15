import React from 'react'
import {Link} from 'react-router-dom'
// import {FaApple, FaAppStoreIos} from 'react-icons/fa'

import "../styles/introduction.css";

const Buttons2 = ({path, anchorText, icon}) => {
  return (
    <div>
              <Link to={path} className="btn1">{icon}<span>{anchorText}</span></Link>
    </div>
  )
}

export default Buttons2