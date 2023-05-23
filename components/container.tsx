import "../src/app/globals.css";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="mx-10 mt-2 h-screen">{children}</div>;
};
