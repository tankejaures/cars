import React, { Component } from 'react'
import gokuImg from '../goku.png';
import handleClicks from './handleClicks';

export class Goku extends Component {
    render() {
        const {clickHandler, bg} = this.props;
        return (
            <div className={`col ${bg}`}>
                <img onClick={clickHandler} height={350} src={gokuImg} alt='Goku' />
            </div>
        )
    }
}

export default handleClicks(Goku);