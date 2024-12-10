import React from 'react';
import "./ProductSection.css";

const ProductSection = ({ products }) => {
  if (!products) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-section">
      {/* Menu Paragraph Section */}
      <div className="menu-paragraph">
        <p className="first-paragraph">Choose your flavor</p>
        <h1>The Best Pizza Menu In Tirana</h1>
        <p>There’s always something interesting down here</p>
      </div>

      {/* Render Products */}
      <div className="all-products">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.photoUrl} alt={product.name} style={{ width: "100%" }} />
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
