import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

function ProductList() {
  const { addToCart, cartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    fetch("/elements.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="product-list">
      <h2>Products</h2>

      <button onClick={toggleCartVisibility}>
        {cartVisible ? "Hide Cart" : "Show Cart"}
      </button>

      {cartVisible && (
        <div className="cart">
          <p>Your cart contains {cartItems.length} items</p>
        </div>
      )}

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
