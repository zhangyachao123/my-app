import React, { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import icon from "../../images/map_icon.png";
import pointData from "./pointData.json";

import "./style.scss";

export default function Map(props) {
  const mapStyle =
    props.theme == "深色"
      ? "amap://styles/2aba0c2a022a3170abdd4ac6f9b78c20"
      : "amap://styles/495194f3867d3fe643372ad9281178dc";
  const [map, setMap] = useState();
  const [AMap, setAMap] = useState();
  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "11b23c2ef7b1b0b1b2800ef0858eb40e", // 秘钥
    };
    AMapLoader.load({
      // key: '2117aeb766c99a2763b91b68ce2530e8' // 该 key 值无需秘钥 即可实现逆地理编码
      key: "2e500332d324b1cf3be0e493cbfea00f", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [
        "AMap.Geocoder",
        "AMap.Geolocation",
        "AMap.DistrictSearch",
        "AMap.MapType",
        "AMap.MarkerCluster",
      ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      showIndoorMap: false, //显示地图默认的室内地图图层
      showLabel: false,
    })
      .then((AMap) => {
        setAMap(AMap);
        let initMap = new AMap.Map("aMapContainer", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          // pitch: 0, // 地图俯仰角度，有效范围 0 度- 83 度，不想要3D效果此处设置为0即可
          // features: ["bg", "road", "building", "point"],//要显示的元素
          mapStyle: mapStyle, //设置地图的显示样式
          // showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
          // rotateEnable: false // 地图是否可旋转，3D视图默认为true，2D视图默认false
          // resizeEnable: true,//是否监控地图容器尺寸变化
          // zoom: 5 //初始化地图级别
          // center: [116, 39] //初始化地图中心点位置（zoom值一般情况下只能是3-18的整数，除非在3D模式下，zoom可以设置为浮点数）
          //   mapStyle: "amap://styles/583cf1a597d774f9091e36c6d1bd8fb5",
          // rotateEnable: true,
          // pitchEnable: true,
          zoom: 4,
          // pitch: 50,
          // rotation: -15,
          // zooms: [2, 20],
          center: [116.333926, 39.997245],
        });

        setMap(initMap);
        pointData.map((item) => {
          const lng = item.center[0];
          const lat = item.center[1];
          const marker = new AMap.Marker({
            position: new AMap.LngLat(lng, lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "北京",
            icon: icon, // 添加 Icon 图标 UR
          });
          initMap.add(marker);
        });
        // 将创建的点标记添加到已有的地图实例：
        initMap.on("click", clickHandler);
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {
      map && map.destroy();
    };
  }, [props.theme]);
  const clickHandler = function (e) {
    alert(
      "您在[ " +
        e.lnglat.getLng() +
        "," +
        e.lnglat.getLat() +
        " ]的位置点击了地图！"
    );
  };
  return (
    <div className="Map-container">
      <div id="aMapContainer" style={{ height: "100%" }}></div>
    </div>
  );
}
