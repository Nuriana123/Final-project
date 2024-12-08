import React, { useState, useEffect } from 'react';
import ProductSection from './ProductSection';
import SingleProduct from './SingleProduct';
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
      <ProductSection />

      {/* Shtimi i një rreshti për të shfaqur 4 produkte në rresht */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <SingleProduct product={product} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Products loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
