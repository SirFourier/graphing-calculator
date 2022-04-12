import React from "react";

export default function Input({ id, value, onChange, onDelete }) {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => onChange(id, e)} />
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
