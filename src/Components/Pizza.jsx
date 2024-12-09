import { useState, useEffect } from "react";
import "./Pizza.css";
import SingleProduct from "./SingleProduct";

export default function Pizza() {
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
  return (
    <div>
      <div className="all-button-categories">
        <button onClick={() => setCategory("Pizza")}>Pizza</button>
        <button onClick={() => setCategory("Burgers")}>Burgers</button>
        <button onClick={() => setCategory("Salads")}>Salads</button>
        <button onClick={() => setCategory("Tacos")}>Tacos</button>
        <button onClick={() => setCategory("Pasta")}>Pasta</button>
        <button onClick={() => setCategory("Risotto")}>Risotto</button>
        <button onClick={() => setCategory("Crepes&Waffles")}>
          Crepes & Waffles
        </button>
        <button onClick={() => setCategory("MainDishes")}>Main Dishes</button>
      </div>

      <div className="all-products">
         {pizza.length > 0
          ? pizza
              .filter((element) => {
                return element.category === category;
              })
              .map((product) => {
                return <SingleProduct product={product} />;
              })
          : "Products loading"} *
      </div>
    </div>
  );
}
