import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="tacos">
        <h3>Specialties like</h3>
        <h1>Shrimp tacos</h1>
        <h3>Bringing People Together</h3>
        <img src="/IMAGES/taco1.png" alt="Tacos" />
        <div className="buttons-container">
          <button className="taco-btn">Order now</button>
        </div>
      </div>

      <div className="salads">
        <h3>Fresh</h3>
        <h1>Salads test</h1>
        <h3>Super delicious</h3>
        <img src="/IMAGES/Sallate-Uova1.png" alt="Salad" />
        <div className="buttons-container">
          <button className="salad-btn">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
