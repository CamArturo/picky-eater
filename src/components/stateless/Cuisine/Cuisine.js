import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cuisine.css';
import CuisineCard from '../CuisineCard/CuisineCard';
import { getCuisines } from '../../../api/Api';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';



class Cuisine extends Component {
  constructor (props) {
    super(props);
  }

  ComponentDidMount () {
    this.storeCuisines(this.props.chosenCity.id)
  }

  storeCuisines = async (chosenCityID) => {
    console.log('fiedd')
    const cuisines = await getCuisines(chosenCityID);
    console.log(cuisines)
    // this.props.loadCuisines(cuisines.cuisines);
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
  cuisines: state.cuisines,
  chosenCity: state.chosenCity.id
});

export default withRouter(connect(mapStateToProps, null)(Cuisine));
