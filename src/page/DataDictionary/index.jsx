import React, { useState } from "react";
import { Select, Input, Table } from "antd";
import Modal from "@/components/Modal";

import "./style.scss";
function DataDictionary() {
  const [visible, setVisible] = useState(false);
  const [modalTiTle, setModalTiTle] = useState("");
  const [modalData, setModalData] = useState(null);
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "吴彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "3",
      name: "刘德华",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "4",
      name: "周星驰",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "5",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "6",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "7",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "8",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "9",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "10",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "11",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "12",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "13",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "14",
      name: "成龙",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  const columns = [
    {
      title: "编号",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "数据值",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "类型",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "描述",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      className: "action-dom",
      align: "center",
      render: (e, data) => {
        return (
          <div className="action-box">
            <div
              className="action-fix"
              onClick={() => {
                setModalData(data);
                setModalTiTle("数据详情");
                setVisible(true);
              }}
            ></div>
            <div className="action-remove"></div>
            <div className="action-push"></div>
          </div>
        );
      },
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.age == "32",
      // Column configuration not to be checked
      name: record.age,
    }),
  };
  const addDataFunction = () => {
    setVisible(true);
    setModalTiTle("添加数据");
  };
  return (
    <div className="dataDictionary-container">
      <div className="dataDictionary-query">
        <div className="dataDictionary-btn">
          <div
            className="dataDictionary-btn-add"
            onClick={() => addDataFunction()}
          >
            &nbsp;&nbsp;&nbsp;添加
          </div>
          <div className="dataDictionary-btn-remove">
            &nbsp;&nbsp;&nbsp;删除
          </div>
        </div>
        <div className="dataDictionary-main">
          <div className="dataDictionary-select">
            <Select defaultValue={"选择类别"}>
              <Select.Option value=""></Select.Option>
            </Select>
          </div>
          <div className="dataDictionary-input">
            <Input />
          </div>
          <div className="dataDictionary-queryButton">
            &nbsp;&nbsp;&nbsp;查询
          </div>
        </div>
      </div>
      <div className="dataDictionary-table">
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          dataSource={dataSource}
          columns={columns}
          bordered={true}
        />
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        setModalData={setModalData}
        title={modalTiTle}
        data={modalData}
      ></Modal>
    </div>
  );
}
export default DataDictionary;
