var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var giphyRoutes = require('./routes/giphy');
var code_wars_routes = require('./routes/code_wars');

app.use('/giphy', giphyRoutes);
app.use('/code_wars', code_wars_routes);

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
