/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/search-bar.css';
import setLocationAndWeatherData from '../actions/setLocationAndWeatherData';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { location: '' };
  }

  handleChange = ({ target }) => this.setState({ location: target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { location } = this.state;
    // the second argument clears the state of this component, and by extension the
    // input field
    this.props.setLocationAndWeatherData(location, () => this.setState({ location: '' }));
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" className="search-box"
            placeholder="Search..." onChange={ this.handleChange }
            required minLength="3" pattern="[a-z-A-Z,\s]{3,}"
            value={ this.state.location } />
          <input type="submit" value="search"
            className="search-button titlecase text-white" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...ownProps });

const mapDispatchToProps = (dispatch) => ({
  setLocationAndWeatherData(location, clearLocation) {
    dispatch(setLocationAndWeatherData(location, clearLocation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
