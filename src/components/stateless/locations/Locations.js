import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom'
import { addChosenCity } from '../../../actions/chosenCity';

export class Locations extends Component {

  displayLocations = () => {
    if (this.props.locations.length > 0) {
      return this.props.locations.map((location, index) => (
        <NavLink to="/cuisine" key={`nav${index}`}>
          <button className="location-btn" key={`key${index}`}
                  onClick={() => this.props.storeChosenCity(location.name, location.id)}>{location.name}</button>
        </NavLink>
      ));
    }
  };

  render () {
    return (
      <section className="locations-container">
        {this.displayLocations()}
      </section>
    );
  }
}


Locations.propTypes = {
  storeChosenCity: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export const mapDispatchToProps = (dispatch) => ({
  storeChosenCity: (chosenCity, id) => dispatch(addChosenCity(chosenCity, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Locations));