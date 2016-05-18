console.log('party on');

$('#btn-change').click (function(){
  if($(this).text()==="no way"){
    $(this).text('way');
  } else{
    $(this).text("no way");
  }
});

$('span').click(function(){
  $(this).addClass("hidden");
  $('#input').removeClass("hidden");
});

// does the same thing as the keypress function below when clicked outside of the input box
// $( "#input" ).blur(function() {
//     $('#span').text($('#input').val());
//     $('#input').addClass("hidden");
//     $('#span').removeClass("hidden");
// });

$('.input-name').keypress(function(e){
  var key = e.which;
  if (key == 13){
  $('span').text($('#input').val());
  $('#input').addClass('hidden');
  $('span').removeClass('hidden');
  }
});

$('.extreme-closeup').mousedown(function() {
  this.style.transition = 'transform 1s';
  this.style.transform = 'scale(10)';
})
.mouseup(function() {
  this.style.transform = 'scale(1)';
});
