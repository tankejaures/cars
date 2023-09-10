import "./App.css";
import { Component } from "react";
import { MyCars } from "./components/MyCars";
import Welcome from "./components/Welcome";

class App extends Component {
  state = {
    title: "Mon catalogue de Voitures",
    color: "green",
  };

  render() {
    return (
      <div className="App">
        <Welcome />
        <MyCars title={this.state.title} color={this.state.color} />
      </div>
    );
  }
}

export default App;
