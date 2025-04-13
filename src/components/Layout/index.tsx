import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../Header";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles["layout"]}>
      <Header />
      {children}
    </div>
  );
};
