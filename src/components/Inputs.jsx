import React from "react";
import Input from "./Input";

export default function Inputs({
  className,
  type,
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
          type={type}
          onChange={onChange}
          onDelete={onDelete}
          value={value}
        />
      ))}
      <button className="btn btn-primary" onClick={onAdd}>Add</button>
    </div>
  );
}
