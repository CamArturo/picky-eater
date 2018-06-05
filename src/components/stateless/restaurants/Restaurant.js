import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Restaurants.css'

export class Restaurants extends Component {

  displayRestaurants = () => {
    return this.props.restaurants.map((restaurant) => (
      <article>
        <h2>{restaurant}</h2>
      </article>
    ));
  };

  render () {
    return (
      <div>
        <section className="restaurant-header">
          <h2>These are you results</h2>
        </section>
        <section className="restaurant-container">
          {
            this.props.restaurants.length > 0 &&
            this.displayRestaurants()
          }
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

Restaurants.propTypes = {

};

export default connect(mapStateToProps, null)(Restaurants);
