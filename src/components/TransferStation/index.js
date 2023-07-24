import { memo } from "react";
import Task from "../../page/Task";
import DataDictionary from "../../page/DataDictionary";
import IndustryAnalysis from "../../page/IndustryAnalysis";
import PersonCenter from "../../page/PersonCenter";
import Map from "../../page/Map";
import VisualDesign from "../../page/VisualDesign";
import FixedSizeList from "../../page/FixedSizeList";
import InteractiveDesign from "../../page/InteractiveDesign";
import DynamicButtons from "../../page/DynamicButtons";
import RichDynamicEffect from "../../page/RichDynamicEffect";
import DynamicClock from "../../page/Canvas/DynamicClock/index.tsx";
import Searchlight from "../../page/Canvas/Searchlight/index.tsx";
import GlobuleInteraction from "../../page/Canvas/GlobuleInteraction/index.tsx";
import KillPlanetGame from "../../page/Canvas/KillPlanetGame/index.tsx";
import FreeFallingBody from "../../page/Canvas/FreeFallingBody/index.tsx";
import CountDown from "../../page/Canvas/CountDown/index.tsx";
import ParticlesBg from "../../page/Canvas/ParticlesBg/index.tsx";
import RippleFloatOnTheWater from "../../page/Canvas/RippleFloatOnTheWater/index.tsx";

const pageList = {
  1: <DataDictionary />, // 数据字典
  3: <Task />, // 任务管理
  5: <VisualDesign />, // 视觉设计
  6: <InteractiveDesign />, // 交互设计
  7: <DynamicButtons />, // 动效按钮
  8: <RichDynamicEffect />, // 丰富动效
  9: <DynamicClock />, //动态时钟
  10: <Searchlight />, // 探照灯效果
  11: <GlobuleInteraction />, // 球体碰撞交互
  12: <KillPlanetGame />, // 消灭行星小游戏
  13: <FreeFallingBody />, // 球体自由落体交互
  14: <CountDown />, // 炫酷倒计时动画
  15: <ParticlesBg />, // 动态粒子背景
  16: <RippleFloatOnTheWater />, // 水波荡漾效果
};

export default memo(({ id, theme }) => {
  switch (id) {
    case "2":
      return <Map theme={theme} />; // 地图显示
    case "4":
      return <IndustryAnalysis theme={theme} />; // 行业分析
    case "001":
      return <PersonCenter />; // 个人信息
    default:
      return pageList[id];
  }
});
