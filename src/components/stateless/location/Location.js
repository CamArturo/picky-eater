import React from 'react';
import './Location.css';
import LocationInput from '../locationInput/LocationInput';
import Locations from '../locations/Locations';
import { getCities } from '../../../api/Api';

const Location = () => {
  return (
    <section className="location-container">
      <LocationInput/>
      <Locations />
    </section>
  );
};

export default Location;
