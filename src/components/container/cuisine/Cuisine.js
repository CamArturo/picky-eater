import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../stateless/loading/Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { getCuisines } from '../../../api/getCuisines';
import { getRestaurants } from '../../../api/getRestaurants';
import { sendCuisinesToStore } from '../../../actions/cuisines';
import './Cuisine.css';
import { sendRestaurantsToStore } from '../../../actions/loadRestaurants';

export class Cuisine extends Component {
  // constructor (props) {
  //   super(props);
  // }

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

  storeRestaurants = async () => {
    const cuisineIDs = this.props.availableCuisines.map((cuisine) => {
      return cuisine.cuisine.cuisine_id;
    });
    const cityID = this.props.chosenCity.id;
    const restaurants = await getRestaurants(cityID, cuisineIDs);
    const restaurantNames = restaurants.restaurants.map((restaurant) => {
      return restaurant.restaurant.name;
    });
    this.props.loadRestaurants(restaurantNames);
  };

  displayCuisines = () => {
    return this.props.availableCuisines.map((cuisine, index) => (
      <button
        onClick={(event) => this.filterAvailableCuisines(event.target.name)}
        className="cuisine-btn"
        key={`key${index}`}
        name={cuisine.cuisine.cuisine_name}
        title="Click to Remove"
      >
        <h3>{cuisine.cuisine.cuisine_name}</h3>
      </button>
    ));
  };

  filterAvailableCuisines = (name) => {
    const availableCuisines = this.props.availableCuisines;

    const remainingCuisines = availableCuisines.filter((cuisineObj) => {
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
          { this.props.availableCuisines.length > 0 &&
            <div className="cuisine-info">
              <p>Click to Remove the cuisines you do not want</p>
              <section className="return-restaurants-container">
                <NavLink to="/restaurants" key={`restaurant-nav`}>
                  <button
                    onClick={() => this.storeRestaurants()}
                    className='return-restaurants'>Show me these Restaurants
                  </button>
                </NavLink>
              </section>
            </div>
          }
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
  loadCuisines: (cities) => dispatch(sendCuisinesToStore(cities)),
  loadRestaurants: (restaurants) => dispatch(sendRestaurantsToStore(restaurants))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cuisine));
