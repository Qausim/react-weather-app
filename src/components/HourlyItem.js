/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import '../styles/hourly-item.css';
import weatherIcons from '../utils/weatherIcons';
import calculateInCelsius from '../utils/calculateInCelsius';

const HourlyItem = (props) => {
  const { data } = props;
  return data
    ? (
      <div className="hourly-item-wrapper">
        <p className="hour">{ new Date(data.time * 1000).toTimeString().slice(0, 5) }</p>
        <div className="icon-wrapper">
          <img src={ weatherIcons[data.icon] } alt={ data.icon }
            width="60" height="60" />
        </div>

        <div className="hourly-weather-details">
          <p className="temperature">
            <span className="value">{ calculateInCelsius(data.apparentTemperature) }</span>
            <span className="unit">&#8451;</span>
          </p>

          <p className="humidity">{ data.humidity * 100 }</p>
        </div>
      </div>
    )
    : '';
};

const mapStateToProps = (state, ownProps) => ({ ...state, ...ownProps });

export default connect(mapStateToProps)(HourlyItem);
