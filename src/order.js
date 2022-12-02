import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  //const pizzas = 0;
  const [orders, setOrders] = useState(0);

  function pizzaCounter() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <li>
        <RestaurantButton order={orderOne} />
        {props.orderType}: {orders}{" "}
      </li>
    </div>
  );
};
