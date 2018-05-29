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
    }
  }

  storeCities = async (userInput) => {
    const cities = await getCities(userInput);
    // console.log(cities.location_suggestions)
    //
    this.props.loadLocations(cities.location_suggestions)
    // loadLocations(cities.location_suggestions)
  };

  render () {
    return (
      <div>
        <section className="location-container-header">
          <h2>Where are you?</h2>
        </section>
        <section className="locations">
          <h3>Confirm your city</h3>
          {/*<form onClick={() => this.props.getCities(this.state.userInput)} className="login-form">*/}
          <form onClick={() => this.storeCities(this.state.userInput)} className="login-form">
            <input
              type="text"
              placeholder="Enter City"
              className="search-city-input"
              onChange={(event) => this.setState({userInput: event.target.value})}
            />
            <button type="button">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

LocationInput.propTypes = {
  getCities: PropTypes.func.isRequired
};

// const mapStateToProps = (state) => ({
//   locations: state.locations
// });

//
const mapDispatchToProps = (dispatch) => ({
  loadLocations: (cities) => dispatch(sendLocationsToStore(cities))
});

// Component
export default connect(null, mapDispatchToProps)(LocationInput);
// export default LocationInput;
