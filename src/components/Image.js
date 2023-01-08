import React from 'react'
import '../styles/image.css'

const Image = ({imgSrc, imgAlt}) => {
  return (
    <div className='imageClass'>
        <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}

export default Image