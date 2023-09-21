import "./App.css";
import { Component } from "react";
import LifeCycle from "./components/LifeCycle";

class App extends Component {

  state = {
    display: true
  }
  render() {
    return (
      <div className="App">
        {this.state.display ? <LifeCycle name="Toto 2" /> : <h1>Composant suprimé</h1>}

        <button onClick={() => this.setState({ display: !this.state.display })}> Cliquer ici </button>
      </div>
    );
  }
}

export default App;
