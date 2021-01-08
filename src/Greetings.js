import React, { Component } from 'react'

class Greetings extends Component {
      

    render() {
        

        return (
            <div>
                <div>
                <h1>Hi {this.props.name}!</h1>
               <button className="greetingsBtn" onClick={this.props.handleClick}>Submit</button>
                </div>
               <div>
               <h1>{this.props.count}</h1>
                   <button onClick={this.props.incrementCount}>+</button>
               
                   <button onClick={this.props.decrementCount}>-</button>
               </div>
            
            </div>
        )
    }
}


export default Greetings;