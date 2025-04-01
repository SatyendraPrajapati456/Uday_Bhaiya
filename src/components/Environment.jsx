import React from 'react';
import environmentImage from '../assets/3page_image.jpg';

function Environment() {
  return (
    <section className="environment">
      <h2>PROTECT ENVIRONMENT</h2>
      <div className="environment-content">
        <img 
          className="third_image" 
          src={environmentImage} 
          alt="Waste management site" 
        />
        <div className="text-content">
          <h3>DISCOVER THE PROBLEM AND MAKE IT AS OPPORTUNITY</h3>
          <p>Total waste generation: 62 million tonnes per year</p>
          <p>Major waste types: Plastic, e-waste, hazardous waste</p>
          <p>Collection rate: Around 70% of generated waste is collected</p>
          <p>Treatment rate: Only about 20% of collected waste is treated</p>
          <p>Landfill disposal: A large portion of collected waste ends up in landfills</p>
          {/* <button>GET INVITED</button> */}
        </div>
      </div>
    </section>
  );
}

export default Environment;