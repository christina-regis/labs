var space = '';
module.exports = function(string, number){
  for (var i = 0; i < number; i++) {
    space = space + ' ' ;
  }
  return(space + string);
};
