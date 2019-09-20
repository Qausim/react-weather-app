import React from 'react';

import '../styles/app.css';
import BigWeatherPic from '../assets/weather-big.jpeg';
import SmallWeatherPic from '../assets/weather-small.jpeg';
import SearchBar from './SearchBar';
import AppBar from './AppBar';
import WeatherDetails from './WeatherDetails';
import Location from './Location';
import HourlyDetails from './HourlyDetails';


const App = () => (
  <div className="base">
    <img src={ BigWeatherPic } alt="Big weather background" className="big-pic background" />
    <img src={ SmallWeatherPic } alt="Big weather background" className="small-pic background" />
    <div className="background" />
    <AppBar />
    <SearchBar />
    <Location />
    <WeatherDetails />
    <HourlyDetails />
  </div>
);

export default App;
