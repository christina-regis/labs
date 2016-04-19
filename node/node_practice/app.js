var area = require('./area.js');

var left_pad = require('./left_pad');

var to_party = require('./to_party');

var max = require('./max');

var a = area(3,4);
console.log(a);
//12

var leftPad = left_pad('hello', 5);
console.log(leftPad);
//     hello

var toParty = to_party("It's taco tuesday");
console.log(toParty);
//"IT'S TACO TUESDAY!!!"

max()


