import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const MobiusBand1 = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="莫比乌斯环循环条动效" />
      <div className={styles.content}>
        <div className={styles.leftTop}>
          <div />
        </div>
        <div className={styles.leftBottom}>
          <div />
        </div>
        <div className={styles.rightTop}>
          <div />
        </div>
        <div className={styles.rightBottom}>
          <div />
        </div>
      </div>
    </div>
  );
};

export default MobiusBand1;
