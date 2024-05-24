import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return <div className={`text-start py-4 ${className}`}>{children}</div>;
};

export default Box;
