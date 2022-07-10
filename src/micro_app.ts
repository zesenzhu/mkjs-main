// 动态注入,区分生产环境和开发环境,BUILD_HOST这个在start.js设置的,所以在运行yarn start的时候要带上--buildHost=${ip}
// const generateEnv = () => {
//   console.log(
//     "micro_app",
//     process.env.BUILD_HOST,
//     process.env.npm_config_buildHost
//   );
//   return (
//     (process.env.NODE_ENV === "production" && process.env.BUILD_HOST) ||
//     "localhost"
//   );
// };
const microApps = [
  {
    name: "micro_react",
    entry: `//${document.location.hostname}:9999/`,
    activeRule: "/micro_react",
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: "/micro_react",
    },
  },
];
export default microApps;
