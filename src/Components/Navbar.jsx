import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Login";
import Menu from "./Menu";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // Funksion për të menaxhuar ndryshimet në inputin e kërkimit
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Funksion për të trajtuar dërgimin e formularit të kërkimit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Mund të shtoni logjikën për të dërguar kërkimin në backend ose për të filtruar rezultatet
    console.log(searchQuery);
  };

  // Funksion për të ndërruar shfaqjen e kutisë së kërkimit
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Funksion për të pastruar kërkimin dhe fshehur kutinë e kërkimit
  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearchVisible(false);
  };

  // Funksion për të hapur dhe mbyllur formularin e login
  const toggleLoginVisibility = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  // Funksion për të mbyllur formularin e login
  const closeLoginForm = () => {
    setIsLoginVisible(false);
  };

  return (
    <>
      <header>
        <div className="information">
          <div className="address-phone-container">
            <div className="adress-information">
              <a
                href="https://www.google.com/maps?q=Rruga Abdyl Frasheri,Tirana,Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <i className="fas fa-map-marker-alt"></i> Rruga Abdyl Frasheri,
                Tirana, Albania
              </a>
            </div>

            <div className="phone-information">
              <a href="tel:+123456789" className="phone-number">
                <i className="fas fa-phone"></i> Call & Order: +355 68 666 6777
                Tirane, Sheshi Wilson
              </a>
            </div>
          </div>
        </div>

        <hr className="divider" />
        <hr className="divider" />

        <div className="nav-bar">
          <div className="logo-menu-container">
            <img src="/IMAGES/logo.png" alt="Logo" className="logo" />

            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/catering">Catering</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="icon-container">
            <div className="search-icon" onClick={toggleSearchVisibility}>
              <i className="fas fa-search"></i>
            </div>

            {isSearchVisible && (
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
                <i className="fas fa-times" onClick={handleClearSearch}></i>
              </form>
            )}

            <i
              className="fa-regular fa-user"
              onClick={toggleLoginVisibility}
            ></i>

            {isLoginVisible && (
              <div className="login-form-container">
                <button className="close-login-btn" onClick={closeLoginForm}>
                  <i className="fas fa-times"></i>
                </button>
                <Login />
              </div>
            )}

            <i className="fa-regular fa-heart"></i>
            <div className="btn-menu">
              <button>0 Items: L 0</button>
              <i className="fa-sharp fa-thin fa-cart-shopping-fast"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
