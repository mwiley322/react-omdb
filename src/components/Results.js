import React, { Component } from 'react';
import styles from '../styles/index.js';

class Results extends Component {
  render() {
    let {movies} = this.props;
    let results = movies.map( (movie, index) => {
      return (
        <div className='col-lg-12 col-md-12 col-xs-12 center-block' key={index} style={styles.movie}>
          <img
              style={styles.posterThumb}
              src={movie.Poster}
              alt={movie.Title} />
          <p style={styles.textOverflow}>{movie.Title}</p>
        </div>
      );
    });
    return (
      <div className='col-lg-12 col-md-12 col-xs-12 center-block' style={styles.movies}>
        {results}
      </div>
    );
  }
}

export default Results;
