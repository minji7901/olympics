import React, { useState } from "react";

export default function MedalForm({ medalItems, setMedalItems }) {
  const [inputValues, setInputValues] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
    total: 0,
  });
  const isDuplicate = medalItems.some(
    (data) => data.inputValues.country === inputValues.country
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { country, gold, silver, bronze } = inputValues;
    if (country === "") {
      alert("나라를 입력해주세요");
      return;
    } else if (
      gold < 0 ||
      gold > 100 ||
      silver < 0 ||
      silver > 100 ||
      bronze < 0 ||
      bronze > 100
    ) {
      alert("메달 갯수를 0개 이상 최대 2자리 숫자로 입력해주세요");
      return;
    }
    if (isDuplicate) {
      alert("동일한 나라가 이미 리스트에 있습니다.");
      return;
    }

    setMedalItems([
      ...medalItems,
      {
        id: new Date().getTime(),
        inputValues,
        total: Object.values(inputValues)
          .slice(1)
          .reduce((acc, cur) => acc + Number(cur), 0),
      },
    ]);
    
    setInputValues({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
    });
  };

  const handleUpdate = () => {
    const { country } = inputValues;
    if (country === "") {
      alert("나라를 입력해주세요");
      return;
    }

    if (!isDuplicate) {
      alert("존재하지 않는 국가입니다");
      return;
    }

    setMedalItems((prev) =>
      prev.map((item) =>
        item.inputValues.country === country
          ? {
              ...item,
              inputValues: { ...inputValues },
              total: Object.values(inputValues)
                .slice(1)
                .reduce((acc, cur) => acc + Number(cur), 0),
            }
          : item
      )
    );

    setInputValues({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
    });
  };

  const formArrName = ["country", "gold", "silver", "bronze"];

  return (
    <form className="flex gap-2 mb-10" onSubmit={handleSubmit}>
      <div className="flex w-full gap-5">
        {formArrName.map((name, i) => (
          <div className="flex gap-2" key={i}>
            <span className="font-bold">{name}</span>
            <input
              type={i === 0 ? "text" : "number"}
              name={name}
              value={inputValues[name]}
              onChange={handleChange}
              className={i === 0 ? "text-center" : "pl-1 w-10"}
              placeholder={i === 0 ? "Enter country" : "0"}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button type="submit" className="add__btn">
          Add
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          className="add__btn bg-[#FFA500] hover:bg-[#FF8C00]"
        >
          Updated
        </button>
      </div>
    </form>
  );
}
