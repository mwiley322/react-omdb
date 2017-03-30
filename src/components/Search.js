import React, { Component } from 'react';
import {queryOmdb} from './apiCall.js';
import Results from './Results.js';

class Search extends Component {
  constructor (props) {
    super (props)
    this.state = {
      query: '',
      movies: []
    }
  }

  //this will be the function updating our query state
  updateSearchQuery() {
    let searchQuery = this.refs.mySearch.value;
    this.setState({
      query: searchQuery
    });
  }

//this function takes care of the api call
  handleSearchSubmit (e) {
    e.preventDefault();
    queryOmdb(this.state.query).then( data => {
      this.setState({
        query: '',
        movies: data
      });
    });
    this.refs.mySearch.value='';
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.handleSearchSubmit(e)}>
          <input onChange={(e)=>this.updateSearchQuery(e)} ref="mySearch" type='text' placeholder='Search...' />
        </form>
        <Results movies={this.state.movies} />
      </div>
    );
  }
}

export default Search;
