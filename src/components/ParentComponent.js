import React, { Component } from 'react'
import PureComp from './PureComponent';
import SimpleComponent from './SimpleComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Spiderman"
        }
    }

    /* static getDerivedStateFromProps(props, state) {
        console.log("%c getDerivedStateFromProps lancée ", "color: red;background:yellow;font-size: 15px;");

        console.log(props, state)
        return null;
    } */

    /*  forceChange = () => {
         this.forceUpdate(() => {
             console.log("je force le changement")
         })
     } */

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
                <SimpleComponent name={this.state.name} />
                <PureComp name={this.state.name} />

                <button onClick={this.changeToBatman}>Changer en Batman</button>
            </div>
        )
    }
}

export default ParentComponent