import React, { Component } from 'react'

class ClassCounter2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevCount => {
            return {
                count: prevCount.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                Count :{this.state.count}
                <button onClick={this.incrementCount}>+</button>
            </div>
        )
    }
}

export default ClassCounter2