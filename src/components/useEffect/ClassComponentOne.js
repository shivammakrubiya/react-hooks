import React, { Component } from 'react'

class ClassComponentOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`
    }

    componentDidUpdate(preProps, prevState) {
        // Conditionally run Effect
        if (prevState.count !== this.state.count) {
            console.log("Updating Document Title");
            document.title = `Clicked ${this.state.count} Times`
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clicked {this.state.count} Times
                </button>
            </div>
        )
    }
}

export default ClassComponentOne