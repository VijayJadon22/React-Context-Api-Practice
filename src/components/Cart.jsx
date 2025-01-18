import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();
  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.items.length !== 0 ? (
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))
      ) : (
        <p>Cart is empty!</p>
      )}
      {cart.items.length !== 0 ? (
        <h5>
          Total: ${cart.items.reduce((total, ele) => (total += ele.price), 0)}
        </h5>
      ) : (
        0
      )}
    </div>
  );
};

export default Cart;
