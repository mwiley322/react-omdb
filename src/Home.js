import React, { Component } from 'react';
import Search from './Search.js';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>React Movie Search</h1>
        <Search />
      </div>
    );
  };
}

export default Home;
