import "./App.css";
import { Component } from "react";
import { MyCars } from "./components/MyCars";

class App extends Component {
  state = {
    title: "Mon catalogue de Voitures",
    color: "green",
  };

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.title} color={this.state.color} />
      </div>
    );
  }
}

export default App;
