import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const Product = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (product.quantity === 0) {
        // Remove the product if the quantity becomes zero
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: product.quantity,
        };
      }

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  return (
    <div className="container">
      <div className="product-container">
        <h1>Product List</h1>
        {Product.map((product) => (
          <Products key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart-container">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;
