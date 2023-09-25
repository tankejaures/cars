import React, { Component } from 'react'
import vegetaImg from '../vegeta.png';
import handleClicks from './handleClicks';

export class Vegeta extends Component {
    render() {
        const {clickHandler, bg} = this.props;
        return (
            <div className={`col ${bg}`}>
                <img onClick={clickHandler} height={350} src={vegetaImg} alt='Vegeta' />
            </div>
        )
    }
}

export default handleClicks(Vegeta);