import {
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
} from "react-router-dom";
export interface RouteType {
  key: string;
  // icon?: ElementType;
  label: string;
  content?: any;
  type?: "micro" | "child";
  path?: string[];
  url?: string;
  element?: JSX.Component;
  [key: string]: any;
}

export interface ContentType
  extends PathRouteProps,
    LayoutRouteProps,
    IndexRouteProps {
  element: JSX.Component;
  elementProps: {};
}
