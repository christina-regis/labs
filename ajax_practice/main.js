console.log("hello from main.js");
movies = [];
$.ajax({
  url: 'http://www.omdbapi.com/?s=captain%20america',
  type: 'GET',
})
.done(function(data) {
  for ( var i = 0; i < data.Search.length; i++) {
    if( data.Search[i].Type === 'movie' && data.Search[i].Year > 2010) {
     movies.push(data.Search[i].Title);
     $('#tb').append('<tr><td><img src="' + data.Search.Poster + '"></td><td>' + data.Search.Title + '</td></tr>');
    }
  }
  $('button').on('click', function(){
    console($('#search').val());
  });
});
