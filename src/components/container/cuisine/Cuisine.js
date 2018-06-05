import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../stateless/loading/Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCuisines } from '../../../api/getCuisines';

import { sendCuisinesToStore } from '../../../actions/cuisines';
import './Cuisine.css';

export class Cuisine extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
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
//
// {
//   cuisine: {
//     cuisine_id: 1,
//     cuisine_name: 'American'
//   }
// }

  displayCuisines = () => {
    return this.props.availableCuisines.map((cuisine, index) => (
      <button
        onClick={(event) => this.filterAvailableCuisines(event.target.name)}
        className="cuisine-btn"
        key={`key${index}`}
        name={cuisine.cuisine.cuisine_name}
      >
        <h3>{cuisine.cuisine.cuisine_name}</h3>
      </button>
    ));
  };

  filterAvailableCuisines = (name) => {
    const availableCuisines = this.props.availableCuisines;

    const remainingCuisines = availableCuisines.filter((cuisineObj, index) => {
      return cuisineObj.cuisine.cuisine_name !== name;
    });
    this.props.loadCuisines(remainingCuisines);
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
            <Loading />
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

export const mapStateToProps = (state) => ({
  availableCuisines: state.availableCuisines,
  chosenCityID: state.chosenCity.id,
  chosenCity: state.chosenCity
});

export const mapDispatchToProps = (dispatch) => ({
  loadCuisines: (cities) => dispatch(sendCuisinesToStore(cities))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cuisine));
