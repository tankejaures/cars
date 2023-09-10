import { Component } from "react";
import Car from "./Cars";
import { Wrapper } from "./Wrapper";
import MyHeader from "./MyHeader";

export class MyCars extends Component {
  state = {
    cars: [
      { name: "Ford", color: "Green" },
      { name: "Mercedes", color: "Black" },
      { name: "Nissan", color: "White" },
    ],
  };

  noCopy = () => {
    alert("Merci de ne pas copier ce texte");
  };

  addStyle = (e) => {
    if (e.target.classList.contains("styled"))
      e.target.classList.remove("styled");
    else e.target.classList.add("styled");
  };

  render() {
    const { title, color } = this.props;

    return (
      <div>
        {/* <MyHeader myStyle={color}> {title} </MyHeader> */}

        <h1 onMouseLeave={this.addStyle} onMouseOver={this.addStyle}>{title}</h1>
        <p onCopy={this.noCopy}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {this.state.cars.map((c, k) => (
          <Car color={c.color} key={k}>
            {c.name}
          </Car>
        ))}
      </div>
    );
  }
}
