import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          RESET
        </button>

        {this.props.counters.map(counter => (
          <Counter
            onDelete={this.props.onDelete}
            key={counter.id}
            counter={counter}
            increment={this.props.onIncrement}
            /*value={counter.value}
            id={counter.id}*/
          />
        ))}
      </div>
    );
  }
}

export default Counters;
