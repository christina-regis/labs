var myModule = require('./my-module.js');

//installed as json package
var chalk = require('chalk');
//using chalk package to show hello world in blue in the console
console.log(chalk.bold.bgBlue("Hello World"));

console.log("hello world");
//returns John from my-module.js since name is the key
console.log(myModule.name);
//loop through arr from my-module.js
for (var i = 0; i < myModule.arr.length; i++) {
  console.log(myModule.arr[i]);
}
//calling number function from my-module.js
myModule.getNumber();
