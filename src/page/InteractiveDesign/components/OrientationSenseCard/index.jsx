import React from "react";
import ModuleTitle from "@/components/ModuleTitle";
import paper1 from "@/images/InteractiveDesign/paper3.png";
import paper2 from "@/images/InteractiveDesign/paper4.png";
import paper3 from "@/images/InteractiveDesign/paper6.png";
import paper4 from "@/images/InteractiveDesign/paper7.png";
import paper5 from "@/images/InteractiveDesign/paper8.png";
import styles from "./index.module.scss";

const spanList = [paper1, paper2, paper3, paper4, paper5];

const OrientationSenseCard = () => {
  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="自动辨别鼠标方向交互效果" />
      <div className={styles.content}>
        {spanList.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrientationSenseCard;
