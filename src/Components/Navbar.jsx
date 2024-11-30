import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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

          <div className="icon-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <div className="btn-menu">
              <button>0 Items: L 0</button>
              <i class="fa-sharp fa-thin fa-cart-shopping-fast"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
