import React, { Component } from 'react'
import freezaImg from '../freeza.png';
import handleClicks from './handleClicks';

export class Freeza extends Component {
    render() {
        const {clickHandler, bg} = this.props;
        return (
            <div className={`col ${bg}`}>
                <img onClick={clickHandler} height={350} src={freezaImg} alt='Freeza' />
            </div>
        )
    }
}

export default handleClicks(Freeza, 'danger');