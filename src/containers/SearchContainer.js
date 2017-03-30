// import React, {Component} from 'react';
// import Search from '../components/Search.js';
//
// class SearchContainer extends Component {
//   constructor (props) {
//     super (props)
//     this.state = {
//       query: ''
//     }
//   }
//
//   //this will be the function updating our query state
//   updateSearchQuery() {
//     let searchQuery = this.refs.mySearch.value;
//     this.setState({
//       query: searchQuery
//     });
//   }
//
// //this is where our ajax call to search will go ultimately
//   handleSearchSubmit (e) {
//     e.preventDefault();
//     console.log(this.state.query);
//     this.refs.mySearch.value='';
//   }
//
//   render() {
//     return (
//         <Search
//                handleSearchSubmit={ (e) => this.onSubmit(e) }
//                updateSearchQuery={ (e) => this.onChange(e) }
//                query={this.state.query} />
//     );
//   }
// }
//
// export default SearchContainer;
