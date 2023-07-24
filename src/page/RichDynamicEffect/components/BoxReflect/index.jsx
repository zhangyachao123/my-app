import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const BoxReflect = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="边框旋转动效" />
      <div className={styles.content}>
        <div className={styles.btn1}>Reflect</div>
        <div className={styles.btn2}>Reflect</div>
      </div>
    </div>
  );
};

export default BoxReflect;
