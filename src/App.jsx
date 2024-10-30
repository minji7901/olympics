import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import MedalList from "./components/MedalList";
import MedalForm from "./components/MedalForm";

function App() {
  const [medalItems, setMedalItems] = useState([]);
  return (
    <>
      <Header />
      <MedalForm medalItems={medalItems} setMedalItems={setMedalItems} />
      <MedalList medalItems={medalItems} setMedalItems={setMedalItems} />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
export default App;
