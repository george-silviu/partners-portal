import React from "react";

const Sidebar = () => {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "blue",
        width: "200px",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    ></div>
  );
};

export default Sidebar;
