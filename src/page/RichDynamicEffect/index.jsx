/**
 * 丰富动效
 */
import React, { useEffect } from "react";
import adData from "@/utils/adData";
import AdBox from "@/components/AdBox";
import { useGlobalContext } from "@/hooks/useGlobalContext.tsx";
import DynamicTime from "./components/DynamicTime";
import FlopTime from "./components/FlopTime/index.tsx";
import ChargingAnimation from "./components/ChargingAnimation";
import ZongziLoading from "./components/ZongziLoading";
import BoxReflect from "./components/BoxReflect";
import TextAnimation from "./components/TextAnimation";
import TextSearchlight from "./components/TextSearchlight";
import DisplayTextInSmoke from "./components/DisplayTextInSmoke";
import PlayVideoInText from "./components/PlayVideoInText";
import WaveFont from "./components/WaveFont";
import TextOutlineAnimation1 from "./components/TextOutlineAnimation1";
import TextOutlineAnimation2 from "./components/TextOutlineAnimation2";
import MobiusBand1 from "./components/MobiusBand1";
import MobiusBand2 from "./components/MobiusBand2";
import TankShaking from "./components/TankShaking";
import styles from "./index.module.scss";

const RichDynamicEffect = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <DynamicTime />
        </div>
        <div className={styles.box}>
          <FlopTime />
        </div>
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <ChargingAnimation />
        </div>
        <div className={styles.box}>
          <ZongziLoading />
        </div>
        <div className={styles.box}>
          <BoxReflect />
        </div>
      </div>
      <div className={styles.box}>
        <TextAnimation />
      </div>
      <div className={styles.box}>
        <TextSearchlight />
      </div>
      <div className={styles.box}>
        <DisplayTextInSmoke />
      </div>
      <div className={styles.box}>
        <AdBox data={adData[3]} />
      </div>
      <div className={styles.box}>
        <PlayVideoInText />
      </div>
      <div className={styles.box}>
        <WaveFont />
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <TextOutlineAnimation1 />
        </div>
        <div className={styles.box}>
          <TextOutlineAnimation2 />
        </div>
      </div>
      <div className={styles.box}>
        <AdBox data={adData[4]} />
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <MobiusBand1 />
        </div>
        <div className={styles.box}>
          <MobiusBand2 />
        </div>
      </div>
      <div className={styles.multipleColumnsBox}>
        <div className={styles.box}>
          <TankShaking />
        </div>
      </div>
    </div>
  );
};

export default RichDynamicEffect;
