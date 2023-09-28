import "./App.css";
import { Component } from "react";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false
      }
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />

          {/* <Route path="/tutorial" render={() => (
            this.state.underConst.Tutorials ? (<Redirect to="/" />) : (<Tutorials />)
          )} /> */}
          <Route strict path="/community" component={Community} />

          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
