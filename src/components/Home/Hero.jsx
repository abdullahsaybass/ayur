import React from 'react'
import banner from '../../assets/hero-banner.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <img src={banner} alt="Banner" className="hero-image" />
    </div>
  )
}

export default Hero