import React, { useState } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, handleEdit, topping, size, veg }) {

  console.log("pizzalist", pizzas);

  const renderEachPizza = pizzas.map((pizza) => {

    function sendThePizzaToForm() {
      handleEdit(pizza);
    }

    return <Pizza key={pizza.id} pizzatopping={pizza.topping} pizzasize={pizza.size} pizzaveg={pizza.vegetarian} sendThePizzaToForm={sendThePizzaToForm} topping={topping} size={size} veg={veg}/>
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {renderEachPizza}
      </tbody>
    </table>
  );
}

export default PizzaList;
