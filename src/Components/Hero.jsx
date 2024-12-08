import React from 'react'
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero'>
      <div className='tacos'>
        <p>Specialties like</p>
        <h1>Shrimp tacos</h1>
        <h2>Bringing people together</h2>
        <img src="IMAGES/Tacos-karkaleca.jpg" alt="Tacos" />
        <button className='taco-btn'>Order now</button>
      </div>
      <div className='salads'>
        <p>Fresh</p>
        <h1>Salads test</h1>
        <p>Super delicious</p>
        <button className='salad-btn'>Order now</button>
      </div>
    </div>
  )
}

export default Hero;
