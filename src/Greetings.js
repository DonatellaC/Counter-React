import React, { Component } from 'react'

class Greetings extends Component {
    render() {
        return (
            <div>
               <h1>Hi {this.props.name}</h1>
            </div>
        )
    }
}

export default Greetings;