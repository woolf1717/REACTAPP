import "../src/app/globals.css";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="mx-16 mt-6 h-120vh">{children}</div>;
};
