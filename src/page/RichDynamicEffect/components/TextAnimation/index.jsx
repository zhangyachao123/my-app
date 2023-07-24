import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TextAnimation = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="发光文字动效" />
      <p data-text="♠ CSS Animation ♣">♠ CSS Animation ♣</p>
    </div>
  );
};

export default TextAnimation;
