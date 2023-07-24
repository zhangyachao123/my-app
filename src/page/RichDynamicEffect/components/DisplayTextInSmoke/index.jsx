import React, { useRef } from "react";
import { Button } from "antd";
import styles from "./index.module.scss";
import url from "./smoke.mp4"

const DisplayTextInSmoke = () => {
  const videoRef = useRef(null);
  const pRef = useRef(null);

  const onceAgain = () => {
    if (pRef.current) {
      Array.prototype.forEach.call(pRef.current.children, (span, index) => {
        let className = styles.span1;
        if (span.className === styles.span1) {
          className = styles.span2;
        }
        span.className = className;
      });
    }
    videoRef.current?.load();
  };

  return (
    <div className={styles.container}>
      <video
        muted
        autoPlay
        preload="true"
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
        ref={videoRef}
      >
        <source src={url}></source>
      </video>
      <p ref={pRef}>
        <span className={styles.span1}>H</span>
        <span className={styles.span1}>E</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>O</span>
        <span className={styles.span1}>W</span>
        <span className={styles.span1}>O</span>
        <span className={styles.span1}>R</span>
        <span className={styles.span1}>L</span>
        <span className={styles.span1}>D</span>
      </p>
      <Button type="primary" className={styles.btn} onClick={onceAgain}>
        Once Again
      </Button>
    </div>
  );
};

export default DisplayTextInSmoke;
