import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    { id: 1, beername: 'KF', type: 'Lager' },
                    { id: 2, beername: 'corona', type: 'Lager' },
                    { id: 3, beername: 'Hayward', type: 'Lager' },
                    { id: 4, beername: 'bira', type: 'Lager' },
                    { id: 5, beername: 'beck ice', type: 'Lager' },



                ]
        }

    };
    render() {

        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((item) => (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.beername}</td>
                                <td>{item.type} &nbsp;<Link to={{ pathname: '/beerdetails', state: { beerselect: item } }}>>>></Link> </td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
