/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import '../styles/weather-details.css';
import weatherIcons from '../utils/weatherIcons';
import calculateInCelsius from '../utils/calculateInCelsius';


const WeatherDetails = (props) => {
  const { weatherData } = props;
  let currently;
  if (weatherData) currently = weatherData.currently;
  const template = currently
    ? (
      <div className="weather-details">
        <div className="icon-wrapper">
          <img src={ weatherIcons[currently.icon] } alt={ weatherIcons[currently.icon] }
            width="100" height="100" />
        </div>
        <div className="temperature-wrapper">
          <p>
            <span className="temperature">{ calculateInCelsius(currently.apparentTemperature) }</span>
            <span className="temperature-unit">&#8451;</span>
          </p>
        </div>
        <div className="summary-wrapper">
          <p className="summary">
            { currently.summary }
          </p>
          <p className="humidity">
            <span>Humidity:</span>
            <span>{ currently.humidity * 100 }</span>
          </p>
        </div>
      </div>
    )
    : (
      <div className="weather-details">
        <p>
          { props.error ? props.error : 'No data received yet' }
        </p>
      </div>
    );
  return template;
};

const mapStateToProps = (state, ownProps) => ({ ...state, ...ownProps });

export default connect(mapStateToProps)(WeatherDetails);
