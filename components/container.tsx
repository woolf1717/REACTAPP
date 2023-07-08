import "../src/app/globals.css";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="min-h-100vh mx-4 mt-4">{children}</div>;
};
