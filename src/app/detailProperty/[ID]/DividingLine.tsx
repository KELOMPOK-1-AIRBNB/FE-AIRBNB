import React from "react";

interface DividingProps {
  className?: string;
}

const DividingLine = ({ className }: DividingProps) => {
  return (
    <span
      className={`flex bg-black w-full h-[2px] rounded-sm ${className}`}
    ></span>
  );
};

export default DividingLine;
