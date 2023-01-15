import React from 'react'
import {Link} from 'react-router-dom'
import {FaApple, FaAppStoreIos} from 'react-icons/fa'

import "../styles/introduction.css";

const Buttons2 = ({path, anchorText}) => {
  return (
    <div>
      {/* <FaApple /> */}
        <Link to={path} className="btn1"><FaApple/><span>{anchorText}</span></Link>
    </div>
  )
}

export default Buttons2