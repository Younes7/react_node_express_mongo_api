import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Players from './components/players/players'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Olympique de Marseille</h1>
        </header>
        <Players />
      </div>
    );
  }
}

export default App;
