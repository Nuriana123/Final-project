import "./SingleProduct.css";

export default function SingleProduct({ product }) {
  return (
    <div className="col-md-5 mb-4 single-product-container">
      <div className="col-md-5">
        <img
        className="product-image"
          src={product.photoUrl}
          alt={product.name}
        />
        </div>
        <div className="col-md-7 right">
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <div className="grouped-price-button">
        <p className="product-price">{product.price}</p>
        <button className="product-button"><i class="bi bi-cart-dash"></i></button>
        </div>
        </div>
    </div>
  );
}
