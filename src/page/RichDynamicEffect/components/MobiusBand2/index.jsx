import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const list = new Array(20).fill(0);

const MobiusBand2 = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="莫比乌斯环循环圆点动效" />
      <div className={styles.content}>
        <div className={styles.circle}>
          {list.map((item, index) => {
            return <span key={index} className={styles[`span${index}`]}></span>;
          })}
        </div>
        <div className={styles.circle}>
          {list.map((item, index) => {
            return <span key={index} className={styles[`span${index}`]}></span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobiusBand2;
