import React, { useEffect, useState } from "react";
import "./index.scss";

import Config from "config";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Content from "./Content";
import { useNavigate, useLocation } from "react-router-dom";
const { Header, Footer, Sider } = Layout;
const routers = Config.router;
function App() {
  // const TabList = [
  //   {
  //     children: <div id={"subapp-viewport"}></div>,
  //     tab: "子应用1",
  //     onChange: () => {
  //       window.history.pushState({}, "", "/micro_react");
  //     },
  //   },
  // ];
  let navigate = useNavigate();
  const path = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([routers[0].key]);
  console.log(path, selectedKeys);

  useEffect(() => {
    setSelectedKeys([routers?.find((c) => c.url === path.pathname)?.key || ""]);
  }, [path.pathname]);
  const onMenuClick = (item: any) => {
    const { key } = item;
    navigate(routers?.find((c) => c.key === key)?.url || "/");
    console.log(item, item.item);
  };
  return (
    <Layout className="main-content" id="main-content">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        // theme={"light"}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          items={routers}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content></Content>
        <Footer style={{ textAlign: "center" }}>
          小宝基地 ©2022 Created by 小宝
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
