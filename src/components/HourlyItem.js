import React from 'react';

import Rainy from '../assets/rain-icon.svg';
import '../styles/hourly-item.css';

const HourlyItem = () => (
  <div className="hourly-item-wrapper">
    <p className="hour">16:00</p>
    <div className="icon-wrapper">
      <img src={ Rainy } alt="Rainy"
        width="60" height="60" />
    </div>

    <div className="hourly-weather-details">
      <p className="temperature">
        <span className="value">33</span>
        <span className="unit">&#8451;</span>
      </p>

      <p className="humidity">83%</p>
    </div>
  </div>
);

export default HourlyItem;
