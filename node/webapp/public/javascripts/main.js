console.log('hello from main.js');

var socket = io();



var button = document.querySelector('#send-message');
button.addEventListener('click', function(event){

  var input = document.querySelector('#message');

  console.log(input.value);

  socket.emit('sup', {message: input.value});

  input.value= '';
});

socket.on('message-received', function(data){
  console.log(data);


});
