import React from "react";
import styles from "./Layout.module.css";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles["layout"]}>Hello {children}</div>;
};
