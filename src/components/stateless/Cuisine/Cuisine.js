import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cuisine.css';
import CuisineCard from '../CuisineCard/CuisineCard';
import { getCuisines } from '../../../api/Api';
import { connect } from 'react-redux';


class Cuisine extends Component {
  constructor (props) {
    super(props);
  }

  ComponentDidMount () {
    this.storeCuisines()
  }

  storeCuisines = async (chosenCity) => {
    const cuisines = await getCuisines(chosenCity);
    this.props.loadCuisines(cuisines.cuisines);
  };

  render () {
    return (
      <div>
        <section className="cuisine-header">
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
  }
}

// Cuisine.propTypes = {};

const mapStateToProps = (state) => ({
  cuisines: state.cuisines
});

export default connect(mapStateToProps, null)(Cuisine);
