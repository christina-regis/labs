var turn = 0;

var board = [
  ['','',''],
var move = function() {
 var ele =document.body.children[0].children[row].children.[col];
 if (ele.textContent)==='') {
  turn = turn + 1;
  if (turn%2===0) {
  ele.textContent = 'O'
 } else {
 ele.textContent = 'X';
    }
  }
};

var reset = function() {
  var ele = document.body.children[0].children;
  for (var i=0; i<ele.length-1; i++){
    for (var j=0; j<ele[i].lenght; j++) {
      ele[i].children[j].textContent = '';
    }
  }
  turn =0;
};
