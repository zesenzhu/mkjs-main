import React from "react";
import "./App.css";
import UseMemo from "./pages/memoized";
import UseCallback from "./pages/useCallback";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import Palette from "./pages/canvas/palette";
import Star from "./pages/canvas/star";
const { TabPane } = Tabs;
function App() {
  const TabList = [
    {
      children: <Palette />,
      tab: "tab1",
    },
    {
      children: <Star />,
      tab: "tab2",
    },
    {
      children: <UseCallback />,
      tab: "tab3",
    },
  ];
  return (
    <div className={"App"}>
      <Tabs
        style={{ height: "100%" }}
        defaultActiveKey={TabList[0].tab}
        onChange={(v) => console.log(v)}
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
