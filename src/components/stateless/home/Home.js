import React from 'react';
import './Home.css';
import smiley from '../../../assets/smiley.png';
import map from '../../../assets/map.png';
import hungry from '../../../assets/hungry.png';
import Hero from '../hero/Hero';
import food from '../../../assets/food-drink.png';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <h2 className="discover-tagline">When nothing sounds good, let us help you find your perfect meal.</h2>
      <section className="discover-info">
        <section className="infographics d-flex">
          <div className="icon-container">
            <img src={hungry} alt="Location" />
            <p>Hungry but you can't put your finger on what you want?</p>
          </div>
          <div className="icon-container">
          <img src={map} alt="Location" />
            <p>Sort the restaurants in your area by process of elimination.</p>
          </div>
          <div className="icon-container">
          <img src={food} alt="Location" />
            <p>Discover what you been craving.</p>
          </div>
          <div className="icon-container">
          <img src={smiley} alt="Location" />
            <p>Come back next time you're hungry!</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
