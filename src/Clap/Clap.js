import React, { Component } from 'react'


export default class Clap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increaseCount = this.increaseCount.bind(this)
    }

    increaseCount() {
        this.setState({count: this.state.count++})
    }

    render() {
        const { count } = this.state
        return (
            <div>  
                <button name="increaseCount" onClick={this.increaseCount}>Count up!!</button>
                <button>Coutn down!!</button>
                <p>{count}</p>
            </div>
        )
    }
}