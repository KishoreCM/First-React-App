import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  increment = counter => {
    let counters = this.state.counters;
    //console.log(counter);
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  deleteElement = cid => {
    const counters = this.state.counters.filter(c => c.id !== cid);
    this.setState({ counters });
  };

  resetCounters = () => {
    let counters = this.state.counters.map(c => (c.value = 0));
    this.setState(counters);
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <Counters
          onIncrement={this.increment}
          onDelete={this.deleteElement}
          onReset={this.resetCounters}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
