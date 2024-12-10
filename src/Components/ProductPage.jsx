import React, { useState, useEffect } from 'react';
import ProductSection from './ProductSection';
import './ProductPage.css';

export default function ProductPage() {
  const [pizza, setPizza] = useState([]);
  const [category, setCategory] = useState("Pizza");

  useEffect(() => {
    getPizzaProducts();
  }, [category]);

  function getPizzaProducts() {
    fetch("elements.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setPizza(result.products);
      });
  }

  const filteredProducts = pizza.filter((element) => element.category === category);

  return (
    <div className="container">
      
      <ProductSection products={filteredProducts} />
    </div>
  );
}
