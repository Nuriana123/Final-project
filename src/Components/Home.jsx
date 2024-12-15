import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import ProductSection from "./ProductSection";
import ProductPage from "./ProductPage";
import FoodSection from "./FoodSection";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/elements.json");
        if (!response.ok) {
          throw new Error("Failed to load JSON file");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Carousel />
      <Hero />
      {/* <ProductSection /> */}
      <ProductPage />
      <FoodSection />
    </div>
  );
};

export default Home;
