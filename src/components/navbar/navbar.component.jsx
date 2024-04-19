import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "red",
        height: "50px",
        position: "fixed",
        top: "0",
        width: "calc(100% - 200px)",
        marginLeft: "200px",
        zIndex: "1",
      }}
    ></div>
  );
};

export default Navbar;
