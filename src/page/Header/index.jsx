import React, { useState, useMemo, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Table, Collapse, Input } from "antd";
import TransferStation from "@/components/TransferStation/index";
import Switch from "@/components/Switch/index.tsx";
import { useSelector, useDispatch } from "react-redux";
import {
  pushAdded,
  activeTab,
  detachData,
  renewValue,
} from "@/store/navListState";
import sun from "@/images/VisualDesign/sun.png";
import moon from "@/images/VisualDesign/moon.png";

import "./style.scss";

function Header() {
  const { Panel } = Collapse;
  const navigate = useNavigate();
  const [paneId, setPaneId] = useState("1");
  const [theme, setTheme] = useState();
  const [open, setOpen] = useState();
  const [personActive, setPersonActive] = useState(false);
  const navList = useSelector((state) => state.navList);
  const navItem = useSelector((state) => state.navItem);
  const panelList = useSelector((state) => state.panelList);
  const dispatch = useDispatch();

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme == "light") {
      setTheme("浅色");
      setOpen(false);
    } else {
      setTheme("深色");
      setOpen(true);
    }
    document.body.className = theme;
  }, []);

  const onChange = () => {};

  const clickNavItemLeft = () => {
    let i = navItem.value;
    if (i > 0) {
      i--;
    } else {
      return;
    }
    handleNavList(i);
  };

  const clickNavItemRight = () => {
    let i = navItem.value;
    if (i >= navList.length - 1) {
      return;
    } else {
      i++;
    }
    handleNavList(i);
  };

  const handleNavList = (i) => {
    dispatch(activeTab(i));
    dispatch(renewValue(i));
    setPaneId(navList[i]?.id);
  };

  return (
    <div className="hearder-container">
      <div className="hearder-left">
        <div className="hearder-left-title">XX企业后台管理系统</div>
        <div className="hearder-left-list">
          <Collapse defaultActiveKey={["1"]} onChange={onChange}>
            {panelList.map((item, i) => {
              return (
                <Panel
                  header={
                    <div
                      className="panelDom"
                      dangerouslySetInnerHTML={{ __html: item.dom }}
                    ></div>
                  }
                  key={item.key}
                >
                  <div className={`panel-item`}>
                    {item.children.map((info) => {
                      return (
                        <div
                          className={info.id == paneId ? "active" : ""}
                          onClick={() => {
                            setPaneId(info.id);
                            dispatch(
                              pushAdded({
                                active: true,
                                text: info.text,
                                id: info.id,
                              })
                            );
                            dispatch(renewValue(navList.length));
                          }}
                          key={info.id}
                        >
                          {info.text}
                        </div>
                      );
                    })}
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
      <div className="hearder-right">
        <div className="hearder-nav">
          <div className="hearder-icon"></div>
          <Input placeholder="请输入您要查找的内容..." />
          <div
            className={`person-box ${personActive ? "person-active" : ""}`}
            onClick={() => {
              setPersonActive(true);
              dispatch(
                pushAdded({
                  active: true,
                  text: "个人中心",
                  id: "001",
                })
              );
              dispatch(renewValue(navList.length));
            }}
          >
            <div className="person-icon"></div>
            <div className="theme-text1">个人</div>
          </div>
          <div
            className="theme-box"
            onClick={() => {
              let theme = localStorage.getItem("theme");
              if (theme == "light") {
                document.body.className = "dark";
                localStorage.setItem("theme", "dark");
                setTheme("深色");
              } else {
                document.body.className = "light";
                localStorage.setItem("theme", "light");
                setTheme("浅色");
              }
            }}
          >
            <Switch
              onChange={setOpen}
              open={open}
              openIcon={<img src={sun} alt="" width={26} height={26} />}
              closeIcon={<img src={moon} alt="" width={26} height={26} />}
            />
          </div>
        </div>
        <div className="hearder-navList">
          <div className="switch-left" onClick={() => clickNavItemLeft()}></div>
          <div className="navList-container">
            {navList.map((item, i) => {
              return (
                <div
                  key={i}
                  className={
                    item.active ? "navList-item active" : "navList-item"
                  }
                  onClick={() => {
                    handleNavList(i);
                  }}
                >
                  {item.text}
                  {navList.length > 1 ? (
                    <i
                      onClick={(e) => {
                        if (item.id == "12") {
                          setPersonActive(false);
                        }
                        e.stopPropagation();
                        dispatch(detachData(i));
                        if (i == 0) {
                          dispatch(activeTab(0));
                          setPaneId(navList[1].id);
                        } else {
                          clickNavItemLeft();
                          setPaneId(navList[--i].id);
                          dispatch(activeTab(i--));
                        }
                      }}
                    ></i>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div
            className="switch-right"
            onClick={() => clickNavItemRight()}
          ></div>
          <div className="close-use">关闭操作</div>
          <div
            className="exit-use"
            onClick={() => {
              navigate("/login");
            }}
          >
            退出
          </div>
        </div>
        <div className="content">
          <TransferStation
            id={navList.filter((item) => item.active)[0]?.id}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
