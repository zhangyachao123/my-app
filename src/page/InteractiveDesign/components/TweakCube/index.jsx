import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const spanList = new Array(3).fill(0);

const TweakCube = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="伪3D魔方交互效果" />
      <div className={styles.content}>
        {spanList.map((item, index) => {
          return (
            <div key={index} className={styles.cube}>
              {spanList.map((item2, index2) => {
                return (
                  <div key={index2} className={styles[`column${index2}`]}>
                    {spanList.map((item3, index3) => {
                      return (
                        <span
                          key={index3}
                          className={styles[`span${index3}`]}
                        ></span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TweakCube;
