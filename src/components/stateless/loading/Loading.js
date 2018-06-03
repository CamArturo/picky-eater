import React, { Component } from 'react';
import loadingGif from '../../../assets/loader.gif'
import '../../container/cuisine/Cuisine.css';

class Loading extends Component {
  render () {
    return (
      <article className='loading-gif'>
        <img src={loadingGif} alt="Loading" />
      </article>
    );
  }
}

export default Loading;