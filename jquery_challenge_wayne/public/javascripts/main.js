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
