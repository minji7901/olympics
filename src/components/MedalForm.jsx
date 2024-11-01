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
    if (
      e.target.type === "number" &&
      value.startsWith("0") &&
      value.length > 1
    ) {
      e.target.value = value.slice(1);
    }
    setInputValues((prevData) => ({
      ...prevData,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  const isDuplicate = () =>
    medalItems.some((data) => data.country === inputValues.country);

  const validateInput = () => {
    if (isDuplicate()) {
      alert("동일한 나라가 이미 리스트에 있습니다.");
      return false;
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

  const maxLengthCheck = (object) => {
    if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength);
    }
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
    if (!isDuplicate()) {
      alert("존재하지 않는 국가입니다");
      return false;
    }
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
              maxLength={i === 0 ? null : 2}
              placeholder={i === 0 ? "Enter country" : "0"}
              onInput={i === 0 ? null : (e) => maxLengthCheck(e.target)}
              required
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
