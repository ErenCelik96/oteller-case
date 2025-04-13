import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles["layout"]}>
      <Header />
      {children}
    </div>
  );
};
