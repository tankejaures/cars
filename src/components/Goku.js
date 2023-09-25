import React, { Component } from 'react'
import gokuImg from '../goku.png';
import countHits from './CountHits';

export class Goku extends Component {

    state = {
        hits: 0
    }

    addOne = () => {
        this.setState(prevState => {
            return {
                hits: prevState.hits + 1
            }
        })
    }

    render() {
        const { name, addOneHit, hocState, life } = this.props,
            lifeStatus = life > 0,
            lifeValue = lifeStatus ? `${life} %` : (<span className='badge text-bg-danger'>Mort</span>);

        return (
            <div className='col'>
                <img height={350} src={gokuImg} alt='Vegeta' />
                <br />

                <button disabled={!lifeStatus} onClick={addOneHit} className={'btn btn-' + (lifeStatus ? 'success' : 'danger') + ' mb-3'}>
                    {lifeStatus ? name + ' Frappe' : 'Mort'}
                </button>

                <hr/>

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
                            <td>{lifeValue} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Goku, 20);