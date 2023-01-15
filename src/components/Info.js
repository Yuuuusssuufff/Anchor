import React from 'react'
import '../styles/introduction.css'

const Info = ({info}) => {
  return (
    <div>
        <h1 className="info">
         {info}
        </h1>
    </div>
  )
}

export default Info