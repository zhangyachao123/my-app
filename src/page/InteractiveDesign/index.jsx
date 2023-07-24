/**
 * 交互设计
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext.tsx";
import MagnifyingGlass from "./components/MagnifyingGlass";
import FlipBook from "./components/FlipBook";
import TweakCube from "./components/TweakCube";
import Preserve3dBox from "./components/Preserve3dBox";
import OrientationSenseCard from "./components/OrientationSenseCard";
import HexagonalMesh2 from "./components/HexagonalMesh2";
import HexagonalMesh3 from "./components/HexagonalMesh3";

import styles from "./index.module.scss";

const boxList = [
  { element: <MagnifyingGlass /> },
  { element: <FlipBook /> },
  { element: <TweakCube /> },
  { element: <Preserve3dBox /> },
  { element: <OrientationSenseCard /> },
  { element: <HexagonalMesh2 /> },
  { element: <HexagonalMesh3 /> },
];

const InteractiveDesign = () => {
  const { setScrollTop } = useGlobalContext();
  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      {boxList.map((item, index) => (
        <div className={styles.box} key={index}>
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default InteractiveDesign;
