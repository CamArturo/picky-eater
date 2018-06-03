import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCities } from '../../../api/Api';
import { sendLocationsToStore } from '../../../actions/loadLocations';
import { connect } from 'react-redux';

class LocationInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  storeCities = async (userInput) => {
    const cities = await getCities(userInput);
    this.props.loadLocations(cities.location_suggestions);
  };

  render () {
    return (
      <div>
        <section className="location-container-header">
          <h2>Where are you?</h2>
        </section>
        <section className="locations">
          <h3>Confirm your city</h3>
          <form className="login-form" onSubmit={(event) => {
            event.preventDefault();
            this.storeCities(this.state.userInput)
          }}>
            <input
              type="text"
              placeholder="Enter City"
              className="search-city-input"
              onChange={(event) => this.setState({userInput: event.target.value})}
            />
            <button onClick={() => this.storeCities(this.state.userInput)} type="button">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

LocationInput.propTypes = {
  getCities: PropTypes.func.isRequired,
  loadLocations: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadLocations: (cities) => dispatch(sendLocationsToStore(cities))
});

export default connect(null, mapDispatchToProps)(LocationInput);