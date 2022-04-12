import React from "react";
import Input from "./Input";

export default function Inputs({
  className,
  inputs,
  onChange,
  onDelete,
  onAdd,
}) {
  return (
    <div className={className}>
      {inputs.map((value, index) => (
        <Input
          key={index}
          id={index}
          onChange={onChange}
          onDelete={onDelete}
          value={value}
        />
      ))}
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
