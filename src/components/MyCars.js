import { Component } from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";

export class MyCars extends Component {
  state = {
    cars: [
      { name: "Ford", color: "Green", year: 2010 },
      { name: "Mercedes", color: "Black", year: 2005 },
      { name: "Nissan", color: "White", year: 2023 },
    ],
  };

  addTenYear = () => {
    const updateState = this.state.cars.map((c) => {
      return (c.year -= 10);
    });
    console.log(updateState);
    this.setState({
      updateState,
    });
  };

  render() {
    const { title, color } = this.props;
    const year = new Date().getFullYear();

    return (
      <div>
        <MyHeader myStyle={color}> {title} </MyHeader>

        <button onClick={this.addTenYear}> +10 ans </button>

        {this.state.cars.map((c, k) => (
          <Car name={c.name} year={year - c.year + " ans"} color={c.color} key={k}/>
        ))}
      </div>
    );
  }
}
