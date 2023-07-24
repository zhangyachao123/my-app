import React from "react";
import { Input } from "antd";
import icon from "@/images/VisualDesign/cartoonFigure.png";

const { TextArea } = Input;
import "./style.scss";

export default function PersonCenter() {
  return (
    <div className="personCenter-container">
      <div className="personCenter-box">
        <div className="personCenter-box-left">
          <div>
            {/* <div className="head-sculptrue"></div> */}
            <img src={icon}></img>
            <div className="userName">超级管理员</div>
            <div className="registration-date">
              注册日期: 2023-06-15 11:13:02
            </div>
            <div className="fix-head-sculptrue">修改头像</div>
            <div className="info-binding">
              <div className="line-left"></div>
              <div className="info-text">信息绑定</div>
              <div className="line-right"></div>
            </div>
          </div>
          <div className="iphone-box">
            <div>手机: 17600927360</div>
            <div>修改手机</div>
          </div>
          <div className="email-box">
            <div>邮箱: 2440807059@qq.com</div>
            <div>绑定邮箱</div>
          </div>
          <div className="button-line"></div>
          <div className="button">修改密码</div>
        </div>
        <div className="personCenter-box-right">
          <div className="info-person">
            <div className="line-left"></div>
            <div className="info-text">个人信息</div>
            <div className="line-right"></div>
          </div>
          <div className="input-box">
            <div className="input-item">
              <div className="input-text">用户名 : </div>
              <div>admin</div>
            </div>
            <div className="input-item">
              <div className="input-text">角色 : </div>
              <div>超级管理员</div>
            </div>
            <div className="input-item">
              <div className="input-text">
                <span>*</span>真实姓名 :
              </div>
              <Input />
            </div>
            <div className="input-item">
              <div className="input-text">地址 : </div>
              <Input />
            </div>
            <div className="input-item">
              <div className="input-text">性别 : </div>
              <Input />
            </div>
            <div className="input-item">
              <div className="input-text">备注 : </div>
              <TextArea placeholder="~还没想好..." />
            </div>
          </div>
          <div className="input-line"></div>
          <div className="input-btn">保存</div>
        </div>
      </div>
    </div>
  );
}
