console.log("working?");
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//      document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
//   };
//   xhttp.open("GET", "http://swapi.co/api/people", true);
//   xhttp.send();
// }

$.ajax({
  url: "http://swapi.co/api/people"
  // context: document.body not needed
  //data is what was returned from the search
}).done(function(data){
  for (var i = 0; i < data.results.length; i++) {
    $(".names").append("<p>" + (data.results[i].name) + "</p>");
  }
});

//different format but same method as above
$.ajax({
  method: "GET",
  url: "http://swapi.co/api/people",
  success: function(data){
    for (var i = 0; i < data.results.length; i++) {
       $(".names").append("<p>" + (data.results[i].name) + "</p>");
    }
  }
});

function searchGiphy(query){
  $.ajax({
    url:'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC ',
    //method: POST
    success: function(data){
     // console.log(data)- check to see that you're getting data
     //data in the first data.data is the same as the data in the function
     $('#results').append('<img src=' + data.data[0].images.fixed_height.url + '>');
    },
    //if there was an error
    error: function(response){
      $('#results').append("there was a problem. :(");
    }
  });
}
$('#searchBtn').click(function(){
  searchGiphy($('#searchBar').val());
  //document.querySelector('#searchBar').value
});
