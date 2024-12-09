import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import ProductSection from "./ProductSection";
import ProductPage from "./ProductPage";
import FoodSection from "./FoodSection";



const Home = () => {
  return (
    <div>
      <Carousel />
      <Hero />
      <ProductSection />
      <ProductPage/>
      <FoodSection/>
      
     
    </div>
  );
};

export default Home;
