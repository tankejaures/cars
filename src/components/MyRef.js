import React, { Component, createRef } from 'react'

export default class MyRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
        this.myInput = createRef();
    }

    update = (ev) => {
        this.setState({
            value: ev.target.value
        });
    }

    addFocus=()=>{
        this.myInput.current.focus();  
    }

    render() {
        return (
            <div>
                <input ref={this.myInput} type="text" />
            </div>
        )
    }
}
