import React from "react";
import { TbOlympics } from "react-icons/tb";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-3">
      <TbOlympics className="text-primary-300 text-5xl" />
      <h1 className="text-4xl">Olympic Medalists</h1>
    </div>
  );
}
