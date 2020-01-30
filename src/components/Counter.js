import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Class Based Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment} type="button">
          Plus
        </button>
        <button onClick={this.decrement} type="button">
          Minus
        </button>
      </div>
    );
  }
}

export default Counter;