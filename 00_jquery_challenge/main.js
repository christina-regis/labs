console.log('Welcome to the Bank of GA');

var balance = 0;
$('button').on("click", function(){
  console.log('clicked');
  var action = $('input[name=action]:checked', '#fieldset').val();
  console.log(action);
    if (action === 'deposit'){
        balance = parseFloat($('#amount').val()) + balance;
        console.log(balance);
      }
    else if (action === 'withdraw'){
      if($('#amount').val() < balance )
        balance = balance - parseFloat($('#amount').val());
      }
    $('#tb').append('<tr><td>' + $('#amount').val() + '<tr><td>' + action + '<tr><td>' + new Date() + '<tr><td>');
    $('#balance').text(balance);
});
