var number = 7;
//only module.exports are taken in the require in app.js
//var number is not available in app.js unless getNumber function is called
module.exports.name = "John";

module.exports.arr = [1, 2, 3];

module.exports.getNumber = function(){
    console.log("Get number called. Returning: ", number);
    return number;
};

console.log("End of my-module.js file");
