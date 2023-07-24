import React from "react";
import { Modal, Input } from "antd";

import "./style.scss";

export default function myAppModal(props) {
  const { visible, setVisible, setModalData, title, data } = props;
  return (
    <Modal
      className="class-myapp-modal"
      open={visible}
      maskClosable={true}
      onCancel={() => {
        setModalData(null);
        setVisible(false);
      }}
      footer={null}
    >
      <div className="myapp-modal-title">{title}</div>
      <div className="myapp-modal-content">
        <div className="myapp-modal-item">
          <div className="item-text">
            编号<span>*</span>
          </div>
          <Input
            className="item-input"
            placeholder={data ? data.key : "请输入编号"}
          ></Input>
        </div>
        <div className="myapp-modal-item">
          <div className="item-text">
            名称<span>*</span>
          </div>
          <Input
            className="item-input"
            placeholder={data ? data.name : "请输入名称"}
          ></Input>
        </div>
        <div className="myapp-modal-item">
          <div className="item-text">
            数据值<span>*</span>
          </div>
          <Input
            className="item-input"
            placeholder={data ? data.age : "请输入数据值"}
          ></Input>
        </div>
        <div className="myapp-modal-item">
          <div className="item-text">
            类型<span>*</span>
          </div>
          <Input
            className="item-input"
            placeholder={data ? data.address : "请选择类型"}
          ></Input>
        </div>
        <div className="myapp-modal-item">
          <div className="item-text">
            描述<span>*</span>
          </div>
          <Input
            className="item-input"
            placeholder={data ? data.address : "请输入描述"}
          ></Input>
        </div>
        {data ? null : <div className="myapp-modal-btn">确定</div>}
      </div>
    </Modal>
  );
}
