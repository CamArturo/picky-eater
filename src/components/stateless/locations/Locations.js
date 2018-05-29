import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Locations extends Component {

  displayLocations = () => {
    if (this.props.locations.length > 0) {
      return this.props.locations.map((location, index) => (
        <button key={`key${index}`}>{location.name}</button>
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



const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps, null)(Locations);