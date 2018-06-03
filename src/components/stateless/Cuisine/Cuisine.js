import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cuisine.css';
import CuisineCard from '../CuisineCard/CuisineCard';
import { getCuisines } from '../../../api/Api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { sendCuisinesToStore } from '../../../actions/cuisines';

class Cuisine extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.storeCuisines(this.props.chosenCityID);
  }

  storeCuisines = async (chosenCityID) => {
    const cuisines = await getCuisines(chosenCityID);
    this.props.loadCuisines(cuisines);
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
  chosenCityID: state.chosenCity.id
});

const mapDispatchToProps = (dispatch) => ({
  loadCuisines: (cities) => dispatch(sendCuisinesToStore(cities))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cuisine));
