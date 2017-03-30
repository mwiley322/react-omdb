import React, { Component } from 'react';
import styles from '../styles/index.js';
import Search from './Search.js';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-light" style={styles.navBar}>
        <Search />
      </nav>
    );
  }
}

export default Navbar;
