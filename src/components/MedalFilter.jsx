import React from "react";
import { MdFilterAlt } from "react-icons/md";

export default function MadalFilter({ selected, setSelected }) {
  const filterList = ["gold", "silver", "bronze", "total"];

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex gap-2 items-center justify-end mb-3">
      <MdFilterAlt />
      <select
        name="medal-filter"
        id="medalFilter"
        onChange={handleSelect}
        value={selected}
      >
        {filterList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
