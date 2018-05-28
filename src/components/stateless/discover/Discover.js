import React from 'react';
import './Discover.css';
import location from '../../../assets/location-17-240.png';

const Discover = () => {
  return (
    <section className="discover-info">
      <h3>There is a right choice after all.</h3>
      <section className="infographics d-flex">
        <img src={location} alt="Location" />
        <img src={location} alt="Location" />
        <img src={location} alt="Location" />
      </section>
    </section>
  );
};

export default Discover;
