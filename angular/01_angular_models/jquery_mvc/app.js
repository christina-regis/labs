


$('#go').on('click', controller);
$('.amount').on('click', sortAmtController);
$('.action').on('click', sortTypeController);

//gets info from form
function params(){
  return {
    amount: parseInt( $('#amount').val() ),
    type: $('input[name=action]:checked').val()
  }
}

//model
var transactions = [];

//view
function render(){
  var $table = $('#transactions tbody');
  $table.empty();
  transactions.forEach(function( trans ){
    var row = '<tr><td>' + trans.amount + '</td><td>' + trans.type + '</td></tr>'
    $table.append( row )
  });
}

//controller
function controller(event){
  event.preventDefault();

  // get params
  var transaction = params();
  // update Model
  transactions.push( transaction );
  // update View
  render();
}

//controller
function sortAmtController(event) {
  event.preventDefault();
  transactions.sort(function(a, b){
    return a.amount > b.amount;
  });
  render();
}

//controller
function sortTypeController(event) {
  event.preventDefault();
  transactions.sort(function(a, b){
    return a.type > b.type;
  });
  render();
}


