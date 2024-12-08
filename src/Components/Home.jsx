import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import ProductSection from "./ProductSection";
import ProductPage from "./ProductPage";


const Home = () => {
  return (
    <div>
      <Carousel />
      <Hero />
      <ProductSection />
      <ProductPage/>
     
    </div>
  );
};

export default Home;
