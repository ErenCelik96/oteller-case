import { Selector } from "../Selector";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["title"]}>Oteller</h1>
      <div className={styles["selectors"]}>
        <Selector type="lang" />
        <Selector type="currency" />
      </div>
    </div>
  );
};
