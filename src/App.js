// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainView} from './components/mainView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <MainView/>
        </div>
      </div>
    );
  }
}

export default App;
