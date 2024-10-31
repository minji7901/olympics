import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MedalCont from "./components/MedalCont";
import MedalForm from "./components/MedalForm";
import MedalFilter from "./components/MedalFilter";

function App() {
  const [medalItems, setMedalItems] = useState([]);

  useEffect(() => {
    setMedalItems(JSON.parse(localStorage.getItem("medalData")) || []);
  }, []);

  return (
    <div className="h-screen flex justify-center pt-8 bg-gradient-to-br to-white from-primary-100 text-default font-custom">
      <div className="w-full max-w-custom min-w-custom">
        <Header />
        <MedalForm medalItems={medalItems} setMedalItems={setMedalItems} />
        <MedalFilter />
        <MedalCont medalItems={medalItems} setMedalItems={setMedalItems} />
      </div>
    </div>
  );
}

export default App;
