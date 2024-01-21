import { useState, useEffect } from "react";
import styles from "../stylemodules/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.searchbox}
        value={query}
        type="text"
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
}
