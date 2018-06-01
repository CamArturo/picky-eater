import React from 'react';
import PropTypes from 'prop-types';
import './Cuisine.css';
import CuisineCard from '../CuisineCard/CuisineCard';

const Cuisine = props => {
  return (
    <div>
      <section className="cuisine-container-header">
        <h2>What do you NOT want to eat?</h2>
      </section>
      <section className="cuisine-container">
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />
        <CuisineCard />

      </section>
    </div>
  );
};

Cuisine.propTypes = {};

export default Cuisine;
