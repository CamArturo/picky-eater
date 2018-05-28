import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Hero from '../hero/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
      </div>
    );
  }
}

// TODO Redux architect - keep data flat and not duplicating
// TODO testing mapstate to props and for every container - test that it returns the object

export default App;
