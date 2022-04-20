import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

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
      <button className="btn btn-primary" onClick={onAdd}>
        Add
      </button>
    </div>
  );
}

Inputs.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func.isRequired,
};
