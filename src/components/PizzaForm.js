import React, { useState } from "react";

function PizzaForm({ topping, setTopping, size, setSize, veg, setVeg, id, setId, onFormSubmit }) {

  function newTopping(e) {
    e.preventDefault();
    setTopping(e.target.value);
  }

  function newSize(e) {
    e.preventDefault();
    setSize(e.target.value);
  }

  function newVegTrue(e) {
    e.preventDefault();
    setVeg(true);
  }

  function newVegFalse(e) {
    e.preventDefault();
    setVeg(false);
  }

  function newFormPizza(e) {
    e.preventDefault();

    const pizzaObj = { id: id, topping: topping, size: size, vegetarian: veg }

    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(pizzaObj)
    })
    .then((resp) => resp.json())
    .then((data) => onFormSubmit(data));
  }

  return (
    <form onSubmit={newFormPizza}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={newTopping}
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={newSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={newVegTrue}
              checked = {veg}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={newVegFalse}
              checked = {!veg}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
