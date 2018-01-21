import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do testApp</h1>
        </header>
        <ToDo />
      </div>
    );
  }
}

export default App;
