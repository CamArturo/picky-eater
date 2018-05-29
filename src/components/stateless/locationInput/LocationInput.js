import React from 'react';

const LocationInput = () => {
  return (
    <div>
      <section className="location-container-header">
        <h2>Where are you?</h2>
      </section>
      <section className="locations">
        <h3>Confirm your city</h3>
        <form className="login-form">
          <input type="text" placeholder="Enter City" />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default LocationInput;
