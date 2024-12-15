import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext); 
 

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
