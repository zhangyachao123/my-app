import React, { useState, useMemo } from "react";
import { Input, Progress, Table } from "antd";

import "./style.scss";

export default function Task() {
  const { TextArea } = Input;
  const columns = [
    {
      title: "工作任务",
      dataIndex: "workTask",
      key: "workTask",
      align: "center",
    },
    {
      title: "发起人",
      dataIndex: "promoter",
      key: "promoter",
      align: "center",
    },
    {
      title: "指派部门",
      dataIndex: "department",
      key: "department",
      align: "center",
    },
    {
      title: "开始时间",
      dataIndex: "startTime",
      key: "startTime",
      align: "center",
    },
    {
      title: "结束时间",
      dataIndex: "endTime",
      key: "endTime",
      align: "center",
    },
    {
      title: "完成状态",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (e) => {
        let color;
        if (e == "已完成") {
          color = "#FF6B03";
        } else if (e == "进行中") {
          color = "#61D7F6";
        } else {
          color = "#B36DEF";
        }
        return <div style={{ color: color }}>{e}</div>;
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: () => {
        return <div>查看详情</div>;
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      workTask: "OA后台管理系统",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "已完成",
    },
    {
      key: "2",
      workTask: "商城后台开发",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "已完成",
    },
    {
      key: "3",
      workTask: "画册设计",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "已完成",
    },
    {
      key: "4",
      workTask: "AI手册设计",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "未完成",
    },
    {
      key: "5",
      workTask: "专题网站设计",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "进行中",
    },
    {
      key: "6",
      workTask: "企业网站设计",
      promoter: "刘德华",
      department: "设计部",
      startTime: "2023-06-05",
      endTime: "2023-06-12",
      status: "未完成",
    },
  ];
  return (
    <div className="task-container">
      <div className="task-action-box">
        <div className="add-work-task">
          <div className="add-work-task-title">
            <div className="icon"></div>
            <div className="text">新增任务工作</div>
          </div>
          <div className="add-work-task-content">
            <div className="add-work-task-input">
              <div className="add-work-task-input-item">
                <div>任务名称</div>
                <Input />
              </div>
              <div className="add-work-task-input-item">
                <div>指派部门</div>
                <Input />
              </div>
              <div className="add-work-task-input-item">
                <div>截止日期</div>
                <Input />
              </div>
              <div className="add-work-task-input-item">
                <div>负责人</div>
                <Input />
              </div>
              <div className="add-work-task-input-item">
                <div>任务分类</div>
                <Input />
              </div>
            </div>
            <div className="add-work-task-textArea">
              <TextArea placeholder="添加任务说明" />
            </div>
            <div className="add-work-task-btn">
              <div className="loadFile">
                <div>上传附件</div>
              </div>
              <div className="cancel-view">
                <div>取消</div>
                <div>添加</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-publishing">
          <div className="my-publishing-title">
            <div className="icon"></div>
            <div className="text">我的发布</div>
          </div>
          <div className="my-publishing-content">
            <div className="my-publishing-content-box">
              <div className="my-publishing-info">
                发布名称: OA后台管理系统项目
              </div>
              <div className="my-publishing-info">发布部门: 设计部</div>
              <div className="my-publishing-info">发布人员: 刘德华</div>
              <div className="my-publishing-info">发布日期: 2019.07.26</div>
              <div className="my-publishing-info">截止日期: 2020.08.21</div>
              <div className="my-publishing-info">
                <Progress percent={50} size="small" status="active" />
              </div>
              <div className="my-publishing-btn">
                <div>查看</div>
              </div>
            </div>
            <div className="my-publishing-content-box">
              <div className="my-publishing-info">
                发布名称: OA后台管理系统项目
              </div>
              <div className="my-publishing-info">发布部门: 设计部</div>
              <div className="my-publishing-info">发布人员: 刘德华</div>
              <div className="my-publishing-info">发布日期: 2019.07.26</div>
              <div className="my-publishing-info">截止日期: 2020.08.21</div>
              <div className="my-publishing-info">
                <Progress percent={30} size="small" status="active" />
              </div>
              <div className="my-publishing-btn">
                <div>查看</div>
              </div>
            </div>
            <div className="my-publishing-content-box">
              <div className="my-publishing-info">
                发布名称: OA后台管理系统项目
              </div>
              <div className="my-publishing-info">发布部门: 设计部</div>
              <div className="my-publishing-info">发布人员: 刘德华</div>
              <div className="my-publishing-info">发布日期: 2019.07.26</div>
              <div className="my-publishing-info">截止日期: 2020.08.21</div>
              <div className="my-publishing-info">
                <Progress percent={80} size="small" status="active" />
              </div>
              <div className="my-publishing-btn">
                <div>查看</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="task-table-box">
        <div className="task-table-box-title">
          <div className="left">
            <div className="icon"></div>
            <div className="text">任务列表</div>
          </div>
          <div className="right">
            <div className="color1">
              <div className="raduis"></div>
              <div>未完成</div>
            </div>
            <div className="color2">
              <div className="raduis"></div>
              <div>进行中</div>
            </div>
            <div className="color3">
              <div className="raduis"></div>
              <div>已完成</div>
            </div>
          </div>
        </div>
        <div className="task-table-content">
          <Table
            scroll={{ y: 210 }}
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
}
