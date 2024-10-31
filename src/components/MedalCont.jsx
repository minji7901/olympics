import React, { useEffect, useState } from "react";
import MedalItem from "./MedalItem";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdFilterAlt } from "react-icons/md";

export default function MedalCont({ medalItems, setMedalItems }) {
  const [selected, setSelected] = useState("gold");
  const filterList = ["gold", "silver", "bronze", "total"];

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    const sortedItems = [...medalItems].sort((a, b) => {
      return b[selected] - a[selected];
    });
    setMedalItems(sortedItems);
  }, [selected]);

  return (
    <>
      <div className="flex gap-2 items-center justify-end mb-3">
        <MdFilterAlt />
        <select
          name="medal-filter"
          id="medalFilter"
          onChange={handleSelect}
          value={selected}
        >
          {filterList.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="h-[600px] px-10 shadow-2xl rounded-xl border border-softly-100 bg-white overflow-auto">
        <table className="table-auto w-full">
          <colgroup>
            <col width="auto" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th className="py-5 text-softly-300 font-normal text-xl">
                Country
              </th>
              <th className="py-5 text-softly-300 font-normal text-xl">
                <span className="block w-4 h-4 rounded-full mx-auto shadow-custom-medal bg-[#FFD700]"></span>
              </th>
              <th className="py-5 text-softly-300 font-normal text-xl">
                <span className="block w-4 h-4 rounded-full mx-auto shadow-custom-medal bg-[#C0C0C0]"></span>
              </th>
              <th className="py-5 text-softly-300 font-normal text-xl">
                <span className="block w-4 h-4 rounded-full mx-auto shadow-custom-medal bg-[#CD7F32]"></span>
              </th>
              <th className="py-5 text-softly-300 font-normal text-xl">
                Total
              </th>
              <th className="py-5 text-softly-300 font-normal text-xl">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {medalItems.length === 0 ? (
              <tr>
                <td
                  className="py-3 text-lg text-center  border-none"
                  colSpan={6}
                >
                  <p className="flex items-center justify-center gap-1 text-softly-300 font-normal text-2xl py-5">
                    <IoAlertCircleOutline className="mb-1" />
                    아직 추가 되지 않았습니다
                  </p>
                </td>
              </tr>
            ) : (
              <MedalItem
                medalItems={medalItems}
                setMedalItems={setMedalItems}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
