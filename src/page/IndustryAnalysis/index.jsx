import React, { useState, useEffect } from "react";
import Echarts from "../../components/Echarts";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import * as echarts from "echarts";
import "../../components/Echarts/china.js";

import "./style.scss";

export default function IndustryAnalysis(props) {
  let fontColor = props.theme == "深色" ? "#fff" : "#000";
  const option1 = {
    title: {
      text: "企业年龄结构",
      left: "2%",
      top: "5%",
      textStyle: {
        color: fontColor,
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        center: ["50%", "60%"],
        radius: ["40%", "70%"],
        data: [
          { value: 30, name: "30.59%" },
          { value: 21, name: "21.18%" },
          { value: 29, name: "29.41%" },
          { value: 18, name: "18.82%" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const option2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["博士", "硕士", "本科", "专科", "技校", "其他"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "#7880AF",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#7880AF",
        },
        splitLine: {
          lineStyle: {
            color: "#7880AF",
          },
        },
      },
    ],
    series: [
      {
        name: "数值",
        type: "bar",
        barWidth: "60%",
        data: [18, 38, 21, 17, 15, 10],
      },
    ],
  };
  const dataList = [
    { name: "澳门", value: 10 },
    { name: "香港", value: 114 },
    { name: "台湾", value: 45 },
    { name: "新疆", value: 76 },
    { name: "宁夏", value: 75 },
    { name: "青海", value: 18 },
    { name: "甘肃", value: 124 },
    { name: "陕西", value: 245 },
    { name: "西藏", value: 2 },
    { name: "云南", value: 174 },
    { name: "贵州", value: 146 },
    { name: "四川", value: 539 },
    { name: "重庆", value: 576 },
    { name: "海南", value: 168 },
    { name: "广西", value: 252 },
    { name: "广东", value: 1352 },
    { name: "湖南", value: 1018 },
    { name: "湖北", value: 1000 },
    { name: "河南", value: 1272 },
    { name: "山东", value: 758 },
    { name: "江西", value: 935 },
    { name: "福建", value: 296 },
    { name: "安徽", value: 990 },
    { name: "浙江", value: 1215 },
    { name: "江苏", value: 631 },
    { name: "上海", value: 342 },
    { name: "黑龙江", value: 481 },
    { name: "吉林", value: 93 },
    { name: "辽宁", value: 125 },
    { name: "内蒙古", value: 75 },
    { name: "山西", value: 133 },
    { name: "河北", value: 318 },
    { name: "天津", value: 136 },
    { name: "北京", value: 428 },
  ];
  const option3 = {
    tooltip: {
      triggerOn: "click",
      formatter: function (e, t, n) {
        return ".5" == e.value
          ? e.name + "：有疑似病例"
          : e.seriesName + "<br />" + e.name + "：" + e.value;
      },
    },
    visualMap: {
      //左边的图标
      min: 0,
      max: 1000,
      left: 26,
      bottom: 30,
      showLabel: !0,
      text: ["高", "低"],
      textStyle: {
        color: fontColor,
      },
      inRange: {
        color: ["#DCEDFF", "#DCEDFF", "#A7D6FF", "#68B1FF", "#3193EE"],
      },
      show: !0,
    },

    geo: {
      map: "china",
      center: [105.97, 30.71],
      roam: !1,
      scaleLimit: {
        //通过鼠标控制的缩放
        min: 1,
        max: 2,
      },
      zoom: 1.2, //当前缩放比例
      top: 90, //组件离容器上方的距离
      label: {
        normal: {
          show: !0,
          fontSize: "14",
          color: "rgba(0,0,0,0.7)",
        },
      },

      itemStyle: {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.5)",
        },
        emphasis: {
          areaColor: "#f2d5ad", //鼠标放上去的颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0,
        },
      },
    },
    series: [
      {
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: dataList,
      },
    ],
  };
  let chartData = [
    {
      name: "经营管理人员",
      value: 50,
      color: "#F3E56A",
    },
    {
      name: "专业技术人员",
      value: 30,
      color: "#5FB6EC",
    },
    {
      name: "技能操作人员",
      value: 20,
      color: "#EC7E6F",
    },
    {
      name: "其他",
      value: 10,
      color: "#1FD0B8",
    },
  ];
  let sum = chartData.reduce((pre, cur) => pre + cur.value, 0);
  let pieSeries = [];
  // 图表option整理
  chartData.forEach((v, i) => {
    pieSeries.push({
      name: chartData[i].name,
      type: "pie",
      clockWise: false,
      hoverAnimation: false,
      radius: [50 - i * 16 + "%", 62 - i * 16 + "%"],
      center: ["50%", "50%"],
      label: {
        show: false,
      },
      itemStyle: {
        color: chartData[i].color,
      },
      data: [
        {
          value: v.value,
          name: v.name,
        },
        {
          value: sum - v.value,
          name: "",
          itemStyle: {
            color: "rgba(49, 120, 189, 0.3)",
          },
        },
      ],
    });
    pieSeries.push({
      name: "",
      type: "pie",
      silent: true,
      z: 1,
      clockWise: false, //顺时加载
      radius: [50 - i * 16 + "%", 62 - i * 16 + "%"],
      center: ["50%", "50%"],
      label: {
        show: false,
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: "rgba(155, 155, 155, 0.15)",
          },
        },
        {
          value: 0,
          name: "",
          itemStyle: {
            color: "rgba(49, 120, 189, 0.3)",
          },
        },
      ],
    });
  });
  const option4 = {
    legend: {
      orient: "vertical",
      type: "scroll",
      left: "right",
      top: "bottom",
      textStyle: { color: fontColor },
      icon: "circle",
      data: chartData.map((item) => item.name),
    },
    title: {
      text: "行业员工岗位占比图",
      top: "3%",
      textAlign: "center",
      left: "20%",
      textStyle: {
        color: fontColor,
        fontSize: 18,
        fontWeight: "600",
      },
    },
    series: pieSeries,
  };
  const option5 = {
    title: {
      text: "专业技术人员从业类别分析",
      textStyle: { color: fontColor },
      top: "3%",
      textAlign: "center",
      left: "25%",
    },
    grid: {
      top: "20%",
      bottom: "10%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(9, 24, 48, 0.5)",
      borderColor: "rgba(75, 253, 238, 0.4)",
      textStyle: {
        color: "#CFE3FC",
      },
      borderWidth: 1,
    },
    xAxis: [
      {
        name: "月份",
        type: "category",
        data: ["一月", "二月", "三月", "四月", "五月"],
        axisLine: {
          lineStyle: {
            color: fontColor,
          },
        },
        axisLabel: {
          margin: 10,
          color: fontColor,
          textStyle: {
            fontSize: 12,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        name: "消费（元）",
        axisLabel: {
          formatter: "{value}",
          color: fontColor,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: fontColor,
          },
        },
        splitLine: {
          lineStyle: {
            color: "#4F5580",
          },
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: [2000, 1520, 1850, 3400, 2756],
        barWidth: "30%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0,244,255,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0,77,167,1)", // 100% 处的颜色
                },
              ],
              false
            ),
            shadowColor: "rgba(0,160,221,1)",
            shadowBlur: 4,
          },
        },
        label: {
          normal: {
            show: true,
            lineHeight: 10,
            formatter: "{c}",
            position: "top",
            textStyle: {
              color: "#00D6F9",
              fontSize: 12,
            },
          },
        },
      },
    ],
  };
  // 获取设置图形的颜色样式
  function getCircle(option = {}) {
    option.color = option.color || [];
    return {
      shadowBlur: 10,
      shadowColor: option.shadowColor || "#D65CEA",
      color: {
        type: "radial", // 径向渐变
        x: 0.5, // 圆心坐标（中心）
        y: 0.5,
        r: 0.5, // 半径长度
        colorStops: [
          {
            offset: 0.1,
            color: option.color[0] || "#FCA7FF", // offset：坐标为0处的颜色
          },
          {
            offset: 1,
            color: option.color[1] || "#F772FB", // offset：坐标为1处的颜色
          },
        ],
      },
    };
  }

  // 计算线条箭头，根据source 样式设置箭头颜色
  function calcLines(links, seriesData) {
    let obj = {};
    links.forEach((v) => {
      if (obj[v.source]) {
        obj[v.source].data.push({
          coords: [seriesData[v.source].value, seriesData[v.target].value],
        });
      } else {
        obj[v.source] = {
          type: "lines",
          coordinateSystem: "cartesian2d",
          z: 1,
          zlevel: 2,
          animation: false,
          effect: {
            show: true,
            period: 10,
            trailLength: 0.01,
            symbolSize: 8,
            symbol: "arrow",
            loop: true,
            //   color: "rgba(55,155,255,0.9)"
            color: seriesData[v.source].itemStyle.shadowColor,
          },
          // lines 线条样式，echarts 5.0+ 不生效时可以使用 方法1
          lineStyle: {
            opacity: 0.9,
            width: 1,
            curveness: 0.3,
            color: seriesData[v.source].itemStyle.shadowColor,
          },
          // lineStyle: {
          //   width: 0,
          //   curveness: 0.3,
          // },
          data: [
            {
              coords: [seriesData[v.source].value, seriesData[v.target].value],
            },
          ],
        };
      }
    });
    let arr = Object.keys(obj).map((v) => obj[v]);

    return arr;
  }

  // 获取几种基础颜色图形
  let pinkCircle = getCircle();
  let cyanCircle = getCircle({
    color: ["#42D9D6", "#1EA9A6"],
    shadowColor: "#5EF1E7",
  });
  let blueCircle = getCircle({
    color: ["#89C4FF", "#449BF3"],
    shadowColor: "#60BDF6",
  });
  let purpleCircle = getCircle({
    color: ["#B1A7FF", "#7161F7"],
    shadowColor: "#9487FF",
  });
  let orangeCircle = getCircle({
    color: ["#FFB7A5", "#EC7E64"],
    shadowColor: "#FA9E88",
  });
  let yellowCircle = getCircle({
    color: ["#FFD4A8", "#FDAC59"],
    shadowColor: "#FCCD84",
  });

  // 连接关联数据 根据index 下标连接
  const links = [
    { source: 0, target: 1 },
    { source: 2, target: 0 },
    { source: 0, target: 3 },
    { source: 4, target: 0 },
    { source: 2, target: 1 },
    { source: 2, target: 3 },
    { source: 5, target: 3 },
    { source: 3, target: 1 },
    { source: 5, target: 4 },
    { source: 0, target: 5 },
    { source: 6, target: 0 },
    { source: 7, target: 0 },
  ];

  // 图形数据
  const seriesData = [
    {
      name: "北京分院",
      symbolSize: 50,
      value: [20, 40],
      itemStyle: yellowCircle,
    },
    {
      name: "中国计量科学研究院",
      symbolSize: 120,
      value: [-20, 30],
      itemStyle: pinkCircle,
    },
    {
      name: "湖北计量中心",
      symbolSize: 50,
      value: [0, 55],
      itemStyle: purpleCircle,
    },
    {
      name: "国网计量中心",
      symbolSize: 90,
      value: [0, 30],
      itemStyle: cyanCircle,
    },
    {
      name: "江西计量中心",
      symbolSize: 50,
      value: [36, 39],
      itemStyle: orangeCircle,
    },
    {
      name: "武汉分院",
      symbolSize: 50,
      value: [5, 5],
      itemStyle: blueCircle,
    },
    {
      name: "辽宁计量中心",
      symbolSize: 50,
      value: [35, 55],
      itemStyle: cyanCircle,
    },
    {
      name: "四川计量中心",
      symbolSize: 50,
      value: [30, 15],
      itemStyle: cyanCircle,
    },
  ];

  // 根据图形样式，创建图例样式
  const categories = seriesData.map((v) => {
    return {
      name: v.name,
      itemStyle: {
        color: v.itemStyle.color,
      },
    };
  });

  const option6 = {
    grid: { left: "15%" },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: {
      show: false,
      type: "value",
    },
    legend: {
      show: true,
      top: "10",
      left: "center",
      textStyle: { color: fontColor },
      itemWidth: 8,
      itemHeight: 8,
    },
    series: [
      {
        type: "graph",
        layout: "none", // 图的布局
        zlevel: 3,
        symbolSize: 90,
        coordinateSystem: "cartesian2d",
        categories: categories,
        label: {
          show: true,
          position: "bottom",
          textStyle: { fontSize: 14, color: fontColor },
        },
        data: seriesData,
        // links: links,
        // 兼容echarts 5.0+ 线条样式 方法2
        links: links.map((v) => {
          v.lineStyle = {
            color: seriesData[v.source].itemStyle.color,
          };
          return v;
        }),
        lineStyle: {
          opacity: 1,
          width: 1.5,
          curveness: 0.3, // 曲线弯曲度
          // 根据连接线开始节点颜色设置，目前ehcarts5.0+ 不支持
          // 可以在 上一个属性 links 里指定样式，也可以在type: lines seriesItem 里指定线条样式 ↑↑↑↑↑
          color: "source",
        },
      },
      ...calcLines(links, seriesData),
    ],
  };
  const [menuText, setMenuText] = useState("经营管理人员");
  const items = [
    {
      label: (
        <div
          onClick={() => {
            setMenuText("经营管理人员");
          }}
        >
          经营管理人员
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          onClick={() => {
            setMenuText("专业技术人员");
          }}
        >
          专业技术人员
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          onClick={() => {
            setMenuText("技能操作人员");
          }}
        >
          技能操作人员
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div
          onClick={() => {
            setMenuText("其他");
          }}
        >
          其他
        </div>
      ),
      key: "4",
    },
  ];

  return (
    <div className="industryAnalysis-container">
      <div className="industryAnalysis-top">
        <div className="industryAnalysis-enterpriseAge">
          <div>
            <Echarts option={option1} />
          </div>
          <div>
            <Echarts option={option2} />
          </div>
          <div className="drop-down-menu" style={{ color: fontColor }}>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {menuText}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="industryAnalysis-TalentDistribution">
          <Echarts option={option3} />
        </div>
      </div>
      <div className="industryAnalysis-bottom">
        <div className="industryAnalysis-proportionChart">
          <Echarts option={option4} />
        </div>
        <div className="industryAnalysis-categoryAnalysis">
          <Echarts option={option5} />
        </div>
        <div className="industryAnalysis-industrialStructure">
          <Echarts option={option6} />
        </div>
      </div>
    </div>
  );
}
