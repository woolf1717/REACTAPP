import "../src/app/globals.css";

import React from "react";

import TopMenu from "./menucomponents/topmenu";

export default function Menu() {
  return (
    <nav className=" w-screen bg-blue-950 overflow-hidden text-lg">
      <TopMenu />
      {/* <BottomMenu /> */}
    </nav>
  );
}
