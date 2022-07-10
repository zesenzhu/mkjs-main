/**
 * 做统一配置
 */

import { RouteType, ContentType } from "./@types";
import { handleRoute } from "./utils";

class Config {
  router: RouteType[] = []; //路由
  contents: ContentType[] = []; //内容区
  /**
   * 设置单个路由
   * @param router RouteType
   */
  setRouter(router: RouteType) {
    handleRoute(router);
    this.setContent(router);
    this.router.push(router);
  }
  getRouter(key: string) {
    const router = this.router.find((c) => c.key === key);
    if (!router) {
      console.log("不存在这个路由:" + key);
      return false;
    }
    return router;
  }

  setRouters(routers: RouteType[]) {
    routers.forEach((c) => this.setRouter(c));
  }

  // 设置路由体
  setContent(router: RouteType) {
    console.log(router);
    this.contents.push({
      path: router.url as string,
      element: router.element as JSX.Element,
      elementProps: {},
    });
  }

  /**
   * 当config准备好后的生命周期
   */
  ready(callback: () => void) {
    callback();
  }
}

const config = new Config();

export default config;
