import React from 'react';

import '../styles/search-bar.css';

const SearchBar = () => (
  <div className="search-bar">
    <form>
      <input type="text" className="search-box"
        placeholder="Search..." />
      <input type="submit" value="search"
        className="search-button titlecase text-white" />
    </form>
  </div>
);

export default SearchBar;
