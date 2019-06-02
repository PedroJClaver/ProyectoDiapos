import React, { Component } from "react";

export default class MarginAuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margins: ["mb-auto", "mb-auto ml-auto", "mt-auto ml-auto", "mt-auto"],
      current: 0
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    let nextValue = this.state.current === 3 ? 0 : this.state.current+1;
    this.setState({ current: nextValue });
  };

  render() {
    return (
      <button
        onClick={this.onClick}
        className={`d-inline ${this.state.margins[this.state.current]}`}
      >
        <p className="m-0">{`🦆🦆🦆`}</p>
        <p className="m-0">{`🦆🦆🦆`}</p>
        <p className="m-0">{`🦆🦆🦆`}</p>
      </button>
    );
  }
}
