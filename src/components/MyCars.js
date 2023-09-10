import { Component } from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";

export class MyCars extends Component {
  state = {
    cars: [
      { name: "Ford", color: "Green", year: 2010 },
      { name: "Mercedes", year: 2005 },
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
    let suffix = " ";

    if (age === 1) suffix += "an";
    else if (age > 1) suffix += "ans";

    return age + suffix;
  };

  render() {
    const { title, color } = this.props;
    const nowYear = new Date().getFullYear();

    return (
      <>
        <MyHeader myStyle={color}> {title} </MyHeader>

        <button onClick={this.addTenYear}> +10 ans </button>

        <table className="carsTable">
          <tr>
            <th>Marque</th>
            <th>Age</th>
            <th>Couleur</th>
          </tr>
          {this.state.cars.map(({ name, color, year }, k) => (
            <Car
              name={name}
              year={this.getAge(year, nowYear)}
              color={color}
              key={k}
            />
          ))}
        </table>
      </>
    );
  }
}
