import React from 'react';
import { connect } from 'react-redux';

import '../styles/loading-indicator.css';


const LoadingIndicator = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showLoader } = props;
  return (
    <div className={ `loading-indicator-wrapper ${showLoader ? '' : 'hide'}` }>
      <p>Loading</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showLoader } = state;
  return { showLoader };
};

export default connect(mapStateToProps)(LoadingIndicator);
