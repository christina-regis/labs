//in javascript
/*var divToManipulate = document.getElementById('myDiv');
divToManipulate.innerHTML = 'Goodbye world!';*/

//in jQuery
/*$('#myDiv').html('<h1>Goodbye World!</h1>');

$('#container').html('This is not a container');*/

//in javascript
/*var myDiv = document.getElementById('container');
var newP = document.createElement('p');
newP.innerHTML = 'Hello complicated, multi-step world of adding an element to the DOM';
myDiv.appendChild(newP);*/

//in jQuery
//appends p
/*$('#container').append('<p>');
//puts text in p
$('p').html('Hello simple insertion using jQuery chaining');
//turned the event lister on for a click
$('#myBtn').on('click', function() {
  $('p').toggleClass('red');
});*/


//adds class to p
/*$('p').addClass('red');
//removes class
$('.bold').removeClass('bold');*/

/*var $newP = $('<p>');
$newP.html('This is another P tag!');
$newP.addClass('red');
$('#myDiv').append($newP);

$('#secondBtn').on('click', function() {
  //stops further console log
  event.stopPropagation();
  console.log('you clicked me');
});
$('#container').on('click', function(){
  console.log('yes sir');
});


var containInnerHtml = $('#container').html();
  console.log (containInnerHtml);
//adds image to contain div (using .html replaces everything in div)
$('#container').append('<img src="https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg">');
//removes click me button
$('#secondBtn').remove();*/


$(document).ready(function () {
 //adds li to the ul
  $('#drinks').append('<li>Beer</li>');
  $('#drinks').append('<li>Soda</>');
  $('#foods').append('<li>Sandwich</li>');
  $('#foods').append('<li>Pizza</li>');

//have input added to list when button clicked
  $('#addDrink').on('click', function() {
    var newDrink = $('#drinkInput').val();
    $('#drinks').append('<li>' + newDrink + '</li>');
  });

  $('#addFood').on('click', function() {
    var newFood = $('#foodInput').val();
    $('#foods').append('<li>' + newFood + '</li>');
  });

//event.stopPropagation stops bubbling
//input.val() captures data from an input field
//this refers inside the function (button)
  $('button').mouseover(function() {
    $(this).toggleClass('red');
  });

});









