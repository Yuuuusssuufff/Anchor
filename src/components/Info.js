import React from 'react'
import '../styles/introduction.css'

const Info = ({info}) => {
  return (
    <div>
        <p className="info">
         {info}
        </p>
    </div>
  )
}

export default Info