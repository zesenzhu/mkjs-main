import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import microApps from "./micro_app";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// 注册子应用
registerMicroApps(microApps, {
  // beforeLoad: [
  //   (app: any) => {
  //     console.log("before load app.name====>>>>>", app);
  //     return new Promise(() => {});
  //   },
  // ],
  // beforeMount: [
  //   (app: any) => {
  //     console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
  //     return new Promise(() => {});
  //   },
  // ],
  // afterMount: [
  //   (app: any) => {
  //     console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
  //     return new Promise(() => {});
  //   },
  // ],
  // afterUnmount: [
  //   (app: any) => {
  //     console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
  //     return new Promise(() => {});
  //   },
  // ],
});
// 启动qiankun
start();
console.log("注意用");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
