import React, { Component } from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import LocationSearch from '../location/Location';
import { Route } from 'react-router';
import Cuisine from '../../container/cuisine/Cuisine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/location" component={LocationSearch}/>
        <Route exact path="/cuisine" component={Cuisine}/>
      </div>
    );
  }
}

// TODO Redux architect - keep data flat and not duplicating
// TODO testing mapstate to props and for every container - test that it returns the object

export default App;
