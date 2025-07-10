import React, { Component } from 'react'

export default class Temp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handlePrev = async () => {

        await this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count);
    }
    handleNext = async () => {

        await this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    render() {
        console.log("render")
        return (
            <div className="d-flex justify-content-between">
                <button type="button" onClick={this.handlePrev} className="btn btn-dark">Prev &larr;</button>
                <button type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
            </div>
        )
    }
}
