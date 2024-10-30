import React from "react";

export default function MedalList({ medalItems, setMedalItems }) {
  const handleDelete = (deleted) => {
    setMedalItems(medalItems.filter((t) => t.id !== deleted.id));
  };
  return (
    <div className="medal__container">
      <table className="medal__table">
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
            <th>Country</th>
            <th>
              <span className="bg-[#FFD700]"></span>
            </th>
            <th>
              <span className="bg-[#C0C0C0]"></span>
            </th>
            <th>
              <span className="bg-[#CD7F32]"></span>
            </th>
            <th>Total</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {medalItems.length === 0 ? (
            <tr>
              <td className="border-none" colSpan={6}>
                <p className="text-softly-300 font-normal text-center py-5">
                  아직 추가 되지 않았습니다.
                </p>
              </td>
            </tr>
          ) : (
            medalItems
              .sort((a, b) => b.inputValues.gold - a.inputValues.gold)
              .map((data) => (
                <tr key={data.id}>
                  <td>{data.inputValues.country}</td>
                  <td>{data.inputValues.gold}</td>
                  <td>{data.inputValues.silver}</td>
                  <td>{data.inputValues.bronze}</td>
                  <td>{data.total}</td>
                  <td>
                    <button type="button" onClick={() => handleDelete(data)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}
