import React, { Component } from 'react';
import Greetings from './Greetings';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

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

      <Greetings name={name}/>
    </div>
  );
}
}

export default App;
