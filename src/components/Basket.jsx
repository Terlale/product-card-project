import React from "react";
import { useLocation } from "react-router-dom";

const Basket = () => {
  const location = useLocation();
  const { name, price } = location.state;

  return (
    <div>
      <h1>Selected Product in Basket</h1>
      <p>Name: {name}</p>
      <p>Price: {price} TL</p>
    </div>
  );
};

export default Basket;
