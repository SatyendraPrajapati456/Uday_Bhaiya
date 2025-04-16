import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Environment from "./components/Environment";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./subpages/login";
import Sign_in from "./subpages/Sign_in";
import About from "./components/About";
import Raw_Materials from "./Product page/Raw_material.jsx";
import Collectors from "./Product page/Collectors.jsx";
import Supplier from "./Product page/Supplier.jsx";
import Final_product from "./Product page/Final_product.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_in />} />
          <Route path="/raw_materials" element={<Raw_Materials />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/construction-material" element={<Final_product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
