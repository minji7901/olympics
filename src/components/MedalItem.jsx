import React from "react";

export default function MedalItem({ medalItems, setMedalItems }) {
  const filterById = (items, id) => items.filter((t) => t.id !== id);

  const handleDelete = (deleted) => {
    setMedalItems((prev) => filterById(prev, deleted.id));
    let getData = JSON.parse(localStorage.getItem("medalData"));
    getData = filterById(getData, deleted.id);
    localStorage.setItem("medalData", JSON.stringify(getData));
  };

  return medalItems.map((data) => (
    <tr key={data.id}>
      <td className="py-3 text-lg text-center border-b border-softly-100">
        {data.country}
      </td>
      <td className="py-3 text-lg text-center border-b border-softly-100 text-primary-200">
        {data.gold}
      </td>
      <td className="py-3 text-lg text-center border-b border-softly-100 text-primary-200">
        {data.silver}
      </td>
      <td className="py-3 text-lg text-center border-b border-softly-100 text-primary-200">
        {data.bronze}
      </td>
      <td className="py-3 text-lg text-center border-b border-softly-100 ">
        {data.total}
      </td>
      <td className="py-3 text-lg text-center border-b border-softly-100">
        <button
          type="button"
          onClick={() => handleDelete(data)}
          className="px-3 py-1 text-white bg-[#FF4D4D] rounded-md hover:bg-[#FF1A1A] transition"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
}
