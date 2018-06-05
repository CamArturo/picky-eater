import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRestaurants } from '../../../api/getCuisines';
import './Restaurants.css'

export class Restaurants extends Component {
  render () {
    return (
      <section className="restaurant-container">
        <p>this is the restaurant container</p>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

Restaurants.propTypes = {

};

export default connect(mapStateToProps, null)(Restaurants);
