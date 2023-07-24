import React, { useRef } from "react";
import ReactDOM from "react-dom";
import ModuleTitle from "@/components/ModuleTitle/index";
import styles from "./index.module.scss";

const Preserve3dBox = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const moueDownPos = useRef(null);

  const onMouseDown = (e) => {
    const { clientX, clientY } = e;

    // 获取当前的旋转角度
    const { transform } = window.getComputedStyle(
      ReactDOM.findDOMNode(boxRef.current)
    );
    if (transform && transform !== "none") {
      const a = transform.match(/matrix(3d)?((.+))/);

      if (a && a.length >= 3) {
        const matrix = a[2].split(", ") || [];
        const matrixX = (Math.acos(Number(matrix[5])) * 180) / Math.PI;
        const matrixY = (Math.acos(Number(matrix[10])) * 180) / Math.PI;
        moueDownPos.current = {
          x: clientX,
          y: clientY,
          rotateX: matrixX,
          rotateY: matrixY,
        };
      }
    }
  };

  const onMouseMove = (e) => {
    if (boxRef.current && moueDownPos.current) {
      // 计算鼠标移动的距离
      const { clientX, clientY } = e;
      const { x, y, rotateX, rotateY } = moueDownPos.current;
      const dx = clientX - x;
      const dy = y - clientY;
      const addRotateX = dy * 2;
      const addRotateY = dx / 2;

      if (boxRef.current) {
        // 停止animation
        boxRef.current.style.animation = "none";
      }

      // 旋转
      boxRef.current.style.transform = `rotateX(${
        rotateX + addRotateX
      }deg) rotateY(${rotateY + addRotateY}deg)`;
    }
  };

  const onMouseUp = () => {
    moueDownPos.current = null;
    if (boxRef.current) {
      // 取消掉亮灯
      const { children } = boxRef.current;
      Array.prototype.forEach.call(children, (side) => {
        if (Array.prototype.includes.call(side.classList, styles.light)) {
          side.classList.remove(styles.light);
        }
      });

      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`@keyframes preserve3dRotate {
            100% {
                transform: rotate3d(1, 1, 1, 360deg);
              }
          }`);
      // 重新开始animation
      boxRef.current.style.animation = "preserve3dRotate 10s linear infinite";
    }
  };

  const addLight = (target) => {
    target?.classList.add(styles.light);
  };

  const onClickSide1 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(360deg) rotateY(360deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };
  const onClickSide2 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(0deg) rotateY(180deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };
  const onClickSide3 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(270deg) rotateY(0deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };
  const onClickSide4 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(90deg) rotateY(180deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };
  const onClickSide5 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(0deg) rotateY(90deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };
  const onClickSide6 = (e) => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(0deg) rotateY(270deg)";
      boxRef.current.style.animation = "none";
      addLight(e.target);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      ref={containerRef}
    >
      <ModuleTitle intlTitle="3D魔方交互效果" />
      <div className={styles.content}>
        <div className={styles.box} ref={boxRef}>
          <div className={styles.side1} onClick={onClickSide1} />
          <div className={styles.side2} onClick={onClickSide2} />
          <div className={styles.side3} onClick={onClickSide3} />
          <div className={styles.side4} onClick={onClickSide4} />
          <div className={styles.side5} onClick={onClickSide5} />
          <div className={styles.side6} onClick={onClickSide6} />
        </div>
      </div>
    </div>
  );
};

export default Preserve3dBox;
