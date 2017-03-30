import React, { Component } from 'react';
import Search from './Search.js';
import styles from '../styles/index.js';
import Navbar from './Navbar.js';
// import SearchContainer from '../containers/SearchContainer.js';

class Home extends Component {
  render() {
    return (
      <div style={styles.transparentBg}>
        <h1>OMDB React Movie Search</h1>
        <Navbar />
        <div style={styles.space}>
        </div>
      </div>
    );
  };
}

export default Home;
