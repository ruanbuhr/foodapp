import styles from "../stylemodules/container.module.css";
export default function Container({ children }) {
  return <div className={styles.parentcontainer}> {children} </div>;
}
