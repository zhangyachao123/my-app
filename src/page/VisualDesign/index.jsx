/**
 * 视觉设计
 */
import React from "react";
import GridContent from "../../components/GridContent";
import MixBlendMode from "./components/MixBlendMode";
import BgFusion from "./components/BgFusion";
import MyLogo from "./components/MyLogo";
import AnnulusLoading from "./components/AnnulusLoading";
import Honeycomb from "./components/Honeycomb";
import AnnulusProgressBar from "./components/AnnulusProgressBar";
import AudioLoading from "./components/AudioLoading";
import SudokuImageAnimation from "./components/SudokuImageAnimation";
import TextShadow from "./components/TextShadow";
import HorseRaceLamp from "./components/HorseRacelamp";
import HarmonyLogo from "./components/HarmonyLogo";
import Preserve3D from "./components/Preserve3D";
import RotateAndBgFixed from "./components/RotateAndBgFixed";
import HexagonalMesh from "./components/HexagonalMesh";
import HexagonalRadar from "./components/HexagonalRadar";
import HoverEnlargement from "./components/HoverEnlargement";
import styles from "./index.module.scss";

const { GridBox } = GridContent;
const gridboxList = [
  { element: <TextShadow /> },
  { element: <MixBlendMode /> },
  { element: <HorseRaceLamp /> },
  { element: <HarmonyLogo /> },
  { element: <Preserve3D /> },
  { element: <RotateAndBgFixed /> },
  { element: <SudokuImageAnimation /> },
  { element: <Honeycomb /> },
  { element: <HexagonalMesh /> },
  { element: <HexagonalRadar /> },
  { element: <HoverEnlargement /> },
  { element: <MyLogo /> },
  { element: <AnnulusLoading /> },
  { element: <AudioLoading /> },
  { element: <AnnulusProgressBar /> },
  { element: <BgFusion /> },
];

const VisualDesign = () => {
  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[2, 2, 2, 1, 1]}
        rowSpace={4}
        colSpace={4}
      >
        {gridboxList.map((item, index) => (
          <GridBox key={index}>
            <div className={styles.box}>{item.element}</div>
          </GridBox>
        ))}
      </GridContent>
    </div>
  );
};

export default VisualDesign;
