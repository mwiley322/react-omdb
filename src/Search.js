import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input id='searchForm' type='text' name='search' placeholder='Search...' />
      </form>
    );
  }
}

export default Search;
