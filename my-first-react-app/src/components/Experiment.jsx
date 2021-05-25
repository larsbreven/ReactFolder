import React, { Component } from "react";

class Experiment extends Component {
  state = {
    marginNumber: 10,
    myColor: "blue",
  };

  changeText = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  changeNumber = (event) => {
    const value = event.target.value;
    this.setState({
      marginNumber: value,
    });
  };

  render() {
    return (
      <div style={{ color: this.state.myColor }}>
        <h3>My color: {this.state.myColor}</h3>
        <h3>My number: {this.state.marginNumber}</h3>
        <input
          type="color"
          value={this.state.myColor}
          name="myColor"
          onChange={this.changeText}
        />
        <input
          type="number"
          value={this.state.marginNumber}
          name="marginNumber"
          onChange={this.changeNumber}
        />
      </div>
    );
  }
}

export default Experiment;