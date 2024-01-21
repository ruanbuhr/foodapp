import React from "react";
import FoodItem from "./FoodItem";
export default function FoodList({ setFoodId, foodData }) {
  return (
    <div>
      {foodData.map((fooditem) => (
        <FoodItem
          key={fooditem.id}
          setFoodId={setFoodId}
          fooditem={fooditem}
        ></FoodItem>
      ))}
    </div>
  );
}
