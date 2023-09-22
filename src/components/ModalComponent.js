import { Component } from "react";
import { createPortal } from "react-dom";

class ModalComponent extends Component{
    constructor(props) {
      super(props)
    
      this.popupContainer = document.createElement('div');
    }

    componentDidMount(){
      document.body.appendChild(this.popupContainer);
    }

    componentWillUnmount(){
        document.body.removeChild(this.popupContainer);
    }

    render(){
        return createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt libero ad inventore, id non consectetur quas tenetur in porro, exercitationem nisi provident maxime voluptas nesciunt similique a. Placeat, qui dolorum.</p>

                    <button>Fermer</button>
                </div>
            </div>,
            this.popupContainer
        )
    }
}

export default ModalComponent;