import React from "react";
import { MdFilterAlt } from "react-icons/md";

export default function MedalFilter() {
  return (
    <div className="flex gap-2 items-center justify-end mb-3">
      <MdFilterAlt />
      <select name="medal-filter" id="medalFilter">
        <option value="gold" defaultValue>
          gold
        </option>
        <option value="silver">silver</option>
        <option value="bronze">bronze</option>
        <option value="total">total</option>
      </select>
    </div>
  );
}
