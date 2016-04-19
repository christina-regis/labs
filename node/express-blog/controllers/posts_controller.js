var posts = {};

posts.index = function(req, res){
  res.send('INDEX');
};

posts.new = function(req, res){
  res.send('NEW');
};

posts.create = function(req, res){
  res.send('CREATE');
};

posts.show = function(req, res){
  res.send('SHOW');
};

posts.edit = function(req, res){
  res.send('EDIT');
};

posts.update = function(req, res){
  res.send('UPDATE');
};

posts.destroy = function(req, res){
  res.send('DESTROY');
};




module.exports = posts;
