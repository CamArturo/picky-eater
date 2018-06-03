import React, { Component } from 'react';
import loadingGif from '../../../assets/loader.gif'
import PropTypes from 'prop-types';
import '../Cuisine/Cuisine.css';

class Loading extends Component {
  render () {
    return (
      <article className='loading-gif'>
        <img src={loadingGif} alt="" />
      </article>
    );
  }
}

Loading.propTypes = {};

export default Loading;