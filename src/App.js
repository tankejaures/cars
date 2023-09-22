import "./App.css";
import { Component } from "react";
import ModalComponent from "./components/ModalComponent";

class App extends Component {

  state = {
    showModal: false
  }

  handleShowModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const modal = this.state.showModal && <ModalComponent close={this.handleHideModal} />;
    return (
      <div className="App">
        <button onClick={this.handleShowModal}>Afficher le modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
