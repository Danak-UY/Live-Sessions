import React from "react";
import { Tabs } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
  NotificationOutlined,
  ControlOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

function ResultTabs() {
  return (
    <Tabs defaultActiveKey="all">
      <TabPane
        tab={
          <span>
            <SearchOutlined />
            All
          </span>
        }
        key="all"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <FileImageOutlined />
            Images
          </span>
        }
        key="images"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <EnvironmentOutlined />
            Maps
          </span>
        }
        key="maps"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <VideoCameraOutlined />
            Videos
          </span>
        }
        key="videos"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <NotificationOutlined />
            News
          </span>
        }
        key="news"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <ControlOutlined />
            Preferences
          </span>
        }
        key="preferences"
      ></TabPane>
    </Tabs>
  );
}

export default ResultTabs;
