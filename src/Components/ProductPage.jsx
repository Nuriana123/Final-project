import React, { useState, useEffect } from "react";
import ProductSection from "./ProductSection";
import "./ProductPage.css";
import SingleProduct from "./SingleProduct";

export default function ProductPage() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getPizzaProducts();
  }, []);

  function getPizzaProducts() {
    fetch("/elements.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setPizza(result.products);
      });
  }

  const filteredProducts = pizza.filter(
    (element) => element.category === "Pizza"
  );

  return (
    <div className="container">
      {/* {filteredProducts.map((product) => {
        return <SingleProduct product={product}/>;
      })} */}
      <ProductSection products={filteredProducts} />
    </div>
  );
}
