import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((cur) => {
      return { count: cur.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((cur) => {
      return { count: cur.count + 1 };
    });
  }
  render() {
    const date = new Date("august 6 2023");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>dec</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>inc</button>
      </div>
    );
  }
}

export default Counter;
