import React from 'react';
import './FoodSection.css';

const FoodSection = () => {
  return (
    <div className='food-section'>
      
      <div className="image-container">
        <img src="/IMAGES/Pizza-Diavola.png" alt="Pizza" />
      </div>
      
      
      <div className='food-text'>
        <p>Our Food Delivery Service is designed</p>
        <h2>To Be Fast</h2>
        <p>Enjoy Alar – Healthy meals without ever leaving your home!</p>
        <button>Order now</button>
      </div>
      
      
      <div className="image-container">
        <img src="/IMAGES/cante-kartoni.png" alt="Bag" />
      </div>
    </div>
  );
};

export default FoodSection;
