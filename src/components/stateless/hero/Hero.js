import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import './Hero.css';

export const Hero = () => (
  <section className="hero-container">
    <section className="inner">
      <h2>Find it. Finally.</h2>
      <NavLink to="/location">
        <button>Restaurant Match</button>
      </NavLink>
    </section>
    <Route exact path='/location' component={Location} />
  </section>
);

export default withRouter(Hero);