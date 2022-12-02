import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  //const pizzas = 0;
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <RestaurantButton order={orderOne} />
          Pizzas: {pizzas}{" "}
          <button onclick={pizzaCounter} className="btn btn-primary">
            Add
          </button>
        </li>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
