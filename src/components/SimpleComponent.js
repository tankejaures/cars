import { Component } from "react";

class SimpleComponent extends Component {

    render() {
        console.log('%c render() du composant enfant Simple', 'color:blue;');
        return (
            <div>
                <p>je suis l'enfant</p>
            </div>
        )
    }
}

export default SimpleComponent;