import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import card01 from "../assets/card01.jpg";
import card02 from "../assets/card02.jpg";
import card03 from "../assets/card03.png";
import card04 from "../assets/card04.jpg";
import ProductCard from "./ProductCard";

function Products() {
  const productData = [
    {
      title: "Raw materials",
      description: "Collection of waste",
      image: card01,
      alt: "product is loading setup",
      link: "/raw_materials", // Route path for Raw Materials
    },
    {
      title: "Collectors",
      description: "Separate the waste from the raw materials",
      image: card02,
      alt: "Smart scheduling setup",
      link: "/collectors", // Route path for Collectors
    },
    {
      title: "Industrial Suppliers",
      description: "Industries which make products from waste",
      image: card03,
      alt: "Data analysis setup",
      link: "/suppliers", // Route path for Suppliers
    },
    {
      title: "Construction Material",
      description: "Selling construction materials",
      image: card04,
      alt: "Data analysis setup",
      link: "/construction-material", // Route path for Construction Material
    },
  ];

  return (
    <section className="products">
      <h2>PRODUCTS</h2>
      <div className="product-container">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            alt={product.alt}
            link={product.link} // Use Link for navigation
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
