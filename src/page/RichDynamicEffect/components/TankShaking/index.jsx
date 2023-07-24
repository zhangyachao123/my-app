import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const TankShaking = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="水罐摇晃动效" />
      <div className={styles.content}>
        <div className={styles.bottle}>
          <div className={styles.water} />
        </div>
        <div className={styles.bottleBottom} />
      </div>
    </div>
  );
};

export default TankShaking;
