console.log('main.js loaded');
var token = '';

$('#submit').click(function(){
  var email = $('#email').val();
  var password = $('#password').val();
  $.ajax({
    url: '/token',
    method: 'POST',
    data: {email: email , password: password}
  })
  .done(function(data){
    token = data.token;
    localStorage.setItem('token', data.token);
    console.log(localStorage.getItem('token'));
  });
});

$('#access').click(function(){
  console.log(token);
  $.ajax({
    url:'/users',
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + token}
  })
  .done(function(data){
    console.log(data);
  });
});


