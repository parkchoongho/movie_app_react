import React from "react";
import PropTyes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("Add");
  };

  minus = () => {
    console.log("Minus");
  };

  render() {
    return (
      <div>
        <h1>I am a Class Component {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
