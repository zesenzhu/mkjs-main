import React from "react";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  console.log("error路由");

  return (
    <div id={"error"} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default Index;
