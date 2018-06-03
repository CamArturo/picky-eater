import React from 'react';
import './Location.css';
import LocationInput from '../../container/locationInput/LocationInput';
import Locations from '../../container/locations/Locations';

const Location = () => {
  return (
    <section className="location-container">
      <LocationInput/>
      <Locations />
    </section>
  );
};

export default Location;
