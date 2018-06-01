import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Discover from '../discover/Discover';
import locationSearch from '../location/Location';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/location" component={locationSearch}/>
        <Route exact path="/" component={Hero}/>
        <Route exact path="/" component={Discover}/>
      </div>
    );
  }
}

// TODO Redux architect - keep data flat and not duplicating
// TODO testing mapstate to props and for every container - test that it returns the object

export default App;
