import React from 'react'

const Image = ({imgSrc, imgAlt}) => {
  return (
    <div>
        <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}

export default Image