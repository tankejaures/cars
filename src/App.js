import "./App.css";
import { Component } from "react";
import { MyCars } from "./components/MyCars";

class App extends Component {
  state = {
    title: "Mon catalogue de Voitures",
    color: "red",
  };

  changeTitle = (e) => {
    console.log(e.target);
    this.setState({
      title: "Mon nouveau titre",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      title: titre,
    });
    console.log(this.state);
  };

  changeViaBind = (param) => {
    this.setState({
      title: param,
    });
    console.log(this.state);
  };
  

  changeViaInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.title} color={this.state.color} />

        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.title}
        />
        <br />
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam("Titre via Param")}>
          Via param
        </button>
        <button onClick={this.changeViaBind.bind(this, "Titre via Bind")}>
          Via bind
        </button>
      </div>
    );
  }
}

export default App;
