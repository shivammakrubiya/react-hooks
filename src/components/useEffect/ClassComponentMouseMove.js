import React, { Component } from 'react'

class ClassComponentMouseMove extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMouseEvent = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logMouseEvent)
    }

    render() {
        return (
            <div>X - {this.state.x} Y - {this.state.y}</div>
        )
    }
}

export default ClassComponentMouseMove