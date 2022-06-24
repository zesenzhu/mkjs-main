const microApps = [
  {
    name: "micro_react",
    entry: "//127.0.0.1:9999/",
    activeRule: "/micro_react",
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: "/micro_react",
    },
  },
];
export default microApps;
