import styles from "../stylemodules/fooditem.module.css";

export default function FoodItem({ setFoodId, fooditem }) {
  return (
    <div className={styles.fooditemcontainer}>
      <img className={styles.fooditemimage} src={fooditem.image}></img>
      <div className={styles.fooditemcontent}>
        <p className={styles.fooditemname}>{fooditem.title}</p>{" "}
        <button
          onClick={() => {
            setFoodId(fooditem.id);
          }}
          className={styles.fooditembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
