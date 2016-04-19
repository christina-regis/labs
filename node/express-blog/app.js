var express = require('express');

var app = express();
var postsRouter = require('./routes/posts');
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('<h1>Root Route</h1><p>or as some people like to say root root</p>');
});
//name spacing-puts all the posts that were deleted in the posts.js file it puts back in for the routes
app.use('/posts', postsRouter);

app.listen(port, function(){
  console.log('magic is happening on port ' + port);
});
