import React from 'react';

import '../styles/app.css';
import BigWeatherPic from '../assets/weather-big.jpeg';
import SmallWeatherPic from '../assets/weather-small.jpeg';
import SearchBar from './SearchBar';


const App = () => (
  <div className="base">
    <img src={ BigWeatherPic } alt="Big weather background" className="big-pic background" />
    <img src={ SmallWeatherPic } alt="Big weather background" className="small-pic background" />
    <div className="background" />
    <SearchBar />
  </div>
);

export default App;
