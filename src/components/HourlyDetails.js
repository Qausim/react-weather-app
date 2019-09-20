import React from 'react';

import HourlyItem from './HourlyItem';
import '../styles/hourly-details.css';

const HourlyDetails = () => {
  const hourly = new Array(14).fill(0).map((el, ind) => ind + 1);
  const hourlyList = [];
  hourly.forEach((el) => hourlyList.push(<HourlyItem key={ el } />));

  return (
    <div className="hourly-details-wrapper">
      { hourlyList }
    </div>
  );
};

export default HourlyDetails;
