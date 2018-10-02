import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="sidebar">
          <img src={logo} alt="markdown previewer logo" className='logo' />
          <h1 className="brand">
            Markdown previewer
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
