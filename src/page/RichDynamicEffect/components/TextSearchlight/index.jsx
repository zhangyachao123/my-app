import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TextSearchlight = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="探照灯文字动效" />
      <p data-text="♠ CSS Animation ♣">♠ CSS Animation ♣</p>
    </div>
  );
};

export default TextSearchlight;
