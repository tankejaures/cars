import { Component } from "react";

class ChildComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        console.log(`je suis dans le constructeur() Enfant`);
    }

    componentDidMount() {
        console.log(`je suis dans le componentDidMount() Enfant`);
    }

    render() {
        console.log(`je suis dans le render() enfant`);
        return (
            <div>
                {console.log(`Mise à jour du DOM dans composant Enfant`)}
                <p>je suis l'enfant</p>
            </div>
        )
    }
}

export default ChildComponent;