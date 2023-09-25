import { Component } from "react";

const handleClicks = (WrappedComponent, status) => {
    class HandleClicks extends Component {

        state = {
            bg: ''
        }

        handleClick = () => {
            this.setState({
                bg: 'bg-' + (status ? status : 'success')
            })
        }

        render() {

            if (this.state.bg === 'bg-danger') {
                throw new Error();
            }
            return <WrappedComponent clickHandler={this.handleClick} bg={this.state.bg} {...this.props} />;
        }
    }

    return HandleClicks;
}



export default handleClicks;