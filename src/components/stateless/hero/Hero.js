import React from 'react';
import { browserHistory } from 'react-router';
import { NavLink, Route, withRouter } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
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
};



export default withRouter((Hero));
