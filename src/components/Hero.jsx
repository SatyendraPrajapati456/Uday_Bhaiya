import React from 'react';
import heroImage from '../assets/leo.jpg';

function Hero() {
  return (
    <>
      <h1>Transforming Plastic Waste into a Sustainable Urban Infrastructure</h1>
      <div>
        <img src={heroImage} className="front" alt="Hero" />
      </div>
      <p className="description">Enhance your life with a better tomorrow</p>
    </>
  );
}

export default Hero;