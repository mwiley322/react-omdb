import $ from 'jquery';

export function queryOmdb (query) {
  var searchWord = query.replace(/\s/, '+'); //replace any white space characters with a '+'
  var url = 'http://www.omdbapi.com/?s=' + searchWord;

  //fetch all movies matching the passed-in title as JSON
  return $.getJSON(url).then(function(res) {
    return res['Search'];
  });
}
