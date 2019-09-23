/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/search-bar.css';
import setWeatherData from '../actions/setWeatherData';
import setLocation from '../actions/setLocation';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { location: '' };
  }

  handleChange = ({ target }) => this.setState({ location: target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { location } = this.state;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=d37f2c2cdcf64ab9a7e1f4c5536e8745`)
      .then((res) => res.json())
      .then(({ results: [data] }) => {
        const { formatted, geometry: { lat, lng } } = data;
        const cleaned = formatted.replace(/[\s]*\d+/g, '');
        this.props.setLocation(cleaned);
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a092f224abf5f47ae470dce7d24bebea/${lat},${lng}`);
      })
      .then((res) => res.json())
      .then(({ currently, hourly }) => {
        this.props.setWeatherData({ currently, hourly });
        this.setState({ location: '' });
      })
      .catch((error) => console.log(error));
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

const mapStateToProps = (state, ownProps) => ({ ...state, ...ownProps });

const mapDispatchToProps = (dispatch) => ({
  setWeatherData(weatherData) { dispatch(setWeatherData(weatherData)); },
  setLocation(location) { dispatch(setLocation(location)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
