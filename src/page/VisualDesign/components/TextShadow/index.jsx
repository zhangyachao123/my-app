import React from "react";
import styles from "./index.module.scss";

const TextShadow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-text={"文字阴影"}>
        文字阴影
      </div>
    </div>
  );
};

export default TextShadow;
