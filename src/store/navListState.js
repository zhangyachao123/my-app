import { createSlice } from "@reduxjs/toolkit";

const navListState = createSlice({
  name: "navList",
  initialState: [
    {
      active: true,
      text: "数据字典",
      id: "1",
    },
  ],
  reducers: {
    // 添加
    pushAdded: (state, action) => {
      let isData = state.find((item) => item.text == action.payload.text);
      if (isData) {
        state.map((item) => {
          if (item.text == isData.text) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      } else {
        state.map((item) => (item.active = false));
        state.push(action.payload);
      }
    },
    // 高亮
    activeTab: (state, action) => {
      state.map((item, index) => {
        if (index == action.payload) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    },
    // 移除
    detachData: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
const navItemState = createSlice({
  name: "navItem",
  initialState: {
    value: 0,
  },
  reducers: {
    renewValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
const panelListState = createSlice({
  name: "panelList",
  initialState: [
    {
      dom: `<div class="panelIcon pi1"></div><div className="">主页</div>`,
      key: "1",
      children: [
        { text: "数据字典", id: "1" },
        { text: "地图显示", id: "2" },
      ],
    },
    {
      dom: `<div class="panelIcon pi2"></div><div>基础管理</div>`,
      key: "2",
      children: [
        { text: "任务管理", id: "3" },
        { text: "行业分析", id: "4" },
      ],
    },
    {
      dom: `<div class="panelIcon pi3"></div><div>视觉效果集合</div>`,
      key: "3",
      children: [
        { text: "视觉设计", id: "5" },
        { text: "交互设计", id: "6" },
        { text: "动效按钮", id: "7" },
        { text: "丰富动效", id: "8" },
      ],
    },
    {
      dom: `<div class="panelIcon pi4"></div><div>Canvas动效</div>`,
      key: "4",
      children: [
        { text: "动态时钟", id: "9" },
        { text: "探照灯效果", id: "10" },
        { text: "球体碰撞交互", id: "11" },
        { text: "消灭行星小游戏", id: "12" },
        { text: "球体自由落体交互", id: "13" },
        { text: "炫酷倒计时动画", id: "14" },
        { text: "动态粒子背景", id: "15" },
        { text: "水波荡漾效果", id: "16" },
      ],
    },
    // {
    //   dom: `<div class="panelIcon pi5"></div><div>系统工具</div>`,
    //   key: "5",
    //   children: [
    //     { text: "虚拟列表", id: "13" },
    //     { text: "系统工具2", id: "14" },
    //   ],
    // },
    // {
    //   dom: `<div class="panelIcon pi6"></div><div>系统监控</div>`,
    //   key: "6",
    //   children: [
    //     { text: "系统监控1", id: "15" },
    //     { text: "系统监控2", id: "16" },
    //   ],
    // },
  ],
});

// 每个 case reducer 函数会生成对应的 Action creators
export const { pushAdded, activeTab, detachData } = navListState.actions;
export const { renewValue } = navItemState.actions;
const navListReducer = navListState.reducer;
const navItemReducer = navItemState.reducer;
const panelListReducer = panelListState.reducer;
export { navListReducer, navItemReducer, panelListReducer };
