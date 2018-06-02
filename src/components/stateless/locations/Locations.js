import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChosenCity } from '../../../actions/chosenCity';

export class Locations extends Component {

  displayLocations = () => {
    if (this.props.locations.length > 0) {
      return this.props.locations.map((location, index) => (
        <button className="location-btn" key={`key${index}`} onClick={() => this.props.storeChosenCity(location.name, location.id)}>{location.name}</button>
      ));
    }
  };

  render () {
    return (
      <section className="locations-container">
        {this.displayLocations()}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export const mapDispatchToProps = (dispatch) => ({
  storeChosenCity: (chosenCity, id) => dispatch(addChosenCity(chosenCity, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);