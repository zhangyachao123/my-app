import React from "react";
import styles from "./index.module.scss";

const ModuleTitle = (props) => {
  const { intlTitle, style = {} } = props;
  return (
    <div className={styles.container} style={style}>
      {intlTitle}
    </div>
  );
};

export default ModuleTitle;
