import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = ({path, linkText}) => {
  return (
    <div>
    <Link to={path}>{linkText}</Link>
    </div>
  )
};

export default Anchor