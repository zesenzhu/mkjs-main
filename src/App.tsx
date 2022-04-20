import React from "react";
import "./App.css";
import Rxjs from "./pages/rxjs";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import Palette from "./pages/canvas/palette";
import Star from "./pages/canvas/star";
const { TabPane } = Tabs;
function App() {
  const TabList = [
    {
      children: <Palette />,
      tab: "线条绘画",
    },
    {
      children: <Star />,
      tab: "自动连接",
    },
    {
      children: <Rxjs />,
      tab: "rxjs使用",
    },
    {
      children: <div id={"subapp-viewport"}></div>,
      tab: "子应用1",
      onChange: () => {
        window.history.pushState({}, "", "/micro_react");
      },
    },
  ];
  return (
    <div className={"App app2"}>
      <Tabs
        style={{ height: "100%" }}
        defaultActiveKey={TabList[0].tab}
        onChange={(v) => {
          console.log(v);
          TabList.find((c) => c?.tab === v)?.onChange?.();
        }}
      >
        {TabList.map((c, i) => {
          return (
            <TabPane style={{ height: "100%" }} tab={c.tab} key={c.tab}>
              {c.children}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default App;
