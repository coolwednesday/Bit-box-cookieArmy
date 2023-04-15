import React, { Component } from 'react'

import { Doc } from './Doc';
import PropTypes from 'prop-types'
import './doctor.css'

export class Doctors extends Component {
    static defaultProps = {

    }
    static propTypes = {
        city: PropTypes.string,
        country: PropTypes.string

    }
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

    }
    async componentDidMount() {
        let url = `https://geocode.search.hereapi.com/v1/geocode?q=${this.props.city}+${this.props.country}&apiKey=jhecD3unwS7DBKIY1BfWswycX4g3do8LlTPTumzCc7k`;
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({ items: parseddata.items, })
        console.log(this.state.items)

    }
    render() {
        return (
            <div>
                <div className='row'>
                    {this.state.items && this.state.items.map((element) => {
                        return <div className='col-md-6'>
                            <Doc lng={element.position.lng} lat={element.position.lat} />
                        </div>

                    })}
                </div>
            </div>

        )
    }
}
export default Doctors
