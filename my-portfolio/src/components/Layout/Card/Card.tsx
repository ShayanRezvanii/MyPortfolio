/** @format */

import React from "react";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <div className=" w-full bg-white px-4 rounded-lg">{children}</div>;
}

export default Card;
