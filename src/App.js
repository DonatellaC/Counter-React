import React, { Component } from 'react';
import Greetings from './Greetings';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
  }
 
  incrementCount= () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount= () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleClick() {
    alert("Hello!")
}

  render() {
    const name = "Montse";
   

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1  className="App-title">
          Welcome to React
        </h1>
      </header>

      <Greetings 
           name={name}
           incrementCount={this.incrementCount}
           decrementCount={this.decrementCount}
           handleClick={this.handleClick}
           count={this.state.count}
    

      />
      
    </div>
  );
}
}

export default App;
