// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occuracnce items and return the first one.
// Return null if there are no even-occurances

var onlyEven = evenOccurance([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven);



var evenOccurance = function(list) {
  var occurence = {};
  var num =0;
  for (var i = 0; i < list.lenght; i++) {
    //sets key to list i as it loops though
    if (occurence[list[i]]) {
      occurence[list[i]]++;
      } else {
//if number does not exist set equal to 1
        occurence[list[i]] = 1;
      }
    }

    for (var j = 0; j <list.length; i++) {
      if (occurence[list[j]]%2 === 0) {
        return list[j];
        //returns the  number from the array that occurs an even number of times
      }
    }
};

//another way to solve it
var evenOccurance = function(list) {
  var occurence = {};

  for (var i = 0; i < list.length; i++) {
    occurence[list[i]] = !occurence[list[i]];
  }

  for (var j = 0; j < list.length; j++) {
    if(!occurence[list[i]]) return list[i];
  }
}

