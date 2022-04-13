import React from "react";

export default function Input({ id, type, value, onChange, onDelete }) {
  return (
    <div className="input-group flex-nowrap mb-2">
      <span className="input-group-text" >{id}</span>
      <input className="form-control" type={type} value={value} onChange={(e) => onChange(id, e)} />
      <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
