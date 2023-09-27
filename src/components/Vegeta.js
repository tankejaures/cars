import React, { Component } from 'react'
import vegetaImg from '../vegeta.png';
import countHits from './CountHits';

export class Vegeta extends Component {
    state={
        saiyan: true
    }

    render() {
        const { name, addOneHit, hocState, life } = this.props,
            lifeStatus = life > 0,
            lifeValue = lifeStatus ? `${life} %` : (<span className='badge text-bg-danger'>Mort</span>);

        return (
            <div className='col'>
                <img height={350} src={vegetaImg} alt='Vegeta' />
                <br />

                <button disabled={!lifeStatus} onClick={addOneHit} className={'btn btn-' + (lifeStatus ? 'success' : 'danger') + ' mb-3'}>
                    {lifeStatus ? name(this.state.saiyan) + ' Frappe' : 'Mort'}
                </button>

                <hr />

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Coups</th>
                            <th scope='col'>Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            <td>{lifeValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);