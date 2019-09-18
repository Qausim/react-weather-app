import React from 'react';

import Logo from '../assets/Logo.png';
import '../styles/app-bar.css';

const AppBar = () => (
  <header className="app-bar">
    <div className="logo-wrapper">
      <img src={ Logo } alt="Weather peek" className="logo" />
    </div>
  </header>
);

export default AppBar;
