import React from 'react';

import '../styles/weather-details.css';
import RainIcon from '../assets/rain-icon.svg';


const WeatherDetails = () => (
  <div className="weather-details">
    <div className="icon-wrapper">
      <img src={ RainIcon } alt="Rain icon"
        width="100" height="100" />
    </div>
    <div className="temperature-wrapper">
      <p>
        <span className="temperature">33</span>
        <span className="temperature-unit">&#8451;</span>
      </p>
    </div>
    <div className="summary-wrapper">
      <p className="summary">
        <span>Summary:</span>
        <span> Cloudy and rainy</span>
      </p>
      <p className="humidity">
        <span>Humidity:</span>
        <span> 78%</span>
      </p>
    </div>
  </div>
);

export default WeatherDetails;
