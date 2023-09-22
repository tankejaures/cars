import React, { Component, createRef } from 'react'

export default class MyRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.myTitle = createRef();
        this.myInput = createRef();

        console.log(this.myTitle, this.myInput);
    }

    componentDidMount(){
        this.myInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState){
        this.myTitle.current.style.color = 'red';
    }

    update = (ev) => {
        this.setState({
            value: ev.target.value
        });
    }

    handleClick=()=>{
        console.log(this.myInput.current.value);
        
    }

    render() {
        return (
            <div>
                <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
                {/* <input ref={this.myInput} type="text" value={this.state.value} onChange={this.update} /> */}
                <input ref={this.myInput} type="text" />
                <button onClick={this.handleClick}>Valider</button>
            </div>
        )
    }
}
