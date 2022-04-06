import React from "react";
import Input from "./Input";

class Equations extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: [
        { id: 0, equation: "" },
        { id: 1, equation: "" },
      ],
    };
  }

  handleChange = (id, e) => {
    const inputs = [...this.state.inputs];
    inputs[id].equation = e.target.value;
    this.setState({ inputs: inputs });
  };

  handleAdd = () => {
    const inputs = [...this.state.inputs];
    inputs.push({ id: inputs.length, equation: "" });
    this.setState({ inputs: inputs });
  };

  handleDelete = (id) => {
    const inputs = [...this.state.inputs];
    inputs.splice(id, 1);
    this.setState({ inputs: inputs });
  };

  render() {
    return (
      <div className="equations">
        {this.state.inputs.map(({ equation }, index) => (
          <Input
            key={index}
            id={index}
            equation={equation}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
          >
            {equation}
          </Input>
        ))}
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default Equations;
