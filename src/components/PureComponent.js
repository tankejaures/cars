import { PureComponent } from "react";

class PureComp extends PureComponent {

    render() {
        console.log('%c render() du PureComposant enfant Simple', 'color:green;');
        return (
            <div>
                <p>
                    <span className="green">PureComponent : </span>{this.props.name}
                </p>
            </div>
        )
    }
}

export default PureComp;