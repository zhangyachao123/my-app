import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const WaveFont = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="波浪文字动效" />
      <h2 className={styles.firstText}>River</h2>
      <h2 className={styles.lastText}>River</h2>
    </div>
  );
};

export default WaveFont;
