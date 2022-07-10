import { Layout } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Config from "config/index";
import { ContentType } from "@/config/@types";
import Error from "./Error";
const { Content } = Layout;
const { contents } = Config;
const Index: React.FC = () => {
  console.log(contents);
  return (
    <Content style={{ height: "100%", width: "100%" }}>
      <Routes>
        {contents.map((c: ContentType) => {
          const Element = c.element;
          const elementProps = c.elementProps ?? {};
          return (
            <Route
              key={c.path}
              path={c.path}
              element={Element ? <Element {...elementProps} /> : <></>}
            ></Route>
          );
        })}
        <Route
          path="*"
          element={<Error>未匹配到该路由请先设置路由页面 </Error>}
        />
      </Routes>
    </Content>
  );
};

export default Index;
