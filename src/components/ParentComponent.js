import React, { Component } from 'react'
import FunctionComp from './FunctionComp';
import PureComp from './PureComponent';
import SimpleComponent from './SimpleComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Spiderman"
        }
    }

    changeToBatman = () => {
        this.setState({
            name: 'Batman'
        });
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log("shouldComponentUpdate() décide true par défaut");
        /* console.log(this.state.name);
        console.log(nextState);

        if (this.state.name !== nextState.name)
            return true */

        return true;
    }

    render() {
        console.log("%c Render() du composant parent", 'color:red;')
        return (
            <div>
                <p><span className="red"> ParentComponent : </span>{this.state.name}</p>

                <SimpleComponent name={this.state.name} />

                <PureComp name={this.state.name} />

                <FunctionComp name={this.state.name} />

                <button onClick={this.changeToBatman}>Changer en Batman</button>
            </div>
        )
    }
}

export default ParentComponent