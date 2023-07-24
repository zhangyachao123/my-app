import React from "react";
import styles from "./index.module.scss";
import m from "./vista.mp4"

const PlayVideoInText = () => {
  return (
    <div className={styles.container}>
      <video
        muted
        autoPlay
        preload="true"
        loop
        x5-video-player-fullscreen="true"
        x5-playsinline="true"
        playsInline
        webkit-playsinline="true"
      >
        <source src={m}></source>
      </video>
      <p>River</p>
    </div>
  );
};

export default PlayVideoInText;
