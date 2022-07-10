/**
 * 做统一配置
 */

import Config from "./config";

Config.ready(() => {
  require("./router");
});

export default Config;
