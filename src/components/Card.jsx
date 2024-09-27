const Card = ({ product, handleAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />

      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>

        <p className="card-description">{product.description}</p>

        <p className="card-price">${product.price.toFixed(2)}</p>

        <div className="card-rating">
          <span>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
      </div>

      <div className="button">
        <button className="cart" onClick={() => handleAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
