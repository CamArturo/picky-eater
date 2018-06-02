import React, { Component } from 'react';
import '../Cuisine/Cuisine.css';
import PropTypes from 'prop-types';

class CuisineCard extends Component {
  render () {
    return (
      <article className='cuisine-card'>
        <h3>Afghani</h3>
      </article>
    );
  }
}

CuisineCard.propTypes = {};

export default CuisineCard;
