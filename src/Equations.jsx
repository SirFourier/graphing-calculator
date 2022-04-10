import React, { useState } from "react";
import Input from "./Input";

const Equations = (props) => {
  const [inputs, setInputs] = useState([
    { id: 0, equation: "" },
    { id: 1, equation: "" },
  ]);

  const handleChange = (id, e) => {
    const newInputs = [...inputs];
    newInputs[id].equation = e.target.value;
    setInputs(newInputs);
  };

  const handleAdd = () => {
    setInputs([...inputs, { id: inputs.length, equation: "" }]);
  };

  const handleDelete = (id) => {
    const newInputs = [...inputs];
    newInputs.splice(id, 1);
    setInputs(newInputs);
  };

  return (
    <div {...props}>
      {inputs.map(({ equation }, index) => (
        <Input
          key={index}
          id={index}
          equation={equation}
          onChange={handleChange}
          onDelete={handleDelete}
        >
          {equation}
        </Input>
      ))}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Equations;
