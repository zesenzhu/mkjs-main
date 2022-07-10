import Config from "./config";
import { RouteType } from "./@types";
import { SendOutlined } from "@ant-design/icons";
import React from "react";

const router: RouteType[] = [
  {
    key: "micro1",
    label: "子应用",
    icon: React.createElement(SendOutlined),
    type: "micro",
    path: ["micro_react"],
  },
];
Config.setRouters(router);
export default router;
