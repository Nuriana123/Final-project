import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Catering from "./Components/Catering";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login.jsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Menu" element={<Menu />}></Route>
          <Route path="Catering" element={<Catering />}></Route>
          <Route path="Shop" element={<Shop />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="./Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
