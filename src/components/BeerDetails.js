import React, { Component } from 'react';

class Beerdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.location.state.beerselect

        }

    };
    render() {
        let select = this.state.data;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{select.id}</td>
                            <td>{select.beername}</td>
                            <td>{select.type}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Beerdetails;
