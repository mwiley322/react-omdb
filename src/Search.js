import React, { Component } from 'react';

class Search extends Component {
  constructor (props) {
    super (props)
    this.state = {
      query: ''
    }
  }
  //this will be the function updating our query state
  updateSearchQuery() {
    let searchQuery = this.refs.mySearch.value;
    this.setState({
      query: searchQuery
    });
  }
//this is where our ajax call to search will go ultimately
  handleSearchSubmit (e) {
    e.preventDefault();
    console.log(this.state.query);
    this.refs.mySearch.value='';
  }
  render() {
    return (
      <form onSubmit={(e)=>this.handleSearchSubmit(e)}>
        <input onChange={(e)=>this.updateSearchQuery(e)} id='searchForm' ref="mySearch" type='text' placeholder='Search...' />
      </form>
    );
  }
}

export default Search;
