import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";
import "./styles.css";
class App extends Component {
  state = {
    Persons: [{ name: "Max", age: 12 }, { name: "Mon", age: 22 }]
  }
  switchNameHandler = () => {
    this.setState (
      {
        Persons: [{ name: "Maxmi", age: 32 }, { name: "Mon", age: 22 }]
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick = {this.switchNameHandler}>Switch Name </button>
        <Person
          name={this.state.Persons[0].name}
          age={this.state.Persons[0].age}
        />
        <Person
          name={this.state.Persons[1].name}
          age={this.state.Persons[1].age}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
