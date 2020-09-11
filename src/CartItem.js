import React, { useState } from "react";
import "./CartItem.css";

function CartItem({ id, product, qty, price, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const removeOne = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="CartItem">
      <div>{product}</div>
      <div>${price}</div>
      <div>
        <button onClick={removeOne} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>${qty * price}</div>
    </div>
  );
}

export default CartItem;
