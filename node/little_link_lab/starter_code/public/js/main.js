console.log('working?');

$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/links",
  success: function(data){
    for (var i = 0; i <= data.length; i++) {
      $(".short_url").append("<p>" + data[i].shortLink + "</p>" + "Clicks: " + data[i].clicks);
    }
  }
});

$('#searchBtn').click(function(){
  var val =($('#searchBar').val());

  $.ajax({
    method: "POST",
    data: {url: val},
    url: "http://localhost:3000/api/links",
    success: function(data){
      $('.short_url').append("<p>" + data.shortLink + "</p>");
      $('#searchBar').val('');
    }
  });
});


