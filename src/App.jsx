import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Catering from "./Components/Catering";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import ShoppingCart from "./Components/ShoppingCart";  // Importo ShoppingCart
import { CartProvider } from "./Components/CartContext"; 

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Catering" element={<Catering />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          
          
          <Route path="cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
