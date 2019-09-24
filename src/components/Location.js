import React from 'react';
import { connect } from 'react-redux';

import '../styles/location.css';


const Location = (props) => {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const locationTemplate = (
    <p className="location">
      { location }
    </p>
  );
  const noLocationTemplate = <p className="nolocation">Enter a search location up above</p>;
  return (
    <div className="location-wrapper">
      { location ? locationTemplate : noLocationTemplate }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({ ...state, ...ownProps });

export default connect(mapStateToProps)(Location);
