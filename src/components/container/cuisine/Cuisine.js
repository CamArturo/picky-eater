import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../stateless/loading/Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCuisines } from '../../../api/getCuisines'

import { sendCuisinesToStore } from '../../../actions/cuisines';
import './Cuisine.css';

export class Cuisine extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.chosenCityID) {
      this.storeCuisines(this.props.chosenCityID);
    }
  }

  displayNoLocations = () => {
    return (
      <section className="no-locations">
        <p>No Locations Chosen</p>
      </section>
    );
  };

  storeCuisines = async (chosenCityID) => {
    const cuisines = await getCuisines(chosenCityID);
    this.props.loadCuisines(cuisines.cuisines);
  };

  displayCuisines = () => {
    return this.props.availableCuisines.map((cuisine, index) => (
      <button className="cuisine-btn" key={`key${index}`}>
        <h3>{cuisine.cuisine.cuisine_name}</h3>
      </button>
    ));
  };

  render () {
    return (
      <div>
        <section className="cuisine-header">
          <h2>What do you NOT want to eat?</h2>
        </section>
        <section className="cuisine-container">
          {
            Object.keys(this.props.chosenCity).length === 0 &&
            this.displayNoLocations()
          }
          {
            this.props.availableCuisines.length > 0 &&
              this.displayCuisines()
          }
          {
            Object.keys(this.props.chosenCity).length > 0 && this.props.availableCuisines.length === 0 &&
            <Loading/>
          }
        </section>
      </div>
    );
  }
}

Cuisine.propTypes = {
  getCuisines: PropTypes.func.isRequired,
  sendCuisinesToStore: PropTypes.func.isRequired,
  loadCuisines: PropTypes.func.isRequired,
  availableCuisines: PropTypes.array.isRequired,
  chosenCityID: PropTypes.number.isRequired,
  chosenCity: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  availableCuisines: state.availableCuisines,
  chosenCityID: state.chosenCity.id,
  chosenCity: state.chosenCity
});

const mapDispatchToProps = (dispatch) => ({
  loadCuisines: (cities) => dispatch(sendCuisinesToStore(cities))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cuisine));
