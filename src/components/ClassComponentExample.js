import React, { Component } from 'react'

export default class ClassComponentExample extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('Component did mount')
    }

    componentDidUpdate() {
        console.log('Component did update')
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    render() {
        return (
            <div>
                <h1>Class Component Example</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        )
    }
}
