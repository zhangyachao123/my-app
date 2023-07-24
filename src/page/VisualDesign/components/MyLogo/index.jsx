import React from "react";
import styles from "./index.module.scss";

const list = new Array(3).fill(0);

const MyLogo = () => {
  return (
    <div className={styles.container}>
      {list.map((item, index) => (
        <div className={styles[`box${index + 1}`]} key={index}>
          <div className={styles.leftTopRect} />
          <div className={styles.circle} />
          <div className={styles.middleRect} />
          <div className={styles.bottomRect} />
        </div>
      ))}
    </div>
  );
};

export default MyLogo;
