import React from 'react';
import './Home.css';
import location from '../../../assets/location-17-240.png';
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <section className="discover-info">
        <h3>There is a right choice after all.</h3>
        <section className="infographics d-flex">
          <img src={location} alt="Location" />
          <img src={location} alt="Location" />
          <img src={location} alt="Location" />
        </section>
      </section>
    </div>
  );
};

export default Home;
