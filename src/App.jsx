import React, { useState } from "react";
import Inputs from "./components/Inputs";

export default function App() {
  const [inputs, setInputs] = useState([""]);

  const handleChange = (id, e) => {
    const newInputs = [...inputs];
    newInputs[id] = e.target.value;
    setInputs(newInputs);
  };

  const handleDelete = (id) => {
    const newInputs = [...inputs];
    newInputs.splice(id, 1);
    setInputs(newInputs);
  };

  const handleAdd = () => {
    setInputs([...inputs, ""]);
  };

  return (
    <div className="container">
      <Inputs
        type="text"
        inputs={inputs}
        onChange={handleChange}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
}
