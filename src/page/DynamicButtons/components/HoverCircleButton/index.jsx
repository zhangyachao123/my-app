import React, { useRef } from "react";
import styles from "./index.module.scss";

const HoverCircleButton = () => {
  const buttonRef = useRef(null);

  const onMouse = (e) => {
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;
      buttonRef.current.style.setProperty("--xPos", `${x}px`);
      buttonRef.current.style.setProperty("--yPos", `${y}px`);
    }
  };

  return (
    <div className={styles.container}>
      <button onMouseOver={onMouse} onMouseLeave={onMouse} ref={buttonRef}>
        <span>Button</span>
      </button>
    </div>
  );
};

export default HoverCircleButton;
