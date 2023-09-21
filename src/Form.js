import { Component } from "react";
import Car from "./Car";

export class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "red", "blue", "green", "black"],
    comment: ''
  };

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleColor = (e) => {
    this.setState({
      color: e.target.value,
    });
  };
  
  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmitForm=(e)=>{
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div>
        <Car color="red" height="200" />
        <h1>Commentaire</h1>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Pseudo</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlePseudo}
            />
          </div>

          <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {this.state.colors.map((c, k) => {
                return <option key={k} value={c}>{c}</option>;
              })}
            </select>
          </div>

          <div>
            <label>Commentaire</label>
            <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
          </div>

          <button>Valider</button>
        </form>
      </div>
    );
  }
}
