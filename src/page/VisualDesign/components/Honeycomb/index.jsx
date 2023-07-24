import React from "react";
import scenery1 from "@/images/VisualDesign/scenery1.jpg";
import scenery2 from "@/images/VisualDesign/scenery2.jpg";
import scenery3 from "@/images/VisualDesign/scenery3.jpg";
import scenery4 from "@/images/VisualDesign/scenery4.jpg";
import scenery5 from "@/images/VisualDesign/scenery5.jpg";
import scenery6 from "@/images/VisualDesign/scenery6.jpg";
import scenery7 from "@/images/VisualDesign/scenery7.jpg";
import styles from "./index.module.scss";

const Honeycomb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={scenery1} alt="" />
        <img src={scenery2} alt="" />
        <img src={scenery3} alt="" />
        <img src={scenery4} alt="" />
        <img src={scenery5} alt="" />
        <img src={scenery6} alt="" />
        <img src={scenery7} alt="" />
      </div>
    </div>
  );
};

export default Honeycomb;
