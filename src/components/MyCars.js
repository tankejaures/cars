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

    this.setState({
      updateState,
    });
  };

  getAge = (year, nowYear) => {
    const age = nowYear - year;

    return age + " an" + (age > 1 ? "s" : "");
  };

  render() {
    const { title, color } = this.props;
    const nowYear = new Date().getFullYear();

    return (
      <div>
        <MyHeader myStyle={color}> {title} </MyHeader>

        <button onClick={this.addTenYear}> +10 ans </button>

        {this.state.cars.map(({ name, color, year }, k) => (
          <Car
            name={name}
            year={this.getAge(year, nowYear)}
            color={color}
            key={k}
          />
        ))}
      </div>
    );
  }
}
