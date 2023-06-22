import "../src/app/globals.css";

import React from "react";

import TopMenu from "./menucomponents/topmenu";

export default function Menu() {
  return (
    <nav className="w-screen overflow-hidden bg-blue-950 text-lg">
      <TopMenu />
      {/* <BottomMenu /> */}
    </nav>
  );
}
