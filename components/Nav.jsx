import styles from "../stylemodules/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navimgcontainer}>
        <img className={styles.navimg} src="../resources/taco.png"></img>
      </div>
      <p>FoodApp</p>
    </div>
  );
}
