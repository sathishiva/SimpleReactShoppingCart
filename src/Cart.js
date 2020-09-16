import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartHead from "./CartHead";

function Cart({ initialItems }) {
  const initialState = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(initialState || initialItems);
  // the below code is to demo useEffect dependency
  // const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };
  const total = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* this button is to demo useEffect dependency */}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <CartHead />
      {items.map((item) => (
        <CartItem key={item.id} {...item} updateQty={updateQty} />
      ))}
      <h2>Total: {total}</h2>
    </div>
  );
}

export default Cart;
