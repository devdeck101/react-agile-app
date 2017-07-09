import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React & DevDeck101</h2>
        </div>
        <p className="App-intro">
          Aqui está o nosso primeiro componente. Não se esqueça de se inscrever no canal.
        </p>
      </div>
    );
  }
}

export default App;
