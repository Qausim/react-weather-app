/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import HourlyItem from './HourlyItem';
import '../styles/hourly-details.css';

const HourlyDetails = (props) => {
  const { weatherData } = props;
  let hourlyList = '';

  if (weatherData) {
    const { hourly: { data: hourly } } = weatherData;
    hourlyList = hourly.map((el) => <HourlyItem data={ el } key={ el.time } />);
  }

  return (
    <div className="hourly-details-wrapper">
      { hourlyList }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({ ...state, ...ownProps });

export default connect(mapStateToProps)(HourlyDetails);
