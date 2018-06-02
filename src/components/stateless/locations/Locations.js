import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChosenCity } from '../../../actions/chosenCity';

export class Locations extends Component {

  displayLocations = () => {
    if (this.props.locations.length > 0) {
      return this.props.locations.map((location, index) => (
        <button key={`key${index}`} onClick={() => this.props.storeChosenCity(location.name)}>{location.name}</button>
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

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export const mapDispatchToProps = (dispatch) => ({
  storeChosenCity: (chosenCity) => dispatch(addChosenCity(chosenCity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);