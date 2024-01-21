import { useEffect, useState } from "react";
import styles from "../stylemodules/fooddetails.module.css";

export default function FoodDetails({ setLoading, foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipecard}>
      <div>
        <h1 className={styles.recipename}>{food.title}</h1>
        <img className={styles.recipeimage} src={food.image}></img>
      </div>
      <div className={styles.recipedetails}>
        <span>
          <strong>Time: {food.readyInMinutes}</strong>
        </span>
        <span>
          <strong>Serves: {food.servings}</strong>
        </span>
      </div>
      <h1>Ingredients</h1>
      <div className={styles.recipeingredients}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {food.extendedIngredients.map((item) => (
              <li key={item.id}>
                <p>
                  {item.name} - {item.amount} {item.unit}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h1>Instructions</h1>
      <div className={styles.recipeinstructions}>
        <ol>
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </div>
        </ol>
      </div>
    </div>
  );
}
