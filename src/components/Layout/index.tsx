import React from "react";
import styles from "./Layout.module.css";
import { Selector } from "../Selector";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles["layout"]}>
      Hello
      <Selector type="lang" />
      <Selector type="currency" />
      {children}
    </div>
  );
};
