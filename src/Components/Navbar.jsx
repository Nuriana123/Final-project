import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Login";
import Menu from "./Menu";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [data, setData] = useState([]);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/elements.json");
        if (!response.ok) {
          throw new Error("Failed to fetch elements.json");
        }
        const result = await response.json();
        console.log("result Navbar", result);
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    if (cartContext.cart.length > 1) {
      const total = cartContext.cart.reduce((prev, curr) => {
        return (
          parseInt(prev.price.substring(1)) + parseInt(curr.price.substring(1))
        );
      });
      console.log("total cart", total);
      setShoppingCartTotal(total);
    } else if (cartContext.cart.length === 1) {
      setShoppingCartTotal(cartContext.cart[0].price);
    }
  }, [cartContext.cart]);

  const filteredResults = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      searchQuery.length > 0
  );

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleLoginVisibility = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const closeLoginForm = () => {
    setIsLoginVisible(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
              <div className="search-bar-container">
                <div className="search">
                  <div className="searchInputs">
                    <input
                      type="text"
                      placeholder="Search Products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <div className="searchIcon">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                  <div className="dataResult">
                    {filteredResults.length > 0 &&
                      filteredResults.map((item) => (
                        <div key={item.id} className="dataItem">
                          {item.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
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
              <button>
                {cartContext.cart.length} Items: {shoppingCartTotal} L
              </button>

              <i className="fa-sharp fa-thin fa-cart-shopping-fast"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
