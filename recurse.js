// combinations made in a two round game of rock paper scissors
// [rock, rock]
// rock-paper
// rock-scissors

// paper-rock
// paper-scissors
// paper-paper

// scissors-rock
// scissors-paper
// scissors-scissors

var throws = ['rock', 'paper', 'scissor'];
var combinations = [];

var play= function(){
  for (var i = 0; i < throws.length; i++) {
    for (var j = 0; j < throws.length; j++) {
      var array = [throws[i], throws[j]];
      combinations.push(array);
    }
    return combinations;
  }
};

var rockPaperScissors = function(numRounds){
  var throws = ['rock', 'paper', 'scissors'];
  var combinations = [];

  var recurse = function(arr, val){
    if (arr.length === numRounds){
      combinations.push(arr);
    }
    for (var i = 0; i < throws.length; i++) {
      Things[i]
    }
  }
}

var recurse = function(num){
  if(num > 5){
    return;
  }
  recurse(num + 1);
  console.log(num);
};
recurse(0);
