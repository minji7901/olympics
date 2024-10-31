import React, { useState } from "react";

const initialInputValues = () => ({
  country: "",
  gold: 0,
  silver: 0,
  bronze: 0,
  total: 0,
});

export default function MedalForm({ medalItems, setMedalItems }) {
  const [inputValues, setInputValues] = useState(initialInputValues);
  const initial = () => setInputValues(initialInputValues());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevData) => ({
      ...prevData,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  const isDuplicate = () =>
    medalItems.some((data) => data.country === inputValues.country);

  const validateInput = () => {
    const { country, gold, silver, bronze } = inputValues;
    if (country === "" || isDuplicate()) {
      alert(
        country === ""
          ? "나라를 입력해주세요"
          : "동일한 나라가 이미 리스트에 있습니다."
      );
      return false;
    } else if (
      gold < 0 ||
      gold > 100 ||
      silver < 0 ||
      silver > 100 ||
      bronze < 0 ||
      bronze > 100
    ) {
      return alert("메달 갯수를 0개 이상 최대 2자리 숫자로 입력해주세요");
    }
    return true;
  };

  const copyCalculateTotal = {
    ...inputValues,
    total: Object.values(inputValues)
      .slice(1)
      .reduce((acc, cur) => acc + cur, 0),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput()) return;
    const newItems = {
      id: new Date().getTime(),
      ...copyCalculateTotal,
    };
    setMedalItems([...medalItems, newItems]);
    const medalData = JSON.parse(localStorage.getItem("medalData")) || [];
    medalData.push(newItems);
    localStorage.setItem("medalData", JSON.stringify(medalData));
    initial();
  };

  const validateCountry = () => {
    const { country } = inputValues;
    if (!country || !isDuplicate()) {
      return alert(
        country ? "존재하지 않는 국가입니다" : "나라를 입력해주세요"
      );
    }
    return true;
  };

  const updateItem = (item) => {
    return item.country === inputValues.country
      ? {
          ...item,
          ...copyCalculateTotal,
        }
      : item;
  };

  const handleUpdate = () => {
    if (!validateCountry()) return;
    setMedalItems((prev) => prev.map(updateItem));

    let medalData = JSON.parse(localStorage.getItem("medalData"));
    medalData = medalData.map(updateItem);
    localStorage.setItem("medalData", JSON.stringify(medalData));
    initial();
  };

  const formArrName = ["country", "gold", "silver", "bronze"];

  return (
    <form className="flex gap-2 mt-10 mb-5" onSubmit={handleSubmit}>
      <div className="flex w-full gap-5">
        {formArrName.map((name, i) => (
          <div className="flex gap-2" key={i}>
            <span className="text-lg font-bold">{name}</span>
            <input
              type={i === 0 ? "text" : "number"}
              name={name}
              value={inputValues[name]}
              onChange={handleChange}
              className={
                i === 0 ? "text-center rounded-md" : "pl-1 w-10 rounded-md"
              }
              placeholder={i === 0 ? "Enter country" : "0"}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <button
          type="submit"
          className="flex-1 px-5 py-1 rounded-md text-white bg-secondly-100 hover:bg-secondly-200 transition shadow-custom-btn"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          className="flex-1 px-5 py-1 rounded-md text-white transition bg-[#FFA500] hover:bg-[#FF8C00] shadow-custom-btn"
        >
          Updated
        </button>
      </div>
    </form>
  );
}
