import React from 'react'
import './info.css'

const Info = ({info}) => {
  return (
    <div>
        <h2 className="info">
         {info}
        </h2>
    </div>
  )
}

export default Info