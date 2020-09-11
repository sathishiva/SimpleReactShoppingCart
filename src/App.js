import React from "react";
import Cart from "./Cart";
import "./styles.css";
const items = [
  { id: 1, product: "T-shirt", qty: 1, price: 10.5 },
  { id: 2, product: "Jogger", qty: 2, price: 15.99 },
  { id: 3, product: "Cap", qty: 3, price: 7.25 }
];
export default function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}
