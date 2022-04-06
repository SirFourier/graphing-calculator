import React from "react";

class Input extends React.Component {
  render() {
    const { id, equation, onChange, onDelete } = this.props;
    return (
      <div className="input">
        <input
          type="text"
          name="input"
          value={equation}
          onChange={(e) => onChange(id, e)}
        ></input>
        <button onClick={() => onDelete(id)}>Delete {id}</button>
      </div>
    );
  }
}

export default Input;
