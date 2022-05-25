import React from "react";

function Pizza({ pizzatopping, pizzasize, pizzaveg, sendThePizzaToForm, topping, size, veg }) {

  return (
    <tr>
      <td>{pizzatopping}</td>
      <td>{pizzasize}</td>
      <td>{pizzaveg ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={sendThePizzaToForm}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
