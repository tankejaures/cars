import "./App.css";
import { Component } from "react";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import Freeza from "./components/Freeza";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>Cliquer sur les gentils</h1>

        <div className="row">
          <ErrorBoundary>
            <Vegeta name="Vegeta" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku name='Goku' />
          </ErrorBoundary>
          <ErrorBoundary>
            <Freeza name='Freeza' />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
