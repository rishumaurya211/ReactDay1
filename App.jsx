import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let FoodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1>Health Food</h1>
      <ul className="list-group">
        {FoodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
