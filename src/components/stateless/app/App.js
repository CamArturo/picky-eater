import React, { Component } from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import LocationSearch from '../location/Location';
import { Restaurant } from '../restaurants/Restaurant';
import Cuisine from '../../container/cuisine/Cuisine';
import { Route } from 'react-router';
import './App.css';
import Restaurants from '../restaurants/Restaurant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/location" component={LocationSearch}/>
        <Route exact path="/cuisine" component={Cuisine}/>
        <Route exact path="/Restaurants" component={Restaurants}/>
      </div>
    );
  }
}

// TODO Redux architect - keep data flat and not duplicating
// TODO testing mapstate to props and for every container - test that it returns the object

export default App;
