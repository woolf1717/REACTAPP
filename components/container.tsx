import "../src/app/globals.css";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="mx-4 mt-4 h-200vh">{children}</div>;
};
