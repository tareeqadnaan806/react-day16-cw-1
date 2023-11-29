import React, { useState } from "react";

const Products = ({ id, name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    addToCart({ id, name, price, quantity: updatedQuantity });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      addToCart({
        id,
        name,
        price,
        quantity: updatedQuantity,
        decrement: true,
      });
    }
  };
  return (
    <div className="product">
      <h3>{name}</h3>
      <p className="price">Price: ${price}</p>
      <div className="quantity-container">
        <button className="quantity-button" onClick={handleDecrement}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Products;
