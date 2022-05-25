import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("");
  const [veg, setVeg] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((resp) => resp.json())
    .then((pizzas) => setPizzas(pizzas))
  }, [])

  function handleEdit(pizza) {
    console.log(pizza, "Handle"); 
    setId(pizza.id);
    setTopping(pizza.topping);
    setSize(pizza.size);
    setVeg(pizza.vegetarian);
  }

  function updatePizza(obj) {
    console.log("object", obj);
    const updatedPizzas = pizzas.map((pizza) => {
      return pizza.id === obj.id ? obj : pizza
    })
    setPizzas(updatedPizzas);
  }


  return (
    <>
      <Header />
      <PizzaForm topping={topping} setTopping={setTopping} size={size} setSize={setSize} veg={veg} setVeg={setVeg} id={id} setId={setId} onFormSubmit={updatePizza}/>
      <PizzaList pizzas={pizzas} id={id} topping={topping} size={size} veg={veg} handleEdit={handleEdit} />
    </>
  );
}

export default App;
