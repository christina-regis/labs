var io = require('socket.io')();

io.on('connection', function(socket){
//greeting must match greeting from main.js
  socket.emit('greeting', 'hello!');

  socket.on('sup', function(data){
    console.log(data);

    io.emit('message-receied', data);
  });

});


module.exports = io;
