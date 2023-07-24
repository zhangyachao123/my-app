import React from "react";
import cartoonFigure from "@/images/VisualDesign/cartoonFigure.png";
import styles from "./index.module.scss";

const HoverEnlargement = () => {
  return (
    <div className={styles.container}>
      <img src={cartoonFigure} alt="" />
    </div>
  );
};

export default HoverEnlargement;
