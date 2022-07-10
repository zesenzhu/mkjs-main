import { RouteType } from "../@types";
import MicroContent from "pages/microContent";

export const handleRoute = (router: RouteType) => {
  let defaultUrl = "/";

  if (router.type === "micro") {
    // 在前面加micro_app
    defaultUrl += "micro_app/";
    router.element = MicroContent;
  }
  if (!router.url) {
    router.url =
      defaultUrl + router.path?.reduce((a, b) => a + b + "/", "") ||
      "" + router.key;
  }
};

export default { handleRoute };
