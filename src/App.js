import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  const [displayForm, setForm] = useState(false);

  return (
    <div className="App border-box h-full">
      <Navbar setForm={setForm} />
      <Homepage setForm={setForm} displayForm={displayForm} />
    </div>
  );
}

export default App;
