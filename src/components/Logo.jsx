import React from 'react'
import image from '../assets/imag2.jpg'
import image2 from '../assets/react.svg'

function Logo({width = '100px'}) {
  return (
    <img className='h-10 rounded-xl' src={image}  alt='logo'/>
  )
}

export default Logo