angular.module('BankApp')
  .controller('BankController', BankController);

function BankController(){
  var self = this;
  self.amount = 0;
  self.action = '';
  self.current = 5;
  self.date = new Date();
  self.statement = [{amount: 5, action: 'deposit', date: new Date()}];
  self.go = go;

  //to filter
  self.orderByField = '';
  //add bank.orderBy(amount, date, action) into click function in html
  // self.orderBy = function(field){
  //   if (self.order === field){
  //     self.order = '-' + field;
  //   } else {
  //     self.order = field;
  //   }
  // };

  function go(){
    console.log("go function");
    var lineItem = {
      amount: self.amount,
      action: self.action,
      date: self.date
    };
    if (self.amount > self.current && self.action === 'withdrawl'){
     return window.alert("limited funds");
    } else if(self.action === 'withdrawl'){
      self.current = self.current - self.amount;
    } else if(self.action === 'deposit'){
      self.current = self.current + self.amount;
    }

    self.statement.push(lineItem);
    console.log(self.statement);
  }
}
