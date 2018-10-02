import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
          <img src={logo} alt="markdown previewer logo" className='logo' />
        </header>
      </div>
    );
  }
}

export default App;
