angular.module('myApp', []);

angular
  .module('myApp')
  .controller('BankController', BankController);

function BankController() {
  var self = this;

  self.transactions = [];
  self.balance = 0;
  self.go = go;
  self.orderBy = function(field) {
    if (self.order === field) {
      self.order = '-' + field;
    } else {
      self.order = field;
    }
  };

  function go() {
    var entry = {
      amount: self.amount,
      action: self.action,
      date: new Date()
    };

    if (entry.action === 'withdraw') {
      if (entry.amount <= self.balance) {
        self.balance -= entry.amount;
        self.transactions.push(entry);
      }
    } else if (entry.action === 'deposit') {
      self.balance += entry.amount;
      self.transactions.push(entry);
    }
  }
}
