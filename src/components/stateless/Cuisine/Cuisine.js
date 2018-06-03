import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCuisines } from '../../../api/Api';
import { sendCuisinesToStore } from '../../../actions/cuisines';
import './Cuisine.css';

class Cuisine extends Component {
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
            this.props.chosenCity &&
            this.displayNoLocations()
          }
          {
            this.props.availableCuisines.length > 0 ?
              this.displayCuisines() : <Loading/>
          }
        </section>
      </div>
    );
  }
}

// Cuisine.propTypes = {};

const mapStateToProps = (state) => ({
  availableCuisines: state.availableCuisines,
  chosenCityID: state.chosenCity.id
});

const mapDispatchToProps = (dispatch) => ({
  loadCuisines: (cities) => dispatch(sendCuisinesToStore(cities))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cuisine));
