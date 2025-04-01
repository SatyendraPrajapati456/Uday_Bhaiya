import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, description, image, alt, link }) {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img className="card_image" src={image} alt={alt} />
      <button onClick={() => navigate(link)}>BUY</button>
    </div>
  );
}

export default ProductCard;
