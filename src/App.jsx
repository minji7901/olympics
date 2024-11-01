import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MedalCont from "./components/MedalCont";
import MedalForm from "./components/MedalForm";

function App() {
  const [medalItems, setMedalItems] = useState([]);
  const getLocalSelected = () => {
    if (localStorage.getItem("filter") === null) {
      localStorage.setItem("filter", JSON.stringify("gold"));
      return "gold";
    } else {
      return JSON.parse(localStorage.getItem("filter"));
    }
  };

  const [selected, setSelected] = useState(getLocalSelected());

  useEffect(() => {
    let sortedItems = JSON.parse(localStorage.getItem("medalData")) || [];
    sortedItems = [...sortedItems].sort((a, b) => {
      return b[selected] - a[selected];
    });
    setMedalItems(sortedItems);
  }, []);

  return (
    <div className="h-screen flex justify-center pt-8 bg-gradient-to-br to-white from-primary-100 text-default font-custom">
      <div className="w-full max-w-custom min-w-custom">
        <Header />
        <MedalForm medalItems={medalItems} setMedalItems={setMedalItems}
        selected={selected} />
        <MedalCont
          medalItems={medalItems}
          setMedalItems={setMedalItems}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default App;
