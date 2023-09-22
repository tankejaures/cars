import "./App.css";
import { Component } from "react";
import ParentComponent from "./components/ParentComponent";

class App extends Component {

  state = {
    age: 27
  }

  addOneYear = () => {
    this.setState((prevState) => ({
      age: prevState.age+1
    }))
  }

  render() {
    return (
      <div className="App">
        <ParentComponent age={this.state.age} />

        <button onClick={this.addOneYear}>Changer le props</button>
      </div>
    );
  }
}

export default App;
