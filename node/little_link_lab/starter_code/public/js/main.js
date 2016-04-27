console.log('working?');

//testing ajax is working
// $.ajax({
//   url: 'api/test',
//   method: "GET",
//   success: function(data){
//     console.log(data);
//   }

// });

// $.ajax({
//   url: 'api/test',
//   method: "POST",
//   data: {message: "POSTing body data with request."},
//   success: function(data){
//     console.log(data);
//   }

// });

$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/links",
  success: function(data){
    for (var i = 0; i <= data.length; i++) {
      $(".short_url").append("<p>" + data[i].shortLink + "</p>");
    }
  }
});

$('body').on('click', '.short_url p', function(){
  console.log($(this).text());
});

function searchUrl(url_value){
  $.ajax({
    method: "POST",
    data: {url: url_value},
    url: "http://localhost:3000/api/links",
    success: function(data){
      for (var i = 0; i <= data.length; i++) {
        $('short_url').append("<p>" + data[i].shortLink + "</p>");
      }
    }

  });
}

$('#searchBtn').click(function(){
  searchUrl($('#searchBar').val());
});

