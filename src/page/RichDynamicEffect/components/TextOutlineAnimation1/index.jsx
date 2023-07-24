import React, { useRef } from "react";
import ModuleTitle from "@/components/ModuleTitle";
import { ReactComponent as Text } from "@/images/text.svg";
import styles from "./index.module.scss";

const TextOutlineAnimation1 = () => {
  const conetentRef = useRef(null);

  //   // 获取每个SVG文字的path路径长度
  //   const getSvgTextLength = () => {
  //     if (conetentRef.current) {
  //       const svgEleList = conetentRef.current.children;
  //       const path: HTMLCollection = svgEleList[0].children;
  //       for (let i = 0; i < path.length; i++) {
  //         const pathEle = path[i] as SVGPathElement;
  //         const pathLength = Math.round(pathEle.getTotalLength());
  //         console.log(
  //           `第${i}个字长度为：${(path[i] as SVGPathElement).getTotalLength()}`
  //         );
  //       }
  //     }
  //   };
  //   useEffect(() => {
  //     getSvgTextLength();
  //   }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="文字线条显示动效" />
      <div className={styles.content} ref={conetentRef}>
        <Text />
      </div>
    </div>
  );
};

export default TextOutlineAnimation1;
