import "./App.css";
import { Component, createRef } from "react";
import MyRef from "./components/MyRef";

class App extends Component {
  constructor(props) {
    super(props)

    this.refComp = createRef();
  }

  handleClick = () => {
    console.log(this.refComp);
    this.refComp.current.focus();
  }

  render() {
    return (
      <div className="App">
        <MyRef name="toto" ref={this.refComp} />
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
